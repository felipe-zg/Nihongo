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
]