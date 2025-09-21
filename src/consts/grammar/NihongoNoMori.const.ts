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
    ]
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
    ]
  },
]