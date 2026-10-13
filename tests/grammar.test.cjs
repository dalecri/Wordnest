const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const root = path.join(__dirname, "..");
const context = vm.createContext({ window: {}, DCLogic: class {} });
for (const file of ["js/deck.js", "js/grammar.js", "js/grammar-review.js", "js/app.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
}
vm.runInContext("globalThis.api = { GRAMMAR, CARDS, makeQuiz, makeRuleQuestion, ruleFor, PRACTICE }", context);
const { GRAMMAR, CARDS, makeQuiz, makeRuleQuestion, ruleFor, PRACTICE } = context.api;

test("each grammar collection has unique cards and complete worked exercises", () => {
  const ids = new Set();
  for (const collection of GRAMMAR.collections) {
    assert.ok(CARDS[collection.id].length >= 5);
    for (const card of CARDS[collection.id]) {
      assert.ok(!ids.has(card.id), card.id);
      ids.add(card.id);
      assert.ok(ruleFor(card)?.rows.length >= 4);
      assert.ok(card.ex && card.exEn && card.exercise.explanation);
      assert.equal(new Set([card.exercise.answer, ...card.exercise.wrong]).size, 4);
      assert.ok(card.exercise.variants.length);
      for(const v of card.exercise.variants){
        assert.notEqual(v.prompt, card.exercise.prompt);
        assert.notEqual(v.ex, card.ex);
        assert.ok(v.exEn && v.explanation);
        assert.equal(new Set([v.answer, ...v.wrong]).size, 4);
      }
    }
  }
});

test("grammar quizzes exercise forms, with one correct answer and an explanation", () => {
  for (const collection of GRAMMAR.collections) {
    const cards = CARDS[collection.id];
    const quiz = makeQuiz(cards, cards);
    assert.equal(quiz.length, cards.length);
    for (const q of quiz) {
      assert.equal(q.kind, "rule");
      assert.equal(q.options.filter(o => o.ok).length, 1);
      assert.equal(q.options.find(o => o.ok).t, q.card.exercise.answer);
      assert.equal(q.explanation, q.card.exercise.explanation);
      assert.equal(q.reveal, q.card.ex);
    }
  }
});

test("ordinary vocabulary gets relevant rules without becoming a grammar exercise", () => {
  assert.equal(ruleFor({ fr: "Le marché", ex: "Je vais au marché." }), GRAMMAR.rules.a);
  assert.equal(ruleFor({ fr: "Le marché", ex: "Je viens du marché." }), GRAMMAR.rules.de);
  assert.equal(ruleFor({ fr: "le pain", ex: "Je mange du pain." }), GRAMMAR.rules.quantity);
  assert.equal(ruleFor({ fr: "Tu viens ?", ex: "Tu viens ?" }), GRAMMAR.rules.questions);
  assert.equal(ruleFor({ fr: "Demain", ex: "Aujourd’hui, demain." }), null);
  assert.equal(ruleFor({ fr: "dessiner", ex: "Je dessine." }), null);
  assert.equal(ruleFor({ fr: "petit", type: "adjective" }), GRAMMAR.rules.agreement);
  assert.equal(ruleFor({ fr: "parler", type: "verb" }), GRAMMAR.rules.verbs);
  assert.equal(ruleFor({ fr: "Bonjour" }), null);
  const quiz = makeQuiz(CARDS.basics, CARDS.basics);
  assert.ok(quiz.every(q => q.kind !== "rule"));
});


test("review rotates sentence contexts and requires two distinct correct reviews", () => {
  const card = CARDS["rules-negatives"][0];
  let stats = PRACTICE.record(PRACTICE.empty(), card.id, 0, false, false, 1);
  assert.equal(PRACTICE.queue(stats, [card]).length, 1);
  assert.equal(PRACTICE.nextVariant(stats, card), 1);
  const q = makeRuleQuestion(card, 1);
  assert.notEqual(q.prompt, card.exercise.prompt);
  assert.equal(q.reveal, card.exercise.variants[0].ex);
  // A normal quiz success does not clear a missed rule.
  stats = PRACTICE.record(stats, card.id, 0, true, false, 2);
  assert.equal(stats.cards[card.id].pending, true);
  stats = PRACTICE.record(stats, card.id, 1, true, true, 3);
  assert.equal(stats.cards[card.id].reviewWins, 1);
  stats = PRACTICE.record(stats, card.id, 0, true, false, 3);
  assert.equal(PRACTICE.nextVariant(stats, card), 0);
  // Repeating the same context cannot count as the second review.
  stats = PRACTICE.record(stats, card.id, 1, true, true, 4);
  assert.equal(stats.cards[card.id].pending, true);
  stats = PRACTICE.record(stats, card.id, 0, true, true, 5);
  assert.equal(PRACTICE.queue(stats, [card]).length, 0);
  assert.equal(stats.cards[card.id].correct, 5);
  assert.equal(stats.cards[card.id].attempts, 6);
});

test("a missed review resets clearance progress and queue visits oldest first", () => {
  const [a, b] = CARDS["rules-prepositions"];
  let stats = PRACTICE.record(PRACTICE.empty(), a.id, 0, false, false, 1);
  stats = PRACTICE.record(stats, b.id, 0, false, false, 2);
  stats = PRACTICE.record(stats, a.id, 1, true, true, 3);
  assert.equal(PRACTICE.queue(stats, [a, b])[0].id, b.id);
  stats = PRACTICE.record(stats, a.id, 0, false, true, 4);
  assert.equal(stats.cards[a.id].reviewWins, 0);
  assert.equal(stats.cards[a.id].pending, true);
  assert.equal(PRACTICE.accuracy(stats, [a, b]).attempts, 4);
  assert.equal(PRACTICE.accuracy(stats, [a, b]).correct, 1);
});

test("grammar persistence tolerates corrupt storage without touching vocabulary", () => {
  const values = new Map([["wordnest.progress.v2", '{"m":{"old":1},"days":[]}']]);
  context.localStorage = { getItem: k => values.get(k), setItem: (k, v) => values.set(k, v) };
  values.set("wordnest.grammar.v1", "broken");
  assert.equal(Object.keys(PRACTICE.load().cards).length, 0);
  const id = CARDS["rules-a"][0].id;
  const stats = PRACTICE.record(PRACTICE.empty(), id, 0, false, false, 1);
  PRACTICE.save(stats);
  assert.equal(PRACTICE.load().cards[id].pending, true);
  assert.equal(values.get("wordnest.progress.v2"), '{"m":{"old":1},"days":[]}');
  values.set("wordnest.grammar.v1", JSON.stringify({ cards: { [id]: { attempts: 1, correct: 2, pending: true } } }));
  assert.equal(Object.keys(PRACTICE.load().cards).length, 0);
});
