const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const root = path.join(__dirname, "..");
const context = vm.createContext({ window: {}, DCLogic: class {} });
for (const file of ["js/deck.js", "js/grammar.js", "js/app.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
}
vm.runInContext("globalThis.api = { GRAMMAR, CARDS, makeQuiz, ruleFor }", context);
const { GRAMMAR, CARDS, makeQuiz, ruleFor } = context.api;

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
