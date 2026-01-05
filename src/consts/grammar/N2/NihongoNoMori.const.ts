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
  // SECTION 2: 「こと」シリーズ - GRAMMAR 1 - 10
  // SECTION 3: 「限り」シリーズ - GRAMMAR 1 - 10
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
];
