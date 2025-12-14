import { GrammarEntryCategory } from "../../../enums";

export const NIHONGO_NO_MORI_GRAMMAR_N2: GrammarEntry[] = [
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
]