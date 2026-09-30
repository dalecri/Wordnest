const DECK = [
  {fr:"Bonjour", en:"Hello", type:"greeting", ex:"Bonjour, comment allez-vous ?", exEn:"Hello, how are you?", p:["#f5aa84","#ff7256","#0b310c","#3c7918","#ffe0bd"]},
  {fr:"Merci", en:"Thank you", type:"courtesy", ex:"Merci pour votre aide.", exEn:"Thank you for your help.", p:["#83f8b4","#11b6ab","#00336c","#0062a2","#c9ffc8"]},
  {fr:"J'ai faim", en:"I'm hungry", type:"literally: I have hunger", ex:"J'ai faim. On mange ?", exEn:"I'm hungry. Shall we eat?", p:["#f4a0b8","#de0759","#36051e","#790937","#f6c3f0"]},
  {fr:"À gauche", en:"To the left", type:"direction", ex:"La gare est à gauche.", exEn:"The station is on the left.", p:["#428bff","#005ff1","#0b1016","#1c3026","#80daff"]},
  {fr:"Je voudrais…", en:"I would like…", type:"polite request", ex:"Je voudrais un thé.", exEn:"I would like a tea.", p:["#ffc987","#f3933b","#58201d","#a43c2e","#ffe8a7"]},
  {fr:"L'addition", en:"The bill", type:"feminine noun", ex:"L'addition, s'il vous plaît.", exEn:"The bill, please.", p:["#db8bf0","#7455de","#18082b","#34205c","#ffa48d"]},
  {fr:"Il fait beau", en:"The weather is nice", type:"weather", ex:"Il fait beau aujourd'hui.", exEn:"The weather is nice today.", p:["#b8f1de","#43cbb6","#003f43","#07695b","#e7f5bb"]},
  {fr:"Demain", en:"Tomorrow", type:"time", ex:"À demain !", exEn:"See you tomorrow!", p:["#e9f3a0","#b8c165","#253c11","#427044","#ffecd2"]},
  {fr:"Je comprends", en:"I understand", type:"verb · comprendre", ex:"Oui, je comprends.", exEn:"Yes, I understand.", p:["#a2b2cb","#8b83af","#1e2435","#42465d","#e4e1cf"]},
  {fr:"D'accord", en:"Okay / Agreed", type:"everyday phrase", ex:"D'accord, à demain.", exEn:"Okay, see you tomorrow.", p:["#ffbbb3","#e67588","#592047","#8b295d","#fff1ce"]},
  {fr:"La réunion", en:"The meeting", type:"feminine noun", ex:"La réunion commence à neuf heures.", exEn:"The meeting starts at nine.", p:["#ff5735","#e6070c","#100313","#4d0024","#ffb778"]},
  {fr:"Bonne journée", en:"Have a good day", type:"farewell", ex:"Merci, bonne journée !", exEn:"Thank you, have a good day!", p:["#54053a","#8d0028","#0b0414","#270317","#f04431"]}
];

function artFor(p){
  return "radial-gradient(70% 55% at 22% 14%, " + p[4] + "cc 0%, " + p[4] + "00 62%)," +
         "radial-gradient(62% 48% at 78% 86%, " + p[2] + "e6 0%, " + p[2] + "00 70%)," +
         "radial-gradient(52% 44% at 46% 52%, " + p[3] + " 0%, " + p[3] + "00 78%)," +
         "radial-gradient(38% 32% at 44% 50%, " + p[0] + "cc 0%, " + p[0] + "00 80%)," +
         p[1];
}

class Component extends DCLogic {
  constructor(props){
    super(props);
    this.cardRef = React.createRef();
    this.dotsRef = React.createRef();
    this.heroRef = React.createRef();
    const size = Math.max(4, Math.min(20, this.props.dailyGoal ?? 12));
    this.state = {
      screen: (this.props.startScreen ?? "tutorial") === "home" ? "home" : "study",
      coach: (this.props.startScreen ?? "tutorial") === "home" ? -1 : 0,
      idx: 0, size, revealed: false, dx: 0, dy: 0, dragging: false, fly: 0,
      learning: 18, mastered: 42, streak: 5, doneToday: 0, history: []
    };
    this.drag = null;
  }
  componentDidMount(){ this.paintDots(); }
  componentDidUpdate(){ this.paintDots(); }

  card(){ return DECK[this.state.idx % DECK.length]; }

  paintDots(){
    this.paintWord(this.dotsRef.current, this.card().fr);
    this.paintWord(this.heroRef.current, DECK[this.state.idx % DECK.length].fr);
  }

  paintWord(out, text){
    if(!out || out.dataset.word === text) return;
    out.dataset.word = text;
    const c = out.getContext("2d"), mask = document.createElement("canvas");
    mask.width = 1200; mask.height = 570;
    const m = mask.getContext("2d"), words = text.split(" ");
    let size = 170, lines = [];
    while(size >= 60){
      m.font = "500 " + size + "px Arial, sans-serif";
      lines = [""];
      for(const w of words){
        const last = lines.length - 1, test = lines[last] ? lines[last] + " " + w : w;
        if(m.measureText(test).width > 1080 && lines[last]) lines.push(w); else lines[last] = test;
      }
      if(lines.length * size * 1.27 <= 470 && lines.every(l => m.measureText(l).width <= 1080)) break;
      size -= 4;
    }
    m.fillStyle = "white"; m.textAlign = "center"; m.textBaseline = "middle";
    lines.forEach((l,i) => m.fillText(l, 600, 285 + (i - (lines.length-1)/2) * size * 1.27));
    const px = m.getImageData(0,0,1200,570).data;
    c.clearRect(0,0,1200,570); c.fillStyle = "#fffef4";
    for(let y=4;y<570;y+=8) for(let x=4;x<1200;x+=8){
      if(px[(y*1200+x)*4+3] > 75){ c.beginPath(); c.arc(x,y,2.6,0,Math.PI*2); c.fill(); }
    }
  }

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
          streak: finished ? s.streak + 1 : s.streak,
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
  speak = (e) => {
    e.stopPropagation();
    this.say(this.card().fr);
    if(this.state.coach === 3) this.setState({ coach: 4 });
  };
  speakNext = () => this.say(DECK[this.state.idx % DECK.length].fr);

  coachAdvance = () => {
    const c = this.state.coach;
    if(c === 4) this.setState({ coach: -1, screen: "home", revealed: false, doneToday: 0, idx: 0 });
  };
  skipTutorial = () => this.setState({ coach: -1, screen: "home", revealed: false, doneToday: 0, idx: 0 });
  replayTutorial = () => this.setState({ coach: 0, screen: "study", revealed: false, idx: 0, doneToday: 0, dx: 0, dy: 0 });
  startSession = () => this.setState({ screen: "study", doneToday: 0, revealed: false, dx: 0, dy: 0, history: [] });
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
      return { label, fill: done ? "#22231f" : "#151517", ring: today ? "#cbd4a6" : "#ffffff0d",
               dot: done ? "#cbd4a6" : (today ? "#cbd4a666" : "#2e2e34") };
    });
    const next = DECK[(s.idx + 0) % DECK.length];
    const pips = Array.from({length: s.size}, (_,i) => ({
      w: i === s.doneToday ? "16px" : "7px",
      bg: i < s.doneToday ? "#c4c3b1" : (i === s.doneToday ? "#eeeae7" : "#ffffff17")
    }));
    return {
      isHome: s.screen === "home", isStudy: s.screen === "study", isDone: s.screen === "done",
      word: item.fr, meaning: item.en, type: item.type, example: item.ex, exampleEn: item.exEn,
      art: artFor(item.p), glow: item.p[2],
      previewArt: artFor(next.p), previewWord: next.fr, previewType: next.type,
      dueLine: (s.size) + " cards due · about 4 minutes",
      startLabel: "Start today's " + s.size,
      counter: String(Math.min(s.doneToday + 1, s.size)).padStart(2,"0") + " / " + String(s.size).padStart(2,"0"),
      pips,
      faceTransform: "rotateY(" + (s.revealed ? 180 : 0) + "deg)",
      cardTransform: "translate3d(" + x + "px," + y + "px,0) rotate(" + rot + "deg)",
      cardTransition: s.dragging ? "none" : (s.fly ? "transform .3s cubic-bezier(.4,0,1,1)" : "transform .35s cubic-bezier(.2,.8,.3,1)"),
      noOpacity: s.dx < -10 ? amount : 0, yesOpacity: s.dx > 10 ? amount : 0,
      undoColor: s.history.length && s.coach < 0 ? "#8d8d95" : "#3a3a41",
      streak: s.streak, streakNote: quiet ? "" : "best: 21 days",
      learning: quiet ? "—" : s.learning, mastered: quiet ? "—" : s.mastered,
      doneLine: s.doneToday + " cards practised. Your next reviews are scheduled.",
      week,
      nest: Array.from({length: s.size}, (_,i) => {
        const d = DECK[(s.idx + i) % DECK.length], first = i === 0;
        return { art: artFor(d.p), op: first ? 1 : .55, scale: first ? 1.12 : 1,
                 ring: first ? "0 0 0 2px #0a0a0b, 0 0 0 3.5px #eeeae7" : "none" };
      }),
      nestCols: Math.min(s.size, 12),
      heroRef: this.heroRef, speakNext: this.speakNext,
      coachOn: s.coach >= 0, coachDim: s.coach === 4 ? "#000000b8" : "#00000059",
      coachStepLabel: step ? step.label : "", coachTitle: step ? step.title : "",
      coachBody: step ? step.body : "", coachWaitLabel: step ? step.wait : "",
      coachHasButton: !!(step && step.button), coachButton: step ? step.button : "",
      coachWaiting: !!(step && !step.button),
      coachBottom: s.coach === 3 ? "auto" : (s.coach === 4 ? "120px" : "24px"),
      coachTop: s.coach === 3 ? "calc(env(safe-area-inset-top,0px) + 18px)" : "auto",
      skipLabel: s.coach === 4 ? "" : "Skip tutorial",
      cardRef: this.cardRef, dotsRef: this.dotsRef,
      flip: this.flip, undo: this.undo, speak: this.speak,
      onDown: this.onDown, onMove: this.onMove, onUp: this.onUp, onCardClick: this.onCardClick,
      coachAdvance: this.coachAdvance, skipTutorial: this.skipTutorial, replayTutorial: this.replayTutorial,
      startSession: this.startSession, goHome: this.goHome
    };
  }
}
