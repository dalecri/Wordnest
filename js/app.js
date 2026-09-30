const DECK = [
  {fr:"Bonjour", en:"Hello", type:"greeting", ipa:"/bɔ̃.ʒuʁ/", say:"bohn-ZHOOR", ex:"Bonjour, comment allez-vous ?", exEn:"Hello, how are you?", p:["#f5aa84","#ff7256","#0b310c","#3c7918","#ffe0bd"]},
  {fr:"La mer", en:"The sea", type:"noun", g:"f", un:"une mer", pl:"les mers", rule:"+s", ipa:"/la mɛʁ/", say:"lah MEHR", trap:{k:"es", t:"Spanish flips it: el mar is masculine."}, ex:"On va à la mer cet été.", exEn:"We're going to the sea this summer.", p:["#7fd3e8","#1c7fa6","#062334","#0e4f6b","#c8f3ff"]},
  {fr:"Merci", en:"Thank you", type:"courtesy", ipa:"/mɛʁ.si/", say:"mehr-SEE", ex:"Merci pour votre aide.", exEn:"Thank you for your help.", p:["#83f8b4","#11b6ab","#00336c","#0062a2","#c9ffc8"]},
  {fr:"Le journal", en:"The newspaper", type:"noun", g:"m", un:"un journal", pl:"les journaux", rule:"-al → -aux", ipa:"/lə ʒuʁ.nal/", say:"luh zhoor-NAL", ex:"Je lis le journal le matin.", exEn:"I read the newspaper in the morning.", p:["#e8d9b0","#a88a4a","#2b2112","#5e4a25","#fff1c9"]},
  {fr:"J'ai faim", en:"I'm hungry", type:"literally: I have hunger", ipa:"/ʒe fɛ̃/", say:"zhay FAN (nasal)", trap:{k:"es", t:"Like tengo hambre: French uses avoir, not être."}, ex:"J'ai faim. On mange ?", exEn:"I'm hungry. Shall we eat?", p:["#f4a0b8","#de0759","#36051e","#790937","#f6c3f0"]},
  {fr:"Le lait", en:"Milk", type:"noun", g:"m", un:"du lait", pl:"", rule:"", ipa:"/lə lɛ/", say:"luh LEH", trap:{k:"es", t:"Spanish flips it: la leche is feminine."}, ex:"Un café au lait, s'il vous plaît.", exEn:"A coffee with milk, please.", p:["#f3e9d6","#c9b48f","#3a2c1c","#7a6242","#fff6e6"]},
  {fr:"À gauche", en:"To the left", type:"direction", ipa:"/a ɡoʃ/", say:"ah GOHSH", ex:"La gare est à gauche.", exEn:"The station is on the left.", p:["#428bff","#005ff1","#0b1016","#1c3026","#80daff"]},
  {fr:"La couleur", en:"The colour", type:"noun", g:"f", un:"une couleur", pl:"les couleurs", rule:"+s", ipa:"/la ku.lœʁ/", say:"lah koo-LUHR", trap:{k:"es", t:"Spanish flips it: el color is masculine."}, ex:"Quelle est ta couleur préférée ?", exEn:"What's your favourite colour?", p:["#ffb3e1","#c443a8","#2a0b2e","#6d1f73","#ffe0a8"]},
  {fr:"Je voudrais…", en:"I would like…", type:"polite request", ipa:"/ʒə vu.dʁɛ/", say:"zhuh voo-DREH", ex:"Je voudrais un thé.", exEn:"I would like a tea.", p:["#ffc987","#f3933b","#58201d","#a43c2e","#ffe8a7"]},
  {fr:"Fier / fière", en:"Proud", type:"adjective", adj:["fier","fière","fiers","fières"], ipa:"/fjɛʁ/", say:"FYEHR (both forms)", note:"Same sound, different spelling.", ex:"Elle est fière de son travail.", exEn:"She's proud of her work.", p:["#ffd27a","#e2861b","#3d1a05","#8a3f0e","#fff0c2"]},
  {fr:"L'addition", en:"The bill", type:"noun", g:"f", un:"une addition", pl:"les additions", rule:"+s", ipa:"/la.di.sjɔ̃/", say:"lah-dee-SYOHN", trap:{k:"faux", t:"At a restaurant it's the bill (la cuenta), not just maths."}, ex:"L'addition, s'il vous plaît.", exEn:"The bill, please.", p:["#db8bf0","#7455de","#18082b","#34205c","#ffa48d"]},
  {fr:"Le bateau", en:"The boat", type:"noun", g:"m", un:"un bateau", pl:"les bateaux", rule:"-eau → -eaux", ipa:"/lə ba.to/", say:"luh bah-TOH", ex:"Le bateau part à midi.", exEn:"The boat leaves at noon.", p:["#9ad0ff","#3b6fd6","#0b1638","#223f8a","#dff1ff"]},
  {fr:"Il fait beau", en:"The weather is nice", type:"weather", ipa:"/il fɛ bo/", say:"eel feh BOH", trap:{k:"es", t:"Like hace buen tiempo: faire, not être."}, ex:"Il fait beau aujourd'hui.", exEn:"The weather is nice today.", p:["#b8f1de","#43cbb6","#003f43","#07695b","#e7f5bb"]},
  {fr:"La dent", en:"The tooth", type:"noun", g:"f", un:"une dent", pl:"les dents", rule:"+s", ipa:"/la dɑ̃/", say:"lah DAHN", trap:{k:"es", t:"Spanish flips it: el diente is masculine."}, ex:"J'ai mal à une dent.", exEn:"I have a toothache.", p:["#e6e1f5","#9c93c9","#221c3a","#4d4577","#fbf8ff"]},
  {fr:"Demain", en:"Tomorrow", type:"time", ipa:"/də.mɛ̃/", say:"duh-MAN (nasal)", ex:"À demain !", exEn:"See you tomorrow!", p:["#e9f3a0","#b8c165","#253c11","#427044","#ffecd2"]},
  {fr:"Attendre", en:"To wait", type:"verb", aux:"avoir", pp:"attendu", fut:"attendr-", ipa:"/a.tɑ̃dʁ/", say:"ah-TAHN-dr", trap:{k:"faux", t:"Means esperar, not atender. To attend is assister à."}, ex:"J'attends le bus depuis vingt minutes.", exEn:"I've been waiting for the bus for twenty minutes.", p:["#b6e3c3","#4f9a6f","#0f2a1b","#2a5c3f","#e9ffe0"]},
  {fr:"Je comprends", en:"I understand", type:"verb · comprendre", aux:"avoir", pp:"compris", fut:"comprendr-", ipa:"/ʒə kɔ̃.pʁɑ̃/", say:"zhuh kohm-PRAHN", ex:"Oui, je comprends.", exEn:"Yes, I understand.", p:["#a2b2cb","#8b83af","#1e2435","#42465d","#e4e1cf"]},
  {fr:"D'accord", en:"Okay / Agreed", type:"everyday phrase", ipa:"/da.kɔʁ/", say:"dah-KOR", ex:"D'accord, à demain.", exEn:"Okay, see you tomorrow.", p:["#ffbbb3","#e67588","#592047","#8b295d","#fff1ce"]},
  {fr:"La réunion", en:"The meeting", type:"noun", g:"f", un:"une réunion", pl:"les réunions", rule:"+s", ipa:"/la ʁe.y.njɔ̃/", say:"lah ray-ew-NYOHN", ex:"La réunion commence à neuf heures.", exEn:"The meeting starts at nine.", p:["#ff5735","#e6070c","#100313","#4d0024","#ffb778"]},
  {fr:"Bonne journée", en:"Have a good day", type:"farewell", g:"f", un:"une journée", note:"bonne agrees with journée (f).", ipa:"/bɔn ʒuʁ.ne/", say:"bun zhoor-NAY", ex:"Merci, bonne journée !", exEn:"Thank you, have a good day!", p:["#54053a","#8d0028","#0b0414","#270317","#f04431"]}
];

const G = { m:{ label:"masculin", dot:"#cbd4a6" }, f:{ label:"féminin", dot:"#f2c98a" } };

function artFor(p){
  return "radial-gradient(70% 55% at 22% 14%, " + p[4] + "cc 0%, " + p[4] + "00 62%)," +
         "radial-gradient(62% 48% at 78% 86%, " + p[2] + "e6 0%, " + p[2] + "00 70%)," +
         "radial-gradient(52% 44% at 46% 52%, " + p[3] + " 0%, " + p[3] + "00 78%)," +
         "radial-gradient(38% 32% at 44% 50%, " + p[0] + "cc 0%, " + p[0] + "00 80%)," +
         p[1];
}
function lum(hex){
  const n = parseInt(hex.slice(1,7),16), ch = [n>>16&255, n>>8&255, n&255].map(v => { v/=255; return v<=.03928 ? v/12.92 : Math.pow((v+.055)/1.055,2.4); });
  return .2126*ch[0] + .7152*ch[1] + .0722*ch[2];
}
// how bright the art is behind the word; brighter cards get a stronger halo so white text always reads
function brightness(p){ return .45*lum(p[0]) + .35*lum(p[3]) + .2*lum(p[1]); }
function shuffled(n){
  const a = Array.from({length:n}, (_,i) => i);
  for(let i=n-1;i>0;i--){ const k = Math.floor(Math.random()*(i+1)); [a[i],a[k]] = [a[k],a[i]]; }
  return a;
}
function fitSize(text){ const longest = Math.max(...text.split(/\s+/).map(w => w.length)); return Math.max(34, Math.min(58, Math.floor(290 / (longest * .6)))) + "px"; }
function norm(s){ return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""); }
// split the example so the word being learned can be highlighted (matches on a short stem so "attendre" finds "attends")
function highlight(d){
  const ex = d.ex, words = d.fr.replace(/…/g,"").split(/[\s/']+/).filter(w => w.length > 1);
  const key = norm(words[words.length - 1] || "").slice(0, 5), n = norm(ex);
  const at = key ? n.indexOf(key) : -1;
  if(at < 0) return { pre: ex, hit: "", post: "" };
  let s = at, e = at + key.length;
  while(s > 0 && /[\p{L}]/u.test(ex[s-1])) s--;
  while(e < ex.length && /[\p{L}]/u.test(ex[e])) e++;
  return { pre: ex.slice(0, s), hit: ex.slice(s, e), post: ex.slice(e) };
}
const IDENTITY = DECK.map((_,i) => i);

class Component extends DCLogic {
  constructor(props){
    super(props);
    const goal = Math.max(4, Math.min(20, this.props.dailyGoal ?? 12));
    this.state = {
      screen: "study", mode: "today", order: IDENTITY, idx: 0, size: goal, goal,
      revealed: false, done: 0, history: [], dx: 0, dy: 0, axis: "", fly: 0,
      learning: 18, mastered: 42, streak: 5, stats: false, menu: false, showEx: true, flip: 0
    };
    this.drag = null;
  }

  card(){ const o = this.state.order; return DECK[o[this.state.idx % o.length]]; }

  say(word){
    const text = word.replace(/…/g,"").trim();
    if(!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "fr-CA"; u.rate = .82;
    const v = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith("fr"));
    if(v) u.voice = v;
    speechSynthesis.speak(u);
  }
  speak = (e) => { if(e) e.stopPropagation(); this.say(this.card().fr); };

  rate(got){
    if(this.state.fly) return;
    this.setState({ fly: got ? 1 : -1, axis: "" });
    setTimeout(() => this.setState(s => {
      const done = s.done + 1, finished = done >= s.size;
      return {
        fly: 0, dx: 0, dy: 0, revealed: false, flip: 1 - s.flip,
        history: [{ idx: s.idx, done: s.done, learning: s.learning, mastered: s.mastered }, ...s.history].slice(0,5),
        idx: s.idx + 1, done,
        learning: got ? s.learning : s.learning + 1,
        mastered: got ? s.mastered + 1 : s.mastered,
        screen: finished ? "done" : "study",
        streak: finished && s.mode === "today" ? s.streak + 1 : s.streak
      };
    }), 280);
  }

  undo = () => this.setState(s => {
    if(!s.history.length) return null;
    const [h, ...rest] = s.history;
    return { ...h, history: rest, revealed: false, screen: "study", flip: 1 - s.flip };
  });

  start(mode){
    this.setState(s => ({
      screen: "study", mode, idx: 0, done: 0, history: [], revealed: false, dx: 0, dy: 0, flip: 1 - s.flip,
      order: mode === "shuffle" ? shuffled(DECK.length) : IDENTITY,
      size: mode === "shuffle" ? DECK.length : s.goal
    }));
  }
  pickToday = () => { if(this.state.mode !== "today" || this.state.screen === "done") this.start("today"); };
  pickShuffle = () => { if(this.state.mode !== "shuffle" || this.state.screen === "done") this.start("shuffle"); };
  shuffleAgain = () => this.start("shuffle");
  toggleMenu = () => this.setState(s => ({ menu: !s.menu }));
  closeMenu = () => this.setState({ menu: false });
  pickTodayM = () => { this.setState({ menu: false }); this.start("today"); };
  pickShuffleM = () => { this.setState({ menu: false }); this.start("shuffle"); };
  toggleEx = () => this.setState(s => ({ showEx: !s.showEx }));
  reveal = () => this.setState(s => ({ revealed: !s.revealed }));
  again = () => this.rate(false);
  gotIt = () => this.rate(true);
  openStats = () => this.setState({ stats: true });
  closeStats = () => this.setState({ stats: false });

  // gestures: tap flips the card, swipe down hides/shows the example (up shows it), left = again, right = got it
  onDown = (e) => {
    if(this.state.fly || e.target.closest("button")) return;
    this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY, axis: "" };
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch(err) {}
  };
  onMove = (e) => {
    const d = this.drag; if(!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    if(!d.axis){
      if(Math.max(Math.abs(dx), Math.abs(dy)) < 10) return;
      d.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      this.setState({ axis: d.axis });
    }
    if(d.axis === "x") this.setState({ dx }); else this.setState({ dy });
  };
  onUp = (e) => {
    const d = this.drag; if(!d || d.id !== e.pointerId) return;
    this.drag = null;
    const { dx, dy, revealed } = this.state;
    if(d.axis === "x" && Math.abs(dx) > 80) return this.rate(dx > 0);
    if(d.axis === "y" && dy > 50) return this.setState(s => ({ showEx: !s.showEx, dy: 0, axis: "" }));
    if(d.axis === "y" && dy < -50) return this.setState({ showEx: true, dy: 0, axis: "" });
    if(!d.axis) return this.setState({ revealed: !revealed });
    this.setState({ dx: 0, dy: 0, axis: "" });
  };

  renderVals(){
    const s = this.state, d = this.card();
    const vertical = s.axis === "y";
    let p = s.revealed ? 1 : 0;
    if(vertical) p = s.revealed ? Math.max(0, Math.min(1, 1 + s.dy / 140)) : Math.max(0, Math.min(1, s.dy / 140));
    const x = s.fly ? s.fly * 520 : s.dx;
    const tilt = Math.max(-18, Math.min(18, x * .04));
    const halo = Math.min(.75, .28 + brightness(d.p) * .9);
    const ease = "cubic-bezier(.2,.8,.3,1)";
    const days = ["M","T","W","T","F","S","S"];
    const week = days.map((label,i) => {
      const done = i < 5, today = i === 5;
      return { label, fill: done ? "#24261f" : "#1a1a1d", ring: today ? "#cbd4a6" : "#ffffff0d",
               dot: done ? "#cbd4a6" : (today ? "#cbd4a666" : "#2e2e34") };
    });
    return {
      ...(() => { const h = highlight(d); return { exPre: h.pre, exHit: h.hit, exPost: h.post }; })(),
      hitColor: d.p[4], gotBg: d.p[4], gotFg: "#141414",
      back1: artFor(DECK[s.order[(s.idx + 1) % s.order.length]].p), back2: artFor(DECK[s.order[(s.idx + 2) % s.order.length]].p),
      exMax: s.showEx ? "200px" : "0px", exOp: s.showEx ? 1 : 0, exY: s.showEx ? "0" : "-10px", exHidden: !s.showEx, toggleEx: this.toggleEx,
      faceT: "rotateY(" + (s.revealed ? 180 : 0) + "deg)", enSize: fitSize(d.en),
      modeLabel: s.mode === "shuffle" ? "Shuffle" : "Today",
      menuOp: s.menu ? 1 : 0, menuY: s.menu ? "0" : "-6px", menuPE: s.menu ? "auto" : "none",
      toggleMenu: this.toggleMenu, closeMenu: this.closeMenu, pickTodayM: this.pickTodayM, pickShuffleM: this.pickShuffleM,
      reveal: this.reveal, again: this.again, gotIt: this.gotIt,
      isStudy: s.screen === "study", isDone: s.screen === "done",
      todayBg: s.mode === "today" ? "#eeeae6" : "transparent", todayFg: s.mode === "today" ? "#1b1b1e" : "#8d8d95",
      shuffleBg: s.mode === "shuffle" ? "#eeeae6" : "transparent", shuffleFg: s.mode === "shuffle" ? "#1b1b1e" : "#8d8d95",
      goal: s.goal, deckSize: DECK.length, streak: s.streak,
      count: Math.min(s.done + 1, s.size) + " / " + s.size, pct: Math.round(100 * Math.min(s.done, s.size) / s.size) + "%",
      undoOp: s.history.length ? 1 : .3,
      art: artFor(d.p), glow: d.p[2],
      word: d.fr, wordSize: fitSize(d.fr),
      wordShadow: "0 1px 2px rgba(0,0,0," + (halo*.9).toFixed(2) + "), 0 6px 28px rgba(0,0,0," + halo.toFixed(2) + ")",
      ipa: d.ipa || "", hasGender: !!d.g, gender: d.g ? G[d.g].label : "", gDot: d.g ? G[d.g].dot : "transparent",
      meaning: d.en, example: d.ex,
      cardMove: "translate3d(" + x + "px," + (s.fly ? -60 : 0) + "px,0) rotate(" + tilt + "deg)",
      cardT: (s.axis === "x") ? "none" : "transform .32s " + (s.fly ? "cubic-bezier(.4,0,1,1)" : ease) + ", opacity .28s",
      cardOp: s.fly ? 0 : 1,
      wordY: "translateY(" + (-p * 70) + "px)", panelY: "translateY(" + ((1 - p) * 115) + "%)", panelOp: p, hintOp: 1 - p,
      liveT: vertical ? "none" : "transform .4s " + ease + ", opacity .35s",
      againOp: s.dx < -12 ? Math.min(1, -s.dx / 80) : 0, gotOp: s.dx > 12 ? Math.min(1, s.dx / 80) : 0,
      enter: s.flip ? "wn-inA" : "wn-inB",
      doneTitle: s.mode === "shuffle" ? "Whole deck, done." : "Petit à petit.",
      doneKicker: s.mode === "shuffle" ? "shuffle complete" : "à demain",
      doneLine: s.mode === "shuffle" ? s.done + " cards shuffled through. Streak unchanged." : s.done + " cards today. Streak kept alive.",
      week, weekLine: "5 of 7 days this week",
      mastered: s.mastered, learning: s.learning, masteredPct: Math.round(100 * s.mastered / (s.mastered + s.learning)) + "%",
      sheetY: s.stats ? "0" : "105%", sheetBg: s.stats ? "#00000080" : "#00000000", sheetPE: s.stats ? "auto" : "none",
      speak: this.speak, undo: this.undo,
      pickToday: this.pickToday, pickShuffle: this.pickShuffle, shuffleAgain: this.shuffleAgain,
      openStats: this.openStats, closeStats: this.closeStats,
      onDown: this.onDown, onMove: this.onMove, onUp: this.onUp
    };
  }
}
