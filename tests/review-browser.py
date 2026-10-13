"""Run against the built www/ app served on port 8000."""
import json
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
source = "const vm=require('node:vm'),fs=require('node:fs');const c={window:{}};vm.runInNewContext(fs.readFileSync('js/grammar.js','utf8'),c);process.stdout.write(JSON.stringify(c.window.WN_GRAMMAR.cards))"
cards = json.loads(subprocess.check_output(["node", "-e", source], cwd=ROOT))

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path="/usr/bin/chromium", headless=True, args=["--no-sandbox"])
    for width, height in [(375, 667), (1280, 900)]:
        page = browser.new_page(viewport={"width": width, "height": height})
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.goto("http://127.0.0.1:8000", wait_until="networkidle")
        page.get_by_role("button", name="Skip", exact=True).click()
        expect(page.get_by_role("button", name="No mistakes to review", exact=True)).to_be_disabled()
        # An existing user's vocabulary mastery survives grammar tracking.
        page.evaluate("localStorage.setItem('wordnest.progress.v2', JSON.stringify({m:{mdj0:1},days:[]}))")
        page.reload(wait_until="networkidle")
        page.get_by_role("button", name="Negatives & articles ", exact=False).click()
        page.get_by_role("button", name="Quiz", exact=True).click()
        body = page.locator("body").inner_text()
        matched = [c for c in cards if c["deck"] == "rules-negatives" and c["exercise"]["prompt"] in body]
        assert len(matched) == 1
        card = matched[0]
        page.get_by_role("button", name=card["exercise"]["wrong"][0], exact=True).click()
        expect(page.locator(".quiz-explanation")).to_have_text(card["exercise"]["explanation"])
        page.keyboard.press("Escape")
        expect(page.get_by_role("button", name="Review mistakes · 1", exact=True)).to_be_enabled()
        page.reload(wait_until="networkidle")
        assert page.evaluate("JSON.parse(localStorage.getItem('wordnest.progress.v2')).m.mdj0") == 1
        # A mistake made again in review stays queued; it is not duplicated.
        page.get_by_role("button", name="Review mistakes · 1", exact=True).click()
        variant = card["exercise"]["variants"][0]
        expect(page.get_by_text(variant["prompt"], exact=True)).to_be_visible()
        page.get_by_role("button", name=variant["wrong"][0], exact=True).click()
        page.get_by_role("button", name="Continue", exact=True).click()
        expect(page.get_by_text("0 / 1 correct", exact=True)).to_be_visible()
        # Two different, correct reviews are required to clear the rule.
        for exercise in [card["exercise"], variant]:
            page.get_by_role("button", name="Review again · 1", exact=True).click()
            expect(page.get_by_text(exercise["prompt"], exact=True)).to_be_visible()
            page.get_by_role("button", name=exercise["answer"], exact=True).click()
            expect(page.locator(".quiz-explanation")).to_have_text(exercise["explanation"])
            page.wait_for_timeout(1100)
            expect(page.get_by_role("button", name="Continue", exact=True)).to_be_visible()
            page.get_by_role("button", name="Continue", exact=True).click()
        expect(page.get_by_text("All caught up. Your missed rules are cleared.", exact=True)).to_be_visible()
        page.get_by_role("button", name="My collections", exact=True).click()
        page.reload(wait_until="networkidle")
        expect(page.get_by_role("button", name="No mistakes to review", exact=True)).to_be_disabled()
        expect(page.locator(".grammar-accuracy")).to_have_text("50% accuracy · 2/4 correct")
        saved = page.evaluate("JSON.parse(localStorage.getItem('wordnest.grammar.v1'))")
        assert saved["cards"][card["id"]]["pending"] is False
        assert page.evaluate("JSON.parse(localStorage.getItem('wordnest.progress.v2')).m.mdj0") == 1
        assert not errors, errors
        print(f"PASS {width}x{height}: persistent queue, alternate sentences, repeated miss, two correct reviews, empty state, independent accuracy and preserved vocabulary")
        page.close()
    browser.close()
