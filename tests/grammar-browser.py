import json, subprocess
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
from playwright.sync_api import sync_playwright, expect
source = "const vm=require('node:vm'),fs=require('node:fs');const c={window:{}};vm.runInNewContext(fs.readFileSync('js/grammar.js','utf8'),c);process.stdout.write(JSON.stringify(c.window.WN_GRAMMAR))"
data=json.loads(subprocess.check_output(['node','-e',source],cwd=ROOT))
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    for width,height in [(390,844),(1280,900),(375,667)]:
        page=browser.new_page(viewport={'width':width,'height':height})
        errors=[]
        page.on('pageerror',lambda e: errors.append(str(e)))
        page.goto('http://127.0.0.1:8000',wait_until='networkidle')
        page.get_by_role('button',name='Skip',exact=True).click()
        for coll in data['collections']:
            page.get_by_role('button',name=coll['name']+' ',exact=False).click()
            page.get_by_role('button',name='Cards',exact=True).click()
            expect(page.get_by_role('heading',level=3)).to_be_visible()
            expect(page.get_by_role('button',name='The rule',exact=True)).to_have_attribute('aria-pressed','true')
            page.get_by_role('button',name='Example',exact=True).click()
            expect(page.locator('.example-translation')).not_to_be_empty()
            page.get_by_role('button',name='Hide example & rule ↑',exact=True).click()
            expect(page.locator('#example-rule-panel')).to_have_attribute('aria-hidden','true')
            page.get_by_role('button',name='Show example & rule ↓',exact=True).click()
            page.get_by_role('button',name='The rule',exact=True).click()
            page.keyboard.press('ArrowUp')
            expect(page.locator('#example-rule-panel')).to_have_attribute('aria-hidden','true')
            page.keyboard.press('ArrowDown')
            expect(page.locator('#example-rule-panel')).to_have_attribute('aria-hidden','false')
            card_box=page.locator('div[style*="touch-action: none"]').bounding_box()
            x=card_box['x']+card_box['width']/2; y=card_box['y']+card_box['height']/2
            page.mouse.move(x,y); page.mouse.down(); page.mouse.move(x,y-85,steps=10); page.mouse.up()
            expect(page.locator('#example-rule-panel')).to_have_attribute('aria-hidden','true')
            page.mouse.move(x,y); page.mouse.down(); page.mouse.move(x,y+85,steps=10); page.mouse.up()
            expect(page.locator('#example-rule-panel')).to_have_attribute('aria-hidden','false')
            page.get_by_role('button',name='Quiz',exact=True).click()
            # Match every randomized prompt to its authored answer. First miss
            # checks explanation/retry persistence; remaining answers are correct.
            for i in range(min(10,len([c for c in data['cards'] if c['deck']==coll['id']]))):
                body=page.locator('body').inner_text()
                cards=[c for c in data['cards'] if c['deck']==coll['id'] and c['exercise']['prompt'] in body]
                assert len(cards)==1,(coll['id'],body)
                card=cards[0]; exercise=card['exercise']
                answer=exercise['wrong'][0] if i==0 else exercise['answer']
                page.get_by_role('button',name=answer,exact=True).click()
                expect(page.locator('.quiz-explanation')).to_have_text(exercise['explanation'])
                assert page.evaluate('(id)=>!!JSON.parse(localStorage.getItem("wordnest.progress.v2")).m[id]',card['id'])==(i!=0)
                expect(page.get_by_text('Not quite' if i==0 else 'Correct!',exact=True)).to_be_visible()
                # Rule exercises must not disappear on a timer while reading.
                if i==1: page.wait_for_timeout(1100); expect(page.locator('.quiz-explanation')).to_have_text(exercise['explanation'])
                page.get_by_role('button',name='Continue',exact=True).click()
            expect(page.get_by_text(f"{min(10,len([c for c in data['cards'] if c['deck']==coll['id']]))-1} / {min(10,len([c for c in data['cards'] if c['deck']==coll['id']]))} correct",exact=True)).to_be_visible()
            page.keyboard.press('Escape')
        assert not errors,errors
        print(f'PASS {width}x{height}: five collections, examples/rules, show/hide controls, keyboard panel, correct/incorrect explanations, complete quizzes and score')
        page.close()
    browser.close()
