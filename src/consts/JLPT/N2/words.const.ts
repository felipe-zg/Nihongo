export const N2ExtraWords: Record<string, TangoEntry> = {
  'Extra' : {
    meaning: "Extra vocabs that are not in the FastPass list but are useful for N2",
    words: [
      {
        id: 1,
        wordRuby: "握{あく}手{しゅ}",
        meaning: "handshake",
        info: "N + に対して means: towards N・regarding N・concerning N・in response to N",
        components: [
          { kanji: "握", meaning: "grasp・hold" },
          { kanji: "手", meaning: "hand" },
        ],
        example: "ファンは選手[に対して]感謝の気持ちを伝えようとし、試合後に{握手}をccた。",
        exampleMeaning: "The fan tried to express gratitude [toward the] athlete and asked for a {handshake} after the match.",
        extraVocabulary: [
          { wordRuby: "求{もと}める", meaning: "to seek・to request" },
          { wordRuby: "握{にぎ}る", meaning: "to grasp・to hold" }
        ]
      },
      {
        id: 2,
        wordRuby: "衣{い}装{しょう}",
        meaning: "clothing・costume",
        info: "especially one used for a performance, event, or special appearance.\nN1 + に対して + N2 means: compared to・in contrast to・whereas (used to compare two things, highlighting their differences or contrasting characteristics.)\nIt emphasizes: the clear distinction between the two subjects being compared, often to show how they differ in nature, purpose, or style.",
        components: [
          { kanji: "衣", meaning: "clothing" },
          { kanji: "装", meaning: "dress・attire・decorate" }
        ],
        example: "[舞台]{衣装}[に対して]、普段着は動きやすさを[重視]して作られている。",
        exampleMeaning: "[Compared to] stage {costumes}, everyday clothes are made with ease of movement as a [priority].",
        extraVocabulary: [
          { wordRuby: "舞{ぶ}台{たい}", meaning: "stage" },
          { wordRuby: "重{じゅう}視{し}", meaning: "emphasis・priority" }
        ],
      },
      {
        id: 3,
        wordRuby: "避{ひ}難{なん}",
        meaning: "evacuation・escape",
        info: "〜ごとに means: every time ~・whenever ~・for each・for every. [～のときは、いつも] (used to express that something happens repeatedly or regularly whenever a certain action or event occurs.)\nIt emphasizes: the regularity or consistency of the action or event happening each time a specific condition is met.\nWhen preceded by a noun, ごとに means 'each' or 'every'.\nWhen preceded by a verb, it means 'every time' or 'whenever'.",
        components: [
          { kanji: "避", meaning: "avoid" },
          { kanji: "難", meaning: "disaster・difficulty" }
        ],
        example: "地震が発生する[ごとに]、地域の住民は{避難}[経路]を確認[するようにしている]。\n3つ買う[ごとに]1つプレゼントです。",
        exampleMeaning: "[Whenever (every time)] an earthquake occurs, the local residents make a point of checking the {evacuation} routes.\n[For every] 3 you buy, you get 1 free.",
        extraVocabulary: [
          { wordRuby: "火{か}災{さい}", meaning: "fire disaster" },
          { wordRuby: "住{じゅう}民{みん}", meaning: "resident" },
          { wordRuby: "経{けい}路{ろ}", meaning: "route" },
        ]
      },
      {
        id: 4,
        wordRuby: "無{な}くなる",
        meaning: "to disappear・to be lost・to be gone",
        info: "〜のことだから means: knowing ~'s character・given that ~ (used to express that something is expected or likely to happen based on what is known about a person's character, behavior, or tendencies.)\nIt emphasizes: the speaker's confidence in their prediction or expectation based on their understanding of the person's nature or past actions.\n\n〜はずがない means: there's no way ~・it is impossible that ~ [Same as わけがない] (used to express strong certainty that something is not the case or will not happen.)\nIt emphasizes: the speaker's firm belief or conviction that the stated situation or outcome is highly unlikely or impossible based on logic, evidence, or common sense.\n\n〜からといって means: just because ~・even though ~・it does not necessarily mean that ~ [ 〜という理由だけでは判断できない ] (used to express that a certain reason or condition does not necessarily lead to a specific outcome or conclusion.)\nIt emphasizes: the idea that while a particular reason may exist, it does not guarantee or dictate the expected result, highlighting the potential for exceptions or alternative outcomes.",
        components: [
          { kanji: "無", meaning: "nothing・nonexistent" },
          { kanji: "なる", meaning: "to become" }
        ],
        example: "真面目な田中さん[のことだから]、少しくらいやる気が{無くなった}[からといって]、仕事を途中で投げ出す[はずがない]。",
        exampleMeaning: "[Knowing] how serious Tanaka is, [there's no way] he would abandon his work halfway [just because] he {lost} a bit of motivation.",
        extraVocabulary: [
          { wordRuby: "恩{おん}師{し}", meaning: "mentor・teacher" },
          { wordRuby: "先{せん}祖{ぞ}", meaning: "ancestor" },
        ]
      },
      {
        id: 5,
        wordRuby: "伴{ともな}う",
        meaning: "to accompany・to bring with・to involve",
        info: "〜に限って means: unlike the usual・of all times (used to express that something happens in a way that is different from what is usual or expected, often with a nuance of irony or frustration.)\nIt emphasizes: the contrast between the current situation and what is typically expected, often highlighting the inconvenience, irony, or bad timing of the event.",
        components: [
          { kanji: "伴", meaning: "accompany" }
        ],
        example: "普段は慎重な彼[に限って]、危険を{伴う}計画に何の疑いもなく賛成するなんて信じられない。",
        exampleMeaning: "Of all people, the normally cautious him agreeing to a {risky} plan without any doubts is hard to believe.",
        extraVocabulary: [
          { wordRuby: "慎{しん}重{ちょう}", meaning: "caution・prudence" },
        ]
      },
      {
        id: 6,
        wordRuby: "疑{うたが}う",
        meaning: "to doubt・to question・to distrust",
        info: "〜ことは〜が means: it's true that ~, but ~ ・I did ~, but ~・although~ (used to acknowledge the truth of the first statement while introducing a contrasting or mitigating point in the second statement.)\nIt emphasizes: the speaker's recognition of the validity of the initial statement while also highlighting a contrasting aspect or concern that may temper or complicate the situation.\nこの～の部分は、同じ言葉が入るので注意してください。",
        components: [
          { kanji: "疑", meaning: "doubt" }
        ],
        example: "その話を{疑う}[ことは]{疑う}[が]、完全に否定できる[わけでもない]。",
        exampleMeaning: "I do have my {doubts} about that story, but I can't completely deny it either.",
        extraVocabulary: [
          { wordRuby: "完{かん}全{ぜん}", meaning: "complete" },
          { wordRuby: "否{ひ}定{てい}", meaning: "denial" }
        ],
      },
      {
        id: 7,
        wordRuby: "命{めい}令{れい}",
        meaning: "order・command",
        info: "〜とは限らない means: not necessarily ~・not always ~ [100%〜だと言えない] (used to express that something is not always the case or that there are exceptions to a general statement.)\nIt emphasizes: the possibility of exceptions or variations in a situation, suggesting that while something may be generally true, it is not guaranteed in every instance.",
        components: [
          { kanji: "命", meaning: "command" },
          { kanji: "令", meaning: "Order" }
        ],
        example: "社長の{命令}であっても、常に正しい[とは限らない]ため、社員も自分で判断する必要がある。",
        exampleMeaning: "Even if it is the president's {order}, [it is not necessarily] always correct, so employees also need to make their own judgments."
      },
      {
        id: 8,
        wordRuby: "複{ふく}雑{ざつ}な",
        meaning: "complicated・complex",
        info: "〜ものがある means: there is something that ~・one cannot help feeling ~ (used  to express one's feelings. It is used when you want to say that you feel a certain way, not when you want to say clearly that you have a specific feeling.)",
        components: [
          { kanji: "複", meaning: "multiple" },
          { kanji: "雑", meaning: "mixed" }
        ],
        example: "その事件の背景は非常に{複雑}で、考えさせられる[ものがある]。",
        exampleMeaning: "The background of this incident is extremely {complex} and gives one much to think about.",
        extraVocabulary: [
          { wordRuby: "事{じ}件{けん}", meaning: "incident・case" },
          { wordRuby: "背{はい}景{けい}", meaning: "background" },
        ]
      },
      {
        id: 9,
        wordRuby: "意{い}外{がい}な",
        meaning: "unexpected・surprising",
        info: "〜にしても means: even if ~・even though ~ (It is used when you want to say that your opinion or the result does not change even if you consider it to be a certain way. It is often used when expressing your thoughts or opinions)",
        components: [
          { kanji: "意", meaning: "thought" },
          { kanji: "外", meaning: "outside" }
        ],
        example: "{意外な}結果だった[にしても]、最後まで冷静[に対応する]べきだった。",
        exampleMeaning: "[Even though] the result was {unexpected}, we should have remained calm until the end.",
        extraVocabulary: [
          { wordRuby: "冷{れい}静{せい}", meaning: "calm" },
        ],
      },
      {
        id: 10,
        wordRuby: "徐{じょ}々{じょ}に",
        meaning: "gradually・step by step",
        info: "〜もらってくれない？ means: Could you please ~? [ 私のために、この物を「もらう」ということをしてくれませんか？ ] (used to make a polite request for someone to do something for you.)\nis used to ask someone to do the act of receiving something for your sake. It is a way of requesting that the person receives this item, which essentially means 'I will give this to you'. However, there are specific situations in which the expression 'もらってくれない？' is used.",
        components: [
          { kanji: "徐", meaning: "slowly・gently" },
          { kanji: "々", meaning: "Kanji repetition" }
        ],
        example: "部屋の荷物を{徐々に}減らしたいんだけど、この本を何冊か[もらってくれない？]",
        exampleMeaning: "I'd like to {gradually} reduce the amount of stuff in my room, so could you take a few of these books for me?",
        extraVocabulary: [
          { wordRuby: "冊{さつ}", meaning: "volume・copy" },
          { wordRuby: "次{し}第{だい}に", meaning: "Gradually・little by little" },
          { wordRuby: "だんだん", meaning: "gradually" },
          { wordRuby: "少{すこ}しずつ", meaning: "little by little" }
        ]
      },
      {
        id: 11,
        wordRuby: "次{し}第{だい}に",
        meaning: "Gradually・little by little・progressively",
        info: "〜してもよろしいでしょうか means: Is it ok to ~?・Mai I ~? - It is a very polite way to ask someone for permission or to inquire about something.",
        components: [
          { kanji: "次", meaning: "next" },
          { kanji: "第", meaning: "order・number・rank" }
        ],
        example: "仕事が{次第に}忙しくなってきたため、来週の会議の日程を変更[してもよろしいでしょうか]。",
        exampleMeaning: "As work has {gradually} become busier, would it be acceptable to change the date of next week's meeting?"
      },
      {
        id: 12,
        wordRuby: "ずいぶん",
        meaning: "very・quite・rather・pretty・considerably",
        info: "Noun + さえ means: even N; used to emphasize that something is surprising, unexpected, or extreme in relation to the noun it follows. It often implies that if even this particular noun is included or considered, then the situation is even more significant or noteworthy.",
        example: "その本は{ずいぶん}人気があるらしく、図書館では題名[さえ]見つけられなかった。",
        exampleMeaning: "Apparently that book is {extremely} popular, I couldn't [even] find its title in the library.",
        extraVocabulary: [
          { wordRuby: "題{だい}名{めい}", meaning: "title" }
        ],
      },
      {
        id: 13,
        wordRuby: "剥{は}げる",
        meaning: "to peel off・to come off",
        info: "〜ようとする means: to be about to ~・to be on the verge of ~ (used to express that something is just about to happen or is on the verge of happening.). The speaker observes a change that is just starting to happen.",
        components: [
          { kanji: "剥", meaning: "peel" }
        ],
        example: "長年使っていた机は、表面の塗装が{剥げ}[ようとして]いたので、新しく塗り直すことにした。",
        exampleMeaning: "The desk I had used for many years was [just about to] have its surface paint {peel off}, so I decided to repaint it.",
        extraVocabulary: [
          { wordRuby: "塗{と}装{そう}", meaning: "paint" },
          { wordRuby: "塗{ぬ}る", meaning: "to paint" }
        ],
      },
      {
        id: 14,
        wordRuby: "取{と}れる",
        meaning: "to be taken・to be removed・to be obtained",
        info: "〜かのように means: as if ~・as though ~・like ~ [ 〜みたいに見える ] (used to express that something appears or seems to be a certain way, often based on the speaker's perception or interpretation of a situation.)/ means that although it is not actually the case, it appears to be so, but in reality, it is not. It is used when you want to say that it only appears to be so.",
        components: [
          { kanji: "取", meaning: "take" }
        ],
        example: "彼女は経営の経験が何年もある[かのように]話していたが、実際には資格を一つ{取れた}だけだった。",
        exampleMeaning: "She spoke [as if] she had years of management experience, but in reality she had only {obtained} a single qualification.",
        extraVocabulary: [
          { wordRuby: "経{けい}営{えい}", meaning: "management・operation" },
          { wordRuby: "資{し}格{かく}", meaning: "qualification" }
        ],
      },
      {
        id: 15,
        wordRuby: "仕{し}草{ぐさ}",
        meaning: "mannerism・gesture・behavior・movement",
        info: "Usually written in hiragana: しぐさ. refers to the way someone naturally moves, behaves physically, or gestures, often without conscious thought. Often it carries a nuance of something expressive, charming, noticeable, or emotionally revealing.\n〜つもり means: thinking that ~・believing that ~ [ 自分は 〜 だと思っている ] (used to express that someone thinks or believes something to be the case, often with a nuance of intention or assumption.)\nIt emphasizes: the person's belief or assumption about their own actions, intentions, or feelings, which may not necessarily align with reality or how others perceive them.\nThis grammar is very similar in meaning to '〜かのように', but 'かのように' means that although it is not actually the case, it appears to be so. On the other hand, 'つもり' means that although it is not actually the case, one believes it to be so. Please be careful as there is a slight difference.",
        components: [
          { kanji: "仕", meaning: "serve" },
          { kanji: "草", meaning: "grass" }
        ],
        example: "彼は親切な[つもり]なのだろうが、その{仕草}は相手によっては失礼だと受け取られることがある",
        exampleMeaning: "He probably [thinks] he's being kind, but depending on the person, that {gesture} can be perceived as rude."
      },
      {
        id: 16,
        wordRuby: "動{どう}作{さ}",
        meaning: "movement・action・operation",
        info: "〜げ means: seeming ~・looking ~・appearing ~・as if ~ [〜そうだ] (used to express that something seems to be a certain way based on outward appearance or behavior, often with a nuance of impression or perception.)\nIt is used when you want to say how someone appears from the perspective of others. It is especially used for feelings. It is used when you want to say that from the perspective of people around, it looks like this is how they feel.\n気持ちを表す言葉と一緒に使われることが、ほとんどです。",
        components: [
          { kanji: "動", meaning: "move" },
          { kanji: "作", meaning: "make" }
        ],
        example: "面接中、彼は自信あり[げ]に質問に答えていたが、緊張していることは落ち着きのない{動作}からすぐに分かった。",
        exampleMeaning: "During the interview, he answered the questions [as if] he were very confident, but it was immediately clear from his restless {movements} that he was nervous.",
        extraVocabulary: [
          { wordRuby: "緊{きん}張{ちょう}", meaning: "nervousness" }
        ]
      },
      {
        id: 17,
        wordRuby: "冷{れい}静{せい}な",
        meaning: "calm・composed",
        info: "〜まい means: probably not ~・I don't think ~・I doubt that ~ [① 〜ないだろう・② 絶対 〜 ない] (used to express negation, similar to 'ない', but it has two different usages. The first usage is to express a prediction or assumption that something will not happen, like saying 'It probably won't rain today' based on the situation. The second usage is to express a strong determination not to do something, like saying 'I will definitely not think about it anymore!' as a way of convincing oneself to stop thinking about something unpleasant.)\n\n来る = くるまい or こまい\nする = すまい or しまい\n\nこの2つめの意味の「まい」は自分の意志を表す文法ですから自分のことを言うと覚えておきましょう。",
        components: [
          { kanji: "冷", meaning: "cold" },
          { kanji: "静", meaning: "quiet" }
        ],
        example: "どんな緊急事態でも、彼ほど{冷静な}判断ができる人はいる[まい]。",
        exampleMeaning: "Even in an emergency, there is [probably] no one who can make judgments as {calmly} as he can.",
        extraVocabulary: [
          { wordRuby: "緊{きん}急{きゅう}", meaning: "emergency" },
          { wordRuby: "事{じ}態{たい}", meaning: "situation" },
          { wordRuby: "判{はん}断{だん}", meaning: "judgment・decision" },
          { wordRuby: "冷{つめ}たい", meaning: "cold" },
          { wordRuby: "静{しず}か", meaning: "quiet" },
        ]
      },
      {
        id: 18,
        wordRuby: "麓{ふもと}",
        meaning: "foot of a mountain",
        info: "It refers to the area at the bottom of a mountain where flat land begins.\nおいでになる is the honorific form of いる (to be), 来る (to come) an 行く (to go). It is used to show respect when referring to the actions of someone of higher status, such as a teacher, elder, or someone you want to show respect to. It can be used in various contexts, including when talking about someone's presence, arrival, or departure.",
        components: [
          { kanji: "麓", meaning: "foot of a mountain" }
        ],
        example: "山の{麓}に[おいでになる]住職のお話を聞くために、多くの人が寺を訪れた。",
        exampleMeaning: "Many people visited the temple to hear the head priest who lives at the {foot of the mountain}.",
        extraVocabulary: [
          { wordRuby: "住{じゅう}職{しょく}", meaning: "head priest" },
          { wordRuby: "訪{おとず}れる", meaning: "to visit" },
        ],
      },
      {
        id: 19,
        wordRuby: "砂{さ}糖{とう}",
        meaning: "sugar",
        info: "〜気味 means: a bit like ~・feeling a little ~・somewhat ~ [ 少し〜のような感じがする ] (It is used when you cannot say something clearly, but you want to express that you feel something like this a little bit.)",
        components: [
          { kanji: "砂", meaning: "sand" },
          { kanji: "糖", meaning: "sugar" }
        ],
        example: "最近は寝不足[気味]で集中力が落ちているので、コーヒーに入れる{砂糖}の量を間違えることが増えた。",
        exampleMeaning: "Lately [I've been] a bit sleep-deprived and my concentration has dropped, so I've been making more mistakes with the amount of {sugar} I put in my coffee.",
        extraVocabulary: [
          { wordRuby: "寝{ね}不{ぶ}足{そく}", meaning: "lack of sleep・sleep deprivation" },
        ],
      },
      {
        id: 20,
        wordRuby: "規{そく}則{そく}",
        meaning: "rule・regulation",
        info: "〜てからでないと means: unless ~・until ~ (used to express that something cannot happen or be done until a certain action or condition is fulfilled.)\nIt emphasizes: the necessity of completing the first action or meeting the condition before the second action can occur or be allowed.\nからじゃないと is used in spoken language (Conversations).",
        components: [
          { kanji: "規", meaning: "rule" },
          { kanji: "則", meaning: "regulation" }
        ],
        example: "この図書館には、借りている本を全部[返してからでないと]、ほかの本が借りられないという{規則}がある。",
        exampleMeaning: "There is a rule at this library that you cannot borrow other books until you return all the books you have borrowed."
      },
      {
        id: 21,
        wordRuby: "経{けい}営{えい}",
        meaning: "management・operation",
        info: "〜てからじゃないと is the more informal version 〜てからでないと used in daily conversation.",
        components: [
          { kanji: "経", meaning: "manage" },
          { kanji: "営", meaning: "business" }
        ],
        example: "実際に会社を{経営}してみて[からじゃないと]、経営者が[抱える]苦労は本当には理解できない。",
        exampleMeaning: "[Unless] you actually try {running} a company, you can't truly understand the difficulties that business owners face.",
        extraVocabulary: [
          { wordRuby: "抱{かか}える", meaning: "to hold・to have (a problem, responsibility, etc.)" }
        ],
      },
      {
        id: 22,
        wordRuby: "感{かん}謝{しゃ}",
        meaning: "gratitude・appreciation",
        info: "Vた + 〜きり means: ever since ~・after ~ [ 〜したあと、ずっとそのまま ] (used to express that something has not changed or has not happened again since a certain action or event occurred.)\nIt emphasizes: the lasting impact or consequence of the action or event, often suggesting that it has been a long time since anything else has happened or changed.\n話すときには小さい「つ」が間に入って、「行ったっきり」のような言い方になる場合もあります。",
        components: [
          { kanji: "感", meaning: "feeling" },
          { kanji: "謝", meaning: "apologize・thank" }
        ],
        example: "お世話になった先生に{感謝}を伝えた[きり]、その後は何年も連絡を取っていない。",
        exampleMeaning: "[Ever since] I {thanked} the teacher who had helped me, I haven't been in contact with them for years."
      },
      {
        id: 23,
        wordRuby: "喜び",
        meaning: "joy・happiness",
        info: "〜たびに means: every time ~・whenever ~ [～するとき、いつも] (used to express that something happens repeatedly or regularly whenever a certain action or event occurs.)\nIt emphasizes: the regularity or consistency of the action or event happening each time a specific condition is met.",
        components: [
          { kanji: "喜ぶ", meaning: "to be delighted" }
        ],
        example: "タクシー会社を経営する青山氏は、インタビューで「お客様から感謝の言葉を[いただくたび]、人の役に立つ{喜び}を感じます。」と語った。",
        exampleMeaning: "Mr. Aoyama, who runs a taxi company, said in an interview, 'Every time I receive words of gratitude from customers, I feel the joy of being helpful to people.'",
        extraVocabulary: [
          { wordRuby: "喜{よろこ}ぶ", meaning: "to be delighted" },
        ],
      },
      {
        id: 24,
        wordRuby: "妻{つま}",
        meaning: "wife",
        info: "〜がち means: tend to ~・be prone to ~・have a tendency to ~・Often does ~ [よく〜になる・よく〜する] (used to express that someone tends to do something or is prone to a certain behavior or condition.)\nIt emphasizes: the habitual nature of the behavior or condition, often suggesting that it happens frequently or is a common pattern for the person.",
        components: [
          { kanji: "妻", meaning: "wife" }
        ],
        example: "{妻}は心配性なので、子供のことになると考えすぎ[がち]だ。",
        exampleMeaning: "{My wife} is a worrier, so when it comes to the children, she [tends to] overthink things.",
        extraVocabulary: [
          { wordRuby: "心{しん}配{ぱい}性{しょう}", meaning: "worrier・anxious personality" },
        ],
      },
      {
        id: 25,
        wordRuby: "研{けん}究{きゅう}",
        meaning: "research・study",
        info: "〜っぽい means: seeming ~・looking ~・has the characteriscs of ~ [ ① ～のように感じる  'feels like ~' ]",
        components: [
          { kanji: "研", meaning: "sharpen・polish" },
          { kanji: "究", meaning: "investigate" }
        ],
        example: "彼の発表はまだ途中段階なのに、まるで{研究}が完成した[っぽい]話し方だった。",
        exampleMeaning: "Even though his {research} was still in progress, he spoke [as if] it were already completed.",
        extraVocabulary: [
          { wordRuby: "段{だん}階{かい}", meaning: "stage・phase" },
          { wordRuby: "途{と}中{ちゅう}段{だん}階{かい}", meaning: "in progress stage" },
          { wordRuby: "完{かん}成{せい}", meaning: "completion" },
        ],
      },
      {
        id: 26,
        wordRuby: "羨{うら}ましい",
        meaning: "envious・jealous",
        info: "〜のかというような means: a kind of ~ that makes one wonder if ~・so ~ that you think 'is there really...?' (used to express a sense of disbelief or astonishment about something.)\nIt emphasizes: the strong impression or feeling that something is so extraordinary or surprising that it leads to a sense of wonder or skepticism about its reality.",
        components: [
          { kanji: "羨", meaning: "envy" },
        ],
        example: "彼のギターの上達の速さは、本当に同じ人間な[のかというような]{羨ましさ}を感じさせる",
        exampleMeaning: "The speed at which he improves on the guitar makes me feel a kind of {envy} that [makes me wonder whether] he's really human.",
        extraVocabulary: [
          { wordRuby: "上{じょう}達{たつ}", meaning: "improvement" },
        ],
      },
      {
        id: 27,
        wordRuby: "腕{うで}",
        meaning: "arm",
        info: "〜わけではない means: it's not that ~・it doesn't mean that ~ (used to express that something is not necessarily the case or that there are exceptions to a general statement.)\nIt emphasizes: the possibility of exceptions or variations in a situation, suggesting that while something may be generally true, it is not guaranteed in every instance.",
        example: "{腕}のけがはまだ[完全]に治った[わけではない]が、日常生活には困らなくなった。",
        exampleMeaning: "The injury in his {arm} hasn't fully healed yet, but I no longer has trouble with daily activities.",
        extraVocabulary: [
          { wordRuby: "完{かん}全{ぜん}", meaning: "complete・perfect" }
        ],
      },
      {
        id: 28,
        wordRuby: "厳{げん}重{じゅう}な",
        meaning: "strict・rigorous",
        info: "Verb ます stem + がたい means: difficult to ~・hard to ~・not easy to ~ [〜するのが難しい] (used to express that something is difficult to do or achieve, often due to emotional, psychological, or situational reasons rather than physical difficulty.)\nIt emphasizes: the strong emotional or psychological challenge of doing something, often because it is deeply meaningful, significant, or impactful.",
        components: [
          { kanji: "厳", meaning: "strict" },
          { kanji: "重", meaning: "heavy・serious" }
        ],
        example: "{厳重な}警備が敷かれていた[にもかかわらず]事件が起きたという事実は、[信じがたい]。",
        exampleMeaning: "The fact that an incident occurred despite {tight} security [is hard to] believe.",
        extraVocabulary: [
          { wordRuby: "警{けい}備{び}", meaning: "security" },
          { wordRuby: "敷{し}く", meaning: "to lay・to spread" },
          { wordRuby: "厳{きび}しい", meaning: "strict・severe" }
        ],
      },
      {
        id: 29,
        wordRuby: "分{ぶん}割{かつ}",
        meaning: "Division・Split",
        info: "〜ところだった means: was just about to do・almost did (used to express that something almost happened or was on the verge of happening, often with a nuance of relief or narrowly avoiding a situation.)\nIt emphasizes: the closeness of the situation to occurring, highlighting how narrowly it was avoided or how close one came to taking a certain action.",
        components: [
          { kanji: "分", meaning: "divide" },
          { kanji: "割", meaning: "split" }
        ],
        example: "担当者の説明を聞かなければ、一括払いのつもりで{分割}払いを契約[するところだった]。",
        exampleMeaning: "If I hadn't listened to the person in charge, I would have signed a contract for {installment} payments thinking it was a lump-sum payment.",
        extraVocabulary: [
          { wordRuby: "ところだった", meaning: "was just about to do・almost did" },
          { wordRuby: "～ところだ", meaning: "about to do" },
          { wordRuby: "もう少しで～ところだった", meaning: "almost did ~" }
        ],
      },
      {
        id: 30,
        wordRuby: "環{かん}境{きょう}",
        meaning: "environment",
        components: [
          { kanji: "環", meaning: "circle・surroundings" },
          { kanji: "境", meaning: "boundary・area" }
        ],
        example: "社長として、社員全員が仕事に満足できる{環境}を整えたい。それは単なる理想[でしかないのだろうか]。いや、私は理想ではなく必ず実現できると信じている。",
        exampleMeaning: "As a company president, I want to create an {environment} where all employees can be satisfied with their work. Is that just an ideal? No, I believe that it is not an ideal but something that can definitely be achieved.",
        extraVocabulary: [
          { wordRuby: "N + でしかない", meaning: "nothing more than ~・only ~" },
          { wordRuby: "のだ", meaning: "explanatory・emphatic tone" },
          { wordRuby: "だろう", meaning: "probably・I wonder" },
          { wordRuby: "のだろうか", meaning: "I wonder if ~・could it be that ~・is it perhaps ~" },
        ],
      },
      {
        id: 31,
        wordRuby: "修{しゅう}理{り}",
        meaning: "repair",
        components: [
          { kanji: "修", meaning: "fix" },
          { kanji: "理", meaning: "reason・logic" }
        ],
        example: "長く使っている電子レンジが壊れてしまった。古いものだし、{修理}にかかる費用[を考えると]、もう買い替えたほうがいいかもしれない。",
        exampleMeaning: "The microwave I had been using for a long time broke down. Since It’s old, and [considering] the cost of {repairs}, it might be better to replace it already.",
        extraVocabulary: [
          { wordRuby: "費{ひ}用{よう}", meaning: "cost" },
          { wordRuby: "を考えると", meaning: "considering ~・when considering ~" }
        ],
      },
      {
        id: 32,
        wordRuby: "姫{ひめ}",
        meaning: "princess",
        info: "〜っぽい means: tends to ~・is prone to ~ [ ② よく～する・～しやすい ] (used to express that someone tends to do something or is prone to a certain behavior or condition.)",
        components: [
          { kanji: "姫", meaning: "princess" }
        ],
        example: "その子は{姫}の役を演じているせいか、最近は少し怒り[っぽく]なった。",
        exampleMeaning: "Perhaps because she's playing the role of a {princess}, she has become a bit quick-tempered lately."
      },
      {
        id: 33,
        wordRuby: "農{のう}業{ぎょう}",
        meaning: "agriculture",
        info: "Noun + 連れ means: along with ~・as ~ progresses・as N1 changes, N2 also changes [ Aに変化が起こると、それに伴ってBも変化する ] (used to express that as one thing changes or progresses, another thing also changes in response or in parallel.)\n\nMost commonlu Japanese people use につれて instead of 連れ, but they have the same meaning. 連れ is more formal and is often used in written language, while につれて is more common in spoken language.\n\n～とともに grammar focuses on 'together with', Very similar, but often sounds slightly more formal and objective.\n\n〜連れ can also mean 'together with' in the sense of accompanying someone, for example, 友達連れ、家族連れ、子供連れ、犬連れ.",
        components: [
          { kanji: "農", meaning: "farming" },
          { kanji: "業", meaning: "occupation・business" }
        ],
        example: "{農業}技術の発展[連れ]、収穫量も年々増加している。\n{農業}技術の発展[につれて]、収穫量も年々増加している。",
        exampleMeaning: "[Along with] the development of {agricultural} technology, crop yields have been increasing year by year.",
        extraVocabulary: [
          { wordRuby: "収{しゅう}穫{かく}", meaning: "harvest" },
          { wordRuby: "年{ねん}々{ねん}", meaning: "year by year" },
        ],
      },
      {
        id: 34,
        wordRuby: "想{そう}像{ぞう}",
        meaning: "image・imagination",
        info: "名詞・V ます stem + さえ〜ば means: if only ~ [ 〜だけが大切なことだ ] ('if only I had this'. It is used to express the desire for just this to be present, emphasizing that this is very important! This grammar is used when you want to strongly emphasize that 'this' is very important.)",
        components: [
          { kanji: "想", meaning: "think" },
          { kanji: "像", meaning: "image" }
        ],
        example: "結果を{想像}[さえできれば]、今どうすべきかもっと判断しやすくなるのに。",
        exampleMeaning: "She has a rich {imagination} and creates creative works.",
        extraVocabulary: [
          { wordRuby: "判{はん}断{だん}", meaning: "judgment" },
        ]
      },
      {
        id: 35,
        wordRuby: "知{ち}識{しき}",
        meaning: "knowledge",
        info: "〜にわたって means: across ~・over ~・throughout ~・covering a wide range of ~ [ 〜の範囲全体にわたる ] (used to express that something extends across a wide range or throughout a certain area, field, or period of time.)\nIt emphasizes: the extensive scope or coverage of something, suggesting that it encompasses a broad range of subjects, areas, or time periods.",
        components: [
          { kanji: "知", meaning: "know" },
          { kanji: "識", meaning: "discern" }
        ],
        example: "その教授は、歴史から経済まで幅広い分野[にわたって]豊富な{知識}を持っている。",
        exampleMeaning: "That professor possesses extensive {knowledge} [across] a wide range of fields, from history to economics.",
        extraVocabulary: [
          { wordRuby: "歴{れき}史{し}", meaning: "history" },
          { wordRuby: "経{けい}済{ざい}", meaning: "economy" },
          { wordRuby: "幅{はば}広{ひろ}い", meaning: "wide range" },
          { wordRuby: "豊{ほう}富{ふ}な", meaning: "abundant" },
        ]
      },
      {
        id: 36,
        wordRuby: "具{ぐ}合{あい}",
        meaning: "condition・state",
        info: "〜でたまらない means: unbearably ~・extremely ~ [ 我慢できないくらい、とても ～ だ ] This grammar is used to strongly emphasize one's feelings. The word 'たまらない' means 'unbearable' or 'cannot be endured'. It is used when you want to express that you feel something so strongly that it is unbearable. This expression can also be replaced with '～で仕方がない' or '～でしょうがない'.",
        components: [
          { kanji: "具", meaning: "tool・implement" },
          { kanji: "合", meaning: "fit・match" }
        ],
        example: "子供の{具合}が急に悪くなったので、心配[でたまらない]。",
        exampleMeaning: "My child's {condition} suddenly worsened, so I'm worried sick."
      },
      {
        id: 37,
        wordRuby: "湿{しめ}る",
        meaning: "to get wet・to be damp",
        info: "〜以来 means: since ~ [ 〜のときから、ずっと同じだ ] (used to express that something has been the case continuously since a certain action or event occurred.)\nIt emphasizes: the ongoing nature of a situation or condition that has persisted since the specified time, often suggesting that it has been a significant period of time.",
        components: [
          { kanji: "湿", meaning: "moisture" },
        ],
        example: "引っ越して[以来]、この部屋は日当たりが悪いため、洗濯物がなかなか乾かず{湿り}がちだ。",
        exampleMeaning: "[Ever since] I moved here, because this room gets little sunlight, the laundry doesn't dry easily and tends to stay {damp}.",
        extraVocabulary: [
          { wordRuby: "乾{かわ}く", meaning: "to dry" }
        ],
      },
      {
        id: 38,
        wordRuby: "溶{と}ける",
        meaning: "to dissolve・to melt",
        info: "〜がる means: to feel ~・to show signs of ~ [ 〜と感じているようだ ] (used to express that someone is showing signs of feeling a certain way or has a certain emotion, often based on their behavior or expressions.)\nIt emphasizes: the observable signs or indications of someone's feelings or emotions, suggesting that they are displaying these feelings in a noticeable way.\n\n～がる attaches to emotions and feelings, not to verbs like 溶ける.",
        components: [
          { kanji: "溶", meaning: "dissolve" }
        ],
        example: "子どもはアイスが{溶ける}のを見て、とても残念[がって]いた。",
        exampleMeaning: "The child saw the ice cream {melting} and [appeared] very disappointed.",
      },
      {
        id: 39,
        wordRuby: "叶{かな}う",
        meaning: "to come true・to be realized",
        info: "〜あげく means: after ~・in the end after ~ [ 〜した結果 ] (used to express that after a long process or series of events, a certain outcome or result is reached, often with a nuance of frustration, disappointment, or unexpectedness.)\nThis grammar is used when the result is bad. Since it expresses the result, it is almost the same as the grammar '～末'. While both express results, the key difference is that '〜あげく' is used specifically to indicate bad outcomes. Therefore, it is used when you want to say that despite doing various things, the result was negative.",
        components: [
          { kanji: "叶", meaning: "to be fulfilled" }
        ],
        example: "何年も努力した[あげく]、ようやく子どもの頃からの夢が{叶った}。",
        exampleMeaning: "[After] years of hard work, my childhood dream finally {came true}."
      },
      {
        id: 40,
        wordRuby: "尽{つ}きる",
        meaning: "to be exhausted・to run out",
        info: "〜末 (に) means: after ~ing for a long time・after a long period of ~ing・after much ~ing [ 〜した結果 ] (used to express that after a long time or many repetitions of an action, a certain result is achieved)\nIt emphasizes: the long duration or repeated nature of an action leading to a significant outcome, often highlighting the effort and perseverance involved.\nこの～末という表現は少しかたい表現なので日常生活で友達と使うことはほとんどない。",
        components: [
          { kanji: "尽", meaning: "exhaust" }
        ],
        example: "何日も議論を重ねた[末に]、全員の意見が{尽きた}ところでようやく結論が出た。",
        exampleMeaning: "[After] days of discussion, a conclusion was finally reached when everyone had {run out} of opinions.",
        extraVocabulary: [
          { wordRuby: "無{な}くなる", meaning: "to disappear・to be gone/・to run out" },
        ],
      },
      {
        id: 41,
        wordRuby: "噂{うわさ}",
        meaning: "rumor・gossip",
        info: "〜くせに means: even though ~・despite the fact that ~ [ 〜なのに ] (used to express a contrast between two statements, often with a nuance of criticism, disappointment, or irony.)\nThis grammar is used to criticize someone's bad points or to express one's own dissatisfaction.",
        components: [
          { kanji: "噂", meaning: "rumor" }
        ],
        example: "{噂}の真偽も確かめていない[くせに]、彼はまるで事実である[かのように]話していた",
        exampleMeaning: "[Even though] he hadn't even verified whether the {rumor} was true, he spoke as if it were a fact.",
        extraVocabulary: [
          { wordRuby: "真{しん}偽{ぎ}", meaning: "truth or falsehood・authenticity" },
        ],
      },
      { 
        id: 42,
        wordRuby: "柔{やわ}らかい",
        meaning: "soft",
        info: "〜というより means: rather than ~・more than ~・it's more accurate to say ~ [ 〜ではなくて ] (used to express that one statement is more accurate or appropriate than another, often when correcting or clarifying a previous statement.)\n It is used in the form of 'AというよりB', meaning that it is better to use expression B rather than expression A.",
        components: [
          { kanji: "柔", meaning: "soft" }
        ],
        example: "このパンは{柔らかい}[というより]、口に入れた瞬間に溶けるような食感だ。",
        exampleMeaning: "[Rather than] being merely {soft}, this bread has a texture that seems to melt the moment it enters your mouth.",
        extraVocabulary: [
          { wordRuby: "瞬{しゅん}間{かん}", meaning: "moment" },
          { wordRuby: "溶{と}ける", meaning: "to melt" },
          { wordRuby: "食{しょっ}感{かん}", meaning: "texture" },
        ]
      },
      {
        id: 43,
        wordRuby: "予{よ}想{そう}",
        meaning: "prediction・expectation",
        info: "〜どころではない means: it's no time/situation for ~・The circumstances don't allow me to ~ [ 今は 〜 できない状況だ ] (used to express that one cannot do something or that it is not the right time for a certain action due to being overwhelmed, busy, or facing a difficult situation.)\nsomething more urgent or serious is happening, therefore, the action mentioned cannot realistically be done.\nThis grammar '～どころではない' is very similar to the grammar 'てはいられない'. There are many situations where they can be used interchangeably. If you want to express that it is not the time to be doing something, either can be used. However, 'どころではない' is more commonly used in conversation. It is often said as 'どころじゃない'.",
        components: [
          { kanji: "予", meaning: "preliminary" },
          { kanji: "想", meaning: "imagine" }
        ],
        example: "売り上げが{予想}を大幅に下回ってしまい、新しい事業を計画する[どころではない]。",
        exampleMeaning: "Sales fell far below {expectations}, so [this is no time to] be planning a new business venture.",
        extraVocabulary: [
          { wordRuby: "大{おお}幅{はば}", meaning: "significant" },
          { wordRuby: "下{した}回{まわ}る", meaning: "to fall below" },
          { wordRuby: "計{けい}画{かく}", meaning: "plan" },
        ],
      },
      {
        id: 44,
        wordRuby: "原{げん}因{いん}",
        meaning: "cause・reason",
        info: `
        〜わけにはいかない means: cannot afford to ~・cannot allow oneself to ~・must ~ [ 〜できない・～しなければならない ] (used to express that one cannot do something due to moral, social, or practical reasons, often because it would be inappropriate, irresponsible, or harmful.)\nIt emphasizes: the strong sense of obligation, responsibility, or necessity that prevents someone from doing a certain action, often because it goes against their values, duties, or the expectations of others.\nIt is used when you want to say that you cannot do something due to a certain reason or that you must do something because of special circumstances.
        〜てはいられない means: cannot continue to do ~ [ 〜し続けることができない ] (used when you want to say that it is difficult or impossible to continue in this state. It is often used when you cannot endure or tolerate doing something, or when you want to express that you cannot afford to be doing such a thing)\nこの文法は実際に話すことはあんまりないんですが、よくアニメとかマンガの中で出てくる表現です。
        `,
        components: [
          { kanji: "原", meaning: "origin" },
          { kanji: "因", meaning: "cause" }
        ],
        example: "問題の{原因}が分かっているのに放置する[わけにはいかず]、もう黙って見てい[てはいられない]と思った。",
        exampleMeaning: "I knew the {cause} of the problem, but [I couldn't just] leave it as it was. I felt [I could no longer] stand by and watch.",
        extraVocabulary: [
          { wordRuby: "放{ほう}置{ち}", meaning: "abandoned・To leave alone" },
          { wordRuby: "黙{だま}る", meaning: "to remain silent・To say nothing" },
        ],
      },
      {
        id: 45,
        wordRuby: "複{ふく}雑{ざつ}",
        meaning: "complex・complicated",
        info: "V. ない STEM + ざるを得ない means: have no choice but to ~・cannot help but ~ [ 嫌だけど 〜 しなければならない ] (used to express that one has no choice but to do something, often because it is necessary, unavoidable, or the only option available.)\nThis grammar is used when you don't really want to do something, but you have to do it anyway, or when you don't want to do something, but you have no other option. It is used when you have to do something unpleasant.\n※しない → せざるを得ない",
        components: [
          { kanji: "複", meaning: "multiple" },
          { kanji: "雑", meaning: "miscellaneous" }
        ],
        example: "問題が予想以上に{複雑}だったため、計画を全面的に見直さ[ざるを得なく]なった。",
        exampleMeaning: "Because the problem was more {complex} than expected, [we had no choice but to] completely revise the plan.",
        extraVocabulary: [
          { wordRuby: "予{よ}想{そう}", meaning: "expectation・prediction" },
          { wordRuby: "全{ぜん}面{めん}", meaning: "completely" },
          { wordRuby: "見{み}直{なお}す", meaning: "to review・to revise" },
        ],
      },
      {
        id: 46,
        wordRuby: "患{かん}者{じゃ}",
        meaning: "patient",
        info: "〜たところだ means: just ~ed・have just ~ed [ さっき ～ が終わった ] (used to express that something has just happened or been completed very recently.)\nIt emphasizes: the immediacy of an action or event, often suggesting that it has just occurred and may still be relevant or have consequences in the present moment.",
        components: [
          { kanji: "患", meaning: "suffer" },
          { kanji: "者", meaning: "person" }
        ],
        example: "{患者}の診察が終わっ[たところ]なので、担当医はまだ診察室にいる。",
        exampleMeaning: "The examination of the {patient} [has just finished], so the doctor is still in the examination room.",
        extraVocabulary: [
          { wordRuby: "診{しん}察{さつ}", meaning: "examination" },
          { wordRuby: "担{たん}当{とう}医{い}", meaning: "attending doctor・Doctor in charge" },
          { wordRuby: "診{しん}察{さつ}室{しつ}", meaning: "examination room" },
        ],
      },
      {
        id: 47,
        wordRuby: "完{かん}成{せい}",
        meaning: "completion・finish",
        info: "〜たところ means: when I did ~・after I did ~・upon doing ~ [ 〜したら ] (It is used when you want to say that after doing something, you found out something)\nこの「～たところ」という表現は少しかたい表現なので、友達同士で使うことはほとんどないと思います。ビジネスの場面や、ニュース記事などでよく見かける表現です。",
        components: [
          { kanji: "完", meaning: "complete" },
          { kanji: "成", meaning: "achieve" }
        ],
        example: "{完成}した作品を改めて確認し[たところ]、小さなミスがいくつか見つかった。",
        exampleMeaning: "[When] I checked the {completed} work again, I found several small mistakes.",
        extraVocabulary: [
          { wordRuby: "改{あらた}めて", meaning: "again・anew" },
        ],
      },
      {
        id: 48,
        wordRuby: "挑{ちょう}戦{せん}",
        meaning: "challenge・Attempt at something difficult",
        info: "〜だけあって means: precisely because ~・as one would expect from ~ [ 〜だから当然そうなる〜 ] (used to express that something is true or happens precisely because of a certain reason or condition, often highlighting the expected outcome based on that reason.)\nused to express a reason with 'because~', but it is used when the reason is special. It is often used when praising someone or saying something good.",
        components: [
          { kanji: "挑", meaning: "challenge" },
          { kanji: "戦", meaning: "battle" }
        ],
        example: "難しい目標に何年も{挑戦して}きた[だけあって]、彼は失敗しても簡単には諦めない",
        exampleMeaning: "[Having] spent years {taking on difficult} goals, he doesn't give up easily when he fails, [as one would expect].",
        extraVocabulary: [
          { wordRuby: "諦{あきら}める", meaning: "to give up" },
        ],
      },
      {
        id: 49,
        wordRuby: "貢{こう}献{けん}",
        meaning: "contribution",
        info: "〜に先立って means: prior to ~・before ~ [ 〜の前に ] (used to express that something happens before a certain event or action takes place.)\nIt emphasizes: the chronological order of events, highlighting that one action or event occurs before another, often in a formal or official context.",
        components: [
          { kanji: "貢", meaning: "contribute" },
          { kanji: "献", meaning: "offer" }
        ],
        example: "地域社会への{貢献}活動を始める[に先立って]、住民への説明会が開かれた。",
        exampleMeaning: "Prior to starting the community {contribution} activities, an informational meeting was held for local residents."
      },
      {
        id: 50,
        wordRuby: "効{こう}果{か}",
        meaning: "effectiveness・result",
        info: "〜はさておき means: putting aside ~・setting aside ~ [ 〜は今は考えないで ] (used when the speaker intentionally sets one topic aside and shifts attention to another topic that is considered more important or immediately relevant)\nIt often appears in discussions, presentations, essays, and formal conversation.\nIt emphasizes: A topic exists and may be important, but the speaker deliberately postpones discussing it in order to focus on something else.",
        components: [
          { kanji: "効", meaning: "effect" },
          { kanji: "果", meaning: "result" }
        ],
        example: "この薬の{効果}[はさておき]、まずは安全性について十分に検証する必要がある。",
        exampleMeaning: "[Putting aside the] {effectiveness} of this medicine for the moment, we first need to thoroughly verify its safety.",
        extraVocabulary: [
          { wordRuby: "安{あん}全{ぜん}性{せい}", meaning: "safety" },
          { wordRuby: "十{じゅう}分{ぶん}に", meaning: "thoroughly" },
          { wordRuby: "検{けん}証{しょう}", meaning: "verification" },
        ],
      },
      {
        id: 51,
        wordRuby: "賛{さん}成{せい}",
        meaning: "approval・agreement",
        info: "〜をめぐって means: over ~・regarding ~・concerning ~ [ 〜について ] (used when a problem or dispute arises. It means 'about ~' and is used when you want to say that a dispute, disagreement, controversy, conflict or discussion arises centered around a certain topic)\nちょっとかたい表現なので日常的な話題に対してはあまり使うことはありません。",
        components: [
          { kanji: "賛", meaning: "approve" },
          { kanji: "成", meaning: "accomplish" }
        ],
        example: "新しい駅の建設計画[をめぐって]、住民の間で{賛成}と反対の意見が対立している。",
        exampleMeaning: "Opinions {for} and against the new station construction plan are divided among the residents.",
        extraVocabulary: [
          { wordRuby: "建{けん}設{せつ}", meaning: "construction" },
          { wordRuby: "対{たい}立{りつ}", meaning: "conflict・confrontation" },
        ],
      },
      {
        id: 52,
        wordRuby: "負{ふ}傷{しょう}",
        meaning: "injury",
        info: "〜というものだ means: this is how it is [ 一般的に言って〜だ ] (used hen you want to say that generally speaking, this is how it is, or that everyone in the world thinks this way)\nThis grammar is used when you want to say that something is generally accepted as true or that it is a common belief or understanding among people. It is often used to express a widely held opinion or a general truth.",
        components: [
          { kanji: "負", meaning: "lose" },
          { kanji: "傷", meaning: "wound" }
        ],
        example: "明らかに{負傷}している選手を無理に出場させるのは、責任ある指導とは言えない[というものだ]。",
        exampleMeaning: "Forcing an obviously injured athlete to compete is something that can hardly be called responsible coaching.",
        extraVocabulary: [
          { wordRuby: "明{あき}らかに", meaning: "obvious・evidently・clearly" },
          { wordRuby: "責{せき}任{にん}", meaning: "responsibility" },
          { wordRuby: "指{し}導{どう}", meaning: "guidance・coaching" },
        ],
      },
      {
        id: 53,
        wordRuby: "混{こん}乱{らん}",
        meaning: "confusion・panic",
        info: "〜というものではない means: it's not necessarily true that ~ [ 絶対に〜だと言えない ] means that you cannot say for sure that something is definitely the case. (used to express that something is not necessarily the case or that it is not always true, often to challenge a common assumption or belief.)",
        components: [
          { kanji: "混", meaning: "mix" },
          { kanji: "乱", meaning: "disorder" }
        ],
        example: "情報をたくさん集めれば{混乱}を避けられる[というものではなく]、必要な情報を正しく整理することも重要だ。",
        exampleMeaning: "[It's not necessarily true that] gathering a lot of information will prevent {confusion}, properly organizing the necessary information is also important.",
        extraVocabulary: [
          { wordRuby: "避{さ}ける", meaning: "to avoid" },
          { wordRuby: "整{せい}理{り}", meaning: "to organize・to sort out" },
        ],
      },
      {
        id: 54,
        wordRuby: "秩{ちつ}序{じょ}",
        meaning: "order・discipline・system",
        info: "V. ます STEM + 〜次第 means: as soon as ~・once ~・immediately after ~ [ 〜したら、すぐに ] (used to express that once a certain action is completed, another action will immediately follow.)\nIt emphasizes: the immediacy of the second action following the completion of the first action, often suggesting a strong cause-and-effect relationship between the two actions.",
        components: [
          { kanji: "秩", meaning: "order" },
          { kanji: "序", meaning: "order" }
        ],
        example: "混乱した状況の中でも、{秩序}が回復し[次第]、避難していた住民は自宅へ戻ることになる。",
        exampleMeaning: "Even amid the confusion, the evacuated residents will return home [as soon as] {order} is restored.",
        extraVocabulary: [
          { wordRuby: "混{こん}乱{らん}", meaning: "confusion" },
          { wordRuby: "状{じょう}況{きょう}", meaning: "situation" },
          { wordRuby: "回{かい}復{ふく}", meaning: "recovery" },
          { wordRuby: "避{ひ}難{なん}", meaning: "evacuation" },
        ],
      },
      {
        id: 55,
        wordRuby: "洗{せん}浄{じょう}",
        meaning: "Washing・cleaning・purification",
        info: "〜済み means: already ~・completed ~・the state of being already done [ すでに終わっている状態 ] (used to indicate that something has already been completed or is in a state of being finished.)\nIt emphasizes: the completion of an action or process, often suggesting that there is no need for further action or that something is ready for use or consumption.",
        components: [
          { kanji: "洗", meaning: "wash" },
          { kanji: "浄", meaning: "Pure" }
        ],
        example: "このサラダは{洗浄}[ずみ]って書いてあるから、そのまま食べられるね。",
        exampleMeaning: "This salad says it's already {washed}, so we can eat it as is.",
        extraVocabulary: [
          { wordRuby: "〜済{ず}み", meaning: "already done・completed・すでに終わっている状態" }
        ]
      },
      {
        id: 56,
        wordRuby: "読{どく}書{しょ}",
        meaning: "Reading",
        info: "〜にしては means: for ~・considering that ~ [ 〜から予想することとは違う ] (used to express that something is surprising or unexpected given a certain condition or characteristic, often indicating a contrast between what is expected and what actually happens.)\nused when you want to say that something is different from what you expected, such as 'they did better than expected' or 'they didn't do as well as expected'.",
        components: [
          { kanji: "読", meaning: "read" },
          { kanji: "書", meaning: "write" }
        ],
        example: "彼は{読書}が趣味だと言う[にしては]、文学作品についてあまり詳しくない。",
        exampleMeaning: "For someone who says {reading} is his hobby, he doesn't know much about literature.",
      },
      {
        id: 57,
        wordRuby: "経{けい}営{えい}",
        meaning: "Management・administration・Running a business",
        info: "〜だけのことはある means: it's no surprise that ~・as one would expect from ~・~ lives up to its reputation [ 〜だから、その結果は当然だ ] (used to express that something is true or happens precisely because of a certain reason or condition, often highlighting the expected outcome based on that reason.)\nSomeone has made a great effort, has significant experience, or has a strong reputation. The result matches that effort, experience, or reputation.\nThe speaker is expressing admiration or recognition: 'The result proves that the reputation/effort was deserved.'",
        components: [
          { kanji: "経", meaning: "Manage" },
          { kanji: "営", meaning: "Operate" }
        ],
        example: "彼は長年会社を{経営}してきた[だけのことはあって]、どんな危機的状況でも冷静な判断ができる。",
        exampleMeaning: "Having {managed} a company for many years, [it's no wonder] he can make calm decisions even in a crisis.",
        extraVocabulary: [
          { wordRuby: "危{き}機{き}", meaning: "crisis" },
          { wordRuby: "状{じょう}況{きょう}", meaning: "situation" },
          { wordRuby: "冷{れい}静{せい}", meaning: "calm" },
          { wordRuby: "判{はん}断{だん}", meaning: "judgment" },
        ],
      },
      {
        id: 58,
        wordRuby: "権{けん}",
        meaning: "right・authority",
        components: [
          { kanji: "権", meaning: "right・authority" }
        ],
        example: "[経営]の[方針]については、社長が決定{権}を持っている。",
        exampleMeaning: "The president has the {right} to make decisions about the company's management.",
        extraVocabulary: [
          { wordRuby: "経{けい}営{えい}", meaning: "Management" },
          { wordRuby: "方{ほう}針{しん}", meaning: "policy" }
        ],
      },
      {
        id: 59,
        wordRuby: "損{そん}壊{かい}",
        meaning: "damage・destruction",
        info: "〜かねる means: cannot do ~・unable to do ~・find it difficult to do ~ [ 〜することができない ] (used to express that one is unable to do something, often due to a lack of ability, resources, or willingness.)\nIt emphasizes: the speaker's inability or unwillingness to perform a certain action, often suggesting that it is beyond their capacity or that they are reluctant to do so. Used for psychological or official inability to comply with a request.",
        components: [
          { kanji: "損", meaning: "loss" },
          { kanji: "壊", meaning: "break" }
        ],
        example: "大地震[による]建物の{損壊}状況が深刻なため、これ以上の立ち入りは[認めかねます]。",
        exampleMeaning: "Because the {damage} to the building [from the] earthquake is severe, [we are unable to] permit any further entry.",
        extraVocabulary: [
          { wordRuby: "状{じょう}況{きょう}", meaning: "situation" },
          { wordRuby: "深{しん}刻{こく}", meaning: "serious・severe" },
          { wordRuby: "立{た}ち入{い}る", meaning: "to enter・to go into" },
          { wordRuby: "認{みと}める", meaning: "to recognize・to admit" }
        ],
      },
      {
        id: 60,
        wordRuby: "各{かく}駅{えき}停{てい}車{しゃ}",
        meaning: "Local train (stops at every station)",
        components: [
          { kanji: "各", meaning: "Each" },
          { kanji: "駅", meaning: "Station" },
          { kanji: "停", meaning: "Stop" },
          { kanji: "車", meaning: "Train" }
        ],
        example: "その駅は{各駅停車}の電車は止まりますが、[急行電車]は[通過]。",
        exampleMeaning: "This {local train} runs from Tokyo to Osaka.",
        extraVocabulary: [
          { wordRuby: "急{きゅう}行{こう}電{でん}車{しゃ}", meaning: "Express train" },
          { wordRuby: "通{つう}過{か}", meaning: "to pass through・to skip" }
        ]
      },
      {
        id: 61,
        wordRuby: "運{うん}休{きゅう}",
        meaning: "Service suspension・Canceled operation",
        info: "It is mainly used for: trains・buses・flights・transportation services\n\n〜において is the same as particle で, is a formal expression often used in: news reports, business documents, academic writing, speeches.",
        components: [
          { kanji: "運", meaning: "Transport" },
          { kanji: "休", meaning: "Rest・Holiday" }
        ],
        example: "大雪の影響[により]、多くの地域[において]電車の{運休}が相次いだ。",
        exampleMeaning: "Due to heavy snowfall, train service suspensions occurred one after another in many regions.",
        extraVocabulary: [
          { wordRuby: "多{た}大{だい}", meaning: "considerable・great・Huge・Enormous" },
          { wordRuby: "相{あい}次{つ}ぐ", meaning: "one after another・repeatedly・back-to-back" },
        ],
      },
      {
        id: 62,
        wordRuby: "すっかり",
        meaning: "completely・entirely",
        example: "西川さんは転校してきたばかりだが、友達もできて、もう{すっかり}クラスに[溶け込んで]いる。",
        exampleMeaning: "Nishikawa just transferred to this school, but he has made friends and is already {completely} blended into the class.",
        extraVocabulary: [
          { wordRuby: "溶{と}け込{こ}む", meaning: "to blend in・to fit in" }
        ]
      },
      {
        id: 63,
        wordRuby: "悪{あく}条{じょう}件{けん}",
        meaning: "Unfavorable condition・bad term",
        info: "〜てみせる means: I'll do it and prove it・I'll show you I can do it [ 〜できることを証明する ] (used when the speaker is strongly determined to accomplish something, often in response to: doubt, a challenge, a difficult situation, a promise)\n It shows determination, confidence, proving oneself.",
        components: [
          { kanji: "悪", meaning: "bad" },
          { kanji: "条", meaning: "clause" },
          { kanji: "件", meaning: "matter" }
        ],
        example: "周囲から無理だと言われても、{悪条件}をはね返して結果を[出してみせる]つもりだ。",
        exampleMeaning: "Even if people around me say it's impossible, I intend to overcome the adverse conditions and produce results to prove them wrong.",
        extraVocabulary: [
          { wordRuby: "周{しゅう}囲{い}", meaning: "surroundings・people around" },
        ],
      },
      {
        id: 64,
        wordRuby: "好{こう}条{じょう}件{けん}",
        meaning: "Favorable condition・good term",
        info: "〜一方だ means: continue to ~・become more and more ~ [ どんどん 〜 になる ] (used to express that a certain state or condition is continuously changing in a particular direction, often indicating a worsening or improving trend.)\nIt emphasizes: the ongoing nature of the change, suggesting that it is happening rapidly or significantly over time.",
        components: [
          { kanji: "好", meaning: "good" },
          { kanji: "条", meaning: "clause" },
          { kanji: "件", meaning: "matter" }
        ],
        example: "IT業界では{好条件}の求人が増える[一方で]、人材不足も深刻化している。",
        exampleMeaning: "In the IT industry, while the number of job openings with {attractive conditions} [continues to] increase, the labor shortage is also becoming more severe.",
        extraVocabulary: [
          { wordRuby: "業{ぎょう}界{かい}", meaning: "industry・sector" },
          { wordRuby: "求{きゅう}人{じん}", meaning: "job opening・Recruitment" },
          { wordRuby: "人{じん}材{ざい}", meaning: "talent・human resources" },
          { wordRuby: "深{しん}刻{こく}", meaning: "serious・severe" },
        ]
      },
      {
        id: 65,
        wordRuby: "行{ぎょう}儀{ぎ}",
        meaning: "manners・etiquette",
        example: "彼女はとても{行儀}がいい。",
        exampleMeaning: "She has very good {manners}.",
        components: [
          { kanji: "行", meaning: "conduct・go" },
          { kanji: "儀", meaning: "ceremony・formality" }
        ],
        extraVocabulary: [
          { wordRuby: "マナー", meaning: "manners・etiquette" }
        ]
      },
      {
        id: 66,
        wordRuby: "威{い}張{ば}る",
        meaning: "to act arrogant・to act bossy・to behave proudly in an unpleasant way",
        info: "〜すら means: even ~・not even ~ [ 〜でさえ ] (often emphasizes that N is the minimum or most basic thing one would expect.)\n\n〜すら and 〜でさえ are almost interchangeable, bot mean 'even' or 'not even'. ",
        components: [
          { kanji: "威", meaning: "authority・power" },
          { kanji: "張る", meaning: "stretch" }
        ],
        example: "彼は簡単な質問[すら]答えられ[ないのに]、いつも{威張って}いる。",
        exampleMeaning: "He always {acts superior} [even though] he can't [even] answer simple questions."
      },
      {
        id: 67,
        wordRuby: "仕{し}舞{ま}う",
        meaning: "to put away・to store away",
        components: [
          { kanji: "仕", meaning: "serve" },
          { kanji: "舞う", meaning: "to dance" }
        ],
        example: "使わない物は、 ここに{仕舞って}ください。",
        exampleMeaning: "Please put away the things you don't use here."
      },
      {
        id: 68,
        wordRuby: "不{ふ}平{へい}",
        meaning: "complaint",
        info: "〜でさえ means: even ~・not even ~ [ 〜すら ] (often emphasizes that N is the minimum or most basic thing one would expect.)\n\n〜すら and 〜でさえ are almost interchangeable, bot mean 'even' or 'not even'. ",
        components: [
          { kanji: "不", meaning: "not" },
          { kanji: "平", meaning: "flat・peace" }
        ],
        example: "普段はほとんど{不平}を言わない彼[でさえ]、今回の決定には納得できなかった。",
        exampleMeaning: "[Even] he, who almost never {complains}, couldn't accept this decision.",
        extraVocabulary: [
          { wordRuby: "文{もん}句{く}", meaning: "complaint" },
          { wordRuby: "納{な}得{とく}", meaning: "agreement・acceptance・consent" }
        ],
      },
      {
        id: 69,
        wordRuby: "発{はっ}生{せい}",
        meaning: "occurrence・happening",
        info: "〜こだわる　（こだわって） means: to be particular about ~・to be obsessed with ~・to place great importance on ~・to insist on ~ (used when you want to say that someone has a strong attachment or obsession with something, often to the point of being overly concerned or fixated on it.)\nIt emphasizes: a strong attachment, obsession, or fixation on something, often to the point of being excessive or unreasonable.\nCan be used in both positive and negative contexts, depending on what the person is particular about and how it affects their behavior or decisions.",
        components: [
          { kanji: "発", meaning: "emit" },
          { kanji: "生", meaning: "produce" }
        ],
        example: "{発生}件数の削減に[こだわる]だけでなく、問題が起きた後の対応体制も強化すべきだ。",
        exampleMeaning: "Rather than [focusing] only on reducing the number of incidents, we should also strengthen the response system after problems occur.",
        extraVocabulary: [
          { wordRuby: "件{けん}数{すう}", meaning: "number of cases" },
          { wordRuby: "削{さく}減{げん}", meaning: "reduction" },
          { wordRuby: "対{たい}応{おう}体{たい}制{せい}", meaning: "response system" },
          { wordRuby: "強{きょう}化{か}", meaning: "strengthen・reinforcement" }
        ],
      },
      {
        id: 70,
        wordRuby: "修{おき}める",
        meaning: "to master (a skill)・to complete (a course of study)",
        info: "〜にならない means: cannot compare to ~・is on a completely different level from ~・is nowhere near ~ [ 〜と比べ物にならない・～と比べることができないほど差がある ] (used to express that something is not comparable to something else, often because it is much better, worse, or different in some significant way.)\nIt emphasizes: a significant difference in quality, ability, or characteristics between two things, often suggesting that one is far superior or inferior to the other.\n\nThis grammar is most commonly seen as: AはBにならない・AはBの比にならない",
        components: [
          { kanji: "修", meaning: "discipline" },
        ],
        example: "数年間独学で学んだ程度の知識は、大学で専門的に学問を{修めた}人の知識[にならない]。",
        exampleMeaning: "The knowledge gained through a few years of self-study [is nowhere near that] of someone who has formally {mastered} an academic field at university.",
        extraVocabulary: [
          { wordRuby: "数{すう}年{ねん}間{かん}", meaning: "for several years" },
          { wordRuby: "独{どく}学{がく}", meaning: "self-study" },
          { wordRuby: "学{がく}問{もん}", meaning: "academic field・study" },
          { wordRuby: "程{てい}度{ど}", meaning: "level of mastery" }
        ]
      },
      {
        id: 71,
        wordRuby: "目{め}をとめる",
        meaning: "To pay attention to・To take notice of",
        info: "〜あまり means: because of being too ~・due to excessive ~・so much that ~ [ とても〜で、その結果... ] ( used when a feeling, state, or action becomes excessive. That excess leads to an unexpected or undesirable result.)\nAが強すぎる --> その結果 B",
        components: [
          { kanji: "目", meaning: "eye" },
          { kanji: "止める", meaning: "to stop" }
        ],
        example: "美しい景色に{目をとめた}[あまり]、電車を降りる駅を通り過ぎてしまった。",
        exampleMeaning: "I became [so] {absorbed in} a beautiful view that caught my eye that I missed my station.",
      },
      {
        id: 72,
        wordRuby: "被{ひ}災{さい}",
        meaning: "to be affected by a disaster・to suffer damage from a disaster",
        info: "〜に際して means: on the occasion of ~・at the time of ~ [ 〜のとき ] (used to indicate that something happens at a specific time or during a particular event.)\nIt emphasizes: the timing of important milestones, events, or official actions, often highlighting that it occurs during a significant or noteworthy occasion.",
        components: [
          { kanji: "被", meaning: "Incur" },
          { kanji: "災", meaning: "disaster" }
        ],
        example: "{被災}地の復興支援[に際して]、全国から多くのボランティアが集まった。",
        exampleMeaning: "[On the occasion of] supporting the reconstruction of the {disaster-affected} areas, many volunteers gathered from all over the country.",
        extraVocabulary: [
          { wordRuby: "復{ふっ}興{こう}", meaning: "reconstruction・revival" },
          { wordRuby: "支{し}援{えん}", meaning: "support・assistance" },
        ],
      },
      {
        id: 73,
        wordRuby: "大{たい}会{かい}",
        meaning: "tournament・championship・convention",
        info: "〜の際 means: on the occasion of ~・at the time of ~ [ 〜のとき ] (used to indicate that something happens at a specific time or during a particular event.)\nIt emphasizes: the timing of an action or event, often highlighting that it occurs during a significant or noteworthy occasion.",
        components: [
          { kanji: "大", meaning: "big" },
          { kanji: "会", meaning: "gathering" }
        ],
        example: "全国{大会}[の際]に優勝した選手は、表彰式でこれまで支えてくれた家族や指導者への感謝の気持ちを述べた。",
        exampleMeaning: "The athlete who won the national tournament expressed gratitude during the award ceremony to the family members and coaches who had supported them.",
        extraVocabulary: [
          { wordRuby: "優{ゆう}勝{しょう}", meaning: "victory・winning a tournament" },
          { wordRuby: "表{ひょう}彰{しょう}式{しき}", meaning: "award ceremony" },
          { wordRuby: "指{し}導{どう}", meaning: "guidance・coaching" },
          { wordRuby: "感{かん}謝{しゃ}", meaning: "gratitude" },
          { wordRuby: "述{の}べる", meaning: "to express・to state・to say" }
        ],
      },
      {
        id: 74,
        wordRuby: "優{ゆう}勝{しょう}",
        meaning: "victory・winning a tournament",
        info: "It’s used when someone finishes in 1st place overall in a competition or tournament. \n\n① ～にあたり means: on the occasion of ~・at the time of ~・upon ~ [ 〜のとき ] (used to indicate that something happens at a specific time or during a particular event.)\nIt emphasizes: the timing of an action or event, often highlighting that it occurs during a significant or noteworthy occasion.  \n\n② ～にあたって means: when beginning...・when undertaking...・in preparation for... - Used when someone is about to start an important action or phase.",
        components: [
          { kanji: "優", meaning: "excellent・superior" },
          { kanji: "勝", meaning: "win" }
        ],
        example: "卓球クラブの山谷さんは、大きな大会での{優勝}[にあたって]も、「[私なんか]まだまだですよ」と謙虚な姿勢を崩さなかった。",
        exampleMeaning: "Even upon winning a major tournament, Mr. Yamatani from the table tennis club did not abandon his humble attitude, saying, 'I'm still not that good.'",
        extraVocabulary: [
          { wordRuby: "卓{たっ}球{きゅう}", meaning: "table tennis" },
          { wordRuby: "謙{けん}虚{きょ}", meaning: "humble・humility・modesty" },
          { wordRuby: "姿{し}勢{せい}", meaning: "attitude・demeanor" },
          { wordRuby: "崩{くず}す", meaning: "to break down・to abandon" }
        ],
      },
      {
        id: 75,
        wordRuby: "台{だい}",
        meaning: "counter for machines/vehicles・platform・stand",
        info: "どれほど means: how much/many・to what extent・how greatly. It measures degree・quantity・extent.",
        components: [
          { kanji: "台", meaning: "stand" }
        ],
        example: "携帯電話を一人{一台}持つのは当たり前と言われる現代で、私のように携帯電話なしで生活している人は[どれほど]いるのだろうか。",
        exampleMeaning: "In today’s world, where it’s said that having {one} cellphone per person is normal, I wonder how many people live without a cellphone like I do."
      },
      {
        id: 76,
        wordRuby: "生{せい}産{さん}",
        meaning: "production・manufacturing",
        connector: "する",
        info: "～といった means: such as・things like. It is used to give examples of a category or group.",
        components: [
          { kanji: "生", meaning: "produce・life" },
          { kanji: "産", meaning: "produce・give birth" }
        ],
        example: "花山市では、きゅうりやトマトなす[といった]夏の野菜が多く{生産されて}いる。",
        exampleMeaning: "In Hanayama City, summer vegetables such as cucumbers, tomatoes, and eggplants are {produced} in large quantities."
      },
      {
        id: 77,
        wordRuby: "先{せん}輩{ぱい}",
        meaning: "senior student・senior colleague",
        info: "～たきり、～ means: after doing something once, nothing changed afterward・〜したあと、ずっとそのまま\n～ばかり means: only・nothing but・just\n～からすると means: from the perspective of ~・judging from ~\n～ように見える means: it looks like ~・it seems that ~",
        components: [
          { kanji: "先", meaning: "previous・senior" },
          { kanji: "輩", meaning: "people・group" }
        ],
        example: "彼とは数年前に{先輩}の結婚式で[会ったきりだ]、ずっと会っていなかった 。\n会社の今井{先輩}は、自分はミスが多いといつも言っているが、わからないこと[ばかり]の新人で私[からすると]、何でも完璧にできている[ように見える]。",
        exampleMeaning: "The last time I saw him was at a {senior}’s wedding several years ago, and I hadn’t seen him [since]."
      },
      {
        id: 78,
        wordRuby: "低{てい}価{か}格{かく}",
        meaning: "low price",
        info: "～のであれば is a conditional expression meaning: if it is the case that…・if indeed…; It sounds: explanatory・cautious・softer than a direct conditional.・More analytical/explanatory",
        components: [
          { kanji: "低", meaning: "low" },
          { kanji: "価", meaning: "price" },
          { kanji: "格", meaning: "standard" }
        ],
        example: "{低価格}でありながら高品質な製品を求める[のであれば]、複数のメーカーを比較したほうがよい。",
        exampleMeaning: "[If] you're looking for a product that is both {low-priced} and high-quality, you should compare several manufacturers.",
        extraVocabulary: [
          { wordRuby: "高{こう}品{ひん}質{しつ}", meaning: "high quality" },
          { wordRuby: "複{ふく}数{すう}", meaning: "multiple・several" },
          { wordRuby: "比{ひ}較{かく}", meaning: "comparison" },
        ]
      },
      {
        id: 79,
        wordRuby: "整{せい}理{り}",
        meaning: "organization・tidying up・putting things in order",
        components: [
          { kanji: "整", meaning: "organize" },
          { kanji: "理", meaning: "logic" }
        ],
        example: "引っ越しまでまだ時間はあるけど、 直前になってあわてないように少しずつやっておこう。荷物の{整理}も進めておきなさい。",
        exampleMeaning: "There’s still time before the move, but let’s do things little by little so we don’t panic at the last minute. You should also get started {organizing} your belongings in advance."
      },
      {
        id: 80,
        wordRuby: "第{だい}",
        meaning: "ordinal number prefix (first, second, third, etc.)",
        info: "〜までになる means: to reach the point where…・to get to the extent that…・to develop/change so far that…\nIt emphasizes: a significant degree of change, progression over time, reaching an impressive stage/level.\nThe focus is not only the final number, but the scale of growth, the surprising extent reached.",
        components: [
          { kanji: "第", meaning: "ordinal number" }
        ],
        example: "1896年の{第}１回オリンピックに参加した国と地域の数は 14だったが、2004年には200を超える[までになった]。",
        exampleMeaning: "The number of countries and regions participating in the {first} Olympics in 1896 was 14, but by 2004 it had grown [to exceed] 200."
      },
      {
        id: 81,
        wordRuby: "渋{じゅう}滞{たい}",
        meaning: "traffic jam・congestion",
        info: "〜かえって means: on the contrary・instead・actually (used when the opposite of what was expected happens)\n〜だろうと思う means: I think that ~・I expect that ~・I assume that ~ (used to express a guess or expectation about something)\n〜ばよかった means: I wish I had ~・I should have ~ (used to express regret about something that was not done)",
        components: [
          { kanji: "渋", meaning: "difficult to flow" },
          { kanji: "滞", meaning: "stagnate" }
        ],
        example: "昨日、新しくできた遊園地に行った。電車より車のほうが早い[だろうと思って]車で行ったら、ひどい{渋滞}で[かえって]時間がかかってしまった。やはり電車で行け[ばよかった]。",
        exampleMeaning: "Yesterday I went to a newly opened amusement park. [Thinking that] going by car would [probably] be faster than the train, I went by car, but because of terrible {traffic} it actually [ended up] taking more time. [I should have gone] by train after all.",
        extraVocabulary: [
          { wordRuby: "遊{ゆう}園{えん}地{ち}", meaning: "amusement park" }
        ],
      },
      {
        id: 82,
        wordRuby: "異{い}常{じょう}",
        meaning: "abnormality・unusualness・strangeness",
        info: "V. ます STEM + 〜得る means: can ~・be possible to ~・be able to ~ [〜の可能性がある] (used to express that something is possible or capable of happening)\nThe word '得る' means to obtain or acquire something. When a verb is attached before it, as in ～し得る, it means that there is a possibility of being able to do something.\n\n〜であっても means: even if it is ~・even though it is ~ (used to express that a certain condition or state does not change the outcome or situation)\nIt emphasizes: the persistence of a fact or situation despite a specific condition, highlighting that the stated condition does not alter the reality of what follows.",
        components: [
          { kanji: "異", meaning: "different" },
          { kanji: "常", meaning: "normal" }
        ],
        example: "どんなに管理されたシステム[であっても]、機械である以上は{異常}が発生し[得る]。",
        exampleMeaning: "No matter how well-managed a system is, as long as it is a machine, abnormalities can possibly occur.",
        extraVocabulary: [
          { wordRuby: "管{かん}理{り}", meaning: "management" },
          { wordRuby: "機{き}械{かい}", meaning: "machine" },
          { wordRuby: "発{はっ}生{せい}", meaning: "occurrence・happening" },
          { wordRuby: "異{こと}なる", meaning: "different・unusual" },
          { wordRuby: "常{つね}に", meaning: "common sense・general knowledge" }
        ],
      },
      {
        id: 83,
        wordRuby: "褒{ほ}める",
        meaning: "to praise・to commend",
        info: "～ぐらい means: to the extent that ~・so ~ that ~ (used to express a degree of something, often with a surprising or unexpected result)\nStructure: [surprising example] + ぐらい + [degree of something]",
        components: [
          { kanji: "褒", meaning: "praise" },
        ],
        example: "会議での西山さんのプレゼンは、普段はなかなか褒めることがない部長が{褒める}[ぐらい]素晴らしかった。",
        exampleMeaning: "Nishiyama’s presentation at the meeting was so wonderful that even the department manager, who normally rarely praises people, praised it."
      },
      {
        id: 84,
        wordRuby: "団{だん}体{たい}",
        meaning: "organization・group",
        info: "〜てたまらない means: so ~ that I can’t stand it・so ~ that it’s unbearable (used to express an intense feeling or desire for something)\ncannot help but...・unbearably...・extremely...so much that one can’t resist/control it\nIt emphasizes: a strong emotional response, an overwhelming desire, or a situation that is difficult to endure due to the intensity of the feeling.\nStructure: adjective/feeling + てたまらない",
        components: [
          { kanji: "団", meaning: "group" },
          { kanji: "体", meaning: "body" }
        ],
        example: "「山川大学アニメ研究会」はアニメが好き[でたまらない]という学生が集まってできた{団体}です。",
        exampleMeaning: "The ‘Yamakawa University Anime Research Club’ is an {organization} formed by students who absolutely love anime."
      },
      {
        id: 85,
        wordRuby: "異{い}変{へん}",
        meaning: "strange occurrence・abnormal event・unusual change",
        info: "異変 is stronger than just 変化, It implies: something is off・unusual・potentially dangerous or serious",
        components: [
          { kanji: "異", meaning: "different・strange" },
          { kanji: "変", meaning: "change" }
        ],
        example: "最近、地球温暖化の影響で異常気象や自然災害などの{異変}が頻発している。",
        exampleMeaning: "Recently, due to the effects of global warming, {strange occurrences} such as abnormal weather and natural disasters have been happening frequently.",
        extraVocabulary: [
          { wordRuby: "異{こと}なる", meaning: "different・unusual" },
        ],
      },
      {
        id: 86,
        wordRuby: "大{だい}体{たい}",
        meaning: "roughly・approximately",
        info: "～なければ means: if it does not ~・unless it ~ (used to express a condition that must be met for something to happen or be true)\nIt emphasizes: the necessity of a certain condition, the importance of meeting that condition for the desired outcome.",
        example: "葉の[変色]が始まるのは、1日の[最低]気温が{大体}8度以下になってからです。秋になっても、最低気温が[一定]の気温まで下がら[なければ]、紅葉は始まらない[のです]。",
        exampleMeaning: "Leaves begin changing color after the daily minimum temperature drops to around 8°C or lower. Even after autumn arrives, if the minimum temperature does not fall to a certain level, the autumn colors will not begin.",
        extraVocabulary: [
          { wordRuby: "変{へん}色{しょく}", meaning: "change in color・discoloration" },
          { wordRuby: "最{さい}低{てい}", meaning: "minimum・the lowest" },
          { wordRuby: "一{いっ}定{てい}", meaning: "constant・fixed" },
        ],
      },
      {
        id: 87,
        wordRuby: "四{し}季{き}",
        meaning: "the four seasons",
        info: "〜わけではない means: it’s not that ~・it’s not necessarily the case that ~・it does not mean that　~ (used to express a negative statement while acknowledging that there may be exceptions or nuances)",
        components: [
          { kanji: "四", meaning: "four" },
          { kanji: "季", meaning: "season" }
        ],
        example: "日本は{四季}がはっきりしていることで知られているが、地域によっては[季節]の変化をあまり感じられない[わけではない]。",
        exampleMeaning: "Japan is known for having clearly defined {four seasons}, but depending on the region, [it’s not that] seasonal changes cannot really be felt.",
        extraVocabulary: [
          { wordRuby: "季{き}節{せつ}", meaning: "season" }
        ],
      },
      {
        id: 88,
        wordRuby: "結{けっ}局{きょく}",
        meaning: "in the end・after all・eventually",
        info: "〜わけがない means: there’s no way that ~・it’s impossible that ~・cannot possibly ~ (used to express strong disbelief or denial about something)\nIt emphasizes: a strong conviction that something is not true or cannot happen.Used when the speaker is strongly convinced something is impossible or unreasonable. often based on logic, evidence, or common sense.",
        components: [
          { kanji: "結", meaning: "tie together・conclusion" },
          { kanji: "局", meaning: "situation・end stage" }
        ],
        example: "彼はあれほど真面目に準備していたのだから、{結局}失敗する[わけがない]。",
        exampleMeaning: "He prepared so seriously, so [there’s no way] he would fail {in the end}."
      },
      {
        id: 89,
        wordRuby: "乗{の}り越{こ}える",
        meaning: "to overcome・to get over",
        info: "Vます stem + ようがない means: there’s no way to ~・it’s impossible to ~・have no means of ~ (used to express that there is no method, means, or possibility to do something)\nIt emphasizes: the complete lack of options or possibilities for achieving a certain action or outcome.",
        components: [
          { kanji: "乗", meaning: "ride" },
          { kanji: "越", meaning: "cross" },
        ],
        example: "一人で抱え込んでいては、この困難を{乗り越え}[ようがない]。",
        exampleMeaning: "If you keep dealing with it all by yourself, [there's no way to] [overcome] this difficulty.",
        extraVocabulary: [
          { wordRuby: "抱{かか}え込{こ}む", meaning: "to take on (a problem)・to shoulder (a burden)" },
        ],
      },
      {
        id: 90,
        wordRuby: "驚{おどろ}く",
        meaning: "to be surprised・to be shocked・to be amazed",
        components: [
          { kanji: "驚", meaning: "surprise" },
        ],
        example: "",
        exampleMeaning: ""
      },
      {
        id: 91,
        wordRuby: "汚{お}染{せん}",
        meaning: "pollution・contamination",
        info: "〜につき means: due to ~・because of ~・on account of ~ (A formal, written expression commonly used in notices or official explanations. Used to indicate the reason or cause for something)\nIt emphasizes: the cause or reason for a situation, often used in formal announcements or explanations.",
        components: [
          { kanji: "汚", meaning: "pollute" },
          { kanji: "染", meaning: "stain" },
        ],
        example: "工場排水による河川の{汚染}問題[につき]、来週、住民説明会が開催される。",
        exampleMeaning: "[Due to] the issue of river {contamination} caused by factory wastewater, a briefing for residents will be held next week.",
        extraVocabulary: [
          { wordRuby: "工{こう}場{じょう}", meaning: "factory" },
          { wordRuby: "排{はい}水{すい}", meaning: "wastewater" },
          { wordRuby: "河{か}川{せん}", meaning: "river" },
          { wordRuby: "住{じゅう}民{みん}", meaning: "resident" },
          { wordRuby: "開{かい}催{さい}", meaning: "holding an event" },
        ],
      },
      {
        id: 92,
        wordRuby: "逞{たくま}しい",
        meaning: "strong・robust・powerful",
        components: [
          { kanji: "逞", meaning: "strong" },
        ],
        example: "彼女は海外で一人でも{逞しく}生活している。",
        exampleMeaning: "She is living independently and {resiliently} overseas."
      },
      {
        id: 93,
        wordRuby: "虚{むな}しい",
        meaning: "empty・futile・pointless・meaningless",
        info: "Usually used for efforts, hopes, expectations, etc...",
        components: [
          { kanji: "虚", meaning: "empty" },
        ],
        example: "必死に準備したのに中止になり、{虚しい}気持ちになった。",
        exampleMeaning: "I prepared desperately, but it was canceled, leaving me feeling {empty}.",
        extraVocabulary: [
          { wordRuby: "必{ひっ}死{し}", meaning: "desperate" },
        ],
      },
      {
        id: 94,
        wordRuby: "首{くび}",
        meaning: "neck・head・leader",
        info: "〜ものの means: although・even though・despite the fact that [ 〜けれども ] (used to express a contrast between two statements, where the second statement presents a situation that is unexpected or contrary to what was mentioned in the first statement)\nIt emphasizes: a surprising or unexpected outcome, a contrast between expectations and reality.",
        components: [
          { kanji: "首", meaning: "neck" },
        ],
        example: "{首}の痛みはだいぶ治まった[ものの]、長時間パソコンに向かうのはまだ難しい。",
        exampleMeaning: "[Although] the pain in my {neck} has mostly subsided, it's still difficult to spend long hours in front of a computer.",
        extraVocabulary: [
          { wordRuby: "だいぶ", meaning: "quite a bit・considerably" },
          { wordRuby: "治{おさ}まる", meaning: "to subside・to calm down" },
        ],
      },
      {
        id: 95,
        wordRuby: "腕{うで}",
        meaning: "arm・skill・ability",
        info: "〜に違いない means: must be ~・there’s no doubt that ~・I'm sure ~ [ 絶対に〜だ・きっと〜だ ] (used to express a strong belief or conviction about something based on evidence, reasoning, or intuition)\nIt emphasizes: a high level of certainty or confidence in the statement being made.",
        components: [
          { kanji: "腕", meaning: "arm" },
        ],
        example: "彼はまだ若いのに、こんな複雑なシステムを一人で開発できるのだから、かなり{腕}がある[に違いない]。",
        exampleMeaning: "He's still young, yet he can develop such a complex system by himself, so he [must be] highly {skilled}.",
        extraVocabulary: [
          { wordRuby: "複{ふく}雑{ざつ}な", meaning: "complex" },
        ],
      },
      {
        id: 96,
        wordRuby: "肘{ひじ}",
        meaning: "elbow",
        info: "〜おそれがある means: there is a risk that ~・there is a possibility that ~・it’s possible that ~ [ 〜の可能性がある ] (used to express a potential negative outcome or risk associated with a certain action or situation)\nIt emphasizes: the potential danger or negative consequence of something, often used to warn or caution about a possible outcome.",
        components: [
          { kanji: "肘", meaning: "elbow" },
        ],
        example: "スポーツ中に無理な体勢で転ぶと、{肘}を痛める[おそれがある]。",
        exampleMeaning: "If you fall in an awkward position while playing sports, [there is a risk] of injuring your {elbow}.",
        extraVocabulary: [
          { wordRuby: "体{たい}勢{せい}", meaning: "posture・position" },
        ],
      },
      {
        id: 97,
        wordRuby: "肩{かた}",
        meaning: "shoulder",
        info: "〜ばかりか means: not only A but also B・on top of that ~ (used to express that in addition to the first statement, there is an additional surprising or significant fact)\nIt emphasizes: the addition of a second fact that is often more surprising or significant than the first, highlighting the extent of a situation or problem.",
        components: [
          { kanji: "肩", meaning: "shoulder" },
        ],
        example: "{肩}を痛めたため、スポーツができない[ばかりか]、日常生活にも支障が出ている。",
        exampleMeaning: "[Not only] can I not play sports because I injured my {shoulder}, but it's also affecting my daily life.",
        extraVocabulary: [
          { wordRuby: "支{し}障{しょう}", meaning: "obstacle・hindrance・impediment" },
        ],
      },
      {
        id: 98,
        wordRuby: "腰{こし}",
        meaning: "waist・lower back",
        components: [
          { kanji: "腰", meaning: "waist" },
        ],
        example: "",
        exampleMeaning: "",
      },
      {
        id: 99,
        wordRuby: "確{たし}かに",
        meaning: "certainly・surely・undoubtedly",
        info: "Noun 〜にすぎない means: it’s nothing more than ~・it’s just ~・merely ~ (used to downplay the significance of something or to emphasize that it is not as important or impressive as it may seem)\nIt emphasizes: a modest or humble perspective, often used to express that something is not extraordinary or should not be overestimated.",
        components: [
          { kanji: "確", meaning: "certain" },
        ],
        example: "{確かに}彼の提案には問題もあるが、それは改善の余地があるという事実[にすぎない]。",
        exampleMeaning: "{Certainly} there are problems with his proposal, but that [is nothing more than] the fact that there is room for improvement.",
        extraVocabulary: [
          { wordRuby: "提{てい}案{あん}", meaning: "proposal・suggestion" },
          { wordRuby: "改{かい}善{ぜん}", meaning: "improvement" },
          { wordRuby: "余{よ}地{ち}", meaning: "room・space・leeway" },
          { wordRuby: "事{じ}実{じつ}", meaning: "fact・truth" }
        ],
      },
      {
        id: 100,
        wordRuby: "驚{おどろ}く",
        meaning: "to be surprised・to be shocked・to be amazed",
        info: "V. ます STEM + 〜かねない means: might end up ~・could possibly ~ (usually in a negative way) (used to express a potential negative outcome or risk associated with a certain action or situation)\nIt emphasizes: the potential danger or negative consequence of something, often used to warn or caution about a possible outcome.",
        components: [
          { kanji: "驚", meaning: "surprise" },
        ],
        example: "彼は十分な確認をしないまま契約を結んだと聞いて、後で大きな問題になり[かねない]と思い、{驚きました}。",
        exampleMeaning: "When I heard that he signed the contract without properly checking it, I was {surprised} because I thought [it could later lead to] a major problem.",
        extraVocabulary: [
          { wordRuby: "十{じゅう}分{ぶん}", meaning: "sufficient・enough" },
          { wordRuby: "契{けい}約{やく}", meaning: "contract" },
          { wordRuby: "結{むす}ぶ", meaning: "to tie・to conclude (a contract)" }
        ],
      },
      {
        id: 101,
        wordRuby: "平{へい}均{きん}",
        meaning: "average",
        info: "〜にほかならない means: none other than ~・nothing other than ~ [ 〜以外のものではない ] (used to emphasize that the reason or cause of something is exactly what is stated, often used to highlight a strong connection between two things) It is used to strongly emphasize that it is definitely this and nothing else.\nThis grammar is a formal expression and is not commonly used in everyday life. It is primarily used in written language.",
        components: [
          { kanji: "平", meaning: "flat・even" },
          { kanji: "均", meaning: "equal" }
        ],
        example: "この地域の{平均}寿命が高いのは、住民の健康意識の高さ[にほかならない]。",
        exampleMeaning: "The reason the {average} life expectancy in this area is high is [none other than] the residents' strong awareness of health.",
        extraVocabulary: [
          { wordRuby: "寿{じゅ}命{みょう}", meaning: "life expectancy" },
          { wordRuby: "住{じゅう}民{みん}", meaning: "resident" },
        ],
      },
      {
        id: 102,
        wordRuby: "変{へん}色{しょく}",
        meaning: "change of color・color change",
        info: "〜ことなく means: without ~ing・without doing something [ 〜しないで ] (used to express that something happens without a certain action or event occurring)\nIt emphasizes: the absence of a particular action or event, often highlighting that something happens smoothly or successfully without any issues.",
        components: [
          { kanji: "変", meaning: "change" },
          { kanji: "色", meaning: "color" }
        ],
        example: "この特殊な塗料は、長年直射日光を受けても{変色}する[ことなく]、その色を保ち続ける。",
        exampleMeaning: "This special paint retains its color for many years [without] {discoloring}, even when exposed to direct sunlight.",
        extraVocabulary: [
          { wordRuby: "特{とく}殊{しゅ}", meaning: "special" },
          { wordRuby: "塗{と}料{りょう}", meaning: "paint" },
          { wordRuby: "長{なが}年{ねん}", meaning: "many years" },
          { wordRuby: "直{ちょく}射{しゃ}日{にっ}光{こう}", meaning: "direct sunlight" },
          { wordRuby: "保{たも}つ", meaning: "to maintain・to keep" }
        ],
      },
      {
        id: 103,
        wordRuby: "身{み}近{ぢか}な",
        meaning: "familiar・close to one's daily life・near at hand",
        info: "〜にかかわらず means: regardless of ~・irrespective of ~ [ 〜に関係なく ] (used to express that something is true or applies in all cases, without being affected by a particular factor or condition)\nIt emphasizes: the universality or consistency of a statement, indicating that it holds true in all situations, without exception.\n「するしないにかかわらず」ってしてもしなくても結果は変わらないという意味になります。\n[ V. る　＋　V. ない ]・[ V. る　かどうか ]・[ V. ない　かどうか ]・[ Noun } + 〜にかかわらず",
        components: [
          { kanji: "身", meaning: "body" },
          { kanji: "近", meaning: "near" }
        ],
        example: "年齢[にかかわらず]、{身近な}環境問題について考えることは重要だ。",
        exampleMeaning: "[Regardless] of age, it is important to think about environmental issues that affect our daily lives.",
      },
      {
        id: 104,
        wordRuby: "重{かさ}ねる",
        meaning: "to pile up・to stack・to repeat (an action)",
        info: "〜末 (に) means: after ~ing for a long time・after a long period of ~ing・after much ~ing [ 〜した結果 ] (used to express that after a long time or many repetitions of an action, a certain result is achieved)\nIt emphasizes: the long duration or repeated nature of an action leading to a significant outcome, often highlighting the effort and perseverance involved.\nこの～末という表現は少しかたい表現なので日常生活で友達と使うことはほとんどない。",
        components: [
          { kanji: "重", meaning: "heavy" },
        ],
        example: "彼は何年[にもわたって]努力を{重ねた}[末に]、ようやく研究成果を認められた。",
        exampleMeaning: "[After years] of {accumulated} effort, his research results were finally recognized.",
        extraVocabulary: [
          { wordRuby: "末{すえ}", meaning: "the end・after" },
          { wordRuby: "成{せい}果{か}", meaning: "result・achievement" },
          { wordRuby: "認{みと}める", meaning: "to recognize・to acknowledge" },
        ],
      },
      {
        id: 105,
        wordRuby: "気{き}付{づ}く",
        meaning: "to notice・to become aware of",
        info: "〜てはじめて means: only after ~ing did one realize...・not until ~ing [ 〜を経験したらわかる ] (used to express that something is realized or understood only after a certain action or experience occurs)\nIt emphasizes: the idea that a realization or understanding comes as a result of a specific experience or action, often highlighting the importance of that experience in gaining new insights.",
        components: [
          { kanji: "気", meaning: "spirit・mind" },
          { kanji: "付", meaning: "attach・notice" }
        ],
        example: "海外で生活してみ[てはじめて]、日本の便利さに{気付いた}。",
        exampleMeaning: "[Only after] living abroad did I {realize} how convenient Japan is."
      },
      {
        id: 106,
        wordRuby: "叩{たた}く",
        meaning: "to knock・to hit・to beat",
        info: "V. よう + 〜ものなら means: if you were to ~・if one were to ~ (used to express a hypothetical situation where if someone were to do something, it would lead to a certain result, often a negative one)\nIt emphasizes: the potential consequences of an action, often used to warn or caution against doing something that could lead to an undesirable outcome.",
        components: [
          { kanji: "叩", meaning: "knock" },
        ],
        example: "その高価な楽器は非常に繊細なので、強く{叩}[こうものなら]すぐに壊れてしまう。",
        exampleMeaning: "That expensive instrument is extremely delicate, [if you were to] {strike} it hard, it would break immediately.",
        extraVocabulary: [
          { wordRuby: "高{こう}価{か}", meaning: "expensive" },
          { wordRuby: "非{ひ}常{じょう}に", meaning: "extremely" },
          { wordRuby: "繊{せん}細{さい}", meaning: "delicate" },
          { wordRuby: "壊{こわ}れる", meaning: "to break" }
        ],
      },
      {
        id: 107,
        wordRuby: "贅{ぜい}沢{たく}",
        meaning: "luxury・excess・extravagance",
        info: "V. れる + 〜ものなら means: if one could ~・if it were possible to ~ [ できないと思うけど、もし〜できるなら ] (used to express 'I think it's absolutely impossible, but if I could do it...'. It is used to say that you think something is absolutely impossible, but if you could do it, this is what you would want to do!)",
        components: [
          { kanji: "贅", meaning: "extravagance" },
          { kanji: "沢", meaning: "marsh・swamp" }
        ],
        example: "時間とお金に余裕があるなら、世界中の高級ホテルに泊ま[れるものなら]泊まってみたいが、それは少し{贅沢な}夢かもしれない。",
        exampleMeaning: "If I had plenty of time and money, I'd like to stay in luxury hotels around the world [if I could], but that may be a somewhat {extravagant} dream.",
        extraVocabulary: [
          { wordRuby: "余{よ}裕{ゆう}", meaning: "leeway・room・margin" },
          { wordRuby: "高{こう}級{きゅう}", meaning: "luxury" },
        ],
      },
      {
        id: 108,
        wordRuby: "代{だい}引{び}き",
        meaning: "cash on delivery",
        info: "〜に応じて means: according to ~・depending on ~ [ 〜に合わせて ] (used to express that something is done, adapt, or changes in response to a certain condition or factor)\nIt emphasizes: the idea that actions or conditions can vary based on specific circumstances or factors.",
        components: [
          { kanji: "代", meaning: "substitute・generation" },
          { kanji: "引", meaning: "pull・discount" }
        ],
        example: "商品の大きさや配送地域[に応じて]、{代引き}手数料が異なる場合がある。",
        exampleMeaning: "[Depending on] the size of the product and the delivery area, the {cash-on-delivery} fee may vary.",
        extraVocabulary: [
          { wordRuby: "配{はい}送{そう}", meaning: "delivery" },
          { wordRuby: "地{ち}域{いき}", meaning: "area" },
          { wordRuby: "手{て}数{すう}料{りょう}", meaning: "fee・handling charge" }
        ],  
      },
      {
        id: 109,
        wordRuby: "引{ひ}き込{こ}む",
        meaning: "to pull in・to draw in・to withdraw・to attract",
        info: "〜ほど means: to the extent that ~・so much ~ that ~ [ 〜と同じ程度だ ] (used to express a degree of something, often with a surprising or unexpected result)\nStructure: [surprising example] + ほど + [degree of something]\nSame as 〜くらい, but slightly more formal/written and less subjective/emotional",
        components: [
          { kanji: "引", meaning: "pull" },
          { kanji: "込", meaning: "put in" }
        ],
        example: "その小説は、一度読み始めると時間を忘れる[ほど]読者を{引き込む}。",
        exampleMeaning: "That novel {draws} readers {in} [so much that] they forget the passage of time once they start reading."
      },
      {
        id: 110,
        wordRuby: "再{さい}提{てい}出{しゅつ}",
        meaning: "re-submission・re-presentation",
        info: "〜ことになっている means: it is decided that ~・it is expected that ~・it is arranged that ~ [ ~することが決まっている ] (used to express a rule, expectation, promise, system, or arrangement regarding what should be done in a certain situation)\nIt emphasizes: the idea that there is a predetermined expectation or requirement for a certain action or outcome, often based on rules, agreements, or social norms.\nThe kanji 再 is often used in words related to doing something again, such as 再利用 (recycling), 再開 (resumption), 再生 (regeneration), etc. It indicates that an action is being repeated or done again after a previous occurrence. ",
        components: [
          { kanji: "再", meaning: "again" },
          { kanji: "提", meaning: "submit" },
          { kanji: "出", meaning: "output" }
        ],
        example: "記入漏れがある書類は、一週間以内に{再提出}する[ことになっている]。",
        exampleMeaning: "Documents with missing information are required to be {resubmitted} within one week.",
        extraVocabulary: [
          { wordRuby: "記{き}入{にゅう}", meaning: "filling out (a form)" },
          { wordRuby: "漏{も}れ", meaning: "leak・omission" },
        ],
      },
      {
        id: 111,
        wordRuby: "支{ささ}え合{あ}う",
        meaning: "to support each other・to help each other",
        info: "〜以上 (は)・〜からには means: since ~・as long as ~・now that ~ [ 〜だから！ ] (used to express a reason or justification for something, often indicating that because a certain condition is true, a particular action or attitude is appropriate or necessary)\nIt emphasizes: the idea that given a certain condition or fact, it logically follows that a specific action should be taken or a certain attitude should be adopted.\n「からには」の後ろは「～するつもりだ」という意志を表す文章とか「〜するべきだ」と注意をする文章「～しなさい」と命令をする文章とか「絶対にこうだ」と強く断言をする文章などが入ります。",
        components: [
          { kanji: "支", meaning: "support" },
          { kanji: "合", meaning: "together" }
        ],
        example: "家族である[以上]、困ったときには{支え合う}べきだ。",
        exampleMeaning: "Since we are family, we should {support one another} when times are difficult."
      },
      {
        id: 112,
        wordRuby: "向{む}き合{あ}う",
        meaning: "to face・to confront",
        info: "〜わけにはいかない means: cannot do ~・not in a position to do ~・must ~ (because of circumstances, responsibility, etc.) [ 〜できない・～しなければならない　] (used when you want to say that you cannot do something due to a certain reason or that you must do something because of special circumstances.）",
        components: [
          { kanji: "向", meaning: "towards" },
          { kanji: "合う", meaning: "to meet" }
        ],
        example: "問題があると分かっている[以上]、それから目を背ける[わけにはいかない]。しっかり{向き合う}必要がある。",
        exampleMeaning: "[Now that] we know there is a problem, [we cannot] simply look away from it. We need to {face it} properly.",
        extraVocabulary: [
          { wordRuby: "背{そむ}ける", meaning: "to turn away" },
        ],
      },
      {
        id: 113,
        wordRuby: "いきなり",
        meaning: "suddenly・out of the blue・without warning",
        info: "〜かと思うと・〜かと思ったら means: just when ~・no sooner had ~ than ~・just when I thought [ 〜したあとすぐ ] (used to express that one event happens immediately after another, often with a surprising or unexpected result)\nIt emphasizes: the suddenness and immediacy of the second event following the first, often highlighting a surprising or unexpected outcome.\nこの文法は自分のことには使えないので注意してください。",
        example: "彼は{いきなり}立ち上がった[かと思うと]、何も言わずに部屋を出て行った。",
        exampleMeaning: "He {suddenly} stood up, and before anyone knew it, he left the room without saying a word.",
        extraVocabulary: [
          { wordRuby: "突{とつ}然{ぜん}", meaning: "suddenly" },
        ],
      },
      {
        id: 114,
        wordRuby: "ついに",
        meaning: "finally・at last・in the end・after a long wait or struggle",
        info: "〜に至るまで means: up to the point of ~・even ~・all the way up to ~ (used to express that something has reached a certain level or extent, often indicating that it has reached a significant or surprising point)\nIt emphasizes: the extent or degree to which something has reached, often highlighting a surprising or noteworthy outcome.\nついに focuses on the final result・ ついに優勝した ( Finally won )\nようやく focuses on the difficulty and effort before the result・ようやく優勝できた ( Finally managed to win )",
        example: "彼は何度も失敗を繰り返したが、{ついに}社長[に至るまで]の多くの人から認められるようになった。",
        exampleMeaning: "He failed many times, but {in the end} he came to be recognized by many people, including [even] the company president.",
        extraVocabulary: [
          { wordRuby: "とうとう", meaning: "finally・at last" },
          { wordRuby: "やっと", meaning: "finally・at last" },
          { wordRuby: "ようやく", meaning: "finally・at last" },
        ],
      },
      {
        id: 115,
        wordRuby: "ようやく",
        meaning: "finally・at long last・after considerable effort",
        info: "〜ところだった means: almost ~・nearly ~・was just about to ~ (used to express that something was on the verge of happening but was narrowly avoided or just barely achieved)\nIt emphasizes: the closeness to a negative outcome or the difficulty in achieving a positive outcome, often highlighting a sense of relief or narrow escape.\nついに focuses on the final result・ ついに優勝した ( Finally won )\nようやく focuses on the difficulty and effort before the result・ようやく優勝できた ( Finally managed to win )",
        example: "電車の遅延で面接に遅れる[ところだった]が、{ようやく}間に合った。",
        exampleMeaning: "Because of train delays, I [almost] arrived late for the interview, but I {finally} made it in time.",
        extraVocabulary: [
          { wordRuby: "遅{ち}延{えん}", meaning: "delay" },
          { wordRuby: "ついに", meaning: "finally" },
        ],
      },
      {
        id: 116,
        wordRuby: "謝{あやま}る",
        meaning: "to apologize・to say sorry",
        info: "〜ないことには means: unless ~・if one does not ~ [ 〜しなければ ] (used when you want to say that if you don't do something, a certain result will not happen. Therefore, the sentence that follows usually ends with 'ない', as in '~ないことには~ない'.)",
        components: [
          { kanji: "謝", meaning: "apologize" },
        ],
        example: "本人がきちんと{謝ら}[ないことには]、相手も納得しないだろう。",
        exampleMeaning: "[Unless] he properly {apologizes}, the other person probably won't be satisfied.",
        extraVocabulary: [
          { wordRuby: "本{ほん}人{にん}", meaning: "the person in question" },
          { wordRuby: "納{なっ}得{とく}", meaning: "to be convinced・to be satisfied" },
        ],
      },
      {
        id: 117,
        wordRuby: "起{き}床{しょう}",
        meaning: "to get up (from bed)・waking up",
        info: "〜ようでは means: if you keep doing ~ [ 〜のままだと悪い結果になる ] ( used to express that if a certain state or condition continues, it will lead to a bad result. It is often used to criticize or warn about negative consequences of continuing in a certain way. )",
        components: [
          { kanji: "起", meaning: "to wake up" },
          { kanji: "床", meaning: "bed" }
        ],
        example: "毎日{起床}時間がばらばらな[ようでは]、健康的な生活を送るのは難しい。",
        exampleMeaning: "[If] your {wake-up} time is inconsistent every day, it is difficult to maintain a healthy lifestyle.",
      },
      {
        id: 118,
        wordRuby: "実{じっ}験{けん}",
        meaning: "experiment・practical experience",
        info: "〜上で means: after doing ~・when doing ~・in carrying out ~ [ 〜をするとき・〜をした後 ] (The word '上で' is often used to refer to the top of something, but in this grammar, it refers to a situation or standpoint rather than a physical object. Therefore, it can mean either 'when doing ~' or 'after doing ~'. Remember that in this grammar, '上で' can refer to either the time of doing something or the time after having done something.)",
        components: [
          { kanji: "実", meaning: "real" },
          { kanji: "験", meaning: "experiment" }
        ],
        example: "この{実験}を行う[上で]、まず安全対策を十分に確認する必要がある。",
        exampleMeaning: "[When] conducting this {experiment}, it is necessary to thoroughly check the safety measures first.",
        extraVocabulary: [
          { wordRuby: "安{あん}全{ぜん}対{たい}策{さく}", meaning: "safety measures" },
          { wordRuby: "十{じゅう}分{ぶん}", meaning: "thoroughly・enough" },
        ],
      },
      {
        id: 119,
        wordRuby: "深{しん}呼{こ}吸{きゅう}",
        meaning: "deep breathing・taking a deep breath",
        info: "〜に先立って means: prior to ~・before ~ [ 〜の前に ] (used to express that something happens before a certain event or action takes place)\nIt emphasizes: the idea that one event occurs before another, often highlighting the importance of the first event in relation to the second.",
        components: [
          { kanji: "深", meaning: "deep" },
          { kanji: "呼吸", meaning: "breathing" }
        ],
        example: "本番のステージに登壇する[に先立って]、舞台裏で一度{深呼吸}をして気持ちを落ち着かせた。",
        exampleMeaning: "[Prior to] stepping onto the stage for the actual performance, I took a {deep breath} backstage to calm my nerves.",
        extraVocabulary: [
          { wordRuby: "本{ほん}番{ばん}", meaning: "actual performance・real thing" },
          { wordRuby: "登{とう}壇{だん}", meaning: "stepping onto the stage" },
          { wordRuby: "舞{ぶ}台{たい}裏{うら}", meaning: "backstage・behind the scenes" },
          { wordRuby: "落{お}ち着{つ}く", meaning: "to calm down・to settle down" },
        ],
      },
      {
        id: 120,
        wordRuby: "無{む}関{かん}係{けい}",
        meaning: "irrelevant・unrelated",
        info: "〜とはいえ means: although ~・even though ~ [ 〜だけど ] (used to express a contrast or concession between two statements, where the second statement presents a situation that is unexpected or contrary to what was mentioned in the first statement)",
        components: [
          { kanji: "無", meaning: "not" },
          { kanji: "関", meaning: "relation" },
          { kanji: "係", meaning: "involvement" }
        ],
        example: "この問題は私の仕事とは{無関係}[とはいえ]、全く責任がない[わけではない]。",
        exampleMeaning: "[Although] this issue is {unrelated} to my work, it doesn't mean I bear absolutely no responsibility.",
      },
      {
        id: 121,
        wordRuby: "論{ろん}じる",
        meaning: "to discuss・to argue・to debate",
        info: "〜抜きで means: without ~ing・without ~・leaving aside ~ [ 〜なしで ] (used to express that something is done without a certain element or factor, often highlighting the importance of that element in a situation)",
        components: [
          { kanji: "論", meaning: "argument・discussion" },
        ],
        example: "感情的な意見は[抜きで]、客観的なデータのみに基づいて今後の対策を{論じる}べきだ。",
        exampleMeaning: "[Leaving aside] emotional opinions, we should {discuss} future countermeasures based solely on objective data.",
        extraVocabulary: [
          { wordRuby: "感{かん}情{じょう}的{てき}な", meaning: "emotional" },
          { wordRuby: "客{きゃっ}観{かん}", meaning: "objective" },
          { wordRuby: "対{たい}策{さく}", meaning: "countermeasure・plan" },
        ],
        
      },
      {
        id: 122,
        wordRuby: "行{ぎょう}儀{ぎ}",
        meaning: "manners・behavior・conduct",
        info: "〜ものだから means: because ~・due to the fact that ~ [ 〜の理由は ] (used to provide a reason or explanation for something, often indicating that the reason is based on a certain circumstance or condition)\nIt emphasizes: the idea that the reason for something is directly related to a specific circumstance or condition, often used to explain or justify a situation.",
        components: [
          { kanji: "行", meaning: "to go" },
          { kanji: "儀", meaning: "ceremony・manners" }
        ],
        example: "子供のころから{行儀}に厳しい家庭で育った[ものだから]、人前での振る舞いには気を付けている。",
        exampleMeaning: "[Because] I was raised in a household that was strict about {manners} from childhood, I pay close attention to how I behave in public.",
        extraVocabulary: [
          { wordRuby: "厳{きび}しい", meaning: "strict" },
          { wordRuby: "家{か}庭{てい}", meaning: "household・home" },
          { wordRuby: "振{ふ}る舞{ま}い", meaning: "behavior・conduct" },
          { wordRuby: "マナー", meaning: "manners" },
        ],
        important: true,
      },
      {
        id: 123,
        wordRuby: "機{き}械{かい}",
        meaning: "machine",
        info: "〜ことから means: because of ~・due to ~ [ 〜だから ] (used to provide a reason or explanation for something, often indicating that the reason is based on a certain circumstance or condition)\nIt emphasizes: the idea that the reason for something is directly related to a specific circumstance or condition, often used to explain or justify a situation.\nこの「ことから」という文法は日常会話ではあまり使わない\n日常会話だったら「〜から」と使います。「呼びやすいからこの名前になったんだよ。」こういう言い方のほうが自然ですね。",
        components: [
          { kanji: "機", meaning: "machine" },
          { kanji: "械", meaning: "tool" }
        ],
        example: "この{機械}は構造が単純である[ことから]、多くの工場で採用されている。",
        exampleMeaning: "[Because] this {machine} has a simple structure, it is used in many factories.",
        extraVocabulary: [
          { wordRuby: "構{こう}造{ぞう}", meaning: "structure" },
          { wordRuby: "単{たん}純{じゅん}", meaning: "simple" },
        ],
      },
      {
        id: 124,
        wordRuby: "怪{け}我{が}",
        meaning: "injury",
        components: [
          { kanji: "怪", meaning: "strange" },
          { kanji: "我", meaning: "self" }
        ],
        example: "{怪我}をした[おかげで]、自分の健康の大切さについて改めて考える[ようになった]。",
        exampleMeaning: "Because of my injury, I came to think again about the importance of my health.",
        extraVocabulary: [
          { wordRuby: "改{あらた}めて", meaning: "again・once more" },
        ],
      },
      {
        id: 125, 
        wordRuby: "操{そう}作{さ}",
        meaning: "operation・handling",
        info: "〜に伴って means: along with ~・in conjunction with ~・as ~ accompanies ~ [ 〜と一緒に ] (used when you want to say that something happens along with something else, or that something changes along with something else. It is used to express that when a situation changes or something happens, something else also happens or changes together with it.)\n「に伴って」これは漢字で書かれる場合とひらがなで書かれる場合も多いのでどちらでもわかるようにしておきましょう。\nこの〜に伴ってという文法はかたい表現なのでこういう日常会話で使うことはほとんどない",
        components: [
          { kanji: "操", meaning: "operate" },
          { kanji: "作", meaning: "make" }
        ],
        example: "システムの更新[に伴って]、{操作}方法も変更された。",
        exampleMeaning: "[Along with] the system update, the {operating} procedures were also changed.",
        extraVocabulary: [
          { wordRuby: "更{こう}新{しん}", meaning: "update" },
          { wordRuby: "伴{ともな}う", meaning: "to accompany" },
        ],
      },
      {
        id: 126,
        wordRuby: "成{せい}功{こう}",
        meaning: "success",
        info: "〜にほかならない means: none other than ~・nothing other than ~ [ 〜以外のものではない ] (used to emphasize that the reason or cause of something is exactly what is stated, often used to highlight a strong connection between two things) It is used to strongly emphasize that it is definitely this and nothing else.\nThis grammar is a formal expression and is not commonly used in everyday life. It is primarily used in written language.",
        components: [
          { kanji: "成", meaning: "to become" },
          { kanji: "功", meaning: "achievement" }
        ],
        example: "彼の{成功}は、長年の努力の結果[にほかならない]。",
        exampleMeaning: "His {success} [is nothing other than] the result of years of effort.",
      },
      {
        id: 127,
        wordRuby: "羨{うらや}む",
        meaning: "to envy",
        info: "〜ほどだ means: so much that ~  (used to express a high degree or extent of something, often to emphasize how impressive or remarkable something is)",
        components: [
          { kanji: "羨", meaning: "envy" },
        ],
        example: "彼の語学力は、多くのネイティブ話者が{羨む}[ほどだ]。",
        exampleMeaning: "His language ability is so impressive [that even] many native speakers {envy} it.",
      },
      {
        id: 128,
        wordRuby: "涼{すず}しい",
        meaning: "cool・refreshing",
        info: "〜反面 means: on the other hand・while ~ [ 〜なところがあるが、反対に。。。 ] (used to express a contrast between two aspects of a situation, where one aspect is positive and the other is negative) It shows that while one side of a situation is true, the exact opposite is also true.\nIt emphasizes: the idea that while one aspect of a situation may be true, there is also an opposite or contrasting aspect that should be considered.",
        components: [
          { kanji: "涼", meaning: "cool" },
        ],
        example: "高原の別荘地は、夏でも{涼しく}て快適である[反面]、冬の寒さは非常に厳しく暮らしにくい。",
        exampleMeaning: "[While] the mountain resort area is {cool} and comfortable even in summer, on the other hand, the winter cold is extremely severe and makes it difficult to live.",
        extraVocabulary: [
          { wordRuby: "高{こう}原{げん}", meaning: "plateau・highland・elevated flat area of land" },
          { wordRuby: "別{べっ}荘{そう}地{ち}", meaning: "villa area・resort area・vacation-home area" },
          { wordRuby: "快{かい}適{てき}", meaning: "comfortable・pleasant" },
          { wordRuby: "非{ひ}常{じょう}に", meaning: "very・extremely" },
          { wordRuby: "厳{きび}しい", meaning: "severe・strict" },
        ],
        
      },
      {
        id: 129,
        wordRuby: "率{そっ}直{ちょく}",
        meaning: "frank・straightforward",
        info: "〜ものか means: there's no way ~・certainly not ~ [ 絶対に〜ない ] (used to express strong denial or disbelief about something, often indicating that the speaker thinks it is absolutely impossible or highly unlikely)\nIt emphasizes: the speaker's strong conviction that something is not true or will not happen, often used to dismiss an idea or suggestion as completely unrealistic.\n話すときによく使われる文法ですが、アニメとか漫画っぽい。日本人はあまり使わない。",
        components: [
          { kanji: "率", meaning: "rate・ratio" },
          { kanji: "直", meaning: "straight" }
        ],
        example: "{率直な}意見を求められたのだから、相手がどう思うかを気にして黙っていられる[ものか]。",
        exampleMeaning: "I was asked for my {honest} opinion, so [how could I possibly] stay silent just because I was worried about what the other person might think?",
        extraVocabulary: [
          { wordRuby: "求{もと}める", meaning: "to ask for・to seek" },
          { wordRuby: "黙{だま}る", meaning: "to be silent" },
        ],
      },
      {
        id: 130,
        wordRuby: "未{み}払{ばら}い",
        meaning: "unpaid・outstanding balance",
        info: "〜わりに means: considering ~・despite ~ (Used when the actual outcome does not match expectations. It is used to express that something is contrary to what one would expect based on a certain condition or factor.)\nIt emphasizes: the contrast between expectations and reality, often highlighting a surprising or unexpected result that goes against what was anticipated.",
        components: [
          { kanji: "未", meaning: "not yet" },
          { kanji: "払", meaning: "pay" }
        ],
        example: "数ヶ月も給料が{未払い}である[わりに]、彼は悲観的な様子もなく、いつも通りに働いている。",
        exampleMeaning: "[Considering] his salary has been {unpaid} for several months, he shows no signs of pessimism and is working just as usual.",
        extraVocabulary: [
          { wordRuby: "数{すう}ヶ{か}月{げつ}", meaning: "several months" },
          { wordRuby: "悲{ひ}観{かん}的{てき}な", meaning: "pessimistic" },
          { wordRuby: "様{よう}子{す}", meaning: "appearance・state" }
        ],
      },
      {
        id: 131,
        wordRuby: "口{くち}癖{ぐせ}",
        meaning: "catchphrase・Favorite phrase・habit of saying",
        info: "〜にしては means: for a ~・considering that ~・for someone who is ~ (Points out a discrepancy based on a specific standard or fact.)",
        components: [
          { kanji: "口", meaning: "mouth" },
          { kanji: "癖", meaning: "habit" }
        ],
        example: "「お金がない」が{口癖}である[にしては]、彼は毎週のように高級なレストランで外食をしている。",
        exampleMeaning: "[Considering that] 'I have no money' is his {favorite phrase}, he dines out at expensive restaurants almost every week.",
        extraVocabulary: [
          { wordRuby: "高{こう}級{きゅう}", meaning: "high-class・luxury" },
          { wordRuby: "外{がい}食{しょく}", meaning: "eating out・dining out" }
        ],
      },
      {
        id: 132,
        wordRuby: "心{こころ}当{あ}たり",
        meaning: "a clue・an idea of what might be causing something・a suspicion that 'this might be it'",
        info: "〜にしても means: even if ~・even though ~ [ 〜でも ] (used to express that a certain condition or situation is true, even if another condition or situation is also true. Concedes a point but shows that the main opinion remains unchanged.)\n\n〜限り means: as long as you are in a certain state・while ~・to the extent that ~ (used when you want to say that as long as you are in a certain state, the same situation will continue. The word '限り' is used to set a limit or extent. Therefore, when you say '~限り', it means that as long as you are in the state of doing something, the same situation will continue within that limit.)",
        components: [
          { kanji: "心", meaning: "heart" },
          { kanji: "当", meaning: "Hit" }
        ],
        example: "何か{心当たり}がある[にしても]、警察の捜査が始まらない[限り]、自分から動くべきではない。",
        exampleMeaning: "[Even if] you have some {clue}, you shouldn't act on your own [until] the police investigation begins.",
        extraVocabulary: [
          { wordRuby: "捜{そう}査{さ}", meaning: "investigation" },
        ],
      },
      {
        id: 133,
        wordRuby: "収{おさ}まる",
        meaning: "To settle down・to subside・to be resolved",
        info: "〜折に means: at the time of ~・on the occasion of ~ [ 〜のとき ] (used to indicate that something happens or is done at a specific time or occasion, often highlighting the timing or context of an action or event)\nA formal equivalent of 「とき」, used when a good opportunity arises.",
        components: [
          { kanji: "収", meaning: "to collect" },
        ],
        example: "今回の感染症の流行が{収まった}[折に]、改めて海外旅行の計画を立て直したい。",
        exampleMeaning: "[When] this current infectious disease outbreak {subsides}, I want to re-plan my trip abroad.",
        extraVocabulary: [
          { wordRuby: "感{かん}染{せん}症{しょう}", meaning: "infectious disease" },
          { wordRuby: "流{りゅう}行{こう}", meaning: "outbreak・epidemic・fashion" },
          { wordRuby: "改{あらた}めて", meaning: "again・once more" },
          { wordRuby: "計{けい}画{かく}", meaning: "plan" },
        ],
      },
      {
        id: 134,
        wordRuby: "異{い}文{ぶん}化{か}",
        meaning: "different culture・cross-cultural",
        info: "〜を通して means: through ~・via ~・by means of ~ : Using something as a medium or channel to accomplish or experience something. (used to express that something is done or experienced by using a certain method, medium, or means)",
        components: [
          { kanji: "異", meaning: "different" },
          { kanji: "文", meaning: "sentence" },
          { kanji: "化", meaning: "change" }
        ],
        example: "留学先での生活を[通して]、さまざまな{異文化}に触れ、視野を広げることができた。",
        exampleMeaning: "[Through] living at my study abroad destination, I was able to experience various {different cultures} and broaden my perspective.",
        extraVocabulary: [
          { wordRuby: "触{ふ}れる", meaning: "to touch・to experience" },
          { wordRuby: "視{し}野{や}", meaning: "field of vision・perspective" },
          { wordRuby: "異{こと}なる", meaning: "different" }
        ],
      },
      {
        id: 135,
        wordRuby: "誓{ちか}う",
        meaning: "to vow・to promise・to swear・to pledge",
        info: "N + 〜を込めて means: with ~ ・putting feelings into (Channeling deep feelings, wishes, or effort into an action.) (used to express that something is done with a certain feeling, intention, or emotion in mind)\nIt emphasizes: the idea that the action is performed with a specific sentiment or purpose, often highlighting the emotional significance of the act.",
        components: [
          { kanji: "誓", meaning: "vow" },
        ],
        example: "彼は生涯の愛[を込めて]、彼女の前に跪き、永遠の愛を{誓った}。",
        exampleMeaning: "[With] a heart full of lifelong love, he knelt before her and {pledged} his eternal love.",
        extraVocabulary: [
          { wordRuby: "生{しょう}涯{がい}", meaning: "lifetime" },
          { wordRuby: "跪{ひざまづ}く", meaning: "to kneel" },
          { wordRuby: "永{えい}遠{えん}", meaning: "eternity・forever" },
          { wordRuby: "約{やく}束{そく}", meaning: "promise" }
        ],
      },
      {
        id: 136,
        wordRuby: "たちまち",
        meaning: "instantly・in a moment",
        info: "〜だけに means: precisely because ~・all the more so because ~ [ 〜だからこそ ] (used to express that a certain situation or outcome is a direct result of a specific reason or condition, often emphasizing the cause-and-effect relationship between the two)",
        example: "話題の有名シェフがプロデュースしたお菓子な[だけに]、発売されると{たちまち}売り切れてしまった。",
        exampleMeaning: "[Precisely because] it was a sweet produced by a famous talked-about chef, it {instantly} sold out the moment it was released.",
        extraVocabulary: [
          { wordRuby: "話{わ}題{だい}", meaning: "topic・subject" },
          { wordRuby: "すぐに", meaning: "instantly・right away" },
        ],
      },
      {
        id: 137,
        wordRuby: "仰{あお}ぐ",
        meaning: "to look up・to ask for (guidance)・to respect",
        info: "～もしないで means: without even doing ~・without bothering to do ~ [ 〜せずに ] (used to express that someone does not take a certain action or make an effort to do something, often implying negligence or lack of consideration. Expresses strong criticism that someone skipped a fundamental step.)",
        components: [
          { kanji: "仰", meaning: "look up" },
        ],
        example: "先輩の指示を{仰ぎ}[もしないで]、独断で勝手に作業を進めるのは大きなトラブルの元になる。",
        exampleMeaning: "Proceeding with the work arbitrarily on your own [without even] {seeking} your senior's {guidance} will become a source of major trouble.",
        extraVocabulary: [
          { wordRuby: "指{し}示{じ}", meaning: "instruction・guidance" },
          { wordRuby: "独{どく}断{だん}", meaning: "arbitrary decision" },
          { wordRuby: "勝{か}手{て}", meaning: "arbitrary・selfish" },
          { wordRuby: "元{もと}になる", meaning: "source of trouble・to serve as the basis for" },
        ],
      },
      {
        id: 138,
        wordRuby: "薄{うす}れる",
        meaning: "to fade・to become thin・to weaken",
        info: "〜ことで means: through ~・by doing ~・because of ~ (used to indicate the cause or reason for something, it indicates the direct method, means, or reason behind a result.)\n\n〜ものだ means: it is natural that ~・it is expected that ~・it is a fact that ~ [ 〜のは当然だ ] (used to express a general truth, natural occurrence, or common expectation about a situation or behavior)",
        components: [
          { kanji: "薄", meaning: "thin・weak" },
        ],
        example: "時間が経つ[ことで]、当時の辛い記憶も少しずつ{薄れて}いく[ものだ]。",
        exampleMeaning: "[Through] the passage of time, the painful memories of those days are bound to {fade away} little by little.",
        extraVocabulary: [
          { wordRuby: "経{た}つ", meaning: "to pass (time)" },
          { wordRuby: "記{き}憶{おく}", meaning: "memory" },
        ],
      },
      {
        id: 139,
        wordRuby: "刻{きざ}む",
        meaning: "to carve・to engrave・to mark・to etch into memory",
        info: "N + 〜を基に・N + 〜をもとにして means: based on ~・using ~ as a foundation (used to indicate that something is created, developed, or derived from a certain source or reference point. Taking source material or historical facts to create something.)",
        components: [
          { kanji: "刻", meaning: "engrave" }
        ],
        example: "歴史的な事実[を基にした]小説のプロットを、彼は熱心にノートに{刻む}ように書き写した。",
        exampleMeaning: "He copied down the plot of the novel [based on] historical facts into his notebook with intense focus, as if {engraving} it.",
        extraVocabulary: [
          { wordRuby: "歴{れき}史{し}", meaning: "history" },
          { wordRuby: "事{じ}実{じつ}", meaning: "fact" },
          { wordRuby: "熱{ねっ}心{しん}", meaning: "enthusiastic・ardent" },
          { wordRuby: "書{か}き写{うつ}す", meaning: "to copy down・to write something down from another source" }
        ],
        
      },
      {
        id: 140,
        wordRuby: "儲{もう}ける",
        meaning: "to make a profit・to gain money",
        info: "〜までして means: going so far as to ~・even going to the extent of ~ [ 〜するほどのことをして ] (used to express that someone is willing to go to great lengths or take extreme measures to achieve a certain goal or outcome. Doing something extreme or beyond standard morals to achieve a goal.)",
        components: [
          { kanji: "儲", meaning: "profit" }
        ],
        example: "法律を破るような不正な手段[までして]お金を{儲ける}べきではない。",
        exampleMeaning: "You shouldn't {make a profit} by [going so far as] to use illegal, fraudulent means that break the law.",
        extraVocabulary: [
          { wordRuby: "法{ほう}律{りつ}", meaning: "law" },
          { wordRuby: "破{やぶ}る", meaning: "to break・to violate" },
          { wordRuby: "不{ふ}正{せい}な", meaning: "fraudulent・illegal・improper" },
          { wordRuby: "手{しゅ}段{だん}", meaning: "means・method" }
        ],
      },
      {
        id: 141,
        wordRuby: "設{もう}ける",
        meaning: "to establish・to set up・to create (a rule/opportunity)",
        info: "〜に関して means: regarding ~・concerning ~・in relation to ~ (used to indicate that something is related to or about a specific topic, subject, or matter. It is often used in formal contexts to discuss matters of importance.)\nA formal way to introduce the specific topic being discussed or researched.",
        components: [
          { kanji: "設", meaning: "establish" },
        ],
        example: "新しいオフィスの利用規則[に関して]、社員が意見を述べるための場が{設けられた}。",
        exampleMeaning: "[Regarding] the usage rules of the new office, a space was {established} for employees to express their opinions.",
        extraVocabulary: [
          { wordRuby: "利{り}用{よう}規{き}則{そく}", meaning: "usage rules" },
          { wordRuby: "述{の}べる", meaning: "to express・to state" },
        ],
        
      },
      {
        id: 142,
        wordRuby: "稼{かせ}ぐ",
        meaning: "to earn money・to make a living・to buy/gain (time)",
        info: "〜上に means: in addition to ~・on top of ~・besides ~ [ 〜に加えて ] (used to express that something is added to an existing situation or condition, often highlighting the accumulation of factors or circumstances)\nLayering multiple positive or negative factors onto a single subject.",
        components: [
          { kanji: "稼", meaning: "earn" },
        ],
        example: "彼は本業で十分な収入を{稼いで}いる[上に]、投資による不労所得も得ている。",
        exampleMeaning: "[On top of] {earning} a sufficient income from his main career, he also receives passive income through investments.",
        extraVocabulary: [
          { wordRuby: "本{ほん}業{ぎょう}", meaning: "main business・main occupation" },
          { wordRuby: "収{しゅう}入{にゅう}", meaning: "income" },
          { wordRuby: "投{とう}資{し}", meaning: "investment" },
          { wordRuby: "不{ふ}労{ろう}所{しょ}得{とく}", meaning: "passive income" },
          { wordRuby: "得{え}る", meaning: "to gain・to obtain" }
        ],
      },
      {
        id: 143,
        wordRuby: "争{あらそ}い",
        meaning: "dispute・conflict",
        info: "N + 〜もかまわず means: without caring about ~・paying no attention to ~ [ 〜を気にせずに ] (used to express that someone does something without considering or being concerned about a certain factor or consequence. It emphasizes the disregard for a particular aspect while taking action.)\nActing completely oblivious to standard social boundaries or opinions.",
        components: [
          { kanji: "争", meaning: "dispute" }
        ],
        example: "二人の男は周囲の迷惑[もかまわず]、路上で激しい{争い}を続けていた。",
        exampleMeaning: "The two men continued their fierce {dispute} on the street, [without caring about] the inconvenience caused to those around them.",
        extraVocabulary: [
          { wordRuby: "周{しゅう}囲{い}", meaning: "surroundings" },
          { wordRuby: "迷{めい}惑{わく}", meaning: "inconvenience・trouble・bothersome" },
          { wordRuby: "路{ろ}上{じょう}", meaning: "on the street" },
          { wordRuby: "激{はげ}しい", meaning: "fierce・intense" }
        ],
      },
      {
        id: 144,
        wordRuby: "共{きょう}感{かん}",
        meaning: "sympathy・empathy・to relate to・to sympathize with",
        info: "N + 〜はもとより means: let alone ~・not to mention ~・needless to say・Not only... but also... [ 〜はもちろん ] (used to emphasize that something is true or applicable, and then adds that it is even more so for another related thing. It highlights the idea that if the first statement is true, the second one is even more obvious or expected.)\nHighlights that X is natural/obvious, so Y is a given as well.",
        components: [
          { kanji: "共", meaning: "together" },
          { kanji: "感", meaning: "feeling" }
        ],
        example: "彼女の書いた小説は、同世代の若者[はもとより]、多くのシニア層からも深い{共感}を得た。",
        exampleMeaning: "Her novel gained deep {empathy} from many seniors, [let alone] the youth of her own generation.",
        extraVocabulary: [
          { wordRuby: "同{どう}世{せ}代{だい}", meaning: "same generation" },
          { wordRuby: "層{そう}", meaning: "layer・class" },
          { wordRuby: "得{え}る", meaning: "to gain・to obtain" }
        ],
      },
      {
        id: 145,
        wordRuby: "準{じゅん}決{けっ}勝{しょう}",
        meaning: "semi-final",
        info: "～だけではだめで means: Just doing X is not enough. States that a baseline action or state is insufficient for the final goal.",
        components: [
          { kanji: "準", meaning: "semi・quasi" },
          { kanji: "決", meaning: "decide" },
          { kanji: "勝", meaning: "win" }
        ],
        example: "大会で優勝するためには、{準決勝}に進出する[だけではだめで]、決勝で強豪を破らなければならない。",
        exampleMeaning: "In order to win the tournament, [just] advancing to the {semifinals} [is not enough], you must defeat a powerful opponent in the finals.",
        extraVocabulary: [
          { wordRuby: "優{ゆう}勝{しょう}", meaning: "victory・championship" },
          { wordRuby: "進{しん}出{しゅつ}", meaning: "advance・progress" },
          { wordRuby: "決{けっ}勝{しょう}", meaning: "finals" },
          { wordRuby: "強{きょう}豪{ごう}", meaning: "powerful opponent" },
          { wordRuby: "破{やぶ}る", meaning: "to defeat・to break" }
        ],
      },
      {
        id: 146,
        wordRuby: "解{かい}読{どく}",
        meaning: "decoding・deciphering",
        info: "V. ます Stem + ～かけの・～かける・～かけだ means: in the middle of ~・halfway through ~・in the process of ~・unfinished [ 〜途中で ] (used to express that an action or state is ongoing or incomplete, often indicating that something is in progress or has not yet been finished.)",
        components: [
          { kanji: "解", meaning: "solve" },
          { kanji: "読", meaning: "read" }
        ],
        example: "机の上には、彼が{解読し}[かけの]古代の古文書がそのまま残されていた。",
        exampleMeaning: "Left directly on the desk was the ancient classical document that he [was in the middle of] {deciphering}.",
        extraVocabulary: [
          { wordRuby: "古{こ}代{だい}", meaning: "ancient times・antiquity" },
          { wordRuby: "古{こ}文{もん}書{しょ}", meaning: "ancient records・old document" },
        ],
      }
    ],
  },
};
