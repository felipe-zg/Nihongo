export const GrammarEntryCategory = {
  REASON_CAUSE: '理由・原因',
  SITUATION_CHANGE: '状況・変化',
  POSITIONS_STANDARDS: '立場・基準',
  ADVERSATIVE_NEGATIVE: '逆接・否定',
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
      form: [{ name: "普通形"}, {name: "名詞", connector: "な"}, {name: "な形容詞", connector: "の"}],
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
  // SECTION 5 - GRAMMAR 34 - 47
  // SECTION 6 - GRAMMAR 48 - 53
]