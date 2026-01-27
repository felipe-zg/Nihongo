import { KanjiKatachi, KanjiRadical } from "../../../../enums/kanji.enum";

export const NIHONGO_NO_MORI_KANJI_N2: TKanji[] = [
  // SECTION 1: 「もの」シリーズ - GRAMMAR 1 - 10
  {
    kanji: "値",
    kun: ["ね", "あたい"],
    on: ["チ"],
    meaning: "",
    radical: KanjiRadical.NINBEN,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "直", word: "直す"}
    ],
    vocabulary: [
      { kanji: "值", kana: "ね・あたい", meaning: "Value", description: "これは値段と同じ意味です。でも値だけで使うことはあまり多くありません。"},
      { kanji: "值段", kana: "ねだん", meaning: "Price", description: ""},
      { kanji: "値引き [する]", kana: "ねびき", meaning: "Discount・To give a discount", description: "これは値段を引くですからつまり安くするという意味です。"},
      { kanji: "値上がり [する]", kana: "ねあがり", meaning: "Price rise", description: "値が上がるですから、値段が高くなることです。"},
      { kanji: "価値 [がある]", kana: "かち", meaning: "Worth・To worth it", description: "価値というのはそのものがどれくらい大切かとか、どれくらい役に立つかという程度のことです。"},
      { kanji: "価値観 [が合う人]", kana: "かちかん", meaning: "", description: "価値観というのは何を大切にするかという人の考えのことです。"},
      { kanji: "数値", kana: "すうち", meaning: "Numerical value", description: "これは数の値ですから何かを計算したり、測ったりした時に出てくる数のことです。"},
    ]
  },
  {
    kanji: "価",
    kun: ["あたい"],
    on: ["カ"],
    meaning: "この値という漢字は、価格という意味があります。",
    radical: KanjiRadical.NINBEN,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "西" , word: "西口" }
    ],
    vocabulary: [
      { kanji: "価値 [がある]", kana: "かち", meaning: "Worth・To worth it", description: "価値というのはそのものがどれくらい大切かとか、どれくらい役に立つかという程度のことです。"},
      { kanji: "価格", kana: "かかく", meaning: "Price", description: "価格というのは値段と同じ意味です。" },
      { kanji: "価額", kana: "かがく", meaning: "Price", description: "価額というのは価格とすごくよく似ているんですが価格というのは、そのものがどれくらい価値があるかを数字で表したものですよね。（あまり日常生活で価額という言葉は使いません。）" },
      { kanji: "安価", kana: "あんか", meaning: "Inexpensive", description: "" },
      { kanji: "定価", kana: "ていか", meaning: "Fixed price", description: "お店が物を売る時にこれぐらいで売ります、この値段で売りますと決めている値段のことです。" },
      { kanji: "価値観 [が合う人]", kana: "かちかん", meaning: "", description: "価値観というのは何を大切にするかという人の考えのことです。"},
      { kanji: "評価", kana: "ひょうか", meaning: "Evaluation", description: "評価するというのはそのものがどれくらい価値があるかというのを見て決めることです。" },
      { kanji: "自己評価", kana: "じこひょうか", meaning: "Self-evaluation", description: "これ自己というのは、自分のことですから自分で自分のことを評価することです。" },
      { kanji: "他者評価", kana: "たしゃひょうか", meaning: "Evaluation by others", description: "他者評価は他の人が自分のことを評価することです。" }
    ]
  },
  {
    kanji: "傷",
    kun: ["きず", "いた"],
    on: ["ショウ"],
    meaning: "傷というのは体のどこかを切ったり打ったりして、ひふがやぶれてね、血が出てくる、その部分のことを傷と言います。",
    radical: KanjiRadical.NINBEN,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "日", word: "今日" }
    ],
    vocabulary: [
      { kanji: "傷む", kana: "いたむ", meaning: "To be damaged", description: "これは特に物に使いますね。物が傷ついてしまう時に使います。また、本当に目に見える傷ができていなくても使いすぎてボロボロになっている状態のことをいたむ、と使います。" },
      { kanji: "軽傷", kana: "けいしょう", meaning: "Minor injury", description: "これは軽い傷のことです。" },
      { kanji: "重傷", kana: "じゅうしょう", meaning: "Serious injury", description: "これは重い傷のことです。" },
    ]
  },
  {
    kanji: "依",
    kun: [],
    on: ["イ"],
    meaning: "頼る・To rely",
    radical: KanjiRadical.NINBEN,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "衣", word: "衣服" }
    ],
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
    katachi: KanjiKatachi.HITO,
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
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "*美", word: "美しい" }
    ],
  },
  {
    kanji: "停",
    on: ["テイ"],
    meaning: "意味は泊まるです。",
    radical: KanjiRadical.NINBEN,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "亭", word: "料亭" }
    ],
    vocabulary: [
      { kanji: "停電", kana: "ていでん", meaning: "Power outage", description: "これは電気が止まることです。" },
      { kanji: "バス停", kana: "バスてい", meaning: "Bus stop", description: "これはバスの停留所を短く言った言葉です。" },
      { kanji: "停留所", kana: "ていりゅうじょ", meaning: "Stop point", description: "停留所というのは、とまるところです。\n停留所という言葉も、ほとんどバスに対してしか使われません。バス停・停留所よく使いますね。" },
    ]
  },
  {
    kanji: "健",
    kun: ["すこ"],
    on: ["けん"],
    meaning: "この漢字は健康の健ですね。この漢字、人が元気だ！という意味です。",
    radical: KanjiRadical.NINBEN,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "建", word: "建物" }
    ],
    vocabulary: [
      { kanji: "健やか", kana: "すこやか", meaning: "Healthy", description: "" },
      { kanji: "健康", kana: "けんこう", meaning: "Health", description: "これは体が病気ではない、元気だという意味です。" },
      { kanji: "健康法", kana: "けんこうほう", meaning: "Means of getting healthy", description: "これは健康になる方法のことです。よく～健康法というふうに使われていますね。" },
      { kanji: "健康的", kana: "けんこうてき", meaning: "Health", description: "" },
      { kanji: "健全な", kana: "けんぜん", meaning: "Health", description: "健全というのも、健康と同じ意味があります。でも健全の方が、もっと意味が広くて体が病気じゃない、元気という意味とか悪い考えを持っていないという意味もあります。" },
      { kanji: "健康診断", kana: "けんこうしんだん", meaning: "Health check", description: "これは体に悪いところがないか病気がないかを調べることです。" },
    ]
  },
  {
    kanji: "署",
    kun: [],
    on: ["ショ"],
    meaning: "この漢字の意味は役所という意味があります。",
    radical: KanjiRadical.MONO,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "目", word: "目的" }
    ],
    vocabulary: [
      { kanji: "署名", kana: "しょめい", meaning: "Signature", description: "署名というのはサインのことです。" },
      { kanji: "部署", kana: "ぶしょ", meaning: "Department", description: "部署というのは何かの組織の中の一つ一つのグループのこと言います。特に役割が決められたグループのことです。" },
      { kanji: "警察署", kana: "けいさつしょ", meaning: "Police station", description: "これ警察という役割が決められた署つまり役所です。" },
    ]
  },
  {
    kanji: "著",
    kun: ["いちじる", "あらわ"],
    on: ["チョ"],
    meaning: "この「あらわす」というのは本を書いて出版することです。そして、「いちじるしい」という意味はこれは、はっきりとしているとか見たらすぐにわかるくらい目立っていると言いたいときに使うんです。",
    radical: KanjiRadical.MONO,
    katachi: KanjiKatachi.HITO,
    radicals: ["艹"],
    vocabulary: [
      { kanji: "著しい", kana: "いちじるしい", meaning: "Remarkable", description: "" },
      { kanji: "著者", kana: "ちょしゃ", meaning: "Author", description: "" },
      { kanji: "顕著", kana: "けんちょ", meaning: "Remarkable", description: "顕著というのは著しいと同じ意味があります。" },
    ]
  },
  {
    kanji: "緒",
    kun: ["お"],
    on: ["ショ", "チョ"],
    meaning: "この漢字は普段の生活ではあまりたくさん使わないんですがこの「お」というのは、何かと何かをつなぐひもという意味があります。",
    radical: KanjiRadical.MONO,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "糸" }
    ],
    vocabulary: [
      { kanji: "一緒", kana: "いっしょ", meaning: "Together", description: "一緒というのは、何かを一緒にするという意味です。" },
    ]
  },
  {
    kanji: "氏",
    kun: ["うじ"],
    on: ["シ"],
    meaning: "この漢字の意味は名前ですね。",
    radical: KanjiRadical.UJI,
    katachi: KanjiKatachi.HITO,
    vocabulary: [
      { kanji: "氏名", kana: "しめい", meaning: "Full name", description: "" },
    ]
  },
  {
    kanji: "民",
    kun: ["たみ"],
    on: ["ミン"],
    meaning: "",
    radical: KanjiRadical.UJI,
    katachi: KanjiKatachi.HITO,
    components: [
      { kanji: "口" }
    ],
    vocabulary: [
      { kanji: "民家", kana: "みんか", meaning: "Private house", description: "これは普通の人が住んでいる家のことです。" },
      { kanji: "民族", kana: "みんぞく", meaning: "Ethnic group", description: "民族というのは文化とか、それから言語とか生活のやり方、そういうものが同じ人たちの集まりのことを言います。" },
      { kanji: "民族音楽", kana: "みんぞくおんがく", meaning: "Ethnic music", description: "" },
      { kanji: "民主的", kana: "みんしゅてき", meaning: "Democratic", description: "民主的という言葉は政治の話をするときによく使われますね。何かを国で決める時に国がこうしなさい！と決めるのではなくて市民とか国民が言っていることをちゃんと聞いてその意見を考えて何かを決めるやり方のことこれを民主的と言います。" },
      { kanji: "住民", kana: "じゅうみん", meaning: "Resident", description: "これは住んでいる人ですね。" },
      { kanji: "市民講座", kana: "しみんこうざ", meaning: "Citizen course", description: "これは市民のために開かれている講座のことです。" },
      { kanji: "町民", kana: "ちょうみん", meaning: "Town resident", description: "町に住んでいる人です。" },
      { kanji: "市民", kana: "しみん", meaning: "Citizen", description: "これは市に住んでいる人のことです。" }
    ]
  }
];
