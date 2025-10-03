export const GrammarEntryCategory = {
  REASON_CAUSE: '理由・原因',
  SITUATION_CHANGE: '状況・変化',
} as const;

export const NIHONGO_NO_MORI_GRAMMAR: GrammarEntry[] = [
  {
    id: 1,
    grammar: "〜せい",
    imi: "〜が原因で、悪い結果になった",
    explanation: "ズボンに穴があく。",
    usage: {
      form: [{ name: "普通形"}, {name: "名詞", connector: "の"}, {name: "な形容詞", connector: "な"}],
      pattern: ["〜せい (で・か・だ)"]
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
      pattern: ["〜おかげで (で・か・だ)"]
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
      pattern: ["〜もの", "〜もん", "〜ものだから", "〜もので"]
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
      pattern: ["〜ため", "〜ために", "〜ためだ"]
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
      pattern: ["〜のだから", "〜のですから", "〜んだから", "〜んですから"]
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
        "〜ことをきっかけに", 
        "〜ことがきっかけで",
        "〜のをきっかけに", 
        "〜のがきっかけで",
        "〜をきっかけに", 
        "〜がきっかけで",
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
      pattern: ["〜わけだ"]
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
      pattern: ["〜以来"]
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
      pattern: ["〜によって", "〜により"]
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
      pattern: ["〜まま"]
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
      pattern: ["〜つつ"]
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
      pattern: ["〜とともに"]
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
      pattern: ["〜つつめる"]
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
        {name: "名詞 なら ＋ 名詞"}
      ],
      pattern: ["〜ほど", "〜であるほど", "〜であればあるほど"]
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
      pattern: ["〜にしたがって"]
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
      pattern: ["〜ばかり (で・だ)"]
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
]