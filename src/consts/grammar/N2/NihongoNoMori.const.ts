import { GrammarEntryCategory } from "../../../enums";

export const NIHONGO_NO_MORI_GRAMMAR_N2: GrammarEntry[] = [
  // SECTION 1: 「もの」シリーズ - GRAMMAR 1 - 10
  {
    id: 1,
    grammar: "〜もの ①",
    imi: "誰でも～だと思う",
    explanation: "当然のことや、変わらない事実を言うときに使う。\nThis grammar is used when expressing something that is generally accepted or commonly thought to be true by everyone.",
    extraInfo: "まあ、これが普通だよねとかこういうことでも驚かないよね。当たり前だよねと言いたい時に使う文法です。",
    usage: {
      form: [{ name: "V.る" }, { name: "V.ない" }],
      pattern: ["もの", "もん" ],
    },
    examples: [
      {
        sentence: "誰でも最初は[失敗する]{ものだ}から、そんなに落ち込まないで。",
        meaning: "It's natural for everyone to make mistakes at first, so don't be so down."
      },
      {
        sentence: "どんなに長い夜でも、必ず[明ける]{ものだ}。",
        meaning: "No matter how long the night is, it will surely dawn."
      },
      {
        sentence: "親は子どもがいくつになっても[心配する]{もんだ}。",
        meaning: "Parents worry about their children no matter how old they get."
      },
      {
        sentence: "日本語を勉強していたら、一度は頭が[爆発する]{もんだ}よ。",
        meaning: "When studying Japanese, it's natural to feel like your head will explode at least once."
      },
    ],
    category: GrammarEntryCategory.MONO,
    newWords: [
      { kanji: "落ち込む", kana: "おちこむ", english: "to feel down・to be depressed" },
      { kanji: "明ける", kana: "あける", english: "to dawn・to become daylight" },
      { kanji: "爆発", kana: "ばくはつ", english: "explosion" }
    ]
  },
  {
    id: 2,
    grammar: "〜もの ②",
    imi: "〜べきだ\n〜べきではない",
    explanation: "注意やアドバイスをするときに使う。",
    usage: {
      form: [{ name: "V.る"}, {name: "V.ない"}],
      pattern: ["もの", "もん" ],
      combinedForms: [
        { first: "V.る", pattern: ["ものではない (もんではない)", "ものじゃない (もんじゃない)"] },
      ]
    },
    examples: [
      {
        sentence: "根拠のないうわさ話を、簡単に[信用する]{ものではない}。",
        meaning: "You shouldn't easily believe baseless rumors."
      },
      {
        sentence: "電車の中では、他人に迷惑がかかるから電話に[でない]{ものだ}。",
        meaning: "You shouldn't answer the phone on the train because it bothers other people."
      },
      {
        sentence: "A: 「久しぶりに自分で料理を作ったら、お腹を壊しちゃったよ。」\nB: 「慣れないことは[する]{もんじゃない}ね。」",
        meaning: "A: I cooked for myself after a long time and got a stomachache.\nB: You shouldn't do things you're not used to."
      },
      {
        sentence: "ゆか先生に対してそんな言葉を[使う]{もんじゃない}。",
        meaning: "You shouldn't use such words towards Yuka-sensei."
      },
    ],
    category: GrammarEntryCategory.MONO,
    newWords: [
      { kanji: "根拠", kana: "こんきょ", english: "basis・foundation・grounds" },
      { kanji: "噂話", kana: "うわさばなし", english: "rumor・gossip" },
      { kanji: "信用", kana: "しんよう", english: "trust・confidence・credit" },
      { kanji: "迷惑", kana: "めいわく", english: "trouble・annoyance・bother" },
      { kanji: "壊", kana: "こわ", english: "break・destroy" },
    ]
  },
  {
    id: 3,
    grammar: "〜もの ③",
    imi: "〜だなあ",
    explanation: "気持ちを込めて何かを言いたいときに使う。",
    extraInfo: "名詞は使えない。",
    usage: {
      form: [{ name: "普通形"}, {name: "な形容詞", connector: "な"}],
      pattern: ["もの", "もん" ],
    },
    examples: [
      {
        sentence: "若かったころは、友達と朝までお酒を飲んで語り[合った]{ものだ}。",
        meaning: "When I was young, I used to drink and talk with my friends until morning."
      },
      {
        sentence: "一人で買い物に行けるようになるなんて、娘も[大きくなった]{ものだ}な。",
        meaning: "It's amazing that my daughter has grown up enough to go shopping alone."
      },
      {
        sentence: "人からプレゼントをもらうのは[うれしい]{ものだ}。",
        meaning: "It's nice to receive presents from others."
      },
      {
        sentence: "やれやれ、[困った]{もんだ}な・・・。",
        meaning: "Oh dear, what a troublesome situation..."
      },
    ],
    category: GrammarEntryCategory.MONO,
    newWords: [
      { kanji: "語り合う", kana: "かたりあう", english: "to talk together" },
    ]
  },
  {
    id: 4,
    grammar: "~というものだ",
    imi: "一般的に言って〜だ",
    explanation: "一般的に「こうだ！」と言いたい時に使う文法です。\n一般的に言って、これはこうだよねとか、世の中の人、みんながこういうふうに思っているよねという内容のことを言いたい時に使う文法です。\nThis grammar is used when you want to say 'this is how it is!' in general.\nWhen you want to say that generally speaking, this is how it is, or that everyone in the world thinks this way, you use this grammar.",
    usage: {
      form: [{ name: "名詞"}],
      pattern: ["というものだ", "というもんだ", "ってもんだ" ],
    },
    examples: [
      {
        sentence: "つらい時こそ助け合うのが、本当の[仲間]{というものだ}。",
        meaning: "It is truly what friends are to help each other in tough times."
      },
      {
        sentence: "良いことも悪いこともあるのが、[人生]{というものだ}。",
        meaning: "Good things and bad things happen; that's what life is."
      },
      {
        sentence: "明日までに一万字のレポートを書くのは[不可能]{というものだ}。",
        meaning: "It is impossible to write a 10,000-word report by tomorrow."
      },
      {
        sentence: "優しい嘘をつくのが、[いい彼氏]{というものだ}よ。",
        meaning: "Telling a gentle lie is what a good boyfriend does."
      },
    ],
    category: GrammarEntryCategory.MONO,
    newWords: [
      { kanji: "仲間", kana: "なかま", english: "friend・companion" },
      { kanji: "不可能", kana: "ふかのう", english: "impossible" },
    ]
  },
  {
    id: 5,
    grammar: "〜というものではない",
    imi: "絶対に〜だと言えない",
    explanation: "この文法は、絶対に～だ！とはっきり言うことができないという意味です。\nThis grammar means that you cannot say for sure that something is definitely the case.",
    usage: {
      form: [{ name: "普通形"}],
      pattern: ["というものではない", "というものでもない" ],
    },
    examples: [
      {
        sentence: "努力すれば、必ず試験に[合格できる]{というものではない}。",
        meaning: "Making an effort does not necessarily mean you will pass the exam."
      },
      {
        sentence: "日本に住んだからと言って、日本語が話せるように[なる]{というものではない}。",
        meaning: "Living in Japan does not necessarily mean you will be able to speak Japanese."
      },
      {
        sentence: "プレゼントは高ければ[いい]{というものではない}。",
        meaning: "An expensive present is not necessarily a good present."
      },
      {
        sentence: "いや、N2に合格したからって、日本人の彼女[できる]{っていうもんではない}でしょ。",
        meaning: "Passing the N2 exam does not necessarily mean you will get a Japanese girlfriend."
      },
    ],
    category: GrammarEntryCategory.MONO,
  },
  {
    id: 6,
    grammar: "~ものがある",
    imi: "〜という感じがする",
    explanation: "自分の気持ちを表す時に使う文法です。はっきりと、こういう気持ちだ！と言いたい時ではなくて、なんとなくこういう気持ちだと言いたいときに使う文法です。\nThis grammar is used to express one's feelings. It is used when you want to say that you feel a certain way, not when you want to say clearly that you have a specific feeling.",
    usage: {
      form: [{ name: "V.る" }, { name: "イ形容詞" }, { name: "ナ形容詞" }],
      pattern: ["ものがある"],
    },
    examples: [
      { 
        sentence: "犯行後の彼らの行動には、どこか[不自然な]{ものがあります}。",
        meaning: "There is something unnatural about their behavior after the crime." 
      },
      { 
        sentence: "彼の歌声には、人の心を[動かす]{ものがある}。", 
        meaning: "There is something in his singing voice that moves people's hearts." 
      },
      { 
        sentence: "この歳で独身に戻るのは、[つらい]{ものがある}。", 
        meaning: "It is painful to become single again at this age." 
      },
      { 
        sentence: "彼女達の歌声には、なにか人を[引きつける]{ものがあります}ね。", 
        meaning: "There is something captivating about their singing voices." 
      }
    ],
    category: GrammarEntryCategory.MONO,
    newWords: [
      { kanji: "犯行", kana: "はんこう", english: "crime" },
      { kanji: "行動", kana: "こうどう", english: "behavior" },
      { kanji: "不自然", kana: "ふしぜん", english: "unnatural" },
      { kanji: "歳", kana: "とし", english: "age" },
      { kanji: "独身", kana: "どくしん", english: "single・unmarried" },
      { kanji: "戻る", kana: "もどる", english: "to return" },
      { kanji: "引きつける", kana: "ひきつける", english: "to attract・to captivate" },
    ]
  },
  {
    id: 7,
    grammar: "〜ものの",
    imi: "〜けれども",
    explanation: "～だけど、というように反対のことを表したい時に使う文法です。\nThis grammar is used when you want to express something opposite, like 'but'.",
    usage: {
      form: [{ name: "普通形" }, { name: "な形容詞", connector: "な・である" }],
      pattern: ["ものの"],
      combinedForms: [
        { first: "普通形・名詞", pattern: ["とはいうものの"] },
      ]
    },
    examples: [
      {
        sentence: "[買った]{ものの}、一度も使っていません。",
        meaning: "I bought it, but I haven't used it even once."
      },
      {
        sentence: "日本語を[勉強した]{ものの}、話す相手がいないのですっかり忘れてしまった。",
        meaning: "I studied Japanese, but I have no one to speak with, so I completely forgot it."
      },
      {
        sentence: "体に悪いと[わかっている]{ものの}、夜中にカップラーメンを食べてしまう。",
        meaning: "I know it's bad for my health, but I end up eating cup ramen late at night."
      },
      {
        sentence: "[夏休み]{とはいうものの}、毎日課題や家の手伝いで忙しい。",
        meaning: "Although it is summer vacation, I am busy every day with homework and helping out at home.",
        point: "夏休みだけど。。。",
      },
      {
        sentence: "いや～だめだって頭では[わかっている]{ものの}、やめられないんだよね。",
        meaning: "No, I know in my head that it's no good, but I just can't stop.",
      }
    ],
    category: GrammarEntryCategory.MONO,
    newWords: [
      { kanji: "課題", kana: "かだい", english: "homework・task" },
    ]
  },
  {
    id: 8,
    grammar: "~ものなら",
    imi: "できないと思うけど、もし〜できるなら",
    explanation: "絶対に無理だと思うけどできるんだったら、という文法です。絶対に無理、絶対にできないと思うけどもしできるんだったらこれがしたい！というふうに使う文法です。\nThis grammar is used to express 'I think it's absolutely impossible, but if I could do it...'. It is used to say that you think something is absolutely impossible, but if you could do it, this is what you would want to do!",
    extraInfo: "「〜ものなら〜したい」というふうに後ろにはやりたいことを述べる文章が続きます。前には、自分が無理だけどやりたいと思っていることを述べます。",
    usage: {
      form: [{ name: "V.れる" }],
      pattern: ["ものなら"],
    },
    examples: [
      {
        sentence: "[行ける]{もんなら}、今すぐ恋人に会いに行きたい。",
        meaning: "If I could go, I would want to go see my lover right now."
      },
      {
        sentence: "ずっと前から、身長を[縮められる]{ものなら}縮めたいと思って生きてきた。",
        meaning: "I have lived thinking that if I could shorten my height, I would want to shorten it."
      },
      {
        sentence: "祖母が生きていたころに[戻れる]{ものなら}、今すぐ戻ってありがとうと伝えたい。",
        meaning: "If I could go back to when my grandmother was alive, I would want to go back right now and say thank you."
      },
      {
        sentence: "[やれる]{もんなら}やってみな！",
        meaning: "If you can do it, then try!"
      },
    ],
    category: GrammarEntryCategory.MONO,
    newWords: [
      { kanji: "身長", kana: "しんちょう", english: "height" },
      { kanji: "縮める", kana: "ちぢめる", english: "to shorten" },
    ]
  },
  {
    id: 9,
    grammar: "~ものか",
    imi: "絶対に〜ない",
    explanation: "This grammar is used to strongly deny something, meaning 'definitely not!'. It is often used in spoken language, but it has a somewhat anime or manga-like feel to it. Japanese people don't use it very often.",
    extraInfo: "絶対にない！と言っていますから強い否定です。\n話すときによく使われる文法ですが、アニメとか漫画っぽい。日本人はあまり使わない。",
    usage: {
      form: [{ name: "V.る" }, { name: "イ形容詞" }, { name: "ナ形容詞", connector: "な" }, { name: "名詞", connector: "な" }],
      pattern: ["ものか"],
    },
    examples: [
      {
        sentence: "仕事をさぼって給料だけもらうなんてことが、この社会で[許される]{ものか}。",
        meaning: "There's no way that slacking off at work and just collecting a paycheck is allowed in this society."
      },
      {
        sentence: "A:加藤さんて、ピーマンが好きだよね？\nB:[好きな]{もんか}。一番嫌いな食べ物だよ。",
        meaning: "A: Kato-san, you like green peppers, right?\nB: Like them? No way. They're my least favorite food.",
        point: "そんなことない。",
      },
      {
        sentence: "息子はおばけが大嫌いなのに、「おばけなんか[こわい]{ものか}」と強がっている。",
        meaning: "My son is really afraid of ghosts, but he pretends by saying, 'Ghosts? I'm not afraid of them!'"
      },
    ],
    category: GrammarEntryCategory.MONO,
  },
  {
    id: 10,
    grammar: "~ものと思われる",
    imi: "〜だと推測できる",
    explanation: "This grammar is used when making a guess or assumption about something based on certain information or evidence. It expresses the idea that 'it is believed that...' or 'it is assumed that...'.",
    usage: {
      form: [{ name: "V.た" }],
      pattern: ["ものと思われる"],
    },
    examples: [
      {
        sentence: "犯人はたった一時間で犯行に[及んだ]{ものと思われる}。",
        meaning: "It is believed that the offender committed the crime in just one hour."
      },
      {
        sentence: "キツネが[侵入した]{ものと思われる}足跡が、荒された畑の中にあった。",
        meaning: "There were footprints in the ravaged field that are believed to have been made by a fox that intruded."
      },
      {
        sentence: "事件現場にナイフが残されていたので、犯人はナイフを[使用した]{ものと思われる}。",
        meaning: "It is believed that the offender used a knife because a knife was left at the crime scene."
      },
      {
        sentence: "あたたかいコーヒーが置いてあるので、さっきまでここに人が[いた]{ものと思われる}。",
        meaning: "It is believed that there was a person here until just a moment ago because there is a warm cup of coffee."
      },
    ],
    category: GrammarEntryCategory.MONO,
    newWords: [
      { kanji: "推測", kana: "すいそく", english: "guess・conjecture" },
      { kanji: "犯人", kana: "はんにん", english: "culprit・perpetrator・offender" },
      { kanji: "犯行", kana: "はんこう", english: "crime" },
      { kanji: "及ぶ", kana: "およぶ", english: "to reach・to amount to" },
      { kanji: "侵入", kana: "しんにゅう", english: "invasion・intrusion" },
      { kanji: "足跡", kana: "あしあと", english: "footprint・footstep" },
      { kanji: "荒す", kana: "あらす", english: "to devastate・to ravage" },
      { kanji: "畑", kana: "はたけ", english: "field・farm" },
      { kanji: "事件", kana: "じけん", english: "incident・case" },
      { kanji: "現場", kana: "げんば", english: "scene (of crime, accident, etc.)" },
    ]
  },
  // SECTION 2: 「こと」シリーズ - GRAMMAR 11 - 20
  {
    id: 11,
    grammar: "〜ことに",
    imi: "とても〜だ",
    explanation: "この文法は「とても～だ」というふうに自分の感情を強調して言いたいときに使う文法です。「あ～本当にこう思う！」というふうに自分の気持ちを強く表現したいときに使われる文法です。",
    extraInfo: "この文法、気持ちを強調していう文法なので自分がこういうふうに感じる。という風に自分の感情を表す言葉と一緒によく使われます。\n\nこの「～ことに」という文法は日常会話ではあまり使わない言い方ですね。もし使うんだったら、「こんなことがあってさめっちゃ困ったよ。」とか「もうすごく大変だったよ。」こういう言い方をすることの方が多いです。「困ったことに」とわざわざ言う事は少なくて小説の中とか、書き言葉の中でよく見かけるかなと思います。",
    usage: {
      form: [
        { name: "V. た" },
        { name: "な形容詞", connector: "な"},
        { name: "イ形容詞"}
      ],
      pattern: ["ことに"],
    },
    examples: [
      {
        sentence: "[悲しい]{ことに}、新しく買ったばかりの口紅をなくしてしまった。",
        meaning: "xxxxx"
      },
      {
        sentence: "[驚いた]{ことに}、普通は3日かかる仕事を彼は1日で完璧にやり終えてしまった。",
        meaning: "xxxxx"
      },
      {
        sentence: "上司：「昨日のプレゼンどうだった？」\n部下：「[ありがたい]{ことに}、我が社の製品を気に入っていただけたようです。」",
        meaning: "xxxxx"
      },
      {
        sentence: "[不思議な]{ことに}全然悲しくないんだよね！",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "口紅", kana: "xx", english: "xx" },
      { kanji: "驚く", kana: "xx", english: "xx" },
      { kanji: "完璧", kana: "xx", english: "xx" },
      { kanji: "我", kana: "xx", english: "xx" },
      { kanji: "製品", kana: "xx", english: "xx" },
      { kanji: "不思議な", kana: "xx", english: "xx" }
    ]
  },
  {
    id: 12,
    grammar: "〜ことにする",
    imi: "本当はそうじゃないけど、〜というふりをする",
    explanation: "この文法は、本当はそうじゃないんだけど「～のふりをする」という意味です。本当はそれをやったわけじゃないんだけどそれをやったようなふりをする。",
    extraInfo: "この場面のように、「見なかったことにしてほしい」とか、「聞かなかったことにしてほしい」とか、「知らなかったことにしてほしい」こういう言い方は、日常会話でもよく使われます。",
    usage: {
      form: [{ name: "v. た" }],
      pattern: ["ことにする"],
    },
    examples: [
      {
        sentence: "姉が作ったお弁当を、自分が[作った]{ことにして}恋人にプレゼントした。",
        meaning: "xxxxx"
      },
      {
        sentence: "来月転校するって話、まだ内緒にしているから、[聞かなかった]{ことにして}くれない？",
        meaning: "xxxxx"
      },
      {
        sentence: "宿題を[終わらせた]{ことにして}遊びに行ったら、お母さんに叱られた。",
        meaning: "xxxxx"
      },
      {
        sentence: "分けてくれるなら[見なかった]{ことにする}！",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "転校", kana: "xx", english: "xx" },
      { kanji: "内緒", kana: "xx", english: "xx" },
      { kanji: "叱られる", kana: "xx", english: "xx" }
    ]
  },
  {
    id: 13,
    grammar: "〜ことか",
    imi: "本当に〜だ",
    explanation: "この文法は、自分の気持ちとか自分がやったこと行動に対して気持ちを込めて言うときに使う文法です。「ああこうだなぁ」というふうに強く感じることを表現したいときに使う文法です。この「ことか」を使うときは前に「どんなに〜ことか」とか「どれだけ〜ことか」「どれほど〜ことか」「なんと〜ことか」この4つの言葉が一緒に使われる場合が多いです。これを使うことでもっともっと気持ちを強調をして表現することができます。",
    extraInfo: "この「～ことか」という文法は、日常生活ではあまり使うことがありません。こういう話し方をする人もいるんですがどちらかというと、小説の中とか、アニメやマンガ、ドラマの中でよく聞く表現かなと思います。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "な・である" }],
      pattern: ["ことか"],
    },
    examples: [
      {
        sentence: "どんなときでも明るい笑顔を見せる彼女に、<どれほど>[救われている]{ことか}。",
        meaning: "xxxxx"
      },
      {
        sentence: "今までお腹の中にいた息子の顔を初めてみたとき、<どんなに>[うれしかった]{ことか}。",
        meaning: "xxxxx"
      },
      {
        sentence: "大事な試合前にけがをしてしまって、<どれだけ>[つらかった]{ことか}。",
        meaning: "xxxxx"
      },
      {
        sentence: "N2合格のために、<どれだけ>[勉強した]{ことか}。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "救われる", kana: "xx", english: "xx" },
    ]
  },
  {
    id: 14,
    grammar: "〜ことから",
    imi: "〜だから",
    explanation: "この文法は、原因や理由を表すときに使われる文法です。特に名前の由来ですね。このものの名前がどうしてそういう名前になったのかという理由を説明するときそれから何か物事が起きていてそれがどうしてそうなったのかの原因を説明するときによく使われる文法です。",
    extraInfo: "この「ことから」という文法は日常会話ではあまり使わないです。ちゃんとした言い方だな。という印象があるので何か物の名前を説明するときに書き言葉として使われたり、正式な場で説明をするときに使われるような文法です。\n\n日常会話だったら「〜から」と使います。「呼びやすいからこの名前になったんだよ。」こういう言い方のほうが自然ですね。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "な・である" }],
      pattern: ["ことから"],
    },
    examples: [
      {
        sentence: "この通りにあるお菓子屋さんはどれも[有名である]{ことから}、ここは「スイーツストリート」と呼ばれている。",
        meaning: "xxxxx"
      },
      {
        sentence: "まだ足跡が雪の上にはっきりと[残っている]{ことから}、熊はまだ近くにいると考えられる。",
        meaning: "xxxxx"
      },
      {
        sentence: "栄養のバランスが[良い]{ことから}、和食がまた注目を集めるようになった。",
        meaning: "xxxxx"
      },
      {
        sentence: "A: あやの先生の名前の由来ってなんですか？\nB: 礼儀が[正しくなるようにという]{ことから}「あやの」という名前になりました。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "由来", kana: "xx", english: "xx" },
      { kanji: "足跡", kana: "あしあと", english: "xx" },
      { kanji: "熊", kana: "くま", english: "xx" },
      { kanji: "栄養", kana: "えいよう", english: "xx" },
      { kanji: "礼儀", kana: "れいぎ", english: "xx" },
    ]
  },
  {
    id: 15,
    grammar: "〜のことだから",
    imi: "〜の性格を考えると",
    explanation: "この文法は「～の性格から考えるとこうだろう」と思うときに使う文法です。",
    extraInfo: "接続は、名詞＋のことだから、名詞が入ります。この名詞の中には、人の名前とか組織の名前が入ります。このように「〜の性格から考えるとこうだろうきっとこうなるだろうというふうに予想するときに使われる文法です。\n\nこの「～のことだから」という文法はいい意味でも悪い意味でもどちらでも使うことができます。\nこの文法、日常生活でもよく使います。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["のことだから"],
    },
    examples: [
      {
        sentence: "いつも寝坊する[彼女]{のことだから}、今日もデートに遅刻してくるだろう。",
        meaning: "xxxxx"
      },
      {
        sentence: "[母]{のことだから}、私を元気にさせるためにお弁当に大好物の卵焼きをたくさん入れてくれたのだろう。",
        meaning: "xxxxx"
      },
      {
        sentence: "田中；「どうしよう。森くんのペン壊しちゃった。」\n山田；「[優しい彼]{のことだから}、謝れば許してくれるさ。」",
        meaning: "xxxxx"
      },
      {
        sentence: "おっそ！全然こーへんやん！[あいつ]{のことやから}、どうせ寝坊してんねやろなー！",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "壊す", kana: "xx", english: "xx" },
      { kanji: "優しい", kana: "xx", english: "xx" },
      { kanji: "謝る", kana: "あやまる", english: "xx" },
      { kanji: "許す", kana: "ゆるす", english: "xx" }
    ],
    important: true
  },
  {
    id: 16,
    grammar: "〜ことなく",
    imi: "〜しないで",
    explanation: "この文法は「～しないで」という意味です。\n「ことなく」というのは「〜をしない状態で別のことをする」と言いたいときに使う文法ですから「〜ことなく」これは「〜しないで」と同じ意味になります。",
    usage: {
      form: [{ name: "V. る" }],
      pattern: ["ことなく"],
    },
    examples: [
      {
        sentence: "工場では24時間、[止まる]{ことなく}機械が動き続けている。",
        meaning: "xxxxx"
      },
      {
        sentence: "私の親友は、毎年[忘れる]{ことなく}誕生日に手紙をくれる。",
        meaning: "xxxxx"
      },
      {
        sentence: "彼は祝日も[休む]{ことなく}働き続けていたので、身体を壊してしまった。",
        meaning: "xxxxx"
      },
      {
        sentence: "私はこれまで[休む]{ことなく}勉強を続けてきました。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "機械", kana: "きかい", english: "xx" },
      { kanji: "祝日", kana: "しゅくじつ", english: "xx" },
      { kanji: "壊す", kana: "xx", english: "xx" }
    ]
  },
  {
    id: 17,
    grammar: "〜ないことには",
    imi: "〜しなければ",
    explanation: "この文法は「～しなければ」という意味です。これをしないと、こういう結果にはならないと言いたいときに使う文法なので「～ないことには～ない」のように後ろには「ない」がつく文章が続きます。",
    extraInfo: "この文法は、「～してみないことには分からない」という使い方がすごく多いです。\n「使ってみないことには分からない」とか「食べてみないことにはおいしいかどうかわからない」、「行ってみないことには、楽しいかどうかわからない」このように使われることが本当に多いです。",
    usage: {
      form: [
        { name: "V. ない STEM" },
        { name: "イ形容詞 ない形 STEM" },
        { name: "な形容詞", connector: "で" },
        { name: "名詞", connector: "で" },
      ],
      pattern: ["ないことには"],
    },
    examples: [
      {
        sentence: "実物を[見てみない]{ことには}、買うかどうか決めることはできない。",
        meaning: "xxxxx"
      },
      {
        sentence: "お湯が[熱くない]{ことには}、温泉に入っても体が温まらない。",
        meaning: "xxxxx"
      },
      {
        sentence: "色々やりたいことがあっても、[健康でない]{ことには}何も始められない。",
        meaning: "xxxxx"
      },
      {
        sentence: "実際に[使ってみない]{ことには}いいかどうかわからないから。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "実物", kana: "じつぶつ", english: "xx" },
      { kanji: "お湯", kana: "おゆ", english: "xx" },
      { kanji: "熱い", kana: "あつい", english: "xx" },
      { kanji: "温まる", kana: "あたたまる", english: "xx" }
    ]
  },
  {
    id: 18,
    grammar: "〜ないことはない",
    imi: "〜だ！とはっきり言えない",
    explanation: "この文法は「絶対に～だ」とはっきり言えないときに使う文法です。「ないことはない」ですからつまり、あるんですね。「そうだ。」という文法なんですが「そうだ」とはっきり言えないときにこの文法が使われます。",
    extraInfo: "この「ないことはない」という表現を使うときはまあまあよりちょっと下ぐらいを表すときに使います。例えば、「似合ってないこともない」と言ったら、まあすごく似合ってないわけじゃないんだけどまぁちょっと似合ってるぐらいちょっと、まあまあより下ぐらいの評価になるんですよ。\nこれはいう人とか、聞く人の関係とか場面によっても少し違うんですが「ないこともない」っていう表現を使うときははっきり言えない時とはっきり言いたくない時によく使われるんですよ。",
    usage: {
      form: [
        { name: "V. ない" },
        { name: "V. れない" },
        { name: "イ形容詞 ない形" },
        { name: "な形容詞", connector: "でない" },
      ],
      pattern: ["ことはない", "こともない"],
    },
    examples: [
      {
        sentence: "部長の気持ちは[わからない]{ことはない}が、あの言い方は良くないと思う。",
        meaning: "xxxxx"
      },
      {
        sentence: "お酒は[飲めない]{こともない}んですが、一人では飲まないです。",
        meaning: "xxxxx"
      },
      {
        sentence: "[かわいくな]<く>{もない}が、彼女はこの役のイメージには合わない。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "役", kana: "やく", english: "xx" },
    ]
  },
  {
    id: 19,
    grammar: "〜ことは〜が",
    imi: "〜だけど",
    explanation: "この文法は「～だけど」という意味です。反対のことを言いたいときに使う文法ですね。例えば、「勉強したことは勉強したが合格する自がない。」このように使います。勉強したけど自信がないという意味ですね。このように「〜だけど」とはっきり言う よりも一応これをやったけど気になることがある。とかこうなんだけど、別の意見があると言いたいときに使う文法です。",
    extraInfo: "この～の部分は、同じ言葉が入るので注意してください。\n\nこの「～ことは～が」という文法は日常生活でもよく使われます。日常の会話だったら「〜ことは〜けど」という言い方になる場合が多いですね。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "な" }, { name: "な形容詞", connector: "な" }],
      pattern: ["ことは"],
      secondsForm: [{ name: "普通形", connector: "が" }]
    },
    examples: [
      {
        sentence: "試験に[合格した]{ことは}[合格した]{が}、こんな資格があっても何の役にも立たない。",
        meaning: "xxxxx"
      },
      {
        sentence: "村上：「昨日のコンサート、どうだった？」\n佐藤：「[楽しかった]{ことは}[楽しかったんです]{が}、隣の人がうるさくて全然ゆっくり歌を聴けませんでした。！",
        meaning: "xxxxx"
      },
      {
        sentence: "日本で働くのは[大変な]{ことは}[大変だ]{が}、学びも多いです。",
        meaning: "xxxxx"
      },
      {
        sentence: "[美味しい]{ことは}[美味しいです]{が}病気になってしまいますよ！",
        meaning: "xxxxx"
      },
      {
        sentence: "A；「ねえねえ。レポート書いた？」\nB；「ああ、[書いた]{ことは}[書いた]{けど}適当だよ。」",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "資格", kana: "しかく", english: "xx" },
      { kanji: "適当", kana: "てきとう", english: "xx" },
    ],
    important: true
  },
  {
    id: 20,
    grammar: "～ことになる\n～ことにはならない",
    imi: "〜だと言える\n～だと言えない",
    explanation: "この文法は「～だといえる」という意味です。例えば、皆さん漢字を1000個覚えなければいけません1日に漢字を1つずつ覚えていったら何年かかりますか？だいたい3年くらいかかりますよね。こういう時に3年かかることになるっていうことができます。",
    usage: {
      form: [
        { name: "普通形" },
        { name: "名詞", connector: "だという" },
        { name: "な形容詞", connector: "だという" },
      ],
      pattern: ["ことになる", "ことにはならない"],
    },
    examples: [
      {
        sentence: "このサービスは一か月利用するのに980円かかるので、一年使う11760円[支払う]{ことになる}。",
        meaning: "xxxxx"
      },
      {
        sentence: "ただ日本のドラマを字幕付きで観ただけでは、日本語の[勉強をした]{ことにはならない}。",
        meaning: "xxxxx"
      },
      {
        sentence: "犬の散歩ぐらいじゃ、[ダイエットした]{ことにはなりません}よ。",
        meaning: "xxxxx"
      },
      {
        sentence: "そんなに本をたくさん持っているからって[勉強した]{ことにはならない}ょー。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.KOTO,
    newWords: [
      { kanji: "字幕", kana: "じまく", english: "subtitle" },
    ]
  },
  // SECTION 3: 「限り」シリーズ - GRAMMAR 21 - 28
  // SECTION 4: 順接・逆接 - GRAMMAR 29 - 40
  {
    id: 29,
    grammar: "〜だけあって",
    imi: "〜だから当然そうなる〜",
    explanation: "「〜だから」と理由を表す時に使う文法なんですが、その理由が特別な場合に使う文法です。\n特に人をほめる時とか、いいことを言うときによく使われる文法です。\nThis grammar is used to express a reason with 'because~', but it is used when the reason is special.\nIt is often used when praising someone or saying something good.",
    usage: {
      form: [{ name: "普通形" }, { name: "な形容詞", connector: "な" }, { name: "名詞"}],
      pattern: ["だけあって"],
    },
    examples: [
      {
        sentence: "日本に[留学した]{だけあって}、彼は日本の文化についてとても詳しい。",
        meaning: "Because he studied abroad in Japan, he is very knowledgeable about Japanese culture."
      },
      {
        sentence: "テレビで紹介されるほど[有名な]{だけあって}、、このラーメン屋さんはいつも行列ができる。",
        meaning: "Because it is famous enough to be introduced on TV, this ramen shop always has a line."
      },
      {
        sentence: "元サッカー[選手]{だけあって}、サッカーに関しては誰よりも詳しい。",
        meaning: "Because he is a former soccer player, he is more knowledgeable about soccer than anyone else."
      },
      {
        sentence: "ゆか先生が[教える]{だけあって}、やっぱり、日本語の森の授業はわかりやすいな～！",
        meaning: "Because Yuka-sensei teaches, as expected, the classes at Nihongo no Mori are easy to understand!"
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "行列", kana: "ぎょうれつ", english: "line・queue" },
    ]
  },
  {
    id: 30,
    grammar: "〜だけに",
    imi: "①　〜だけあって\n②　〜だからさらに",
    explanation: "①「～だけあって」と全く同じ意味です。この意味の場合は文章の中で「だけあって」「だけに」入れ替えてもOKです。ただし「だけあって」の方は良い意味とか人をほめるときに使う。「～だけに」という文法はちょっと悪いことに使われる場合が多いです。\n②「〜だからさらに強く感じる」って意味だ。これが原因・これが理由で、もっとこういうふうに感じると言いたい時に使います。（自分の気持ちを強調して言うときに使う）\n① It has the same meaning as 'だけあって'. In this case, you can interchange 'だけあって' and 'だけに' in a sentence. However, 'だけあって' is used for good meanings or when praising someone. The grammar 'だけに' is often used for somewhat negative things.\n② It means 'because of ~, I feel it even more strongly'. It is used when you want to say that this is the cause or reason for feeling something more strongly (used to emphasize your feelings).",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "な・である" }],
      pattern: ["だけに"],
    },
    examples: [
      {
        sentence: "失敗が[続いていた]{だけに}、今回の実験成功は心の底からうれしい。",
        meaning: "Because failures had continued, I am truly happy about the success of this experiment."
      },
      {
        sentence: "最近は[忙しかった]{だけに}、突然暇になると何をすればいいのかわからない。",
        meaning: "Because I had been busy recently, I don't know what to do when I suddenly have free time."
      },
      {
        sentence: "彼は若者の間で[有名な]{だけに}、街を歩くだけで声をかけられて大変だ。",
        meaning: "Because he is famous among young people, it is difficult for him to walk around the city without being approached."
      },
      {
        sentence: "A:試験どうだった？\nB:あれだけ[威張っていた]{だけに}、不合格だったから恥ずかしい。。。",
        meaning: "A: How was the exam?\nB: Because I was so arrogant, I'm embarrassed that I failed..."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "成功", kana: "せいこう", english: "success" },
      { kanji: "底", kana: "そこ", english: "bottom" },
      { kanji: "暇", kana: "ひま", english: "free time" },
      { kanji: "威張る", kana: "いばる", english: "to be arrogant・to brag" },
    ],
    extraInfo: "V.る 使えない",
  },
  {
    id: 31,
    grammar: "〜からには・以上（は）",
    imi: "〜だから！",
    explanation: "「こうだから」というふうに強い気持ちを表す時に使う。「からには」の後ろは「～するつもりだ」という意志を表す文章とか「〜するべきだ」と注意をする文章「～しなさい」と命令をする文章とか「絶対にこうだ」と強く断言をする文章などが入ります。\nThis grammar is used to express strong feelings like 'because of this!'. After 'からには', sentences that express intention like 'I intend to do ~', cautionary sentences like 'you should do ~', imperative sentences like 'do ~', or strongly assertive sentences like 'it is definitely this way' are used.",
    usage: {
      form: [{ name: "V.る" }, { name: "V.た" }, { name: "名詞", connector: "である" }, { name: "ナ形容詞", connector: "である" }],
      pattern: ["からには", "以上（は）"],
    },
    examples: [
      {
        sentence: "最初はやりたくなかったが、[やる]{からには}本気で取り組みたいと思っている。",
        meaning: "I didn't want to do it at first, but since I'm going to do it, I want to tackle it seriously."
      },
      {
        sentence: "雨が降っているが、ここまで[来た]{からには}、観光名所を見てから帰ろう。",
        meaning: "It is raining, but since we've come this far, let's see the tourist attractions before going home."
      },
      {
        sentence: "[上司である]{以上}、部下のミスであっても責任を取らなければならない。",
        meaning: "As a superior, you must take responsibility even if it is the subordinate's mistake."
      },
      {
        sentence: "私が[来た]{からには}、もう大丈夫。",
        meaning: "Since I have come, it's already okay."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "本気", kana: "ほんき", english: "seriousness" },
      { kanji: "取り組む", kana: "とりくむ", english: "to tackle・to work on" },
      { kanji: "観光名所", kana: "かんこうめいしょ", english: "tourist attraction" },
      { kanji: "上司", kana: "じょうし", english: "superior・boss" },
      { kanji: "部下", kana: "ぶか", english: "subordinate・junior" },
      { kanji: "責任", kana: "せきにん", english: "responsibility" },
      { kanji: "責任を取る", kana: "せきにんをとる", english: "to take responsibility" }
    ]
  },
  {
    id: 32,
    grammar: "〜というだけで",
    imi: "〜という理由だけで",
    explanation: "「〜という理由だけで、そうなる・そう思う・そう感じると言いたい時に使う文法です。\nThis grammar means 'just because of ~'. It is used when you want to say that something happens, you think so, or you feel so just because of that reason.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "である" }],
      pattern: ["というだけで"],
    },
    examples: [
      {
        sentence: "あの店が販売している[商品]{というだけで}、品質が悪いのに高い値段で売られている。",
        meaning: "Just because it is a product sold by that store, it is sold at a high price despite its poor quality."
      },
      {
        sentence: "芸能人が[来た]{というだけで}、あのレストランは次の日から行列ができたそうだ。",
        meaning: "Just because a celebrity came, that restaurant apparently had a line starting the next day."
      },
      {
        sentence: "彼女は[かわいい]{というだけで}、色々な会社の面接に合格した。",
        meaning: "Just because she is cute, she passed interviews at various companies."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "販売", kana: "はんばい", english: "sales" },
      { kanji: "品質", kana: "ひんしつ", english: "quality" },
      { kanji: "芸能人", kana: "げいのうじん", english: "celebrity" },
      { kanji: "面接", kana: "めんせつ", english: "interview" },
    ]
  },
  {
    id: 33,
    grammar: "〜にもかかわらず",
    imi: "〜なのに",
    explanation: "「～なのに」という意味です。～ということに関係なく、そうであると言いたい時に使う文法です。\nThis grammar means 'despite ~'. It is used when you want to say that something is the case regardless of the fact that ~.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "である" }],
      pattern: ["にもかかわらず"],
      combinedForms: [
        { first: "名詞", pattern: ["にもかかわらず"] },
      ]
    },
    examples: [
      {
        sentence: "彼は[お金持ちである]{にもかかわらず}、値段の高いものを一切買わない。",
        meaning: "Despite being wealthy, he never buys expensive things."
      },
      {
        sentence: "こんなに[暑い]{にもかかわらず}、彼は長袖のトレーナーを着ている。",
        meaning: "Despite it being so hot, he is wearing a long-sleeved sweatshirt."
      },
      {
        sentence: "[雨]{にもかかわらず}、新発売のゲームを買いに来たお客さんで長い列ができています。",
        meaning: "Despite the rain, there is a long line of customers who came to buy the newly released game."
      },
      {
        sentence: "5年以上一緒に[いる]{にもかかわらず}、彼女のことが全く理解できない・••。",
        meaning: "Despite being together for over five years, I still don't understand her at all..."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "一切", kana: "いっさい", english: "not at all・never" },
      { kanji: "長袖", kana: "ながそで", english: "long-sleeved" },
      { kanji: "新発売", kana: "しんはつばい", english: "newly released" },
      { kanji: "列", kana: "れつ", english: "line・queue" },
    ],
    extraInfo: "「にかかわらず」は「～に関係がなく」という意味でしたね。「にもかかわらず」「も」が入ると「～なのに」という意味になります。",
  },
  {
    id: 34,
    grammar: "〜にしては",
    imi: "〜から予想することとは違う",
    explanation: "この人だったら、まあこれくらいできるだろうと予想しますよね。その予想したものよりも「よくできてるな」とか「あまりできてないな」というように予想とは違うと言いたい時に「～にしてはこうだ」というふうに使われる文法です。\nYou would expect that this person could do about this much, right? When you want to say that it is different from what you expected, such as 'they did better than expected' or 'they didn't do as well as expected', you use the grammar '~にしてはこうだ'.\nThis grammar is used when you want to say that something is different from what you expected, such as 'they did better than expected' or 'they didn't do as well as expected'.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "である" }],
      pattern: ["にしては" ],
    },
    examples: [
      {
        sentence: "彼の作った資料にはいくつかミスがあったが、[新入社員]{にしては}よくできている方だ。",
        meaning: "Although there were some mistakes in the materials he made, he did well for a new employee."
      },
      {
        sentence: "昨日全然[寝ていない]{にしては}、なんだか頭がすっきりしている。",
        meaning: "Although I didn't sleep at all yesterday, my head feels somehow clear."
      },
      {
        sentence: "私の父は見た目に気を使っているので、[50代]{にしては}若く見える。",
        meaning: "My father pays attention to his appearance, so he looks young for his age in his 50s."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
  },
  {
    id: 35,
    grammar: "〜わりに",
    imi: "〜なのに",
    explanation: "この文法は「～予想できることとは違う」と言いたいときに使う文法です。\nThis grammar is used when you want to say that something is different from what you would expect.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "の" }, { name: "な形容詞", connector: "な" }],
      pattern: ["わりに"],
    },
    examples: [
      {
        sentence: "息子は毎日休まず[勉強している]{わりに}、全く成績が良くならない。",
        meaning: "Despite studying every day without fail, my son's grades do not improve at all."
      },
      {
        sentence: "このシャンプーは[値段の]{わりに}、量が少ないし、香りもよくない。",
        meaning: "Despite the price, this shampoo has a small amount and the scent is not good."
      },
      {
        sentence: "この仕事は[大変な]{わりに}給料が低いので、やりたがる人が少ない。",
        meaning: "Despite the job being tough, the salary is low, so there are few people who want to do it."
      },
      {
        sentence: "君もまずいって言ってるわりに、たくさん食べているね。",
        meaning: "Despite saying it's bad, you're eating a lot."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "成績", kana: "せいせき", english: "grades" },
      { kanji: "量", kana: "りょう", english: "amount" },
    ]
  },
  {
    id: 36,
    grammar: "〜といっても",
    imi: "〜だけど、本当は",
    explanation: "This grammar is used when you want to say 'although ~, in reality...'. It is used to express that while something may be the case, the reality is different or there are additional considerations.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞" }, { name: "な形容詞" }],
      pattern: ["といっても"],
    },
    examples: [
      {
        sentence: "A:すごい！この料理、佐藤さんが作ったの？\nB:はい。[作った]{といっても}、切って焼いただけの簡単な料理ですよ。",
        meaning: "A: Wow! Did Sato-san make this dish?\nB: Yes. Although I made it, it's a simple dish that I just cut and grilled."
      },
      {
        sentence: "旅行に[行った]{といっても}、日帰りで温泉に行ってきただけですよ。",
        meaning: "Although I went on a trip, I only went to a hot spring for a day trip."
      },
      {
        sentence: "昨日買った本は、[古本]{といっても}新品のようなきれいさだった。",
        meaning: "Although the book I bought yesterday is secondhand, it was as clean as a new one."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "日帰り", kana: "ひがえり", english: "day trip" },
      { kanji: "古本", kana: "ふるほん", english: "secondhand book" },
      { kanji: "新品", kana: "しんぴん", english: "new product" }
    ]
  },
  {
    id: 37,
    grammar: "〜こそ〜が",
    imi: "〜は〜だけど",
    explanation: "この文法は「～は～だけど」という意味です。～はそうであるけれども、実際には反対のことが起こる・そう感じると言いたい時に使う文法です。\nThis grammar means 'although ~ is ~'. It is used when you want to say that although something is the case, in reality, the opposite happens or you feel differently.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["こそ" ],
      secondsForm: [{ name: "普通形", connector: "が" }]
    },
    examples: [
      {
        sentence: "今は[力]{こそ}[弱い]{が}、これからトレーニングすれば彼は素晴らしい選手になるだろう。",
        meaning: "Although he is weak now, if he trains from now on, he will probably become a great athlete.",
        point: "力は弱いけど。。。",
      },
      {
        sentence: "あそこのラーメン屋さんは[サービス]{こそ}[悪い]{が}、行列ができるほどおいしいそうだ。",
        meaning: "Although the service at that ramen shop is bad, it is said to be so delicious that there is a line."
      },
      {
        sentence: "埼玉県は[名産品]{こそ}[ない]{が}、都心にも近くて便利なところである。",
        meaning: "Although Saitama Prefecture does not have any famous products, it is close to the city center and a convenient place."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "素晴らしい", kana: "すばらしい", english: "wonderful" },
      { kanji: "埼玉県", kana: "さいたまけん", english: "Saitama Prefecture" },
      { kanji: "名産品", kana: "めいさんひん", english: "famous products" },
      { kanji: "都心", kana: "としん", english: "city center"}
    ]
  },
  {
    id: 38,
    grammar: "〜からといって",
    imi: "〜という理由だけでは判断できない",
    explanation: "この文法は「～という理由だけでは判断できない」という意味です。～だからといって、必ずしもそうだとは限らない・そうではないと言いたい時に使う文法です。\nThis grammar means 'just because ~, it does not necessarily mean that...'. It is used when you want to say that just because something is the case, it does not necessarily mean that it is so or that it is not so.",
    extraInfo: "このからといっての後には「とは限らない」とか「わけではない」と続くことが多いです。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "である" }],
      pattern: ["からといって"],
    },
    examples: [
      {
        sentence: "勉強したからといって合格できるとは限らない。",
        meaning: "Just because you studied doesn't mean you will definitely pass."
      },
      {
        sentence: "[留学した]{からといって}、英語が話せるようになる[わけではない]。",
        meaning: "Just because you study abroad doesn't mean you will be able to speak English."
      },
      {
        sentence: "体に良いと[言われている]{からといって}、この野菜を食べるだけで健康になるとは言えない。",
        meaning: "Just because it is said to be good for the body, it does not mean that you will become healthy just by eating this vegetable."
      },
      {
        sentence: "[日本人である]{からといって}漢字を全部知っているとは[限らない]。",
        meaning: "Just because someone is Japanese doesn't mean they know all the kanji."
      },
      {
        sentence: "水だからといって飲みすぎたら死んじゃうんだよ。",
        meaning: "Just because it's water doesn't mean you won't die if you drink too much."
      }
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "判断", kana: "はんだん", english: "judgment" },
      { kanji: "限る", kana: "かぎる", english: "to limit" },
    ],
  },
  {
    id: 39,
    grammar: "〜かというと",
    imi: "〜と聞かれたら、そうではない",
    explanation: "～だと思う人もいるかもしれないが、実際にはそうではないと言いたい時に使う文法です。\nThis grammar means 'if asked whether ~, it is not so'. It is used when you want to say that while some people may think that something is the case, in reality, it is not so.",
    usage: {
      form: [{ name: "普通形", connector: "（の）" }, { name: "名詞", connector: "なの" }, { name: "な形容詞", connector: "なの" }],
      pattern: ["かというと", "かといえば" ],
    },
    examples: [
      {
        sentence: "一生懸命勉強すれば必ず試験に[合格する]{かというと}、そんなことはない。",
        meaning: "Just because you study hard doesn't necessarily mean you will pass the exam."
      },
      {
        sentence: "日本人は全員わさびが[好き]{かといえば}、そんなことはない。",
        meaning: "Not all Japanese people like wasabi."
      },
      {
        sentence: "大学を卒業すれば誰でも[就職できる]{かというと}、そうではない。",
        meaning: "Just because you graduate from university doesn't mean you can get a job."
      },
      {
        sentence: "3食全部パスタかというと、そんなことはないよ。たまにはお肉も食べるよ。",
        meaning: "I don't eat pasta for all three meals. Sometimes I also eat meat."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "一生懸命", kana: "いっしょうけんめい", english: "with utmost effort" },
      { kanji: "就職", kana: "しゅうしょく", english: "employment" },
      { kanji: "食全部", kana: "しょくぜんぶ", english: "all meals" }
    ]
  },
  {
    id: 40,
    grammar: "〜一方",
    imi: "① 〜とは反対に\n② 〜とは別の面もある",
    explanation: "一方というのは、1つの方向という意味ですからこっちではない部分があるとかこっちとは反対の部分があるという意味の文法です。\nThis grammar means 'on the other hand' or 'there is also another aspect'. Since '一方' means 'one direction', it implies that there is a part that is not this way or a part that is opposite to this way.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "の・である" }, { name: "な形容詞", connector: "な・である" }],
      pattern: ["一方（で）" ],
    },
    examples: [
      {
        sentence: "外国を飛び回って仕事をする人が[いる]{一方で}、自分の国から一度も出たことがない人もいる。",
        meaning: "While some people travel around the world for work, there are also people who have never left their own country."
      },
      {
        sentence: "一人暮らしは[自由である]{一方}、病気になった時は少し心配だ。",
        meaning: "Living alone gives freedom, but it is a little worrisome when you get sick."
      },
      {
        sentence: "僕は生まれたときから不自由ない暮らしをしてきた。[その]{一方で}、ずっと貧しい生活を送っている人もいる。",
        meaning: "I have lived a comfortable life since I was born. On the other hand, there are people who have been living in poverty all along."
      },
      {
        sentence: "ゆか先生は標準語で日本語を教える一方、普段は関西弁で話しています。",
        meaning: "Yuka-sensei teaches Japanese in standard Japanese, but usually speaks in the Kansai dialect."
      },
    ],
    category: GrammarEntryCategory.SETSUZOKU_RELATIONS,
    newWords: [
      { kanji: "一方", kana: "いっぽう", english: "on the other hand" },
      { kanji: "飛び回る", kana: "とびまわる", english: "to fly around" },
      { kanji: "不自由", kana: "ふじゆう", english: "inconvenience・disability" },
      { kanji: "貧しい", kana: "まずしい", english: "poor" },
      { kanji: "標準", kana: "ひょうじゅん", english: "standard" },
      { kanji: "関西弁", kana: "かんさいべん", english: "Kansai dialect"}
    ]
  },
  // SECTION 5: 悪い意味 - GRAMMAR 41 - 48
  {
    id: 41,
    grammar: "〜くせに",
    imi: "〜なのに",
    explanation: "人の悪いところ非難したりあとは自分の不満などを表すときに使います。\nThis grammar is used to criticize someone's bad points or to express one's own dissatisfaction.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "の" }, { name: "な形容詞", connector: "な" }],
      pattern: ["くせに"],
    },
    examples: [
      {
        sentence: "家事を何も[やらない]{くせに}私の弟は文句ばかり言っている。",
        meaning: "My younger brother does nothing around the house but just complains."
      },
      {
        sentence: "自分でやったことが[ない]{くせに}、偉そうにアドバイスしないでほしい。",
        meaning: "I don't want you to give advice arrogantly when you have never done it yourself."
      },
      {
        sentence: "本当は[元気な]{くせに}、弟は熱があると言って学校を休んだ。",
        meaning: "Although he was actually fine, my younger brother said he had a fever and took a day off from school."
      },
      {
        sentence: "私の兄は[大学生の]{くせに}、簡単な算数の問題も解けない。",
        meaning: "My older brother is a university student, but he can't even solve simple arithmetic problems."
      },
      {
        sentence: "全然[家事してない]{くせに}文句ばかり言わないでよ！",
        meaning: "You don't do any housework at all, so stop complaining!"
      }
    ],
    category: GrammarEntryCategory.BAD_MEANING,
    newWords: [
      { kanji: "非難", kana: "ひなん", english: "criticism" },
      { kanji: "不満", kana: "ふまん", english: "dissatisfaction"},
      { kanji: "文句", kana: "もんく", english: "complaint" },
      { kanji: "偉そう", kana: "えらそう", english: "arrogant" },
      { kanji: "算数", kana: "さんすう", english: "arithmetic"},
      { kanji: "解く", kana: "とく", english: "to solve" }
    ]
  },
  {
    id: 42,
    grammar: "〜っこない",
    imi: "絶対に　〜　できない",
    explanation: "会話で使う言い方。これはその人自身が本当に絶対にできない！というその人の判断をよく表している文法です。\nThis is a way of speaking used in conversation. This grammar often expresses the person's own judgment that they absolutely cannot do something!",
    usage: {
      form: [{ name: "V.　ます STEM" }],
      pattern: ["っこない"],
    },
    examples: [
      {
        sentence: "JLPTのN1になんて合格できっこない。",
        meaning: "There is no way I can pass the JLPT N1.",
        point: "もう絶対に合格できない！って意味になる。",
      },
      {
        sentence: "全然勉強してないあいつが試験を受けても、[受かり]{っこない}よ。",
        meaning: "There is no way that guy who hasn't studied at all will pass the exam."
      },
      {
        sentence: "運転[でき]{っこない}と言っていたけど、やってみたら意外と簡単だったでしょう？",
        meaning: "He said there was no way he could drive, but it was surprisingly easy when he tried, wasn't it?"
      },
      {
        sentence: "歌手になんて[なれ]{っこない}ってわかっているけど、夢をあきらめられないんだ。",
        meaning: "I know there's no way I can become a singer, but I can't give up on my dream.",
        point: "歌手になることは絶対にできない！という意味",
      },
    ],
    category: GrammarEntryCategory.BAD_MEANING,
    newWords: [
      { kanji: "意外", kana: "いがい", english: "unexpected" },
    ]
  },
  {
    id: 43,
    grammar: "〜ていては",
    imi: "～をずっとしていたら、良い結果にならない",
    explanation: "こうであったら、良い結果にならない、目標としていることに到達できないと言いたいときに使います。\nThis grammar is used when you want to say that if you continue doing something, it will not lead to a good result or you will not reach your goal.",
    usage: {
      form: [{ name: "V. テ形" }],
      pattern: ["いては"],
    },
    examples: [
      {
        sentence: "少し疲れたくらいで[休憩して]{いては}、少しも作業が進まない。",
        meaning: "If you take a break just because you're a little tired, you won't make any progress at all."
      },
      {
        sentence: "毎日の睡眠時間を[削って]{いては}、仕事に集中できないし、体調を崩すよ。",
        meaning: "If you keep cutting down on your daily sleep time, you won't be able to concentrate on work and you'll ruin your health."
      },
      {
        sentence: "そんな風にむだづかいしていては、お金が必要になったときに困るよ。",
        meaning: "If you keep wasting money like that, you'll be in trouble when you need it."
      },
      {
        sentence: "ゴキブリが出てきたくらいで[こわがって]{いては}、一人暮らしはできないよ。",
        meaning: "If you get scared just because a cockroach appears, you can't live alone."
      },
    ],
    category: GrammarEntryCategory.BAD_MEANING,
    newWords: [
      { kanji: "休憩", kana: "きゅうけい", english: "break・rest" },
      { kanji: "作業", kana: "さぎょう", english: "work・operation" },
      { kanji: "進む", kana: "すすむ", english: "to advance・to progress" },
      { kanji: "睡眠", kana: "すいみん", english: "sleep" },
      { kanji: "睡眠時間", kana: "すいみんじかん", english: "sleep time" },
      { kanji: "削る", kana: "けずる", english: "to cut down" },
      { kanji: "崩す", kana: "くずす", english: "to ruin・to break down"},
      { kanji: "無駄遣い", kana: "むだづかい", english: "wasteful spending"},
      { kanji: "ゴキブリ", kana: "", english: "cockroach"}
    ]
  },
  {
    id: 44,
    grammar: "〜ようでは",
    imi: "〜のままだと悪い結果になる",
    explanation: "相手を批判したりとか、悪く言いたいときに使う文法です。相手に注意をするときによく使われます。\n目上の人に使うときはちょっと注意してください。\nThis grammar is used to express that if a certain state or condition continues, it will lead to a bad result. It is often used to criticize or warn about negative consequences of continuing in a certain way.",
    extraInfo: "話し言葉だったら「〜ようじゃ」という言い方もよく使われます。",
    usage: {
      form: [{ name: "V. る" }, { name: "V. ない" }, { name: "V. ている" }],
      pattern: ["ようでは", "ようじゃ"],
    },
    examples: [
      {
        sentence: "そんなことを[している]{ようでは}、いつまでたっても立派な大人にはなれませんよ。",
        meaning: "If you keep doing things like that, you'll never become a respectable adult."
      },
      {
        sentence: "コンビニの店員さんと話すのも[恥ずかしがっている]{ようじゃ}、人前でプレゼンするのは難しいね。",
        meaning: "If you're too shy to even talk to a convenience store clerk, it's difficult to give a presentation in front of people."
      },
      {
        sentence: "こんな簡単な言葉も[覚えられない]{ようでは}、日本に行っても生活できないよ。",
        meaning: "If you can't even remember such simple words, you won't be able to live in Japan."
      },
      {
        sentence: "寝ながらポテチ食べてるようじゃムキムキの体にはなれないよー。",
        meaning: "If you eat potato chips while lying down, you won't be able to have a muscular body."
      },
    ],
    category: GrammarEntryCategory.BAD_MEANING,
    newWords: [
      { kanji: "立派な", kana: "りっぱな", english: "splendid・fine・respectable" },
      { kanji: "ポテチ", kana: "", english: "potato chips" },
    ]
  },
  {
    id: 45,
    grammar: "〜そうもない",
    imi: "〜する可能性が低い",
    explanation: "そのように見えないとかそのように思えないという意味です。\n特にこの文法は、可能形と一緒に使うことが多いです。\nThis grammar is used to express that the possibility of something happening is low. It indicates that it seems unlikely that a certain action will take place.",
    usage: {
      form: [{ name: "V. ます STEM" }, { name: "V. れる STEM" }],
      pattern: ["そう（に）もない", "そうにない"],
    },
    examples: [
      {
        sentence: "今日は娘の誕生日だから残業せずに家に帰りたいが、やることが多くて定時に[帰れ]{そうにない}。",
        meaning: "It's my daughter's birthday today, so I want to go home without working overtime, but there are so many things to do that it seems unlikely I'll be able to leave on time."
      },
      {
        sentence: "9月になってもまだ暑くて、まだまだ[涼しくなり]{そうもない}。",
        meaning: "It is still hot even though it is September, and it seems unlikely to get cooler anytime soon."
      },
      {
        sentence: "思っていたより宿題の量が多くて、明日までに[終わり]{そうもない}。",
        meaning: "There is more homework than I thought, and it seems unlikely that I will finish it by tomorrow."
      },
      {
        sentence: "ああ〜今日は[寝られ]{そうにないな・・・}。",
        meaning: "Ah, it seems like I won't be able to sleep today..."
      },
    ],
    category: GrammarEntryCategory.BAD_MEANING,
    newWords: [
      { kanji: "定時", kana: "ていじ", english: "regular working hours" },
    ]
  },
  {
    id: 46,
    grammar: "〜あげく",
    imi: "〜した結果",
    explanation: "悪い結果になるときに使う。結果を表す文法なので「～末」という文法とほとんど同じです。結果を表すという意味では同じなんですが、この「〜末」「〜あげく」この2つが絶対に違うところは「あげく」の方は悪い結果を表すときに使います。だから、いろいろしたのに悪い結果になった言いたいときに使われる文法です。\nThis grammar is used when the result is bad. Since it expresses the result, it is almost the same as the grammar '～末'. While both express results, the key difference is that '〜あげく' is used specifically to indicate bad outcomes. Therefore, it is used when you want to say that despite doing various things, the result was negative.",
    usage: {
      form: [{ name: "V. た" }],
      pattern: ["あげく" ],
    },
    examples: [
      {
        sentence: "厳しい上司の命令で長時間[働いた]{あげく}、体調を崩して倒れてしまった。",
        meaning: "After working long hours under the orders of a strict boss, I ended up getting sick and collapsing."
      },
      {
        sentence: "4時間も[待たされた]{あげく}、彼女から「今日は行けない」と電話が来た。",
        meaning: "After being made to wait for 4 hours, I got a call from her saying 'I can't go today.'"
      },
      {
        sentence: "彼女は何を買うかさんざん悩んだあげく、何も買わなかった。",
        meaning: "After agonizing over what to buy, she ended up not buying anything."
      },
      {
        sentence: "さんざん[迷った]{あげく}何も食べないの？",
        meaning: "After much hesitation, you don't eat anything?"
      },
    ],
    category: GrammarEntryCategory.BAD_MEANING,
    newWords: [
      { kanji: "厳しい", kana: "きびしい", english: "strict" },
      { kanji: "上司", kana: "じょうし", english: "boss" },
      { kanji: "命令", kana: "めいれい", english: "order" },
      { kanji: "長時間", kana: "ちょうじかん", english: "long time" },
      { kanji: "崩す", kana: "くずす", english: "to break down" },
      { kanji: "倒れる", kana: "たおれる", english: "to collapse" },
      { kanji: "さんざん", kana: "", english: "thoroughly・severely" },
      { kanji: "悩む", kana: "なやむ", english: "to worry" },
    ]
  },
  {
    id: 47,
    grammar: "〜ばかりに",
    imi: "〜だから",
    explanation: "この文法は、だからって意味なんですが後ろは必ず悪いことが起こります。これが原因で悪い結果になったと言いたいときに使われる文法です。\nThis grammar means 'because ~', but it is always followed by something bad happening. It is used when you want to say that something bad happened as a result of this cause.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "な・である" }],
      pattern: ["ばかりに" ],
    },
    examples: [
      {
        sentence: "上司に[反抗した]{ばかりに}、プロジェクトのメンバーから外されてしまった。",
        meaning: "Because I rebelled against my boss, I was removed from the project team."
      },
      {
        sentence: "家が[貧乏である]{ばかりに}、彼は成績が良いのに大学に進学することができなかった。",
        meaning: "Because his family was poor, he couldn't go to university despite having good grades."
      },
      {
        sentence: "外国で慣れない料理を[食べた]{ばかりに}、お腹を壊してしまった。",
        meaning: "Because I ate unfamiliar food in a foreign country, I ended up getting a stomachache."
      },
      {
        sentence: "日本語が[使いこなせない]{ばかりに}また彼女を怒らせてしまった。",
        meaning: "Because I can't use Japanese well, I ended up making her angry again."
      },
    ],
    category: GrammarEntryCategory.BAD_MEANING,
    newWords: [
      { kanji: "反抗", kana: "はんこう", english: "rebellion" },
      { kanji: "外す", kana: "はずす", english: "to remove" },
      { kanji: "貧乏", kana: "びんぼう", english: "poverty" },
      { kanji: "進学", kana: "しんがく", english: "going on to higher education"},
      { kanji: "慣れない", kana: "なれない", english: "unfamiliar"},
      { kanji: "壊す", kana: "こわす", english: "to break" }
    ]
  },
  {
    id: 48,
    grammar: "〜たら、かえって",
    imi: "～したら、反対の結果になった",
    explanation: "～をしたら、反対の結果になったというときに使う文法です。特に悪い結果です。よくなると思ってやったのに反対に悪い結果になってしまった！と言いたいときによく使われます。\nThis grammar is used when you want to say that after doing something, the opposite result occurred, especially a bad one. It is often used when you thought things would get better, but instead, they turned out worse.",
    extraInfo: "悪い結果になるときによく使う。",
    usage: {
      form: [{ name: "V. たら" }],
      pattern: ["かえって" ],
    },
    examples: [
      {
        sentence: "故障したパソコンを自分で修理しようと[したら]、{かえって}ひどくなってしまった。",
        meaning: "After trying to repair the broken computer myself, it ended up getting worse."
      },
      {
        sentence: "叱られて落ち込む人もいるが、私は怒られたら、かえってやる気が出てくる。",
        meaning: "Some people get depressed when scolded, but when I am scolded, I actually feel more motivated."
      },
      {
        sentence: "窓をきれいにしようと思って[拭いたら]、{かえって}汚くなってしまった。",
        meaning: "I thought I would clean the window, but after wiping it, it actually became dirtier."
      },
      {
        sentence: "説明を[聞いたら]、{かえって}わからなくなっちゃったよ。",
        meaning: "After listening to the explanation, I actually ended up understanding less."
      },
      {
        sentence: "文法の意味とか接続を、調べれば調べるほどかえってわからなくなってしまうということはよくありますよね。",
        meaning: "It's common that the more you look up the meaning and connections of grammar, the less you understand, right?"
      }
    ],
    category: GrammarEntryCategory.BAD_MEANING,
    newWords: [
      { kanji: "故障", kana: "こしょう", english: "breakdown・failure" },
      { kanji: "叱る", kana: "しかる", english: "to scold" },
      { kanji: "落ち込む", kana: "おちこむ", english: "to get depressed" },
      { kanji: "怒る", kana: "おこる", english: "to get angry" },
      { kanji: "拭く", kana: "ふく", english: "to wipe" }
    ]
  },
  // SECTION 6: 強調 - GRAMMAR 49 - 58
  {
    id: 49,
    grammar: "〜あまり",
    imi: "とても 〜 で",
    explanation: "「〜あまり〜だ」というように後ろには結果を表す文章が続きます。〜あまりこうなってしっまったという風ようにととても〜でこうなってしっまったって意味になります。\nThis grammar is used in the form of '〜あまり〜だ', where the latter part expresses a result. It conveys the meaning that something happened as a result of being very ~.",
    extraInfo: "「～さ/〜み」でよく使われる。例えば：「悲しみあまり」「嬉しさあまり」など。",
    usage: {
      form: [{ name: "V. る" }, { name: "名詞", connector: "の" }, { name: "な形容詞", connector: "な" }],
      pattern: ["あまり" ],
    },
    examples: [
      {
        sentence: "大好きな人に見つめられて、[恥ずかしさの]{あまり}両手で顔を隠してしまった。",
        meaning: "Because I was stared at by someone I really like, I was so embarrassed that I hid my face with both hands."
      },
      {
        sentence: "新しい家が[快適な]{あまり}、友達と遊びに出かけることすら面倒になってしまった。",
        meaning: "Because the new house is so comfortable, I even find it bothersome to go out and play with friends."
      },
      {
        sentence: "母親は帰って来ない娘を[心配する]{あまり}、外へ探しに行った。",
        meaning: "Because the mother was so worried about her daughter not coming home, she went out to look for her."
      },
      {
        sentence: "おおお！美しさのあまり、勉強が手に付かない・・・！",
        meaning: "Because of overwhelming beauty, I can't concentrate on studying...!"
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "見つめる", kana: "みつめる", english: "to stare" },
      { kanji: "両手", kana: "りょうて", english: "both hands" },
      { kanji: "隠す", kana: "かくす", english: "to hide" },
      { kanji: "快適", kana: "かいてき", english: "comfortable" },
      { kanji: "面倒", kana: "めんどう", english: "troublesome" },
      { kanji: "美しい", kana: "うつくしい", english: "beautiful" },
      { kanji: "手に付く", kana: "てにつく", english: "to concentrate on" }
    ]
  },
  {
    id: 50,
    grammar: "〜のなんのって",
    imi: "とても 〜 だ",
    explanation: "のなんのって、ってもうそれが何？と思うような変な言葉なんですが、これは自分の気持ちを強調するときに使う文法です。\nとてもこうだ！気持ちが強すぎて自分の言葉ではうまく説明ができないくらいとてもこう思っていると言いたいときに使う文法です。\nうまく言えないというのが文法の形に表れています。「のなんのって」です。\nThis grammar is used to emphasize one's feelings. It expresses that one feels so strongly about something that they cannot adequately explain it in their own words.",
    extraInfo: "名詞は使えない。\nこの～のなんのってという文法は書き言葉というよりは話し言葉として使われます。ただ今の日本で、実際に会話の中でこの文法を使っている人はあまりいないです。\nMostly used in animes and mangas.",
    usage: {
      form: [{ name: "普通形" }, { name: "な形容詞", connector: "な" }],
      pattern: ["のなんのって" ],
    },
    examples: [
      {
        sentence: "椅子に足の小指をぶつけてしまって、[痛い]{のなんのって}、しばらく動けなかった。",
        meaning: "I hit my little toe on the chair, and it was so painful that I couldn't move for a while."
      },
      {
        sentence: "毎日気温が37度もあって、もう[暑い]{のなんのって}。",
        meaning: "It's been 37 degrees every day, and it's unbearably hot."
      },
      {
        sentence: "最近の携帯電話は画面が小さくて[使いにくい]{のなんのって}、使うたびにいらいらして嫌になるよ。",
        meaning: "Recent mobile phones have small screens and are so difficult to use that I get frustrated every time I use them."
      },
      {
        sentence: "いやー、ゆか先生こわいよねー。なんかさ、単語覚える！とか、あと、漢字覚える！ってもう本当に[うるさい]{のなんのって}。もう本当に嫌なんだよね。",
        meaning: "Yeah, Yuka-sensei is scary, right? Like, 'Remember the vocabulary!' and 'Remember the kanji!' She's really noisy, you know. I really hate it."
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "椅子", kana: "いす", english: "chair" },
      { kanji: "足の小指", kana: "あしのこゆび", english: "little toe" },
      { kanji: "画面", kana: "がめん", english: "screen" },
      { kanji: "嫌", kana: "いや", english: "dislike" }
    ]
  },
  {
    id: 51,
    grammar: "〜てならない",
    imi: "とても 〜 だ",
    explanation: "この文法はとても～だというふうに、自分の気持ちを強調したいときに使われる文法です。\n感情を表す言葉が一緒につきます。くやしくてならないとか不思議でならない、このようにとてもこう思うというふうに気持ちを強調するための文法です。\nThis grammar is used to strongly emphasize one's feelings. It is often used with words that express emotions, such as 'I am extremely frustrated' or 'I am extremely curious', to emphasize how strongly one feels about something.",
    extraInfo: "この〜でならないという文法ちょっとかたい表現なので書き言葉でよく使われるんですが、例えば残念でなりません。こういう言い方だったら話し言葉でもたまに使われることがあります。\nIn spoken language, a more common expression is '〜でなりません' (e.g., '残念でなりません').",
    usage: {
      form: [{ name: "V. テ形" }, { name: "形容詞テ形" }],
      pattern: ["ならない" ],
    },
    examples: [
      {
        sentence: "一点足りなかったせいで試験に合格できなかったことが、[悔しくて]{ならない}。",
        meaning: "I am extremely frustrated that I couldn't pass the exam because I was one point short."
      },
      {
        sentence: "運動をするようになってから、毎日[お腹が空いて]{ならない}。",
        meaning: "Since I started exercising, I feel extremely hungry every day."
      },
      {
        sentence: "素晴らしい才能を持つ彼が20歳という若さで亡くなってしまい、[残念で]{ならない}。",
        meaning: "I am extremely disappointed that he, who had wonderful talent, passed away at the young age of 20."
      },
      {
        sentence: "いってらっしゃい！これからわざわざ遠くまで行って難しい試験を受けて試験に不合格になるために試験を受けに行くんだな〜。[残念で]{ならない}な〜。",
        meaning: "Have a good trip! You're going all the way to a far place to take a difficult exam just to fail it. I'm extremely disappointed."
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "悔しい", kana: "くやしい", english: "frustrating" },
      { kanji: "素晴らしい", kana: "すばらしい", english: "wonderful" },
      { kanji: "才能", kana: "さいのう", english: "talent" },
      { kanji: "亡くなる", kana: "なくなる", english: "to pass away"}
    ]
  },
  {
    id: 52,
    grammar: "〜てたまらない",
    imi: "我慢できないくらい、とても ～ だ",
    explanation: "自分の気持ちを強調するための文法です。この「たまらない」という言葉は我慢できないという意味です。それが我慢できないぐらい、それぐらい強くこう感じている、とてもこうだ！と言いたいときに使う文法です。ちなみにこのたまらないという文法は～で仕方がないとか、～でしょうがないという言い方に言いかえても OK です。\nThis grammar is used to strongly emphasize one's feelings. The word 'たまらない' means 'unbearable' or 'cannot be endured'. It is used when you want to express that you feel something so strongly that it is unbearable. This expression can also be replaced with '～で仕方がない' or '～でしょうがない'.",
    extraInfo: "「～て～てたまらない」の言い方もある",
    usage: {
      form: [{ name: "V. テ形"}, { name: "V. たいテ形"}, { name: "形容詞テ形" }],
      pattern: ["たまらない" ],
    },
    examples: [
      {
        sentence: "ここーか月は痩せるために野菜ばかり食べていたので、お菓子が[食べたくて]{たまらない}。",
        meaning: "For the past few months, I have been eating mostly vegetables to lose weight, so I really want to eat sweets."
      },
      {
        sentence: "今日の試験が[不安]{で}[不安で]{たまらなくて}、全然眠れなかったよ。",
        meaning: "I was so anxious about today's exam that I couldn't sleep at all."
      },
      {
        sentence: "エアコンが壊れてしまい、部屋の中が[暑くて]{たまらない}。",
        meaning: "The air conditioner broke, and the room is unbearably hot."
      },
      {
        sentence: "私はあなたのことが[嫌い]{でたまらない}わ。",
        meaning: "I really dislike you."
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "痩せる", kana: "やせる", english: "to lose weight" },
      { kanji: "不安", kana: "ふあん", english: "anxiety" },
      { kanji: "壊れる", kana: "こわれる", english: "to break" }
    ]
  },
  {
    id: 53,
    grammar: "〜にほかならない",
    imi: "〜以外のものではない",
    explanation: "～以外のものではないというときに使う文法です。絶対にこれだ！と強調して言いたいときに使う。それ以外のものではない、つまり絶対にこれだ！というふうに強調して言いたいときに使われる文法です。\nThis grammar is used when you want to say that something is nothing other than ~. It is used to strongly emphasize that it is definitely this and nothing else.",
    extraInfo: "「～からにほかならない」と理由を強調する言い方もある。\nこの〜にほかならないという文法はかたい表現なのでこのような場面で日常生活で使うことはあまりないです。基本的には書き言葉でよく使われる文法です。\nThis grammar is a formal expression and is not commonly used in everyday life. It is primarily used in written language.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["にほかならない", "からにほかならない" ],
    },
    examples: [
      {
        sentence: "何も言わずに突然会社を辞めるなんて、彼のやったことは[無責任]{にほかならない}。",
        meaning: "Quitting the company suddenly without saying anything is nothing other than irresponsible."
      },
      {
        sentence: "人の本当の気持ちが出るのは、言葉ではなく[態度]{にほかならない}。",
        meaning: "The true feelings of a person are nothing other than shown through their attitude, not their words."
      },
      {
        sentence: "僕が資格試験に合格したのは、母の支えが[あった]{からにほかならない}。",
        meaning: "The reason I passed the qualification exam is nothing other than the support of my mother."
      },
      {
        sentence: "[迷惑]{にほかならない}な。",
        meaning: "It is nothing other than a nuisance."
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "無責任", kana: "むせきにん", english: "irresponsible" },
      { kanji: "態度", kana: "たいど", english: "attitude" },
      { kanji: "資格", kana: "しかく", english: "qualification" },
      { kanji: "支える", kana: "ささえる", english: "to support" },
      { kanji: "迷惑", kana: "めいわく", english: "nuisance" }
    ]
  },
  {
    id: 54,
    grammar: "〜こそ",
    imi: "〜は！",
    explanation: "この名詞を強調するときに使います。例えばずっと受験に失敗していた人は3回ぐらい受験に失敗していて次こそは合格してみせるとか来年こそは大学に入ってみせる！と言うことができます。これは次とか来年、これを強調しています。来年がとても大切で、来年は絶対に合格するという気持ちそれを強調している時に使います。\nThis grammar is used to emphasize a noun. For example, a person who has failed the entrance exam multiple times might say, 'I will definitely pass the exam next time!' or 'I will definitely enter university next year!' Here, 'next time' or 'next year' is being emphasized. It is used when you want to strongly express that something is very important and that you are determined to achieve it.",
    extraInfo: "「～からこそ」と理由を強調する言い方もある。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["こそ", "からこそ" ],
    },
    examples: [
      {
        sentence: "彼はみんなに「[今年]{こそ}試験に合格する」と言っていたが、また不合格だったらしい。",
        meaning: "He told everyone, 'I will definitely pass the exam this year,' but it seems he failed again."
      },
      {
        sentence: "たくさんのつらい[経験をした]{からこそ}、彼女は人に優しいのだろう。",
        meaning: "It is precisely because she has had many painful experiences that she is kind to others."
      },
      {
        sentence: "[今日]{こそ}彼女に気持ちを伝えようと思ったが、また今日も言えなかった。",
        meaning: "I thought I would tell her how I feel today for sure, but I couldn't say it again today.",
        point: "昨日もおとといも、その前もずっと告白しようと思っていたんだけどできませんでした。でも今日こそ(今日は絶対に)好きだと言おうと決意している文章です。",
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "辛い", kana: "つらい", english: "painful" },
      { kanji: "告白", kana: "こくはく", english: "confession" },
    ]
  },
  {
    id: 55,
    grammar: "〜まい",
    imi: "① 〜ないだろう\n② 絶対 〜 ない",
    explanation: "これは簡単に言うと「ない」と同じ意味で否定の意味を表す文法です。でも使い方が2つあります。\n1つめはないだろうと予想して言う時の言い方、そして2つめは絶対にないと強い気持ちを表す言い方です。\n例えば、1つめの「ないだろう」というのは、朝外に出て、中から外に出てあぁ今日は晴れているなと思ったら今日は雨は降るまいと言うことができます。これは今日は雨は降らないだろうという意味でその状況から考えて予想して雨は降るまいつまり雨は降らないだろうと言っているんです。\n2つめ「絶対にない」と強い気持ちを表すときの言い方、これは例えば今日会社で嫌なことがあってすごく考えてしまう。でももう考えまい！考えまい！、これはもう考えないようにしよう。「考えない考えない！」と自分で強い気持ちを表して言っています。「もう絶対に考えない！」でも考えてしまう、でも絶対に考えない！と自分のことを言っている文になります。\nThis grammar is used to express negation, similar to 'ない', but it has two different usages. The first usage is to express a prediction or assumption that something will not happen, like saying 'It probably won't rain today' based on the situation. The second usage is to express a strong determination not to do something, like saying 'I will definitely not think about it anymore!' as a way of convincing oneself to stop thinking about something unpleasant.\n来る = くるまい or こまい\nする = すまい or しまい",
    extraInfo: "この2つめの意味の「まい」は自分の意志を表す文法ですから自分のことを言うと覚えておきましょう。",
    usage: {
      form: [{ name: "V. る" }, { name: "V. ます STEM" }],
      pattern: ["まい" ],
    },
    examples: [
      {
        sentence: "料理の味も店員の態度も悪いこんな店には、もう二度と[来る]{まい}。",
        meaning: "I will never come to such a restaurant again where both the food and the staff's attitude are bad.",
        point: "もう絶対に来ないという意味だ。",
      },
      {
        sentence: "いつも嘘ばかりついている彼の言うことなんか、誰も[信じ]{まい}。",
        meaning: "No one will believe what he says because he always lies.",
        point: "誰も信じないだろうという予想を表している。",
      },
      {
        sentence: "頭の良い彼女には、試験に落ちた私の気持ちなんて[わかる]{まい}。",
        meaning: "A smart person like her probably doesn't understand how I feel after failing the exam."
      },
      {
        sentence: "今日の授業は[諦めるしかある]{まい}。",
        meaning: "I guess I have no choice but to give up on today's class."
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "否定", kana: "ひてい", english: "negation" },
      { kanji: "態度", kana: "たいど", english: "attitude" },
      { kanji: "嘘", kana: "うそ", english: "lie" }
    ]
  },
  {
    id: 56,
    grammar: "〜てでも",
    imi: "〜しても",
    explanation: "これは普通はしない方法を使っても～がしたい！など自分の気持ちを強く表す文法です。\nThis grammar is used to strongly express one's feelings, such as wanting to do something even if it means using an unusual method that one normally wouldn't use.",
    usage: {
      form: [{ name: "V. テ" }],
      pattern: ["でも"],
    },
    examples: [
      {
        sentence: "このお店のラーメンは最高においしいので、一時間[待って]{でも}食べたい。",
        meaning: "The ramen at this shop is so delicious that I want to eat it even if I have to wait for an hour.",
        point: "普通はラーメンを食べるのに1時間も待ちたくないですよね。でもこのラーメンはそれぐらいおいしいから1時間待ってでも食べたい！という意味です。",
      },
      {
        sentence: "僕は彼女と[別れて]{でも}、この夢をかなえたかった。",
        meaning: "I wanted to achieve this dream even if it meant breaking up with my girlfriend."
      },
      {
        sentence: "今の安定した生活を[捨てて]{でも}やりたいことがあると言って、彼はアフリカへ行った。",
        meaning: "He said he had something he wanted to do even if it meant giving up his stable life, and he went to Africa."
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "別れる", kana: "わかれる", english: "to break up" },
    ]
  },
  {
    id: 57,
    grammar: "〜というより",
    imi: "〜ではなくて",
    explanation: "これは～ではなくて、もっとぴったりな言い方があると言いたいときに使います。AというよりBで、Aという言い方よりBという言い方をした方がいいということです。\nThis grammar is used when you want to say that there is a more appropriate way to express something than the one being used. It is used in the form of 'AというよりB', meaning that it is better to use expression B rather than expression A.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "（である）" }, { name: "な形容詞", connector: "（である）" }],
      pattern: ["というより" ],
    },
    examples: [
      {
        sentence: "私と弟はとても仲が良くて兄弟というより[親友]{というより}という感じだ。",
        meaning: "My younger brother and I are very close, and it feels more like we are best friends rather than siblings.",
        point: "兄弟なんだけれども、兄弟という言い方よりももっとぴったりな言い方は親友だ。",
      },
      {
        sentence: "彼とは性格も趣味も似ていて、[恋人]{というより}友達のような関係だ。",
        meaning: "He and I have similar personalities and hobbies, and our relationship feels more like friends rather than lovers."
      },
      {
        sentence: "日本語を勉強しているときは、[努力している]{というより}遊んでいるような気持ちになる。",
        meaning: "When studying Japanese, it feels more like playing rather than making an effort."
      },
      {
        sentence: "彼の話し方は、[おもしろい]{というより}下品だ。",
        meaning: "His way of speaking is more vulgar than funny."
      },
      {
        sentence: "私たち[同僚]{というより}友人です。",
        meaning: "We are more like friends than colleagues."
      }
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "性格", kana: "せいかく", english: "personality" },
      { kanji: "似てる", kana: "にてる", english: "to resemble" },
      { kanji: "下品", kana: "げひん", english: "vulgar" },
      { kanji: "同僚", kana: "どうりょう", english: "work colleague"}
    ]
  },
  {
    id: 58,
    grammar: "〜に決まっている",
    imi: "絶対〜だ！",
    explanation: "これは絶対に〜だとか必ず〜だというふうに、話している人が断定する言い方です。\nThis grammar is used to strongly assert that something is definitely or certainly the case.",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "（である）" }, { name: "な形容詞", connector: "（である）" }],
      pattern: ["に決まっている" ],
    },
    examples: [
      {
        sentence: "コンビニでお弁当を買うよりスーパーに行った方が[安い]{に決まっている}。",
        meaning: "It's definitely cheaper to go to the supermarket than to buy a bento at the convenience store.",
        point: "これはその人がスーパーに行った方が安いとじていて、絶対にそうだと思っている気持ちを表しています。",
      },
      {
        sentence: "あんなに休まず働き続けていたら、そのうち[倒れる]{に決まっている}。",
        meaning: "If you keep working without rest like that, you'll definitely collapse eventually."
      },
      {
        sentence: "毎日コンビニでランチを買っていたら、食費が[高くつく]{に決まっている}よ。",
        meaning: "If you buy lunch at a convenience store every day, your food expenses will definitely be high."
      },
      {
        sentence: "佐藤さんが主役の映画だって。こんなの[面白い]{に決まってる}じゃん！",
        meaning: "That movie starring Sato-san as the lead is definitely going to be interesting!"
      },
    ],
    category: GrammarEntryCategory.EMPHASIS,
    newWords: [
      { kanji: "断定", kana: "だんてい", english: "assertion" },
      { kanji: "倒れる", kana: "たおれる", english: "to collapse" },
      { kanji: "食費", kana: "しょくひ", english: "food expenses" },
      { kanji: "主役", kana: "しゅやく", english: "lead role"}
    ]
  },
  // SECTION 7: 時間 - GRAMMAR 59 - 67
  {
    id: 59,
    grammar: "〜最中",
    imi: "〜しているところ",
    explanation: "今、まさにそれをしているんだと言いたいときに使う文法です。\nThis grammar is used when you want to say that you are in the middle of doing something right now.",
    usage: {
      form: [{ name: "V. ている" }, { name: "名詞", connector: "の" }],
      pattern: ["最中（に）"],
    },
    examples: [
      {
        sentence: "会社で[プレゼンをしている]{最中に}、突然頭が痛くなり倒れてしまった。",
        meaning: "I was in the middle of giving a presentation at work when suddenly I got a headache and collapsed."
      },
      {
        sentence: "[シャワーの]{最中に}、誰かが訪ねてきて困った。",
        meaning: "I was in the middle of taking a shower when someone came to visit, and I was troubled."
      },
      {
        sentence: "試験を[受けている]{最中に}、突然停電した。",
        meaning: "I was in the middle of taking an exam when suddenly the power went out."
      },
      {
        sentence: "[食べてる]{最中に}話しかけないで。",
        meaning: "Don't talk to me while I'm eating."
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "まさに", kana: "まさに", english: "exactly・just・right" },
      { kanji: "訪ねる", kana: "たずねる", english: "to visit" },
      { kanji: "停電", kana: "ていでん", english: "power outage" }
    ]
  },
  {
    id: 60,
    grammar: "〜かと思うと",
    imi: "〜したあとすぐ",
    explanation: "この文法は～すると、すぐという意味です。～をした後すぐに、これをする。ほぼ同時ぐらい、それくらい間をあけずに何か別の行動をすると言いたい時に使う文法です。\nThis grammar means 'immediately after doing ~'. It is used when you want to express that you do something else almost simultaneously or without much delay after doing something.",
    extraInfo: "この文法は自分のことには使えないので注意してください。",
    usage: {
      form: [{ name: "V. た" }],
      pattern: [ "かと思うと", "かと思ったら" ],
    },
    examples: [
      {
        sentence: "彼はテーブルにある料理を全部食べ[終わった]{かと思うと}、さらに料理を注文し始めた。",
        meaning: "Just as he finished eating all the food on the table, he started ordering more food."
      },
      {
        sentence: "友人はアメリカに[留学した]{かと思ったら}、今度はフィリピンに住むらしい。",
        meaning: "Just as my friend studied abroad in America, it seems they will now live in the Philippines."
      },
      {
        sentence: "ベトナムの天気は不安定で、大雨が[降った]{かと思ったら}すぐに晴れることがよくある。",
        meaning: "The weather in Vietnam is unstable, and it often clears up immediately after heavy rain."
      },
      {
        sentence: "[帰ってきた]{かと思うと}、また出かけてしまう。",
        meaning: "Just as she came back, she goes out again."
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "ほぼ", kana: "", english: "almost" },
      { kanji: "さらに", kana: "", english: "furthermore" },
      { kanji: "xx", kana: "xx", english: "xx" }
    ]
  },
  {
    id: 61,
    grammar: "〜か 〜ないかのうちに",
    imi: "～し終わらないくらい、すぐに",
    explanation: "この文法は～の後すぐに、という意味です。～をした後すぐに別のことが起きる。別のことをすると言いたいときに使う文法です。この「〜か」の、〜の部分には動作を表す言葉が入ります。この動作が終わるか終わらないかのうちにという意味です。つまりこの動作が完全に終わらないくらいそれぐらいすぐだと言いたい文法です。\nThis grammar means 'immediately after ~'. It is used when you want to express that something else happens or you do something else right after completing an action. The '〜か' part is filled with a verb that represents an action. It conveys the meaning that the action is completed or almost completed, indicating that the subsequent event happens very quickly after the action.",
    extraInfo: "この動詞のところには同じ動詞が入ります。\n The same verb is used in both parts of the sentence.",
    usage: {
      form: [{ name: "V. る", connector: "か"  }, { name: "V. た", connector: "か" }],
      pattern: ["V. ない　＋　かのうちに" ],
    },
    examples: [
      {
        sentence: "コップの中のビールを[飲む]{か}[飲まない]{かのうちに}、酔っ払って顔が真っ赤になってしまった。",
        meaning: "As soon as I drank the beer in the glass, I got drunk and my face turned bright red."
      },
      {
        sentence: "信号が[青になる]{か}[青にならない]{かのうちに}、彼は道路を渡り出した。",
        meaning: "As soon as the traffic light turned green, he started crossing the road."
      },
      {
        sentence: "家に[着いた]{か}[着かない]{かのうちに}、急いでトイレへ入っていった。",
        meaning: "As soon as I arrived home, I hurried into the bathroom."
      },
      {
        sentence: "私が[答える]{か}[答えない]{かのうちに}話始めるのやめてくれない？",
        meaning: "Can you stop talking before I finish answering?"
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "動作", kana: "どうさ", english: "action" },
      { kanji: "酔っ払う", kana: "よっぱらう", english: "to get drunk" },
    ]
  },
  {
    id: 62,
    grammar: "〜たとたん",
    imi: "〜したあと、すぐ",
    explanation: "この文法は～した後すぐという意味があります。何かをした後、すぐに別のことが起きると言いたいときに使う文法です。\nThis grammar means 'immediately after ~'. It is used when you want to express that something else happens right after doing something.",
    usage: {
      form: [{ name: "V. た" }],
      pattern: ["とたん（に）" ],
    },
    examples: [
      {
        sentence: "よほど疲れていたのか、布団に入って[目を閉じた]{とたん}に眠ってしまった。",
        meaning: "Perhaps I was very tired, but as soon as I got into bed and closed my eyes, I fell asleep."
      },
      {
        sentence: "彼は[立ち上がった]{とたん}、気分が悪くなって倒れてしまった。",
        meaning: "As soon as he stood up, he felt sick and collapsed."
      },
      {
        sentence: "会社を[出た]{とたん}、大雨が降ってきた。",
        meaning: "As soon as I left the company, it started raining heavily."
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "よほど", kana: "", english: "very・greatly" },
      { kanji: "布団", kana: "ふとん", english: "futon・bedding" },
    ]
  },
  {
    id: 63,
    grammar: "〜上で",
    imi: "① 〜をするとき\n② 〜をした後",
    explanation: "この文法は〜という立場でとか～という状況でという意味です。「上で」という言葉は、物の上というふうに使うことが多いですよね。ただこの文法で使う場合は、物じゃなくてそういう状況とか立場の上でという意味になります。ですから意味としては〜するときとかもう1つは～した後という言い方になります。文法の「上で」というのは〜という立場・状況でという意味ですからする時ももしくは、した後この2つがあると覚えてください。\nThis grammar means 'in the situation of ~' or 'from the standpoint of ~'. The word '上で' is often used to refer to the top of something, but in this grammar, it refers to a situation or standpoint rather than a physical object. Therefore, it can mean either 'when doing ~' or 'after doing ~'. Remember that in this grammar, '上で' can refer to either the time of doing something or the time after having done something.",
    extraInfo: "名詞の接続でよく使われるのはご確認の上とか、ご相談の上とか、覚悟の上、こういう名詞がよく使われます。",
    usage: {
      form: [{ name: "① V. る" }, { name: "② V. た" }, { name: "② 名詞", connector: "の" }],
      pattern: ["上（で）" ],
    },
    examples: [
      {
        sentence: "社内で何度も[話し合いをした]{上で}、この商品を発売することが決定しました。",
        meaning: "After having many discussions within the company, it was decided to release this product."
      },
      {
        sentence: "家族と[相談の]{上}、一人暮らしをすることに決めました。",
        meaning: "After consulting with my family, I decided to live alone."
      },
      {
        sentence: "[仕事をする]{上で}大切なことは、責任感を持つことだ。",
        meaning: "An important thing when working is to have a sense of responsibility."
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "状況", kana: "じょうきょう", english: "situation" },
      { kanji: "確認", kana: "かくにん", english: "confirmation" },
      { kanji: "相談", kana: "そうだん", english: "consultation" },
      { kanji: "覚悟", kana: "かくご", english: "resolution" },
      { kanji: "発売", kana: "はつばい", english: "release (of a product)"},
      { kanji: "相談", kana: "そうだん", english: "consultation"},
      { kanji: "責任感", kana: "せきにんかん", english: "sense of responsibility" }
    ]
  },
  {
    id: 64,
    grammar: "〜ついでに",
    imi: "〜をするときに、別のこともする",
    explanation: "何か目的があってそのために一つ行動をしますよね。それはするときに一つの目的だけじゃなくてもう一つ別のことをするという意味です。",
    extraInfo: "この「ついでに」という文法は日常会話でもよく使います。",
    usage: {
      form: [{ name: "V. る" }, { name: "V. た" }, { name: "名詞", connector: "（ の ）" }],
      pattern: ["ついでに"],
    },
    examples: [
      {
        sentence: "[掃除の]{ついでに}、生活に必要のない無駄な物を全て捨てた。",
        meaning: "While cleaning, I threw away all the unnecessary items that were not needed for daily life."
      },
      {
        sentence: "コンビニに[行く]{ついでに}、電池も買ってきてくれない？",
        meaning: "While you're going to the convenience store, could you also buy some batteries?"
      },
      {
        sentence: "京都へ[出張した]{ついでに}、学生時代の友達に会ってきた。",
        meaning: "While on a business trip to Kyoto, I also met a friend from my student days."
      },
      {
        sentence: "あ、ちょっと。[立った]{ついでに}それ取って。",
        meaning: "Ah, While you're up, could you grab that for me?"
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "掃除", kana: "そうじ", english: "cleaning" },
      { kanji: "無駄な", kana: "むだな", english: "wasteful" },
    ]
  },
  {
    id: 65,
    grammar: "〜をかねて",
    imi: "〜も同時に行って",
    explanation: "この文法は～も同時に行なってという意味です。かねるという言葉は1つのものが2つの役割をするという意味があります。ですから〜をかねて〜するというふうに言った場合は2つのことを同時に行うという意味になります。\nThis grammar means 'to do ~ at the same time'. The word 'かねる' implies that one thing serves two roles. Therefore, when you say '〜をかねて〜する', it means to perform two actions simultaneously.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["をかねて"],
    },
    examples: [
      {
        sentence: "リスニングと会話の[練習]{をかねて}、日本のアニメをたくさん観ている。",
        meaning: "I watch a lot of Japanese anime to practice both listening and conversation."
      },
      {
        sentence: "ストレス[発散]{をかねて}、ジムに通っている。",
        meaning: "I go to the gym to relieve stress."
      },
      {
        sentence: "[節約とダイエット]{をかねて}、毎朝駅まで歩いている。",
        meaning: "I walk to the station every morning to save money and diet."
      },
      {
        sentence: "僕は日本語の[勉強]{もかねて}漫省を読んでいるんだよ。",
        meaning: "I read manga to study Japanese as well."
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "役割", kana: "やくわり", english: "role" },
      { kanji: "発散", kana: "はっさん", english: "relief" },
      { kanji: "節約", kana: "せつやく", english: "saving" },
    ]
  },
  {
    id: 66,
    grammar: "〜につけ",
    imi: "〜する度に",
    explanation: "この文法は～たびに、と同じです。これをするたびにいつも同じ気持ちになるとかいつも同じことが起こると言いたいときに使う文法です。この文法は、聞くけとか、見るにつけとか考えるにつけ、この3つの動詞がよく使われます。他にも使われるものはあるんですがこの3つは特によく使われるのでぜひ覚えてください。\nThis grammar is the same as '～たびに'. It is used when you want to express that the same feeling arises or the same thing happens every time you do something. This grammar is often used with the verbs '聞く', '見る', and '考える'. While there are other verbs that can be used, these three are particularly common, so be sure to remember them.",
    extraInfo: "「何かにつけて」この言い方もよく使われるのでぜひ覚えておいてください。",
    usage: {
      form: [{ name: "V. る" }],
      pattern: ["につけ（ て ）"],
    },
    examples: [
      {
        sentence: "片思い中の彼女のことを[考える]{につけ}、胸が締め付けられるような切ない気持ちになる。",
        meaning: "Every time I think about the girl I have a crush on, I feel a painful feeling as if my chest is being squeezed."
      },
      {
        sentence: "道で犬を[見かける]{につけ}、昔飼っていた愛犬のことを思い出す。",
        meaning: "Every time I see a dog on the street, I remember the dog I used to have."
      },
      {
        sentence: "彼は[何か]{につけ}文句を言ってくるので、皆から嫌われている。",
        meaning: "He complains about everything, so everyone dislikes him."
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "片思い中", kana: "かたおもいちゅう", english: "having a crush" },
      { kanji: "締め付ける", kana: "しめつける", english: "to tighten" },
      { kanji: "切ない", kana: "せつない", english: "painful・heartrending" },
      { kanji: "愛犬", kana: "あいけん", english: "beloved dog" }
    ]
  },
  {
    id: 67,
    grammar: "〜ぶりに",
    imi: "〜という長い時間が経って",
    explanation: "時間を表す文法なので、ここには1週間とか1年とか半年のように時間の長さを表す言葉が入ります。長い時間がたってという意味なんです例えば1週間と1年を比べたら1年の方が長いんじゃないかと思うかもしれません。でもこの文法では、話している人が長いと思っていればいいのでそれは話している人とかその状況によって1週間が長いと思うのか1年が長いと思うのかというのは変わってくると思います。ですからここには2日ぶりにとか、3日ぶりにのようにもう少し少ない数を入れても大丈夫です。\nThis grammar expresses time, so it is used with words that indicate the length of time, such as '1 week', '1 year', or 'half a year'. It means 'after a long time has passed'. For example, when comparing 1 week and 1 year, one might think that 1 year is longer. However, in this grammar, it is sufficient for the speaker to feel that the time is long. Therefore, whether 1 week or 1 year feels long can vary depending on the speaker and the situation. Thus, it is also acceptable to use smaller numbers like 'after 2 days' or 'after 3 days' here.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["ぶり（ に ）"],
    },
    examples: [
      {
        sentence: "同窓会で[10年]{ぶりに}親友と再会し、学生時代のように楽しく話をした。",
        meaning: "I reunited with my best friend at the alumni meeting after 10 years and had a fun conversation like in our student days."
      },
      {
        sentence: "けがの治療が終わり退院し、[一か月]{ぶりに}同僚に会うことができた。",
        meaning: "After finishing treatment for my injury and being discharged from the hospital, I was able to meet my colleagues after a month."
      },
      {
        sentence: "{久しぶりに}家へ帰ったら、飼っていたペットが大きく成長していて驚いた。",
        meaning: "I was surprised to see that the pet I used to have had grown significantly when I returned home after a long time."
      },
      {
        sentence: "このお店、[1年]{ぶりに}来たな～。変わってないな～。",
        meaning: "It's been a year since I last came to this shop. It hasn't changed at all."
      },
    ],
    category: GrammarEntryCategory.TIME,
    newWords: [
      { kanji: "経る", kana: "へる", english: "to pass (time)" },
      { kanji: "同窓会", kana: "どうそうかい", english: "alumni meeting" },
      { kanji: "再会", kana: "さいかい", english: "reunion" },
      { kanji: "退院", kana: "たいいん", english: "discharge from hospital" },
      { kanji: "治療", kana: "ちりょう", english: "treatment" },
      { kanji: "同僚", kana: "どうりょう", english: "colleague" },
      { kanji: "成長", kana: "せいちょう", english: "growth" },
      { kanji: "驚く", kana: "おどろく", english: "to be surprised" }
    ]
  },
  // SECTION 8: 基準・関連 - GRAMMAR 68 - 77
  {
    id: 68,
    grammar: "〜に反して",
    imi: "〜とは反対に",
    explanation: "この文字を見たらわかるように～とは反対にという意味です。\nAs you can see from the characters, it means 'in contrast to ~' or 'contrary to ~'.",
    extraInfo: "この名詞の部分なんですけど、基本的には何を使ってもいいんですが、よく使われる名詞がいくつかある。「予想に反して」、「期待に反して」、「命令に反して」、「希望に反して」とか。こういう名詞が一緒によく使われるのでぜひ覚えておいてください。\nRegarding the noun part, basically you can use anything, but there are some nouns that are often used together. For example, 'contrary to expectations', 'contrary to hopes', 'contrary to orders', etc. Please remember these commonly used nouns.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["に反して" ],
      combinedForms: [{ first: '名詞１', pattern: ['に反する'], second: '名詞２' }]
    },
    examples: [
      {
        sentence: "この会社では、上司の[命令]{に反する}[行動]をとることは絶対に許されない。",
        meaning: "In this company, taking actions contrary to the boss's orders is absolutely not allowed."
      },
      {
        sentence: "親の[期待]{に反して}、彼はピアニストにならずに歌手になった。",
        meaning: "Contrary to his parents' expectations, he became a singer instead of a pianist."
      },
      {
        sentence: "専門家の[予想]{に反して}、感染症は一年経った今でも拡大し続けている。",
        meaning: "Contrary to experts' predictions, the infectious disease has continued to spread even after a year."
      },
      {
        sentence: "教室の[ルール]{に反する}[人]は教室からおい出しますよ！",
        meaning: "People who go against the classroom rules will be kicked out of the classroom!"
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "行動", kana: "こうどう", english: "action" },
      { kanji: "許す", kana: "ゆるす", english: "to allow" },
      { kanji: "期待", kana: "きたい", english: "expectation" },
      { kanji: "予想", kana: "よそう", english: "prediction" },
      { kanji: "感染症", kana: "かんせんしょう", english: "infectious disease" },
      { kanji: "経つ", kana: "たつ", english: "to pass (time)" },
      { kanji: "拡大", kana: "かくだい", english: "expansion" },
    ]
  },
  {
    id: 69,
    grammar: "〜に応じて",
    imi: "〜に合わせて",
    explanation: "応じるというのは、相手の変化に対応するとかそれに合わせるという意味がありますから、この文法も～に合わせてという意味になります。\nThe verb '応じる' means to respond to or adapt to changes in the other party. Therefore, this grammar also means 'in accordance with ~' or 'according to ~'.",
    extraInfo: "この名詞の部分なんですけど、基本的には何を使ってもいいんですが、よく使われる名詞がいくつかある。「希望に応じて」、「変化に応じて」、「場所に応じて」、「状況に応じて」、「能力・経験に応じて」とか。こういう単語が一緒に使われる場合が多いです。\nRegarding the noun part, basically you can use anything, but there are some nouns that are often used together. For example, 'according to hopes', 'according to changes', 'according to location', 'according to situation', 'according to ability/experience', etc. These words are often used together.\n\nこの～に応じてという文法はかたい表現です。お知らせなどによく使われますね。かたい表現なので今のような場面だったら相手に応じて態度を変えてるね、よりも相手によって態度を変えてるね、の方が会話だったら自然になります。\nThis grammar '〜に応じて' is a formal expression. It is often used in announcements and similar contexts. Since it is a formal expression, in conversational situations like the current one, it would be more natural to say '相手によって態度を変えてるね' (changing attitude depending on the person) rather than '相手に応じて態度を変えてるね' (changing attitude according to the person).",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["に応じて" ],
      combinedForms: [{ first: '名詞１', pattern: ['に応じた'], second: '名詞２' }]
    },
    examples: [
      {
        sentence: "部下には、一人ひとりの[能力]{に応じた}[仕事]を任せることが大切だ。",
        meaning: "It is important to assign tasks to subordinates according to each individual's ability."
      },
      {
        sentence: "荷物の[大きさ]{に応じて}、配達の料金が異なります。",
        meaning: "The delivery fee varies according to the size of the luggage."
      },
      {
        sentence: "お客様の[要望]{に応じて}、営業時間を一時間延ばすことに決めた。",
        meaning: "We decided to extend the business hours by one hour according to customer requests."
      },
      {
        sentence: "あの女、[相手]{に応じて}態度を変えてるな・・・嫌なやつ。",
        meaning: "That woman changes her attitude according to the person she's dealing with... what an unpleasant person."
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "部下", kana: "ぶか", english: "subordinate" },
      { kanji: "能力", kana: "のうりょく", english: "ability" },
      { kanji: "任せる", kana: "まかせる", english: "to entrust" },
      { kanji: "異", kana: "こと", english: "difference" },
      { kanji: "要望", kana: "ようぼう", english: "request" },
      { kanji: "営業時間", kana: "えいぎょうじかん", english: "business hours"},
      { kanji: "延ばす", kana: "のばす", english: "to extend"}
    ]
  },
  {
    id: 70,
    grammar: "〜に加えて",
    imi: "〜だけでなく",
    explanation: "加えるというのは、何かに何かを足す、プラスする、という意味ですからこれだけじゃなくてこれも、という意味になります。\nThe verb '加える' means to add something to something else, so it conveys the meaning of 'not only this, but also this'.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["に加えて"],
    },
    examples: [
      {
        sentence: "外国語を習得するためには、単語の[暗記]{に加えて}会話の練習をすることがとても大切だ。",
        meaning: "It is very important to practice conversation in addition to memorizing vocabulary in order to acquire a foreign language."
      },
      {
        sentence: "本日、[入会金]{に加えて}、今月分の料金もお支払いいただきます。",
        meaning: "Today, in addition to the admission fee, you will also pay this month's fee."
      },
      {
        sentence: "症状をおさえるために、薬を[飲むこと]{に加えて}軽い運動もするようにしてください。",
        meaning: "In order to relieve symptoms, please take medicine and also do light exercise."
      },
      {
        sentence: "日本語の森は、[もりお]{に加えて}トリハダも仲間になってくれて、幸せだな～",
        meaning: "I am happy that Nihongo no Mori, in addition to Morio, has also welcomed Torihada as a member."
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "習得", kana: "しゅうとく", english: "acquisition" },
      { kanji: "入会金", kana: "にゅうかいきん", english: "admission fee" },
      { kanji: "月分", kana: "げつぶん", english: "monthly portion" },
      { kanji: "症状", kana: "しょうじょう", english: "symptom" },
      { kanji: "抑える", kana: "おさえる", english: "to suppress" },
      { kanji: "軽い", kana: "かるい", english: "light" },
      { kanji: "仲間", kana: "なかま", english: "companion" }
    ]
  },
  {
    id: 71,
    grammar: "〜に沿って",
    imi: "〜に合わせて",
    explanation: "まずこの「沿う」という言葉の意味なんですけど道路とか線路とか川がありますよね。そういうものの、すでにある形に合わせてこういうふうに行くこと、これ川に沿って歩くとか道に沿って歩くという言い方をします。道とか道路とか川という名詞が一緒についてその形に合わせるという意味があります。\n他に実際に目に見えないものだったら期待に沿ってとか、希望に沿ってとかお客様の要望に沿ってこのような言い方もよく使われます。\n従ってという言葉は、指示とか命令こうしなさい！と言うことに合わせるという意味で使われるんですが沿っての場合は、何か相手がしてほしいこと自分がしたいことのように、希望とか要望それに合わせるという意味でよく使われます。\n\nFirst, regarding the meaning of the word '沿う', there are roads, railways, and rivers. It refers to following the already existing shape of such things. For example, we say 'walk along the river' or 'walk along the road'. It conveys the meaning of following the shape of nouns like roads or rivers.\nAdditionally, for intangible things that cannot be seen, phrases like 'in line with expectations', 'in line with hopes', or 'in line with customer requests' are also commonly used.\nThe word '従って' is used to mean following instructions or orders, such as 'do this!'. However, in the case of '沿って', it is often used to mean aligning with desires or requests, such as what someone wants you to do or what you want to do.\nThis grammar is often used to express alignment with hopes or requests.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["に沿って" ],
      combinedForms: [{ first: '名詞１', pattern: ['に沿った'], second: '名詞２' }]
    },
    examples: [
      {
        sentence: "春になると[川]{に沿って}並んでいる桜の木が満開になって、とても美しい。",
        meaning: "The cherry trees lined up along the river are in full bloom in spring, and it is very beautiful."
      },
      {
        sentence: "[大通り]{に沿って}まっすぐ進むと、黄色い看板がありますのでそこを右に曲がってください。",
        meaning: "If you go straight along the main street, there is a yellow signboard, so please turn right there."
      },
      {
        sentence: "お客様のご[希望]{に沿った}{快適なお部屋}をご用意いたしました。",
        meaning: "We have prepared a comfortable room in accordance with the customer's wishes."
      },
      {
        sentence: "今日から君の[希望]{に沿って}デートプランを立てようと思う。",
        meaning: "From today, I plan to make a date plan according to your wishes."
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "沿う", kana: "そう", english: "to follow・to run along" },
      { kanji: "従う", kana: "したがう", english: "to obey・to follow" },
      { kanji: "桜", kana: "さくら", english: "cherry blossom" },
      { kanji: "満開", kana: "まんかい", english: "full bloom" },
      { kanji: "大通り", kana: "おおどおり", english: "main street" },
      { kanji: "進む", kana: "すすむ", english: "to advance・to proceed" },
      { kanji: "黄色い", kana: "きいろい", english: "yellow" },
      { kanji: "看板", kana: "かんばん", english: "signboard" },
      { kanji: "快適な", kana: "かいてきな", english: "comfortable"}
    ]
  },
  {
    id: 72,
    grammar: "〜に伴って",
    imi: "〜と一緒に",
    explanation: "同時に別のことが起きると言いたいときに使う。この伴うという言葉は一緒にという意味があります。だから～に伴って、これは～と一緒にという意味ですね。この文法は、これと一緒にこういうことが起きるとかこれと一緒にこちらも変化するというように何か状況が変わったり変化したり何かが起きるこれと一緒にこれも起きるこれと一緒にこれも変化するというふうに言いたい場合に使われる文法です。\nThis grammar is used when you want to express that something else happens simultaneously. The word '伴う' means 'together with'. Therefore, '〜に伴って' means 'together with ~'. This grammar is used when you want to say that something happens along with something else, or that something changes along with something else. It is used to express that when a situation changes or something happens, something else also happens or changes together with it.",
    extraInfo: "「に伴って」これは漢字で書かれる場合とひらがなで書かれる場合も多いのでどちらでもわかるようにしておきましょう。\n\nこの〜に伴ってという文法はかたい表現なのでこういう日常会話で使うことはほとんどありません。何か正式な場で話したり、書き言葉として使われることが多いです。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["に伴って", "に伴い" ],
      combinedForms: [{ first: '名詞１', pattern: ['に伴う'], second: '名詞２' }]
    },
    examples: [
      {
        sentence: "[就職]{に伴って}、田舎の街へ引っ越しすることになった。",
        meaning: "Due to getting a job, I had to move to a rural town."
      },
      {
        sentence: "台風の[接近]{に伴って}、雨と風が強くなってきた。",
        meaning: "As the typhoon approached, the rain and wind became stronger."
      },
      {
        sentence: "本日の授業では、[地球温暖化]{に伴う}[問題]についてお話します。",
        meaning: "In today's class, we will talk about the problems associated with global warming."
      },
      {
        sentence: "恋人との[お別れ]{に伴い}、日本語の勉強をやめることにしました。皮女が日本人だったので一生懸命勉強していたんですがもう必要ないですね！",
        meaning: "Due to parting with my lover, I decided to stop studying Japanese. Since my girlfriend was Japanese, I was studying hard, but now it's no longer necessary!"
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "伴う", kana: "ともなう", english: "to accompany・to bring with" },
      { kanji: "就職", kana: "しゅうしょく", english: "getting a job" },
      { kanji: "田舎", kana: "いなか", english: "rural area" },
      { kanji: "接近", kana: "せっきん", english: "approach" },
      { kanji: "地球温暖化", kana: "ちきゅうおんだんか", english: "global warming" },
      { kanji: "正式", kana: "せいしき", english: "formal" },
    ]
  },
  {
    id: 73,
    grammar: "〜において",
    imi: "〜で",
    explanation: "場所とか場面、あとは状況を表すときに使います。\nThis grammar is used to indicate a place, scene, or situation.",
    extraInfo: "これはかたい表現で日常的な会話には使われません。この〜においてというのは敬語と一緒に使ったり、あとは新聞とか小説などかたい表現だと覚えておきましょう。\n\nThis is a formal expression and is not used in everyday conversation. Remember that '〜において' is often used together with honorific language, as well as in formal writings such as newspapers and novels.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["において" ],
    },
    examples: [
      {
        sentence: "今日の会議は3階の[会議室]{において}行われます。",
        meaning: "Today's meeting will be held in the conference room on the third floor.",
        point: "今日の会議は3階の会議室で行われますという意味です。",
      },
      {
        sentence: "[人生]{において}最も大切なことは、失敗を恐れずチャレンジし続けることだ。",
        meaning: "The most important thing in life is to keep challenging yourself without fear of failure."
      },
      {
        sentence: "インターネットのない[時代]{において}、家族に連絡する方法は電話か手紙しかなかった。",
        meaning: "In the era without the internet, the only ways to contact family were by phone or letter."
      },
      {
        sentence: "明日[東京大学]{において}、村上教授の講演会が行われます。",
        meaning: "Professor Murakami's lecture will be held at the University of Tokyo tomorrow."
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "恐れる", kana: "おそれる", english: "to fear" },
      { kanji: "村上教授", kana: "むらかみきょうじゅ", english: "Professor Murakami" },
      { kanji: "講演会", kana: "こうえんかい", english: "lecture" }
    ]
  },
  {
    id: 74,
    grammar: "〜にかけては",
    imi: "〜については",
    explanation: "それに関してはよくできる！と言いたいときに使う。自慢したいこととか、これだけは誰にも負けないとても上手だと自信を持って言えることに対して使います。\nThis grammar is used when you want to say that you are good at something related to it! It is used for things you want to boast about or things you can confidently say you are very skilled at and won't lose to anyone else.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["にかけては" ],
    },
    examples: [
      {
        sentence: "私の母は[料理]{にかけては}誰にも負けない。",
        meaning: "My mother is unbeatable when it comes to cooking.",
        point: "私のお母さんは料理がとっても上手で誰よりも上手です。本当に上手だって自信を持って言えますという意味です。",
      },
      {
        sentence: "日本の[漫画とアニメ]{にかけては}、彼より詳しい人にこれまで出会ったことがない。",
        meaning: "I have never met anyone more knowledgeable about Japanese manga and anime than him."
      },
      {
        sentence: "選抜チームの中でも、[足の速さ]{にかけては}彼に勝てる人はいないだろう。",
        meaning: "There is probably no one in the selected team who can beat him in terms of speed."
      },
      {
        sentence: "彼は勉強はできないけれど、[音楽の知識]{にかけては}クラスで一番だ。",
        meaning: "He may not be good at studying, but when it comes to knowledge of music, he is the best in the class."
      },
      {
        sentence: "絵を[描くこと]{にかけては}ゆか先生の右にでるものはいないですね！",
        meaning: "When it comes to drawing, there is no one who can surpass Yuka-sensei!"
      }
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "選抜", kana: "せんばつ", english: "selection" },
      { kanji: "足の速さ", kana: "あしのはやさ", english: "speed" },
      { kanji: "勝てる", kana: "かてる", english: "can win" },
      { kanji: "知識", kana: "ちしき", english: "knowledge" },
      { kanji: "右に出る", kana: "みぎにでる", english: "to surpass" }
    ]
  },
  {
    id: 75,
    grammar: "〜をめぐって",
    imi: "〜について",
    explanation: "問題や争いが起きるときに使う。これは〜についてという意味で何かの話題を中心にして争いとか話し合いが起きると言いたいときに使います。\nThis grammar is used when a problem or dispute arises. It means 'about ~' and is used when you want to say that a dispute or discussion arises centered around a certain topic.",
    extraInfo: "ちょっとかたい表現なので日常的な話題に対してはあまり使うことはありません。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["をめぐって", "をめぐり" ],
      combinedForms: [{ first: '名詞１', pattern: ['をめぐる'], second: '名詞２' }]
    },
    examples: [
      {
        sentence: "[親の遺産]{をめぐって}、親戚同士の激しい争いが始まった。",
        meaning: "A fierce dispute began among relatives over the inheritance of the parents."
      },
      {
        sentence: "[大会の中止]{をめぐって}、たくさんの意見が寄せられた。",
        meaning: "Many opinions were gathered regarding the cancellation of the tournament."
      },
      {
        sentence: "住民の間で[ビルの建設]{をめぐる}対立が起こっている。",
        meaning: "A conflict has arisen among residents regarding the construction of the building."
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "遺産", kana: "いさん", english: "inheritance" },
      { kanji: "親戚同士", kana: "しんせきどうし", english: "relatives" },
      { kanji: "激しい", kana: "はげしい", english: "intense" },
      { kanji: "寄せる", kana: "よせる", english: "to gather" },
      { kanji: "建設", kana: "けんせつ", english: "construction" },
      { kanji: "対立", kana: "たいりつ", english: "conflict" }
    ]
  },
  {
    id: 76,
    grammar: "〜というと",
    imi: "〜について言うと",
    explanation: "意味は～について言うと、という意味で何かある言葉を言った時、もしくは聞いたときにパッと思い浮かべること、一番最初にイメージすることはこうですと言いたいときに使います。\nThe meaning is 'speaking of ~' or 'when it comes to ~'. It is used when you want to express what comes to mind or what you first imagine when you say or hear a certain word.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["というと", "といえば" ],
    },
    examples: [
      {
        sentence: "[漢字の勉強]{というと}嫌がる人が多いのですが、実はとてもおもしろいものです。",
        meaning: "Many people dislike studying kanji, but in reality, it is very interesting."
      },
      {
        sentence: "[北海道]{といえば}、じゃがいもやとうもろこしなどのおいしい食べ物を思い浮かべる。",
        meaning: "When it comes to Hokkaido, I think of delicious foods like potatoes and corn."
      },
      {
        sentence: "東京出身の人は[遠足]{というと}、京都や奈良へ行くらしい。",
        meaning: "People from Tokyo apparently think of going to Kyoto or Nara when it comes to excursions."
      },
      {
        sentence: "昔は海外で[一人暮らし]{というと}とても寂しかったが今はテレビ電話ができるので寂しくないですね。",
        meaning: "In the past, living alone overseas was very lonely, but now with video calls, it is not lonely."
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "じゃがいも", kana: "じゃがいも", english: "potato" },
      { kanji: "とうもろこし", kana: "とうもろこし", english: "corn" },
      { kanji: "遠足", kana: "えんそく", english: "excursion" },
      { kanji: "奈良", kana: "なら", english: "Nara"}
    ]
  },
  {
    id: 77,
    grammar: "〜とは",
    imi: "〜は",
    explanation: "言葉の意味を説明するときに使います。硬い言い方ので、〜ってとか、〜というのは、と言うことができます。でも話言葉じゃなくて書き言葉で言う時は〜とは、と言うことができます。\nThis grammar is used when explaining the meaning of a word. It is a formal expression, and you can also say '〜って' or '〜というのは'. However, when speaking in written language rather than spoken language, you can say '〜とは'.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["とは" ],
    },
    examples: [
      {
        sentence: "[仕事]{とは}、人の役に立つ代わりにお金をもらうという行為である。",
        meaning: "Work is the act of receiving money in exchange for being useful to others.",
        point: "これは「仕事とは」でも「仕事は」でも意味は全く同じなんですが「仕事とは」と言った方が少しかたい言い方になります。",
      },
      {
        sentence: "[梅雨]{とは}5月から7月の間にある、雨の多い時期のことです。",
        meaning: "The rainy season is the period with a lot of rain between May and July."
      },
      {
        sentence: "[ゴールデンウィーク]{とは}、毎年5月にある長い連休のことです。",
        meaning: "Golden Week is a long holiday that occurs every May."
      },
      {
        sentence: "[帰りしな]{とは}関西弁で帰ってくる途中という意味です。",
        meaning: "In Kansai dialect, '帰りしな' means on the way back."
      },
    ],
    category: GrammarEntryCategory.STANDARDS_AND_RELATIONS,
    newWords: [
      { kanji: "行為", kana: "こうい", english: "act・deed" },
      { kanji: "連休", kana: "れんきゅう", english: "consecutive holidays" },
    ]
  },
  // SECTION 9: 仮定・条件 - GRAMMAR 78 - 86
  {
    id: 78,
    grammar: "〜にしても",
    imi: "〜だと考えても",
    explanation: "この文法は～だとしてもという意味です。～にしてもというのは、たとえこうだったとしても言いたいことは変わらないとか結果は変わらないと言いたいときに使われる文法です。仮にこうだったとしても、私はこう思うというふうに自分の考えとか意見を述べるときによく使われます。\nThis grammar means 'even if ~ is the case'. It is used when you want to say that your opinion or the result does not change even if you consider it to be a certain way. It is often used when expressing your thoughts or opinions, such as 'even if it were the case that ~, I think this way'.",
    extraInfo: "この「それにしても」という言い方本当によく使われます。今のように「～と考えてもこうだ」という風に自分の意見を言いたいときにもよく使われますしあまり意味をもたない時もあります。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "である" }],
      pattern: ["にしても" ],
    },
    examples: [
      {
        sentence: "いくら素材が[良い]{にしても}、Tシャツ一枚で3万円は高すぎると思う。",
        meaning: "No matter how good the material is, I think 30,000 yen for a single T-shirt is too expensive."
      },
      {
        sentence: "いくら[慣れている]{にしても}、山では何があるかわかりませんから、必ず二人以上で行動しましょう。",
        meaning: "No matter how experienced you are, you never know what might happen in the mountains, so always go with at least one other person."
      },
      {
        sentence: "[未経験者である]{にしても}、基礎知識くらいは勉強してきてほしかった。",
        meaning: "Even if you are inexperienced, I wanted you to at least study the basic knowledge."
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "素材", kana: "そざい", english: "material" },
      { kanji: "未経験", kana: "みけいけん", english: "inexperience" },
      { kanji: "未経験者", kana: "みけいけんしゃ", english: "inexperienced person" },
      { kanji: "基礎", kana: "きそ", english: "foundation・basics" },
      { kanji: "基礎知識", kana: "きそちしき", english: "basic knowledge" },
    ],
    important: true,
  },
  {
    id: 79,
    grammar: "〜としても",
    imi: "〜だと考えても",
    explanation: "この文法は、たとえ～が本当のことでもとかたとえ～だと考えてもという意味です。～としてもというのは、たとえ、仮にというように、仮定をする文章ですね。もしこうだったとしても、私はこう思うとかもしこうだったとしても、こうだろうというふうに自分の意見とか自分の予想を言うときによく使われます。\nThis grammar means 'even if ~ is true' or 'even if we consider ~ to be the case'. '〜としても' is used in hypothetical sentences, such as 'even if it were the case that ~, I think this way' or 'even if it were the case that ~, it would probably be like this'. It is often used when expressing your opinions or predictions.",
    extraInfo: "この文法を使うときは「たとえ～としても」というふうに「たとえ」が一緒に使われる場合が多いです。",
    usage: {
      form: [{ name: "普通形" }],
      pattern: ["としても" ],
    },
    examples: [
      {
        sentence: "たとえ[冗談だった]{としても}、見た目のことをからかわれてとても傷ついた。",
        meaning: "Even if it was a joke, I was very hurt to be teased about my appearance."
      },
      {
        sentence: "たとえ[大雪だ]{としても}、仕事を休むことはできないだろう。",
        meaning: "Even if there is heavy snow, you probably can't take a day off work."
      },
      {
        sentence: "どんなに生活が[苦しい]{としても}、犯罪はしないと決めている。",
        meaning: "No matter how difficult life is, I have decided not to commit crimes."
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "犯罪", kana: "はんざい", english: "crime" },
    ]
  },
  {
    id: 80,
    grammar: "〜とも",
    imi: "〜ても",
    explanation: "この文法は「ても」と同じです。～しても、～とも、全く同じ意味です。ただ、この「とも」という文法を使った場合は少しかたいという印象がありますし古いという印象もあります。\nThis grammar is the same as 'ても'. Both '〜しても' and '〜とも' have exactly the same meaning. However, when using the grammar 'とも', it gives a slightly formal impression and also has an old-fashioned feel.",
    usage: {
      form: [{ name: "V. よう" }, { name: "い形容詞テ形", connector: "く" }, { name: "な形容詞", connector: "であろう" }, { name: "名詞", connector: "であろう" }],
      pattern: ["とも" ],
    },
    examples: [
      {
        sentence: "この先何が[あろう]{とも}、僕たちはずっと親友だ。",
        meaning: "No matter what happens in the future, we will always be best friends.",
        point: "これは「この先何があっても僕たちはずっと親友だ」という意味です。「あろうとも」は「あっても」と全く同じ意味です。",
      },
      {
        sentence: "どんなに孫が[かわいく]{とも}、甘やかしすぎるのはよくない。",
        meaning: "No matter how cute your grandchildren are, it's not good to spoil them too much."
      },
      {
        sentence: "出張先が[海外であろう]{とも}、会社の命令だから必ず行かなければならない。",
        meaning: "Even if the business trip destination is overseas, you must go because it's a company order."
      },
      {
        sentence: "まあいいや、着が僕を無視し[続けよう]{とも}、僕は着を諦めないよ。",
        meaning: "Well, even if Ki continues to ignore me, I won't give up on Ki."
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "孫", kana: "まご", english: "grandchild" },
      { kanji: "出張先", kana: "しゅっちょうさき", english: "business trip destination" },
      { kanji: "無視", kana: "むし", english: "ignoring" }
    ]
  },
  {
    id: 81,
    grammar: "〜ばよかった",
    imi: "〜するべきだった",
    explanation: "後悔する気持ちを表す時に使う文法です。\nThis grammar is used to express feelings of regret.",
    usage: {
      form: [{ name: "動詞 ば形" }],
      pattern: ["よかった" ],
    },
    examples: [
      {
        sentence: "彼女を怒らせてしまった。あんなこと[言わなければ]{よかった}。",
        meaning: "I made her angry. I wish I hadn't said such a thing."
      },
      {
        sentence: "こんなに時間がかかるなんて、昨日のうちに[準備しておけば]{よかった}。",
        meaning: "I didn't expect it to take this long. I wish I had prepared yesterday."
      },
      {
        sentence: "もっと計画的に夏休みの宿題を[やれば]{よかった}。",
        meaning: "I wish I had done my summer homework more systematically."
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "計画", kana: "けいかく", english: "plan" },
      { kanji: "計画的", kana: "けいかくてき", english: "systematic" },
    ]
  },
  {
    id: 82,
    grammar: "〜さえ 〜ば",
    imi: "〜だけが大切なことだ",
    explanation: "「さえ」というのは「だけ」という意味で「ば」というのは仮定を表す言葉ですよね。だから「これさえあれば」というのはもしこれだけあったら、という意味です。これだけあったらいいのにという風に使うのでこれがすごく大切だ！と「これ」を強調して言いたいときに使う文法です。\nThe word 'さえ' means 'only', and 'ば' is a word that expresses a conditional. Therefore, 'これさえあれば' means 'if only I had this'. It is used to express the desire for just this to be present, emphasizing that this is very important! This grammar is used when you want to strongly emphasize that 'this' is very important.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["さえ"],
      secondsForm: [{ name: "動詞 ば形" }, { name: "い形容詞 ければ形"}, { name: "な形容詞", connector: "なら"  }, { name: "名詞", connector: "なら"  }],
      combinedForms: [
        { first: 'V. ます STEM', pattern: ['さえすれば', 'さえしなければ'] },
        { first: '名詞・な形容詞', pattern: ['でさえあれば', 'でさえなければ']},
      ],
    },
    examples: [
      {
        sentence: "[身長]{さえ}[高ければ]、もっと試合で活躍できるのになあ。",
        meaning: "If only I were taller, I could perform better in matches."
      },
      {
        sentence: "[英語]{さえ}[できれば]、海外で働けるというものではない。",
        meaning: "It's not necessarily the case that if you can speak English, you can work overseas."
      },
      {
        sentence: "結婚相手は[高収入]{でさえあれば}誰でもいいというわけではない。",
        meaning: "It's not necessarily the case that if a marriage partner has a high income, anyone is acceptable."
      },
      {
        sentence: "もう[自分]{さえ}[楽しければ]それでいいんだね。",
        meaning: "As long as you're happy, that's all that matters.",
        point: "自分だけ楽しかったらそれでいいんだねという意味です。",
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "身長", kana: "しんちょう", english: "height" },
      { kanji: "活躍", kana: "かつやく", english: "activity・success・great efforts" },
      { kanji: "高収入", kana: "こうしゅうにゅう", english: "high income" }
    ]
  },
  {
    id: 83,
    grammar: "〜を抜きにして",
    imi: "〜なしで",
    explanation: "この文法は～を考えずにとか、～をなくしてという意味です。抜きにしてというのは「抜く」という動詞が入っていますよね。抜くということはつまりそれを取るとかなくすという意味です。だから〜を抜きにしてと言ったらこれを考えずにとか、これを取ってこれをなくしてという意味になります。〜を抜きにしてという言い方の場合はこれがないとこれができないというように後ろが「できない」の文章の形になります。～を抜きにしてこうすることができない。\nThis grammar means 'without ~' or 'excluding ~'. The phrase '抜きにして' contains the verb '抜く', which means to remove or eliminate something. Therefore, when you say '〜を抜きにして', it means 'without considering this' or 'removing this'. In the case of the expression '〜を抜きにして', the following part is often in the form of a sentence that indicates 'cannot do something without this'.",
    extraInfo: "名詞 ＋ を抜きにして -> これを考えずにこれができないとかこれがなかったらこれができないという言い方になります。\nNoun + を抜きにして -> This means 'cannot do something without considering this' or 'cannot do something if this is not present'.\n\n名詞 ＋ は抜きにして・抜きに・抜きで -> これは後ろに〜できないという文章がつくのではなくて、単純にこれがない、これをなくしてという意味になります。\nNoun + は抜きにして・抜きに・抜きで -> This does not have a sentence with 'cannot do something' following it, but simply means 'without this' or 'excluding this'.\n\n言い方は日常生活でよく使われます。日本だったら、おすしを注文するときに、からいのが苦手だったら「わさび抜きでお願いします」こういう言い方をよく使います。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["を抜きにして（は）", "は抜きにして", "抜きに", "抜きで"],
    },
    examples: [
      {
        sentence: "お祝いのための食事会だから、[仕事の話]{は抜きにして}楽しみましょう。",
        meaning: "Since it's a celebration meal, let's enjoy it without talking about work."
      },
      {
        sentence: "昨日、私の家族は[私]{抜きで}焼き肉を食べに行ったらしい。",
        meaning: "It seems that my family went to eat yakiniku without me yesterday."
      },
      {
        sentence: "この仕事は[部長]{を抜きにしては}進められません。",
        meaning: "This work cannot proceed without the manager."
      },
      {
        sentence: "すみません、アボカドバーガーください。あ、[ピクルス]{抜きで}おねがいします。",
        meaning: "Excuse me, I'll have the avocado burger. Oh, please without pickles."
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "抜く", kana: "ぬく", english: "to extract・to omit" },
    ]
  },
  {
    id: 84,
    grammar: "〜を除いて",
    imi: "〜以外で",
    explanation: "除くというのは、そのものをとってなくすという意味がありますから、そのものをとってなくした状態、つまりそれ以外という意味になります。\nThe word '除く' means to remove or eliminate something, so it refers to the state of having removed that thing, which means 'except for that' or 'excluding that'. This grammar is used to indicate that something is excluded from a group or category.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["を除いて（は）"],
    },
    examples: [
      {
        sentence: "このお店は[日曜日]{を除いて}営業しています。",
        meaning: "This store is open every day except Sunday.",
        point: "日曜日以外は営業していますという意味です。",
      },
      {
        sentence: "この中で試験に合格したのは、[私]{を除いて}5人だけです。",
        meaning: "Except for me, only five people passed the exam."
      },
      {
        sentence: "当店は[年末年始]{を除いて}、休まず営業しています。",
        meaning: "This store is open every day except for the New Year's holidays."
      },
      {
        sentence: "この家は新しいし家賃も安いし、[交通が不便なところ]{を除いては}最高です。",
        meaning: "This house is new and the rent is cheap, and except for the inconvenient transportation, it's the best."
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "除く", kana: "のぞく", english: "to exclude・to except" },
      { kanji: "当店", kana: "とうてん", english: "this store" },
      { kanji: "年末年始", kana: "ねんまつねんし", english: "New Year's holidays" }
    ]
  },
  {
    id: 85,
    grammar: "〜次第で",
    imi: "〜によって",
    explanation: "これによってこれも変わると言いたい時に使います。これが変われば結果も変わってくる。～次第、～によってという意味です。\nThis grammar is used when you want to say that something changes depending on something else. If this changes, the result also changes. It means 'depending on ~' or 'by ~'.",
    extraInfo: "この「次第」という言葉ほかにもいろいろ意味があるので違いをしっかり区別しておきましょう。今回は「～によって」という意味でした。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["次第で（は）", "次第だ"],
    },
    examples: [
      {
        sentence: "この話を信じるか信じないかは、[あなた]{次第です}よ。",
        meaning: "Whether you believe this story or not is up to you."
      },
      {
        sentence: "明日は遠足の予定だが、[天気]{次第では}中止になりそうだ。",
        meaning: "It looks like tomorrow's excursion might be canceled depending on the weather."
      },
      {
        sentence: "この[検査の結果]{次第で}、入院するかどうかが決まります。",
        meaning: "Whether or not you will be hospitalized depends on the results of this examination."
      },
      {
        sentence: "ま、君の[謝り方]{次第では}許してやってもいいけど・・・",
        meaning: "Well, depending on how you apologize, I might forgive you..."
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "次第", kana: "しだい", english: "depending on" },
      { kanji: "遠足", kana: "えんそく", english: "excursion" },
      { kanji: "検査", kana: "けんさ", english: "examination" },
      { kanji: "謝る", kana: "あやまる", english: "to apologize" },
      { kanji: "許す", kana: "ゆるす", english: "to forgive"}
    ]
  },
  {
    id: 86,
    grammar: "〜でなければ",
    imi: "〜でないと",
    explanation: "こうじゃないと後ろのことができないとかこうじゃないと後ろのことが成り立たないと言いたいときに使う文法です。\nThis grammar is used when you want to say that something cannot be done or cannot be established unless a certain condition is met.",
    usage: {
      form: [{ name: "名詞" }, { name: "な形容詞" }],
      pattern: ["でなければ" ],
    },
    examples: [
      {
        sentence: "[健康]{でなければ}、働くことはできません。",
        meaning: "If you are not healthy, you cannot work."
      },
      {
        sentence: "[登録者]{でなければ}、動画を観ることができません。",
        meaning: "If you are not a subscriber, you cannot watch the videos."
      },
      {
        sentence: "[あなた]{でなければ}、この仕事は任せられません。",
        meaning: "If it is not you, I cannot entrust this job."
      },
    ],
    category: GrammarEntryCategory.ASSUMPTIONS_CONDITIONS,
    newWords: [
      { kanji: "登録", kana: "とうろく", english: "registration" },
      { kanji: "登録者", kana: "とうろくしゃ", english: "subscriber" },
      { kanji: "任せる", kana: "まかせる", english: "to entrust" }
    ]
  },
  // SECTION 10: 状況・伝聞 - GRAMMAR 87 - 97
  {
    id: 87,
    grammar: "〜かのように",
    imi: "〜みたいに見える",
    explanation: "この文法は本当はそうじゃないんだけど、そのように見えるという意味です。かの「ように」ですからね。そういうふうに見えるという意味です、でも実際はそうじゃない。そのように見えるだけだと言いたいときに使う文法です。\nThis grammar means that although it is not actually the case, it appears to be so. Since it is 'かのように', it means that it looks that way, but in reality, it is not. It is used when you want to say that it only appears to be so.",
    extraInfo: "この「かのように」という文法は日常生活でもまあまあ使われることがある文法です。特に例文の中でも出てきた「何もなかったかのように」とか「何事もなかったかのように」という言い方はよく使われます。何か問題があったのに、何もないように見えるという意味です。\nThis grammar 'かのように' is quite commonly used in daily life. Especially the phrases '何もなかったかのように' or '何事もなかったかのように' are often used. They mean that although there was a problem, it appears as if nothing happened.\n\nまるで〜かのように、はよく使われますね。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "（ である ）" }, { name: "な形容詞", connector: "（ である ）" }],
      pattern: ["かのように" ],
    },
    examples: [
      {
        sentence: "彼はいつも人から聞いた話を、自分が[経験した]{かのように}話す。",
        meaning: "He always talks as if he has experienced the stories he heard from others."
      },
      {
        sentence: "昨日大事件が起きたのに、世の中は[何もなかった]{かのように}時間が流れている。",
        meaning: "Although a major incident happened yesterday, time flows as if nothing happened in the world."
      },
      {
        sentence: "初対面なのに、彼女はまるで昔からの[友達である]{かのように}接してきた。",
        meaning: "Although it was our first meeting, she treated me as if we had been friends for a long time."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "件", kana: "けん", english: "incident" },
      { kanji: "初対面", kana: "しょたいめん", english: "first meeting" },
      { kanji: "接", kana: "せつ", english: "to interact" }
    ],
    important: true,
  },
  {
    id: 88,
    grammar: "〜つもり",
    imi: "自分は 〜 だと思っている",
    explanation: "この文法は本当はそうじゃないんだけど自分はそうだと思っているという意味です。\nThis grammar means that although it is not actually the case, one believes it to be so.",
    extraInfo: "1つ前で勉強した「〜かのように」という文法とすごく意味が似ているんですが「かのように」という文法は本当はそうじゃないんだけどそのように見えるという意味でした。「つもり」というのは本当はそうじゃないけど自分はそうだと思っている、という意味です。少し違うので注意してください。\nThis grammar is very similar in meaning to the previously studied grammar '〜かのように', but 'かのように' means that although it is not actually the case, it appears to be so. On the other hand, 'つもり' means that although it is not actually the case, one believes it to be so. Please be careful as there is a slight difference.",
    usage: {
      form: [{ name: "V. る" }, { name: "V. た" }, { name: "V. ている" }, { name: "い形容詞" }, { name: "な形容詞", connector: "な" }, { name: "名詞", connector: "の" }],
      pattern: ["つもり（ で ）"],
    },
    examples: [
      {
        sentence: "[確認した]{つもりだった}けどミスがあった。",
        meaning: "I thought I had checked it, but there was a mistake.",
        point: "これは、自分は確認した、もうミスがないと思っているんですね。でも本当はそうじゃありませんでした。本当は失敗がありました。",
      },
      {
        sentence: "本人は一生懸命[やっている]{つもりだろう}けど、周りから見ると努力が足りない。",
        meaning: "He probably thinks he is working hard, but from the perspective of those around him, his effort is insufficient."
      },
      {
        sentence: "自分は[元気な]{つもり}でも、病気が治ったばかりなので運動するとすぐに疲れてしまう。",
        meaning: "Even though I think I am healthy, I get tired quickly when I exercise because I just recovered from an illness."
      },
      {
        sentence: "[冗談の]{つもり}で言った言葉で、彼女を傷つけてしまった。",
        meaning: "I said something as a joke, but it ended up hurting her feelings."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "本人", kana: "ほんにん", english: "the person himself/herself" },
      { kanji: "傷", kana: "きず", english: "wound・injury" },
      { kanji: "xx", kana: "xx", english: "xx" }
    ],
    important: true,
  },
  {
    id: 89,
    grammar: "〜てばかりいる\n〜てばかりいられない",
    imi: "〜だけを続けている\n〜だけを続けていることはできない",
    explanation: "この文法は、それだけを続けているという意味です。反対に、ばかりいられないという言い方もあります。～してばかりいる、はそれだけを続けているという意味ですが、～してばかりいられないこれは、それだけを続けていることができないいう意味になります。\nThis grammar means that one continues to do only that. Conversely, there is also the expression 'ばかりいられない'. '～してばかりいる' means that one continues to do only that, while '～してばかりいられない' means that one cannot continue to do only that.",
    extraInfo: "この文法を使うときは動作をずっと続けているんだと言いたい時ですから少し注意してください。\nThis grammar is used when you want to say that an action is being continued, so please be careful.\n\n例えば、お菓子を食べてばかりいるだったらお菓子を食べるということをずっと続けているという意味になります。「お菓子ばかりを食べている」言ったら、ご飯じゃなくてお菓子をずっと食べているんだという風に聞こえますが「お菓子を食べてばかりいる」だったら運動をしない、仕事もしない、でも食べるということをずっと続けているんだという意味になります。\nFor example, if you say 'お菓子を食べてばかりいる', it means that you are continuously eating sweets. If you say 'お菓子ばかりを食べている', it sounds like you are eating only sweets instead of meals, but 'お菓子を食べてばかりいる' means that you are not exercising or working, but you are continuously eating.",
    usage: {
      form: [{ name: "V. テ形" }],
      pattern: ["ばかりいる", "ばかりいられない" ],
    },
    examples: [
      {
        sentence: "夏休みなのに、息子は家の中で[ゲームをして]{ばかりいる}。",
        meaning: "Even though it's summer vacation, my son is just playing games inside the house.",
        point: "息子は家の中でゲームをずっとしている ( それだけを続けている )",
      },
      {
        sentence: "もう入社して3年目だから、先輩に[助けてもらって]{ばかりいられない}。",
        meaning: "Since it's already my third year since joining the company, I can't keep relying on my seniors for help."
      },
      {
        sentence: "授業中、話を聞かずに[寝て]{ばかりいる}ので、先生に怒られた。",
        meaning: "Since I was just sleeping and not listening during class, the teacher got angry at me."
      },
      {
        sentence: "もう勉強しないで[遊んで]{ばかりいる}からこうなるんだよ。",
        meaning: "This is what happens when you don't study and just play all the time."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
  },
  {
    id: 90,
    grammar: "〜どころではない",
    imi: "今は 〜 できない状況だ",
    explanation: "この文法は、今は～できない状態だと言いたいときに使う文法です。今はこれをできる状態ではない、つまりそんなことをしている場合ではないんだ。そんなことをしている状況ではないんだと言いたいときに使う文法です。そんなことよりもっと大切なことがあるとかそんなことよりもっと重要なことがあるという意味です。\nThis grammar is used when you want to say that you are not in a situation where you can do something right now. It means that you are not in a situation to do that, or that it is not the time to be doing such things. It implies that there are more important things to consider than that.",
    extraInfo: "この「～どころではない」という文法と「てはいられない」という文法すごく似ていますよね。言いかえられる場面もすごく多いです。～している場合じゃないという意味で使うならどちらを使っても OK ですね。ただ「どころではない」の方が会話ではよく使われるかな、と思います。どころじゃないという言い方ですね。\nThis grammar '～どころではない' is very similar to the grammar 'てはいられない'. There are many situations where they can be used interchangeably. If you want to express that it is not the time to be doing something, either can be used. However, 'どころではない' is more commonly used in conversation. It is often said as 'どころじゃない'.",
    usage: {
      form: [{ name: "V. る" }, { name: "V. ている" }, { name: "名詞" } ],
      pattern: ["どころではない", "どころじゃない"],
    },
    examples: [
      {
        sentence: "仕事と勉強でとても忙しいので、人のことを[心配している]{どころではない}。",
        meaning: "I am so busy with work and study that I don't have time to worry about others."
      },
      {
        sentence: "彼を傷つけたのではないかと心配で、ご飯を[食べる]{どころではなかった}。",
        meaning: "I was so worried that I might have hurt him that I couldn't eat."
      },
      {
        sentence: "彼は子どもが生まれたかどうか気になって、[仕事]{どころじゃない}ようだ。",
        meaning: "He is so worried about whether his child was born that he can't focus on work."
      },
      {
        sentence: "A:佐藤氏！佐藤氏！今日もコンサートの応援の練習しに行きましょうー！\nB:村上氏・・・[それ]{どころじゃない}んだよ・・・。僕たちコンサートの抽選外れたんだよ。",
        meaning: "A: Mr. Sato! Mr. Sato! Let's go practice cheering for the concert today too!\nB: Mr. Murakami... It's not the time for that... We lost the lottery for the concert."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "状況", kana: "じょうきょう", english: "situation" },
      { kanji: "状態", kana: "じょうたい", english: "state・condition" },
      { kanji: "〜氏", kana: "〜し", english: "Mr./Ms." },
      { kanji: "抽選", kana: "ちゅうせん", english: "lottery" },
      { kanji: "外れる", kana: "はずれる", english: "to be off・to be out of place" }
    ]
  },
  {
    id: 91,
    grammar: "〜ずにすむ",
    imi: "〜しないまま終わった",
    explanation: "「ず」っていうのは「ない」という意味で「すむ」というのは「終わる」とか「完了する」という意味があります。ですから「ずにすむ」はそれをしないで終わるという意味です。\n'ず' means 'not', and 'すむ' means 'to end' or 'to complete'. Therefore, 'ずにすむ' means to finish without doing that. This grammar is used when you want to express that you were able to avoid doing something or that something was resolved without having to take a certain action.",
    usage: {
      form: [{ name: "V. ない", connector: "で" }, { name: "V. ない STEM", connector: "ずに" } ],
      pattern: ["すむ"],
    },
    examples: [
      {
        sentence: "友達がその仕事をやってくれたので私はやらずにすんだ。",
        meaning: "I didn't have to do it because my friend did the job for me.",
        point: "これは友達がやってくれたから私はやらないで終わった。やらなくてもよかったという意味ですね。",
      },
      {
        sentence: "先輩が全員分の食事代を払ってくれたので、一円もお金を[払わずに]{すんだ}。",
        meaning: "I didn't have to pay a single yen because my senior paid for everyone's meal.",
      },
      {
        sentence: "寝坊をしてしまったが、なんとか[遅刻せずに]{すんだ}。",
        meaning: "I overslept, but somehow managed to avoid being late."
      },
      {
        sentence: "派手に転んだが、大きなけがではなかったので、病院に[行かないで]{すんだ}。",
        meaning: "I had a flashy fall, but since it wasn't a serious injury, I didn't have to go to the hospital."
      },
      {
        sentence: "先生は今日は機嫌がいいな。[怒られずに]{済んで}よかった。",
        meaning: "The teacher is in a good mood today. I'm glad I didn't get scolded."
      }
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "済む", kana: "すむ", english: "to be finished・to be completed" },
      { kanji: "完了", kana: "かんりょう", english: "completion" },
      { kanji: "遅刻", kana: "ちこく", english: "being late" },
      { kanji: "派手", kana: "はで", english: "flashy" },
      { kanji: "機嫌", kana: "きげん", english: "mood・temper" }
    ]
  },
  {
    id: 92,
    grammar: "〜おそれがある",
    imi: "〜の可能性がある",
    explanation: "危ないことや悪いことが起こる可能性があるときに使う文法です。悪いことが起こる可能性があるとか悪いことが起こるかもしれないと言いたい時に使います。\nThis grammar is used when there is a possibility of something dangerous or bad happening. It is used when you want to say that there is a possibility of something bad happening or that something bad might happen.",
    extraInfo: "「～おそれはありません」「～おそれなし」という言い方もある。",
    usage: {
      form: [{ name: "V. る" }, { name: "V. ない" }, { name: "名詞", connector: "の" } ],
      pattern: ["おそれがある"],
    },
    examples: [
      {
        sentence: "喫煙は深刻な病気を[引き起こす]{おそれがあります}。",
        meaning: "There is a risk that smoking can cause serious diseases."
      },
      {
        sentence: "道路が渋滞していて、時間に[間に合わない]{おそれがあります}。",
        meaning: "There is a risk that I won't be able to make it on time due to traffic congestion."
      },
      {
        sentence: "西日本は明日にかけて[大雨の][おそれがあります]。",
        meaning: "There is a risk of heavy rain in western Japan tomorrow."
      },
      {
        sentence: "この地震による[津波の]{おそれはありません}。",
        meaning: "There is no risk of a tsunami caused by this earthquake."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "喫煙", kana: "きつえん", english: "smoking" },
      { kanji: "深刻", kana: "しんこく", english: "serious・severe" },
      { kanji: "引き起こす", kana: "ひきおこす", english: "to cause・to bring about" },
      { kanji: "渋滞", kana: "じゅうたい", english: "traffic jam" }
    ]
  },
  {
    id: 93,
    grammar: "〜のももっともだ",
    imi: "〜のも当然だ",
    explanation: "これは〜のも当然だとか～のも当たり前だと言いたいときに使います。\nThis grammar is used when you want to say that something is natural or obvious.",
    usage: {
      form: [{ name: "V. る" }],
      pattern: ["のももっともだ"],
    },
    examples: [
      {
        sentence: "こんな会社辞めるのももっともだ。",
        meaning: "It's only natural to quit a company like this.",
        point: "これはすごく大変な仕事で給料も安い、締けていられない！ (やめても当然です)",
      },
      {
        sentence: "休まず働き続けていたんだから、[倒れてしまう]{のももっともだ}。",
        meaning: "It's only natural to collapse after working continuously without rest."
      },
      {
        sentence: "初めてみんなの前でスピーチするのですから、[緊張する]{のももっともです}。",
        meaning: "It's only natural to be nervous when giving a speech in front of everyone for the first time."
      },
      {
        sentence: "頭のいい彼女が試験に落ちて、私なんかが合格したんだから、皆が[驚く]{のももっともだ}。",
        meaning: "It's only natural that everyone is surprised since the smart girl failed the exam and someone like me passed."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "倒れる", kana: "たおれる", english: "to fall down・to collapse" },
      { kanji: "緊張", kana: "きんちょう", english: "nervousness・tension" },
    ]
  },
  {
    id: 94,
    grammar: "〜のもとで",
    imi: "〜という状況で",
    explanation: "これは〜という状況でという意味で何か大きな影響力があるものの下でとか影響を受けながらという意味があります。\nThis grammar means 'in the situation of ~' and implies being under the influence of something significant or receiving influence from it.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["のもと （ で ）"],
    },
    examples: [
      {
        sentence: "[先生]{のもとで}日本語を勉強したおかげで、試験に合格することができました。",
        meaning: "I was able to pass the exam thanks to studying Japanese under the guidance of my teacher.",
        point: "つまり先生が教えてくれたから試験に合格することができましたという文章です。"
      },
      {
        sentence: "[大自然]{のもとで}育った牛の牛乳は、濃厚でおいしい。",
        meaning: "Milk from cows raised in the great outdoors is rich and delicious.",
        point: "自然がたくさんあるという状況で育った牛という意味だ。"
      },
      {
        sentence: "学生時代は村上教授の[ご指導]{のもと}、虫の研究をしていました。",
        meaning: "During my student days, I conducted insect research under the guidance of Professor Murakami.",
        point: "先生に指導をしてもらうという状況でという意味です。",
      },
      {
        sentence: "A:あの、僕と結婚してください\nnB:こんな[きれいな星空]{のもとで}プロポーズされるなんてロマンチックウ",
        meaning: "A: Um, please marry me.\nB: Being proposed to under such a beautiful starry sky is so romantic."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "状況", kana: "じょうきょう", english: "situation" },
      { kanji: "大自然", kana: "だいしぜん", english: "nature" },
      { kanji: "濃厚", kana: "のうこう", english: "rich and thick" },
      { kanji: "指導", kana: "しどう", english: "guidance" },
      { kanji: "星空", kana: "ほしぞら", english: "starry sky" }
    ]
  },
  {
    id: 95,
    grammar: "〜を込めて",
    imi: "〜を入れて",
    explanation: "これは〜を入れてという意味なんですが気持ちとか感情を表す言葉が入ります。例えば、心を込めてとか、思いを込めてなど見えないものに対して使われる言葉ですね。\nThis grammar means 'to put in ~', but it is used with words that express feelings or emotions. For example, '心を込めて' (with all one's heart) or '思いを込めて' (with deep thoughts), phrases used for invisible things.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["を込めて" ],
      combinedForms: [{first: "名詞１", pattern: ["を込めた"], second: "名詞２"}]
    },
    examples: [
      {
        sentence: "なかなか扉が開かないので、[力]{を込めて}強く押したら壊れてしまった。",
        meaning: "The door wouldn't open, so I pushed it hard with all my strength and it broke.",
        point: "これは力を入れておしたということですね。力を込めては、力を入れてという意味です。",
      },
      {
        sentence: "入院している友達に、「元気になりますように」と[願い]{を込めて}、お守りを作った。",
        meaning: "I made a good luck charm for my friend who is hospitalized, with hopes for their recovery.",
      },
      {
        sentence: "友人の結婚式で今までの[感謝の思い]{を込めた}[手紙]を読んだ。",
        meaning: "I read a letter filled with gratitude and thanks for my friend's wedding."
      }
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "込める", kana: "こめる", english: "to put in・to include" },
      { kanji: "感情", kana: "かんじょう", english: "feeling・emotion" },
      { kanji: "扉", kana: "とびら", english: "door" },
      { kanji: "壊れる", kana: "こわれる", english: "to break・to be broken" },
      { kanji: "感謝", kana: "かんしゃ", english: "gratitude・appreciation" }
    ]
  },
  {
    id: 96,
    grammar: "〜を ～とする",
    imi: "〜を 〜だと考える・決める",
    explanation: "これは、～を～だと考えるとか～と決めると言いたいときに使います。例えば、今私は自分の部屋をスタジオとして使っていますね。こういうように自分の部屋本当はスタジオじゃないんですがスタジオと決めてとか、スタジオと考えて使っています。このように使うことができますね。\nThis grammar is used when you want to say that you consider something to be something else or decide on something. For example, 'I am currently using my room as a studio'. In this way, even though my room is not actually a studio, I have decided to use it as one or consider it as such. You can use this grammar in this way.",
    extraInfo: "ただこの言い方、本当によく使われる言い方で「本日は～さんを～としてお招きしました。」のような使い方は人を紹介するときによく使われます。",
    usage: {
      form: [{ name: "名詞１　＋　を　＋　名詞２" }],
      pattern: ["とする", "として" ],
    },
    examples: [
      {
        sentence: "本日は日本語の森の[村上先生]{を}[講師]{として}お招きしました。",
        meaning: "Today, we have invited Mr. Murakami from Nihongo No Mori as a lecturer.",
        point: "つまり、今日の講師は村上先生です。",
      },
      {
        sentence: "[建物の一階]{を}[お店]{として}使っていて、私たち家族はその上に住んでいます。",
        meaning: "We use the first floor of a building as a store, and our family lives upstairs."
      },
      {
        sentence: "ごみ拾い活動は、地域の人との[交流]{を}[目的]{として}行われた。",
        meaning: "The garbage collection activity was conducted with the purpose of promoting communication with local residents."
      },
      {
        sentence: "今日から[ここ]{を}[立ち入り禁止]{とする}。私が出てくるまで絶対にこのドアは開けてはいけません。",
        meaning: "From today, this area is off-limits. You must not open this door until I come out."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "講師", kana: "こうし", english: "lecturer・instructor" },
      { kanji: "招く", kana: "まねく", english: "to invite・to summon" },
      { kanji: "拾い", kana: "ひろい", english: "picking up" },
      { kanji: "交流", kana: "こうりゅう", english: "interaction・exchange" },
      { kanji: "立ち入り", kana: "たちいり", english: "entry・access" }
    ]
  },
  {
    id: 97,
    grammar: "〜とか",
    imi: "〜らしい",
    explanation: "この文法は〜らしいという意味でこれは誰かから聞いた話を、また違う人に伝えるときに「～とか」と言うんですね。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "な" }, { name: "な形容詞", connector: "な" } ],
      pattern: ["とか", "んだとか" ],
    },
    examples: [
      {
        sentence: "お隣の村上さん、宝くじが[当たった]{とか}。羨ましいなあ。",
        meaning: "I heard that Mr. Murakami from next door won the lottery. I'm so jealous."
      },
      {
        sentence: "天気予報によると、関東は[大雨だ]{とか}。",
        meaning: "According to the weather forecast, it's said that the Kanto region will have heavy rain."
      },
      {
        sentence: "今年のオリンピックは、感染症の影響で[中止だ]{とか}。",
        meaning: "I heard that this year's Olympics will be canceled due to the impact of infectious diseases."
      },
      {
        sentence: "なんか発電所でトラブルがあったんだって。今日は一日電気が[使えない]{とか}。",
        meaning: "I heard there was a problem at the power plant. They said we won't be able to use electricity for a whole day."
      },
    ],
    category: GrammarEntryCategory.CIRCUMSTANCES_HEARSAY,
    newWords: [
      { kanji: "隣", kana: "となり", english: "next door" },
      { kanji: "宝くじ", kana: "たからくじ", english: "lottery" },
      { kanji: "当たる", kana: "あたる", english: "to win (a lottery)" },
      { kanji: "羨ましい", kana: "うらやましい", english: "envious・jealous" },
      { kanji: "感染症", kana: "かんせんしょう", english: "infectious disease" },
      { kanji: "影響", kana: "えいきょう", english: "influence" },
      { kanji: "発電所", kana: "はつでんしょ", english: "power plant" }
    ]
  },
  // SECTION 11: 変化・結果 - GRAMMAR 98 - 105
  {
    id: 98,
    grammar: "〜につれ",
    imi: "〜の変化に合わせて、別のものも変化する",
    explanation: "つれるっていうのはついていくことですから 1つのものが変化すると同時に、もう1つのものも同じように変化していく。これを表す文法です。ですから～につれ～、この前と後ろには変化する2つのものを入れてください。\nSince 'つれる' means to follow, when one thing changes, another thing also changes in the same way at the same time. This grammar expresses that. Therefore, in the structure '～につれ～', please put the two things that change before and after.\nThis grammar is used to express that as one thing changes, another thing also changes accordingly.",
    usage: {
      form: [{ name: "V. る" }],
      pattern: ["につれ（ て ）"],
    },
    examples: [
      {
        sentence: "[お腹が空く]{につれて}集中力が切れてくるので、いつもお菓子を持ち歩いている。",
        meaning: "As my stomach gets hungry, my concentration fades, so I always carry snacks with me."
      },
      {
        sentence: "夜が[明ける]{につれ}、外が明るくなってきた。",
        meaning: "As the night gets lighter, the outside becomes brighter."
      },
      {
        sentence: "町が[発展する]{につれて}、地元の人に愛されていた古いお店が少なくなってしまった。",
        meaning: "As the town developed, the old shops that were loved by local people became fewer and fewer."
      },
      {
        sentence: "JLPTレベルが[上がる]{につれて}覚える漢字もどんどん増えるね。",
        meaning: "As the JLPT level increases, the number of kanji I have to memorize keeps growing."
      },
    ],
    category: GrammarEntryCategory.CHANGE_RESULT,
    newWords: [
      { kanji: "明ける", kana: "あける", english: "to get light (of night)" },
      { kanji: "地元", kana: "じもと", english: "local area" },
      { kanji: "愛", kana: "あい", english: "love" }
    ]
  },
  {
    id: 99,
    grammar: "〜一方だ",
    imi: "どんどん 〜 にな",
    explanation: "この文法はどんどん～になるという意味です。～という状態がどんどんどんどん進んでいくと言いたいときに使います。この「一方」という文法、もう1つあるんですが一方という言葉は一つの方向という意味ですよね。だから〜の一方という言い方をすると反対という意味になるんですがこの文法では～一方だ、一つの方向にどんどん進んでいくという意味で使われているのでこういう状態がどんどんどんどん進んでいく上に上がるんだったら、どんどんあがっていく。下がるんだったら、ずっと下がる。良くなったり悪くなったりする。一つの状態がどんどん進むと言いたいときに使う文法です。\nThis grammar means 'to become more and more ~'. It is used when you want to express that a certain state is progressing rapidly. The word '一方' also has another meaning, which is 'one direction'. Therefore, when you say '〜の一方', it can mean the opposite. However, in this grammar, '～一方だ' is used to mean that something is progressing rapidly in one direction. So if something is going up, it keeps going up; if it's going down, it keeps going down. It is used when you want to express that a certain state is continuously progressing in one direction.",
    extraInfo: "この文法は「一方だ」と言ってもいいですし「ばかりだ」と言いかえてもOKです。これは意味も接続も全く同じです。",
    usage: {
      form: [{ name: "V. る" }],
      pattern: ["一方だ"],
    },
    examples: [
      {
        sentence: "痩せたいとは思っているが、お菓子がやめられないので[太り続ける]{一方だ}。",
        meaning: "I want to lose weight, but since I can't stop eating snacks, I'm only getting fatter."
      },
      {
        sentence: "新発売の商品がヒットして、我が社の売り上げは[伸びる]{一方だ}。",
        meaning: "The newly released product has become a hit, and our sales are continuing to grow."
      },
      {
        sentence: "都市へ行く若者が増え、地方の人口は[減る]{一方だ}。",
        meaning: "Young people are moving to cities, and the population in rural areas is decreasing."
      },
      {
        sentence: "文句ばかり言っていたら[ブサイクになる]{一方だ}よ。",
        meaning: "If you keep complaining, you'll only get uglier."
      },
    ],
    category: GrammarEntryCategory.CHANGE_RESULT,
    newWords: [
      { kanji: "痩せる", kana: "やせる", english: "to lose weight" },
      { kanji: "太り続ける", kana: "ふとりつづける", english: "to keep getting fatter" },
      { kanji: "我が", kana: "わが", english: "myself" },
      { kanji: "都市", kana: "とし", english: "city" },
      { kanji: "地方", kana: "ちほう", english: "rural area" },
      { kanji: "ブサイク", kana: "", english: "ugly" }
    ]
  },
  {
    id: 100,
    grammar: "〜を契機として",
    imi: "〜が理由で、あることが始まった",
    explanation: "この文法は〜が理由であることが始まったと言いたいときに使う文法です。「契機」という言葉、ちょっと難しいんですが何かが変わったり何かが始まったりする時の原因やきっかけという意味があります。ですから、これを契機としてというふうに言ったらこれをきっかけにして何かが変わったとかこれが原因で何かが始まったという意味になります。\nThis grammar is used when you want to say that something started because of a certain reason. The word '契機' is a bit difficult, but it means the cause or trigger when something changes or starts. Therefore, when you say 'を契機として', it means that something changed or started because of that trigger or cause.",
    extraInfo: "この「契機に」という言葉すごくかたい言い方です。言葉自体もすごく難しいので日常会話で使うことはほとんどありません。言いかえるなら「きっかけ」をよく使いますね。でもかたい文章の中とか正式な場なら使われることがあります。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["を契機として", "を契機に" ],
    },
    examples: [
      {
        sentence: "生徒の中から東大合格者が[現れたこと]{を契機に}、この高校は地元で有名になった。",
        meaning: "Because a student from this school was accepted into Tokyo University, the school became well-known in the local area."
      },
      {
        sentence: "[去年手術したこと]{を契機に}、痛みは我慢せずに病院で診てもらうようにしている。",
        meaning: "Because of last year's surgery, I now go to the hospital for treatment instead of enduring the pain."
      },
      {
        sentence: "[結婚]{を契機として}、勤めていた会社を辞め、家でできる仕事を始めました。",
        meaning: "Because of marriage, I quit my job and started working from home."
      },
    ],
    category: GrammarEntryCategory.CHANGE_RESULT,
    newWords: [
      { kanji: "契機", kana: "けいき", english: "occasion" },
      { kanji: "生徒", kana: "せいと", english: "student" },
      { kanji: "東大", kana: "とうだい", english: "Tokyo University" },
      { kanji: "現れる", kana: "あらわれる", english: "to appear・to emerge" },
      { kanji: "手術", kana: "しゅじゅつ", english: "surgery" },
      { kanji: "我慢", kana: "がまん", english: "endurance・patience" },
      { kanji: "診る", kana: "みる", english: "to examine (a patient)" },
      { kanji: "勤める", kana: "つとめる", english: "to work for (a company)" }
    ]
  },
  {
    id: 101,
    grammar: "〜を通して",
    imi: "〜という方法で",
    explanation: "この文法は～という方法でという意味です。例えば、「友達を通して日本語の森を知りました。」というふうに言ったら友達が方法になるんですね。友達が「ねえねぇ日本語の森っていうのがあるよ」というふうに教えてくれたから、日本語の森を知ることができたという意味になります。このように何かをする方法とか手段を表すときに使う文法です。\nThis grammar means 'by means of ~'. For example, when you say 'I learned about Nihongo No Mori through a friend', the friend becomes the method. It means that the friend told you about Nihongo No Mori, allowing you to learn about it. This grammar is used to express the method or means of doing something.",
    extraInfo: "を通して -> をとおして\nを通じて -> をつうじて\n",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["を通して", "を通じて" ],
    },
    examples: [
      {
        sentence: "様々な国の人々との[出会い]{を通して}、言語学習の大切さを学びました。",
        meaning: "Through meeting people from various countries, I learned the importance of language learning."
      },
      {
        sentence: "[海外留学]{を通して}、世の中にはいろんな価値観があるということを知りました。",
        meaning: "Through studying abroad, I learned that there are many different values in the world."
      },
      {
        sentence: "今付き合っている彼とは、[共通の友人]{を通じて}知り合った。",
        meaning: "I met my current boyfriend through a mutual friend."
      },
      {
        sentence: "[日本語の勉強]{を通じて}皆さんに知り合うことができて本当にうれしいです。",
        meaning: "I'm really happy to have met everyone through studying Japanese."
      },
    ],
    category: GrammarEntryCategory.CHANGE_RESULT,
    newWords: [
      { kanji: "価値観", kana: "かちかん", english: "values" },
      { kanji: "共通", kana: "きょうつう", english: "common" },
    ]
  },
  {
    id: 102,
    grammar: "〜てはじめて",
    imi: "〜を経験したらわかる",
    explanation: "この文法は～を経験したらという意味です。はじめてという言葉が入っていますからね。これをしたらその後はじめて何かがわかるとか何か新しいことを知るとか、新しいことに気づく新しいことを理解すると言いたいときに使う文法です。\nThis grammar means 'when you experience ~ for the first time'. Since the word 'はじめて' (for the first time) is included, it is used when you want to say that after doing something, you will understand something new, realize something new, or comprehend something new.",
    usage: {
      form: [{ name: "V. テ形" }],
      pattern: ["はじめて"],
    },
    examples: [
      {
        sentence: "先生に[なって]{はじめて}、人に何かを教えることがどんなに難しいことなのかがわかった。",
        meaning: "I only realized how difficult it is to teach people when I became a teacher."
      },
      {
        sentence: "友達に[言われて]{はじめて}、服に値段のシールが付いていることに気づいた。",
        meaning: "I only noticed that clothes have price tags on them after my friend told me."
      },
      {
        sentence: "ゆか先生の授業を[受けて]{はじめて}、日本語の勉強が楽しいと思えた。",
        meaning: "I only realized that studying Japanese could be fun after attending Yuko-sensei's class."
      },
      {
        sentence: "あなたと[付き合って]{はじめて}幸せというもの知りました。",
        meaning: "I only realized what happiness is after dating you.",
        point: "あなたと付き合うという経験をした後幸せがどういうものかわかったという意味ですね。つまり彼と付き合うまでは幸せって何かはっきりわからなかったという事です。それくらい今、幸せだということですね。",
      },
    ],
    category: GrammarEntryCategory.CHANGE_RESULT,
    newWords: [
      { kanji: "気づく", kana: "きづく", english: "to notice" },
    ]
  },
  {
    id: 103,
    grammar: "〜末",
    imi: "〜した結果",
    explanation: "この文法は～した後という意味です。この「末」という言葉は物事の一番最後を表す意味があります。だから「〜末」というふうについたらこれが終わった後という意味ですね。いろんなことがあって結局こうなったこういう結果になりましたというふうに一番最後の結果を表したい時に使う文法です。\nThis grammar means 'after ~'. The word '末' (end) represents the very end of something. Therefore, when it is attached as '〜末', it means 'after this is finished'. It is used when you want to express the final result after various events have occurred, indicating what ultimately happened or the outcome.",
    extraInfo: "この～末という表現は少しかたい表現なので日常生活で友達と使うことはほとんどないです。でもニュースとか会社の中ではよく使われる表現なのでぜひ覚えておいてください。",
    usage: {
      form: [{ name: "V. た" }, { name: "名詞", connector: "の" } ],
      pattern: ["末（ に ）"],
    },
    examples: [
      {
        sentence: "将来についてあれこれ[考えた]{末}、日本ではなく海外の大学へ進学することに決めた。",
        meaning: "After thinking about the future for a long time, I decided to go to a university abroad rather than in Japan."
      },
      {
        sentence: "二人は4年間の[遠距離恋愛の]{末}、結婚したそうだ。",
        meaning: "They got married after 4 years of long-distance relationship."
      },
      {
        sentence: "一生懸命[努力した]{末}、結局彼は合格できなかった。",
        meaning: "After working hard, he ultimately failed the exam."
      },
    ],
    category: GrammarEntryCategory.CHANGE_RESULT,
    newWords: [
      { kanji: "末", kana: "すえ", english: "end・conclusion" },
      { kanji: "遠距離", kana: "えんきょり", english: "long distance" },
      { kanji: "恋愛", kana: "れんあい", english: "romance" },
      { kanji: "結局", kana: "けっきょく", english: "after all・finally" }
    ]
  },
  {
    id: 104,
    grammar: "〜かいがあって",
    imi: "〜のおかげで",
    explanation: "この文法は～のおかげでという意味です。これのおかげでこういういい結果になった。いいことがあったと言いたいときに使う文法です。\nThis grammar means 'thanks to ~'. It is used when you want to say that thanks to something, a good result was achieved or something good happened.",
    usage: {
      form: [{ name: "V. た" }],
      pattern: ["かいがあって"],
    },
    examples: [
      {
        sentence: "たくさん会話の[練習をした]{かいがあって}、英語がぺらぺら話せるようになった。",
        meaning: "Thanks to a lot of conversation practice, I became able to speak English fluently."
      },
      {
        sentence: "わざわざ休みを取って遠くまで[来た]{かいがあって}、とてもきれいな星空を見ることができた。",
        meaning: "Thanks to taking time off and coming all the way here, I was able to see a beautiful starry sky."
      },
      {
        sentence: "長い時間[待った]{かいがあって}、おいしいラーメンを食べることができた。",
        meaning: "Thanks to waiting for a long time, I was able to eat delicious ramen."
      },
    ],
    category: GrammarEntryCategory.CHANGE_RESULT,
    newWords: [
      { kanji: "わざわざ", kana: "わざわざ", english: "on purpose" },
      { kanji: "星空", kana: "ほしょくう", english: "starry sky" },
    ]
  },
  {
    id: 105,
    grammar: "～たところ",
    imi: "〜したら",
    explanation: "この文法は～したら同じ意味です。〜をしてみたらこういうことがわかったと言いたいときに使われる文法です。\nThis grammar means 'when/after ~'. It is used when you want to say that after doing something, you found out something.",
    extraInfo: "この「～たところ」という表現は少しかたい表現なので、友達同士で使うことはほとんどありません。ただ生活をしていたらよく聞く表現なのでぜひ覚えてください。",
    usage: {
      form: [{ name: "V. た" }],
      pattern: ["ところ"],
    },
    examples: [
      {
        sentence: "この街を[調査した]{ところ}、いたるところに危険な生物が生息していることがわかりました。",
        meaning: "After investigating this town, I found that dangerous animals live everywhere."
      },
      {
        sentence: "パソコンに詳しい父に[聞いてみた]{ところ}、「再起動してみて」と言われました。",
        meaning: "After asking my father who is knowledgeable about computers, he told me to try restarting."
      },
      {
        sentence: "最近文字が見づらいので眼科で[検査した]{ところ}、右目に異常がありました。",
        meaning: "Recently, because the text was hard to read, I went to an eye doctor for an examination, and found that there was an issue with my right eye."
      },
    ],
    category: GrammarEntryCategory.CHANGE_RESULT,
    newWords: [
      { kanji: "調査", kana: "ちょうさ", english: "investigation" },
      { kanji: "いたるところ", kana: "いたるところ", english: "everywhere" },
      { kanji: "危険", kana: "きけん", english: "dangerous" },
      { kanji: "生物", kana: "せいぶつ", english: "living thing" },
      { kanji: "生息", kana: "せいそく", english: "to inhabit" },
      { kanji: "再起動", kana: "さいきどう", english: "restart" },
      { kanji: "見づらい", kana: "みづらい", english: "hard to see" },
      { kanji: "眼科", kana: "がんか", english: "ophthalmology" },
      { kanji: "検査", kana: "けんさ", english: "examination" },
      { kanji: "異常", kana: "いじょう", english: "abnormality" },
    ]
  },
  // SECTION 12: 強制・関係ない・推測 - GRAMMAR 106 - 114
  {
    id: 106,
    grammar: "〜わけにはいかない",
    imi: "〜できない\n～しなければならない",
    explanation: "この文法は〜できないとか〜しなければならないという意味です。何か理由があるからこれができないとか何か特別な事情があってこれをしなければならないと言いたいときに使う文法です。\nThis grammar means 'cannot ~' or 'must ~'. It is used when you want to say that you cannot do something due to a certain reason or that you must do something because of special circumstances.",
    extraInfo: "「するわけにはいかない」ってできないという意味になりますし「しないわけにはいかない」って絶対にしなければならないという意味になります。ですから、動詞のる形とない形の両方で使うことができます。",
    usage: {
      form: [{ name: "V. る" }, { name: "V. ない" }],
      pattern: ["わけにはいかない"],
    },
    examples: [
      {
        sentence: "今日は私の誕生日会なので、体調が悪くても[参加しない]{わけにはいかない}。",
        meaning: "Since it's my birthday party today, even if I'm not feeling well, I can't not participate."
      },
      {
        sentence: "頑張ってここまで登ってきたので、頂上に着くまで[あきらめる]{わけにはいかない}。",
        meaning: "Since I've worked hard to get this far up the mountain, I can't give up until I reach the summit."
      },
      {
        sentence: "明日提出しなければならないレポートが終わっていないので、[寝る]{わけにはいかない}。",
        meaning: "Since I have a report due tomorrow that isn't finished, I can't go to sleep."
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE,
    newWords: [
      { kanji: "事情", kana: "じじょう", english: "circumstances" },
      { kanji: "頂上", kana: "ちょうじょう", english: "summit" },
      { kanji: "提出", kana: "ていしゅつ", english: "submission" }
    ]
  },
  {
    id: 107,
    grammar: "〜てはいられない",
    imi: "〜し続けることができない",
    explanation: "この文法は～し続けることができないという意味です。この状態を続けることが難しい、できないと言いたいときに使う文法です。これをすることはがまんができない！たえられない！というときに使ったりこんなことをしている場合じゃないという意味でもよく使われます。\nThis grammar means 'cannot continue to do ~'. It is used when you want to say that it is difficult or impossible to continue in this state. It is often used when you cannot endure or tolerate doing something, or when you want to express that you cannot afford to be doing such a thing.",
    extraInfo: "この文法は実際に話すことはあんまりないんですが、よくアニメとかマンガの中で出てくる表現です。",
    usage: {
      form: [{ name: "V. テ形" }],
      pattern: ["はいられない", "ちゃいられない"],
    },
    examples: [
      {
        sentence: "来月は大切な試験があるので、さすがに[遊んで]{はいられません}。",
        meaning: "Since next month is an important exam, I can't just play around."
      },
      {
        sentence: "家族のために夜ご飯をつくらなきゃいけないから、[休んで]{はいられない}。",
        meaning: "Since I have to make dinner for my family, I can't just rest."
      },
      {
        sentence: "最近好きなだけ食べていたけど、ダイエットをすると決めた以上、[こうし]{ちゃいられない}。",
        meaning: "I've been eating as much as I wanted recently, but since I've decided to diet, I can't just keep doing that."
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE
  },
  {
    id: 108,
    grammar: "〜ざるを得ない",
    imi: "嫌だけど 〜 しなければならない",
    explanation: "この文法は～しないわけにはいかないという意味です。この「ざる」っていう言葉ですね。「せざる」っていうのがしないっていう意味で「得ない」というのはそれをすることができないという意味なんですね。だから「ざるを得ない」と言ったらそれをしないということができないという意味なのでしないわけにはいかない。嫌なんだけどしなければならないという意味になります。この「ざるを得ない」という文法は本当はやりたくないんだけどやらなければいけないとか本当はこうしたくないんだけどこうするしかないというようなときに使います。嫌なことをやらないといけない時ですね。\nThis grammar means 'cannot help but ~' or 'have no choice but to ~'. The word 'ざる' means 'not doing', and '得ない' means 'cannot do it'. Therefore, when you say 'ざるを得ない', it means that you cannot not do something, or in other words, you have no choice but to do it. This grammar is used when you don't really want to do something, but you have to do it anyway, or when you don't want to do something, but you have no other option. It is used when you have to do something unpleasant.",
    extraInfo: "※しない → せざるを得ない",
    usage: {
      form: [{ name: "V. ない STEM" }],
      pattern: ["ざるを得ない"],
    },
    examples: [
      {
        sentence: "買い物中に自転車を盗まれてしまったので、歩いて[帰ら]{ざるを得なくなった}。",
        meaning: "Since my bicycle was stolen while shopping, I had no choice but to walk home."
      },
      {
        sentence: "宇宙飛行士になりたかったが、目が悪いので、[あきらめ]{ざるを得ない}。",
        meaning: "I wanted to become an astronaut, but because my eyesight is poor, I have no choice but to give up."
      },
      {
        sentence: "台風の影響により、予定していたイベントは[中止]{せざるを得なくなった}。",
        meaning: "Due to the impact of the typhoon, I had no choice but to cancel the scheduled event."
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE,
    newWords: [
      { kanji: "盗まれる", kana: "ぬすまれる", english: "to be stolen" },
      { kanji: "宇宙飛行士", kana: "うちゅうひこうし", english: "astronaut" },
    ]
  },
  {
    id: 109,
    grammar: "〜を問わず",
    imi: "〜に関係なく",
    explanation: "この文法は～に関係なくという意味です。問わずというのは、問わないという意味ですね。質問をされないということです。「あなたは日本人ですか？日本人ならOKです。日本人じゃないならだめです。」とか「あなたは20歳以上ですか？20歳以上ならOKです。20歳以上じゃなかったらだめです。」こんなふうに何かを聞かれて、良い悪いとかOKとかだめを判断されることがないということです。つまり問わずというのは、問われないなので～に関係がなくという意味になります。\nThis grammar means 'regardless of ~' or 'irrespective of ~'. '問わず' means 'not to ask' or 'not to question'. For example, if someone asks you, 'Are you Japanese? If you are Japanese, it's OK. If you're not Japanese, it's not OK.' or 'Are you over 20 years old? If you are over 20, it's OK. If you're not over 20, it's not OK.' In such cases, when something is asked and judged as good or bad, OK or not OK, '問わず' means that there is no questioning or judgment based on that. Therefore, '問わず' means 'regardless of ~' or 'irrespective of ~'.",
    extraInfo: "よく使うのは男女を問わずとか、年齢を問わず場所を問わず、こういう言い方がよく使われます。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["を問わず"],
    },
    examples: [
      {
        sentence: "この仕事に関する[経験の有無]{を問わず}、やる気のある人を採用します。",
        meaning: "We will hire people who are enthusiastic, regardless of whether they have experience in this job."
      },
      {
        sentence: "このスーパーは[昼夜]{を問わず}営業しているので、夜に働いている人にとって便利だ。",
        meaning: "This supermarket is open 24 hours a day, so it's convenient for people who work at night."
      },
      {
        sentence: "インターネットが普及し、[場所]{を問わず}働けるようになった。",
        meaning: "With the spread of the internet, it became possible to work from anywhere."
      },
      {
        sentence: "日本語の森では[国籍]{を問わず}さまざまな国の学生が日本語を勉強しています。",
        meaning: "At Nihongo No Mori, students from various countries study Japanese regardless of their nationality."
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE,
    newWords: [
      { kanji: "有無", kana: "ゆうむ", english: "existence or non-existence" },
      { kanji: "採用", kana: "さいよう", english: "hiring" },
      { kanji: "昼夜", kana: "ちゅうや", english: "day and night" },
      { kanji: "普及", kana: "ふきゅう", english: "spread・popularization" },
      { kanji: "国籍", kana: "こくせき", english: "nationality" }
    ]
  },
  {
    id: 110,
    grammar: "〜にかかわらず",
    imi: "〜に関係なく",
    explanation: "この文法は～に関係なくという意味です。関わらずというのは関わらないという意味ですからそれに関係がなく結果はいつも同じだと言いたいときに使われる文法です。\nThis grammar means 'regardless of ~' or 'irrespective of ~'. '関わらず' means 'not to be involved' or 'not to be related', so it is used when you want to say that regardless of that, the result is always the same.",
    extraInfo: "名詞には、大きさとか長さを表す表現がよくつきます。例えば大きさに関わらずとか距離にかかわらずとか、値段にかかわらずこのようによく使われます。これは大きくても小さくても関係がないという意味ですし値段が高くても安くても関係がない。こういうふうに大きさとか幅を表す表現がよくつきます。\n「するしないにかかわらず」ってしてもしなくても結果は変わらないという意味になります。",
    usage: {
      form: [
        { name: "V. る　＋　V. ない"},
        { name: "名詞" },
        { name: "V. る", connector: "かどうか" },
        { name: "V. ない", connector: "かどうか" },
      ],
      pattern: ["にかかわらず"],
    },
    examples: [
      {
        sentence: "[値段]{にかかわらず}、欲しいものは我慢せずに何でも買ってしまう性格だ。",
        meaning: "This person has a personality that buys anything they want without hesitation, regardless of the price."
      },
      {
        sentence: "この仕事の経験が[あるかどうか]{にかかわらず}、研修には必ず参加してください。",
        meaning: "Please participate in the training regardless of whether you have experience in this job."
      },
      {
        sentence: "[参加するしない]{にかかわらず}、金曜日までに必ずご返信ください。",
        meaning: "Please reply by Friday, regardless of whether you participate or not."
      },
      {
        sentence: "[勉強するしない]{にかかわらず}、試験の日は一日ずつ近づいていますよ…・•。",
        meaning: "Regardless of whether you study or not, the exam day is getting closer day by day.",
        point: "勉強しても勉強をしなくても関係がない。試験の日は決まっていますから。",
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE,
    newWords: [
      { kanji: "関わる", kana: "かかわる", english: "to be involved with" },
      { kanji: "研修", kana: "けんしゅう", english: "training" },
      { kanji: "返信", kana: "へんしん", english: "reply" },
      { kanji: "近づく", kana: "ちかづく", english: "to approach" },
    ]
  },
  {
    id: 111,
    grammar: "〜もかまわず",
    imi: "〜を気にしないで",
    explanation: "この文法は～を気にしないで、という意味です。構うというのは、人のことを気にするとかかわるという意味があります。構わず、構わないという意味ですから気にしないという意味になります。\nThis grammar means 'without caring about ~' or 'regardless of ~'. The word '構う' means to care about or to be involved with someone. Therefore, '構わず' or '構わない' means 'not caring about' or 'not being concerned with'.",
    extraInfo: "「人目もかまわず」という言い方が一番よく使われます。人目もかまわずというのは周りの視線を気にしないで、つまり周りのことを気にしないで何かをするという意味ですね。\n**他の場面だったら「もかまわず」という文法を使うよりも～を気にしないでという言い方の方がよく使われます。",
    usage: {
      form: [
        { name: "普通形", connector: "の" },
        { name: "名詞", connector: "（ であるの ）" },
        { name: "な形容詞", connector: "なの・であるの" } 
      ],
      pattern: ["もかまわず"],
    },
    examples: [
      {
        sentence: "足が[痛いの]{もかまわず}、彼はチームのために最後まで走り切った。",
        meaning: "He ran the entire race without caring about his foot pain, for the sake of his team."
      },
      {
        sentence: "午後に面接が[あるの]{もかまわず}、彼はラーメンににんにくをたくさん入れた。",
        meaning: "He added a lot of garlic to his ramen without caring about the interview after noon."
      },
      {
        sentence: "母親に叱られた子どもが、人目もかまわずデパートで泣き叫んでいる。",
        meaning: "The child, scolded by his mother, is crying out loudly in the department store without caring about others' around him."
      },
      {
        sentence: "え？こいつ・・・[値段]{もかまわず}、高い料理ばかり頼んでる•••。ちょっとは遠慮しろよ•••",
        meaning: "What? This guy... he's ordering only expensive dishes without caring about the price... He should be a bit more considerate...",
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE,
    newWords: [
      { kanji: "構う", kana: "かまう", english: "to care about" },
      { kanji: "にんにく", kana: "にんにく", english: "garlic" },
      { kanji: "叱る", kana: "しかる", english: "to scold" },
      { kanji: "叫ぶ", kana: "さぶ", english: "to shout" },
      { kanji: "泣き叫ぶ", kana: "なきさぶ", english: "to cry out loudly" },
    ]
  },
  {
    id: 112,
    grammar: "〜はともかく",
    imi: "〜については考えないで",
    explanation: "この文法は～について今は考えないでという意味です。これはともかくというのは、これについては今ちょっと考えないで、これについてはおいておいて、それよりもこっちの方が重要だとかこれの方がいい、こう言いたいと言いたいときに使われる文法です。\nThis grammar means 'let's not think about ~ for now'. 'ともかく' means 'let's not think about this for now', 'let's put this aside', and it is used when you want to say that something else is more important or better than this.",
    extraInfo: "「～はともかくとして」という言い方もあるんですが、これはどちらでも意味は全く同じです。「ともかくとして」と言った方がちょっとだけかたい印象があるかなと思います。そしてこの接続の部分、名詞と書いているんですが～かどうか、が入る場合もたまにあります。「行くかどうかはともかくとして連絡をください」とかね。行く行かないというのは重要ではない。それは置いておいて、とにかく連絡をくださいという意味になります。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["はともかく（として）"],
    },
    examples: [
      {
        sentence: "[内容]{はともかく}、締め切り日までに卒業論文を書き上げることができた。",
        meaning: "Let's not worry about the content for now, but I was able to finish my thesis by the deadline."
      },
      {
        sentence: "[着て行く服]{はともかく}、旅行先をどこにするかをまず決めよう。",
        meaning: "Let's not worry about the clothes we'll wear on the trip for now, but let's decide where we're going to travel first."
      },
      {
        sentence: "この美容液は、[値段]{はともかくとして}効果があるので女性に人気だ。",
        meaning: "This beauty liquid is popular among women, regardless of its price, because it has an effect."
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE,
    newWords: [
      { kanji: "締め切り", kana: "しめきり", english: "deadline" },
      { kanji: "論文", kana: "ろんぶん", english: "thesis" },
      { kanji: "美容液", kana: "びようえき", english: "beauty liquid" },
      { kanji: "効果", kana: "こうか", english: "effectiveness" }
    ]
  },
  {
    id: 113,
    grammar: "〜ところをみると",
    imi: "〜から推測すると",
    explanation: "この文法は～から推測するとという意味です。ある状況とか様子を見て、そこから考えてこうじゃないかな、と思うとき推測するときに使う文法です。\nThis grammar means 'judging from ~' or 'based on ~'. It is used when you want to speculate or make an inference based on observing a certain situation or condition.",
    extraInfo: "動詞の普通形しか使うことができないので注意してください。\n\nこの文法「ところをみると」ですから何か状況を見て、こうだと推測する時にも使うんですが実際に何かを見たわけじゃなくてもそういう状況から考えてこうだと推測するとにも使われます。\nSince this grammar is 'ところをみると', it can be used not only when you actually see something, but also when you speculate based on a certain situation or condition.",
    usage: {
      form: [{ name: "普通形" }],
      pattern: ["ところをみると"],
    },
    examples: [
      {
        sentence: "返事が[ない]{ところをみると}忙しいんだろう。",
        meaning: "Judging from the fact that there's no reply, he must be busy.",
        point: "返事がないという状況から考えて彼は今、忙しいんだろうというふうに推測をしています。",
      },
      {
        sentence: "彼が[うれしそうな顔をしている]{ところをみると}、昨日のデートはかなり楽しかったようだ。",
        meaning: "Judging from the way he looks happy, yesterday's date must have been quite fun."
      },
      {
        sentence: "部長がまだ[戻っていない]{ところをみると}、会議が長引いているのだろう。",
        meaning: "Judging from the fact that the manager hasn't returned yet, the meeting must be dragging on."
      },
      {
        sentence: "彼と話すときだけ顔が[赤くなる]{ところをみると}、やはり彼女は彼のことが好きなようだ。",
        meaning: "Judging from the fact that his face turns red only when talking to her, she must really like him."
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE,
    newWords: [
      { kanji: "推測", kana: "すいそく", english: "speculation" },
      { kanji: "長引く", kana: "ながびく", english: "to drag on" },
    ]
  },
  {
    id: 114,
    grammar: "〜から言うと\n〜から見ると\n〜からすると",
    imi: "〜から考えて意見を言うと",
    explanation: "この文法は～から考えて意見を言うと、という意味です。こういう立場から考えるとこういう意見になるとかこういう点に注目してみるとこういう意見になるというふうに、自分が言いたい意見の判断した材料を言うときに使う文法です。\nThis grammar means 'from the perspective of ~' or 'judging from ~'. It is used when you want to express your opinion based on a certain standpoint or when you want to highlight a specific point that leads to your opinion.",
    extraInfo: "実は「言う」だけじゃなくて「見る」と「する」を使ってもほとんど同じ意味になります。この言う・見る・するどれを使ってもほとんど意味は変わりません。だいたい言いかえることもできます。\n\nただこの「言う」とか「見る」「する」がふさわしくない文章だとちょっと変になるんですがだいたい言いかえることができます。\n\n「実力から言って」という表現はよく使われます。実力を考えて意見を言うとこうだという意味ですね。",
    usage: {
      form: [{ name: "名詞" }],
      pattern: [
        "から言うと",
        "から言えば",
        "から言って",
        "から見ると",
        "から見れば",
        "から見て",
        "からすると",
        "からすれば",
        "からして",
      ],
    },
    examples: [
      {
        sentence: "[見た目]{から言うと}、村上さんよりも佐藤さんの方が年上に見える。",
        meaning: "From a visual perspective, Mr. Sato appears older than Mr. Murakami."
      },
      {
        sentence: "子どもの才能を見つけるという[点]{から見ると}、夢中になれることをやらせるのはいいことだ。",
        meaning: "From the perspective of finding a child's talent, it's good to let them do what they're passionate about."
      },
      {
        sentence: "その[症状]{からすると}、かぜではなくインフルエンザの可能性が高いです。",
        meaning: "Judging from those symptoms, it's more likely to be influenza than a cold."
      },
      {
        sentence: "まあ君の[実力]{からいって}合格することは99%ないと思うけど、まあ、頑張って•••。",
        meaning: "Well, judging from your actual ability, I think you have a 99% chance of failing, but still, try your best..."
      },
    ],
    category: GrammarEntryCategory.MANDATORY_IRRELEVANCE_INFERENCE,
    newWords: [
      { kanji: "才能", kana: "さいのう", english: "talent" },
      { kanji: "やらせる", kana: "", english: "to let someone do something" },
      { kanji: "症状", kana: "しょうじょう", english: "symptoms" },
      { kanji: "実力", kana: "じつりょく", english: "actual ability" },
    ]
  },
  // SECTION 13: 列挙 - GRAMMAR 115 - 121
  {
    id: 115,
    grammar: "〜をはじめ",
    imi: "〜だけではなく",
    explanation: "この文法は～だけじゃなくという意味です。これだけじゃなくて、これもこれもこれも他にもたくさんあるという意味です。はじめ、ですからね。1つ目ですよね。これだけじゃなくて2345・他にもいろいろたくさんありますよと言いたいときに使う文法です。\nThis grammar means 'not only ~'. It is used to express that not only this, but also this, this, and many others exist. 'はじめ' means 'the first one'. It is used when you want to say that not only this, but also many others exist.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["をはじめ（として）"],
      combinedForms: [
        { first: "名詞 １" , pattern: ["をはじめとする"], second: "名詞 ２" },
      ]
    },
    examples: [
      {
        sentence: "日本語には[ひらがな]{をはじめ}、カタカナや漢字といった様々な文字がある。",
        meaning: "In Japanese, there are various characters such as hiragana, katakana, and kanji."
      },
      {
        sentence: "上野動物園には、[パンダ]{をはじめ}ゾウやキリンなどいろんな動物がいます。",
        meaning: "In Ueno Zoo, there are various animals such as pandas, elephants, and giraffes."
      },
      {
        sentence: "今日のパーティーは[社長]{をはじめとする}100人の社員が参加することになっている。",
        meaning: "Today's party will have 100 employees, including the president, participating."
      },
    ],
    category: GrammarEntryCategory.ENUMERATION,
    newWords: [
      { kanji: "上野", kana: "うえの", english: "Ueno" },
      { kanji: "動物園", kana: "どうぶつえん", english: "zoo" },
      { kanji: "ゾウ", kana: "", english: "elephant" },
      { kanji: "キリン", kana: "", english: "giraffe" }
    ]
  },
  {
    id: 116,
    grammar: "〜のみならず",
    imi: "〜だけでなく",
    explanation: "この文法は～だけでなくという意味です。「〜のみ」この「のみ」という言葉は「だけ」という意味ですし「ならず」というのは、「ならない」という意味ですからね。「のみならず」というのは、「これだけではなく」という意味になりまます。\nThis grammar means 'not only ~'. The word 'のみ' means 'only', and 'ならず' means 'not to be'. Therefore, 'のみならず' means 'not only this'.",
    extraInfo: "「～のみならず、～も」でよく使われる。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "（ である ）" }, { name: "な形容詞", connector: "である" }],
      pattern: ["のみならず"],
    },
    examples: [
      {
        sentence: "彼は[優しい人である]{のみならず}、みんなをまとめるリーダーシップ[も]ある。",
        meaning: "He is not only a kind person, but also has leadership skills to unite everyone."
      },
      {
        sentence: "近年の日本のアニメは[子ども]{のみならず}、大人[も]楽しんで観るものという印象がある。",
        meaning: "In recent years, Japanese animation is not only enjoyed by children, but also by adults."
      },
      {
        sentence: "村上春樹の本は[日本人]{のみならず}、外国人に[も]よく知られている。",
        meaning: "Murakami Haruki's books are well-known not only among Japanese people, but also among foreigners."
      },
      {
        sentence: "日本語の森は、[日本国内]{のみならず}、世界中の人が使っている素晴らしいサービスだ。",
        meaning: "Nihongo No Mori is a wonderful service used by people all over the world, not just in Japan."
      },
    ],
    category: GrammarEntryCategory.ENUMERATION,
    newWords: [
      { kanji: "優しい", kana: "やさしい", english: "kind" },
      { kanji: "近年", kana: "きんねん", english: "recent years" },
      { kanji: "国内", kana: "こくない", english: "domestic" },
      { kanji: "素晴らしい", kana: "すばらしい", english: "wonderful" }
    ]
  },
  {
    id: 117,
    grammar: "〜といった",
    imi: "〜など",
    explanation: "例を並べるときに使う。この文法は～などという意味です。前に例をいくつか出します。これとかこれとかこれとかこれ・・といった～。というふうに例をいくつか出すときにこの文法が使われます。「これやこれやこれ、これなど」と言いたい時に使う文法ですね。\nThis grammar is used when listing examples. It means 'such as ~' or 'like ~'. You provide several examples before using this grammar. It is used when you want to say 'this and this and this, etc.' or 'this, this, this, and so on'.",
    extraInfo: "基本的には例は2つか3つくらい出すと自然です。\n\n「安っぽい」言葉というのは、「価値がない」言葉という意味です。",
    usage: {
      form: [{ name: "名詞１　＋　や・とか　＋　名詞２" }],
      pattern: ["といった"],
    },
    examples: [
      {
        sentence: "[お寿司]{や}[天ぷら]{といった}日本食は、海外でも人気が高い食べ物の一つだ。",
        meaning: "Japanese food such as sushi and tempura is one of the most popular foods overseas."
      },
      {
        sentence: "[掃除]{や}[洗濯]{といった}家事は、すべてロボットがやってくれる時代も遠くないだろう。",
        meaning: "Household chores such as cleaning and laundry will soon be done entirely by robots."
      },
      {
        sentence: "日本には[東京]{とか}[京都]{といった}、外国人に人気のある観光地がたくさんあるんだよ。",
        meaning: "There are many popular tourist spots in Japan, such as Tokyo and Kyoto, that are loved by foreigners."
      },
      {
        sentence: "[かわいい]、[きれい]{といった}安っぽい言葉で私が喜ぶと思わないでください•••。",
        meaning: "Don't think that I would be pleased by words like 'cute' or 'pretty'...",
      },
    ],
    category: GrammarEntryCategory.ENUMERATION,
    newWords: [
      { kanji: "掃除", kana: "そうじ", english: "cleaning" },
      { kanji: "観光地", kana: "かんこうち", english: "tourist spot" },
      { kanji: "喜ぶ", kana: "よろこぶ", english: "to be pleased" }
    ]
  },
  {
    id: 118,
    grammar: "〜上",
    imi: "〜だし、しかも",
    explanation: "この文法は～だし、しかもという意味です。これだし、しかもこういうことがあるというふうに情報を付け加えて言いたいときに使う文法です。そしてこの文法を使うとき、例えばほめることだったらいいことを並べないといけないし悪いことだったら悪いことを並べて言わなければいけません。\nThis grammar means 'and also ~' or 'moreover ~'. It is used when you want to add information by saying 'this is the case, and also this is the case'. When using this grammar, if you are praising something, you should list good things, and if you are criticizing something, you should list bad things.",
    extraInfo: "「その上」っていう言い方もよく使われます。",
    usage: {
      form: [{ name: "普通形" }, { name: "名詞", connector: "である" }, { name: "な形容詞", connector: "な・である" }],
      pattern: ["上（ に ）"],
    },
    examples: [
      {
        sentence: "寝坊して[遅刻した]{上に}宿題もやっていなかったので、先生に怒られてしまった。",
        meaning: "I overslept, was late, and didn't do my homework, so the teacher scolded me."
      },
      {
        sentence: "あのお店の商品は、[デザインが良い]{上}、機能性にも優れているのでよく買っている。",
        meaning: "I often buy products from that store because they have good design and are also functional."
      },
      {
        sentence: "この仕事は[危険な]{上に}給料も低いので、誰もやりたがらない。",
        meaning: "This job is dangerous and has a low salary, so no one wants to do it."
      },
    ],
    category: GrammarEntryCategory.ENUMERATION,
    newWords: [
      { kanji: "寝坊", kana: "ねぼう", english: "oversleeping" },
      { kanji: "遅刻", kana: "ちこく", english: "being late" },
      { kanji: "機能性", kana: "きのうせい", english: "functionality" },
      { kanji: "優れる", kana: "すぐれる", english: "to excel" }
    ]
  },
  {
    id: 119,
    grammar: "〜やら〜やら",
    imi: "～や〜など\n〜したり〜したり",
    explanation: "この文法は～とか～とか、と同じ意味です。「これやらこれやら」、これは「これとかこれとか」というように何かを並べて言いたいときに使う文法なんですが特に、「これとかこれとかこんなことがあってすごく大変だった」と、自分の気持ちを言いたい時とか気持ちが複雑ではっきり言えないとき、例えばうれしい気持ちもあったり悲しい気持ちもあってはっきり言えないというときにも、この「～やら〜やら」という文法が使われます。\nThis grammar means 'such as ~ and ~' or 'doing things like ~ and ~'. It is used when you want to list things, similar to 'this and this and so on'. It is particularly used when you want to express your feelings, especially when your feelings are complex and you cannot clearly express them. For example, when you have both happy and sad feelings and cannot clearly express them, this grammar '～やら〜やら' is used.\nIt's usually used to list multiple bad or chaotic things, often with the feeling of “this and that happened”",
    extraInfo: "この文法はそんなに日常生活で使われることはない。",
    usage: {
      form: [
        { name: "V. る１　＋　V. る２" },
        { name: "名詞１　＋　名詞２" },
        { name: "イ形容詞１　＋　イ形容詞２" }
      ],
      pattern: ["やら"],
    },
    examples: [
      {
        sentence: "寝坊して急いで家を出たので、[スマホ]{やら}[財布]{やら}必要なものを持ってくるのを忘れてしまった。",
        meaning: "I overslept and hurried out of the house, so I forgot to bring my phone, wallet, and other necessary items."
      },
      {
        sentence: "週末は、[掃除をする]{やら}[買い物に行く]{やら}、やらなければいけないことが色々ある。",
        meaning: "On weekends, I have all sorts of things to do, such as cleaning or going shopping."
      },
      {
        sentence: "子どもが成人して、[うれしい]{やら}[寂しい]{やら}複雑な気持ちだ。",
        meaning: "My child has grown up, and I feel a complex mix of happiness and sadness."
      },
      {
        sentence: "今日は寝坊するやら、うんちふむやらもう最悪な一日だった•••。",
        meaning: "Today was the worst day ever, oversleeping and stepping on poop..."
      },
    ],
    category: GrammarEntryCategory.ENUMERATION,
    newWords: [
      { kanji: "成人", kana: "せいじん", english: "adulthood" },
      { kanji: "寂しい", kana: "さびしい", english: "lonely" },
      { kanji: "複雑", kana: "ふくざつ", english: "complex" },
      { kanji: "踏む", kana: "ふむ", english: "to step on" },
      { kanji: "うんち踏む", kana: "うんちふむ", english: "to step on poop" }
    ]
  },
  {
    id: 120,
    grammar: "〜にしろ〜にしろ",
    imi: "〜でも〜でも\nどれでも",
    explanation: "この文法は～でも〜でも、という文法です。これも例をいくつかあげるときに使われる文法です。これでも、これでも、どれでもその中の物だったらどれでも同じことがいえると言いたいときに使う文法です。これでも、これでも、あれでも、それでもどれでも同じだ。結果は変わらないという時に使われます。\nThis grammar means 'whether ~ or ~' or 'whichever ~'. It is used when you want to list several examples. It is used when you want to say that no matter which one it is, the same thing can be said about it. Whether it's this or that, the result is the same.",
    extraInfo: "「するにしる、しないにしろ」のように反対の動作を並べて言う場合もあります。\n\nこの「〜にしろ」の部分なんですが～にしても～しても、と言ってもいいですし～にせよ～にせよ、こういう言い方もあります。これは全部、全く同じ意味です。\n聞いた印象もそこまで違いはないです。どれを使っても OKです。\nまあちょっとだけ「にしろ」よりも「にしても」の方が丁寧で「にしても」よりも「にせよ」の方がちょっとかたいかな？という印象はありますがだいたい同じです。",
    usage: {
      form: [
        { name: "V. る１　＋　V. る２" },
        { name: "V. る　＋　V. ない" },
        { name: "名詞１　＋　名詞２" },
      ],
      pattern: ["にしろ"],
    },
    examples: [
      {
        sentence: "試験を[受ける]{にしろ}[受けない]{にしろ}、とにかく勉強を続けておいて損はないと思う。",
        meaning: "Whether I take the exam or not, I think it's not a loss to keep studying."
      },
      {
        sentence: "[東京]{にしろ}[大阪]{にしろ}、梅雨の時期は洗濯物が乾かない。",
        meaning: "Whether it's Tokyo or Osaka, during the rainy season clothes don't dry."
      },
      {
        sentence: "[進学する]{にしろ}[就職する]{にしろ}、家族でよく話し合って決めてください。",
        meaning: "Whether you go to university or get a job, please discuss it with your family and make a decision."
      },
      {
        sentence: "[俺]{にしろ}[お前]{にしろ}、点数悪すぎじゃない？これ100点満点のテストだよ？",
        meaning: "Whether it's me or you, the score is too bad, right? This is a 100-point test!"
      },
    ],
    category: GrammarEntryCategory.ENUMERATION,
    newWords: [
      { kanji: "とにかく", kana: "とにかく", english: "anyway" },
      { kanji: "損", kana: "そん", english: "loss" },
      { kanji: "乾く", kana: "かわく", english: "to dry (out)" },
      { kanji: "進学", kana: "しんがく", english: "going on to higher education" },
      { kanji: "就職", kana: "しゅうしょく", english: "getting a job" },
      { kanji: "点数", kana: "てんすう", english: "score" },
      { kanji: "満点", kana: "まんてん", english: "perfect score" }
    ]
  },
  {
    id: 121,
    grammar: "〜も〜ば、〜も",
    imi: "〜も〜だし、〜も",
    explanation: "この文法の意味は、これもこうだしこれもこうだというふうに、これもこれもと並べて何かを言いたいときに使われる文法です。例えば、いいことを並べて言うときはいいこともいいこともと並べて言いますし、悪いことを並べて言うときは悪いことも悪いこともと並べて言います。両方の意味で使うことができます。\nThe meaning of this grammar is 'this is also this, and that is also that'. It is used when you want to list multiple things. For example, when listing good things, you say 'good thing and good thing', and when listing bad things, you say 'bad thing and bad thing'. It can be used for both meanings.",
    extraInfo: "この文法は少しかたい表現なので、日常生活で使われることはあまりないんですが、この会話の中で紹介した「先生が先生なら、学生も学生だな」とか「親が親なら、子も子だな」こういう言い方は会話の中でよく使われます。(Rewatch the video for reference)",
    usage: {
      form: [{ name: "名詞", connector: "も" }],
      pattern: ["V. ば", "イ形容詞 ければ", "な形容詞 なら", "名詞 なら"],
      secondsForm: [{ name: "名詞２", connector: "も" }],
    },
    examples: [
      {
        sentence: "文章を書くのが[上手な子]{も}<いれば>、計算が[早い子]{も}いる。",
        meaning: "There are children who are good at writing and children who are fast at calculations."
      },
      {
        sentence: "あそこのレストランは[味]{も}<おいしければ>、[店内]{も}きれいなので、また行こうと思っている。",
        meaning: "The restaurant over there is good in taste and the interior is also clean, so I'm thinking of going again."
      },
      {
        sentence: "今日は[山田くん]{も}<休みなら>、[鈴木くん]{も}休みで、教室がいつもより静かだ。",
        meaning: "Today, since Yamada-kun is off and Suzuki-kun is also off, the classroom is quieter than usual."
      },
    ],
    category: GrammarEntryCategory.ENUMERATION,
    newWords: [
      { kanji: "文章", kana: "ぶんしょう", english: "sentence" },
      { kanji: "計算", kana: "けいさん", english: "calculation" },
    ]
  },
  // SECTION 14: 語彙のような文法 - GRAMMAR 122 - 129
  {
    id: 122,
    grammar: "〜げ",
    imi: "〜そうだ",
    explanation: "この文法は～そうだという意味です。他の人から見てその人がこのように見えると言いたいときに使う文法です。特に気持ちですね。こういう気持ちなんだろうなと周りの人から見て、そう見えると言いたいときに使います。\nThis grammar means 'looks like ~' or 'seems ~'. It is used when you want to say how someone appears from the perspective of others. It is especially used for feelings. It is used when you want to say that from the perspective of people around, it looks like this is how they feel.",
    extraInfo: "よく使うのは、「寂しげ」とか「悲しげ」とか「うれしげ」とか、「楽しげ」ですね。こういう言葉はその人の気持ちを表しますよね。\n\nこの「～げ」という文法、日常生活でもよく使われるんですが、さっきも説明したように人の気持ちを表す言葉と一緒に使われることが、ほとんどです。ですから「暑げですね」とか、「寒げです」というような言い方はほとんどされません。",
    usage: {
      form: [
        { name: "V. たい", connector: "drop last い" },
        { name: "イ形容詞", connector: "drop last い" },
        { name: "ナ形容詞" },
        { name: "名詞" },
      ],
      pattern: ["げ"],
    },
    examples: [
      {
        sentence: "彼は「試験に合格したんだ」と、[自慢]{げ}に話しかけてきた。",
        meaning: "He boasted to me, saying 'I passed the exam.'"
      },
      {
        sentence: "今も変わらない母校を前に、彼は[懐かし]{げ}に思い出を語った。",
        meaning: "Before his unchanged alma mater, he spoke of memories with a nostalgic look."
      },
      {
        sentence: "犬が何か[言いた]{げ}な表情でこちらを見ているが、お腹でも空いたのだろうか。",
        meaning: "The dog is looking at me with a face that seems to want to say something, I wonder if it's hungry."
      },
      {
        sentence: "[得意]{げ}に話してるけど君まだN2合格してないよね？",
        meaning: "You're talking proudly, but you haven't passed the N2 yet, right?"
      },
    ],
    category: GrammarEntryCategory.LEXICAL_GRAMMAR,
    newWords: [
      { kanji: "自慢", kana: "じまん", english: "boast" },
      { kanji: "母校", kana: "ぼこう", english: "alma mater" },
      { kanji: "懐かしい", kana: "なつかしい", english: "nostalgic" },
      { kanji: "語る", kana: "かたる", english: "to talk about" },
      { kanji: "表情", kana: "ひょうじょう", english: "facial expression" },
      { kanji: "得意", kana: "とくい", english: "pride" }
    ],
    important: true
  },
  {
    id: 123,
    grammar: "〜気味",
    imi: "少し〜のような感じがする",
    explanation: "この文法は少し～のような感じがするという意味です。はっきりこうだと言うことができないんだけどちょっとこんな感じがするなと言いたいときに使う文法です。\nThis grammar means 'feeling a little ~'. It is used when you cannot say something clearly, but you want to express that you feel something like this a little bit.",
    extraInfo: "この文法もどんな言葉でも使えるというわけではなくて「疲れぎみ」とか「太り気味」のように、状態を表す言葉と一緒に使われることがほとんどです。ですから、「食べぎみ」とか、「行きぎみ」という言い方は使いません。\n\n「疲れ気味」という言い方、日常生活でもよく使います。\n\nこの～ぎみという文法は日常会話でもよく使われます。友達同士の会話でもよく使われる文法ですね。特に今回例文で紹介したものは本当によく使われるのでぜひ覚えて使ってみてください！",
    usage: {
      form: [{ name: "V. ます STEM" }, { name: "名詞" }],
      pattern: ["気味"],
    },
    examples: [
      {
        sentence: "最近[太り]{気味なんだ}よね•••。",
        meaning: "I've been feeling a bit overweight lately...",
        point: "最近ちょっと太ってきている感じがするという意味です。",
      },
      {
        sentence: "ちょっと今日[かぜ]{気味なんだ}•••。",
        meaning: "I'm feeling a bit cold today...",
        point: "まだかぜをひいたとは言えないくらいなんだけどちょっとかぜをひき始めている感じがするという意味です。",
      },
      {
        sentence: "最近は残業が続いて[疲れ]{気味だった}ので、休日は家でゆっくり過ごすことにした。",
        meaning: "Recently, I've been working overtime and feeling a bit tired, so I decided to spend my days off relaxing at home."
      },
      {
        sentence: "4時には目的地に着く予定だったが、道が混んでいて[遅刻]{気味だ}。",
        meaning: "I was supposed to arrive at my destination by 4 o'clock, but the roads are crowded and I'm running a bit late."
      },
      {
        sentence: "最近は運動もせず、カロリーの高いものばかり食べているので[太り]{気味だ}。",
        meaning: "Recently, I haven't been exercising and have been eating a lot of high-calorie foods, so I'm feeling a bit overweight."
      },
    ],
    category: GrammarEntryCategory.LEXICAL_GRAMMAR,
    newWords: [
      { kanji: "気味", kana: "ぎみ", english: "a bit" },
      { kanji: "目的地", kana: "もくてきち", english: "destination" },
      { kanji: "遅刻", kana: "ちこく", english: "lateness" }
    ],
    important: true
  },
  {
    id: 124,
    grammar: "〜がち",
    imi: "よく〜になる\nよく〜する",
    explanation: "この文法は、よく～になるとかよく～をするという意味の文法です。～をする傾向があると言いたいときに使う文法です。\nThis grammar means 'often becomes ~' or 'often does ~'. It is used when you want to say that there is a tendency to do something.",
    extraInfo: "これも日常会話で良く使われますね。\n病気がちとか、休みがち、忘れがち悪い方に考えがち、とかなまけがちと言い方がよく使われます。",
    usage: {
      form: [{ name: "V. ます STEM" }, { name: "名詞" }],
      pattern: ["がち"],
    },
    examples: [
      {
        sentence: "疲れたり気分が落ち込んでいると、物事を悪いように[考え]{がち}になってしまう。",
        meaning: "When you're tired or in a bad mood, you tend to think negatively about things."
      },
      {
        sentence: "最近はやる気が起きなくて、勉強を[怠け]{がち}だ。",
        meaning: "Recently, I haven't been feeling motivated and I tend to neglect my studies."
      },
      {
        sentence: "子どものころは[病気]{がち}で、よく学校を休んでいた。",
        meaning: "When I was a child, I was often sick and used to miss school."
      },
      {
        sentence: "君は[失敗し]{がち}だから、ぼくがやっとくよ。",
        meaning: "You tend to fail, so I'll do it for you."
      },
    ],
    category: GrammarEntryCategory.LEXICAL_GRAMMAR,
    newWords: [
      { kanji: "物事", kana: "ものごと", english: "matters" },
      { kanji: "怠ける", kana: "なまける", english: "to be lazy" }
    ],
    important: true
  },
  {
    id: 125,
    grammar: "〜っぽい",
    imi: "① 〜のように感じる\n② よく〜する",
    explanation: "この文法は2つ意味があります。1つめは〜のように感じるという意味で2つめは、よく～するという意味です。これは使われる場面とか単語によって変わるんですが、たとえば「彼は子どもっぽい人だ」というふうに言ったら本当はこどもじゃない、大人なんだけど子供のように感じる、そういう性格だという意味になります。それから「私は忘れっぽい性格です」、というふうに言ったら2つめの意味ですね。「私はよく忘れる性格です」という意味です。言われたことを忘れたり持ち物を忘れてしまったり、そういう人の事を忘れぽい性格というふうに言います。\nThis grammar has two meanings. The first is 'feels like ~' and the second is 'often does ~'. The meaning changes depending on the context and the words used. For example, if you say 「彼は子どもっぽい人だ」, it means that he is not really a child, but an adult who feels like a child in terms of personality. On the other hand, if you say 「私は忘れっぽい性格です」, it means 'I often forget things'. It refers to people who tend to forget what they were told or their belongings.",
    extraInfo: "この文法、日常生活でも本当によく使われます。意味が2つあると言ったんですが人の性格を表す言葉と使う場合には2つめの、よく～するの意味でほとんど使われます。",
    usage: {
      form: [{ name: "V. ます STEM" }, { name: "名詞" }],
      pattern: ["っぽい"],
    },
    examples: [
      {
        sentence: "私は昔から[飽き]{っぽい}性格で、何をやっても長く続かなかった。",
        meaning: "I've always been a person who gets bored easily, so I never stick with anything for long."
      },
      {
        sentence: "彼の言うことは、なんとなく[嘘]{っぽい}ので信じないようにしている。",
        meaning: "His words feel somewhat like lies, so I try not to believe them."
      },
      {
        sentence: "彼女は仕事を変えてストレスがたまっているのか、[怒り]{っぽく}なった。",
        meaning: "She's become more irritable, probably because she's stressed from changing jobs."
      },
    ],
    category: GrammarEntryCategory.LEXICAL_GRAMMAR,
    newWords: [
      { kanji: "飽きる", kana: "あきる", english: "to get bored" },
      { kanji: "嘘", kana: "うそ", english: "lie" },
    ],
    important: true
  },
  {
    id: 126,
    grammar: "〜かけ",
    imi: "〜し終わらない",
    explanation: "この文法は～し終わらないという意味です。何か動作をやり始めて、それが最後まで終わっていないということを表す文法です。例えば、「食べかけのパン」だったら食べ始めてまだ最後まで食べ終わっていないパンという意味ですし、「読みかけの本」だったらまだ読み終わっていない本という意味になります。このように何かを最後までし終わっていないということを表す文法です。\nThis grammar means 'not finished doing ~'. It expresses that an action has been started but not completed. For example, '食べかけのパン' means bread that has been started to be eaten but not finished, and '読みかけの本' means a book that has not been finished reading. It is used to express that something has not been completed.",
    usage: {
      form: [{ name: "V. ます STEM" }],
      pattern: ["かける"],
      combinedForms: [
        { first: "V. ます STEM" , pattern: ["かけの"], second: "名詞" },
      ]
    },
    examples: [
      {
        sentence: "机の上に、[飲み]{かけの}[コーヒー]と[食べ]{かけの}[クッキー}が置いてある。",
        meaning: "On the desk, there are a coffee that was started drinking but not finished and cookies that were started eating but not finished."
      },
      {
        sentence: "母が夕食を[作り]{かけた}のに、父は家族でお寿司を食べに行こうと言い出した。",
        meaning: "Mother had started preparing dinner, but Father said he wanted to go out for sushi with the family."
      },
      {
        sentence: "家に[読み]{かけの}[本]があるのに、新しい本を買ってしまった。",
        meaning: "There's a book I haven't finished reading at home, but I bought a new one anyway."
      },
      {
        sentence: "全部[やり]{かけ}で一日が終わってしまった・・・。",
        meaning: "I had left everything unfinished and the day ended..."
      },
    ],
    category: GrammarEntryCategory.LEXICAL_GRAMMAR,
  },
  {
    id: 127,
    grammar: "〜向け",
    imi: "〜に合う",
    explanation: "この文法は～に合うという意味があります。向くっていうのは、ある方向を見るという意味ですからね。例えば「日本語の森は日本語学習者向けに作られているものです。」こういうふうに言ったら、日本語を勉強している人のことを見て、その人のことを見てその人に合った物を作っているという意味です。\nThis grammar means 'suitable for ~'. '向け' means to face a certain direction. For example, if you say 「日本語の森は日本語学習者向けに作られているものです。」, it means that Nihongo No Mori is created with Japanese language learners in mind, making it suitable for them.",
    usage: {
      form: [{ name: "名詞" }],
      pattern: ["向けに"],
      combinedForms: [
        { first: "名詞１" , pattern: ["向けの"], second: "名詞２" },
      ]
    },
    examples: [
      {
        sentence: "来月から、[新入社員]{向けの}[研修]カリキュラム作成を担当することになった。",
        meaning: "Starting next month, I will be in charge of creating a training curriculum for new employees."
      },
      {
        sentence: "この本は[子ども]{向けに}書かれた本だが、大人が読んでもおもしろい。",
        meaning: "This book is written for children, but adults can also find it interesting."
      },
      {
        sentence: "この食堂は、[学生]{向けに}安くて量が多いメニューを用意している。",
        meaning: "This cafeteria prepares affordable and generous menus for students."
      },
    ],
    category: GrammarEntryCategory.LEXICAL_GRAMMAR,
    newWords: [
      { kanji: "向く", kana: "むく", english: "to face" },
      { kanji: "研修", kana: "けんしゅう", english: "training" },
      { kanji: "カリキュラム", kana: "", english: "curriculum" },
      { kanji: "作成", kana: "さくせい", english: "creation" },
      { kanji: "担当", kana: "たんとう", english: "in charge" },
      { kanji: "食堂", kana: "しょくどう", english: "cafeteria" },
    ]
  },
  {
    id: 128,
    grammar: "〜得る",
    imi: "〜の可能性がある",
    explanation: "この文法は～の可能性があるという意味です。「得る」という言葉は手に入れるという意味があります。自分のものにするという意味があるので前に動詞がついて〜し得るというふうに言った場合は～できるという可能性があるという意味になります。\nThis grammar means 'there is a possibility of ~'. The word '得る' means to obtain or acquire something. When a verb is attached before it, as in ～し得る, it means that there is a possibility of being able to do something.",
    extraInfo: "この「得る」{える} という言葉は「うる」とも読みます。～しえる、～しうる、どちらを言っても〜の可能性があるという意味は変わらないんですが「うる」と言った方がちょっとだけかたいかな？という印象があります。少し古い印象ですね。でも意味は全く変わらないのでどちらで読んでも大丈夫です。\n「〜し得ない」の場合は「うない」とは読まないのでここは注意してください。\n\n\nこの〜得る・〜得ないという文法は会話の中で使うと少しかたい印象になるんですがさっき紹介した「ありえない」という言葉は友達との会話でもよく使われます。信じられない！と思う時に「ありえない」と使ってみてください。(There's no way! / Unbelievable!)",
    usage: {
      form: [{ name: "V. ます STEM" }],
      pattern: ["得る", "得ない"],
    },
    examples: [
      {
        sentence: "あんなに成績の良かった彼が試験に不合格だなんて、[あり]{得ない}！",
        meaning: "It's impossible for someone who did so well on the test to fail.",
        point: "あるという可能性がないという意味ですから、つまり絶対にない！という意味です。",
      },
      {
        sentence: "地震はいつでも[起こり]{得る}ので、非常時の集合場所を決めておきましょう。",
        meaning: "Earthquakes can happen anytime, so let's decide on a gathering place in case of an emergency."
      },
      {
        sentence: "食事を一切とらないなどの無理なダイエットは病気の原因に[なり]{得ます}。",
        meaning: "Extreme diets that involve not eating at all can cause illness."
      },
    ],
    category: GrammarEntryCategory.LEXICAL_GRAMMAR,
    newWords: [
      { kanji: "得る", kana: "える", english: "to gain" },
      { kanji: "成績", kana: "せいせき", english: "grade" },
      { kanji: "非常", kana: "ひじょう", english: "emergency" },
      { kanji: "集合", kana: "しゅうごう", english: "gathering" },
      { kanji: "一切", kana: "いっさい", english: "none at all" }
    ]
  },
  {
    id: 129,
    grammar: "〜きり",
    imi: "〜したあと、ずっとそのまま",
    explanation: "この文法は～した後ずっとそのままという意味があります。それをした後から何も変わっていないずっとその状態が続いていると言いたいときに使う文法です。\nThis grammar means 'after doing ~, it remains that way'. It is used when you want to say that nothing has changed since doing something and that state continues.",
    extraInfo: "話すときには小さい「つ」が間に入って、「行ったっきり」のような言い方になる場合もあります。",
    usage: {
      form: [{ name: "V. た" }],
      pattern: ["きり", "っきり"],
    },
    examples: [
      {
        sentence: "「ごめん。」と[言った]{っきり}、彼はだまり込んでしまった。",
        meaning: "After saying 'I'm sorry,' he just stood there in silence."
      },
      {
        sentence: "高校時代の親友とは10年前に[会った]{きり}、連絡もしていない。",
        meaning: "I haven't had any contact with my childhood friend since we last met 10 years ago."
      },
      {
        sentence: "仕事が忙しくて、朝パンを一枚[食べた]{きり}何も食べていない。",
        meaning: "Because I was busy with work, I only ate one slice of bread for breakfast and haven't eaten anything else."
      },
    ],
    category: GrammarEntryCategory.LEXICAL_GRAMMAR,
    newWords: [
      { kanji: "一枚", kana: "いちまい", english: "one slice" },
    ]
  },
  // SECTION 15: 丁寧な表現・その他 - GRAMMAR 130 - 135
  {
    id: 130,
    grammar: "おいでになる",
    imi: "「行く・来る・いる」の尊敬語",
    explanation: "この言葉は3つ意味があります。1つめは「行く」2つめは「来る」3つめは「いる」です。行く・来る・いる、この3つの動詞の尊敬語です。\nこの3つの意味は、場面によってどの意味になるかがかわります。",
    extraInfo: "おいで --> いる",
    examples: [
      {
        sentence: "来週、中本部長が出張のため[大阪へ]{おいでになる}そうです。",
        meaning: "",
        point: "「行く」の意味です。"
      },
      {
        sentence: "ゆか先生、至急、[会議室に]{おいでください}。",
        meaning: "xxxxx",
        point: "「来る」の意味です。",
      },
      {
        sentence: "佐藤様は、もうすでに本社の[待合室に]{おいでです}。",
        meaning: "xxxxx",
        point: "「いる」の意味です。",
      },
      {
        sentence: "xxxxx",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.POLITE_EXPRESSIONS_OTHERS,
    newWords: [
      { kanji: "xx", kana: "xx", english: "xx" },
      { kanji: "xx", kana: "xx", english: "xx" },
      { kanji: "xx", kana: "xx", english: "xx" }
    ],
    important: true
  },
  {
    id: 131,
    grammar: "〜ご存知ですか",
    imi: "「知っていますか？」の尊敬語",
    explanation: "この表現は「知っていますか？」の尊敬語です。存じるというのは、知っているとか自分が思うという意味があります。ですから相手に「ご存知ですか」というふうに聞いたら「知っていますか？」の丁寧な言い方になります。何かを知っているかどうか確認する時のとても丁寧な表現です。",
    extraInfo: "ご存知ですかという聞き方はとても丁寧な表現なの初対面の人とか目上の人にはよく使う言い方です。",
    examples: [
      {
        sentence: "山田：日本語の森のゆか先生を{ご存知ですか}。\n田中：はい、存じ上げております。",
        meaning: "xxxxx"
      },
      {
        sentence: "中本部長が大阪へ転勤になること、もう{ご存知ですか}。",
        meaning: "xxxxx"
      },
      {
        sentence: "彼女の連絡先を{ご存知}でしたら、教えていただけませんか。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.POLITE_EXPRESSIONS_OTHERS,
    newWords: [
      { kanji: "転勤", kana: "xx", english: "xx" },
      { kanji: "連絡先", kana: "xx", english: "xx" },
    ]
  },
  {
    id: 132,
    grammar: "〜してもよろしいでしょうか",
    imi: "〜してもいいですか？",
    explanation: "この表現は～してもいいですかという意味です。〜してもいいですかと相手に何かを聞いたり尋ねたり、それから許可をとったりするときに使うとても丁寧な表現です。",
    extraInfo: "この3つを覚えてください：\n「お聞きしてもよろしいでしょうか？」\n「お伺いしてもよろしいでしょうか？」\n「お尋ねしてもよろしいでしょうか？」",
    examples: [
      {
        sentence: "もう一度、お名前を{お聞きしてもよろしいでしょうか}。",
        meaning: "xxxxx"
      },
      {
        sentence: "失礼ですが、年齢を{お伺いしてもよろしいでしょうか}。",
        meaning: "xxxxx"
      },
      {
        sentence: "すみません、一つ{お尋ねしてもよろしいでしょうか}。",
        meaning: "xxxxx"
      },
      {
        sentence: "あー、先生、すいません。この問題の答えを{お聞きしてもよろしいでしょうか}。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.POLITE_EXPRESSIONS_OTHERS,
    newWords: [
      { kanji: "伺う", kana: "xx", english: "xx" },
      { kanji: "尋ねる", kana: "xx", english: "xx" },
      { kanji: "年齢", kana: "xx", english: "xx" },
    ],
    important: true
  },
  {
    id: 133,
    grammar: "〜させてもらう",
    imi: "〜することを許してもらう（くれる）",
    explanation: "この文法は〜することを許してもらうとか許してくれるという意味の文法です。「させる」は使役ですよね。人に何かをさせるという時に使うんですがさせてもらうと言っていますから何か許可をしてもらう、そしてそれをすることができると言いたいときに使います。許してもらうとか、許可をもらうという意味の文法なのでこの文法を使うときはお母さんと子供とかね。上司と部下のように、それをしてもいいですよと許可を出す立場の上の人と下の人という関係で使われる場合がほとんどです。",
    usage: {
      form: [{ name: "V. ない STEM" }],
      pattern: ["（ さ ）せてもらう", "（ さ ）せてくれる"],
    },
    examples: [
      {
        sentence: "サッカー、バレエ、習字など、両親は私のやりたいことを全部[やら]{せてくれた}。",
        meaning: "xxxxx"
      },
      {
        sentence: "小さい頃は貧乏で好きなものを[食べ]{させてもらえなかった}ので、大人になったらいろんなものを食べたいとずっと思っていた。",
        meaning: "xxxxx"
      },
      {
        sentence: "会社での頑張りが認められて、新商品の開発リーダーを[任]{せてもらえる}ことになった。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.POLITE_EXPRESSIONS_OTHERS,
    newWords: [
      { kanji: "使役", kana: "xx", english: "xx" },
      { kanji: "許可", kana: "xx", english: "xx" },
      { kanji: "許す", kana: "xx", english: "xx" },
      { kanji: "習字", kana: "xx", english: "xx" },
      { kanji: "貧乏", kana: "xx", english: "xx" },
      { kanji: "認める", kana: "xx", english: "xx" },
      { kanji: "開発", kana: "xx", english: "xx" },
      { kanji: "任せる", kana: "xx", english: "xx" },
    ]
  },
  {
    id: 134,
    grammar: "〜かねる",
    imi: "〜するのが難しい\n～できない",
    explanation: "この表現は〜するのが難しいとかそれはできないと言いたいときに使う表現です。〜かねるという表現自体がすごく丁寧で敬語表現だということはできないんですがこの〜かねるという言い方はお客様と店員が話をするときによく使われるのでここで紹介しておきます。",
    extraInfo: "特にお客様に対して「できない」と伝える時によく使われる。\n\nこの「～かねる」という表現日本のお店に行くとよく聞きます。特に値段の高いお店に行くとよく使われていますね。コンビニだったら「それはできません」のように言われることが多いです。でも百貨店とか高級レストランとかホテルに泊まった時などは「そちらはできかねます」とか「お答えしかねます」のように断られることがある。",
    usage: {
      form: [{ name: "V. ます STEM" }],
      pattern: ["かねる"],
    },
    examples: [
      {
        sentence: "大変申し訳ありませんが、そちらの質問には[お答えし]{かねます}。",
        meaning: "xxxxx"
      },
      {
        sentence: "客：これ、返品したいんですが。\n店員；大変申し訳ありません。返品の対応は[致し]{かねます}。",
        meaning: "xxxxx"
      },
      {
        sentence: "大変申し上げにくいのですが、そちらの意見には[賛成し]{かねます}。",
        meaning: "xxxxx"
      },
      {
        sentence: "申し訳ございません。一度食べてしまったものは返品[でき]{かねます}。",
        meaning: "xxxxx"
      },
    ],
    category: GrammarEntryCategory.POLITE_EXPRESSIONS_OTHERS,
    newWords: [
      { kanji: "致す", kana: "xx", english: "xx" },
      { kanji: "賛成", kana: "xx", english: "xx" },
    ]
  },
  {
    id: 135,
    grammar: "〜もらってくれない？",
    imi: "私のために、この物を「もらう」ということをしてくれませんか？",
    explanation: "この表現「もらう」と「くれる」が並んでいてよくわかりにくいかもしれないんですが「もらってくれない？」というのは「もらうという行為を私のためにしてくれませんか？」とお願いをするときに使う表現です。このものをあなたがもらうということをしてほしいとお願いをしているので、つまりこれをあげます。という意味と同じです。でも「もらってくれない？」という表現を使うときは決まった場面があります。",
    extraInfo: "この「もらってくれない？」という表現は日常生活でもよく使われます。基本的にあげるという行為は、あげる人が上でもらう人が下になるはずですね。もちろん何かをもらうわけですから、ありがとうございますともらった人は思うんですが「もらってくれない？」というふうに聞くとこれをあげることは迷惑かもしれないけど私がうれしいからもらってほしいという意味になります。\n実際の会話で使われるときは本当にもらってうれしいものなんだけどあげる人は「もらってくれない？」というふうに言う場合が多いです。これはあげる人が「そんなに、たいしたものじゃないんですよ」と謙遜をする意味でも使われますしもらってくれない？というふうに言うことでもらう人もそのものをもらいやすくなるという効果があります。",
    examples: [
      {
        sentence: "引っ越しするんだけど、家にある漫画全部{もらってくれない？}",
        meaning: "xxxxx",
        point: "家にあるまんが、あなたにあげたいと言っています。",
      },
      {
        sentence: "実家から野菜がたくさん送られてきたから、少し{もらってくれない？}",
        meaning: "xxxxx",
        point: "実家からたくさん野菜が送られてきたからちょっとあげるよと言っているんですね。たくさん野菜があっても、一人で食べきることができない場合もありますよね。",
      },
      {
        sentence: "プレゼントでもらった服、小さくてサイズが合わないから、{もらってくれない？}",
        meaning: "xxxxx",
        point: "これは私のためにこのものをもらうということをしてほしいという意味です。",
      },
    ],
    category: GrammarEntryCategory.POLITE_EXPRESSIONS_OTHERS,
    newWords: [
      { kanji: "実家", kana: "xx", english: "xx" },
    ],
    important: true
  },
  //TODO: Add translations for unit 15: 丁寧な表現・その他
  //TODO: Add translations for unit 2: 「こと」シリーズ
];
