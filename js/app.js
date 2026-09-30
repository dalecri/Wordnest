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

function gramChips(d){
  const out = [];
  if(d.g){ out.push({ t: d.un, dot: G[d.g].dot }); if(d.pl) out.push({ t: "pl. " + d.pl + (d.rule ? "  ·  " + d.rule : ""), dot: "" }); }
  if(d.adj){ out.push({ t: "m. " + d.adj[0], dot: G.m.dot }, { t: "f. " + d.adj[1], dot: G.f.dot }, { t: "pl. " + d.adj[2] + " / " + d.adj[3], dot: "" }); }
  if(d.aux){ out.push({ t: "aux. " + d.aux, dot: "" }, { t: "p.p. " + d.pp, dot: "" }, { t: "futur " + d.fut, dot: "" }); }
  return out.map(c => ({ ...c, show: c.dot ? "block" : "none" }));
}

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
// brightness behind the word: the centre blobs of the card art sit on top of the base colour
function brightness(p){ return .45*lum(p[0]) + .35*lum(p[3]) + .2*lum(p[1]); }
function isLight(p){ return brightness(p) > .5; }
function shuffled(n){
  const a = Array.from({length:n}, (_,i) => i);
  for(let i=n-1;i>0;i--){ const k = Math.floor(Math.random()*(i+1)); [a[i],a[k]] = [a[k],a[i]]; }
  return a;
}
function wordOfDay(){ const d = new Date(), start = new Date(d.getFullYear(),0,0); return DECK[Math.floor((d - start) / 864e5) % DECK.length]; }
function fitSize(text){ const longest = Math.max(...text.split(/\s+/).map(w => w.length)); return Math.max(34, Math.min(58, Math.floor(300 / (longest * .6)))) + "px"; }
const IDENTITY = DECK.map((_,i) => i);

class Component extends DCLogic {
  constructor(props){
    super(props);
    this.cardRef = React.createRef();
    const size = Math.max(4, Math.min(20, this.props.dailyGoal ?? 12));
    this.state = {
      screen: (this.props.startScreen ?? "tutorial") === "home" ? "home" : "study",
      coach: (this.props.startScreen ?? "tutorial") === "home" ? -1 : 0,
      idx: 0, size, goal: size, mode: "today", order: IDENTITY, revealed: false, dx: 0, dy: 0, dragging: false, fly: 0,
      learning: 18, mastered: 42, streak: 5, doneToday: 0, history: []
    };
    this.drag = null;
  }

  card(){ const o = this.state.order; return DECK[o[this.state.idx % o.length]]; }

  flip = () => {
    if(this.state.fly) return;
    this.setState(s => ({ revealed: !s.revealed }), () => {
      if(this.state.coach === 0 && this.state.revealed) this.setState({ coach: 1 });
    });
  };

  rate = (got) => {
    if(this.state.fly) return;
    const c = this.state.coach;
    if(c === 1 && got) return this.snapBack();
    if(c === 2 && !got) return this.snapBack();
    this.setState({ fly: got ? 1 : -1, dragging: false });
    setTimeout(() => {
      this.setState(s => {
        const done = s.doneToday + 1, last = { idx: s.idx, learning: s.learning, mastered: s.mastered, doneToday: s.doneToday };
        const finished = done >= s.size && s.coach < 0;
        return {
          fly: 0, dx: 0, dy: 0, revealed: false,
          idx: s.idx + 1, doneToday: done,
          learning: got ? s.learning : s.learning + 1,
          mastered: got ? s.mastered + 1 : s.mastered,
          history: [last, ...s.history].slice(0,5),
          screen: finished ? "done" : "study",
          streak: finished && s.mode === "today" ? s.streak + 1 : s.streak,
          coach: c === 1 ? 2 : (c === 2 ? 3 : c)
        };
      });
    }, 300);
  };

  snapBack = () => this.setState({ dx: 0, dy: 0, dragging: false });

  undo = () => {
    if(this.state.coach >= 0) return;
    this.setState(s => {
      if(!s.history.length) return null;
      const [h, ...rest] = s.history;
      return { ...h, history: rest, revealed: false, screen: "study" };
    });
  };

  onDown = (e) => {
    if(this.state.fly || e.target.closest("button")) return;
    this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false };
  };
  onMove = (e) => {
    const d = this.drag; if(!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    if(!d.moved){
      if(Math.abs(dx) < 8) return;
      d.moved = true;
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch(err) {}
      this.setState({ dragging: true });
    }
    this.setState({ dx, dy: dy * 0.35 });
  };
  onUp = (e) => {
    const d = this.drag; if(!d || d.id !== e.pointerId) return;
    this.drag = null;
    if(!d.moved) return;
    const dx = this.state.dx;
    if(Math.abs(dx) > 78) this.rate(dx > 0); else this.snapBack();
    this.suppress = Date.now() + 300;
  };
  onCardClick = (e) => {
    if(e.target.closest("button")) return;
    if(this.suppress && Date.now() < this.suppress) return;
    this.flip();
  };

  say(word){
    const text = word.replace(/…/g,"").trim();
    if("speechSynthesis" in window){
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-CA"; u.rate = .82;
      const v = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith("fr"));
      if(v) u.voice = v;
      speechSynthesis.speak(u);
    }
  }
  speakWotd = () => this.say(wordOfDay().fr);
  speak = (e) => {
    e.stopPropagation();
    this.say(this.card().fr);
    if(this.state.coach === 3) this.setState({ coach: 4 });
  };


  coachAdvance = () => {
    const c = this.state.coach;
    if(c === 4) this.setState({ coach: -1, screen: "home", revealed: false, doneToday: 0, idx: 0 });
  };
  skipTutorial = () => this.setState(s => ({ coach: -1, screen: "home", mode: "today", order: IDENTITY, size: s.goal, revealed: false, doneToday: 0, idx: 0 }));
  replayTutorial = () => this.setState(s => ({ coach: 0, screen: "study", mode: "today", order: IDENTITY, size: s.goal, revealed: false, idx: 0, doneToday: 0, dx: 0, dy: 0 }));
  startSession = () => this.setState(s => ({ screen: "study", mode: "today", order: IDENTITY, size: s.goal, doneToday: 0, revealed: false, dx: 0, dy: 0, history: [] }));
  startPractice = () => this.setState({ screen: "study", mode: "practice", order: shuffled(DECK.length), idx: 0, size: DECK.length, doneToday: 0, revealed: false, dx: 0, dy: 0, history: [] });
  goHome = () => this.setState({ screen: "home", revealed: false, dx: 0, dy: 0 });

  renderVals(){
    const s = this.state, item = this.card(), quiet = this.props.quietMode ?? false;
    const flyX = s.fly ? s.fly * 520 : 0;
    const x = s.fly ? flyX : s.dx, y = s.fly ? -90 : s.dy;
    const rot = Math.max(-22, Math.min(22, x * .035));
    const amount = Math.min(.95, Math.abs(s.dx) / 90);
    const steps = [
      { label:"STEP 1 OF 4", title:"Tap the card", body:"Every card shows the French first. Tap it to see the meaning and an example sentence.", wait:"Waiting for a tap…" },
      { label:"STEP 2 OF 4", title:"Swipe left to keep learning", body:"Not landed yet? Send it left and Wordnest brings it back tomorrow.", wait:"Swipe the card left…" },
      { label:"STEP 3 OF 4", title:"Swipe right when you've got it", body:"Right means mastered. The card returns in three days, then a week, then a month.", wait:"Swipe the card right…" },
      { label:"STEP 4 OF 4", title:"Hear it spoken", body:"Tap the speaker on any card for a slow French reading.", wait:"Tap the speaker…" },
      { label:"READY", title:"Twelve cards a day", body:"That's all of it. A dozen cards, four minutes, and the streak takes care of itself.", button:"Commençons" }
    ];
    const step = s.coach >= 0 ? steps[Math.min(s.coach, 4)] : null;
    const days = ["M","T","W","T","F","S","S"];
    const week = days.map((label,i) => {
      const done = i < 5, today = i === 5;
      return { label, done, fill: done ? "#24261f" : "#1a1a1d", ring: today ? "#cbd4a6" : "#ffffff0d",
               dot: done ? "#cbd4a6" : (today ? "#cbd4a666" : "#2e2e34") };
    });
    const pips = Array.from({length: s.size}, (_,i) => ({
      w: i === s.doneToday ? "16px" : "7px",
      bg: i < s.doneToday ? "#c4c3b1" : (i === s.doneToday ? "#eeeae7" : "#ffffff17")
    }));
    return {
      isHome: s.screen === "home", isStudy: s.screen === "study", isDone: s.screen === "done",
      word: item.fr, meaning: item.en, type: item.type,
      tagLabel: item.g ? G[item.g].label : item.type, tagDot: item.g ? G[item.g].dot : "transparent",
      tagPad: item.g ? "4px 10px 4px 8px" : "0", tagBg: item.g ? "#0000002e" : "transparent",
      ipa: item.ipa || "", say: item.say || "",
      chips: gramChips(item), hasChips: gramChips(item).length > 0,
      note: item.note || "", hasNote: !!item.note,
      hasTrap: !!item.trap, trapLabel: item.trap ? (item.trap.k === "es" ? "SPANISH TRAP" : "FAUX AMI") : "", trapText: item.trap ? item.trap.t : "", example: item.ex, exampleEn: item.exEn,
      art: artFor(item.p), glow: item.p[2],
      todaySub: s.goal + " cards · about 4 min · keeps your streak",
      practiceSub: "All " + DECK.length + " cards, shuffled · no pressure",
      ink: isLight(item.p) ? "#1c1712" : "#fffffff2", inkSoft: isLight(item.p) ? "#1c1712b8" : "#ffffffc8",
      wordSize: fitSize(item.fr),
      wordShadow: (h => "0 1px 2px rgba(0,0,0," + (h*.9).toFixed(2) + "), 0 6px 28px rgba(0,0,0," + h.toFixed(2) + ")")(Math.min(.75, .28 + brightness(item.p) * .9)),
      wotdWord: wordOfDay().fr, wotdMeaning: wordOfDay().en, wotdSay: wordOfDay().say || "", wotdArt: artFor(wordOfDay().p),
      wotdExample: wordOfDay().ex, wotdTag: wordOfDay().g ? G[wordOfDay().g].label : wordOfDay().type, wotdDot: wordOfDay().g ? G[wordOfDay().g].dot : "#6d6d74",
      speakWotd: this.speakWotd, goal: s.goal, deckSize: DECK.length,
      masteredPct: Math.round(100 * s.mastered / Math.max(1, s.mastered + s.learning)) + "%",
      weekLine: week.filter(d => d.done).length + " of 7 days",
      backScrim: isLight(item.p) ? "#00000066" : "#00000014",
      counter: String(Math.min(s.doneToday + 1, s.size)).padStart(2,"0") + " / " + String(s.size).padStart(2,"0"),
      pips,
      faceTransform: "rotateY(" + (s.revealed ? 180 : 0) + "deg)",
      cardTransform: "translate3d(" + x + "px," + y + "px,0) rotate(" + rot + "deg)",
      cardTransition: s.dragging ? "none" : (s.fly ? "transform .3s cubic-bezier(.4,0,1,1)" : "transform .35s cubic-bezier(.2,.8,.3,1)"),
      noOpacity: s.dx < -10 ? amount : 0, yesOpacity: s.dx > 10 ? amount : 0,
      undoColor: s.history.length && s.coach < 0 ? "#8d8d95" : "#3a3a41",
      streak: s.streak, streakNote: quiet ? "" : "best: 21 days",
      learning: quiet ? "—" : s.learning, mastered: quiet ? "—" : s.mastered,
      doneLine: s.mode === "practice" ? "Whole deck, done. " + s.doneToday + " cards shuffled through." : s.doneToday + " cards practised. Your next reviews are scheduled.",
      doneKicker: s.mode === "practice" ? "Practice complete" : "À demain",
      streakCaption: s.mode === "practice" ? "streak unchanged" : "kept alive",
      week,
      startPractice: this.startPractice,
      coachOn: s.coach >= 0, coachDim: s.coach === 4 ? "#000000b8" : "#00000059",
      coachStepLabel: step ? step.label : "", coachTitle: step ? step.title : "",
      coachBody: step ? step.body : "", coachWaitLabel: step ? step.wait : "",
      coachHasButton: !!(step && step.button), coachButton: step ? step.button : "",
      coachWaiting: !!(step && !step.button),
      coachBottom: s.coach === 3 ? "auto" : (s.coach === 4 ? "120px" : "24px"),
      coachTop: s.coach === 3 ? "calc(env(safe-area-inset-top,0px) + 18px)" : "auto",
      skipLabel: s.coach === 4 ? "" : "Skip tutorial",
      cardRef: this.cardRef,
      flip: this.flip, undo: this.undo, speak: this.speak,
      onDown: this.onDown, onMove: this.onMove, onUp: this.onUp, onCardClick: this.onCardClick,
      coachAdvance: this.coachAdvance, skipTutorial: this.skipTutorial, replayTutorial: this.replayTutorial,
      startSession: this.startSession, goHome: this.goHome
    };
  }
}
