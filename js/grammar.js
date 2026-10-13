// Grammar lessons ship locally, just like the vocabulary. Each exercise has
// an explicit answer: meaning quizzes cannot teach contractions or agreement.
window.WN_GRAMMAR = (() => {
  const rules = {
    de: {
      title: "De + the article",
      intro: "De often means of, from or about. When it meets a definite article, choose the form for the noun.",
      rows: [
        ["Masculine singular", "de + le → du", "Je viens du marché."],
        ["Feminine singular", "de + la → de la", "Je viens de la gare."],
        ["Vowel / silent h", "de + l’ → de l’", "Je viens de l’école."],
        ["Plural · either gender", "de + les → des", "Je parle des enfants."]
      ],
      note: "Du and des are contractions here, not verb conjugations. They can also mean some as articles: du pain, des pommes. After a quantity or ordinary negative, use de/d’: beaucoup de pain, pas d’eau. De la and de l’ do not contract. An aspirated h blocks elision: le héros → du héros.",
    },
    quantity: {
      title: "Some, quantities & negatives",
      intro: "Du, de la and de l’ can also mean an unspecified amount of something. Des is the plural indefinite article.",
      rows: [
        ["Masculine", "du pain", "Je mange du pain."],
        ["Feminine", "de la soupe", "Je mange de la soupe."],
        ["Vowel / silent h", "de l’eau", "Je bois de l’eau."],
        ["Plural", "des pommes", "J’achète des pommes."],
        ["Quantity / ordinary negative", "de / d’", "Beaucoup de pain. Pas d’eau."]
      ],
      note: "After quantities and ordinary ne…pas negatives, these indefinite/partitive articles become de or d’. Definite articles stay: Je n’aime pas le café. After être, keep the article: Ce n’est pas du lait.",
    },
    a: {
      title: "À + the article",
      intro: "À can mean to, at or in. The following noun’s gender, number and first sound decide the article form.",
      rows: [
        ["Masculine singular", "à + le → au", "Je vais au marché."],
        ["Feminine singular", "à + la → à la", "Je vais à la gare."],
        ["Vowel / silent h", "à + l’ → à l’", "Je vais à l’école."],
        ["Plural · either gender", "à + les → aux", "Je parle aux enfants."]
      ],
      note: "Au and aux are contractions, not conjugations. A vowel or silent h uses l’ even for a masculine noun: à l’hôtel. Cities usually take à alone: à Paris.",
    },
    agreement: {
      title: "Gender & number agree",
      intro: "Articles and adjectives follow the noun. A verb follows its subject’s person and number, not masculine/feminine gender.",
      rows: [
        ["Masculine singular", "le / un · petit", "Un petit chat."],
        ["Feminine singular", "la / une · petite", "Une petite chatte."],
        ["Masculine plural", "les / des · petits", "Des petits chats."],
        ["Feminine plural", "les / des · petites", "Des petites chattes."]
      ],
      note: "Often add -e for feminine and -s for plural, but learn exceptions: beau/belle, heureux/heureuse, journal/journaux. Before a plural adjective, des usually becomes de: de petits chats. L’ hides gender; learn un/une with each noun.",
    },
    verbs: {
      title: "Conjugate for the subject",
      intro: "In the present tense, choose the form for who does the action. Il and elle use the same verb form; ils and elles do too.",
      rows: [
        ["je / j’", "parle · suis · ai · vais", "Je parle français."],
        ["tu", "parles · es · as · vas", "Tu vas au marché."],
        ["il / elle / on", "parle · est · a · va", "Elle est contente."],
        ["nous", "parlons · sommes · avons · allons", "Nous allons à l’école."],
        ["vous", "parlez · êtes · avez · allez", "Vous avez des questions."],
        ["ils / elles", "parlent · sont · ont · vont", "Elles parlent français."]
      ],
      note: "Columns: parler · être · avoir · aller. Regular -er verbs use -e, -es, -e, -ons, -ez, -ent; aller is irregular. On uses a singular verb even when it means we. Present-tense verbs do not change for gender, but adjectives do: il est content / elle est contente. Other tenses have their own rules.",
    },
    questions: {
      title: "Three ways to ask",
      intro: "These ask the same yes/no question. Choose the style for the situation; the verb still agrees with the subject.",
      rows: [
        ["Everyday speech", "Tu parles français ?", "Statement order + rising intonation."],
        ["Neutral", "Est-ce que tu parles français ?", "Est-ce que + subject + verb."],
        ["More formal", "Parles-tu français ?", "Verb + hyphen + subject pronoun."],
        ["Before a vowel", "Est-ce qu’elle parle ?", "Que becomes qu’."],
        ["Linking -t-", "Parle-t-elle français ?", "Add -t- between vowel-ending verb and il/elle/on."]
      ],
      note: "Do not combine est-ce que with inversion. A noun subject stays before the verb and is repeated by a pronoun: Marie parle-t-elle français ? No extra -t- when the verb already ends in t or d: Est-il prêt ?",
    },
    questionWords: {
      title: "Ask for the missing information",
      intro: "Use a question word for what you want to find out. Est-ce que keeps ordinary subject–verb order.",
      rows: [
        ["Who / where / when", "qui · où · quand", "Où est-ce que tu habites ?"],
        ["Why / how", "pourquoi · comment", "Pourquoi est-ce qu’il part ?"],
        ["What · neutral", "qu’est-ce que", "Qu’est-ce que tu fais ?"],
        ["What · informal", "quoi at the end", "Tu fais quoi ?"],
        ["Which", "quel / quelle / quels / quelles", "Quelles langues parles-tu ?"],
        ["How much / many", "combien de + noun", "Combien de livres as-tu ?"]
      ],
      note: "Quel agrees with the noun’s gender and number. Qu’est-ce que asks about an object; qu’est-ce qui asks about a subject: Qu’est-ce qui se passe ? (What’s happening?). Qui as subject takes a singular verb: Qui vient ?",
    }
  };
  const collections = [
    { id: "rules-de", name: "De, du & des", color: "#cdb4f5" },
    { id: "rules-a", name: "À, au & aux", color: "#8cc8f5" },
    { id: "rules-agreement", name: "Gender & number", color: "#f5a3c7" },
    { id: "rules-verbs", name: "Verb patterns", color: "#8fe0c0" },
    { id: "rules-questions", name: "Ask in French", color: "#f6d873" }
  ];
  const cards = [];
  // Stable IDs keep mastery when lessons are reordered or expanded.
  function add(id, deck, ruleId, fr, en, ex, exEn, prompt, answer, wrong, explanation, hint = ""){
    cards.push({ id: "rule-" + id, deck: "rules-" + deck, ruleId, fr, en, ex, exEn,
      type: "grammar rule", exercise: { prompt, answer, wrong, explanation, hint } });
  }
  add("de-m", "de", "de", "de + le → du", "Of / from the · masculine singular", "Je viens du marché.", "I’m coming from the market.", "Je viens ____ marché.", "du", ["de le", "de la", "des"], "Marché is masculine singular: de + le contracts to du.", "le marché · the market");
  add("de-f", "de", "de", "de + la → de la", "Of / from the · feminine singular", "Je viens de la gare.", "I’m coming from the station.", "Je viens ____ gare.", "de la", ["du", "des", "de le"], "Gare is feminine singular: keep de la.", "la gare · the station");
  add("de-vowel", "de", "de", "de + l’ → de l’", "Of / from the · before a vowel", "Je viens de l’école.", "I’m coming from the school.", "Je viens ____ école.", "de l’", ["du", "de la", "des"], "École starts with a vowel: la becomes l’, so use de l’.", "l’école · feminine");
  add("de-pl", "de", "de", "de + les → des", "Of / about the · plural, either gender", "Je parle des enfants.", "I’m talking about the children.", "Je parle ____ enfants.", "des", ["du", "de les", "de l’"], "For these specific children, de + les contracts to des. Plural nouns use les even before a vowel.", "les enfants · the children");
  add("partitive", "de", "quantity", "du · de la · de l’", "Some · an unspecified amount", "Je bois de l’eau.", "I’m drinking some water.", "Je bois ____ eau.", "de l’", ["du", "de la", "des"], "Eau begins with a vowel. The partitive form is de l’eau.", "l’eau · feminine");
  add("quantity", "de", "quantity", "beaucoup de", "A lot of · de after a quantity", "J’ai beaucoup de livres.", "I have a lot of books.", "J’ai beaucoup ____ livres.", "de", ["des", "du", "de les"], "Beaucoup de expresses a quantity; no plural indefinite article des here.");
  add("negative", "de", "quantity", "pas de · pas d’", "Not any · ordinary negative", "Je ne mange pas de pain.", "I’m not eating any bread.", "Je ne mange pas ____ pain.", "de", ["du", "des", "de la"], "In this ordinary negative, the partitive du becomes de. This does not remove definite articles or apply after être.");
  add("negative-etre", "de", "quantity", "Ce n’est pas du lait.", "After être, keep the article", "Ce n’est pas du lait.", "It isn’t milk.", "Ce n’est pas ____ lait.", "du", ["de", "des", "de la"], "After être, the partitive article stays: ce n’est pas du lait.", "le lait · masculine");
  add("a-m", "a", "a", "à + le → au", "To / at the · masculine singular", "Je vais au marché.", "I’m going to the market.", "Je vais ____ marché.", "au", ["à le", "à la", "aux"], "Marché is masculine singular: à + le contracts to au.", "le marché");
  add("a-f", "a", "a", "à + la → à la", "To / at the · feminine singular", "Je vais à la gare.", "I’m going to the station.", "Je vais ____ gare.", "à la", ["au", "aux", "à le"], "Gare is feminine singular: à la stays as two words.", "la gare");
  add("a-vowel", "a", "a", "à + l’ → à l’", "To / at the · before a vowel", "Je vais à l’école.", "I’m going to the school.", "Je vais ____ école.", "à l’", ["à la", "au", "aux"], "A vowel takes l’. Use à l’école, even though école is feminine.", "l’école · feminine");
  add("a-h", "a", "a", "à l’hôtel", "Silent h works like a vowel", "Nous allons à l’hôtel.", "We’re going to the hotel.", "Nous allons ____ hôtel.", "à l’", ["au", "à le", "aux"], "Hôtel has a silent h: le becomes l’, so use à l’hôtel.", "l’hôtel · masculine");
  add("a-pl-m", "a", "a", "à + les → aux", "To the · masculine plural", "Je parle aux garçons.", "I’m speaking to the boys.", "Je parle ____ garçons.", "aux", ["au", "à les", "à la"], "Garçons is plural: à + les contracts to aux.", "les garçons");
  add("a-pl-f", "a", "a", "aux filles", "To the · feminine plural too", "Je parle aux filles.", "I’m speaking to the girls.", "Je parle ____ filles.", "aux", ["à la", "au", "à les"], "Plural feminine nouns use aux too. Gender does not change this plural contraction.", "les filles");
  add("agree-m", "agreement", "agreement", "petit · petite", "Adjectives agree with gender", "Le chat est petit.", "The cat is small.", "Le chat est ____.", "petit", ["petite", "petits", "petites"], "Chat is masculine singular, so choose petit.", "le chat");
  add("agree-f", "agreement", "agreement", "Elle est contente.", "Feminine singular · usually add -e", "Elle est contente.", "She’s happy.", "Elle est ____.", "contente", ["content", "contents", "contentes"], "The adjective agrees with elle: contente. The verb est stays the same for il and elle.");
  add("agree-mp", "agreement", "agreement", "Ils sont contents.", "Masculine plural · usually add -s", "Ils sont contents.", "They’re happy.", "Ils sont ____.", "contents", ["content", "contente", "contentes"], "Ils is masculine plural: content + s → contents.");
  add("agree-fp", "agreement", "agreement", "Elles sont contentes.", "Feminine plural · usually add -es", "Elles sont contentes.", "They’re happy.", "Elles sont ____.", "contentes", ["content", "contente", "contents"], "Elles is feminine plural: contente + s → contentes.");
  add("agree-irregular", "agreement", "agreement", "beau · belle", "Some adjective forms are irregular", "La maison est belle.", "The house is beautiful.", "La maison est ____.", "belle", ["beau", "beaux", "belles"], "Maison is feminine singular. The feminine of beau is belle.", "la maison");
  add("noun-plural", "agreement", "agreement", "journal → journaux", "Some noun plurals are irregular", "Je lis les journaux.", "I read the newspapers.", "Je lis les ____.", "journaux", ["journal", "journals", "journales"], "Journal has an irregular -al → -aux plural: les journaux.", "le journal");
  add("quel-fp", "agreement", "questionWords", "quel · quelle · quels · quelles", "Which · agree with the noun", "Quelles langues parles-tu ?", "Which languages do you speak?", "____ langues parles-tu ?", "Quelles", ["Quel", "Quelle", "Quels"], "Langues is feminine plural, so choose quelles.", "la langue → les langues");
  add("verb-je", "verbs", "verbs", "je parle · tu parles", "Present · regular -er endings", "Tu parles français.", "You speak French.", "Tu ____ français.", "parles", ["parle", "parlons", "parlez"], "With tu, regular parler takes -es: tu parles.", "parler · present tense");
  add("verb-nous", "verbs", "verbs", "nous parlons", "We · regular -er ending -ons", "Nous parlons français.", "We speak French.", "Nous ____ français.", "parlons", ["parlent", "parlez", "parles"], "With nous, use the -ons ending: nous parlons.", "parler · present tense");
  add("verb-vous", "verbs", "verbs", "vous parlez", "You · plural or polite singular", "Vous parlez français.", "You speak French.", "Vous ____ français.", "parlez", ["parles", "parle", "parlons"], "Vous takes -ez, whether it refers to several people or one person politely.", "parler · present tense");
  add("verb-elles", "verbs", "verbs", "ils / elles parlent", "Gender does not change the verb", "Elles parlent français.", "They speak French.", "Elles ____ français.", "parlent", ["parles", "parle", "parlez"], "Both ils and elles take parlent. Feminine gender does not add an -e to a verb.", "parler · present tense");
  add("verb-etre", "verbs", "verbs", "je suis · nous sommes", "Être · to be, irregular", "Nous sommes prêts.", "We’re ready.", "Nous ____ prêts.", "sommes", ["sont", "êtes", "est"], "Être is irregular: with nous, choose sommes.", "être · present tense");
  add("verb-avoir", "verbs", "verbs", "j’ai · elles ont", "Avoir · to have, irregular", "Elles ont des questions.", "They have questions.", "Elles ____ des questions.", "ont", ["a", "avez", "avons"], "With elles or ils, avoir becomes ont.", "avoir · present tense");
  add("verb-aller", "verbs", "verbs", "je vais · ils vont", "Aller · to go, irregular", "Ils vont au marché.", "They’re going to the market.", "Ils ____ au marché.", "vont", ["va", "vas", "allons"], "With ils, aller becomes vont. Au is separately the contraction à + le.", "aller · present tense");
  add("verb-on", "verbs", "verbs", "on va", "On takes a singular verb", "On va à l’école.", "We’re going to the school.", "On ____ à l’école.", "va", ["vont", "allons", "vas"], "Even when on means we, conjugate it like il/elle: on va.", "aller · present tense");
  add("question-intonation", "questions", "questions", "Tu viens ?", "Informal · raise your voice at the end", "Tu viens ce soir ?", "Are you coming tonight?", "Ask “Are you coming?” using informal statement order.", "Tu viens ?", ["Viens tu ?", "Tu venir ?", "Est-ce viens-tu ?"], "Keep subject + conjugated verb and use rising intonation: tu viens ?");
  add("question-estce", "questions", "questions", "Est-ce que tu viens ?", "Neutral · keep subject–verb order", "Est-ce que tu viens ce soir ?", "Are you coming tonight?", "Complete the neutral question: Est-ce que ____ ?", "tu viens", ["viens-tu", "tu venir", "vient tu"], "Est-ce que is followed by normal subject–verb order. Do not also invert the verb.");
  add("question-inversion", "questions", "questions", "Parlez-vous français ?", "Formal · verb–pronoun inversion", "Parlez-vous français ?", "Do you speak French?", "Ask formally with inversion: vous parlez français.", "Parlez-vous français ?", ["Vous-parlez français ?", "Parle-vous français ?", "Est-ce que parlez-vous français ?"], "Move the conjugated verb before the subject pronoun and join them with a hyphen.");
  add("question-t", "questions", "questions", "Parle-t-elle français ?", "Inversion · a linking -t-", "Parle-t-elle français ?", "Does she speak French?", "Invert: elle parle français.", "Parle-t-elle français ?", ["Parles-t-elle français ?", "Parle-elle français ?", "Parle-t-elles français ?"], "Parle ends in a vowel. Add -t- before elle, keeping the singular verb parle.");
  add("question-elision", "questions", "questions", "Est-ce qu’il vient ?", "Que → qu’ before a vowel", "Est-ce qu’il vient ?", "Is he coming?", "____ il vient ?", "Est-ce qu’", ["Est-ce que", "Est-ce qui", "Est-ce"], "Que elides to qu’ before il: est-ce qu’il vient.");
  add("question-where", "questions", "questionWords", "Où est-ce que tu habites ?", "Où · ask where", "Où est-ce que tu habites ?", "Where do you live?", "____ est-ce que tu habites ?", "Où", ["Quand", "Pourquoi", "Qui"], "Où asks about a place; quand asks when, pourquoi why and qui who.", "Ask where someone lives.");
  add("question-what", "questions", "questionWords", "Qu’est-ce que tu fais ?", "What · ask about an object", "Qu’est-ce que tu fais ?", "What are you doing?", "____ tu fais ?", "Qu’est-ce que", ["Qu’est-ce qui", "Qui est-ce que", "Où est-ce que"], "Tu is the subject; ask about the thing being done with qu’est-ce que.", "Ask what someone is doing.");
  add("question-subject", "questions", "questionWords", "Qu’est-ce qui se passe ?", "What · ask about the subject", "Qu’est-ce qui se passe ?", "What’s happening?", "____ se passe ?", "Qu’est-ce qui", ["Qu’est-ce que", "Qui est-ce que", "Quand est-ce que"], "The unknown thing is the subject of se passe, so use qu’est-ce qui.", "Ask what is happening.");
  add("question-howmany", "questions", "questionWords", "Combien de livres ?", "How many · combien de", "Combien de livres as-tu ?", "How many books do you have?", "Combien ____ livres as-tu ?", "de", ["des", "du", "de les"], "Combien de introduces a quantity. Keep de before a plural noun.");
  add("question-when", "questions", "questionWords", "Quand est-ce que tu pars ?", "Quand · ask when", "Quand est-ce que tu pars ?", "When are you leaving?", "____ est-ce que tu pars ?", "Quand", ["Qui", "Où", "Comment"], "Quand asks about time. Keep subject–verb order after est-ce que.", "Ask when someone is leaving.");
  add("question-why", "questions", "questionWords", "Pourquoi est-ce qu’il part ?", "Pourquoi · ask why", "Pourquoi est-ce qu’il part ?", "Why is he leaving?", "____ est-ce qu’il part ?", "Pourquoi", ["Quand", "Qui", "Combien"], "Pourquoi asks for a reason. Que becomes qu’ before il.", "Ask the reason for leaving.");
  add("question-how", "questions", "questionWords", "Comment est-ce que tu vas ?", "Comment · ask how", "Comment est-ce que tu vas ?", "How are you?", "____ est-ce que tu vas ?", "Comment", ["Qui", "Combien", "Quand"], "Comment asks how. Tu takes vas, the present-tense form of aller.", "Ask how someone is doing.");
  add("question-who", "questions", "questionWords", "Qui vient ?", "Qui · ask who", "Qui vient ce soir ?", "Who is coming tonight?", "____ vient ce soir ?", "Qui", ["Qu’est-ce que", "Combien", "Où"], "Qui is the subject here, so use a singular verb: qui vient ?", "Ask who is coming.");
  return { rules, collections, cards };
})();
