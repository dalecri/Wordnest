#!/usr/bin/env python3
"""Fill in an "ipa" field for every card in vocabulary.json that lacks one.

Uses espeak-ng (apt install espeak-ng). The output is a good approximation of
standard French; hand-edit any card whose pronunciation you want to refine and
this script will leave it alone on the next run.
"""
import json, pathlib, re, subprocess

path = pathlib.Path(__file__).resolve().parent.parent / "vocabulary.json"
data = json.loads(path.read_text(encoding="utf-8"))

def ipa(text):
    text = text.replace("…", "").strip()
    out = subprocess.run(["espeak-ng", "-v", "fr", "--ipa", "-q", text],
                         capture_output=True, text=True, check=True).stdout
    out = re.sub(r"[ˈˌ\-]", "", out)
    out = re.sub(r"\s+", " ", out).strip()
    return "/" + out + "/"

changed = 0
for card in data["cards"]:
    if not card.get("ipa"):
        card["ipa"] = ipa(card["fr"])
        changed += 1

path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"added ipa to {changed} cards")
