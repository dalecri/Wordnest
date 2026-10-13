// Kept separate from vocabulary mastery: only actual quiz answers count.
window.WN_RULE_PRACTICE = (() => {
  const key = "wordnest.grammar.v1";
  const empty = () => ({ cards: {} });
  function load(){
    try {
      const saved = JSON.parse(localStorage.getItem(key)), cards = {};
      for(const card of window.WN_GRAMMAR.cards){
        const s = saved && saved.cards && saved.cards[card.id];
        if(!s || !Number.isSafeInteger(s.attempts) || s.attempts < 0 ||
          !Number.isSafeInteger(s.correct) || s.correct < 0 || s.correct > s.attempts) continue;
        cards[card.id] = { attempts: s.attempts, correct: s.correct, pending: s.pending === true,
          reviewWins: s.reviewWins === 1 ? 1 : 0,
          lastVariant: Number.isSafeInteger(s.lastVariant) && s.lastVariant >= 0 ? s.lastVariant : 0,
          lastReviewVariant: Number.isSafeInteger(s.lastReviewVariant) && s.lastReviewVariant >= 0 ? s.lastReviewVariant :
            Number.isSafeInteger(s.lastVariant) && s.lastVariant >= 0 ? s.lastVariant : 0,
          lastSeen: Number.isFinite(s.lastSeen) ? s.lastSeen : 0 };
      }
      return { cards };
    } catch(e){ return empty(); }
  }
  function save(stats){ try { localStorage.setItem(key, JSON.stringify(stats)); } catch(e) {} }
  function record(stats, id, variant, ok, review, now = Date.now()){
    const old = stats.cards[id] || { attempts: 0, correct: 0, pending: false, reviewWins: 0 };
    // Two correct, distinct reviews clear a missed rule. Reading a flashcard
    // or getting the same sentence right again does not clear the queue.
    const distinct = variant !== (old.reviewWins ? old.lastReviewVariant : old.lastVariant);
    const wins = !ok ? 0 : review && old.pending && distinct ? old.reviewWins + 1 : old.reviewWins;
    return { cards: { ...stats.cards, [id]: {
      attempts: old.attempts + 1, correct: old.correct + (ok ? 1 : 0),
      pending: !ok || (old.pending && wins < 2), reviewWins: wins >= 2 ? 0 : wins,
      lastVariant: variant, lastReviewVariant: !ok || review ? variant : old.lastReviewVariant, lastSeen: now
    } } };
  }
  function queue(stats, cards){
    return cards.filter(c => stats.cards[c.id] && stats.cards[c.id].pending)
      .sort((a, b) => stats.cards[a.id].lastSeen - stats.cards[b.id].lastSeen);
  }
  function nextVariant(stats, card){
    const count = 1 + (card.exercise.variants || []).length;
    const s = stats.cards[card.id];
    return s ? ((s.reviewWins ? s.lastReviewVariant : s.lastVariant) + 1) % count : 0;
  }
  function accuracy(stats, cards){
    return cards.reduce((total, c) => {
      const s = stats.cards[c.id];
      if(s){ total.attempts += s.attempts; total.correct += s.correct; }
      return total;
    }, { attempts: 0, correct: 0 });
  }
  return { empty, load, save, record, queue, nextVariant, accuracy };
})();
