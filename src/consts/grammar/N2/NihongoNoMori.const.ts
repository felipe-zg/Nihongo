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
];
