const CURATED = [
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

// ---------- collections ----------
// collection names; each card on the home page also shows a sample French word as a chip
const COLLECTIONS = [
  { id: "mdj",          name: "Daily picks" },
  { id: "basics",       name: "First words" },
  { id: "daily",        name: "Everyday life" },
  { id: "out",          name: "Out & about" },
  { id: "work",         name: "At work" },
  { id: "people",       name: "People & family" },
  { id: "home",         name: "Home" },
  { id: "food",         name: "Food & drink" },
  { id: "body",         name: "Body & health" },
  { id: "clothes",      name: "Clothes" },
  { id: "places",       name: "Places & travel" },
  { id: "nature",       name: "Nature & weather" },
  { id: "time",         name: "Time & calendar" },
  { id: "adjectives",   name: "Adjectives & colours" },
  { id: "adverbs",      name: "Adverbs" },
  { id: "verbs",        name: "Everyday verbs" },
  { id: "grammar",      name: "Small words" },
  { id: "workwords",    name: "Work & study" },
  { id: "numbers",      name: "Numbers" },
  { id: "conjugations", name: "Être & avoir" }
];
const SWATCHES = ["#cdb4f5","#dff07a","#4b5fd6","#f2683a","#8fe0c0","#f5a3c7","#8cc8f5","#f6d873","#ff8a7a","#b9d39b","#a993f0","#7fd1d8"];
const SESSION = 12;

const G = { m:{ label:"masculin", ink:"#4f7a3a" }, f:{ label:"féminin", ink:"#c0662a" } };

// ---------- colour helpers ----------
function hexToRgb(h){ const n = parseInt(h.slice(1,7),16); return [n>>16&255, n>>8&255, n&255]; }
function lum(hex){
  const ch = hexToRgb(hex).map(v => { v/=255; return v<=.03928 ? v/12.92 : Math.pow((v+.055)/1.055,2.4); });
  return .2126*ch[0] + .7152*ch[1] + .0722*ch[2];
}
function mix(a, b, t){ const x = hexToRgb(a), y = hexToRgb(b); return "#" + x.map((v,i) => Math.round(v + (y[i]-v)*t).toString(16).padStart(2,"0")).join(""); }
// lift a colour toward white until it's light enough for dark text on top
function lighten(c, minLum){ let t = 0, out = c; while(lum(out) < minLum && t < .95){ t += .08; out = mix(c, "#ffffff", t); } return out; }
function toHsl(hex){
  let [r,g,b] = hexToRgb(hex).map(v => v/255); const mx = Math.max(r,g,b), mn = Math.min(r,g,b), l = (mx+mn)/2;
  if(mx === mn) return [0,0,l];
  const d = mx-mn, s = l > .5 ? d/(2-mx-mn) : d/(mx+mn);
  const h = mx === r ? (g-b)/d + (g<b?6:0) : mx === g ? (b-r)/d + 2 : (r-g)/d + 4;
  return [h*60, s, l];
}
function hsl(h, s, l){
  const k = n => (n + h/30) % 12, a = s * Math.min(l, 1-l);
  const f = n => l - a * Math.max(-1, Math.min(k(n)-3, 9-k(n), 1));
  return "#" + [f(0),f(8),f(4)].map(v => Math.round(v*255).toString(16).padStart(2,"0")).join("");
}
// a five-stop palette (same shape as the hand-made CURATED ones) drifting around a collection's colour
function paletteFor(hex, i){
  const [h0, s0] = toHsl(hex), h = (h0 + ((i*47) % 36) - 18 + 360) % 360, s = Math.max(.5, s0);
  return [hsl(h,s,.68), hsl(h,s,.52), hsl(h,s*.8,.16), hsl(h,s*.75,.30), hsl((h+20)%360,s,.86)];
}
// pastel card surface: pale top-left, richer bottom-right
function paperFor(p){
  const top = lighten(mix(p[4], "#ffffff", .45), .78), bot = lighten(p[0], .42);
  return "linear-gradient(155deg, " + top + " 0%, " + mix(top, bot, .45) + " 48%, " + bot + " 100%)";
}
function artFor(p){
  return "radial-gradient(70% 55% at 22% 14%, " + p[4] + "cc 0%, " + p[4] + "00 62%)," +
         "radial-gradient(62% 48% at 78% 86%, " + p[2] + "e6 0%, " + p[2] + "00 70%)," +
         "radial-gradient(52% 44% at 46% 52%, " + p[3] + " 0%, " + p[3] + "00 78%)," + p[1];
}

// ---------- card helpers ----------
function genderOf(type){ return /^masculine noun/.test(type) ? "m" : /^feminine noun/.test(type) ? "f" : ""; }
function kindLabel(d){
  const t = d.type || "";
  if(d.g) return d.g === "f" ? "Feminine noun" : "Masculine noun";
  if(/^pronoun/.test(t)) return "Small word";
  if(/^plural noun/.test(t)) return "Plural noun";
  if(/noun/.test(t)) return "Noun";
  if(/^adjective/.test(t)) return "Adjective";
  if(/^adverb/.test(t)) return "Adverb";
  if(/^(être|avoir)/.test(t)) return "Conjugation";
  if(/^verb/.test(t) || d.aux) return "Verb";
  if(/^number/.test(t)) return "Number";
  return "Expression";
}
function shuffle(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){ const k = Math.floor(Math.random()*(i+1)); [a[i],a[k]] = [a[k],a[i]]; } return a; }
function fitSize(text){ const longest = Math.max(...text.split(/\s+/).map(w => w.length)); return Math.max(30, Math.min(56, Math.floor(290 / (longest * .6)))) + "px"; }
function norm(s){ return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""); }
// split the example so the word being learned can be highlighted (matches on a short stem so "attendre" finds "attends")
function highlight(d){
  const ex = d.ex || "", words = d.fr.replace(/…/g,"").split(/[\s/']+/).filter(w => w.length > 1);
  const key = norm(words[words.length - 1] || "").slice(0, 5), n = norm(ex);
  const at = key ? n.indexOf(key) : -1;
  if(at < 0) return { pre: ex, hit: "", post: "" };
  let s = at, e = at + key.length;
  while(s > 0 && /[\p{L}]/u.test(ex[s-1])) s--;
  while(e < ex.length && /[\p{L}]/u.test(ex[e])) e++;
  return { pre: ex.slice(0, s), hit: ex.slice(s, e), post: ex.slice(e) };
}

// ---------- data ----------
const VOCAB = window.WN_VOCAB || { categories: [], cards: [] };
const CARDS = {};   // collection id -> cards
COLLECTIONS.forEach((c, ci) => { c.color = SWATCHES[ci % SWATCHES.length]; CARDS[c.id] = []; });
CURATED.forEach((d, i) => CARDS.mdj.push({ ...d, id: "mdj" + i, deck: "mdj" }));
VOCAB.cards.forEach(d => {
  const list = CARDS[d.deck]; if(!list) return;
  const coll = COLLECTIONS.find(c => c.id === d.deck);
  list.push({ ...d, g: genderOf(d.type), p: paletteFor(coll.color, list.length) });
});
const ALL = [].concat(...COLLECTIONS.map(c => CARDS[c.id]));

// ---------- saved progress (this device only) ----------
const STORE = "wordnest.progress.v2";
function loadProgress(){ try { const p = JSON.parse(localStorage.getItem(STORE)); if(p && p.m && p.days) return p; } catch(e) {} return { m: {}, days: [] }; }
function saveProgress(p){ try { localStorage.setItem(STORE, JSON.stringify(p)); } catch(e) {} }
function dayKey(d){ return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0"); }
function addDays(d, n){ const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function streakOf(days){
  const set = new Set(days); let d = new Date(), n = 0;
  if(!set.has(dayKey(d))) d = addDays(d, -1);
  while(set.has(dayKey(d))){ n++; d = addDays(d, -1); }
  return n;
}
function bestOf(days){
  const sorted = [...new Set(days)].sort(); let best = 0, run = 0, prev = null;
  sorted.forEach(k => { const d = new Date(k + "T12:00"); run = prev && dayKey(addDays(prev, 1)) === k ? run + 1 : 1; best = Math.max(best, run); prev = d; });
  return best;
}

class Component extends DCLogic {
  constructor(props){
    super(props);
    this.state = {
      screen: "home", coll: "mdj", session: [], idx: 0, done: 0, history: [],
      revealed: false, showEx: true, stats: false, confirmReset: false, flip: 0, prog: loadProgress()
    };
    this.cardRef = React.createRef(); this.panelRef = React.createRef(); this.btnRef = React.createRef();
    this.noRef = React.createRef(); this.yesRef = React.createRef();
    this.drag = null; this.flying = false; this.raf = 0;
  }
  componentDidMount(){ this.syncPanel(); }
  componentDidUpdate(){ this.syncPanel(); }
  // the runtime doesn't pass previous state, so remember what was last applied to the panel
  syncPanel(){
    const key = this.state.showEx + "|" + this.state.screen;
    if(key === this.lastPanel) return;
    const same = this.lastScreen === this.state.screen;
    this.lastPanel = key; this.lastScreen = this.state.screen;
    this.placePanel(this.state.showEx ? 1 : 0, same);
  }

  card(){ return this.state.session[this.state.idx] || ALL[0]; }

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

  // ---- sessions ----
  open(id){
    const m = this.state.prog.m;
    let pool;
    if(id === "all") pool = shuffle(ALL).slice(0, 20);
    else {
      const cards = CARDS[id];
      pool = shuffle(cards.filter(c => !m[c.id])).concat(shuffle(cards.filter(c => m[c.id]))).slice(0, SESSION);
    }
    this.setState(s => ({ screen: "study", coll: id, session: pool, idx: 0, done: 0, history: [], revealed: false, flip: 1 - s.flip, stats: false }));
  }
  shuffleAll = () => this.open("all");
  again12 = () => this.open(this.state.coll);
  goHome = () => this.setState({ screen: "home", revealed: false });

  // ---- direct-to-DOM motion: drags and slides only touch transform/opacity, no re-render per frame ----
  placePanel(p, animate){
    const panel = this.panelRef.current, btn = this.btnRef.current;
    if(!panel) return;
    const h = panel.offsetHeight + 12, y = -(1 - p) * h;
    const t = animate ? "transform .45s cubic-bezier(.22,1,.36,1), opacity .35s cubic-bezier(.22,1,.36,1)" : "none";
    panel.style.transition = t; panel.style.transform = "translate3d(0," + y + "px,0)"; panel.style.opacity = p;
    if(btn){ btn.style.transition = t; btn.style.transform = "translate3d(0," + y + "px,0)"; }
  }
  moveCard(dx){
    const el = this.cardRef.current; if(!el) return;
    el.style.transition = "none";
    el.style.transform = "translate3d(" + dx + "px,0,0) rotate(" + Math.max(-16, Math.min(16, dx * .045)) + "deg)";
    const a = Math.min(1, Math.max(0, (Math.abs(dx) - 12) / 70));
    if(this.noRef.current) this.noRef.current.style.opacity = dx < 0 ? a : 0;
    if(this.yesRef.current) this.yesRef.current.style.opacity = dx > 0 ? a : 0;
  }
  resetCard(animate){
    const el = this.cardRef.current; if(!el) return;
    el.style.transition = animate ? "transform .45s cubic-bezier(.22,1,.36,1)" : "none";
    el.style.transform = "translate3d(0,0,0)"; el.style.opacity = 1;
    if(this.noRef.current) this.noRef.current.style.opacity = 0;
    if(this.yesRef.current) this.yesRef.current.style.opacity = 0;
  }

  rate(got){
    if(this.flying || this.state.screen !== "study") return;
    this.flying = true;
    const el = this.cardRef.current;
    if(el){
      el.style.transition = "transform .3s cubic-bezier(.5,0,.75,0), opacity .3s";
      el.style.transform = "translate3d(" + (got ? 560 : -560) + "px,-30px,0) rotate(" + (got ? 18 : -18) + "deg)";
      el.style.opacity = 0;
    }
    setTimeout(() => this.setState(s => {
      const card = s.session[s.idx], m = { ...s.prog.m }, had = !!m[card.id];
      if(got) m[card.id] = 1; else delete m[card.id];
      const done = s.done + 1, finished = done >= s.session.length;
      const days = finished && !s.prog.days.includes(dayKey(new Date())) ? s.prog.days.concat(dayKey(new Date())).slice(-400) : s.prog.days;
      const prog = { m, days };
      saveProgress(prog);
      return {
        prog, revealed: false, flip: 1 - s.flip,
        history: [{ idx: s.idx, done: s.done, id: card.id, had }, ...s.history].slice(0,5),
        idx: finished ? s.idx : s.idx + 1, done,
        screen: finished ? "done" : "study"
      };
    }, () => { this.resetCard(false); this.flying = false; }), 300);
  }
  again = () => this.rate(false);
  gotIt = () => this.rate(true);

  undo = () => this.setState(s => {
    if(!s.history.length) return null;
    const [h, ...rest] = s.history, m = { ...s.prog.m };
    if(h.had) m[h.id] = 1; else delete m[h.id];
    const prog = { ...s.prog, m }; saveProgress(prog);
    return { idx: h.idx, done: h.done, prog, history: rest, revealed: false, screen: "study", flip: 1 - s.flip };
  });

  openStats = () => this.setState({ stats: true });
  closeStats = () => { clearTimeout(this.resetTimer); this.setState({ stats: false, confirmReset: false }); };
  // two taps: the first arms it for a few seconds, the second wipes mastered words (streak days are kept)
  resetMastered = () => {
    clearTimeout(this.resetTimer);
    if(!this.state.confirmReset){
      this.setState({ confirmReset: true });
      this.resetTimer = setTimeout(() => this.setState({ confirmReset: false }), 3500);
      return;
    }
    this.setState(s => { const prog = { ...s.prog, m: {} }; saveProgress(prog); return { prog, confirmReset: false, history: [] }; });
  };

  // gestures: tap flips, drag down shows the example, drag up hides it, left = again, right = got it
  onDown = (e) => {
    if(this.flying || e.target.closest("button")) return;
    this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY, axis: "", dx: 0, dy: 0 };
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch(err) {}
  };
  onMove = (e) => {
    const d = this.drag; if(!d || d.id !== e.pointerId) return;
    d.dx = e.clientX - d.x; d.dy = e.clientY - d.y;
    if(!d.axis){
      if(Math.max(Math.abs(d.dx), Math.abs(d.dy)) < 8) return;
      d.axis = Math.abs(d.dx) > Math.abs(d.dy) ? "x" : "y";
    }
    if(this.raf) return;
    this.raf = requestAnimationFrame(() => {
      this.raf = 0;
      const g = this.drag; if(!g) return;
      if(g.axis === "x") this.moveCard(g.dx);
      else {
        const h = (this.panelRef.current ? this.panelRef.current.offsetHeight : 100) + 12;
        this.placePanel(Math.max(0, Math.min(1, (this.state.showEx ? 1 : 0) + g.dy / h)), false);
      }
    });
  };
  onUp = (e) => {
    const d = this.drag; if(!d || d.id !== e.pointerId) return;
    this.drag = null;
    if(this.raf){ cancelAnimationFrame(this.raf); this.raf = 0; }
    if(d.axis === "x"){ if(Math.abs(d.dx) > 80) this.rate(d.dx > 0); else this.resetCard(true); return; }
    if(d.axis === "y"){
      const show = d.dy > 36 ? true : d.dy < -36 ? false : this.state.showEx;
      this.placePanel(show ? 1 : 0, true);
      if(show !== this.state.showEx) this.setState({ showEx: show });
      return;
    }
    this.setState(s => ({ revealed: !s.revealed }));
  };

  renderVals(){
    const s = this.state, m = s.prog.m;
    const masteredIn = list => list.filter(c => m[c.id]).length;

    // home: overlapping collection cards
    const colls = COLLECTIONS.map((c, i) => {
      const list = CARDS[c.id], dark = lum(c.color) < .25;
      return {
        title: c.name, en: list[0] ? list[0].fr : "", count: list.length + " words",
        pct: Math.round(100 * masteredIn(list) / Math.max(1, list.length)) + "%",
        bg: c.color, fg: dark ? "#ffffff" : "#141414", line: dark ? "#ffffff80" : "#14141459",
        arrowBg: dark ? "#ffffff" : "#141414", arrowFg: dark ? "#141414" : c.color,
        z: i + 1, top: i ? "-30px" : "0", delay: (i * 28) + "ms",
        open: () => this.open(c.id)
      };
    });
    const totalM = masteredIn(ALL);

    // study
    const d = this.card(), h = highlight(d), sess = s.session, n = sess.length || 1;
    const nxt = k => sess.length ? sess[(s.idx + k) % sess.length] : d;
    const coll = COLLECTIONS.find(c => c.id === s.coll);
    const days = s.prog.days, today = new Date(), mon = addDays(today, -((today.getDay() + 6) % 7));
    const week = ["M","T","W","T","F","S","S"].map((label, i) => {
      const k = dayKey(addDays(mon, i)), done = days.includes(k), isToday = k === dayKey(today);
      return { label, done, fill: done ? "#24261f" : "#1a1a1d", ring: isToday ? "#cbd4a6" : "#ffffff0d",
               dot: done ? "#cbd4a6" : (isToday ? "#cbd4a666" : "#2e2e34") };
    });
    const streak = streakOf(days), best = Math.max(streak, bestOf(days));

    return {
      isHome: s.screen === "home", isStudy: s.screen === "study", isDone: s.screen === "done",
      colls, shuffleAll: this.shuffleAll, totalLine: totalM + " / " + ALL.length + " words mastered",
      collTitle: s.coll === "all" ? "All cards" : (coll ? coll.name : ""),
      cardRef: this.cardRef, panelRef: this.panelRef, btnRef: this.btnRef, noRef: this.noRef, yesRef: this.yesRef,
      paper: paperFor(d.p), back1: paperFor(nxt(1).p), back2: paperFor(nxt(2).p), art: artFor(d.p),
      kind: kindLabel(d), kindDot: d.g ? G[d.g].ink : "#1d1b1840",
      badgeBg: (() => { let c = d.p[3]; if(lum(c) > .12) c = mix(d.p[3], d.p[2], .55); return c; })(),
      word: d.fr, wordSize: fitSize(d.fr), meaning: d.en, enSize: fitSize(d.en), ipa: d.ipa || "",
      footMeta: s.showEx ? "tap to flip" : "tap to flip · swipe down for example",
      faceT: "rotateY(" + (s.revealed ? 180 : 0) + "deg)", enter: s.flip ? "wn-inA" : "wn-inB",
      exPre: h.pre, exHit: h.hit, exPost: h.post, hitColor: lighten(d.p[4], .55),
      gotBg: lighten(d.p[4], .6), gotFg: "#141414",
      count: Math.min(s.done + 1, n) + " of " + n,
      dashes: Array.from({length: n}, (_,i) => ({ bg: i < s.done ? "#eeeae7" : (i === s.done ? lighten(d.p[4], .55) : "#ffffff1c"), grow: i === s.done ? 2 : 1 })),
      dashMax: Math.min(300, n * 17) + "px",
      undoOp: s.history.length ? 1 : .3,
      doneTitle: s.coll === "all" ? "All done." : "Nice work.",
      doneKicker: s.coll === "all" ? "All cards" : (coll ? coll.name : ""),
      doneLine: s.done + " cards practised. Streak: " + streak + (streak === 1 ? " day." : " days."),
      againLabel: s.coll === "all" ? "Another 20 at random" : "Another " + Math.min(SESSION, (CARDS[s.coll] || []).length),
      week, weekLine: week.filter(w => w.done).length + " / 7 days this week",
      streak, bestLine: "best: " + best + (best === 1 ? " day" : " days"),
      mastered: totalM, learning: ALL.length - totalM, masteredPct: Math.round(100 * totalM / ALL.length) + "%",
      sheetY: s.stats ? "0" : "105%", sheetBg: s.stats ? "#00000080" : "#00000000", sheetPE: s.stats ? "auto" : "none",
      speak: this.speak, undo: this.undo, again: this.again, gotIt: this.gotIt,
      resetLabel: s.confirmReset ? "Tap again to reset all " + totalM + " mastered words" : "Reset mastered words",
      resetBg: s.confirmReset ? "#3a1416" : "transparent", resetFg: s.confirmReset ? "#ff9a9f" : "#9a9aa2",
      resetBorder: s.confirmReset ? "#f16b7366" : "#ffffff14", hasMastered: totalM > 0, resetMastered: this.resetMastered,
      goHome: this.goHome, again12: this.again12, openStats: this.openStats, closeStats: this.closeStats,
      onDown: this.onDown, onMove: this.onMove, onUp: this.onUp
    };
  }
}
