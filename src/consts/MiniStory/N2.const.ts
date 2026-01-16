const MiniStoryTopics = {
  FOOD: '食事',
  HOUSE_WORK: '家事',
} as const;

const MiniStoryWordType = {
  GODAN_INTRANSITIVE: '動1自',
  ICHIDAN_INTRANSITIVE: '動2自',
  IRREGULAR_INTRANSITIVE: '動3自',
  GODAN_TRANSITIVE: '動1他',
  ICHIDAN_TRANSITIVE: '動2他',
  IRREGULAR_TRANSITIVE: '動3他',
  IRREGULAR_HYBRID: '動3自他',
  ADJECTIVE_NA: 'ナ形',
  ADJECTIVE_I: 'イ形',
  ADVERB: '副',
  NOUN: '名',
  EXPRESSION: '表現',
  PREFIX: '接頭',
  SUFFIX: '接尾',
  CLAUSE: '句',
  CONJUNCTION: '接続',
  OTHER: 'その他',
} as const;

export const MINI_STORY_N2: Record<string, MiniStory> = {
  "1": {
    id: "1",
    rubyStory: [
      {
        character: "A",
        dialogue: "先週行った駅前の<創{そう}作{さく}>料理の店、閉{へい}店{てん}するんだって。",
      },
      {
        character: "B",
        dialogue: "え、あの店、<食{しょく}物{もつ}>アレルギーに対{たい}応{おう}したメニューもあってよかったのに。",
      },  
      {
        character: "A",
        dialogue: "ね。駅前は、チェーンのファミレスも多いし、やっぱり、小さい店がそういう大きい店と<勝{しょう}負{ぶ}する>のは難しいのかもね。",
      },
    ],
    rubyWords: [
      {
        kanji: "創{そう}作{さく}",
        english: "creative, create"
      },
      {
        kanji: "食{しょく}物{もつ}",
        english: "food"
      },
      {
        kanji: "勝{しょう}負{ぶ}[する]",
        english: "Victory, to compete"
      },
    ],
    translation: `A: I heard that the creative cuisine restaurant by the station that we went to last week is closing.\nB: What? That restaurant was great—it had a menu for people with food allergies.\nA: Yeah. There are lots of franchise family restaurants near the station, and it's probably difficult for a smaller restaurant to compete with such large places.`,
    audio: "T1.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 14,
  },
  "2": {
    id: "2",
    rubyStory: [
      {
        character: "",
        dialogue: "日本の米は、品種によって<粒{つぶ}>の大きさ、甘<み>、食{しょっ}感{かん}などが異{こと}なる。300gの少{しょう}量{りょう}<パック>も売っているので、いろいろと試{ため}してみるのもいいだろう。保{ほ}存{ぞん}するときは、温{あたた}かいうちに1<人{にん}前{まえ}>ずつ<ラップ>で包{つつ}むのが大切だ。<冷{さ}めたら>さらに<アルミホイル>で包{つつ}んで冷{れい}凍{とう}庫{こ}に入{い}れれば、おいしいまま冷{れい}凍{とう}できる。",
      },
    ],
    rubyWords: [
      {
        kanji: "粒{つぶ}",
        english: "grain"
      },
      {
        kanji: "〜み",
        english: "〜ness"
      },
      {
        kanji: "パック［する］",
        english: "to pack / package"
      },
      {
        kanji: "〜人前",
        english: "serving / portion"
      },
      {
        kanji: "ラップ［する］",
        english: "plastic wrap / to wrap"
      },
      {
        kanji: "冷{さ}める",
        english: "to cool down"
      },
      {
        kanji: "冷{さ}ます",
        english: "to cool down"
      },
      {
        kanji: "アルミホイル",
        english: "aluminum foil"
      },
    ],
    translation: `Japanese rice varies in grain size, sweetness, and texture, depending on the variety. Small 300 gram packs are available, so it's a good idea to try different varieties. When storing rice, its important to wrap it in single portions in plastic wrap while it's still warm. After they cool, wrap them in aluminum foil and put them in the freezer to freeze them while they are still full of flavor.`,
    audio: "T2.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 15,
  },
  "3": {
    id: "3",
    rubyStory: [
      {
        character: "A",
        dialogue: "あそこのラーメン屋、どうだった？",
      },
      {
        character: "B",
        dialogue: "うーん。<あっさり>してて、ちょっと<物{もの}足{た}りない>と思った。やっぱり、ラーメンは<脂{あぶら}>が<たっぷり>入ってるのが<好{この}み>だなあ。",
      },
      {
        character: "A",
        dialogue: "ああ、そうだね。",
      },
      {
        character: "B",
        dialogue: "あ、でも、チャーシューが<あぶって>あったのはよかったね。",
      },
    ],
    rubyWords: [
      {
        kanji: "あっさり",
        english: "lightly・plainly・simply",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "物{もの}足{た}りない",
        english: "lacking・unsatisfying/",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "脂{あぶら}",
        english: "Fat",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "たっぷり",
        english: "generously・plentifully",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "好{この}み",
        english: "preference",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "好{この}む",
        english: "To prefer",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "あぶる",
        english: "roast・sear",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `A: How was that ramen shop?\nB: Hmmm. Well, I found it rather light and unsatisfying. Personally, I prefer ramen with plenty of fat.\nA: Oh, right.\nB: But the roasted pork was nicely seared.`,
    audio: "T3.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 16,
  },
  "4": {
    id: "4",
    rubyStory: [
      {
        character: "A",
        dialogue: "ご注文はお決まりですか。",
      },
      {
        character: "B",
        dialogue: "えっと、日{ひ}替{が}わりランチ。",
      },
      {
        character: "A",
        dialogue: "はい、では、こちらから<メイン>をお選びください。",
      },
      {
        character: "B",
        dialogue: "あ、じゃ、<ミックス>フライで。",
      },
      {
        character: "A",
        dialogue: "はい。サラダのドレッシングはいかがなさいますか。",
      },
      {
        character: "B",
        dialogue: "あ、<和{わ}風{ふう}>ドレッシングで。<それと>、抹{まっ}茶{ちゃ}パフェお願いします。",
      },
    ],
    rubyWords: [
      {
        kanji: "メイン",
        english: "Main dish",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ミックス［する］",
        english: "Mix・To mix",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "和{わ}風{ふう}",
        english: "Japanese SStyle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "洋{よう}風{ふう}",
        english: "Western-style",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "それと",
        english: "And also",
        type: MiniStoryWordType.CONJUNCTION
      },
    ],
    translation: `A: Have you decided what you want to order?\nB: Let's see, the daily lunch.\nA: Right, well, please choose your main dish here.\nB: Oh, well, I'll have the mixed deep-fry plate.\nA: Got it. What kind of dressing would you like for your salad?\nB: Um, Japanese-style dressing. And also, the green tea parfait, please.`,
    audio: "T4.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 16,
  },
  "5": {
    id: "5",
    rubyStory: [
      {
        character: "A",
        dialogue: "なんか<煙{けむ}く>ない？",
      },
      {
        character: "B",
        dialogue: "確{たし}かに・・・あ、<焦{こ}げて>る！この黒{くろ}い<塊{かたまり}>、何？",
      },
      {
        character: "A",
        dialogue: "うーん・・・たぶん、ホルモン・・・。",
      },
    ],
    rubyWords: [
      {
        kanji: "煙{けむ}い",
        english: "Smoky",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "焦{こ}げる",
        english: "To burn",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "焦{こ}がす",
        english: "To burn (Something)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "塊{かたまり}",
        english: "Chunk・Lump",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Can't you smell smoke?\nB: I sure can... Oh, it's burning! What are these black chunks?\nA: Hmmm... its probably offal..`,
    audio: "T5.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 17,
  },
  "6": {
    id: "6",
    rubyStory: [
      {
        character: "",
        dialogue: "この店の<名{めい}物{ぶつ}>は、皮{かわ}付{つ}きのりんごが<丸{まる}々{まる}>1個{こ}入{はい}ったアップルパイだ。<芯{しん}>をくりぬいた部分には、スポンジが<ぎっしり>と詰{つ}まっている。<見{み}た目{め}>がかわいい上にとてもおいしく、大人気だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "名{めい}物{ぶつ}",
        english: "Specialty",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "丸{まる}々{まる}",
        english: "Entirely・Wholly",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "芯{しん}",
        english: "Core",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ぎっしり（と）",
        english: "Tightly・Fully",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "見{み}た目{め}",
        english: "Appearance・Look",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `This store's specialty is apple pie, made from an entire apple with the skin left on. The core is hollowed out and packed full of sponge cake. The pie looks cute, tastes really great, and is very popular.`,
    audio: "T6.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 18,
  },
  "7": {
    id: "7",
    rubyStory: [
      {
        character: "A",
        dialogue: "今度の歓{かん}迎{げい}会{かい}だけど、焼肉<食{た}べ放{ほう}題{だい}>はどう？",
      },
      {
        character: "B",
        dialogue: "いいですね。でも、胃{い}が<もたれ>そうだな。",
      },
      {
        character: "A",
        dialogue: "え、まだ若いのに。じゃあ、このしゃぶしゃぶ屋はどう？<上{じょう}等{とう}な>肉が安く食べられるって<ロ{くち}コミ>でも評{ひょう}判{ばん}だよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "食{た}べ放{ほう}題{だい}",
        english: "All-you-can-eat",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～放{ほう}題{だい}",
        english: "All-you-can〜",
        type: MiniStoryWordType.PREFIX
      },
      {
        kanji: "もたれる",
        english: "Sit heavily",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "上{じょう}等{とう}な",
        english: "High-end・Top quality",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "口{くち}コミ",
        english: "Word of mouth",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: How about all-you-can-eat barbecue for the upcoming welcome party?\nB: Sounds good. But it'll probably sit too heavily in my stomach.\nA: What? You're still young. How about this shabu-shabu place? It's got great word-of-mouth for being inexpensive for top-quality meat.`,
    audio: "T7.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 18,
  },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxxxxxxxxxxxxxxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //     {
  //       kanji: "xxxx",
  //       english: "xxxx",
  //       type: MiniStoryWordType.
  //     },
  //   ],
  //   translation: `xxxx`,
  //   audio: "Txxxx.mp3",
  //   topic: MiniStoryTopics.FOOD,
  //   page: 10000000000,
  // },
  
};