import { KanjiRadical } from "../../../../enums/kanji.enum";

export const NIHONGO_NO_MORI_KANJI_N2: TKanji[] = [
  // SECTION 1: 「もの」シリーズ - GRAMMAR 1 - 10
  {
    kanji: "値",
    kun: ["ね", "あたい"],
    on: ["チ"],
    meaning: "",
    radical: KanjiRadical.NINBEN,
    components: [
      { kanji: "直", word: "直す"}
    ],
    vocabulary: [
      { kanji: "值", kana: "ね", meaning: "Value", description: ""},
      { kanji: "值段", kana: "ねだん", meaning: "Price", description: ""},
      { kanji: "値引き [する]", kana: "ねびき", meaning: "Discount・To give a discount", description: ""},
      { kanji: "値上がり [する]", kana: "ねあがり", meaning: "Price rise", description: ""},
      { kanji: "価値 [がある]", kana: "かち", meaning: "Worth・To worth it", description: ""},
      { kanji: "価値観 []", kana: "かちかん", meaning: "", description: ""},
      { kanji: "数値", kana: "すうち", meaning: "Numerical value", description: ""},
    ]
  },
  {
    kanji: "依",
    kun: [],
    on: ["イ"],
    meaning: "頼る・To rely",
    radical: KanjiRadical.NINBEN,
    vocabulary: [
      { kanji: "依賴 [する]", kana: "いらい", meaning: "Dependency", description: "依頼するというのは人に何かを頼むことです。\n「仕事を依頼する」というふうによく使います。" },
      { kanji: "依存 [する]", kana: "いぞん", meaning: "Dependence", description: "依存するというのは何かがないと生活できない状態、何かがないと自分が存在できない状態になっていることです。" },
    ]
  },
  {
    kanji: "似",
    kun: ["に"],
    on: ["ジ"],
    meaning: "似るというのはだいたい同じという意味です。",
    radical: KanjiRadical.NINBEN,
    components: [
      { kanji: "以", word: "以上" }
    ],
    vocabulary: [
      { kanji: "似る", kana: "にる", meaning: "Similar", description: "似るというのはだいたい同じという意味です。\n顔が似るとか、性格が似るというように見た目とか、目に見えないものにも使うことができます。" },
      { kanji: "似合う", kana: "にあう", meaning: "To Look good on", description: "これはぴったり合っているという意味です。「その服似合うね」というふうに使います。" },
    ]
  },
  {
    kanji: "僕",
    on: ["ぼく"],
    meaning: "「ぼく」というのは音読みで意味は私です。自分を表す時に使う言葉です。",
    radical: KanjiRadical.NINBEN,
    components: [
      { kanji: "*美", word: "美しい" }
    ],
  }
];
