# Wordnest

*Un peu de français* — a minimal, offline flashcard app for learning beginner French.

![Wordnest](wordnest.png)

## What it is

Wordnest is a single-page spaced-repetition flashcard app. Each session serves a
small daily batch of French words and phrases; you flip each card to see the
English meaning and an example sentence, then swipe (or click) to mark it as
still-learning or mastered. It tracks a day streak and session progress, and
can read cards aloud in French.

It runs entirely in the browser with no server, no build tooling, and no
network access required — every dependency ships in the repo.

## Features

- **Flip cards** — tap/click a card to reveal the English meaning and an example
  sentence in both languages.
- **Swipe to grade** — swipe (or drag) left to keep a word in the learning pile,
  right to mark it mastered. Mastered cards are meant to resurface on a longer
  interval (3 days, then a week, then a month).
- **Undo** — step back through the last few grades in a session.
- **Text-to-speech** — hear any card's French word read aloud (via the
  browser's built-in `speechSynthesis`, using a French voice when available).
- **Daily streak & weekly view** — a day-streak counter and a 7-day strip
  showing which days you've kept it up.
- **Guided first run** — a 4-step tutorial coach walks new users through
  tapping, swiping, and listening before the first real session.
- **Session progress** — a pip/dot tracker shows how far through today's batch
  you are.
- **Configurable session** — three simple options control behavior:
  - `dailyGoal` — how many cards make up a session (4–20, default 12)
  - `startScreen` — start on the tutorial or straight on the home screen
  - `quietMode` — hides the learning/mastered counters and streak note

## Project structure

```
index.html            the app (generated — see "Editing" below)
index.template.html   HTML shell + markup (source of truth)
css/app.css           global styles and animations
js/app.js             card deck + app logic (source of truth)
js/dc-runtime.js      the templating/rendering engine that powers the UI
js/react.production.min.js, js/react-dom.production.min.js
                       React, used by the rendering engine
vocabulary.json        a larger 803-card French vocabulary dataset
                       (19 categories — see below), not yet wired into
                       the app's card deck
wordnest.png           app icon / preview image
build.py               regenerates index.html from the template + app.js
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

The app's logic lives in `js/app.js` (the card deck and the `Component`
class) and its styles in `css/app.css` — edit those directly. `index.html`
is a generated file: the rendering engine requires the app's script to be
inlined in the page, so after changing `js/app.js` run:

```bash
python3 build.py
```

to regenerate `index.html`. Changes to `css/app.css` take effect immediately
since it's linked normally and don't need a rebuild.

## Vocabulary data

`vocabulary.json` is a separate, larger French vocabulary set (fr-CA,
beginner level, 803 cards across 19 categories — greetings, food, numbers,
être/avoir conjugations, and more). The app currently ships with a small
12-card sample deck hardcoded in `js/app.js`; `vocabulary.json` is available
as a dataset to expand the deck from, but isn't loaded by the app yet.

## Tech notes

- No CDN links, no external fonts, no analytics, no network calls at
  runtime — everything the app needs is a local file.
- The UI is built with a small custom templating engine (`js/dc-runtime.js`)
  on top of React, using inline `{{ }}` bindings, `sc-if`/`sc-for`
  directives, and a small component class in `js/app.js` rather than JSX.
