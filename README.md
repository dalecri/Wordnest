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

- **Onboarding**: four quick, skippable questions on first launch: why you're
  learning (reorders the collections and pins a "Start here"), how much French
  you know (anything above "brand new" runs a 10-card swipe check that
  pre-masters words you know and teaches the gestures), cards per day (5, 12
  or 20) and Quebec or France French (sets the speech voice). It ends in your
  recommended collection. Preferences → Redo setup in the streak sheet runs it
  again without touching progress.
- **Collections home**: 20 colour-coded collections (a hand-picked "Daily picks"
  mix plus the 19 vocabulary categories), each showing its word count and how
  much of it you've mastered. "Shuffle all" serves 20 random cards from
  everything.
- **Cards**: the French word with its gender or word type, an easy
  pronunciation respelling (e.g. bohn-ZHOOR) and a speaker button (browser `speechSynthesis`, French voice when
  available). Tap to flip to the English.
- **Word in use**: an example sentence under the card with the word
  highlighted. Swipe down on the card to show it, up to hide it.
- **Swipe to grade**: right = got it (mastered), left = again. Buttons do the
  same. Undo steps back through the last few grades.
- **Sessions**: your daily goal (5, 12 or 20 cards) per collection session,
  unmastered cards first. Quebec-specific words carry a small QC tag.
  Daily picks and Shuffle all leave mastered words out entirely.
  Progress shows as a row of dashes under the buttons.
- **Quiz mode**: a Cards / Quiz switch in every collection. A quiz is 10
  questions mixing four formats: gender (le or la), fill the blank in the
  example sentence, build the sentence from word tiles, and meaning (multiple
  choice, French to English or back). Wrong answers in multiple choice skip
  words with the same meaning. Right answers mark the word mastered, misses
  send it back to learning.
- **Streak**: finishing a session counts the day. The streak chip opens a
  sheet with the current and best streak, this week's days and overall
  mastery.
- **Desktop**: from 900px wide the home page becomes a grid of collection
  tiles, study screens get a centred column and the streak sheet a centred
  panel. Keyboard: ← again, → got it, space flip, ↓/↑ show or hide the
  example, S speak, Z undo; in quizzes 1–4 answer, Enter checks or continues,
  Backspace removes the last tile; Esc goes back.
- **Saved progress**: mastered cards, practice days and preferences are kept
  in `localStorage` on this device.

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
tools/add_say.py      fills in missing pronunciation respellings from the IPA
wordnest.png          Wn tile: README preview and favicon for privacy/support pages
privacy.html          privacy policy (App Store / Play listing URL)
support.html          support page with FAQ and contact (App Store support URL)
build.py              regenerates index.html and js/deck.js
capacitor.config.json Capacitor settings (app ID, webDir www/)
scripts/copy-web.mjs  copies the app into www/ for Capacitor
assets/               source images for app icons and splash screens
android/, ios/        native Capacitor projects
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

## Mobile app (Capacitor)

WordNest is wrapped with [Capacitor](https://capacitorjs.com) 8 for Android
and iOS. The native projects live in `android/` and `ios/`; `www/` is a build
output (git-ignored) that Capacitor copies into them.

```bash
npm install
npm run build          # build.py + copy the app into www/
npm run android        # sync, then open in Android Studio
npm run ios            # sync, then open in Xcode (macOS)
npm run run:android    # sync and launch on a connected device/emulator
```

- `scripts/copy-web.mjs` copies the app into `www/` and adds the Capacitor
  runtime (`js/capacitor.js`) there only, so the browser `index.html` is
  unchanged.
- Pronunciation uses the native text-to-speech plugin
  (`@capacitor-community/text-to-speech`) in the app, because Android's
  WebView has no `speechSynthesis`. In a browser it still uses
  `speechSynthesis`.
- App icons and splash screens (the "Wn" tile from onboarding) are generated
  from `assets/` (icon-only, icon-foreground/background, splash) with
  `npx @capacitor/assets generate --android --ios`.
- App ID: `com.twostorytails.wordnest` (in `capacitor.config.json`).

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
hand-edit any card to refine it and the script will leave it alone.

The app shows each card's `say` field instead of the IPA: an English-letter
respelling such as `bohn-ZHOOR`, with the stressed (last) syllable in
capitals. It's generated from the IPA by `python3 tools/add_say.py`, which
likewise leaves hand-edited ones alone (`--preview` prints without saving). Card IDs
are stable, so saved progress survives edits.

## Tech notes

- No CDN links, no external fonts, no analytics, no network calls at
  runtime: everything the app needs is a local file.
- The UI is built with a small custom templating engine (`js/dc-runtime.js`)
  on top of React, using inline `{{ }}` bindings, `sc-if`/`sc-for`
  directives, and a small component class in `js/app.js` rather than JSX.
- Drags and slide animations write `transform`/`opacity` straight to the DOM
  inside `requestAnimationFrame`, so gestures stay smooth on phones.
