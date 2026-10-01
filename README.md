# WordNest

*Un peu de français*: a minimal, offline flashcard app for learning beginner French.

![WordNest](wordnest.png)

## What it is

WordNest is a single-page flashcard app. You pick a collection of words
(food, verbs, numbers…), then work through a short session of cards: tap to
flip between French and English, swipe right when you know it, left to keep
practising. Progress and your day streak are saved on the device.

It runs entirely in the browser with no server, no build tooling at runtime,
and no network access: every dependency, font and word ships in the repo.

## Features

- **Collections home**: 20 colour-coded collections (a hand-picked "Daily picks"
  mix plus the 19 vocabulary categories), each showing its word count and how
  much of it you've mastered. "Shuffle all" serves 20 random cards from
  everything.
- **Cards**: the French word with its gender or word type, IPA pronunciation
  and a speaker button (browser `speechSynthesis`, French voice when
  available). Tap to flip to the English.
- **Word in use**: an example sentence under the card with the word
  highlighted. Swipe down on the card to show it, up to hide it.
- **Swipe to grade**: right = got it (mastered), left = again. Buttons do the
  same. Undo steps back through the last few grades.
- **Sessions**: 12 cards per collection session, unmastered cards first.
  Progress shows as a row of dashes under the buttons.
- **Streak**: finishing a session counts the day. The streak chip opens a
  sheet with the current and best streak, this week's days and overall
  mastery.
- **Saved progress**: mastered cards and practice days are kept in
  `localStorage` on this device.

## Project structure

```
index.html            the app (generated, see "Editing")
index.template.html   HTML shell + markup (source of truth)
css/app.css           global styles, animations and @font-face rules
js/app.js             collections, curated deck and app logic (source of truth)
js/deck.js            vocabulary.json as a script (generated)
js/dc-runtime.js      the templating/rendering engine that powers the UI
js/react*.min.js      React, used by the rendering engine
fonts/                Space Grotesk (SIL OFL, see SpaceGrotesk-OFL.txt)
vocabulary.json       803 French cards in 19 categories, with IPA and examples
tools/add_ipa.py      fills in missing IPA with espeak-ng
wordnest.png          app icon / preview image
build.py              regenerates index.html and js/deck.js
```

## Running it

No install, no server required:

```bash
open index.html
```

or serve it locally:

```bash
python3 -m http.server
# then open http://localhost:8000
```

## Editing

Edit `js/app.js`, `index.template.html`, `css/app.css` and `vocabulary.json`
directly. The rendering engine needs the app's script inlined in the page,
and the vocabulary is shipped as a plain script so it works from `file://`,
so after changing the JS, template or vocabulary run:

```bash
python3 build.py
```

Changes to `css/app.css` take effect immediately and don't need a rebuild.

## Vocabulary data

`vocabulary.json` holds 803 beginner cards (fr-CA) across 19 categories:
greetings, food, body, places, verbs, numbers, être/avoir forms and more.
Every card has an English meaning, an example sentence (`ex` / `exEn`) and an
IPA pronunciation. The IPA was generated with espeak-ng
(`python3 tools/add_ipa.py`) and is a good approximation of standard French;
hand-edit any card to refine it and the script will leave it alone. Card IDs
are stable, so saved progress survives edits.

## Tech notes

- No CDN links, no external fonts, no analytics, no network calls at
  runtime: everything the app needs is a local file.
- The UI is built with a small custom templating engine (`js/dc-runtime.js`)
  on top of React, using inline `{{ }}` bindings, `sc-if`/`sc-for`
  directives, and a small component class in `js/app.js` rather than JSX.
- Drags and slide animations write `transform`/`opacity` straight to the DOM
  inside `requestAnimationFrame`, so gestures stay smooth on phones.
