#!/usr/bin/env python3
"""Fill in a "say" field (easy English-letter respelling) for every card in
vocabulary.json that lacks one, generated from its IPA.

  /bɔ̃ʒuʁ/ -> bohn-ZHOOR    /la ʁeʒjɔ̃/ -> lah ray-ZHYOHN

Syllables are split with hyphens and the last syllable of the phrase is in
capitals (French stresses the end). Hand-edit any card's "say" to refine it;
this script leaves existing ones alone. Run `python3 tools/add_say.py --all`
to regenerate every card, or `--preview` to print without saving.
"""
import json, pathlib, re, sys

VOWELS = {"a", "e", "i", "o", "u", "y", "ø", "œ", "ɑ", "ɒ", "ɔ", "ə", "ɛ"}
GLIDES = {"j", "w", "ɥ"}
LIQUIDS = {"l", "ʁ"}

CONS = {"b": "b", "d": "d", "f": "f", "ɡ": "g", "g": "g", "k": "k", "l": "l", "m": "m",
        "n": "n", "p": "p", "s": "s", "t": "t", "v": "v", "z": "z", "ʃ": "sh", "ʒ": "zh",
        "ʁ": "r", "ɲ": "ny", "ŋ": "ng", "j": "y", "w": "w", "ɥ": "w", "x": "kh"}
# open syllable (ends in the vowel) / closed syllable (consonant after it)
VOW = {"a": ("ah", "a"), "ɑ": ("ah", "ah"), "e": ("ay", "eh"), "ɛ": ("eh", "eh"),
       "i": ("ee", "ee"), "o": ("oh", "oh"), "ɔ": ("oh", "o"), "ɒ": ("oh", "o"),
       "u": ("oo", "oo"), "y": ("ew", "ew"), "ø": ("uh", "uh"), "œ": ("uh", "uh"),
       "ə": ("uh", "uh")}
NASAL = {"ɔ": "ohn", "ɑ": "ahn", "a": "ahn", "ɛ": "an", "œ": "uhn", "o": "ohn", "e": "an"}


def phonemes(word):
    """Split an IPA word into phonemes; nasal vowels carry a trailing ~."""
    out = []
    for ch in word:
        if ch == "̃" and out:
            out[-1] += "~"
        elif ch in "ːˈˌ.‿-'":
            continue
        else:
            out.append(ch)
    # y or u straight before a vowel is a glide (espeak writes ɥ as y)
    for i in range(len(out) - 1):
        if out[i] in ("y", "u", "i") and is_vowel(out[i + 1]):
            out[i] = {"y": "ɥ", "u": "w", "i": "j"}[out[i]]
    return out


def is_vowel(p):
    return p.rstrip("~") in VOWELS


def syllables(ph):
    """Group phonemes into syllables: [onset, vowel, coda] lists."""
    idx = [i for i, p in enumerate(ph) if is_vowel(p)]
    if not idx:
        return [[ph, None, []]]
    sylls, start = [], 0
    for n, v in enumerate(idx):
        if n + 1 < len(idx):
            between = ph[v + 1:idx[n + 1]]
            # glides and obstruent+liquid clusters start the next syllable
            k = len(between)
            while k > 0 and between[k - 1] in GLIDES:
                k -= 1
            if k >= 2 and between[k - 1] in LIQUIDS and between[k - 2] not in LIQUIDS | {"m", "n"}:
                split = k - 2
            elif k >= 1:
                split = k - 1
            else:
                split = 0
            coda = between[:split]
            sylls.append([ph[start:v], ph[v], coda])
            start = v + 1 + split
        else:
            sylls.append([ph[start:v], ph[v], ph[v + 1:]])
    return sylls


def spell(onset, vowel, coda):
    s = "".join(CONS.get(c, c) for c in onset)
    if vowel is None:
        return s
    if vowel.endswith("~"):
        s += NASAL.get(vowel[0], "ahn")
    else:
        s += VOW[vowel][1 if coda else 0]
    # -ille after i is just "ee" (fille -> FEE)
    if coda[:1] == ["j"] and vowel == "i":
        coda = coda[1:]
    return s + "".join(CONS.get(c, c) for c in coda)


def respell(ipa):
    text = re.sub(r"\([a-z]+\)", "", ipa.strip().strip("/")).strip()
    words = [phonemes(w) for w in text.split()]
    # enchaînement/liaison: a final consonant runs into a following vowel
    # (a lone one, or a liaison z/t/n after another consonant: ils‿étaient)
    for i in range(len(words) - 1):
        a, b = words[i], words[i + 1]
        if len(a) > 1 and b and is_vowel(b[0]) and not is_vowel(a[-1]) and (is_vowel(a[-2]) or a[-1] in "ztn"):
            b.insert(0, a.pop())
    out = []
    for wi, ph in enumerate(words):
        parts = []
        for onset, vowel, coda in syllables(ph):
            tail = ""
            # word-final obstruent + r/l (attendre, fièvre) reads best as its own bit
            if wi == len(words) - 1 and len(coda) >= 2 and coda[-1] in LIQUIDS and coda[-2] not in LIQUIDS:
                tail = "".join(CONS[c] for c in coda[-2:])
                coda = coda[:-2]
            parts.append([spell(onset, vowel, coda), tail])
        out.append(parts)
    if out and out[-1]:
        out[-1][-1][0] = out[-1][-1][0].upper()
    return " ".join("-".join(p for s in parts for p in s if p) for parts in out)


if __name__ == "__main__":
    path = pathlib.Path(__file__).resolve().parent.parent / "vocabulary.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    force, preview = "--all" in sys.argv, "--preview" in sys.argv
    changed = 0
    for card in data["cards"]:
        if card.get("ipa") and (force or preview or not card.get("say")):
            say = respell(card["ipa"])
            if preview:
                print(f"{card['fr']:<28} {card['ipa']:<24} {say}")
            elif card.get("say") != say:
                card["say"] = say
                changed += 1
    if not preview:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"added say to {changed} cards")
