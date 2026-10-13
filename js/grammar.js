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
    negatives: {
      title: "Negatives & articles",
      intro: "Put ne (n’ before a vowel) before the conjugated verb and pas after it. Then check which kind of article follows.",
      rows: [
        ["Not any · ordinary negative", "un / une / des / du / de la → de", "J’ai un chien → Je n’ai pas de chien."],
        ["Before a vowel / silent h", "de → d’", "J’ai de l’eau → Je n’ai pas d’eau."],
        ["Specific things / general preferences", "le / la / l’ / les stay", "J’aime le café → Je n’aime pas le café."],
        ["After être", "keep the article", "C’est une pomme → Ce n’est pas une pomme."],
        ["Never / no longer", "ne…jamais / ne…plus", "Je ne mange jamais de viande."],
        ["Only · not a negative", "ne…que keeps the article", "Je ne mange que du pain."]
      ],
      note: "These are the normal forms; explicit contrasts can keep an article: Je ne veux pas du thé, mais du café. In everyday speech, ne is often omitted, but learn the full form for writing. With a compound tense, surround the auxiliary: Je n’ai pas mangé de pain.",
    },
    prepositions: {
      title: "Choose à or de",
      intro: "Learn the verb together with its preposition. À often points toward a person, destination or activity; de can introduce a topic, origin or need. Meaning matters more than the English word.",
      rows: [
        ["Person you speak to", "parler à quelqu’un", "Je parle à Marie."],
        ["Topic you speak about", "parler de quelque chose", "Je parle de mon voyage."],
        ["Destination / origin", "aller à / venir de", "Je vais à Paris. Je viens de Paris."],
        ["Need / want", "avoir besoin de / envie de", "J’ai besoin de repos. J’ai envie de dormir."],
        ["Before an infinitive", "apprendre à / essayer de", "J’apprends à nager. J’essaie de comprendre."],
        ["Two different meanings", "penser à / penser de", "Je pense à toi. Que penses-tu de ce film ?"]
      ],
      note: "Do not add a preposition after every verb: J’aime lire. Once you choose à or de, apply the article rule when needed: parler au professeur, parler du film. Before a vowel, de elides: envie d’apprendre; à stays à: apprendre à écrire.",
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
    { id: "rules-negatives", name: "Negatives & articles", color: "#ff8a7a" },
    { id: "rules-prepositions", name: "À or de?", color: "#7fd1d8" },
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
  add("neg-order", "negatives", "negatives", "ne + verb + pas", "Put the negative around the verb", "Je ne parle pas français.", "I don’t speak French.", "Je ____ parle pas français.", "ne", ["pas", "de", "que"], "Ne goes before the conjugated verb; pas goes after it.");
  add("neg-elision", "negatives", "negatives", "ne → n’", "Before a vowel, shorten ne", "Elle n’aime pas le café.", "She doesn’t like coffee.", "Elle ____ aime pas le café.", "n’", ["ne", "pas", "de"], "Aime begins with a vowel: ne becomes n’. The definite article le stays.");
  add("neg-du", "negatives", "negatives", "du riz → pas de riz", "Some rice → not any rice", "Je ne mange pas de riz.", "I’m not eating any rice.", "Je ne mange pas ____ riz.", "de", ["du", "des", "de la"], "In an ordinary negative, the partitive du becomes de.");
  add("neg-dela", "negatives", "negatives", "de la viande → pas de viande", "Feminine partitive → de", "Je ne mange pas de viande.", "I’m not eating any meat.", "Je ne mange pas ____ viande.", "de", ["de la", "du", "des"], "De la becomes de after an ordinary negative, even though viande is feminine.");
  add("neg-des", "negatives", "negatives", "des carottes → pas de carottes", "Plural indefinite → de", "Je n’achète pas de carottes.", "I’m not buying any carrots.", "Je n’achète pas ____ carottes.", "de", ["des", "du", "de les"], "The indefinite plural des becomes de in this negative.");
  add("neg-vowel", "negatives", "negatives", "de l’argent → pas d’argent", "De becomes d’ before a vowel", "Je n’ai pas d’argent.", "I don’t have any money.", "Je n’ai pas ____ argent.", "d’", ["de l’", "du", "des"], "The negative uses de; before the vowel in argent it becomes d’.");
  add("neg-definite", "negatives", "negatives", "Je n’aime pas le café.", "A preference keeps the definite article", "Je n’aime pas le café.", "I don’t like coffee.", "Je n’aime pas ____ café.", "le", ["de", "du", "la"], "This is a general preference: the definite article le stays in the negative.", "Say you dislike coffee in general.");
  add("neg-definite-pl", "negatives", "negatives", "Je n’aime pas les épinards.", "Definite plural stays les", "Je n’aime pas les épinards.", "I don’t like spinach.", "Je n’aime pas ____ épinards.", "les", ["de", "des", "le"], "For this general preference, keep the definite article les.", "Say you dislike spinach in general.");
  add("neg-etre", "negatives", "negatives", "Ce n’est pas une pomme.", "After être, keep un / une", "Ce n’est pas une pomme.", "It isn’t an apple.", "Ce n’est pas ____ pomme.", "une", ["de", "un", "du"], "With être, the indefinite article stays. Pomme is feminine: une pomme.");
  add("neg-never", "negatives", "negatives", "ne…jamais", "Never · replace pas with jamais", "Je ne mange jamais de viande.", "I never eat meat.", "Je ne mange ____ de viande.", "jamais", ["pas jamais", "que", "toujours"], "Jamais already supplies the negative meaning never. Do not add pas.", "Say you never eat meat.");
  add("neg-anymore", "negatives", "negatives", "ne…plus", "No longer / not anymore", "Je ne bois plus de café.", "I don’t drink coffee anymore.", "Je ne bois ____ de café.", "plus", ["pas plus", "que", "encore"], "Ne…plus means not anymore. Do not also add pas.", "Say you no longer drink coffee.");
  add("neg-only", "negatives", "negatives", "ne…que", "Only · keep the partitive", "Je ne mange que du pain.", "I only eat bread.", "Je ne mange que ____ pain.", "du", ["de", "des", "de la"], "Ne…que means only, not not any. Keep the partitive du pain.");
  add("prep-person", "prepositions", "prepositions", "parler à", "Speak to someone", "Je parle à Marie.", "I’m speaking to Marie.", "Je parle ____ Marie.", "à", ["de", "du", "au"], "To say who you speak to, use parler à. Marie is a person’s name, so no article contraction.", "Say you are speaking to Marie.");
  add("prep-topic", "prepositions", "prepositions", "parler de", "Speak about something", "Je parle de mon voyage.", "I’m talking about my trip.", "Je parle ____ mon voyage.", "de", ["à", "du", "au"], "The topic takes parler de. Mon is a possessive, so de does not contract.", "Say your trip is the topic.");
  add("prep-destination", "prepositions", "prepositions", "aller à", "Go to a destination", "Je vais à Montréal.", "I’m going to Montréal.", "Je vais ____ Montréal.", "à", ["de", "au", "du"], "A city destination normally takes à without an article.", "Say Montréal is your destination.");
  add("prep-origin", "prepositions", "prepositions", "venir de", "Come from a place", "Je viens de Montréal.", "I’m coming from Montréal.", "Je viens ____ Montréal.", "de", ["à", "au", "du"], "Use venir de for the place you come from. The city name has no article.", "Say Montréal is where you are coming from.");
  add("prep-need", "prepositions", "prepositions", "avoir besoin de", "Need something", "J’ai besoin de repos.", "I need rest.", "J’ai besoin ____ repos.", "de", ["à", "au", "pour"], "Learn avoir besoin de as a phrase. Here repos is an unspecified need, with no definite article.");
  add("prep-want", "prepositions", "prepositions", "avoir envie de", "Feel like doing something", "J’ai envie de dormir.", "I feel like sleeping.", "J’ai envie ____ dormir.", "de", ["à", "au", "du"], "Avoir envie de is followed by a noun or infinitive. Dormir stays in the infinitive.");
  add("prep-learn", "prepositions", "prepositions", "apprendre à", "Learn to do something", "J’apprends à nager.", "I’m learning to swim.", "J’apprends ____ nager.", "à", ["de", "au", "du"], "Apprendre à introduces an infinitive: apprendre à nager.");
  add("prep-try", "prepositions", "prepositions", "essayer de", "Try to do something", "J’essaie de comprendre.", "I’m trying to understand.", "J’essaie ____ comprendre.", "de", ["à", "au", "du"], "Essayer takes de before an infinitive: essayer de comprendre.");
  add("prep-think-about", "prepositions", "prepositions", "penser à", "Have someone in mind", "Je pense à toi.", "I’m thinking of you.", "Je pense ____ toi.", "à", ["de", "du", "au"], "Penser à means have someone or something in mind.", "Say someone is on your mind.");
  add("prep-opinion", "prepositions", "prepositions", "penser de", "Give an opinion about something", "Que penses-tu de ce film ?", "What do you think of this film?", "Que penses-tu ____ ce film ?", "de", ["à", "du", "au"], "For an opinion, use penser de. Ce is a demonstrative, so de stays de.", "Ask for an opinion about the film.");
  add("prep-contraction", "prepositions", "prepositions", "parler à + le → parler au", "Choose the preposition, then the article", "Je parle au professeur.", "I’m speaking to the teacher.", "Je parle ____ professeur.", "au", ["du", "à le", "de le"], "Speaking to someone takes à. With le professeur, à + le becomes au.", "le professeur · speak to the teacher");
  add("prep-no-preposition", "prepositions", "prepositions", "aimer + infinitive", "Some verbs take no preposition", "J’aime lire.", "I like reading.", "Choose the usual modern sentence for “I like reading.”", "J’aime lire.", ["J’aime à lire.", "J’aime de lire.", "J’aime du lire."], "In ordinary modern French, aimer is followed directly by the infinitive.");
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
  // Each rule has a second context for mistake review, not a reordered answer.
  function vary(id, ex, exEn, prompt, explanation, hint = ""){
    const card = cards.find(c => c.id === "rule-" + id);
    card.exercise.variants = [{ ...card.exercise, ex, exEn, prompt, explanation, hint }];
  }
  vary("de-m", "Je viens du musée.", "I’m coming from the museum.", "Je viens ____ musée.", "Musée is masculine singular: de + le → du.", "le musée");
  vary("de-f", "Il sort de la maison.", "He’s coming out of the house.", "Il sort ____ maison.", "Maison is feminine singular. De la stays as two words.", "la maison");
  vary("de-vowel", "Je viens de l’hôpital.", "I’m coming from the hospital.", "Je viens ____ hôpital.", "Hôpital starts with a silent h: use de l’, even though it is masculine.", "l’hôpital · masculine");
  vary("de-pl", "Je parle des écoles du quartier.", "I’m talking about the schools in the neighbourhood.", "Je parle ____ écoles du quartier.", "These specific schools take les: de + les → des, including before a vowel.", "les écoles · the specific schools in the neighbourhood");
  vary("partitive", "Elle boit de l’eau.", "She’s drinking some water.", "Elle boit ____ eau.", "Eau begins with a vowel, so the partitive is de l’eau.");
  vary("quantity", "Elle a beaucoup de questions.", "She has a lot of questions.", "Elle a beaucoup ____ questions.", "After beaucoup, use de rather than the indefinite plural des.");
  vary("negative", "Nous ne mangeons pas de fromage.", "We’re not eating any cheese.", "Nous ne mangeons pas ____ fromage.", "The partitive du fromage becomes de fromage in this ordinary negative.");
  vary("negative-etre", "Ce n’est pas du café.", "It isn’t coffee.", "Ce n’est pas ____ café.", "After être, keep the partitive du. Café is masculine.");
  vary("a-m", "Il va au cinéma.", "He’s going to the cinema.", "Il va ____ cinéma.", "Cinéma is masculine singular: à + le → au.", "le cinéma");
  vary("a-f", "Elle va à la banque.", "She’s going to the bank.", "Elle va ____ banque.", "Banque is feminine singular, so use à la.", "la banque");
  vary("a-vowel", "Elle va à l’université.", "She’s going to the university.", "Elle va ____ université.", "Université begins with a vowel: à l’université.", "l’université · feminine");
  vary("a-h", "Nous allons à l’hôpital.", "We’re going to the hospital.", "Nous allons ____ hôpital.", "Hôpital has a silent h. Le becomes l’, giving à l’hôpital.", "l’hôpital · masculine");
  vary("a-pl-m", "Elle parle aux voisins.", "She’s speaking to the neighbours.", "Elle parle ____ voisins.", "Voisins is plural: à + les → aux.", "les voisins");
  vary("a-pl-f", "Il parle aux étudiantes.", "He’s speaking to the female students.", "Il parle ____ étudiantes.", "Plural feminine nouns also take aux: à + les → aux.", "les étudiantes");
  vary("agree-m", "Le chien est petit.", "The dog is small.", "Le chien est ____.", "Chien is masculine singular: petit.", "le chien");
  vary("agree-f", "Ma sœur est contente.", "My sister is happy.", "Ma sœur est ____.", "Sœur is feminine singular, so use contente.");
  vary("agree-mp", "Les garçons sont contents.", "The boys are happy.", "Les garçons sont ____.", "Garçons is masculine plural, so add -s: contents.");
  vary("agree-fp", "Les filles sont contentes.", "The girls are happy.", "Les filles sont ____.", "Filles is feminine plural: contente + s → contentes.");
  vary("agree-irregular", "La fleur est belle.", "The flower is beautiful.", "La fleur est ____.", "Fleur is feminine singular. The feminine of beau is belle.", "la fleur");
  vary("noun-plural", "Les journaux sont ici.", "The newspapers are here.", "Les ____ sont ici.", "The plural of journal is journaux, not journals.", "le journal");
  vary("quel-fp", "Quelles chaussures préfères-tu ?", "Which shoes do you prefer?", "____ chaussures préfères-tu ?", "Chaussures is feminine plural, so use quelles.", "la chaussure");
  vary("verb-je", "Tu parles anglais.", "You speak English.", "Tu ____ anglais.", "Tu takes the regular -er ending -es: tu parles.", "parler · present");
  vary("verb-nous", "Nous parlons anglais.", "We speak English.", "Nous ____ anglais.", "Nous takes -ons: nous parlons.", "parler · present");
  vary("verb-vous", "Vous parlez espagnol.", "You speak Spanish.", "Vous ____ espagnol.", "Vous takes -ez: vous parlez, including polite singular vous.", "parler · present");
  vary("verb-elles", "Elles parlent anglais.", "They speak English.", "Elles ____ anglais.", "Elles takes -ent, just like ils: elles parlent.", "parler · present");
  vary("verb-etre", "Nous sommes ici.", "We’re here.", "Nous ____ ici.", "The present of être with nous is sommes.", "être · present");
  vary("verb-avoir", "Elles ont deux chats.", "They have two cats.", "Elles ____ deux chats.", "The present of avoir with elles is ont.", "avoir · present");
  vary("verb-aller", "Ils vont à la gare.", "They’re going to the station.", "Ils ____ à la gare.", "The present of aller with ils is vont.", "aller · present");
  vary("verb-on", "On va au cinéma.", "We’re going to the cinema.", "On ____ au cinéma.", "On takes a singular verb: on va, even when it means we.", "aller · present");
  vary("question-intonation", "Tu viens demain ?", "Are you coming tomorrow?", "For tomorrow’s plans, ask “Are you coming?” using informal statement order.", "Use tu viens ? with rising intonation. Demain specifies tomorrow.");
  vary("question-estce", "Est-ce que tu viens demain ?", "Are you coming tomorrow?", "Est-ce que ____ demain ?", "After est-ce que, keep tu before the conjugated verb viens.");
  vary("question-inversion", "Parlez-vous français au travail ?", "Do you speak French at work?", "You are at work. Ask “Do you speak French?” formally with inversion.", "Use parlez-vous with a hyphen; vous takes parlez.");
  vary("question-t", "Parle-t-elle français à la maison ?", "Does she speak French at home?", "For a conversation about home, invert “elle parle français”.", "Parle ends in a vowel. Insert -t- before elle: parle-t-elle.");
  vary("question-elision", "Est-ce qu’il vient demain ?", "Is he coming tomorrow?", "____ il vient demain ?", "Que becomes qu’ before il. Use est-ce qu’il.");
  vary("question-where", "Où est-ce que tu travailles ?", "Where do you work?", "____ est-ce que tu travailles ?", "Où asks for a place, here someone’s workplace.", "Ask where someone works.");
  vary("question-what", "Qu’est-ce que tu fais demain ?", "What are you doing tomorrow?", "____ tu fais demain ?", "Tu is the subject. Ask about the activity with qu’est-ce que.", "Ask what someone is doing tomorrow.");
  vary("question-subject", "Qu’est-ce qui se passe ici ?", "What’s happening here?", "____ se passe ici ?", "The unknown thing is the subject: qu’est-ce qui se passe.", "Ask what is happening here.");
  vary("question-howmany", "Combien de chats as-tu ?", "How many cats do you have?", "Combien ____ chats as-tu ?", "Use combien de to ask a quantity, without des.");
  vary("question-when", "Quand est-ce que tu arrives ?", "When are you arriving?", "____ est-ce que tu arrives ?", "Quand asks for a time.", "Ask when someone is arriving.");
  vary("question-why", "Pourquoi est-ce qu’il reste ?", "Why is he staying?", "____ est-ce qu’il reste ?", "Pourquoi asks for a reason.", "Ask the reason someone is staying.");
  vary("question-how", "Comment est-ce que tu vas au travail ?", "How do you get to work?", "____ est-ce que tu vas au travail ?", "Comment asks about the method or means of travel.", "Ask how someone travels to work.");
  vary("question-who", "Qui vient demain ?", "Who is coming tomorrow?", "____ vient demain ?", "Qui asks which person is the subject; use the singular vient.", "Ask who is coming tomorrow.");
  vary("neg-order", "Nous ne parlons pas anglais.", "We don’t speak English.", "Nous ____ parlons pas anglais.", "Ne comes before the conjugated verb parlons; pas follows it.");
  vary("neg-elision", "Il n’habite pas ici.", "He doesn’t live here.", "Il ____ habite pas ici.", "Habite has a silent h, so ne elides to n’.");
  vary("neg-du", "Elle ne mange pas de fromage.", "She’s not eating any cheese.", "Elle ne mange pas ____ fromage.", "In this ordinary negative, du fromage becomes de fromage.");
  vary("neg-dela", "Il ne mange pas de soupe.", "He’s not eating any soup.", "Il ne mange pas ____ soupe.", "The feminine partitive de la soupe becomes de soupe in this negative.");
  vary("neg-des", "Nous n’achetons pas de pommes.", "We’re not buying any apples.", "Nous n’achetons pas ____ pommes.", "The plural indefinite des becomes de after an ordinary negative.");
  vary("neg-vowel", "Elle n’a pas d’eau.", "She doesn’t have any water.", "Elle n’a pas ____ eau.", "De l’eau becomes de in the negative, then d’ before the vowel.");
  vary("neg-definite", "Elle n’aime pas le chocolat.", "She doesn’t like chocolate.", "Elle n’aime pas ____ chocolat.", "A general preference keeps the definite article le, even in the negative.", "Say she dislikes chocolate in general.");
  vary("neg-definite-pl", "Il n’aime pas les carottes.", "He doesn’t like carrots.", "Il n’aime pas ____ carottes.", "This preference uses the definite plural les, which stays in the negative.", "Say he dislikes carrots in general.");
  vary("neg-etre", "Ce n’est pas une orange.", "It isn’t an orange.", "Ce n’est pas ____ orange.", "After être, keep the indefinite article une. Orange is feminine.");
  vary("neg-never", "Elle ne boit jamais de café.", "She never drinks coffee.", "Elle ne boit ____ de café.", "Ne…jamais means never. Jamais replaces pas.", "Say she never drinks coffee.");
  vary("neg-anymore", "Il ne mange plus de viande.", "He doesn’t eat meat anymore.", "Il ne mange ____ de viande.", "Ne…plus means not anymore. Do not add pas.", "Say he no longer eats meat.");
  vary("neg-only", "Elle ne boit que du café.", "She only drinks coffee.", "Elle ne boit que ____ café.", "Ne…que means only, so keep the partitive du café.");
  vary("prep-person", "Elle parle à Paul.", "She’s speaking to Paul.", "Elle parle ____ Paul.", "Speaking to a person takes parler à; a person’s name needs no article.", "Say she is speaking to Paul.");
  vary("prep-topic", "Elle parle de son travail.", "She’s talking about her work.", "Elle parle ____ son travail.", "A topic takes parler de. Son is a possessive, so no contraction.", "Say her work is the topic.");
  vary("prep-destination", "Nous allons à Québec.", "We’re going to Québec City.", "Nous allons ____ Québec.", "To Québec City takes à. The province instead takes au Québec.", "Québec City · your destination");
  vary("prep-origin", "Elle vient de Paris.", "She’s coming from Paris.", "Elle vient ____ Paris.", "The place you come from takes venir de. Paris has no article.", "Say Paris is where she is coming from.");
  vary("prep-need", "Elle a besoin de calme.", "She needs quiet.", "Elle a besoin ____ calme.", "Use avoir besoin de. Here calme is an unspecified need.");
  vary("prep-want", "Elle a envie de partir.", "She feels like leaving.", "Elle a envie ____ partir.", "Avoir envie takes de before an infinitive.");
  vary("prep-learn", "Nous apprenons à cuisiner.", "We’re learning to cook.", "Nous apprenons ____ cuisiner.", "Apprendre takes à before an infinitive.");
  vary("prep-try", "Elle essaie de dormir.", "She’s trying to sleep.", "Elle essaie ____ dormir.", "Essayer takes de before an infinitive.");
  vary("prep-think-about", "Elle pense à toi.", "She’s thinking of you.", "Elle pense ____ toi.", "Having someone in mind uses penser à.", "Say someone is on her mind.");
  vary("prep-opinion", "Que penses-tu de ce livre ?", "What do you think of this book?", "Que penses-tu ____ ce livre ?", "To ask an opinion, use penser de. Ce does not contract.", "Ask for an opinion about the book.");
  vary("prep-contraction", "Elle parle au médecin.", "She’s speaking to the doctor.", "Elle parle ____ médecin.", "Speaking to someone takes à; à + le médecin → au médecin.", "le médecin · speak to the doctor");
  vary("prep-no-preposition", "Nous aimons lire.", "We like reading.", "Choose the correct sentence for “I like reading”, using the usual modern construction.", "J’aime is directly followed by the infinitive lire, without à or de.");
  const readingReview = cards.find(c => c.id === "rule-prep-no-preposition").exercise.variants[0];
  Object.assign(readingReview, { prompt: "Choose the correct sentence for “We like reading.”",
    answer: "Nous aimons lire.", wrong: ["Nous aimons à lire.", "Nous aimons de lire.", "Nous aimons du lire."] });
  return { rules, collections, cards };
})();
