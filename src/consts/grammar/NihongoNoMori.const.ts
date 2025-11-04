export const GrammarEntryCategory = {
  REASON_CAUSE: '理由・原因',
  SITUATION_CHANGE: '状況・変化',
  POSITIONS_STANDARDS: '立場・基準',
  ADVERSATIVE_NEGATIVE: '逆接・否定',
  IMAGINATION_PREDICTION: '想像・予想',
  DEGREE_ENPHASIS_COMPARISON: '程度・強調・比較',
  POINT_IN_TIME: '時・間',
  ASSUMPTIONS_CONDITIONS: '仮定・条件',
  PURPOSE_METHOD_OPERATION: '目的・方法・動作',
  RULES_ADVICE: 'ルール・アドバイス',
} as const;

export const NIHONGO_NO_MORI_GRAMMAR: GrammarEntry[] = [
  {
    id: 1,
    grammar: "〜せい",
    imi: "〜が原因で、悪い結果になった",
    explanation: "ズボンに穴があく。",
    usage: {
      form: [{ name: "普通形"}, {name: "名詞", connector: "の"}, {name: "な形容詞", connector: "な"}],
      pattern: ["せい (で・か・だ)"]
    },
    examples: [
      {
        sentence: "テストの結果が悪かったのは、しっかり勉強しなかったせいだ。",
        meaning: "The reason the test results were bad is that I didn't study properly."
      },
      {
        sentence: "道にあった石のせいで、転んでけがをしてしまった。",
        meaning: "I tripped and fell because of the stone in the road."
      }
    ],
    category: GrammarEntryCategory.REASON_CAUSE
  },
  {
    id: 2,
    grammar: "〜おかげで",
    imi: "〜が原因で、良い結果になった",
    usage: {
      form: [{ name: "普通形"}, {name: "名詞", connector: "の"}, {name: "な形容詞", connector: "な"}],
      pattern: ["おかげ (で・か・だ)"]
    },
    examples: [
      {
        sentence: "先生が日本語を教えてくれたおかげで、試験に合格することができた。",
        meaning: "Thanks to the teacher teaching me Japanese, I was able to pass the exam."
      }
    ],
    category: GrammarEntryCategory.REASON_CAUSE
  },
  {
    id: 3,
    grammar: "〜もの",
    imi: "〜だから",
    usage: {
      form: [{ name: "普通形"}, {name: "名詞", connector: "な"}, {name: "な形容詞", connector: "な"}],
      pattern: ["もの", "もん", "ものだから", "もので"]
    },
    examples: [
      {
        sentence: "苦手なものだからあまりやりたくありません。",
        meaning: "I don't want to do it much because it's something I'm not good at."
      }
    ],
    category: GrammarEntryCategory.REASON_CAUSE
  },
  {
    id: 4,
    grammar: "〜ため",
    imi: "〜なので",
    usage: {
      form: [{ name: "普通形"}, {name: "名詞", connector: "の"}, {name: "な形容詞", connector: "な"}],
      pattern: ["ため", "ために", "ためだ"]
    },
    examples: [
      {
        sentence: "病気のためやすみます。",
        meaning: "I will take a break because of my illness."
      },
      {
        sentence: "中止になったのは雨のためだ。",
        meaning: "The reason it was canceled is because of the rain."
      },
      {
        sentence: "忙しいために病気になってしまった。",
        meaning: "Being busy led to getting sick.",
        point: "忙しかったから病気になったという意味です。"
      },
      {
        sentence: "急に店を休みにしたのは、冷蔵庫の調子が悪いためだ。",
        meaning: "The reason the store suddenly closed is because the refrigerator was not working well."
      },
    ],
    category: GrammarEntryCategory.REASON_CAUSE,
    explanation: "お知らせなど、たくさんの人に伝える場面で使う。",
  },
  {
    id: 5,
    grammar: "〜のだから",
    imi: "〜なので",
    usage: {
      form: [{ name: "普通形"}, {name: "名詞", connector: "な"}, {name: "な形容詞", connector: "な"}],
      pattern: ["のだから", "のですから", "んだから", "んですから"]
    },
    examples: [
      {
        sentence: "子供じゃないんだから、しっかりしてよ。",
        meaning: "You're not a child, so get it together.",
        point: "子供じゃないというのは相手も自分もわかっていることです。"
      },
      {
        sentence: "山本さんは車の免許を持っているんだから、たまには運転すればいいのに。",
        meaning: "Yamamoto has a driver's license, so he should drive once in a while.",
        point: "He has a license but doesn't drive at all."
      },
      {
        sentence: "最近ちゃんと眠れていないのですから、今日は早く寝てください。",
        meaning: "I haven't been able to sleep well lately, so please go to bed early today.",
      },
      {
        sentence: "せっかくのパーティーなんですから、楽しんでいってください。",
        meaning: "It's a special party, so please enjoy yourself.",
      },
    ],
    category: GrammarEntryCategory.REASON_CAUSE,
    explanation: "相手もわかっているにところを説明するときに使う。",
  },
  {
    id: 6,
    grammar: "〜をきっかけに",
    imi: "〜のときから、 。。。を始めた",
    usage: {
      form: [{ name: "た形"}, {name: "名詞"}],
      pattern: [
        "ことをきっかけに", 
        "ことがきっかけで",
        "のをきっかけに", 
        "のがきっかけで",
        "をきっかけに", 
        "がきっかけで",
      ]
    },
    examples: [
      {
        sentence: "趣味をきっかけに友達になった。",
        meaning: "I became friends with someone because of a shared hobby.",
      },
      {
        sentence: "留学したことがきっかけで海外に興味を持つようになった。",
        meaning: "I became interested in studying abroad because I studied abroad.",
        point: "留学したときから興味を持つということが始まった。"
      },
      {
        sentence: "仕事を辞めたのがきっかけで世界中を回る旅をしようと思うようになった",
        meaning: "Quitting my job made me think about traveling around the world.",
      },
      {
        sentence: "子どものころ観に行った映画がきっかけで、音楽を学ぶようになった。",
        meaning: "I started learning music because (after watching) a movie I saw when I was a child.",
      },
      {
        sentence: "パソコンを買ったのをきっかけに、書類の作り方を覚えた。",
        meaning: "I started learning how to create documents after I bought a computer.",
      },
    ],
    category: GrammarEntryCategory.REASON_CAUSE,
    extraInfo: " With VERBS use ( ことを〜に; ことが〜で; のを〜に; のが〜で ), with NOUNS use ( を〜に; が〜で )"
  },
  {
    id: 7,
    grammar: "〜わけだ",
    imi: "意味1: だから～なんだね\n意味2:～ということだね",
    explanation: `
    意味1: 相手の話を聞いて、納得したときに使う。[ 話しているときに相手の話を聞いて、だからそうなのか！（～だからそうなんだね） ]
    意味2: 相手の話を聞いて、内容をまとめて言うときに使う。[ 相手が言っていることを聞いて、つまりあなたが言いたいのはこういうこと。 ]
    `,
    usage: {
      form: [{ name: "普通形"}, {name: "名詞", connector: "な"}, {name: "な形容詞", connector: "な"}],
      pattern: ["わけだ"]
    },
    examples: [
      {
        sentence: "君の話をまとめると、つまり明日から一週間休みたいというわけだ。",
        meaning: "In summary, you want to take a week off starting tomorrow.",
        point: '(意味2) They say "Tomorrow I have to do this and this and that..." And by that you already understood they want to take a break'
      },
      {
        sentence: "さとうさん、3年間海外で仕事をしていたんだって。英語が上手なわけだ。",
        meaning: "Sato has been working abroad for three years, so that's why his English is good.",
        point: '"(意味1) She lived overseas for 3 year." Ahhh, that\'s why her English is good.'
      },
      {
        sentence: "彼女は美容師だそうだ。だからかみの毛の色がすてきなわけだ。",
        meaning: "I heard she is a hairdresser. Ah, that's why her hair color is so nice.",
      },
    ],
    category: GrammarEntryCategory.REASON_CAUSE,
    extraInfo: "~ AAAhh, É por isso..."
  },
  {
    id: 8,
    grammar: "〜以来",
    imi: "〜のときから、ずっと同じだ",
    explanation: "それをしてからそのときから後ろはずっと同じ状態が続いている",
    usage: {
      form: [{ name: "テ形"}, {name: "名詞"}],
      pattern: ["以来"]
    },
    examples: [
      {
        sentence: "卒業して以来彼女とは一度も会っていない。",
        meaning: "I haven't seen her since I graduated.",
        point: "卒業したというときからずっと彼女と会っていないという同じ状態が続いている。"
      },
      {
        sentence: "初めて海外に行って以来、文化の違いに興味を持つようになった。",
        meaning: "Since I first went abroad, I've become interested in cultural differences.",
      },
    ],
    category: GrammarEntryCategory.REASON_CAUSE,
  },
  {
    id: 9,
    grammar: "〜によって ①",
    imi: "〜が理由で",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["によって", "により"]
    },
    examples: [
      {
        sentence: "地震によって家がこわれました。",
        meaning: "The house was destroyed by (because of) the earthquake.",
        point: "地震が理由で家がこわれた。"
      },
      {
        sentence: "商品の値上げによって生活が苦しくなった。",
        meaning: "Living became difficult because of the price increase of goods.",
        point: "商品の値上げが理由で生活が苦しくなった。"
      },
      {
        sentence: "病気の流行によって、生活や仕事の仕方が大きく変わった。",
        meaning: "The outbreak of illness greatly changed lifestyles and work styles.",
        point: "病気の流行が理由で生活や仕事の仕方が大きく変わった。"
      },
      {
        sentence: "この本と出会ったことによって、本を読む楽しさがわかった。",
        meaning: "The reason I understood the joy of reading books is that I encountered this book."
      },
      {
        sentence: "大雪によって（により）、いくつかの道が通れなくなっている。",
        meaning: "Some roads have become impassable due to heavy snowfall.",
      },
    ],
    category: GrammarEntryCategory.REASON_CAUSE,
    explanation: "お知らせなど、たくさんの人に伝える場面で使う。",
  },
  {
    id: 10,
    grammar: "〜まま",
    imi: "〜変わらないで",
    explanation: "その状態がずっと続いている",
    usage: {
      form: [{name: "V.た形"}, {name: "V.ない形"}, {name: "イ形容詞"}, {name: "ナ形容詞", connector: "な"}, {name: "名詞", connector: "の"}],
      pattern: ["まま"]
    },
    examples: [
      {
        sentence: "この自転車は壊れたまま。",
        meaning: "This bicycle is still broken.",
      },
      {
        sentence: "服は昨日のままです。",
        meaning: "The clothes are still the same as yesterday.",
        point: "It's the one I was wearing yesterday."
      },
      {
        sentence: "私の故郷の景色は子供の頃のまま変わっていない。",
        meaning: "The scenery of my hometown hasn't changed since I was a child.",
      },
      {
        sentence: "エアコンをつけたまま家を出てしまった。",
        meaning: "I left the house with the air conditioner on.",
      },
      {
        sentence: "片付けせず、そのままにしておいてください。",
        meaning: "Please leave it as it is without tidying up.",
      },
    ],
    category: GrammarEntryCategory.SITUATION_CHANGE,
    newWords: [
      { kanji: "故郷", kana: "ふるさと", english: "hometown" }
    ],
  },
  {
    id: 11,
    grammar: "〜つつ",
    imi: "〜ながら",
    explanation: "2つのことを一緒にやるときに使う文法。",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["つつ"]
    },
    examples: [
      {
        sentence: "難しいと思いつつやってみた。",
        meaning: "I tried it even though I thought it would be difficult.",
      },
      {
        sentence: "見て、目を動かしつつ鼻も動かしてるよ！",
        meaning: "Look, I'm moving my eyes while also moving my nose!",
      },
      {
        sentence: "彼女が僕のことを好きではないと知りつつも諦めることができない。",
        meaning: "I can't give up even though I know she doesn't like me.",
      },
      {
        sentence: "宿題をしなければと思いつつも疲れたせいか帰ってすぐに寝てしまった。",
        meaning: "While I knew I had to do my homework, I was so tired that I went home and fell asleep right away.",
      },
      {
        sentence: "料理をしつつ、子供の面倒を見るのはとても大変だ。",
        meaning: "It's very difficult to cook while taking care of the children.",
      },
    ],
    category: GrammarEntryCategory.SITUATION_CHANGE,
    extraInfo: "Formal version of 〜ながら",
    newWords: [
      { kanji: "動かす", kana: "うごかす", english: "to move" },
      { kanji: "面倒", kana: "めんどう", english: "trouble" },
      { kanji: "面倒を見る", kana: "めんどうをみる", english: "to take care of" },
      { kanji: "面倒臭い", kana: "めんどうくさい", english: "troublesome" },
      { kanji: "理解", kana: "りかい", english: "understanding" },
      { kanji: "我慢", kana: "がまん", english: "patience" },
    ],
  },
  {
    id: 12,
    grammar: "〜とともに",
    imi: "〜と同時に",
    explanation: "同じ時に何を変わる・何をする",
    usage: {
      form: [{name: "V.る形"}, {name: "名詞"}, {name: "名詞", connector: "である"}],
      pattern: ["とともに"]
    },
    examples: [
      {
        sentence: "体重が変化するとともに見た目も変わってきた。",
        meaning: "As my weight changed (at the same time), my appearance also changed.",
      },
      {
        sentence: "時代とともに人の考え方も変わる。",
        meaning: "As the times change, people's ways of thinking also change.",
      },
      {
        sentence: "彼は社長であるとともにこの会社の社員でもある。",
        meaning: "He is both the president and an employee of this company.",
      },
      {
        sentence: "彼女は私に日本語を教えてくれる先生であるとともに、私の友人でもある。",
        meaning: "She is both a teacher who teaches me Japanese and a friend of mine. (Both at the same time)",
      },
      {
        sentence: "気温が上がるとともに、体調が悪くなる人が増えてきた。",
        meaning: "As the temperature rises, the number of people whose health is deteriorating has increased.",
      },
      {
        sentence: "高校卒業とともに引っ越しをして東京で仕事を始めた。",
        meaning: "I moved and started working in Tokyo at the same time I graduated from high school.",
        point: "卒業した、すぐに仕事を始めた。"
      },
    ],
    category: GrammarEntryCategory.SITUATION_CHANGE,
    extraInfo: "Гとも」＝＞ 一緒",
    newWords: [
      { kanji: "体重", kana: "たいじゅう", english: "(Body) weight" },
      { kanji: "見た目", kana: "みため", english: "appearance" },
    ],
  },
  {
    id: 13,
    grammar: "〜つつめる",
    imi: "どんどん～になる",
    explanation: "少しずつ何かが変化している様子を表す時に使う",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["つつめる"]
    },
    examples: [
      {
        sentence: "アニメや漫画の人気によって、日本語学習者は増加しつつある。",
        meaning: "The popularity of anime and manga is gradually increasing the number of Japanese learners.",
      },
      {
        sentence: "時代の変化に合わせて、人々の働き方は変わりつつある。",
        meaning: "People's ways of working are gradually changing in line with the changes of the times.",
      },
      {
        sentence: "彼の病気は治りつつあるが、まだ病院へ通わなければならないらしい。",
        meaning: "His illness is gradually improving, but it seems he still has to go to the hospital.",
      },
    ],
    category: GrammarEntryCategory.SITUATION_CHANGE,
    extraInfo: "消えつつある -> どんどん消えているという意味です。",
    newWords: [
      { kanji: "様子", kana: "ようす", english: "state・appearance" },
      { kanji: "学習者", kana: "がくしゅうしゃ", english: "learner" },
      { kanji: "増加", kana: "ぞうか", english: "increase" },
    ],
  },
  {
    id: 14,
    grammar: "〜ば ～ほど",
    imi: "〜なら、もっと。。。",
    usage: {
      form: [
        {name: "V.ば ＋ V.る"},
        {name: "イ形容詞 ければ ＋ イ形容詞"},
        {name: "ナ形容詞・名詞 であれば ＋ ナ形容詞・名詞"},
      ],
      pattern: ["ほど", "であるほど"],
      combinedForms: [
        { first: "ナ形容詞・名詞", pattern: "〜であればあるほど"},
      ],
    },
    examples: [
      {
        sentence: "マンゴーやバナナは甘ければ甘いほどいい。",
        meaning: "The sweeter the mangoes and bananas are, the better.",
      },
      {
        sentence: "もう、勉強すればするほどわからないことが増えるよ！",
        meaning: "The more I study, the more things I don't understand increase!",
      },
      {
        sentence: "料理は作れば作るほど上手になるものだ。",
        meaning: "The more you cook, the better you become at it.",
      },
      {
        sentence: "大変であれば大変であるほどやり終えた時の喜びは大きい。",
        meaning: "The more difficult it is, the greater the joy when it's finished.",
      },
      {
        sentence: "話せば話すほど疲れる。",
        meaning: "The more I talk, the more tired I become.",
      },
      {
        sentence: "早ければ早いほどいい。",
        meaning: "The earlier, the better.",
      },
      {
        sentence: "有名であればあるほど大変なことも多い。",
        meaning: "The more famous you are, the more difficulties you face.",
      },
    ],
    category: GrammarEntryCategory.SITUATION_CHANGE,
    newWords: [
      { kanji: "喜び", kana: "よろこび", english: "joy" },
    ]
  },
  {
    id: 15,
    grammar: "〜にしたがって",
    imi: "〜すると、だんだんと。。。も変わる",
    usage: {
      form: [{name: "V.る"}, {name: "名詞"}],
      pattern: ["にしたがって"]
    },
    examples: [
      {
        sentence: "寒くなるにしたがって学校を休む人が増えてきた。",
        meaning: "As it gets colder, the number of people taking time off from school has increased.",
      },
      {
        sentence: "気温の変化にしたがって服装を変えた。",
        meaning: "I changed my clothes according to the change in temperature.",
      },
      {
        sentence: "年を取るにしたがって、小さなことが気にならなくなる。",
        meaning: "As I get older, I become less concerned about small things.",
      },
      {
        sentence: "昼間は暑いが、日が落ちるにしたがって涼しくなる。",
        meaning: "It is hot during the day, but it gets cooler as the sun sets.",
      },
      {
        sentence: "春が近づくにしたがって桜の花が咲き始める。",
        meaning: "As spring approaches, the cherry blossoms begin to bloom.",
      },
    ],
    category: GrammarEntryCategory.SITUATION_CHANGE,
    newWords: [
      { kanji: "服装", kana: "ふくそう", english: "clothing" },
      { kanji: "年を取る", kana: "としをとる", english: "to age・to get older" },
      { kanji: "日が落ちる", kana: "ひがおちる", english: "the sun sets" },
      { kanji: "近づく", kana: "ちかづく", english: "to approach・to get closer" },
      { kanji: "桜", kana: "さくら", english: "cherry blossom" },
      { kanji: "昼間", kana: "ひるま", english: "daytime" },
    ]
  },
  {
    id: 16,
    grammar: "〜ばかり ①",
    imi: "どんどん～になる",
    explanation: "特に悪いこと - 悪くなる、よくならない",
    usage: {
      form: [{name: "V.る"}],
      pattern: ["ばかり (で・だ)"]
    },
    examples: [
      {
        sentence: "給料は上がらないのに、物価は高くなるばかりだ。",
        meaning: "Salary doesn't increase, but prices keep going up.(Only goes up)",
      },
      {
        sentence: "風邪をひいてしまい、体調が悪くなるばかりだ。",
        meaning: "I caught a cold, and my condition keeps getting worse. (Only gets worse)",
      },
      {
        sentence: "毎日の残業で疲れが溜まるばかりだ。",
        meaning: "I keep getting more and more tired from the daily overtime.",
      },
    ],
    category: GrammarEntryCategory.SITUATION_CHANGE,
    newWords: [
      { kanji: "給料", kana: "きゅうりょう", english: "salary" },
      { kanji: "物価", kana: "ぶっか", english: "prices (of things)" },
      { kanji: "溜まる", kana: "たまる", english: "to accumulate" },
    ]
  },
  // SECTION 3 - GRAMMAR 17 - 25
  {
    id: 17,
    grammar: "〜として",
    imi: "〜の立場で",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["として"],
      combinedForms: [
        { first: "名詞1", pattern: "としての", second: "名詞2" },
      ],
    },
    examples: [
      {
        sentence: "入学式では、新入生の代表として、みんなの前で話をした。",
        meaning: "At the entrance ceremony, I spoke in front of everyone as the representative of the new students.",
        point: "代表の立場で。。。"
      },
      {
        sentence: "もう少し、大人としての行動を考えましょう。",
        meaning: "Let's think a little more about our actions as adults.",
      },
      {
        sentence: "コンビニの店長として、仕事は全部できるようになるべきだ。",
        meaning: "As the store manager of the convenience store, I should be able to do all the work.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    extraInfo: "立場＝＞ Position (e.g. as a student, as a teacher, as a parent...)",
    newWords: [
      { kanji: "行動", kana: "こうどう", english: "action" },
      { kanji: "立場", kana: "たちば", english: "position" },
      { kanji: "基準", kana: "きじゅん", english: "standard" },
    ]
  },
  {
    id: 18,
    grammar: "〜にとって",
    imi: "〜の立場から考えて",
    explanation: "For that person in that position...",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["にとって"],
      combinedForms: [
        { first: "名詞1", pattern: "にとっての", second: "名詞2" },
      ],
    },
    examples: [
      {
        sentence: "私にとって、英語を勉強することは楽しいことだ。",
        meaning: "For me, studying English is a fun thing.",
      },
      {
        sentence: "外国人にとって、漢字は難しいですよね。",
        meaning: "For foreigners, kanji is difficult, isn't it?",
      },
      {
        sentence: "私にとっての幸せとは、家族と一緒に過ごすこと。",
        meaning: "For me, happiness is spending time with my family.",
      },
      {
        sentence: "中村さんにとって、一番の楽しみは、孫と一緒にご飯を食べることだそうだ。",
        meaning: "Mr. Nakamura said that for him the greatest joy is to eat with his grandchild.",
      },
      {
        sentence: "どんな人にとっても生活しやすい国にすることを目標にしている。",
        meaning: "The goal is to make the country easy to live in for everyone.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    newWords: [
      { kanji: "孫", kana: "まご", english: "grandchild" },
      { kanji: "目標", kana: "もくひょう", english: "goal" },
    ]
  },
  {
    id: 19,
    grammar: "〜に基づいて",
    imi: "〜をもとにして",
    explanation: '"Based on 〜"・"On the basis of 〜". It shows that something is created, decided, or done using X as a foundation/reference.',
    usage: {
      form: [{name: "名詞"}],
      pattern: ["に基づいて"],
      combinedForms: [
        { first: "名詞1", pattern: "に基づく", second: "名詞2" },
        { first: "名詞1", pattern: "に基づいた", second: "名詞2" },
      ],
    },
    examples: [
      {
        sentence: "年の初めに決めた目標に基づいて計画を立てる。",
        meaning: "I will make a plan based on the goals set at the beginning of the year.",
      },
      {
        sentence: "この商品は、多くの人の意見に基づいて作られている。",
        meaning: "This product is made based on the opinions of many people.",
      },
      {
        sentence: "この映画は、実際にあった出来事に基づいて作られた。",
        meaning: "This movie was made based on actual events.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    newWords: [
      { kanji: "基づく", kana: "もとづく", english: "to be based on" },
      { kanji: "実際", kana: "じっさい", english: "actual" },
    ]
  },
  {
    id: 20,
    grammar: "〜を中心に",
    imi: "〜を基本に考えて",
    explanation: 'Lit. With X as the center. "Mainly around X"・"Focusing on X"・"Centered on X"',
    usage: {
      form: [{name: "名詞"}],
      pattern: ["を中心に (して)", "を中心として"]
    },
    examples: [
      {
        sentence: "インターネットを中心にして新しい言葉が広まる。",
        meaning: "New words are spreading mainly around the Internet.",
      },
      {
        sentence: "大学生を中心に人気がある。",
        meaning: "It is popular mainly among university students.",
      },
      {
        sentence: "若者を中心にして、古いカメラで写真を撮ることが流行っている。",
        meaning: "Taking photos with old cameras is trending mainly among young people.",
      },
      {
        sentence: "この地域の人々は、中学生を中心として町のゴミ拾いを行っている。",
        meaning: "The people in this region are doing town clean-up activities with junior high school students as the main participants.",
      },
      {
        sentence: "今夜は、西日本を中心に大雨になると予報されている。",
        meaning: "It is forecasted that heavy rain will occur tonight, mainly in Western Japan.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    newWords: [
      { kanji: "中心", kana: "ちゅうしん", english: "center" },
      { kanji: "流行る", kana: "はやる", english: "to be in fashion・popular" },
      { kanji: "地域", kana: "ちいき", english: "region" },
    ]
  },
  {
    id: 21,
    grammar: "〜とおり",
    imi: "〜と同じように",
    usage: {
      form: [{name: "V.る・た"}, {name: "名詞", connector: "の"}],
      pattern: ["とおり (に)", "どおり (に)"]
    },
    examples: [
      {
        sentence: "今日は予定どおりデートに行きます。",
        meaning: "I will go on a date as planned today.",
      },
      {
        sentence: "本に書いてあるとおりにやったのに上手くいかない。",
        meaning: "I followed what was written in the book, but it didn't go well.",
      },
      {
        sentence: "計画どおり進まないことはよくあることなので、心配しなくてもいいよ。",
        meaning: "It's common for things not to go according to plan, so you don't have to worry.",
      },
      {
        sentence: "母が教えてくれたとおりに作ってみたが、なかなか美味しく作ることができない。",
        meaning: "I tried to make it as my mother taught me, but I couldn't make it delicious.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    newWords: [
      { kanji: "計画", kana: "けいかく", english: "plan" },
      { kanji: "進む", kana: "すすむ", english: "to advance・proceed" },
    ]
  },
  {
    id: 22,
    grammar: "〜という",
    imi: "〜という名前の",
    explanation: "知らないことを説明したり、教えてもらったりするときに使う。",
    usage: {
      combinedForms: [{ first: "名詞1", pattern: "という。っていう・って", second: "名詞2" }],
    },
    examples: [
      {
        sentence: "立川という街を知っていますか。",
        meaning: "Do you know the city called Tachikawa?",
      },
      {
        sentence: "佐藤さんっていう人を知っている？",
        meaning: "Do you know a person named Sato?",
      },
      {
        sentence: "日本語の森って会社を知っている？",
        meaning: "Do you know the company called Nihongo no Mori?",
      },
      {
        sentence: "私はトイプードルという種類の犬を飼っています。",
        meaning: "I have a dog of the Toy Poodle breed.",
      },
      {
        sentence: "隣に引っ越してきたかとうさんって人、知っている？",
        meaning: "Do you know a person named Kato who moved in next door?",
      },
      {
        sentence: "A:ひたちっていう駅に行きたいんですが、との電車に乗ればいいですか。\nB:ひたちですか？ 3番線の電車に乗ってください。",
        meaning: "A: I want to go to a station called Hitachi. Which train should I take?\nB: Hitachi? Please take the train on platform 3.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    extraInfo: "N1 -> なまえ ・ N2 -> もの",
    newWords: [
      { kanji: "種類", kana: "しゅるい", english: "type・kind" },
    ]
  },
  {
    id: 23,
    grammar: "〜に対して ①",
    imi: "〜に・〜を相手に",
    explanation: 'に対して => "Toward・In response to・With regard to"\nに対する => "Regarding・About・Toward" noun\nIt marks the target of an action, attitude, opnion, or feeling. It can be concrete (toward a person) or abstract (toward an idea, issue, opnion).',
    usage: {
      form: [{name: "名詞"}],
      pattern: ["に対して"],
      combinedForms: [{ first: "名詞1", pattern: "に対する", second: "名詞2" }],
    },
    examples: [
      {
        sentence: "ニュースに対する意見。",
        meaning: "Opinion regarding the news.",
      },
      {
        sentence: "友達からの相談に対して何と答えようか考えている。",
        meaning: "I'm thinking about how to respond to my friend's consultation(question).",
      },
      {
        sentence: "中学生になった弟は、母に対してひどいことばかり言っている。",
        meaning: "My younger brother, who has become a junior high school student, only says terrible things to our mother.",
      },
      {
        sentence: "あなたの仕事に対する考え方を教えてください。",
        meaning: "Please tell me your way of thinking (approach) regarding your work.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    newWords: [
      { kanji: "相談", kana: "そうだん", english: "consultation; discussion" },
    ]
  },
  {
    id: 24,
    grammar: "〜について",
    imi: "〜のことを",
    explanation: "~のことを話す、考えると言うときに使う",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["について"]
    },
    examples: [
      {
        sentence: "父とおじさんたちが、野球の試合について話し合っている。",
        meaning: "My father and uncles are discussing the baseball game.",
      },
      {
        sentence: "彼は、日本の文化についてよく知っている人だ。",
        meaning: "He is a person who knows a lot about Japanese culture.",
      },
      {
        sentence: "故郷に帰ると、両親から一人暮らしの生活についてたくさんしつもんされた。",
        meaning: "When I returned to my hometown, my parents asked me a lot about my life living alone.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    newWords: [
      { kanji: "野球", kana: "やきゅう", english: "baseball" },
      { kanji: "試合", kana: "しあい", english: "game; match" },
      { kanji: "故郷", kana: "こきょう", english: "hometown" },
    ]
  },
  {
    id: 25,
    grammar: "〜に関して",
    imi: "〜について",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["に関して"],
      combinedForms: [
        { first: "名詞1", pattern: "に関する・に関しての", second: "名詞2" },
      ]
    },
    examples: [
      {
        sentence: "アフリカに行った目的は、文化に関する研究をするためだった。",
        meaning: "The purpose of going to Africa was to conduct research related to culture.",
      },
      {
        sentence: "その場にいた人から、事件に関しての話を聞き出した。",
        meaning: "I heard a story about the incident from a person who was there.",
      },
      {
        sentence: "植物に関して、父はかなり詳しい。",
        meaning: "My father is quite knowledgeable about plants.",
      },
    ],
    category: GrammarEntryCategory.POSITIONS_STANDARDS,
    newWords: [
      { kanji: "関する", kana: "かんする", english: "to be related to" },
      { kanji: "目的", kana: "もくてき", english: "purpose" },
      { kanji: "研究", kana: "けんきゅう", english: "research・study" },
      { kanji: "事件", kana: "じけん", english: "incident" },
      { kanji: "植物", kana: "しょくぶつ", english: "plant" },
      { kanji: "詳しい", kana: "くわしい", english: "detailed・be well-informed" },
      { kanji: "かなり", kana: "かなり", english: "considerably・fairly" },
    ]
  },
  // SECTION 3 - GRAMMAR 26 - 33
  {
    id: 26,
    grammar: "〜わけではない",
    imi: "はっきり～とは言えない",
    explanation: "I'm not gonna say that...・It doesn't necessarily mean that...",
    usage: {
      form: [{name: "普通形"}, {name: "ナ形容詞", connector: "な"}, {name: "名詞", connector: "な"}],
      pattern: ["わけではない", "わけじゃない"],
    },
    examples: [
      {
        sentence: "行きたくないわけではない。",
        meaning: "It's not that I don't want to go.",
      },
      {
        sentence: "寿司は嫌いなわけではないんですが、好きでもないです。",
        meaning: "It's not that I dislike sushi, but I don't really like it either.",
      },
      {
        sentence: "彼はいつも明るいけど悩みがないわけじゃないと思うよ。",
        meaning: "I think he always seems cheerful, but that doesn't mean he doesn't have worries.",
      },
      {
        sentence: "行けないわけではないんですが、到着がぎりぎりになると思います。",
        meaning: "It's not that I can't go, but I think I'll arrive just in time.",
      },
    ],
    category: GrammarEntryCategory.ADVERSATIVE_NEGATIVE,
    newWords: [
      { kanji: "悩み", kana: "なやみ", english: "worry・concern" },
      { kanji: "到着", kana: "とうちゃく", english: "arrival" },
    ]
  },
  {
    id: 27,
    grammar: "〜ながら",
    imi: "〜けれども",
    usage: {
      form: [{name: "V. ます STEM"}, {name: "イ形容詞"}, {name: "ナ形容詞"}, {name: "名詞"}],
      pattern: ["ながら（も）"],
      combinedForms: [
        { first: "ナ形容詞・名詞", pattern: "でありながら（も）"},
      ]
    },
    examples: [
      {
        sentence: "貧しいながら幸せです。",
        meaning: "I'm poor, but I'm happy.",
      },
      {
        sentence: "初心者でありながら彼はとても上手だ。",
        meaning: "Though he is a beginner, he is very good at it.",
      },
      {
        sentence: "決意しながらもまだ迷っている。",
        meaning: "I'm determined, but I'm still indecisive.",
      },
    ],
    category: GrammarEntryCategory.ADVERSATIVE_NEGATIVE,
    newWords: [
      { kanji: "貧しい", kana: "まずしい", english: "poor" },
      { kanji: "初心者", kana: "しょしんしゃ", english: "beginner" },
      { kanji: "決意", kana: "けつい", english: "determination" },
      { kanji: "迷っている", kana: "まよっている", english: "being lost; being indecisive" },
    ]
  },
  {
    id: 28,
    grammar: "〜かわりに ①",
    imi: "〜はいいところと、悪いところがある",
    usage: {
      form: [{name: "普通形"}, {name: "ナ形容詞"}, {name: "イ形容詞"}],
      pattern: ["かわりに"],
    },
    examples: [
      {
        sentence: "楽をした代わりに不合格だった。",
        meaning: "I took the easy way and ended up failing.",
        point: "楽をした -> いいところ・ 不合格 -> 悪いところ",
      },
      {
        sentence: "大変な代わりにお金がたくさんもらえる。",
        meaning: "It's hard work, but in return, you get a lot of money.",
        point: "大変 -> 悪いところ・ お金がたくさんもらえる -> いいところ",
      },
      {
        sentence: "この薬は、効果がある代わりにとても苦いです。",
        meaning: "This medicine is very bitter, but it is effective.",
      },
      {
        sentence: "明日は仕事を休んでもいいですよ。その代わりに、来週の土曜日は出勤してください。",
        meaning: "You can take tomorrow off work. However, please come in next Saturday.",
      },
      {
        sentence: "明日はいつもより早く出勤する代わりに、早く帰れることになった。",
        meaning: "Tomorrow I'll be able to go home earlier than usual in exchange for coming to work earlier than usual.",
      },
    ],
    category: GrammarEntryCategory.ADVERSATIVE_NEGATIVE,
    extraInfo: "名詞 + かわりに 使えない。",
    newWords: [
      { kanji: "効果", kana: "こうか", english: "effect" },
      { kanji: "出勤", kana: "しゅっきん", english: "attendance at work" },
    ],
  },
  {
    id: 29,
    grammar: "〜反面",
    imi: "〜なところがあるが、反対に。。。",
    explanation: "...on the other hand・...but on the other hand",
    usage: {
      form: [{name: "昔通形"},{name: "ナ形容詞", connector: "な・である"}, {name: "名詞", connector: "の・である"}],
      pattern: ["反面"],
    },
    examples: [
      {
        sentence: "N3に合格するのは難しい反面、合格したらすごく嬉しい。",
        meaning: "Passing N3 is hard, but on the other hand, if you pass it it's a great joy.",
      },
      {
        sentence: "日本では、都会に住む若者が増えている反面、地方に住む若者は減っている。",
        meaning: "In Japan, while the number of young people living in cities is increasing, the number of young people living in rural areas is decreasing.",
      },
      {
        sentence: "この仕事は忙しくて大変である反面、人のためになるいい仕事だと思う。",
        meaning: "This job is busy and hard, but on the other hand, I think it's a good job that helps people.",
      },
      {
        sentence: "この家は広い反面、掃除をするのが大変だ。",
        meaning: "This house is spacious, but on the other hand, it's hard to clean.",
      },
    ],
    category: GrammarEntryCategory.ADVERSATIVE_NEGATIVE,
    newWords: [
      { kanji: "都会", kana: "とかい", english: "city" },
      { kanji: "地方", kana: "ちほう", english: "countryside" },
      { kanji: "減る", kana: "へる", english: "to decrease" },
      { kanji: "掃除", kana: "そうじ", english: "cleaning" },
    ],
  },
  {
    id: 30,
    grammar: "〜ようがない",
    imi: "〜する方法がない",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["ようがない"],
    },
    examples: [
      {
        sentence: "説明しようがない。",
        meaning: "There is no way to explain it.",
        point: "説明する方法がない。",
      },
      {
        sentence: "怒りようがない。",
        meaning: "There is no way to get angry.",
      },
      {
        sentence: "諦めようがない。",
        meaning: "There is no way to give up.",
        point: "諦めることができない。",
      },
      {
        sentence: "携帯電話を水で濡らしてしまったら、もう直しようがない。",
        meaning: "There is no way to fix it once the cell phone gets wet.",
      },
      {
        sentence: "こんなに点数を入れられてしまっては、相手に勝ちようがない。",
        meaning: "There is no way to win against the opponent once they have scored this many points.",
      },
      {
        sentence: "何度教えても仕事を覚えないので、もう教えようがない。",
        meaning: "No matter how many times I teach him, he never learns the job, so there is no way to teach him anymore.",
        point: "教える方法がない。",
      },
    ],
    category: GrammarEntryCategory.ADVERSATIVE_NEGATIVE,
    newWords: [
      { kanji: "点数", kana: "てんすう", english: "score; points" },
    ]
  },
  {
    id: 31,
    grammar: "〜がたい",
    imi: "〜するのが難しい",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["がたい"],
    },
    examples: [
      {
        sentence: "理解しがたい。",
        meaning: "It's hard to understand.",
        point: "理解するのが難しい。",
      },
      {
        sentence: "あの優しい先生が大きな声で怒るなんて、信じがたい話だ。",
        meaning: "It's hard to believe that the kind teacher would get angry in a loud voice.",
      },
      {
        sentence: "受け入れがたい悲しいニュースが流れていた。",
        meaning: "There was sad news that was hard to accept.",
      },
      {
        sentence: "私にとって、うそをつかれることは許しがたいことである。",
        meaning: "For me, being lied to is something that is hard to forgive.",
      },
    ],
    category: GrammarEntryCategory.ADVERSATIVE_NEGATIVE,
    newWords: [
      { kanji: "理解", kana: "りかい", english: "understanding" },
      { kanji: "受け入れる", kana: "うけいれる", english: "to accept" },
      { kanji: "流れる", kana: "ながれる", english: "to flow・spread" },
      { kanji: "許す", kana: "ゆるす", english: "to allow; to forgive" },
    ]
  },
  {
    id: 32,
    grammar: "〜ずに",
    imi: "〜しないで",
    usage: {
      form: [{name: "V. ない STEM"}],
      pattern: ["ずに"],
    },
    examples: [
      {
        sentence: "財布を持たずに家を出てしまったので、急いで家に戻った。",
        meaning: "I left the house without my wallet, so I hurried back home.",
      },
      {
        sentence: "体調が悪いのであれば、今日は無理せずに帰ってください。",
        meaning: "If you are not feeling well, please go home without overdoing it today.",
      },
      {
        sentence: "旅行の前日に何も準備をせずに寝てしまい、集合時間に遅刻した。",
        meaning: "I went to bed without preparing anything the day before the trip and was late for the meeting time.",
      },
    ],
    extraInfo: "する -> せずに・ 来る -> 来ずに",
    category: GrammarEntryCategory.ADVERSATIVE_NEGATIVE,
    newWords: [
      { kanji: "前日", kana: "ぜんじつ", english: "the previous day" },
      { kanji: "集合時間", kana: "しゅうごうじかん", english: "meeting time" },
      { kanji: "遅刻", kana: "ちこく", english: "tardiness; lateness" },
    ]
  },
  {
    id: 33,
    grammar: "〜はずがない・わけがない",
    imi: "絶対に～ない",
    explanation: "はっきりとは分からないけど、そう信じている",
    usage: {
      form: [{name: "普通形"}, {name: "ナ形容詞", connector: "な"}, {name: "名詞", connector: "の"}],
      pattern: ["はずがない", "わけがない"],
    },
    examples: [
      {
        sentence: "いつも正直な彼女が、うそをつくわけがない。",
        meaning: "It's impossible for her, who is always honest, to lie.",
        point: "絶対うそをつかない。",
      },
      {
        sentence: "遊んでばかりいる弟が、東京大学に受かるはずがない。",
        meaning: "It's impossible for my younger brother, who is always playing, to pass the entrance exam for the University of Tokyo.",
        point: "絶対に受からない。"
      },
      {
        sentence: "おんなにたくさん勉強したんだ。試験に落ちるわけがない。",
        meaning: "It's impossible for her, who studied so much, to fail the exam.",
        point: "絶対に落ちない。"
      },
    ],
    category: GrammarEntryCategory.ADVERSATIVE_NEGATIVE,
    newWords: [
      { kanji: "正直な", kana: "しょうじきな", english: "honest" },
      { kanji: "絶対に", kana: "ぜったいに", english: "absolutely" },
    ],
  },
  // SECTION 5 - GRAMMAR 34 - 47 //TODO: Implement examples and explanations for chapter 5
  {
    id: 34,
    grammar: "〜くらい",
    imi: "〜と同じ程度だ",
    explanation: `It expresses degree or extent — how strong, intense, or extreme something is.\n“to the extent that…” ・ “so much that…” ・ “so … that …”\nExpressing degree / extent — “to the point that …”・Shows how strong or extreme something is.\nOften used in emotional, physical, or exaggerated expressions.`,
    usage: {
      form: [{name: "普通形"}, {name: "ナ形容詞", connector: "な"}],
      pattern: ["くらい", "ぐらい"],
    },
    examples: [ 
      {
        sentence: "口から心臓が飛び出そうなくらい緊張してるよ。",
        meaning: "I’m so nervous that my heart feels like it’ll jump out of my mouth.",
        point: "「飛び出そうなくらい」 = “to the extent that it might jump out”・Used for strong emotions or sensations.",
      },
      {
        sentence: "出発する前に、痛いくらいしっかりと抱き合った。",
        meaning: "Before departing, we hugged each other tightly to the point of pain.",
        point: "Describes how strong the hug was.",
      },
      {
        sentence: "おもしろいテレビをみて、涙が出るぐらい笑った。",
        meaning: "I laughed so hard that tears came out watching a funny TV show.",
        point: "Expresses a strong degree of laughter.",
      },
      {
        sentence: "彼女は部屋にいるだけで、みんなが笑顔になるくらい明るい人だ。",
        meaning: "She’s such a cheerful person that just being in the room makes everyone smile.",
        point: "Emphasizes her positive energy.",
      },
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "程度", kana: "ていど", english: "degree・extent" },
      { kanji: "心臓", kana: "しんぞう", english: "heart" },
      { kanji: "緊張", kana: "きんちょう", english: "nervousness" },
      { kanji: "飛び出す", kana: "とびだす", english: "to jump out" },
      { kanji: "出発", kana: "しゅっぱつ", english: "departure" },
      { kanji: "抱き合う", kana: "だきあう", english: "to hug each other" },
      { kanji: "涙", kana: "なみだ", english: "tears" },
    ],
    extraInfo: `くらい can also mean “about” when talking about quantities: 1時間くらい待った = I waited about an hour.\n(same word, different usage — "approximation" vs "degree")`,
  },
  {
    id: 35,
    grammar: "〜ほど",
    imi: "〜と同じ程度だ",
    explanation: "It expresses degree or extent — how strong, intense, or extreme something is.\nSame as 〜くらい, but slightly more formal/written and less subjective/emotional",
    usage: {
      form: [{name: "普通形"}, {name: "ナ形容詞", connector: "な"}],
      pattern: ["ほど"],
    },
    examples: [
      {
        sentence: "涙が出るほど辛いんだね。",
        meaning: "It's so spicy that tears come out.",
      },
      {
        sentence: "父は、一人では持ちきれないほど沢山のお土産を持って帰ってきた。",
        meaning: "My father brought back so many souvenirs that he couldn't carry them all by himself.",
      },
      {
        sentence: "会場には、びっくりするほど人が集まった。",
        meaning: "So many people gathered at the venue that it was surprising.",
      },
      {
        sentence: "昨日の夜は、電話で友達と死ぬほど笑った。",
        meaning: "I laughed so hard on the phone with my friend last night that I thought I might die.",
      },
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "お土産", kana: "おみやげ", english: "souvenir" },
      { kanji: "会場", kana: "かいじょう", english: "venue" },
    ],
    extraInfo: `Unlike くらい, ほど cannot also mean “about” when talking about quantities.\n ほど is often also used in comparisons: 彼は私ほど背が高くない = He is not as tall as I am ・ 彼ほど親切な人はいない = There is no one as kind as him.\n死ぬほど... is very often used in conversation.`,
  },
  {
    id: 36,
    grammar: "〜だらけ",
    imi: "〜がたくさんある\n〜がたくさんついている",
    explanation: "悪いことや汚いものがたくさんある様子を表す。\nIndicates that something is full of or covered with undesirable or dirty things.",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["だらけ"],
    },
    examples: [
      {
        sentence: "A: この部屋、なんか少し臭くない？\nB: そうかなー。ここが僕の部屋だよ。\nA: —うわっ！ ゴミだらけじゃん！掃除してよー！",
        meaning: "A: Doesn't this room smell a bit? \nB: I wonder... This is my room. \nA: —Whoa! It's full of garbage! Clean it up!",
      },
      {
        sentence: "仕事からの帰り道、傷だらけの猫を拾った。",
        meaning: "On my way home from work, I found a cat covered in scratches.",
      },
      {
        sentence: "埃だらけの箱から、懐かしい写真が沢山出てきた。",
        meaning: "From the dusty box, many nostalgic photos came out.",
      },
      {
        sentence: "庭に植えていた植物の葉っぱが虫に食べられて、穴だらけになっていた。",
        meaning: "The leaves of the plants I had planted in the garden were eaten by insects and were full of holes.",
      },
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "臭い", kana: "くさい", english: "smelly・stinky" },
      { kanji: "傷", kana: "きず", english: "scratch" },
      { kanji: "埃", kana: "ほこり", english: "dust" },
      { kanji: "庭", kana: "にわ", english: "garden" },
      { kanji: "植える", kana: "うえる", english: "to plant" },
      { kanji: "植物", kana: "しょくぶつ", english: "plant" },
      { kanji: "葉っぱ", kana: "はっぱ", english: "leaf" },
    ],
    extraInfo: "だらけ is often used in casual conversation.\n失敗だらけ = full of mistakes・covered in mistakes・血だらけ = covered in blood・ゴミだらけ = full of garbage・埃だらけ = covered in dust",
  },
  {
    id: 37,
    grammar: "〜やすい",
    imi: "簡単に 〜 できる",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["やすい"],
    },
    examples: [
      { sentence: "私の高校は、駅の目の前にあるので通いやすい。" },
      { sentence: "村上先生の授業はわかりやすくて、楽しく勉強することができる。" },
      { sentence: "彼女が書く文字は大きくてきれいなので、とても読みやすい。" },
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
  },
  {
    id: 38,
    grammar: "〜はず",
    imi: "絶対に 〜 だ",
    usage: {
      form: [{name: "普通形"}, {name: "ナ形容詞", connector: "な"}, {name: "名詞", connector: "の"}],
      pattern: ["はず"],
      combinedForms: [{ first: "(名詞・ナ形容詞) である", pattern: "はず" }],
    },
    examples: [
      {
        sentence: "プリンどこいったんだろう？あそこにあるはずなんだけど。。。",
      },
      {
        sentence: "友達みんなで行く旅行なんて、絶対に楽しいはずだ。",
        meaning: "A trip with all my friends is definitely going to be fun.",
      },
      {
        sentence: "しっかり勉強をしたので、今回の試験では満点を取れたはずだ。",
        meaning: "Since I studied hard, I should have been able to get a perfect score on this exam.",
      },
      {
        sentence: "確か、文房具はこの棚に置いてあったはずだ。",
        meaning: "I'm sure the stationery was on this shelf.",
      },
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "しっかり", kana: "しっかり", english: "firmly" },
      { kanji: "満点", kana: "まんてん", english: "perfect score" },
      { kanji: "確か", kana: "たしか", english: "sure" },
      { kanji: "文房具", kana: "ぶんぼうぐ", english: "stationery" },
      { kanji: "棚", kana: "たな", english: "shelf" },
    ],
    extraInfo: "stationery (writing and office supplies such as pens, pencils, notebooks, erasers, rulers, scissors, etc.)",
  },
  {
    id: 39,
    grammar: "〜ずにはいられない",
    imi: "どうしても 〜 してしまう",
    explanation: "それをしない状態ではいることができないつまり、どうしてもそれをしてしまうという意味です。\n This grammar pattern expresses an irresistible urge to do something.",
    usage: {
      form: [{name: "V. ない STEM"}],
      pattern: ["ずにはいられない"],
    },
    examples: [
      {
        sentence: "驚かずにはいられない。",
        meaning: "I can't help but be surprised.",
        point: "どうしても驚いてしまう。・絶対に驚いてしまう。",
      },
      {
        sentence: "気にせずにはいられない。",
        point: "どうしても気にしてしまう。・絶対に気にしてしまう。",
      },
      {
        sentence: "好きな作家の本が発売されると、買わずにはいられない。",
        meaning: "I can't help but buy the book of my favorite author when it's released.",
      },
      {
        sentence: "頑張っている人を見ると、応援せずにはいられない。",
        meaning: "I can't help but cheer for people who are working hard.",
      },
      {
        sentence: "暑くなってくると、夏の歌を聴かずにはいられない。",
        meaning: "I can't help but listen to summer songs when it gets hot.",
      },
      {
        sentence: "もう叫ばずにはいられないよ！",
        meaning: "I can't help but shout!",
      }
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "状態", kana: "じょうたい", english: "state・condition" },
      { kanji: "応援", kana: "おうえん", english: "cheering・support" },
      { kanji: "聴く", kana: "きく", english: "to listen" },
    ],
  },
  {
    id: 40,
    grammar: "〜くらい 〜 はない",
    imi: "〜がいちばん 〜 だ",
    explanation: "これくらい同じ程度同じレベルのこういうものはないと言いたいときに使います。\nつまり同じレベルのものがないですから これが一番だという意味になります。\nThis pattern is used to express that there is nothing of the same level or degree as the mentioned thing, indicating that it is the best or most extreme.",
    usage: {
      form: [{name: "名詞 1"}],
      pattern: ["くらい", "ぐらい"],
      secondsForm: [{name: "名詞 2", connector: "はない"}],
    },
    examples: [
      {
        sentence: "日本語の勉強くらい楽しいことはないと思っています。",
        meaning: "I don't think there's anything as fun as studying Japanese.",
      },
      {
        sentence: "村上さんぐらいきれいな女性はどこを探してもいないだろう。",
        meaning: "There's no one as beautiful as Ms. Murakami.",
      },
      {
        sentence: "あの店くらいおいしいカレー屋さんは他にありません。",
        meaning: "There's no curry shop as delicious as that one.",
      },
      {
        sentence: "日本語の森くらい素晴らしいサービスはないなぁ。",
        meaning: "There's no service as wonderful as Nihongo no Mori."
      },
      {
        sentence: "彼ぐらい頭がいい人はいないい。",
        meaning: "There's no one as smart as him."
      }
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "素晴らしい", kana: "すばらしい", english: "wonderful" },
    ],
  },
  {
    id: 41,
    grammar: "〜まで",
    imi: "〜も",
    explanation: "たくさんある、充分だということを強調して言う。\nこんなにたくさんあるとか十分あるということを強く言いたいときに使う文法です。\nThis grammar pattern is used to strongly express that there is a lot of something or that something is sufficient.",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["まで"],
    },
    examples: [
      {
        sentence: "料理が上手な彼女は、ケーキまで作ることができる。",
        meaning: "She is so good at cooking that she can even make cakes.",
      },
      {
        sentence: "日本語能力試験では、見て解く問題だけではなく聞いて解く問題まである。",
        meaning: "In the JLPT, there are not only questions to be solved by reading but also questions to be solved by listening.",
      },
      {
        sentence: "このレストランは料理がとてもおいしい。そのうえ、値段まで安い。",
        meaning: "This restaurant's food is very delicious, and on top of that, the prices are reasonable.",
      },
      {
        sentence: "こんな難しい漢字まで書けるんだよ！",
        meaning: "He can even write such difficult kanji!",
      }
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "日本語能力試験", kana: "にほんごのうりょくしけん", english: "Japanese Language Proficiency Test" },
      { kanji: "値段", kana: "ねだん", english: "price" },
      { kanji: "難しい", kana: "むずかしい", english: "difficult" },
    ],
  },
  {
    id: 42,
    grammar: "〜ほど 〜 はない",
    imi: "〜がいちばん 〜 だ",
    explanation: "Same as 〜くらい〜はない\nこれくらい同じ程度同じレベルのこういうものはないと言いたいときに使います。\nつまり同じレベルのものがないですから これが一番だという意味になります。\nThis pattern is used to express that there is nothing of the same level or degree as the mentioned thing, indicating that it is the best or most extreme.",
    usage: {
      form: [{name: "名詞 1"}],
      pattern: ["ほど"],
      secondsForm: [{name: "名詞 2", connector: "はない"}],
    },
    examples: [
      {
        sentence: "彼女ほど絵が上手な人は、他にいません。",
        meaning: "There's no one as good at painting as her.",
      },
      {
        sentence: "日本では、富士山ほど高くて有名な山はない。",
        meaning: "There's no mountain as high and famous as Mount Fuji.",
      },
      {
        sentence: "ほど優しくて頼りになる人はいません。",
        meaning: "There's no one as kind and reliable as him.",
      },
      {
        sentence: "母の料理ほどおいしいものはない。",
        meaning: "There's nothing as delicious as my mother's cooking.",
      },
      {
        sentence: "りな先生ほどいい先生はいないなぁ。",
        meaning: "There's no one as good a teacher as Ms. Rina."
      },
      {
        sentence: "あなたほど自信満々な人もなかなかいないよね。",
        meaning: "There's no one as confident as you."
      }
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "富士山", kana: "ふじさん", english: "Mount Fuji" },
      { kanji: "頼り", kana: "たより", english: "reliance" },
      { kanji: "自信満々な", kana: "じしんまんまん", english: "confidence" },
      { kanji: "満々", kana: "まんまん", english: "full" },
    ],
  },
  {
    id: 43,
    grammar: "〜てしかたがない",
    imi: "とても 〜 だ",
    explanation: "気持ちを表す言葉と一緒に使ってとてもこう思うと自分の気持ちを強く言いたいときに使う文法です。\n自分がやりたいこととか 自分の気持ちを表す言葉と一緒に使ってその気持ちを強く言うときに使う文法です。\nThis grammar pattern is used to strongly express one's feelings when used together with words that express one's desires or feelings.",
    usage: {
      form: [{name: "普通形", connector: "テ"}, {name: "ナ形容詞", connector: "デ"}, {name: "イ形容詞", connector: "クテ"}, {name: "名詞", connector: "デ"}],
      pattern: ["しかたがない", "しょうがない"],
    },
    examples: [
      {
        sentence: "外国に住んでいると、ときどき家族に会いたくてしょうがなくなる。",
        meaning: "When you live abroad, sometimes you really miss your family.",
      },
      {
        sentence: "あんなかっこいい彼と付き合えるなんて、友達がうらやましくてしかたがない。",
        meaning: "I'm so envious of my friend for being able to date such a cool guy.",
      },
      {
        sentence: "いらいらしているときは、ビールが飲みたくてしかたがなくなる。",
        meaning: "When I'm irritated, I just want to drink beer so badly.",
      },
      {
        sentence: "ぼくも君に会いたくてしかたがないよ。",
        meaning: "I really want to see you too."
      },
      {
        sentence: "遊びたくてしかたがない。",
        point: "とっても遊びたい すごく遊びたいという気持ちを表しています。",
      },
      {
        sentence: "残念でしかたがない。",
        point: "とても残念だという気持ちを表しています。",
      },
      {
        sentence: "楽しくてしょうがない。",
        point: "とっても楽しい すごく楽しいという気持ちを表しています。",
      }
    ],
    category: GrammarEntryCategory.DEGREE_ENPHASIS_COMPARISON,
    newWords: [
      { kanji: "うらやましい", kana: "うらやましい", english: "envious" },
    ],
  },
  // SECTION 6 - GRAMMAR 48 - 53
  {
    id: 48,
    grammar: "〜がる",
    imi: "〜と感じているようだ。",
    explanation: "話し手が感じていることではなく、他の人の気持ちや感情を表す。\nThis is a way of saying that you look at other people and think they're feeling X.",
    usage: {
      form: [{name: "イ形容詞", connector: "drop い"}, {name: "ナ形容詞", connector: "drop な"}],
      pattern: ["がる"],
    },
    examples: [
      {
        sentence: "彼は私のことを怖がっているのか、目を合わせようともしない。",
        meaning: "He seems scared of me, he won't even look me in the eye.",
        point: "こわいと感じているようだという意味です",
      },
      {
        sentence: "すずきさんが会社を辞めると聞いて、なんな残念がっていたよ。",
        meaning: "When we heard that Mr. Suzuki was quitting the company, we felt very sorry.",
      },
      {
        sentence: "娘の誕生日は、前から欲しがっていた人形をプレゼントしてあげよう。",
        meaning: "For my daughter's birthday, I will give her the doll she has wanted for a long time.",
      },
    ],
    category: GrammarEntryCategory.IMAGINATION_PREDICTION,
    extraInfo: "他の人の様子を言うときに使う。",
    newWords: [
      { kanji: "怖い", kana: "こわい", english: "scary" },
    ],
  },
  {
    id: 49,
    grammar: "〜ようとする",
    imi: "〜を始める直前",
    explanation: "それをまだやっていないいいんだけど、それをやる直前という意味です。\nJust about to do something・On the verge of doing something",
    usage: {
      form: [{name: "V. よう"}],
      pattern: ["とする"],
    },
    examples: [
      {
        sentence: "4歳の息子は、ペットにえさをあげようとしている。",
        meaning: "My 4-year-old son is about to feed the pet.",
        point: "He is about to do it, but he hasn't done it yet.",
      },
      {
        sentence: "仕事が終わって早く帰ろうとしたが、部長に声をかけられてしまった。",
        meaning: "I finished work and was leaving early, but my boss called out to me.",
        point: "I was about to leave, but something stopped me."
      },
      {
        sentence: "学校から家に帰って、そのまま寝ようとした妹を起こした。",
        meaning: "I woke up my sister, who was about to go to sleep, right after coming home from school.",
        point: "She was about to do it, but I stopped her."
      },
    ],
    category: GrammarEntryCategory.IMAGINATION_PREDICTION,
    newWords: [
      { kanji: "直前", kana: "ちょくぜん", english: "just before" },
    ],
  },
  // Number 50 is そう part 1
  {
    id: 51,
    grammar: "〜そう ②",
    imi: "〜もう少しで～してしまう",
    explanation: "まだそれをしていないんだけど、もうちょっとでそうなると言いたいときに使う。",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["そう"],
    },
    examples: [
      {
        sentence: "転びそうだった。",
        meaning: "I almost fell down.",
        point: "まだ転んでいないんだけど、もう少しで転んでしまうところだった。",
      },
      {
        sentence: "携帯電話を見ながら歩いていたせいで、階段から落ちそうになった。",
        meaning: "I almost fell down the stairs because I was looking at my phone while walking.",
      },
      {
        sentence: "運転中に眠くなって、事故を起こしそうになったことがある。",
        meaning: "I almost had an accident because I became sleepy while driving.",
      },
      {
        sentence: "電車に乗っていた女性は、今にも泣きそうな顔をしていた。",
        meaning: "The woman on the train looked like she was about to cry.",
      },
    ],
    category: GrammarEntryCategory.IMAGINATION_PREDICTION,
    newWords: [
      { kanji: "階段", kana: "かいだん", english: "stairs" },
      { kanji: "事故", kana: "じこ", english: "accident" },
      { kanji: "女性", kana: "じょせい", english: "woman" },
    ],
  },
  {
    id: 52,
    grammar: "〜だろう",
    imi: "たぶん〜",
    explanation: "～だろうと言うときは「絶対にこうだ！」とは言えないとき。\n「たぶんこうじゃないかな」と自分が思っているときに使う文法です。\n this patter is used when you can't say for sure that it's like this, but you think it probably is.",
    usage: {
      form: [{name: "普通形"}, {name: "形容詞"}, {name: "名詞"}],
      pattern: ["だろう", "でしょう"],
    },
    examples: [
      {
        sentence: "薬を飲んでゆっくり休めば、すぐに熱は下がるだろう。",
        meaning: "If you take the medicine and rest, your fever will probably go down soon.",
      },
      {
        sentence: "道路が濡れているのは、夜中に雨が降ったからでしょう。",
        meaning: "The road is wet probably because it rained in the middle of the night.",
      },
      {
        sentence: "明日は雪が降るので、今日の夜はとても寒いだろう。",
        meaning: "It will probably be very cold tonight because it will snow tomorrow.",
      },
    ],
    category: GrammarEntryCategory.IMAGINATION_PREDICTION,
    newWords: [
      { kanji: "道路", kana: "どうろ", english: "road" },
      { kanji: "濡れる", kana: "ぬれる", english: "to get wet" },
      { kanji: "夜中", kana: "よなか", english: "middle of the night" },
    ],
    extraInfo: "たぶん ～ (だろう・でしょう) are often used together in the same sentence.",
  },
  {//TODO: Add example sentences
    id: 53,
    grammar: "〜みたい",
    imi: "～に見える・～だと思う",
    explanation: "意味①：これと同じように見えるというときに使う。\n意味②：何か物を見てこれを見えるというわけではなくて、その様子を見てこんな感じがするとか、こうだと思うと自分の考えたことを言うときに使う。",
    usage: {
      form: [{name: "普通形"}, {name: "形容詞"}, {name: "名詞"}],
      pattern: ["みたい"],
      combinedForms: [
        { first: "名詞 ＋ まるで", pattern: "みたい"},
      ]
    },
    examples: [
      {
        sentence: "xxxxxx",
        meaning: "xxxxxx",
      },
      {
        sentence: "xxxxxx",
        meaning: "xxxxxx",
      },
      {
        sentence: "xxxxxx",
        meaning: "xxxxxx",
      },
    ],
    category: GrammarEntryCategory.IMAGINATION_PREDICTION,
  },
  // SECTION 7 - GRAMMAR 54 - 64
  {
    id: 54,
    grammar: "〜にあたって",
    imi: "〜をするとき",
    explanation: "何かをする時に別のことを同時にしないといけないとか、することになっていると言いたいときに使う。\nIt's used when you want to say that you have to or are supposed to do something else at the same time as you're doing something.",
    usage: {
      form: [{name: "V. る"}, {name: "名詞"}],
      pattern: ["にあたって", "にあたり"],
    },
    examples: [
      {
        sentence: "結婚にあたり引っ越しをした。",
        meaning: "I got married and moved.",
      },
      {
        sentence: "大学を卒業して就職するにあたり東京へ引っ越すことになった。",
        meaning: "I graduated from university and had to move to Tokyo for my job.",
      },
      {
        sentence: "新しい作品の完成にめたって、お祝いのパーティーが開かれた。",
      },
      {
        sentence: "大学受験にあたって、様々な種類の本を買った。",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "就職", kana: "しゅうしょく", english: "Job hunting・Finding a job" },
      { kanji: "作品", kana: "さくひん", english: "Work・Piece of work" },
      { kanji: "完成", kana: "かんせい", english: "Completion" },
      { kanji: "受験", kana: "じゅけん", english: "Examination・Test" },
      { kanji: "様々", kana: "さまざま", english: "Various" },
      { kanji: "種類", kana: "しゅるい", english: "Variety・Kind" },
    ],
  },
  {
    id: 55,
    grammar: "〜際",
    imi: "～とき",
    explanation: "It has the same meaning as ～とき, but is a more formal expression often used in written language or speeches (In front of many people).\n When being very polite, we use お + verb ます stem + の際に/の際は.",
    usage: {
      form: [{name: "V. た"}, {name: "V. る"}, {name: "(お) V. ます STEM", connector: "の"}, {name: "名詞", connector: "の"}],
      pattern: ["際 (に・ は・には)"],
    },
    examples: [
      {
        sentence: "間違えた際はもう一度書き直してください。",
        meaning: "If you make a mistake, please rewrite it once more.",
      },
      {
        sentence: "お帰りの際にお持ち帰りください。",
        meaning: "Please take it home when you return.",
      },
      {
        sentence: "買い物をする際は、商品にきずや汚れがないか十分に確認することが大切です。",
        meaning: "When shopping, it's important to thoroughly check for scratches or dirt on the product.",
      },
      {
        sentence: "階段を降りる際は、足元にお気をつけください。",
        meaning: "Please be careful of your feet when going down the stairs.",
      },
      {
        sentence: "お帰りの際は忘れ物にご注意ください。",
        meaning: "Please be careful not to forget anything when you return.",
      },
      {
        sentence: "お降りの際はバスが完全に止まってから席をお立ちください。",
        meaning: "Please wait until the bus has completely stopped before getting up from your seat.",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "緊急", kana: "きんきゅう", english: "Emergency" },
      { kanji: "確認", kana: "かくにん", english: "Confirmation・Verification" },
      { kanji: "階段", kana: "かいだん", english: "Stairs" },
      { kanji: "降りる", kana: "おりる", english: "To descend" },
      { kanji: "完全", kana: "かんぜん", english: "Complete・Perfect" },
    ],
    extraInfo: "緊急の際は = In case of emergency\nご来店の際は = When you visit the store\nその時 and その際 can be used interchangeably, but その際 is more formal・polite.",
  },
  {
    id: 56,
    grammar: "〜ところに",
    imi: "ちょうど ～ のときに",
    explanation: "「ところ」 means 'at the time' or 'just when'. This grammar pattern indicates that something happened at just the right time.",
    usage: {
      form: [{name: "V. る"}, {name: "V. た"}, {name: "V. ている"}],
      pattern: ["ところに", "ところへ"],
    },
    examples: [
      {
        sentence: "ゆうか先生の話をしているところにうか先生がやってきた。",
        meaning: "Just when we were talking about Teacher Yuka, Teacher Uka came in.",
      },
      {
        sentence: "完成したところに先生が見にきた。",
        meaning: "Just when I finished, the teacher came to see.",
      },
      {
        sentence: "ケーキが焼けたところへ、ちょうど子供たちが学校から帰ってきた。",
        meaning: "Just when the cake was baked, the children came home from school.",
      },
      {
        sentence: "電話をしようと思っていたところに、彼から電話がかかってきた。",
        meaning: "Just when I was about to make a phone call, I received a call from him.",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "完成", kana: "かんせい", english: "Completion" },
      { kanji: "渡す", kana: "わたす", english: "To hand over" },
    ],
    extraInfo: "~ちょうど is usually placed before ところに/へ to emphasize the timing.\nちょうどいいところに来たね。君にお土産を渡そうと思っていたんだ。 = You came at just the right time. I was thinking of giving you a souvenir.\nWe use ちょうどいいところ when something has happened that you wish would've happened now.",
  },
  {
    id: 57,
    grammar: "〜に先立って",
    imi: "～の前に",
    explanation: "This grammar pattern is used to indicate that one event occurs before another event (Preparing something or doing something before doing something else).",
    usage: {
      form: [{name: "V. る"}, {name: "名詞"}],
      pattern: ["に先立って", "に先立ち"],
      combinedForms: [{ first: "名詞 1", pattern: " に先立つ", second: "名詞 2"}],
    },
    examples: [
      {
        sentence: "授業開始に先立つ説明する。",
        meaning: "To explain prior to the start of the class.",
        point: "始まる前にやる説明。",
      },
      {
        sentence: "試験開始に先立って、みなさんにいくつか注意点をお伝えします。",
        meaning: "Before the exam starts, I would like to share a few points with you.",
        point: "試験が始まる前に",
      },
      {
        sentence: "オリンピックを行うに先立って、会場や選手の宿泊先を用意する。",
        meaning: "Prior to holding the Olympics, we will prepare the venues and accommodations for the athletes.",
        point: "オリンピックをする前に",
      },
      {
        sentence: "コンサートに先立ち、お客さまの案内を始めた。",
        meaning: "Prior to the concert, we started guiding the guests.",
        point: "コンサートをする前に",
      },
      {
        sentence: "来月から本が発売されます。発売に先立ってオンライン注文を始めます。", 
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "に先立って", kana: "にさきだって", english: "Prior to" },
      { kanji: "開始", kana: "かいし", english: "Start" },
      { kanji: "注意点", kana: "ちゅういてん", english: "Points to note" },
      { kanji: "選手", kana: "せんしゅ", english: "Athlete" },
      { kanji: "宿泊先", kana: "しゅくはくさき", english: "Accommodation" },
      { kanji: "発売", kana: "はつばい", english: "Release" },
    ],
  },
  {
    id: 58,
    grammar: "～ばかり②",
    imi: "さっき〜した",
    explanation: "それをしてからあまり時間が経っていないことを表す。",
    usage: {
      form: [{name: "V. た"}],
      pattern: ["ばかり"],
    },
    examples: [
      {
        sentence: "買ったばかりの車に傷がついてしまって、とても悲しい。",
        meaning: "I'm very sad because my newly bought car got scratched.",
      },
      {
        sentence: "今までずっと家族と暮らしていたので、一人暮らしを始めたばかりのころ大変だった。",
      },
      {
        sentence: "まだ外に出て歩き始めたばかりなのに、息子は「帰りたい」と言って泣き出した。",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "傷", kana: "きず", english: "Scratch・Injury" },
    ],
  },
  {
    id: 59,
    grammar: "〜たところ",
    imi: "さっき ～ が終わった",
    explanation: "それをしてからあまり時間が経っていない\nThis grammar pattern is used to indicate that something has just finished.",
    usage: {
      form: [{name: "V. た"}],
      pattern: ["たところ"],
    },
    examples: [
      {
        sentence: "アイスクリームはありますか。\nすみません、ついさっき売り切れたところなんです。",
        meaning: "I'm sorry, but we just ran out of ice cream.",
      },
      {
        sentence: "中本さんなら、さっき家に帰ったところですよ。",
        meaning: "If it's Nakamoto-san, he just got home a little while ago.",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    extraInfo: "The pairs さっき ～ たところ and ちょうど～たところ are very often used together to emphasize that something just happened a short time ago.\nThe difference between 〜ところ and 〜ばかり is that with ところ the action really just ocurred, like 5 or 10 minutes ago, while with ばかり could be 10 minutes, 1 houre, even 1 week or month, it depends on the speaker's perpective.",
  },
  {
    id: 60,
    grammar: "〜たびに",
    imi: "～するとき、いつも",
    usage: {
      form: [{name: "V. る"}, {name: "名詞", connector: "の"}],
      pattern: ["たびに"],
    },
    explanation: "これをするときにいつも同じことが起きるとか、同じことをしてしまうと言いたいときに使う。\n This grammar pattern is used to indicate that the same thing always happens or that you end up doing the same thing when you do this.",
    examples: [
      {
        sentence: "ここに来るたびに昔のにとを思い出す。",
        meaning: "Every time I come here, I remember my old friends.",
        point: "It always happens when I come here.",
      },
      {
        sentence: "帰国のたびに家族に会っています。",
        meaning: "Every time I return to my country, I meet my family.",
        point: "I always do that when I return to my country.",
      },
      {
        sentence: "会うたびに好きになる。",
        meaning: "Every time I meet you, I fall in love.・I like you more and more every time I meet you.",
      },
      {
        sentence: "君は11時半になるたびにお腹がなるなぁ。",
        meaning: "Every time it becomes 11:30, your stomach growls (you get hungry).",
      },
      {
        sentence: "山本さんは、会うたびに髪の毛の色が変わっている。",
        meaning: "Every time I meet Yamamoto-san, his hair color changes.",
      },
      {
        sentence: "冬が来るたびに、カナダで過ごした一年間を思い出す。",
        meaning: "Every time winter comes, I remember the year I spent in Canada.",
      },
      {
        sentence: "となりに住んでいる男の子は、見るたびに背が高くなっている。",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "帰国", kana: "きこく", english: "Return to one's country" },
    ],
  },
  {
    id: 61,
    grammar: "〜おきに",
    imi: "決まっている数・時間で 〜 する",
    explanation: "This grammar pattern indicates something like a fixed number or a fixed time at which something is done",
    usage: {
      form: [{name: "数"}],
      pattern: ["おきに"],
    },
    examples: [
      {
        sentence: "20分おきに水を飲む。",
        meaning: "Drink water every 20 minutes.",
      },
      {
        sentence: "5分おきに目覚まし時計が鳴るように、セットしてから寝る。",
        meaning: "I set the alarm clock to go off every 5 minutes before going to bed.",
      },
      {
        sentence: "一日おきにトレーニングをする習慣がある。",
        meaning: "I have a habit of training every other day.",
      },
      {
        sentence: "このデパートは、50メートルおきにゴミ箱がおいてある。",
        meaning: "This department store has trash cans placed every 50 meters.",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "数", kana: "かず", english: "Number" },
      { kanji: "鳴る", kana: "なる", english: "To ring" },
      { kanji: "習慣", kana: "しゅうかん", english: "Habit" },
    ],
    extraInfo: "The part before おきに is usually a number indicating the interval (e.g., 3日おきに = every 3 days・2時間おきに = every 2 hours・50個おきに = every 50 items).",
  },
  {
    id: 62,
    grammar: "〜ごとに",
    imi: "～のときは、いつも…",
    usage: {
      form: [{name: "V. る"}, {name: "名詞"}, {name: "数"}],
      pattern: ["ごとに"],
    },
    examples: [
      {
        sentence: "チームごとに目標を決める。",
        meaning: "Set goals for each team.",
        point: "それぞれ",
      },
      {
        sentence: "半年ごとにくつ下を買います。",
        meaning: "I buy socks every six months.",
        point: "I always do that every six months. (それぞれ)",
      },
      {
        sentence: "3つ買うごとに1つプレゼントです。",
        meaning: "You get one free gift for every three items you buy.",
      },
      {
        sentence: "３ヶ月ごとに、定期券を買うことにしている。",
        meaning: "I've decided to buy a commuter pass every three months.",
        point: "それぞれ",
      },
      {
        sentence: "クラスごとに曲を決めて、歌を発表することになっている。",
        meaning: "Each class is supposed to decide on a song and present it.",
        point: "それぞれ",
      },
      {
        sentence: "このカードは、買うごとに10円で1ポイント貯まるのでとてもお得だ。",
        meaning: "This card is very advantageous because you earn 1 point for every 10 yen you spend.",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "目標", kana: "もくひょう", english: "Goal" },
      { kanji: "定期券", kana: "ていきけん", english: "Commuter pass" },
      { kanji: "貯まる", kana: "たまる", english: "To accumulate" },
      { kanji: "得", kana: "とく", english: "Advantageous・great deal" },
    ],
    extraInfo: "When preceded by a noun, ごとに means 'each' or 'every'.\nWhen preceded by a verb, it means 'every time' or 'whenever'.",
  },
  {
    id: 63,
    grammar: "〜間",
    imi: "~の時間に (時間と時間の間)",
    usage: {
      form: [{name: "V. る"}, {name: "V. ている"}, {name: "V. ない"}, {name: "名詞", connector: "の"}],
      pattern: ["間 (に)"],
    },
    examples: [
      {
        sentence: "夜の間ずっと寝ています。",
        meaning: "I am sleeping throughout the entire night.",
      },
      {
        sentence: "話している間電話がかかってきた。",
        meaning: "While we were talking, the phone rang.",
      },
      {
        sentence: "見ない間に大きくなったね。",
        meaning: "You've grown up while I wasn't seeing you.",
      },
      {
        sentence: "赤ちゃんはたった1年の間に、たくさんのことができるようになる。",
        meaning: "In just one year, babies become capable of many things.",
      },
      {
        sentence: "会社の人と電話で話している間、息子は大きな声で泣き続けていた。",
        meaning: "While I was talking on the phone with someone from work, my son kept crying loudly.",
      },
      {
        sentence: "私たちが寝ている間に、ずっと働いている人たちもいる。",
        meaning: "There are people who keep working while we are sleeping.",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "たった", kana: "たった", english: "Just・Only" },
    ],
  },
  {
    id: 64,
    grammar: "〜うちに",
    imi: "～間に",
    explanation: "決まった時間と時間のその中で何かをする。\n何かが終わる前です。そのうちに何かをする。\nThis grammar is similar to 〜間に, but is used for timeframes (To do something in that specific timeframe).",
    usage: {
      form: [{name: "普通形"}, {name: "名詞", connector: "の"}, {name: "ナ形容詞", connector: "な"}],
      pattern: ["うちに"],
    },
    examples: [
      {
        sentence: "温かいうちに食べてください。",
        meaning: "Please eat it while it's warm.",
      },
      {
        sentence: "学生のうちに旅行をたくさんしたい。",
        meaning: "I want to travel a lot while I'm still a student.",
      },
      {
        sentence: "雨が降らないうちに帰るう。",
        meaning: "I will go home before it starts raining.",
      },
      {
        sentence: "妻が帰ってこないうちに、家の掃除をして夜ご飯も作っておこう。",
        meaning: "Before my wife comes home, I'll clean the house and make dinner.",
      },
      {
        sentence: "新鮮なうちに魚を食べよう。",
        meaning: "Let's eat the fish while it's fresh.",
      },
      {
        sentence: "明日はディズニーランドに行く日だ。朝早いし、今のうちに準備しておこう。",
        meaning: "Tomorrow is the day we go to Disneyland. It's early in the morning, so let's get ready now.",
      },
    ],
    category: GrammarEntryCategory.POINT_IN_TIME,
    newWords: [
      { kanji: "新鮮な", kana: "しんせんな", english: "Fresh" },
    ],
    extraInfo: "V.た は使えない\n今のうちに (now, at the present time) is very often used in daily conversations.",
  },
  // SECTION 8 - GRAMMAR 65 - 70
  {
    id: 65,
    grammar: "たとえ 〜 ても",
    imi: "もし～でも、変わらない",
    explanation: "もしこうなったとしても私の気持は変わりませんとか、私のやることは変わりませんと言いたいときに使う文法です。\nThis grammar pattern is used when you want to say that even if something happens, your feelings or actions will not change.",
    usage: {
      form: [{name: "V. て"}, {name: "イ形容詞 くて"}, {name: "ナ形容詞 で"}, {name: "名詞 で"}],
      pattern: ["たとえ 〜 ても"],
    },
    examples: [
      {
        sentence: "たとえ有名じゃなくても幸せだ。",
        meaning: "Even if I'm not famous, I'm happy.",
      },
      {
        sentence: "たとえ難しくても、もって勉強して東京大学に行くつもりだ。",
        meaning: "Even if it's difficult, I'll study harder and go to the University of Tokyo.",
      },
      {
        sentence: "たとえお金持ちじゃなくても、あなたのことが大好きです。",
        meaning: "Even you not being rich, I love you.",
      },
      {
        sentence: "たとえみんなに反対されても、私は絶対に日本へ行く。",
        meaning: "Even if everyone opposes me, I will definitely go to Japan.",
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
  },
  {
    id: 66,
    grammar: "〜ことにする",
    imi: "にすると決める",
    explanation: "自分が決めると言いたいときに使う文法です。\nThis grammar pattern is used when you want to say that you decide something for yourself.",
    usage: {
      form: [{name: "V. る"}, {name: "V. ない"}],
      pattern: ["ことにする"],
    },
    examples: [
      {
        sentence: "パーティーには行かないことにした。",
        meaning: "I decided not to go to the party.",
      },
      {
        sentence: "今日の昼ご飯は、コンビニで買うことにする。",
        meaning: "I decided to buy lunch at the convenience store.",
        point: "自分で決めた。",
      },
      {
        sentence: "ねつがある気がするので、病院に行ってみることにします。",
        meaning: "I think I have a fever, so I've decided to go to the hospital.",
      },
      {
        sentence: "息子がかぜをひいたので、学校を休ませることにした。",
        meaning: "I decided to let my son take a break from school because he caught a cold.",
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
  },
  {
    id: 67,
    grammar: "〜次第",
    imi: "～したら、すぐ...",
    explanation: "これましたらすぐにこれをすると言いたいときに使う。\nUsually used at work (formal), although it can be used in daily conversations too.",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["次第" ],
    },
    examples: [
      {
        sentence: "連絡が入り次第ご連絡します。",
        meaning: "We'll contact you as soon as I receive the contact information.",
      },
      {
        sentence: "確認が取れ次第出発します。",
        meaning: "We'll depart as soon as we receive confirmation.",
      },
      {
        sentence: "印刷が終わり次第、すぐに部長にご報告します。",
        meaning: "I'll report to the manager as soon as the printing is finished.",
      },
      {
        sentence: "迎えに行きますので、空港に着き次第、お電話ください。",
        meaning: "I'll go to pick you up, so please call me as soon as you arrive at the airport.",
      },
      {
        sentence: "まだ住事の予定がわからないから、わかり次第連絡するね。",
        meaning: "I don't know the schedule for the move yet, so I'll let you know as soon as I do.",
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "次第", kana: "しだい", english: "depending on" },
      { kanji: "確認", kana: "かくにん", english: "confirmation" },
      { kanji: "印刷", kana: "いんさつ", english: "printing" },
      { kanji: "報告", kana: "ほうこく", english: "report" },
      { kanji: "迎えに行く", kana: "むかえにいく", english: "to go to pick up" },
    ],
  },
  {
    id: 68,
    grammar: "〜としたら",
    imi: "～だと考えたら",
    explanation: "This grammar is used when you want to consider or imagine a hypothetical situation or condition, something that didn't actually happened.",
    usage: {
      form: [{name: "普通形"}],
      pattern: ["としたら", "とすると", "とすれば"],
    },
    examples: [
      {
        sentence: "彼がうそをついているとするときごく悪い人だ。",
        meaning: "If he is lying, he is a very bad person.",
      },
      {
        sentence: "このことが真実だとすれば大変なことになります。",
        meaning: "If this is true, it will be a big problem.",
      },
      {
        sentence: "北海道は広いので、観光地を全て回るとしたら一週間あっても足りないくらいですよ。",
        meaning: "Hokkaido is vast, so if you were to visit all the tourist spots, even a week wouldn't be enough.",
      },
      {
        sentence: "生まれ変われるとしたら、誰になりたい？",
        meaning: "If you could be reborn, who would you want to be?",
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "真実", kana: "しんじつ", english: "truth" },
      { kanji: "観光地", kana: "かんこうち", english: "tourist spot" },
    ],
  },
  {
    id: 69,
    grammar: "〜てからでないと",
    imi: "～が終わったあとでないと",
    explanation: "This grammar is used to express that something cannot happen until after a certain action is completed.",
    usage: {
      form: [{name: "V. て"}],
      pattern: ["からでないと", "からじゃないと", "からでなければ"],
    },
    examples: [
      {
        sentence: "会ってからじゃないといい人かどうかわからない。",
        meaning: "I can't tell if he's a good person until I meet him.",
      },
      {
        sentence: "寝てからでなければ勉強できません。",
        meaning: "I can't study unless I sleep first. (until I get some sleep)",
      },
      {
        sentence: "明日になってからじゃないと出てこないよ！",
      },
      {
        sentence: "詳しい話を聞いてからでないと答えられません。",
        meaning: "I can't answer until I hear the detailed story.",
      },
      {
        sentence: "書類を見てからでなければサインすることはできません。",
        meaning: "I can't sign until I see the documents.",
      },
      {
        sentence: "学校が終わってからでないと会いに行けません。",
        meaning: "I can't go see you until after school is over.",
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "書類", kana: "しょるい", english: "documents" },
    ],
    extraInfo: "からじゃないと is used in spoken language (Conversations).",
  },
  {
    id: 70,
    grammar: "〜によって②",
    imi: "それぞれ",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["によって"],
    },
    examples: [
      {
        sentence: "人によって違います。",
        meaning: "It differs/varies from person to person.",
      },
      {
        sentence: "国によってルールが違います。",
        meaning: "The rules differ/vary from country to country.",
      },
      {
        sentence: "時代によって人気のあるものは変わる。",
        meaning: "What is popular changes depending on the era.",
      },
      {
        sentence: "コーヒーは作られた場所によって味や香りが違るそうた。",
        meaning: "It seems that the taste and aroma of coffee differ depending on where it was produced.",
      },
      {
        sentence: "好きなものや嫌いなものは、人によって違う。",
        meaning: "Likes and dislikes differ from person to person.",
      },
      {
        sentence: "国によって言葉やルールが違うので、訪問する前に必ず勉強しなければならない。",
        meaning: "Since the language and rules differ from country to country, you must study them before visiting.",
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "香り", kana: "かおり", english: "aroma" },
      { kanji: "訪問", kana: "ほうもん", english: "visit" },
    ],
  },
  // SECTION 9 - GRAMMAR 71 - 77
  {
    id: 71,
    grammar: "〜ように ①",
    imi: "～するために工夫をする",
    explanation: "This grammar pattern is used to express that you make efforts or take measures in order to achieve a certain goal or outcome.",
    usage: {
      form: [{name: "V. る"}, {name: "V. ない"}, {name: "V. れる"}],
      pattern: ["ように"],
    },
    examples: [
      {
        sentence: "うまく作れるように練習する。",
        meaning: "I practice so that I can make it well.",
      },
      {
        sentence: "待ち合わせの時間に遅れないように、いつも早めに家を出る。",
        meaning: "I always leave home early so that I won't be late for appointments.",
      },
      {
        sentence: "父さんが仕事に集中できるように、家族で協力しようね。",
        meaning: "Let's cooperate as a family so that Dad can concentrate on his work.",
      },
      {
        sentence: "息子が学校に間に合うように、毎朝起こしている。",
        meaning: "I wake my son up every morning so that he can make it to school on time.",
      },
    ],
    category: GrammarEntryCategory.PURPOSE_METHOD_OPERATION,
    newWords: [
      { kanji: "工夫", kana: "くふう", english: "devise" },
      { kanji: "遅れる", kana: "おくれる", english: "to be late" },
      { kanji: "集中", kana: "しゅうちゅう", english: "concentration" },
      { kanji: "協力", kana: "きょうりょく", english: "cooperation" },
    ],
    extraInfo: "工夫 (くふう) means 'Creative way of doing something'・'Improvisation'・'Smart adjustment'・'Figure out a way'; It refers to putting effort into finding a good method, word around, or creative solution to do something.",
  },
  {
    id: 72,
    grammar: "〜には",
    imi: "～するためには",
    explanation: "This grammar pattern is used to express the necessary conditions or requirements for achieving a certain goal or outcome.",
    usage: {
      form: [{name: "V. る"}],
      pattern: ["には"],
    },
    examples: [
      {
        sentence: "この山を登るにはお金がかかります。",
        meaning: "It costs money to climb this mountain.",
      },
      {
        sentence: "予約するには電話をしないといけない。",
        meaning: "You have to call to make a reservation.",
      },
      {
        sentence: "免許証の申請をするには、顔写真が必要です。",
        meaning: "You need a photo for the driver's license application.",
      },
      {
        sentence: "会社へ行くには、この長い坂道を登らなければならない。",
        meaning: "To get to the company, you have to climb this long hill.",
      },
      {
        sentence: "この商品を買うには、インターネットで予約をしなければなりません。",
        meaning: "To buy this product, you must make a reservation on the Internet.",
      },
    ],
    category: GrammarEntryCategory.PURPOSE_METHOD_OPERATION,
    newWords: [
      { kanji: "免許証", kana: "めんきょしょう", english: "driver's license" },
      { kanji: "申請", kana: "しんせい", english: "application" },
      { kanji: "坂道", kana: "さかみち", english: "hill・Slope" },
    ],
  },
  {
    id: 73,
    grammar: "〜しかない",
    imi: "～以外の方法がない (これだけだ)",
    explanation: "This grammar pattern is used to express that there is no other option or method available except for the one mentioned.",
    usage: {
      form: [{name: "V. る"}],
      pattern: ["しかない"],
    },
    examples: [
      {
        sentence: "我慢するしかない。",
        meaning: "There's no choice but to endure.",
        point: "他の方法がない。",
      },
      {
        sentence: "こうなったら、諦めて他の方法を探すしかない。",
        meaning: "If this happens, I have no choice but to give up and look for another way.",
      },
      {
        sentence: "何回地図を見ても道がわからないので、誰かに聞くしかない。",
        meaning: "No matter how many times I look at the map, I can't find the way, so I have no choice but to ask someone.",
      },
      {
        sentence: "今から本気で勉強するしかない。",
        meaning: "I have no choice but to study seriously from now on.",
      },
    ],
    category: GrammarEntryCategory.PURPOSE_METHOD_OPERATION,
    newWords: [
      { kanji: "本気", kana: "ほんき", english: "seriousness" },
    ],
  },
  {
    id: 74,
    grammar: "〜ほかない",
    imi: "～以外の方法がない (これだけだ)",
    explanation: "Same as 〜しかない, but more formal.\nThis grammar pattern is used to express that there is no other option or method available except for the one mentioned.",
    usage: {
      form: [{name: "V. る"}],
      pattern: ["ほかない"],
    },
    examples: [
      {
        sentence: "注意するほかない。",
        meaning: "You have to be careful.",
      },
      {
        sentence: "スーパーまで来たのに財布を忘れてしまったので、何も買わず家に帰るほかなかった。",
        meaning: "I came all the way to the supermarket, but I forgot my wallet, so I had no choice but to go home without buying anything.",
      },
      {
        sentence: "けがで試合に出られなくて悔しいが、今は我慢するほかない。",
        meaning: "I'm frustrated that I can't participate in the match due to my injury, but for now, I have no choice but to endure.",
      },
      {
        sentence: "何度言ってもゲームをやめないなら、禁止するほかない。",
        meaning: "No matter how many times I tell you won't stop playing the game, I have no choice but to ban it.",
      },
    ],
    category: GrammarEntryCategory.PURPOSE_METHOD_OPERATION,
    newWords: [
      { kanji: "けが", kana: "けが", english: "injury" },
      { kanji: "悔しい", kana: "くやしい", english: "frustrating" },
      { kanji: "禁止", kana: "きんし", english: "prohibition・Restriction・Ban" },
    ],
    extraInfo: "ほかない is more formal than しかない and is often used in written language or formal speeches.\n In daily conversations, しかない is more commonly used.",
  },
  {
    id: 75,
    grammar: "〜によって③",
    imi: "～の方法で",
    explanation: "この方法を使って何かするって言いたときに使う。\nThis grammar pattern is used to indicate that something is done using a specific method or means.",
    usage: {
      form: [{name: "名詞"}],
      pattern: ["によって"],
    },
    examples: [
      {
        sentence: "インターネットによって買い物をすることができます。",
        meaning: "You can shop using the Internet.",
      },
      {
        sentence: "話し合いによって決めます。",
        meaning: "We will decide through discussion.",
      },
      {
        sentence: "この国は、法律によって守られています。",
        meaning: "This country is protected by law.",
      },
      {
        sentence: "わからない言葉は、辞書を使うことによって調べることができる。",
        meaning: "You can look up unfamiliar words using a dictionary.",
      },
      {
        sentence: "試験の合格発表は、メールによって連絡がくるそうだ。",
        meaning: "I heard that the results of the exam will be communicated via email.",
        point: "メールという方法でって意味だ。",
      },
      {
        sentence: "次の部長は、会議によって決定いたします。",
        meaning: "The next department head will be decided through a meeting.",
      },
    ],
    category: GrammarEntryCategory.PURPOSE_METHOD_OPERATION,
    newWords: [
      { kanji: "法律", kana: "ほうりつ", english: "law" },
      { kanji: "辞書", kana: "じしょ", english: "dictionary" },
      { kanji: "合格発表", kana: "ごうかくはっぴょう", english: "announcement of exam results" },
      { kanji: "決定", kana: "けってい", english: "decision" },
    ],
  },
  {
    id: 76,
    grammar: "〜なおす",
    imi: "もう一度 ～ する",
    explanation: "This grammar pattern is used to indicate that an action is being done again or corrected.",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["なおす"],
    },
    examples: [
      {
        sentence: "パソコンの故障で、昨日の仕事を全部やりなおすことになった。",
        meaning: "Due to the computer malfunction, I had to redo all the work from yesterday.",
      },
      {
        sentence: "パスポートを無くしてしまったので、作りなおすことにした。",
        meaning: "I lost my passport, so I decided to remake it.",
      },
      {
        sentence: "納得がいくまで、何度も書きなおそう。",
        meaning: "Let's rewrite it as many times as necessary until we are satisfied.",
      },
      {
        sentence: "宿題やりなおしだ。",
        meaning: "I have to redo my homework.",
      },
    ],
    category: GrammarEntryCategory.PURPOSE_METHOD_OPERATION,
    newWords: [
      { kanji: "故障", kana: "こしょう", english: "malfunction" },
      { kanji: "無くす", kana: "なくす", english: "to lose" },
      { kanji: "納得", kana: "なっとく", english: "convincing・satisfaction" },
      { kanji: "宿題", kana: "しゅくだい", english: "homework" },
    ],
  },
  {
    id: 77,
    grammar: "〜始める",
    imi: "~するのを始める",
    usage: {
      form: [{name: "V. ます STEM"}],
      pattern: ["始める"],
    },
    examples: [
      {
        sentence: "いずみさんが歌い始めると同時に、みんな踊り出した。",
        meaning: "As soon as Izumi started singing, everyone began to dance.",
      },
      {
        sentence: "今日は晴れると聞いていたのに、急に雨が降り始めた。",
        meaning: "I heard it would be sunny today, but it suddenly started to rain.",
      },
      {
        sentence: "彼は飛行機に乗ってすぐに寝始めた。",
        meaning: "He fell asleep as soon as he got on the plane.",
      },
    ],
    category: GrammarEntryCategory.PURPOSE_METHOD_OPERATION,
    newWords: [
      { kanji: "急", kana: "きゅう", english: "sudden・urgent" },
      { kanji: "急に", kana: "きゅうに", english: "suddenly" },
      { kanji: "飛行機", kana: "ひこうき", english: "airplane" },
    ],
  },
  // SECTION 10 - GRAMMAR 78 - 83
  {
    id: 78,
    grammar: "〜ことになっている",
    imi: "~することが決まっている",
    explanation: "約束・ルール・制度などを説明するときによく使う。\nThis grammar is often used to explain promises, rules, systems, etc.",
    usage: {
      form: [{name: "V. る"}, {name: "V. ない"}, {name: "名詞", connector: "という"}],
      pattern: ["ことになっている", "こととなっている"],
    },
    examples: [
      {
        sentence: "友達と家でゲームをすることになっている。",
        meaning: "It has been decided that I will play games at home with my friends.",
        point: "約束",
      },
      {
        sentence: "うちの会社は残業しないこととなっています。",
        meaning: "It has been decided that our company will not engage in overtime work.",
        point: "ルール",
      },
      {
        sentence: "3時に待ち合わせということになっている。",
        meaning: "It has been decided that we will meet at 3 o'clock.",
        point: "約束",
      },
      {
        sentence: "週末は、友達の家に泊まりに行くことになっている。",
        meaning: "It has been decided that I will go stay at my friend's house this weekend.",
        point: "約束",
      },
      {
        sentence: "日本では、19歳以下はお酒を飲めないこととなっている。",
        meaning: "It has been decided that people under 19 years old cannot drink alcohol in Japan.",
        point: "ルール",
      },
      {
        sentence: "来年はタイで仕事をすることになっている。",
        meaning: "It has been decided that I will work in Thailand next year.",
      },
    ],
    category: GrammarEntryCategory.RULES_ADVICE,
    newWords: [
      { kanji: "約束", kana: "やくそく", english: "promise" },
      { kanji: "制度", kana: "せいど", english: "system" },
      { kanji: "残業", kana: "ざんぎょう", english: "overtime work" },
      { kanji: "泊まる", kana: "とまる", english: "to stay overnight" },
    ],
  },
  {
    id: 79,
    grammar: "〜なくちゃ",
    imi: "～なくては",
    explanation: "～しなければならない (must do something)\nThis grammar is a casual way of expressing obligation or necessity, similar to ～なければならない.",
    usage: {
      form: [{name: "V. ない"}, {name: "イ形容詞 くない"}, {name: "ナ形容詞 じゃない"}, {name: "名詞 じゃない"}],
      pattern: ["(Drop last い) なくちゃ", "(Drop last い) なきゃ"],
    },
    examples: [
      {
        sentence: "勉強しなくちゃ！",
        meaning: "I have to study!",
      },
      {
        sentence: "今日勉強した単語は、忘れないように使わなくちゃ！",
        meaning: "I have to use the words I studied today so I don't forget them!",
      },
      {
        sentence: "寝坊した！急いでじゅんびしなきゃ。",
        meaning: "I overslept! I have to hurry and get ready.",
      },
    ],
    category: GrammarEntryCategory.RULES_ADVICE,
    extraInfo: "～なくては is a more formal version of ～なくちゃ, often used in written language or formal speeches.\nIt has the same meaning as ～なければならない (must do something).",
  },
  {
    id: 80,
    grammar: "〜ことはない",
    imi: "～する必要はない",
    explanation: "これはしなくてもいいだ。\nThis grammar pattern is used to express that there is no need to do something.",
    usage: {
      form: [{name: "V. る"}],
      pattern: ["ことはない"],
    },
    examples: [
      {
        sentence: "まだ時間があるから走ることはないですよ。",
        meaning: "There's still time, so there's no need to run.",
      },
      {
        sentence: "人参が嫌いなら、無理して食べることはないですよ。",
        meaning: "If you don't like carrots, there's no need to force yourself to eat them.",
      },
      {
        sentence: "何回でもチャンスはあるから、失敗しても諦めることはない。",
        meaning: "There will always be chances, so there's no need to give up even if you fail.",
      },
      {
        sentence: "出発時刻までまだ時間があるんだから、そんなに急ぐことはないよ。",
        meaning: "There's still time until the departure time, so there's no need to hurry.",
      },
    ],
    category: GrammarEntryCategory.RULES_ADVICE,
    newWords: [
      { kanji: "人参", kana: "にんじん", english: "carrot" },
      { kanji: "出発時刻", kana: "しゅっぱつじこく", english: "departure time" },
    ],
  },
  {
    id: 81,
    grammar: "〜べき",
    imi: "～した方がいい",
    explanation: "This grammar pattern is used to express that something should be done or is advisable.",
    usage: {
      form: [{name: "V. る"}],
      pattern: ["べき" ],
    },
    examples: [
      {
        sentence: "食べ物があることは当たり前ではないから、大切にすべきだ。",
        meaning: "Having food is not something to be taken for granted, so we should cherish it.",
      },
      {
        sentence: "夜遅い時間に、女の子が一人で歩くべきではないよ。",
        meaning: "Girls shouldn't walk alone late at night.",
      },
      {
        sentence: "やりたいことは、何でもやってみるべきだ。",
        meaning: "You should try doing anything you want.",
      },
    ],
    category: GrammarEntryCategory.RULES_ADVICE,
    newWords: [
      { kanji: "当たり前", kana: "あたりまえ", english: "taken for granted" },
      { kanji: "夜遅い", kana: "よるおそい", english: "late at night" },
    ],
    extraInfo: "する -> becomes するべき or is shortened to すべき",
  },
  {
    id: 82,
    grammar: "〜ように②",
    imi: "～しなさい",
    explanation: "This grammar pattern is used to give commands or instructions, often in a polite or indirect manner.\nするように → しなさい\nしないように → してはいけない",
    usage: {
      form: [{name: "V. る"}, {name: "V. ない"}],
      pattern: ["ように"],
    },
    examples: [
      {
        sentence: "明日早く来るように。",
        meaning: "Please come early tomorrow.",
        point: "明日早く来なさい。",
      },
      {
        sentence: "明日はピクニックに行くので、お弁当を持ってくるように。",
        meaning: "Since we're going on a picnic tomorrow, please bring a lunch box.",
      },
      {
        sentence: "ここは病院なので、大きな声を出さないように。",
        meaning: "Please don't speak loudly here, as this is a hospital.",
      },
      {
        sentence: "運動して汗まかいたら、必ず水を飲むように。",
        meaning: "If you exercise and sweat, make sure to drink water.",
      },
    ],
    category: GrammarEntryCategory.RULES_ADVICE,
    extraInfo: "In daily conversations 〜しなさい is most used instead of 〜ように for giving instructions or commands.",
  },
  {
    id: 83,
    grammar: "〜こと",
    imi: "～しなさい",
    explanation: "Same as 〜ように, but more formal.\nThis grammar pattern is used to give commands or instructions, often in a formal or official context.\nすること → しなさい\nしないこと → してはいけない",
    usage: {
      form: [{name: "V. る"}, {name: "V. ない"}],
      pattern: ["こと"],
    },
    examples: [
      {
        sentence: "静かにすること。",
        meaning: "Please be quiet.",
        point: "静かにしなさい。",
      },
      {
        sentence: "社長の部屋に入るときは、必ずドアをノックすること。",
        meaning: "When entering the president's office, be sure to knock on the door.",
      },
      {
        sentence: "学校の中では、走らないこと。危ないですよ。",
        meaning: "Don't run inside the school. It's dangerous.",
      },
      {
        sentence: "家へ帰ったら手洗い・うがいをすること。",
        meaning: "When you get home, be sure to wash your hands and gargle.",
      },
    ],
    category: GrammarEntryCategory.RULES_ADVICE,
    newWords: [
      { kanji: "静かな", kana: "しずかな", english: "quiet" },
      { kanji: "うがいをする", kana: "うがいをする", english: "to gargle" },
    ],
    extraInfo: "In daily conversations 〜しなさい is most used instead of 〜ように or 〜こと\nBut when comparing these 2, In daily conversations, 〜ように is more commonly used than 〜こと for giving instructions or commands.",
  },
  // SECTION 11 - GRAMMAR 84 - 89
  // SECTION 12 - GRAMMAR 90 - 100
  // SECTION 13 - GRAMMAR 101 - 110
]