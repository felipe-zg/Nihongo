export const MINISTORY_KANJIS_N2: Record<string, MinistoryRubyKanji> = {
  "創": { kanji: "創", meaning: "create・Start・originate", rubyWord: "創{つく}る", wordMeaning: "to create" },
  "勝": { kanji: "勝", meaning: "victory", rubyWord: "勝{か}つ", wordMeaning: "to win" },
  "負": { kanji: "負", meaning: "defeat", rubyWord: "負{ま}ける", wordMeaning: "to lose" },
  "種": { kanji: "種", meaning: "Seed・Kind・type・species", rubyWord: "種{しゅ}類{るい}", wordMeaning: "Kind・type" },
  "放": { kanji: "放", meaning: "To let go", rubyWord: "放{はな}す", wordMeaning: "to let go・to release", wordSentence: "手を放す"},
  "題": { kanji: "題", meaning: "Topic・Subject・Problem・Question", rubyWord: "問{もん}題{だい}", wordMeaning: "question・problem" },
  "等": { kanji: "等", meaning: "Class・Rank・And so on・Etc.", rubyWord: "等{など}", wordMeaning: "and so on・etc.", wordSentence: "パン、ケーキ等を買いました。"},
  "歓": { kanji: "歓", meaning: "Delight・Joy", rubyWord: "歓{かん}迎{げい}", wordMeaning: "welcome", wordSentence: "日本へ歓迎します。" },
  "迎": { kanji: "迎", meaning: "To welcome・To receive (someone)", rubyWord: "迎{むか}える", wordMeaning: "to welcome・to go pick someone up", wordSentence: "駅まで友だちを迎えに行く。" },
  "評": { kanji: "評", meaning: "Evaluate・Criticism・Comment", rubyWord: "評{ひょう}価{か}", wordMeaning: "Evaluation" },
  "判": { kanji: "判", meaning: "Judgement・Signature・Decision", rubyWord: "判{はん}断{だん}", wordMeaning: "Judgement・Decision" },
  "栄": { kanji: "栄", meaning: "Glory・Prosperity・Honor", rubyWord: "栄{さか}える", wordMeaning: "To prosper・To be honored", wordSentence: "この町は昔とても栄えた。" },
  "養": { kanji: "養", meaning: "Take care of・Support・Nourish・Raise", rubyWord: "養{やしな}う", wordMeaning: "to support・to raise・to provide for", wordSentence: "家族を養う。" },
  "臭": { kanji: "臭", meaning: "Smell・Stink", rubyWord: "臭{くさ}い", wordMeaning: "smelly・stinky" },
  "賞": { kanji: "賞", meaning: "Prize・Award", rubyWord: "賞{しょう}金{きん}", wordMeaning: "prize money" },
  "農": { kanji: "農", meaning: "Agriculture・Farming", rubyWord: "農{のう}業{ぎょう}", wordMeaning: "agriculture" },
  "粗": { kanji: "粗", meaning: "Coarse・Rough・Crude", rubyWord: "粗{あら}い", wordMeaning: "rough・coarse" },
  "末": { kanji: "末", meaning: "End・Future", rubyWord: "末{すえ}", wordMeaning: "the end・the future" },
  "訳": { kanji: "訳", meaning: "Translation・Reason・Circumstance", rubyWord: "訳{わけ}", wordMeaning: "reason・circumstance", wordSentence: "どういう訳？" },
  "支": { kanji: "支", meaning: "Branch・Support・Sustain", rubyWord: "支{ささ}える", wordMeaning: "to support・to sustain" },
  "感": { kanji: "感", meaning: "Feeling・Sensation・Emotion", rubyWord: "感{かん}じる", wordMeaning: "to feel" },
  "染": { kanji: "染", meaning: "Dye・stain・Infect・Catch (a cold)", rubyWord: "染{そ}める", wordMeaning: "to dye" },
  "症": { kanji: "症", meaning: "Symptom・Illness", rubyWord: "症{しょう}状{じょう}", wordMeaning: "symptom" },
  "流": { kanji: "流", meaning: "Stream・Flow・Current", rubyWord: "流{なが}れる", wordMeaning: "to flow" },
  "制": { kanji: "制", meaning: "Control・Restrain・System", rubyWord: "制{せい}度{ど}", wordMeaning: "system・institution" },
  "限": { kanji: "限", meaning: "Limit・Restrict", rubyWord: "限{かぎ}る", wordMeaning: "to limit・to restrict" },
  "精": { kanji: "精", meaning: "Spirit・Energy・Refined", rubyWord: "精{せい}神{しん}", wordMeaning: "spirit・energy・mind", wordSentence: "精神が強い。" },
  "算": { kanji: "算", meaning: "Calculate・Count", rubyWord: "算{さん}数{すう}", wordMeaning: "Mathematics・arithmetic" },
  "貯": { kanji: "貯", meaning: "Save・Store", rubyWord: "貯{た}める", wordMeaning: "to save (money)", wordSentence: "お金を貯める。" },
  "与": { kanji: "与", meaning: "Give・Grant・Bestow", rubyWord: "与{あた}える", wordMeaning: "to give・to grant・to bestow" },
};

const MiniStoryTopics = {
  FOOD: '食事',
  HOUSE_WORK: '家事',
  SHOPPING: "買い物",
  FASHION: "ファッション",
  TECHNOLOGY: "テクノロジー",
  TRENDS: "流行",
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
  COMPOUND_EXPRESSION: '連語',
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
        english: "creative・create",
        important: true,
      },
      {
        kanji: "食{しょく}物{もつ}",
        english: "food",
        important: true
      },
      {
        kanji: "勝{しょう}負{ぶ}[する]",
        english: "Victory・to compete",
        important: true
      },
      {
        kanji: "に対{たい}応{おう}[する]",
        english: "to respond to・to deal with",
        secondary: true
      }
    ],
    kanjis: ["創", "勝", "負"],
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
        dialogue: "日本の米は、[品{ひん}種{しゅう}]によって<粒{つぶ}>の大きさ、甘<み>、[食{しょっ}感{かん}]などが[異{こと}なる]。300gの[少{しょう}量{りょう}]<パック>も売っているので、いろいろと[試{ため}して]みるのもいいだろう。保{ほ}存{ぞん}するときは、温{あたた}かいうちに1<人{にん}前{まえ}>ずつ<ラップ>で包{つつ}むのが大切だ。<冷{さ}めたら>さらに<アルミホイル>で包{つつ}んで冷{れい}凍{とう}庫{こ}に入{い}れれば、おいしいまま冷{れい}凍{とう}できる。",
      },
    ],
    rubyWords: [
      {
        kanji: "粒{つぶ}",
        english: "grain",
        important: true,
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
        english: "serving / portion",
        important: true,
      },
      {
        kanji: "ラップ［する］",
        english: "plastic wrap / to wrap"
      },
      {
        kanji: "冷{さ}める",
        english: "to cool down",
        important: true,
      },
      {
        kanji: "冷{さ}ます",
        english: "to cool down",
        important: true,
      },
      {
        kanji: "アルミホイル",
        english: "aluminum foil"
      },
      {
        kanji: "品{ひん}種{しゅう}",
        english: "variety・strain・breed",
        secondary: true,
      },
      {
        kanji: "食{しょっ}感{かん}",
        english: "texture・taste・flavor",
        secondary: true,
      },
      {
        kanji: "異{こと}なる",
        english: "different",
        secondary: true,
      },
      {
        kanji: "少{しょう}量{りょう}",
        english: "small amount",
        secondary: true,
      },
      {
        kanji: "試{ため}す",
        english: "to try out",
        secondary: true,
      },
    ],
    kanjis: [ "種" ],
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
        dialogue: "あ、でも、[チャーシュー]が<あぶって>あったのはよかったね。",
      },
    ],
    rubyWords: [
      {
        kanji: "あっさり",
        english: "lightly・plainly・simply",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "物{もの}足{た}りない",
        english: "lacking・unsatisfying/",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "脂{あぶら}",
        english: "Fat",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "たっぷり",
        english: "generously・plentifully",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "好{この}み",
        english: "preference",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "好{この}む",
        english: "To prefer",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "あぶる",
        english: "roast・sear",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "チャーシュー",
        english: "Roasted pork",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
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
        dialogue: "えっと、[日{ひ}替{が}わり]ランチ。",
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
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "洋{よう}風{ふう}",
        english: "Western-style",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "それと",
        english: "And also",
        type: MiniStoryWordType.CONJUNCTION,
        important: true,
      },
      {
        kanji: "日{ひ}替{が}わり",
        english: "Daily special",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
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
        dialogue: "うーん・・・たぶん、[ホルモン]・・・。",
      },
    ],
    rubyWords: [
      {
        kanji: "煙{けむ}い",
        english: "Smoky",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "焦{こ}げる",
        english: "To burn",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "焦{こ}がす",
        english: "To burn (Something)",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "塊{かたまり}",
        english: "Chunk・Lump",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "ホルモン",
        english: "Guts・hormone",
        type: MiniStoryWordType.NOUN,
        secondary: true
      }
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
        dialogue: "この店の<名{めい}物{ぶつ}>は、[皮{かわ}付{つ}き]のりんごが<丸{まる}々{まる}>1個{こ}入{はい}ったアップルパイだ。<芯{しん}>を[くりぬいた]部分には、スポンジが<ぎっしり>と[詰{つ}まって]いる。<見{み}た目{め}>がかわいい上にとてもおいしく、大人気だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "名{めい}物{ぶつ}",
        english: "Specialty",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "丸{まる}々{まる}",
        english: "Entirely・Wholly",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "芯{しん}",
        english: "Core",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "ぎっしり（と）",
        english: "Tightly・Fully",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "見{み}た目{め}",
        english: "Appearance・Look",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "皮{かわ}付{つ}き",
        english: "With skin",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "くりぬく",
        english: "To hollow out",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "詰{つ}まる",
        english: "To be packed full",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        secondary: true,
      },
      {
        kanji: "詰{つ}める",
        english: "To pack full",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        secondary: true,
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
        dialogue: "今度の[歓{かん}迎{げい}会{かい}]だけど、焼肉<食{た}べ放{ほう}題{だい}>はどう？",
      },
      {
        character: "B",
        dialogue: "いいですね。でも、[胃{い}]が<もたれ>そうだな。",
      },
      {
        character: "A",
        dialogue: "え、まだ若いのに。じゃあ、このしゃぶしゃぶ屋はどう？<上{じょう}等{とう}な>肉が安く食べられるって<ロ{くち}コミ>でも[評{ひょう}判{ばん}]だよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "食{た}べ放{ほう}題{だい}",
        english: "All-you-can-eat",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "～放{ほう}題{だい}",
        english: "All-you-can〜",
        type: MiniStoryWordType.PREFIX,
        important: true,
      },
      {
        kanji: "もたれる",
        english: "Sit heavily",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "上{じょう}等{とう}な",
        english: "High-end・Top quality",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "口{くち}コミ",
        english: "Word of mouth",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "歓{かん}迎{げい}会{かい}",
        english: "Welcome party",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "胃{い}",
        english: "Stomach",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "評{ひょう}判{ばん}",
        english: "Review・Opinion",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    kanjis: [ "放", "題", "等", "歓", "迎", "評", "判" ],
    translation: `A: How about all-you-can-eat barbecue for the upcoming welcome party?\nB: Sounds good. But it'll probably sit too heavily in my stomach.\nA: What? You're still young. How about this shabu-shabu place? It's got great word-of-mouth for being inexpensive for top-quality meat.`,
    audio: "T7.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 18,
  },
  "8": {
    id: "8",
    rubyStory: [
      {
        character: "",
        dialogue: "一人暮らしをしていると、[栄{えい}養{よう}]が<偏{かたよ}り>がちだ。何か野菜を食べなければと思うが、今は野菜が高くて<手{て}に入{い}れ>にくい。子どものときは<好{す}き嫌{きら}い>が多く、母の作る料理が嫌{いや}だと思ったこともあったが、今となっては栄{えい}養{よう}たっぷりの母の手料理が<恋{こい}しい>。",
      },
    ],
    rubyWords: [
      {
        kanji: "偏{かたよ}る",
        english: "To be uneven・biased",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "偏{かたよ}り",
        english: "Imbalance・Unevenness",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "手{て}に入{い}れる",
        english: "To obtain・get・acquire",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "手{て}に入{はい}る",
        english: "To be obtainable・To be available・To come into one’s possession",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "好{す}き嫌{きら}い［する］",
        english: "likes and dislikes・to be picky",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "恋{こい}しい",
        english: "To miss someone/something・To long for",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "恋{こい}［する］",
        english: "love・to fall in love",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "栄{えい}養{よう}",
        english: "Nutrition",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
    ],
    kanjis: [ "栄", "養" ],
    translation: `When you live alone, your diet tends to get imbalanced. I probably need to eat some vegetables, but vegetables are expensive and hard to get nowadays. When I was a child, I was fussy about food and at times I disliked the food my mother cooked, but now I miss her healthy, nutritious cooking`,
    audio: "T8.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 19,
  },
  "9": {
    id: "9",
    rubyStory: [
      {
        character: "",
        dialogue: "[冷蔵庫]の中が<生{なま}臭{ぐさ}い>と思ったら、[きゅうり]が[腐って]白い<液{えき}体{たい}>が出ていた。普段、<賞{しょう}味{み}期{き}限{げん}><切{き}れ>のお菓子などは気にせず食べているが、これはさすがにやめておこう。[せっかく]母が<農{のう}薬{やく}>を使わずに育てたからと送ってくれたのに、<粗{そ}末{まつ}に>してしまって申し訳ない。",
      },
    ],
    rubyWords: [
      {
        kanji: "生{なま}臭{ぐさ}い",
        english: "Fishy・Smelly・Stinky",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "液{えき}体{たい}",
        english: "Liquid",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "賞{しょう}味{み}期{き}限{げん}",
        english: "Best before・Expiration date",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "消{しょう}費{ひ}期{き}限{げん}",
        english: "Use-by date・Expiration date",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "〜切{き}れ",
        english: "~ Used up・Expired・Past",
        type: MiniStoryWordType.SUFFIX,
        important: true,
      },
      {
        kanji: "農{のう}薬{やく}",
        english: "Pesticide",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "粗{そ}末{まつ}な",
        english: "Careless・Negligent",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "冷{れい}蔵{ぞう}庫{こ}",
        english: "Refrigerator",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "きゅうり",
        english: "Cucumber",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "腐{くさ}る",
        english: "To rot・To go bad",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        secondary: true,
      },
      {
        kanji: "せっかく",
        english: "With trouble・With effort・Long-awaited",
        type: MiniStoryWordType.EXPRESSION,
        secondary: true,
      }
    ],
    kanjis: ["臭", "賞", "農", "粗", "末", "訳", ],
    translation: `I noticed something stinking in the refrigerator hut it turned out to be rotten cucumbers with white fluid oozing out of them. I usually don't mind eating expired snacks, but there's no way I'd eat this. My mother sent me these cucumbers she'd grown without using any pesticides, so I feel bad for treating them so carelessly.`,
    audio: "T9.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 20,
  },
  "10": {
    id: "10",
    rubyStory: [
      {
        character: "",
        dialogue: "昨日、久しぶりに友だちとスイーツ<ビュッフェ>に行った。[壁{かべ}]<一{いち}面{めん}>がパステルカラーで、メニューには、カラフルなケーキや、<綿{わた}>あめがのったドリンクがあったりして、とてもかわいかった。",
      },
    ],
    rubyWords: [
      {
        kanji: "ビュッフェ",
        english: "Buffet",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "一{いち}面{めん}",
        english: "One whole side・Entire surface・All over",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "綿{わた}",
        english: "Cotton",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "壁{かべ}",
        english: "Wall",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "綿{わた}あめ",
        english: "Cotton candy",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `Yesterday, for the first time in a while, I went to a dessert buffet with a friend. The walls were pastel-colored all over, and there were colorful cakes and drinks with cotton candy on the menu. It was really cute.`,
    audio: "T10.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 20,
  },
  "36": {
    id: "36",
    rubyStory: [
      {
        character: "",
        dialogue: "[感{かん}染{せん}症{しょう}]の[流{りゅう}行{こう}]は、社会にさまざまな影響を[与{あた}えて]いる。例えば、[外{がい}出{しゅつ}]が[制{せい}限{げん}]されたため、旅行関係の<支{し}出{しゅつ}>は大きく減{げん}少{しょう}した。また、感{かん}染{せん}症{しょう}予{よ}防{ぼう}のマスク<着{ちゃく}用{よう}>により、<一{いっ}気{き}に><万{まん}引{び}き>が増えた店もあるようだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "支{し}出{しゅつ}［する］",
        english: "Expenditure・To spend",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "着{ちゃく}用{よう}［する］",
        english: "To wear・To put on (clothes, accessories)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "一{いっ}気{き}に",
        english: "All at once・In one go・Suddenly",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "万{まん}引{び}き［する］",
        english: "Shoplifting・To shoplift",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "感{かん}染{せん}症{しょう}",
        english: "Infectious disease",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "流{りゅう}行{こう}",
        english: "Spread・Epidemic",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "与{あた}える",
        english: "To give・To cause",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "外{がい}出{しゅつ}",
        english: "Going out",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "制{せい}限{げん}",
        english: "Restriction",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
    ],
    kanjis: ["支", "感", "染", "症", "流", "制", "限" ],
    translation: `The outbreak of infectious disease is affecting society in various ways. For example, travel-related spending has dropped significantly, due to restrictions on going out. Also, some stores have seen a sudden increase in shoplifting due to the wearing of masks to prevent infectious disease.`,
    audio: "T36.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 41,
  },
  "37": {
    id: "37",
    rubyStory: [
      {
        character: "A",
        dialogue: "こないだ会社の人たちと飲みに行ったとき、全員分僕が払っておいたんだよ。それで昨日、どうやって<精{せい}算{さん}しよう>かと思って先輩に相{そう}談{だん}してみたら「1円まできれいに分{わ}けてくれ」って言われちゃって・・・。",
      },
      {
        character: "B",
        dialogue: "うわー、<けちだ>ねー。",
      },
      {
        character: "A",
        dialogue: "その先輩だけが<高{こう}価{か}な>お酒をたくさん飲んでたのに・・・。先月<賞{しょう}与{よ}>が出て、やっと少し貯{ちょ}金{きん}ができたところなんだけどな。",
      },
    ],
    rubyWords: [
      {
        kanji: "精{せい}算{さん}［する］",
        english: "Settlement of accounts・To settle a bill・Payment",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "けちな",
        english: "stingy・cheap・Tight (with money)",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "高{こう}価{か}な",
        english: "expensive・high-priced",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "賞{しょう}与{よ}",
        english: "Bonus (salary)",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
    ],
    kanjis: ["精", "算", "貯", "賞", "与"],
    translation: `A: The other night, I went out for drinks with some people from work and I paid for everyone. Yesterday, I asked a senior colleague for advice on how to settle the bill, and he told me to split it evenly, right down to the last yen...\nB: Wow, that's so stingy.\nA: And he was the only one drinking lots of expensive alcohol... Damn, I just got my bonus last month and finally saved up a little money.`,
    audio: "T37.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 42,
  },
  //TODO: keep adding kanjis and flags from here
  "38": {
    id: "38",
    rubyStory: [
      {
        character: "A",
        dialogue: "[通{つう}販{はん}]でコンロ買ったんだけど、<包{ほう}装{そう}>を<ほどいて>みたら、都{と}市{し}ガス用{よう}だったの。うちでは使えないから<返{へん}品{ぴん}しよう>と思ったんだけど、[箱{はこ}]に「<不{ふ}良{りょう}品{ひん}>を[除{のぞ}いて]、[開{かい}封{ふう}済{ず}み]の商品の返品には、[送{そう}料{りょう}]と<手{て}数{すう}料{りょう}>を<頂{ちょう}戴{だい}します>」って書いてあったの。",
      },
      {
        character: "B",
        dialogue: "そっか。まあ向{む}こうも<商{しょう}売{ばい}>だもんね。",
      }
    ],
    rubyWords: [
      {
        kanji: "包{ほう}装{そう}［する］",
        english: "Packaging・To package",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "ほどく",
        english: "To unwrap・To undo・To unfasten・To take off",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "ほどける",
        english: "To come undone・To loosen",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "返{へん}品{ぴん}［する］",
        english: "Return (goods)・To return (goods)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "不{ふ}良{りょう}品{ひん}",
        english: "Defective goods",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "手{て}数{すう}料{りょう}",
        english: "Handling fee・Service charge",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "頂{ちょう}戴{だい}する",
        english: "To request・To require",
        type: MiniStoryWordType.IRREGULAR_TRANSITIVE,
        important: true,
      },
      {
        kanji: "商{しょう}売{ばい}［する］",
        english: "Business・To do business",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true
      },
      {
        kanji: "通{つう}販{はん}",
        english: "Mail order",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "箱{はこ}",
        english: "Box",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "除{のぞ}く",
        english: "To exclude・To leave out",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "開{かい}封{ふう}済{ず}み",
        english: "Opened",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "送{そう}料{りょう}",
        english: "Shipping fee",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: I bought a stove by mail order, but when I removed the packaging, I found it was designed to use city gas. Since I can't use that at home, I tried to return it, but on the box it said, "Unless a product is defective, a handling fee is required for the return of products that have been opened”\nB: Is that right? Well, I guess theyre a business too.`,
    audio: "T38.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 43,
  },
  "39": {
    id: "39",
    rubyStory: [
      {
        character: "",
        dialogue: "パソコン探しに困っていたら、<株{かぶ}式{しき}会{がい}社{しゃ}>値段ドットコムのホームページを見てみるといい。<各{かく}種{しゅ}>メーカー製{せい}品{ひん}を<取{と}り扱{あつか}って>いて、<価{か}格{かく}>やスペック、<売{う}れ行{ゆ}き>など、さまざまな条{じょう}件{けん}を指{し}定{てい}して探すことができる。",
      },
    ],
    rubyWords: [
      {
        kanji: "株{かぶ}式{しき}会{がい}社{しゃ}",
        english: "Corporation (Inc.・Ltd.・Co.)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "株{かぶ}式{しき}",
        english: "Stock・Share",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "各{かく}種{しゅ}",
        english: "Various kinds",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "取{と}り扱{あつか}う",
        english: "To handle・To deal in",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "取{と}り扱{あつか}い［する］",
        english: "Handling・To handle",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "価{か}格{かく}",
        english: "Price",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "売{う}れ行{ゆ}き",
        english: "Sales・How well something sells・Demand",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `If you're having trouble finding a computer, take a look at the Price.com Inc. website. They stock products from various manufacturers, and you can search by specifying various criteria such as price, specifications, and how well they sell.`,
    audio: "T39.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 44,
  },
  "40": {
    id: "40",
    rubyStory: [
      {
        character: "",
        dialogue: "この商品はとても小さいので<小{こ}銭{ぜに}>入{い}れに見えるが、実は<硬{こう}貨{か}>だけでなく<紙{し}幣{へい}>も入{はい}る。<泡{あわ}>をつけて丁{てい}寧{ねい}に洗{あら}えば、とてもきれになるところもお気{き}に入{い}りだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "小{こ}銭{ぜに}",
        english: "change (money)・coins",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "硬{こう}貨{か}",
        english: "coin・hard currency",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "紙{し}幣{へい}",
        english: "banknote・paper money",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "泡{あわ}",
        english: "foam・bubble・lather",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `This product is so tiny it looks like a coin purse, but it actually holds banknotes as well as coins. It's also popular because it cleans up nicely when lathered up and washed carefully.`,
    audio: "T40.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 44,
  },
  "41": {
    id: "41",
    rubyStory: [
      {
        character: "A",
        dialogue: "国内ではまだ<販{はん}売{ばい}されて>いない、海外の商品が購{こう}入{にゅう}できるサイトって知らない？",
      },
      {
        character: "B",
        dialogue: "えっと、<評{ひょう}価{か}>が高いのはKAIGAI MALLかな。でも、<為{かわ}替{せ}レート>によって値段が変わりやすいし、<関{かん}税{ぜい}>がかかったりするんだよね。あと<発{はっ}送{そう}>が遅{おそ}いかも。",
      },
    ],
    rubyWords: [
      {
        kanji: "販{はん}売{ばい}［する］",
        english: "Sale・to sell",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "評{ひょう}価{か}［する］",
        english: "Evaluation・to evaluate",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "為{かわ}替{せ}レート",
        english: "Exchange rate",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "為{かわ}替{せ}",
        english: "Currency exchange・Money exchange",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "関{かん}税{ぜい}",
        english: "Customs duty・Tariff",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "発{はっ}送{そう}［する］",
        english: "Shipping・To ship",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `A: Do you know any websites where you can buy overseas products not yet on sale in Japan?\nB: Well, I think Kaigai Mall is the most highly rated. But prices tend to change depending on the exchange rate, and there are Customs charges too. Also, shipping might be slow.`,
    audio: "T41.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 45,
  },
  "42": {
    id: "42",
    rubyStory: [
      {
        character: "A",
        dialogue: "昨日<足{あし}首{くび}>のサポーターとスマホの充{じゅう}電{でん}<器{き}>注文したんだけど、口{こう}座{ざ}<引{ひ}き落{お}とし>で支払おうとしたら、<残{ざん}高{だか}>が足りなくて買えなくて…・。Bさん、もしクレジットカード持ってたら<立{た}て替{か}えて>くれない？",
      },
      {
        character: "B",
        dialogue: "うーん、それはちょっと・・・。",
      },
    ],
    rubyWords: [
      {
        kanji: "足{あし}首{くび}",
        english: "ankle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～器{き}",
        english: "~ device・~ instrument",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "引{ひ}き落{お}とし",
        english: "withdrawal (from account)・direct debit",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "引{ひ}き落{お}とす",
        english: "to withdraw (from account)・to pay by direct debit",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "残{ざん}高{だか}",
        english: "balance (account balance)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "立て替える",
        english: "to pay on behalf of someone・to advance money",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `A: I ordered an ankle brace and a phone charging device yesterday, but when I tried to pay by direct debit, I couldn't because my account balance was too low... Hey B, if you have a credit card, could you pay it on my behalf?\nB: Hmmm, I'm not sure about that...`,
    audio: "T42.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 46,
  },
  "43": {
    id: "43",
    rubyStory: [
      {
        character: "A",
        dialogue: "もうすぐホワイトデーだから、彼女に<花{はな}束{たば}>とチョコを贈{おく}ろうと思ってて・・・これなんてどうかな？",
      },
      {
        character: "B",
        dialogue: "へー、かわいいね！<かご>に花とチョコが入{はい}ってるんだ。あ、今キャンペーン中で、<いくらか><ボーナス>で<ポイント>もつくみたいだよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "花{はな}束{たば}",
        english: "Bouquet",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "束{たば}",
        english: "bundle・bunch",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "かご",
        english: "basket",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "いくらか",
        english: "some amount・A few・A little",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "ボーナス",
        english: "bonus",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ポイント",
        english: "points (reward points)",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: It's almost White Day. I was thinking of getting my girlfriend a bouquet of flowers and some chocolates... How about this?\nB: Wow, that's cute! It's a basket with flowers and chocolates. Oh, there's a campaign on at the moment, so it looks like you can earn a few bonus points too.`,
    audio: "T43.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 46,
  },
  "44": {
    id: "44",
    rubyStory: [
      {
        character: "A",
        dialogue: "見てこれ。絶{ぜっ}版{ぱん}になった本がオークションに出てるんだけど、予{よ}算{さん}を<超{こ}えて>るんだよね。",
      },
      {
        character: "B",
        dialogue: "珍{めずら}しいものは<大{たい}概{がい}>そうなるよね。",
      },
    ],
    rubyWords: [
      {
        kanji: "超{こ}える",
        english: "to exceed",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "大概{たいがい}",
        english: "generally・Usually",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
    ],
    translation: `A: Look at this. There's an out-of-print book on auction, but it's over my budget.\nB: That's usually the case with rare items.`,
    audio: "T44.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 47,
  },
  "45": {
    id: "45",
    rubyStory: [
      {
        character: "A",
        dialogue: "あー、どうしよう。オークションの終{しゅう}了{りょう}時間が追{せま}ってる。",
      },
      {
        character: "B",
        dialogue: "予{よ}算{さん}オーバーって言っても<せいぜい>500円でしょ。新{しん}品{ぴん}とそんなに<差{さ}>はないんだから、<損{そん}得{とく}>考えずに買っちゃいなよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "迫{せま}る",
        english: "to approach・to draw near",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "せいぜい",
        english: "at most・at best",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "差{さ}",
        english: "difference・Discrepancy",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "損{そん}得{とく}",
        english: "profit and loss・gain and loss",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Oh, what should I do? The end of the auction is approaching.\nB: Even if it's over your budget, it won't be more than 500 yen at most. That's not too different from a new one, so jus buy it and don't worry about your monetary gain or loss.`,
    audio: "T45.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 48,
  },
  "46": {
    id: "46",
    rubyStory: [
      {
        character: "A",
        dialogue: "あ、パソコン買ったの？",
      },
      {
        character: "",
        dialogue: "欲しかったモデルがたまたま売ってて、<つい>買っちゃった。",
      },
      {
        character: "A",
        dialogue: "最新モデルだよね。高くなかった？",
      },
      {
        character: "",
        dialogue: "展{てん}示{じ}品{ひん}だったから、<値{ね}引{び}き>もされて、<手{て}頃{ごろ}な>価{か}格{かく}だったよ。<不{ふ}要{よう}な>パソコンは買い取ってもらって、<おまけ>で画{が}面{めん}に貼{は}るフィルムももらっちゃった。<品{ひん}質{しつ}>もいいし、大{だい}満{まん}足{ぞく}！",
      },
    ],
    rubyWords: [
      {
        kanji: "つい",
        english: "unintentionally・without thinking・Impulsively",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "値{ね}引{び}き［する］",
        english: "discount・to discount",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "手{て}頃{ごろ}な",
        english: "affordable・reasonable price",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "不{ふ}要{よう}な",
        english: "unnecessary",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "おまけ［する］",
        english: "Gift ・incentive・to give a gift/incentive",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "品{ひん}質{しつ}",
        english: "quality",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Oh, did you buy a computer?\nB: The model I wanted was on sale, so I just bought it on impulse.\nA: It's the latest model, right? Wasn't it expensive?\nB: It was a display model, so I got a discount and it was a reasonable price. I exchanged it for a computer I didn't need, and got some protective film for the screen as a free gift. The quality is good, and I'm very satisfied!`,
    audio: "T46.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 48,
  },
  "47": {
    id: "47",
    rubyStory: [
      {
        character: "A",
        dialogue: "この選手、確{たし}か<モデル>の女性と結婚したんだよね。",
      },
      {
        character: "B",
        dialogue: "ああ、「笑わない男」って呼ばれてる人？",
      },
      {
        character: "A",
        dialogue: "そう。でも本当はすごく優{やさ}しくて、私{し}服{ふく}もすごくおしゃれで<センス>いいんだって。",
      },
      {
        character: "B",
        dialogue: "なるほど。<ギャップ>がある人はモテるって言うもんね。",
      },
    ],
    rubyWords: [
      {
        kanji: "モデル",
        english: "model",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "センス",
        english: "sense・taste",
        type: MiniStoryWordType.NOUN
      },
      { 
        kanji: "ギャップ",
        english: "gap・difference・contradiction",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: This athlete married his model girlfriend, didn't he?\nB: Oh, the one they call "the man who never smiles"?\nA: Yes. But actually, he seems very kind and in his private life, he has a stylish fashion sense.\nB: I see. They say people who have contradictions are more attractive.`,
    audio: "T47.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 50,
  },
  "48": {
    id: "48",
    rubyStory: [
      {
        character: "A",
        dialogue: "明日初{はつ}デートなんだけど、この服どうかな？",
      },
      {
        character: "B",
        dialogue: "<全{ぜん}身{しん}>、<アウトドア><ブランド>で揃{そろ}えたのね。",
      },
      {
        character: "A",
        dialogue: "うん。<ダサい>かな？",
      },
      {
        character: "B",
        dialogue: "うーん。流{りゅう}行{こう}を<取{と}り入{い}れよう>としてるのはいいと思うんだけど、<だぶだぶな>ズボンはカジュアルすぎない？スニーカーもその色はちょっと・・・。",
      },
      {
        character: "A",
        dialogue: " そっか。この靴{くつ}、色{いろ}違{ちが}いで2{に}<足{そく}>持{も}ってるんだけど、黒{くろ}い方{ほう}ならいいかな？",
      },
    ],
    rubyWords: [
      {
        kanji: "全{ぜん}身{しん}",
        english: "whole body",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "アウトドア",
        english: "outdoor",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ブランド",
        english: "brand・Label",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ダサい",
        english: "uncool・unstylish・tacky",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "取{と}り入{い}れる",
        english: "to incorporate・to adopt",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "だぶだぶな",
        english: "baggy・loose-fitting",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "～足(そく)",
        english: "~pairs (of shoes/socks)",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: I'm going on a first date tomorrow. What do you think about these clothes?\nB: The whole outfit is from outdoor brands, isn't it?\nA: Yes. Does it look unstylish?\nB: Hmmm. It's good that you're trying to incorporate the latest trends, but aren't the baggy pants a bit casual? I don't like the color of the sneakers either...\nA: Okay. I have two pairs of these shoes in different colors. Maybe the black ones would look better?`,
    audio: "T48.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 51,
  },
  "49": {
    id: "49",
    rubyStory: [
      {
        character: "A",
        dialogue: "この<ポーズ>は、背{せ}伸{の}びする猫を<表{あらわ}して>います。",
      },
      {
        character: "B",
        dialogue: "あ、これは簡単ですね。",
      },
      {
        character: "A",
        dialogue: "そうですね。でも、<ただ>ポーズをまねするんじゃなくて、呼{こ}吸{きゅう}を意{い}識{しき}するのが大切ですよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "ポーズ",
        english: "pose",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "表{あらわ}す",
        english: "to express・to represent",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "ただ",
        english: "just・only・merely",
        type: MiniStoryWordType.ADVERB
      },
    ],
    translation: `A: This pose represents a cat stretching.\nB: Oh, this one is easy.\nA: Yes, it is. But it's important to stay aware of your breathing, not just imitate the pose.`,
    audio: "T49.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 52,
  },
  "50": {
    id: "50",
    rubyStory: [
      {
        character: "A",
        dialogue: "ねえ、この写真見て。今若い人の間でこんなのはやってるんだって。買ってみようかな。",
      },
      {
        character: "B",
        dialogue: "いや…<お前{まえ}>, いくつだよ",
      },
      {
        character: "A",
        dialogue: "ほら、最近のお母さんってみんな<若{わか}々{わか}しい>じゃない？",
      },
      {
        character: "B",
        dialogue: "うーん、無理にそんな<格{かっ}好{こう}>すると、<逆{ぎゃく}に>目{め}立{だ}つと思うよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "お前{まえ}",
        english: "you (informal)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "若{わか}々{わか}しい",
        english: "youthful・young looking・vigorous",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "格{かっ}好{こう}",
        english: "Appearance・looks・style",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "逆{ぎゃく}に",
        english: "on the contrary・conversely",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "逆{ぎゃく}",
        english: "reverse・opposite",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Hey, look at this photo. I heard this kind of thing is popular among young people these days. Maybe I should buy one.\nB: No way... How old are you?\nA: Hey, all the mothers these days look young, don't they?\nB: Well, if you dress to look like that, I think on the contrary, you'll actually stand out.`,
    audio: "T50.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 52,
  },
  "51": {
    id: "51",
    rubyStory: [
      {
        character: "A",
        dialogue: "見て。<たんす>を整{せい}理{り}したら、いらない服がこんなに出てきた。",
      },
      {
        character: "B",
        dialogue: "駅前のデパートの<婦{ふ}人{じん}>服売り場に、<衣{い}料{りょう}>品{ひん}を回{かい}収{しゅう}する箱{はこ}があったから持っていったら？アフリカに送るんだって。",
      },
      {
        character: "A",
        dialogue: "うーん。でも最近アフリカでは、海外から届く服が余{あま}ってごみになることもあるみたいで、<かえって>問題になってるみたいだよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "たんす",
        english: "dresser・chest of drawers",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "婦{ふ}人{じん}",
        english: "woman・lady",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "衣{い}料{りょう}",
        english: "clothing・apparel",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "かえって",
        english: "on the contrary・instead・conversely",
        type: MiniStoryWordType.ADVERB
      },
    ],
    translation: `A: Hey, look. I went through my closet and found so many clothes I don't need.\nB: There's a clothing collection box in the women's clothing section at the department store by the station. Why don't you take them there? They're going to send them to Africa.\nA: Hmmm. But recently, surplus clothing sent to Africa from overseas has been ending up as trash, and on the contrary, it actually seems to be causing problems.`,
    audio: "T51.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 53,
  },
  "52": {
    id: "52",
    rubyStory: [
      {
        character: "A",
        dialogue: "ねえ、「ルッキズム」ってどういう意味？",
      },
      {
        character: "B",
        dialogue: "Looksとismを合わせた言葉で、人を見た目で判{はん}断{だん}する<主{しゅ}義{ぎ}>のことだよ。最近よく批{ひ}判{はん}されてるね。",
      },
      {
        character: "A",
        dialogue: "なるほど。昔から<美{び}人{じん}>は得{とく}をするって言うもんね。それってなんか<ずるい>もんね。",
      },
    ],
    rubyWords: [
      {
        kanji: "主{しゅ}義{ぎ}",
        english: "Principle・-ism",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "完{かん}璧{ぺき}主{しゅ}義{ぎ}",
        english: "perfectionism",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "美{び}人{じん}",
        english: "beautiful person・beauty",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ずるい",
        english: "unfair・sneaky",
        type: MiniStoryWordType.ADJECTIVE_I
      },
    ],
    translation: `A: Hey, what does "lookism" mean?\nB: It's a combination of the words "looks" and "ism," and refers to the principle of judging people by their looks. It's widely criticized these days.\nA: Oh, I see. People have always said that beautiful people get a better deal. It's a bit unfair.`,
    audio: "T52.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 54,
  },
  "53": {
    id: "53",
    rubyStory: [
      {
        character: "A",
        dialogue: "妊{にん}婦{ぷ}さん<向{む}け>の服や下{した}着{ぎ}って、なぜか<綿{めん}>とか<シルク>が多いよね。",
      },
      {
        character: "B",
        dialogue: "ああ、妊{にん}娠{しん}中{ちゅう}は肌{はだ}が<敏{びん}感{かん}>になる人が多いから、肌{はだ}に優しい<生{き}地{じ}>が好{この}まれるんだと思うよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "～向{む}け",
        english: "intended for ~・aimed for ~・made for ~",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "綿{めん}",
        english: "cotton",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "コットン",
        english: "cotton",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "シルク",
        english: "silk",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "敏{びん}感{かん}な",
        english: "sensitive",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "生{き}地{じ}",
        english: "fabric・material",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: For some reason, clothes and underwear made for pregnant women are often cotton or silk, aren't they?\nB: Oh, I think it's because their skin gets more sensitive during pregnancy, so they prefer gentler fabrics.`,
    audio: "T53.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 54,
  },
  "54": {
    id: "54",
    rubyStory: [
      {
        character: "A",
        dialogue: "あれ？ばっさり切ったね。<イメチェン>？",
      },
      {
        character: "B",
        dialogue: "ははは。実は、ヘアドネーションしたんだ。",
      },
      {
        character: "A",
        dialogue: "病気で髪が抜{ぬ}けてしまった子供たちのための、ウイッグになるんだっけ。",
      },
      {
        character: "B",
        dialogue: "そう。できるだけきれいな髪でいるために、<巻{ま}いたり>、<染{そ}めたり>するのも我{が}慢{まん}してたんだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "イメチェン・イメージチェンジ［する］",
        english: "image change・to change one's image",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "チェンジ［する］",
        english: "change・to change",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "巻{ま}く",
        english: "to roll・to wind・to curl (hair)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "染{そ}める",
        english: "to dye (something)",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "染{そ}まる",
        english: "to be dyed・change color・be stained",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `A: Whoa! You've had your hair cut so short. Changing your image?\nB: Ha ha ha. Actually, I donated my hair.\nA: You mean, to make wigs for children who have lost their hair due to illness?\nB: Yes. I had to stop myself curling or dyeing my hair to keep it as nice as possible.`,
    audio: "T54.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 55,
  },
  "55": {
    id: "55",
    rubyStory: [
      {
        character: "A",
        dialogue: "この前京都で買った<くし>、どうだった？",
      },
      {
        character: "B",
        dialogue: "あ、あれね！髪をとかすだけで本当に<さらさらに>なるの。一緒に買ったオイルをつけると、自然な<艶{つや}>が出ていい感じだよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "くし",
        english: "comb",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "さらさらな",
        english: "smooth・silky",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "艶{つや}",
        english: "gloss・shine",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: What do you think of the comb you bought in Kyoto the other day?\nB: Oh, that! Just brushing my hair with it made it feel really smooth. And when I used the oil I bought with it, it gave my hair a nice natural shine.`,
    audio: "T55.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 56,
  },
  "56": {
    id: "56",
    rubyStory: [
      {
        character: "A",
        dialogue: "これ<試{し}着{ちゃく}して>みない？似合うと思う。",
      },
      {
        character: "B",
        dialogue: "サイズいくつ？",
      },
      {
        character: "A",
        dialogue: "えっと、7<号{ごう}>だね。",
      },
      {
        character: "B",
        dialogue: "無理無理！私いつも11号{ごう}だよ。<ウエスト>が入{はい}らないよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "試{し}着{ちゃく}［する］",
        english: "Fitting・to try on (clothes)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "試{し}食{しょく}［する］",
        english: "to try a sample (food)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "〜号(ごう)",
        english: "size~",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "ウエスト",
        english: "waist",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Wanna try this on? I think it'd suit you.\nB: What size is it?\nA: Let's see, it's a size 7.\nB: No way! I'm usually a size 11.Tll never fit into the waist.`,
    audio: "T56.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 56,
  },
  "57": {
    id: "57",
    rubyStory: [
      {
        character: "A",
        dialogue: "いかがですか。",
      },
      {
        character: "B",
        dialogue: "この<縞{しま}>のデザインが気{き}に入{い}ってるんですが、、<客{きゃっ}観{かん}的{てき}に>見て派{は}手{で}すぎませんか。",
      },
      {
        character: "A",
        dialogue: "お似合いですよ。ジャケットと<組{く}み合{あ}わせれば>オフィスにも着ていけますし。",
      },
      {
        character: "B",
        dialogue: "そうですか。あと、<丈{たけ}>がちょっとだけ長いかな。",
      },
      {
        character: "A",
        dialogue: "丈{たけ}の長さは、このベルトで<調{ちょう}節{せつ}>できますよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "縞{しま}",
        english: "stripe",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "客{きゃっ}観{かん}的{てき}な",
        english: "objective",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "主{しゅ}観{かん}的{てき}な",
        english: "subjective",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "組{く}み合{あ}わせる",
        english: "to combine",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "組{く}み合{あ}わせ",
        english: "combination",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "丈{たけ}",
        english: "length",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "調{ちょう}節{せつ}［する］",
        english: "adjustment・to adjust",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
    ],
    translation: `A: How do you like it?\nB: I like the stripe design, but objectively speaking, it's a bit flashy, isn't it?\nA: It looks good on you. And combined with a jacket, you could even wear it to the office.\nB: Do you think so? The length might be slightly too long.\nA: You can adjust the length with this belt.`,
    audio: "T57.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 57,
  },
  "58": {
    id: "58",
    rubyStory: [
      {
        character: "A",
        dialogue: "あれ？眼{め}鏡{がね}変{か}えた？",
      },
      {
        character: "B",
        dialogue: "ああ、これサングラスなの。今まで<単{たん}なる>眼{め}鏡{がね}しか持ってなかったんだけど、外に出ると<まぶしくて>。",
      },
      {
        character: "A",
        dialogue: "へえ。<透{とう}明{めい}な><レンズ>でも効{こう}果{か}あるの？",
      },
      {
        character: "B",
        dialogue: "あ、このレンズ、よく見ると薄{うす}い茶{ちゃ}色{いろ}なんだよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "単{たん}なる",
        english: "mere・simple",
        type: MiniStoryWordType.COMPOUND_EXPRESSION
      },
      {
        kanji: "まぶしい",
        english: "dazzling・Too bright",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "透{とう}明{めい}な",
        english: "transparent",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "レンズ",
        english: "lens",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Hey, did you get new glasses?\nB: Oh, these are sunglasses. I used to have just simple normal glasses, but when I went outside it was always too dazzling.\nA: Really? Do the transparent lenses work?\nB: Well, if you look closely, these lenses are pale brown.`,
    audio: "T58.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 58,
  },
  "59": {
    id: "59",
    rubyStory: [
      {
        character: "A",
        dialogue: "腕{うで}の傷{きず}、どうしたの？",
      },
      {
        character: "B",
        dialogue: "ああ、これ・・・。私、腕{うで}の毛{け}が<割{わり}と>濃{こ}いから、毎日<かみそり>で剃{そ}ってるんだけど、昨日切っちゃって・・・。",
      },
      {
        character: "A",
        dialogue: "大変だね。",
      },
      {
        character: "B",
        dialogue: "脱{だつ}毛{もう}するっていう手もあるんだけど、<美{び}容{よう}>にお金かけたくないんだよね。",
      },
    ],
    rubyWords: [
      {
        kanji: "割{わり}と",
        english: "relatively・comparatively・rather",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "かみそり",
        english: "razor",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "美容{びよう}",
        english: "beauty・cosmetology",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Hey, how did you cut your arm?\nB: Oh, that... I have rather thick hair on my arms, so I shave them every day with a razor, but yesterday I cut myself...\nA: That's awful.\nB: There are other ways to remove hair, but I don't want to spend a lot of money on beauty treatments.`,
    audio: "T59.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 58,
  },
  "60": {
    id: "60",
    rubyStory: [
      {
        character: "A",
        dialogue: "最近SNSでヒョウ<柄{がら}>の服をよく見るんだけど、私は普段<無{む}地{じ}>の服しか着ないから、ちょっと<抵{てい}抗{こう}>あるんだよね。",
      },
      {
        character: "B",
        dialogue: "そう？<キャップ>とかバッグとか、小{こ}物{もの}をちょっと<付{つ}け加{くわ}える>だけでいいアクセントになるんじゃない？この写真みたいに。",
      },
      {
        character: "A",
        dialogue: "なるほど。よく見るといろんなパターンがあるんだね。",
      },
    ],
    rubyWords: [
      {
        kanji: "柄{がら}",
        english: "pattern・design",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "無{む}  地{じ}",
        english: "plain・solid color",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "抵{てい}抗{こう}［する］",
        english: "resistance・to resist",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "キャップ",
        english: "cap",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "付{つ}け加{くわ}える",
        english: "to add・to append・To supplement",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "パターン",
        english: "pattern",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: I've been seeing a lot of clothes in leopard-print patterns on social media lately, but I usually only wear plain, solid colors, so I'm a bit resistant to it.\nB: Really? I think just adding a cap, bag, or some other small accessory creates a nice accent. You know, like in this photo.\nA: Oh, right. If you look closely, you can see there are many different patterns.`,
    audio: "T60.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 59,
  },
  "61": {
    id: "61",
    rubyStory: [
      {
        character: "",
        dialogue: "大{だい}統{とう}領{りょう}<夫{ふ}人{じん}>は、<知{ち}的{てき}な>イメージが強く、<幅{はば}広{ひろ}い>世代から人気がある。ここ数{すう}年{ねん}は、<上{じょう}品{ひん}な>ヘアスタイルと<独{どく}特{とく}な>ファッションが世界各{かっ}国{こく}のデザイナーから注目されている。",
      },
    ],
    rubyWords: [
      {
        kanji: "夫{ふ}人{じん}",
        english: "Wife・madam・lady",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "知{ち}的{てき}な",
        english: "intelligent・intellectual",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "幅{はば}広{ひろ}い",
        english: "wide range・broad・extensive",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "上{じょう}品{ひん}な",
        english: "elegant・refined・stylish",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "下{げ}品{ひん}な",
        english: "vulgar・coarse・inelegant",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "独{どく}特{とく}な",
        english: "unique・distinctive",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
    translation: `The First Lady has a strongly intellectual image and she has found popularity among a wide range of ages. In recent years, her elegant hairstyle and unique fashion sense have attracted the attention of designers from around the world.`,
    audio: "T61.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 60,
  },
  "62": {
    id: "62",
    rubyStory: [
      {
        character: "A",
        dialogue: "新しい会社で、ひげはだめだって注意されたよ。日本の<ビジネス>マナーって難しいね。",
      },
      {
        character: "B",
        dialogue: "そっか。<欧{おう}米{べい}>ではひげを<生{は}やして>てもいいもんね。",
      },
      {
        character: "A",
        dialogue: "ひげは個{こ}性{せい}の一つだからね。",
      },
    ],
    rubyWords: [
      {
        kanji: "ビジネス",
        english: "business",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ビジネスパーソン",
        english: "business person",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "欧{おう}米{べい}",
        english: "Europe and the U.S.・the West",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "生{は}やす",
        english: "to grow (beard, hair, etc.)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `A: I was warned to avoid growing a beard at my new company. Business etiquette in Japan can be tricky.\nB: Is that right? In Europe and the USA, it's fine to grow a beard, isn't it?\nA: A beard is a way to express your personality.`,
    audio: "T62.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 60,
  },
  "63": {
    id: "63",
    rubyStory: [
      {
        character: "",
        dialogue: "先日行われたアンケートでは、日本の大学生の<大{だい}半{はん}>が、3カ月に1度以上ファストファッションを購{こう}入{にゅう}していると<回{かい}答{とう}した>。しかし、近{きん}年{ねん}ではファストファッションが客{きゃく}のニーズを満{み}たすために<衣{い}服{ふく}>を過{か}剰{じょう}に生{せい}産{さん}しているという、批{ひ}判{はん}の声も<多{た}数{すう}>聞かれる。",
      },
    ],
    rubyWords: [
      {
        kanji: "大{たい}半{はん}",
        english: "majority・most",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "回{かい}答{とう}［する］",
        english: "Response・answer・to answer/respond",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "衣{い}服{ふく}",
        english: "clothing",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "多{た}数{すう}",
        english: "Many・plenty・majority",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "多{た}数{すう}決{けつ}",
        english: "majority decision・vote by majority",
        type: MiniStoryWordType.NOUN
      }
    ],
    translation: `In a recent survey, the majority of Japanese university students answered that they purchase fast fashion at least every three months. However, in recent years, many have apparently criticized fast fashion for overproducing clothing to satisfy customer demand.`,
    audio: "T63.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 61,
  },
  "64": {
    id: "64",
    rubyStory: [
      {
        character: "A",
        dialogue: "今日の服、<和{わ}服{ふく}>っぽくてかわいいね。",
      },
      {
        character: "B",
        dialogue: "ありがとう。おばあちゃんの着物を<普{ふ}段{だん}>着られるようにリメイクしたんだ。",
      },
      {
        character: "A",
        dialogue: "へえ、さすが。",
      },
      {
        character: "B",
        dialogue: "<絹{きぬ}>だから、ちょっと<手{て}入{い}れ>が大変だけどね。",
      },
    ],
    rubyWords: [
      {
        kanji: "和{わ}服{ふく}",
        english: "Japanese clothing",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "普{ふ}段{だん}",
        english: "usually・normally",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "絹{きぬ}",
        english: "silk",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "手{て}入{い}れ［する］",
        english: "Care・looking after・to take care of",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
    ],
    translation: `A: Your clothes look so cute today, like traditional Japanese clothes.\nB: Thanks. I remade my grandmother's kimono so I can wear it normally.\nA: Wow, that's great.\nB: It's silk, so it's a little difficult to look after.`,
    audio: "T64.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 62,
  },
  "65": {
    id: "65",
    rubyStory: [
      {
        character: "A",
        dialogue: "わ、玄{げん}関{かん}が靴{くつ}<だらけ>！",
      },
      {
        character: "B",
        dialogue: "どれも長{ちょう}時間履{は}いてると痛くて、どんどん新しいの買っちゃうんだよね。",
      },
      {
        character: "A",
        dialogue: "Bさんの足は人{ひと}差{さ}し指{ゆび}が一番長いから、先が<とがって>るパンプスが足に合うと思うよ。靴{くつ}が合わないと<姿{し}勢{せい}>が悪くなるから気をつけて。",
      },
    ],
    rubyWords: [
      {
        kanji: "～だらけ",
        english: "full of ~・covered with ~・all over ~",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "とがる",
        english: "to be sharp・to be pointed",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "姿{し}勢{せい}",
        english: "posture・attitude",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Hey, the hallway is full of shoes!\nB: They all hurt when I wear them for too long, so I keep buying new ones.\nA: Since your second toe is the longest on your foot, I think pumps with a pointed toe will suit your feet best. If your shoes don't fit, your posture will get worse, so be careful.`,
    audio: "T65.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 62,
  },
  "66": {
    id: "66",
    rubyStory: [
      {
        character: "",
        dialogue: "4月は初めての人と会う機{き}会{かい}が多いので、服{ふく}装{そう}には<気{き}を遣{つか}う>。明るい色の服を着たり、<襟{えり}>付{つ}きのシャツを着たりして、<だらしない>印象を与{あた}えないように気をつけている。",
      },
    ],
    rubyWords: [
      {
        kanji: "気{き}を遣{つか}う",
        english: "to take care・be attentive・considerate・careful",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "襟{えり}",
        english: "collar",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "だらしない",
        english: "sloppy・untidy・messy",
        type: MiniStoryWordType.ADJECTIVE_I
      },
    ],
    translation: `April offers many opportunities to meet people for the first time, so we tend to be careful about how we dress. I take care to avoid giving an untidy impression by wearing brightly colored clothes and collared shirts.`,
    audio: "T66.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 63,
  },
  "67": {
    id: "67",
    rubyStory: [
      {
        character: "A",
        dialogue: "お母さん、この制{せい}服{ふく}のズボン、お尻{しり}のあたりがパンパンで<破{やぶ}けそう>。",
      },
      {
        character: "B",
        dialogue: "あ、本当だね。入学したときは<ぶかぶかだった>のに・・・。卒業まであと半{はん}年{とし}か。買い替えるか<微{び}妙{みょう}な>ところだね。",
      },
    ],
    rubyWords: [
      {
        kanji: "破{やぶ}ける",
        english: "to tear・to rip",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "ぶかぶかな",
        english: "baggy・loose-fitting・oversized",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "微{び}妙{みょう}な",
        english: "unsure・delicate・questionable",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
    translation: `A: Mom, my school uniform pants are so tight around my waist, they're about to rip.\nB: Oh, you're right. And they were so baggy when you first started school... Now there's only six months until you graduate. I'm unsure whether to buy you new ones or not.`,
    audio: "T67.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 64,
  },
  "68": {
    id: "68",
    rubyStory: [
      {
        character: "A",
        dialogue: "新しいパソコン、どう？",
      },
      {
        character: "B",
        dialogue: "うん。<旧{きゅう}>モデルに比べて<多{た}少{しょう}>大きくなったけど、<反{はん}応{のう}>も速{はや}いから、<重{おも}たい>データ使った[作{さ}業{ぎょう}]もスムーズにできるよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "旧{きゅう}",
        english: "old・former・previous",
        type: MiniStoryWordType.PREFIX,
        important: true,
      },
      {
        kanji: "多{た}少{しょう}",
        english: "somewhat・a little bit・sslightly",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ],
        important: true,
      },
      {
        kanji: "反{はん}応{のう}[する]",
        english: "reaction・response",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.GODAN_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "重{おも}たい",
        english: "heavy・bulky",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "スムーズな",
        english: "smooth",
        type: MiniStoryWordType.ADJECTIVE_NA,
      },
      {
        kanji: "作{さ}業{ぎょう}",
        english: "work・operation・task",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
    ],
    translation: `A: How do you like your new computer?\nB: Hmm,. I's a little bigger than the previous model,but it also responds faster, so it can handle heavy amounts of data smoothly.`,
    audio: "T68.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 65,
  },
  "69": {
    id: "69",
    rubyStory: [
      {
        character: "A",
        dialogue: "授{じゅ}業{ぎょう}の資{し}料{りょう}をダウンロードしたんだけど、開{ひら}けなかったの。",
      },
      {
        character: "B",
        dialogue: "[圧{あつ}縮{しゅく}]<フォルダ>だからじゃない？<解{かい}凍{とう}すれば>いいよ。",
      },
      {
        character: "A",
        dialogue: "あ、そっか。あと、ここに書いてある漢字って何て読むの？読み方が分からないから<入{にゅう}力{りょく}できなくて>...。",
      },
      {
        character: "B",
        dialogue: "ええと・・・難しいね。こういうときは<手{て}書{が}き><機{き}能{のう}>を<活{かつ}用{よう}しよう>。",
      },
    ],
    rubyWords: [
      {
        kanji: "フォルダ",
        english: "folder",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "解{かい}凍{とう} [する]",
        english: "decompression・unzip",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "入{にゅう}力{りょく} [する]",
        english: "input",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "出{しゅつ}力{りょく} [する]",
        english: "output",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "手{て}書{が}き [する]",
        english: "handwriting・to write by hand",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "機{き}能{のう} [する]",
        english: "function・to function",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "機{き}能{のう}的{てき}な",
        english: "functional",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "活{か}用{よう} [する]",
        english: "utilization・to utilize・apply",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "圧{あつ}縮{しゅく}",
        english: "compression・to compress",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: I downloaded the class materials, but I couldn't open them.\nB: Maybe that's because it's a compressed folder. Just unzip it.\nA: Oh, I see. Also, how do you read the kanji characters written here? I don't know how to read them, so I can't input them...\nB: Well... that's more difficult. In this case, let's use the handwriting function.`,
    audio: "T69.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 66,
  },
  "70": {
    id: "70",
    rubyStory: [
      {
        character: "",
        dialogue: "インターネットを通{とお}して、世界中の情報が<手{て}軽{がる}に>手{て}に入{い}れられるようになった。それによって社会・[経{けい}済{ざい}]に大きな革{かく}命{めい}が起きたことを<IT><革{かく}命{めい}>という。",
      },
    ],
    rubyWords: [
      {
        kanji: "手{て}軽{がる}な",
        english: "easy to handle・convenient",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "IT",
        english: "information technology",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "革{かく}命{めい}",
        english: "revolution",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "経{けい}済{ざい}",
        english: "economy",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `Through the Internet, information from all over the world has become readily available. This has led to a major social and economic revolution, known as the IT revolution.`,
    audio: "T70.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 66,
  },
  "71": {
    id: "71",
    rubyStory: [
      {
        character: "",
        dialogue: "「<リモートワークしなきゃ>いけないんだけどパソコンが苦手」「ソフトの使い方がよく分からないから、<常{つね}に><電{でん}卓{たく}>を使っている」「[作{さ}業{ぎょう}]の[無{む}駄{だ}]を<省{はぶ}きたい>けど、何をしたらいいか分からない」そのコンプレックス、パソコン[市{し}民{みん}講{こう}座{ざ}]で[解{かい}消{しょう}]しませんか？",
      },
    ],
    rubyWords: [
      {
        kanji: "リモートワーク [する]",
        english: "remote work・to work remotely",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
      },
      {
        kanji: "リモート",
        english: "remote",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "常{つね}に",
        english: "always・constantly",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "電{でん}卓{たく}",
        english: "calculator",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "省{はぶ}く",
        english: "to omit・to save (time, effort, etc.)",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "コンプレックス",
        english: "complex",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "無{む}駄{だ}",
        english: "waste・futility",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "市{し}民{みん}講{こう}座{ざ}",
        english: "community class",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "解{かい}消{しょう} [する]",
        english: "elimination・to eliminate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
    ],
    translation: `"I need to work remotely, but I'm not good with computers," or "I don't know how to use software, so I'm constantly using calculators" or "I want to eliminate work-related waste, but I don't know how" —if you have concerns like this, why not solve it by taking a community computer class?`,
    audio: "T71.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 67,
  },
  "72": {
    id: "72",
    rubyStory: [
      {
        character: "A",
        dialogue: "ねえ見て、メールで先生に[課{か}題{だい}]を[提{てい}出{しゅつ}]したら「[欲{よく}]で汚{きたな}いようです」って<コメント>がついてて・・・。",
      },
      {
        character: "B",
        dialogue: "それ、「よくできた内容です」っていう<メッセージ>じゃない？あの先生、漢字の<変{へん}換{かん}>ミスが多いよね。",
      },
    ],
    rubyWords: [
      {
        kanji: "コメント［する］",
        english: "comment・to leave a comment",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
      },
      {
        kanji: "メッセージ",
        english: "message",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "変{へん}換{かん}［する］",
        english: "conversion・to convert",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "課{か}題{だい}",
        english: "assignment",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "提{てい}出{しゅつ}［する］",
        english: "to submit・to present",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
      {
        kanji: "欲{よく}",
        english: "desire",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: Hey, look. I submitted an assignment to my teacher via email and she left the comment yoku de kitanai yodesu ("This seems greedy and dirty") ...\nB: But isn't her message actually saying yoku dekita naiyo desu ("This is well written content")? She makes a lot of kanji conversion errors, doesnit she?`,
    audio: "T72.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 68,
  },
  "73": {
    id: "73",
    rubyStory: [
      {
        character: "A",
        dialogue: "こないだCさんがSNSに[上{じょう}司{し}]の悪口書いてたのって見た？",
      },
      {
        character: "B",
        dialogue: "うん、見たよ。",
      },
      {
        character: "A",
        dialogue: "あの<投{とう}稿{こう}>、Cさんの後{こう}輩{はい}が<シェアして>、上{じょう}司{し}の<本{ほん}名{みょう}>ばらしちゃったんだって。それでCさんのアカウントが会社から<特{とく}定{てい}された>らしくて・・・Cさん、近{ちか}々{ぢか}会社やめるらしいよ。",
      },
      {
        character: "B",
        dialogue: "それは、<不{ふ}運{うん}だった>ね・・・。",
      },
    ],
    rubyWords: [
      {
        kanji: "投{とう}稿{こう}［する］",
        english: "to post",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "シェア［する］",
        english: "Sharing・to share",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
      },
      {
        kanji: "本{ほん}名{みょう}",
        english: "real name",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "特{とく}定{てい}［する］",
        english: "Identification・to specify・to identify",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "不{ふ}運{うん}な",
        english: "unfortunate",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "上{じょう}司{し}",
        english: "boss",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: Did you see that Mr. C wrote some awful things about his boss on social media the other day?\nB: Yes, I saw.\nA: His junior colleague shared the post and revealed his boss's real name. It seems that Mr. C's account was identified by the company... and it looks like Mr. C will be quitting the company soon.\nB: Wel, that's unfortunate...`,
    audio: "T73.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 68,
  },
  "74": {
    id: "74",
    rubyStory: [
      {
        character: "A",
        dialogue: "パソコンの[充{じゅう}電{でん}器{き}]、[壊{こわ}れちゃった]んだけど、充{じゅう}電{でん}器{き}は修{しゅう}理{り}の[対{たい}象{しょう}]<外{がい}>だから、こういう<ケース>は買い替えるしかないんだって。<電{でん}圧{あつ}>とか<電{でん}力{りょく}>とかよく分からないんだけど、どれ買えばいいかな？",
      },
      {
        character: "B",
        dialogue: "えっと・・・6OWだね。パソコンと同じメーカーのがいいよ。<ただ>、高いけどね。",
      },
    ],
    rubyWords: [
      {
        kanji: "〜外{がい}",
        english: "outside of the scope of ~・not included in ~",
        type: MiniStoryWordType.PREFIX,
        important: true,
      },
      {
        kanji: "ケース",
        english: "case",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "電{でん}圧{あつ}",
        english: "voltage",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "電{でん}力{りょく}",
        english: "electric power",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "ただ",
        english: "but・however",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "充{じゅう}電{でん}器{き}",
        english: "charger",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "壊{こわ}れる",
        english: "to break",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE,
        secondary: true,
      },
      {
        kanji: "対{たい}象{しょう}",
        english: "target・object",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: The charger for my computer broke, but chargers aren't included in repairs, so in this case I just have to buy a new one. I don't know much about voltage or power. Which one should I buy?\nB: Let's see... it's 60W. You should get one from the same manufacturer as your computer. But they're expensive.`,
    audio: "T74.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 69,
  },
  "75": {
    id: "75",
    rubyStory: [
      {
        character: "A",
        dialogue: "オンラインで、他の人と同時にファイルを<編{へん}集{しゅう}できる>方法ないかな。",
      },
      {
        character: "B",
        dialogue: "ウェブアプリを使えば、ファイルを<共{きょう}有{ゆう}する>だけで<やりとり>しながら<共{きょう}同{どう}>作{さ}業{ぎょう}ができるよ。データが<修{しゅう}正{せい}されたら>、リアルタイムで保{ほ}存{ぞん}されるんだ。",
      },
      {
        character: "A",
        dialogue: "<要{よう}するに>、内容が<上{うわ}書{が}きされて>いくってことだね。",
      },
    ],
    rubyWords: [
      {
        kanji: "編{へん}集{しゅう}［する］",
        english: "editing・to edit",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "共{きょう}有{ゆう}［する］",
        english: "sharing・to share",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "やりとり［する］",
        english: "exchange・to trade",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "修{しゅう}正{せい}［する］",
        english: "correction・to correct",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "要{よう}するに",
        english: "in short・to sum up",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "上{うわ}書{が}き［する］",
        english: "overwrite・to overwrite",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
    ],
    translation: `A: Is there any way I can edit a file online with another person at the same time?\nB: If you use a web app, you can collaborate just by sharing files to exchange them. Whenever data is modified, it's saved in real time.\nA: So in short, the content is overwritten.`,
    audio: "T75.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 70,
  },
  "76": {
    id: "76",
    rubyStory: [
      {
        character: "",
        dialogue: "[年{ねん}齢{れい}別{べつ}]のパソコン<普{ふ}及{きゅう}>[率{りつ}]を<探{さぐ}った>研{けん}究{きゅう}によると、人口の多{た}数{すう}を<占{し}める>30～59歳{さい}と60歳{さい}以上の普{ふ}及{きゅう}率{りつ}は60%以上で、前{ぜん}年{ねn}に比べて大きく[増{ぞう}加{か}]したそうだ。テレワークやオンライン学習が進んでいるため、<さらに>パソコンやタブレットの<需{じゅ}要{よう}>は増えていくと思われる。",
      },
    ],
    rubyWords: [
      {
        kanji: "普{ふ}及{きゅう}［する］",
        english: "to be widespread",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "探{さぐ}る",
        english: "to seek・to explore",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "占{し}める",
        english: "to account for・to take up",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "さらに",
        english: "furthermore・moreover",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "需{じゅ}要{よう}",
        english: "demand・need",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "年{ねん}齢{れい}別{べつ}",
        english: "by age group",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "率{りつ}",
        english: "rate",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "増{ぞう}加{か}",
        english: "increase・to increase",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `According to a study that explored penetration rates for computers by age, the penetration rates for the 30-59 and 60+ age groups, which account for the majority of the population, were over 60%, a significant increase over the previous year. Demand for PCs and tablets is expected to increase further due to remote working and online learning.`,
    audio: "T76.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 70,
  },
  "77": {
    id: "77",
    rubyStory: [
      {
        character: "A",
        dialogue: "もし<ハードウェア>に[不{ふ}具{ぐ}合{あい}]があった場合、<一{いっ}旦{たん}>[店{てん}舗{ぽ}]にお持ちください。<分{ぶん}解{かい}>[等{とう}]されますと、<保{ほ}証{しょう}>が受{う}けられなくなります。",
      },
      {
        character: "B",
        dialogue: "はい、分かりました。",
      },
    ],
    rubyWords: [
      {
        kanji: "ハードウェア",
        english: "hardware",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "一{いっ}旦{たん}",
        english: "once (something is done)・for now・temporarily",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "分{ぶん}解{かい}[する］",
        english: "disassembly・to disassemble",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "保{ほ}証{しょう}[する］",
        english: "warranty・to warranty",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "不{ふ}具{ぐ}合{あい}",
        english: "malfunction・defect",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "店{てん}舗{ぽ}",
        english: "store",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "等{とう}",
        english: "etc.",
        type: MiniStoryWordType.ADVERB,
        secondary: true,
      },
    ],
    translation: `A: If you have any hardware problems, just bring it back to the store for the moment. If you disassemble it yourself, you will lose your warranty.\nB: Yes, I understand.`,
    audio: "T77.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 71,
  },
  "78": {
    id: "78",
    rubyStory: [
      {
        character: "A",
        dialogue: "期末試験の<採{さい}点{てん}>結果を<リスト>にしたんだけど、ファイルが見つからなくて・・・。",
      },
      {
        character: "B",
        dialogue: "保{ほ}存{ぞん}せずに[終{しゅう}了{りょう}]したとか？",
      },
      {
        character: "A",
        dialogue: "そうかも・・・また<作{さく}成{せい}する>しかないかな。",
      },
      {
        character: "B",
        dialogue: "自動保存をオンにしておくといいよ。そうすれば、<改{かい}行{ぎょう}>でも<挿{そう}入{にゅう}>でも<削{さく}除{じょ}>でも、<更{こう}新{しん}する>たびに<勝{かっ}手{て}に>保存されるよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "採{さい}点{てん}[する］",
        english: "to grade・to score",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "リスト",
        english: "list",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "作{さく}成{せい}[する］",
        english: "creation・to create",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "改{かい}行{ぎょう}[する］",
        english: "to line break・to go to a new line",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "挿{そう}入{にゅう}[する］",
        english: "insertion・to insert",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "削{さく}除{じょ}[する］",
        english: "deletion・to delete",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "更{こう}新{しん}[する］",
        english: "update・to update",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "勝{かっ}手{て}な",
        english: "automatically・selfishly・without being asked",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "終{しゅう}了{りょう}[する］",
        english: "completion・to complete",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      }
    ],
    translation: `A: I made a list of the final exam scores, but I can't find the file...\nB: Did you exit without saving it or something?\nA: Maybe... I'll have to create it again.\nB: You should turn on auto-save. That way, every time you update, whether it's a line break, insertion, or deletion, it will save automatically.`,
    audio: "T78.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 72,
  },
  "79": {
    id: "79",
    rubyStory: [
      {
        character: "",
        dialogue: "この<システム>の<設{せっ}定{てい}>の変{へん}更{こう}を<反{はん}映{えい}させる>ためには、パソコンを<再{さい}起{き}動{どう}>する必要がある。",
      },
    ],
    rubyWords: [
      {
        kanji: "システム",
        english: "system",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "設{せっ}定{てい}[する］",
        english: "to set up・to configure",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "反{はん}映{えい}[する］",
        english: "reflection・to reflect",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "再{さい}起{き}動{どう}[する］",
        english: "reboot・to reboot・to restart",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "起{き}動{どう}[する］",
        english: "to start up・to turn on",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
    ],
    translation: `In order for these changes to system settings to take effect, the computer must be rebooted.`,
    audio: "T79.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 72,
  },
  "80": {
    id: "80",
    rubyStory: [
      {
        character: "A",
        dialogue: "AIは人より<優{すぐ}れた>点がたくさんあるんだね。",
      },
      {
        character: "B",
        dialogue: "そうだね。もう少し時間が<経{た}ったら>、AIが人間を[超{こ}える]んじゃないかな。",
      },
      {
        character: "A",
        dialogue: "それは<否{ふ}定{てい}できない>ね。そのうち[人{じん}類{るい}]はAIに<支{し}配{ぱい}される>って言う人もいるもんね。",
      },
    ],
    rubyWords: [
      {
        kanji: "優{すぐ}れる",
        english: "to excel・to be superior",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "経{た}つ",
        english: "to pass (time)・to elapse",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "否{ふ}定{てい}[する］",
        english: "denial・to deny",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "肯{こう}定{てい}[する］",
        english: "affirmation・to affirm",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "支{し}配{はい}[する］",
        english: "domination・to dominate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "超{こ}える",
        english: "to exceed・to surpass",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        secondary: true,
      },
      {
        kanji: "人{じん}類{るい}",
        english: "humanity",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
    ],
    translation: `A: In many ways, AI is superior to humanity.\nB: Yes, it is. I think that after some time has passed, AI will probably surpass humans.\nA: That's undeniable. Some people even think that AI will eventually come to dominate humanity.`,
    audio: "T80.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 73,
  },
  "81": {
    id: "81",
    rubyStory: [
      {
        character: "",
        dialogue: "メールに<添{てん}付{ぶ}する>ファイル<容{よう}量{りょう}>は3MB[未{み}満{まん}]とすることを覚えておこう。ファイルの容{よう}量{りょう}が3MBを<超{ちょう}過{か}する>と、メールが届かない可{か}能{のう}性{せい}がある。",
      },
    ],
    rubyWords: [
      {
        kanji: "添{てん}付{ぷ}[する］",
        english: "attachment・to attach",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "添{てん}付{ぷ}ファイル",
        english: "attached file",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "容{よう}量{りょう}",
        english: "file size・capacity・volume",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "超{ちょう}過{か}[する］",
        english: "excess・to exceed",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "未{み}満{まん}",
        english: "under the limit・below the minimum",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `Try to remember that the size of a file attached to an email should be less than 3MB. If the file size exceeds 3MB, the email may not arrive.`,
    audio: "T81.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 74,
  },
  "82": {
    id: "82",
    rubyStory: [
      {
        character: "A",
        dialogue: "スマートスピーカーって持ってる？",
      },
      {
        character: "B",
        dialogue: "うん。うちは[家{か}電{でん}]と<つないで>るから、毎日使ってるよ。あとは家族との音{おん}声{せい}<通{つう}信{しん}>に使ったり、<宅{たく}配{はい}>[頼{たの}んだり]…。うちの夫{おっと}なんて<親{した}しい>友人みたいに、よくAIとおしゃべりしてるよ。",
      },
      {
        character: "A",
        dialogue: "そっか、便利なんだね。今<売{う}り出{だ}して>るやつ、買ってみようかな。",
      },
    ],
    rubyWords: [
      {
        kanji: "つなぐ",
        english: "to connect・to link",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "通{つう}信{しん}[する］",
        english: "communication・to communicate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "宅{たく}配{はい}[する］",
        english: "home delivery・to deliver to one's home",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "親{した}しい",
        english: "familiar・close",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "売{う}り出{だ}す",
        english: "to go on sale・to be put up for sale",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "家{か}電{でん}",
        english: "home electronics",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "頼{たの}む",
        english: "to ask for a favor・to request",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
    ],
    translation: `A: Do you own a smart speaker?\nB: Yes. I use it every day because it's linked to my home appliances. I also use it for voice communications with my family, ordering home deliveries... My husband often chats with the Al like a close friend.\nA: Right. It seems very handy. I think I'll buy one of those ofered on sale at the moment.`,
    audio: "T82.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 74,
  },
  "83": {
    id: "83",
    rubyStory: [
      {
        character: "A",
        dialogue: "すみません、ノートパソコンを探しているんですが。",
      },
      {
        character: "B",
        dialogue: "どのような<用{よう}途{と}>でしょうか。",
      },
      {
        character: "A",
        dialogue: "WEB開発です。",
      },
      {
        character: "B",
        dialogue: "でしたら、こちらはいかがですか。<外{がい}部{ぶ}>のモニターとも<接{せつ}続{ぞく}し>やすい、[拡{かく}張{ちょう}性{せい}]が高い[製{せい}品{ひん}]です。新しいモデルに<劣{おと}らない>、クリエイターの方{かた}に<適{てき}した>パソコンです。",
      },
    ],
    rubyWords: [
      {
        kanji: "用{よう}途{と}",
        english: "purpose of use・application",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "外{がい}部{ぶ}",
        english: "external part",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "接{せつ}続{ぞく}[する］",
        english: "connection・to connect",
        type: MiniStoryWordType.IRREGULAR_TRANSITIVE,
        important: true,
      },
      {
        kanji: "劣{おと}る",
        english: "to be inferior to・to be worse than",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "適{てき}する",
        english: "to be suitable for・to be appropriate",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "拡{かく}張{ちょう}性{せい}",
        english: "extensibility",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "製{せい}品{ひん}",
        english: "product",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: Excuse me, I'm looking for a laptop computer.\nB: What will you use it for?\nA: Web development.\nB: Okay, then how about this one? I's a very extensible model that can easily be connected to an external monitor. It's just as good as the new models and very suitable for creators.`,
    audio: "T83.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 75,
  },
  "84": {
    id: "84",
    rubyStory: [
      {
        character: "A",
        dialogue: "昨日、SNSで<相{そう}互{ご}>フォローしてる人が動画の<配{はい}信{しん}して>たから見てみたんだけど、以前一緒に撮{と}った写真が[許{きょ}可{か}]なく使われてて..",
      },
      {
        character: "B",
        dialogue: "え！それは<プライバシー>をきちんと守ってほしいね。",
      },
      {
        character: "A",
        dialogue: "うん。[ショック]だったから、その<直{ちょく}後{ご}>に連絡しておいた。",
      }
    ],
    rubyWords: [
      {
        kanji: "相{そう}互{ご}",
        english: "mutual",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "配{はい}信{しん}[する］",
        english: "streaming・to stream",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "プライバシー",
        english: "privacy",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "直{ちょく}後{ご}",
        english: "right after",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "直{ちょく}前{ぜん}",
        english: "right before",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "許{きょ}可{か}",
        english: "permission・approval",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "ショック",
        english: "shock",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
    ],
    translation: `A: Yesterday, someone on social media— we follow each other-was streaming a video, so I watched it, but she used a photo wed taken together previously without asking my permission...\nB: What? I would have thought shed respect your privacy.\nA: Yes. I was shocked, so I contacted her right after that.`,
    audio: "T84.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 76,
  },
  "85": {
    id: "85",
    rubyStory: [
      {
        character: "",
        dialogue: "「インスタ映{ば}え」とは、<一{ひと}言{こと}>でいえば、「インスタグラムに写真を<アップロードした>際{さい}に、<華{はな}やか>で写真がよく<映{は}える>」という意味である。",
      },
    ],
    rubyWords: [
      {
        kanji: "一{ひと}言{こと}",
        english: "single word・in a word",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "アップロード[する]",
        english: "upload・to upload",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
      },
      {
        kanji: "華{はな}やかな",
        english: "gorgeous・magnificent",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "映{は}える",
        english: "to look・appear good (in photos)",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE,
        important: true,
      },
    ],
    translation: `In a word, "Instagrammable" means "something gorgeous that would look good uploaded as a photo on Instagram."`,
    audio: "T85.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 76,
  },
  "86": {
    id: "86",
    rubyStory: [
      {
        character: "A",
        dialogue: "<サブスク>の<契{けい}約{やく}>をしたいんだけど、この「[同{どう}意{い}する]」ボタンがなぜか押{お}せないんだよね。",
      },
      {
        character: "B",
        dialogue: "ああ、ページを最後まで<スクロールすれば>、<実{じっ}行{こう}できる>と思うよ。契{けい}約{やく}上{じょう}の注意点をちゃんと読まないとトラブルに<つながる>から、簡単に「同{どう}意{い}する」ボタンを押{お}せないように[工{く}夫{ふう}]してあるんだね。",
      },
    ],
    rubyWords: [
      {
        kanji: "サブスク（リプション）",
        english: "subscription",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "契{けい}約{やく}[する]",
        english: "contract・to enter into a contract",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "スクロール［する］",
        english: "scroll・to scroll",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
      },
      {
        kanji: "実{じっ}行{こう}[する]",
        english: "implementation・execution・to execute",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "つながる",
        english: "to lead to",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "つなげる",
        english: "to connect・to link",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "同{どう}意{い}[する]",
        english: "agreement・to agree",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
      {
        kanji: "工{く}夫{ふう}[する]",
        english: "Ingenuity・to devise",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
    ],
    translation: `A: I want to sign up for a subscription, but for some reason I can't click the "I agree button.\nB: Oh, if you scroll to the end of the page, I think you can do it. If you don't properly read over the contractual terms and conditions, it can lead to trouble, so they've made it so that you can't just press the "I agree" button without reading everything.`,
    audio: "T86.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 77,
  },
  "87": {
    id: "87",
    rubyStory: [
      {
        character: "",
        dialogue: "ノート型{がた}パソコンの場合は多くは、[本{ほん}体{たい}]の[側{そく}面{めん}]や<底{そこ}>から熱{ねつ}を[逃{に}がす][構{こう}造{ぞう}]になっている。[発{はつ}熱{ねつ}]は[処{しょ}理{り}速{そく}度{ど}]などのパソコンの<性{せい}能{のう}>に<関{かか}わる>ので、本{ほん}体{たい}と机{つくえ}の間{あいだ}を空{あ}けておくことが重要だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "底{そこ}",
        english: "bottom・floor",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "性{せい}能{のう}",
        english: "performance",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "関{かか}わる",
        english: "to be related to・to be involved in・to connect with",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "本{ほん}体{たい}",
        english: "main unit・body",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "側{そく}面{めん}",
        english: "side",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "逃{に}がす",
        english: "to let escape・to let loose",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "構{こう}造{ぞう}",
        english: "structure",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "発{はつ}熱{ねつ}",
        english: "heat generation",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "処{しょ}理{り}",
        english: "processing",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "処{しょ}理{り}速{そく}度{ど}",
        english: "processing speed",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
    ],
    translation: `Many laptop computers are designed to allow heat to escape from the sides and bottom. Heat build-up is related to the performance of the computer - for example, processing speed - so it's important to leave space between the computer and the desk.`,
    audio: "T87.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 78,
  },
  "88": {
    id: "88",
    rubyStory: [
      {
        character: "",
        dialogue: "<風{ふう}景{けい}>より[人{じん}物{ぶつ}]をしっかり[目{め}立{だ}たせたい]<画{が}像{ぞう}>は、<背{はい}景{けい}>の<焦{しょう}点{てん}>を[ぼかす]といい。アプリを使えば<容{よう}易{い}に><加{か}工{こう}できる>。",
      },
    ],
    rubyWords: [
      {
        kanji: "風{ふう}景{けい}",
        english: "scenery",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "画{が}像{ぞう}",
        english: "picture・image",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "背{はい}景{けい}",
        english: "background",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "焦{しょう}点{てん}",
        english: "focus point",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "容{よう}易{い}な",
        english: "easy",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "加{か}工{こう}[する]",
        english: "process・to process・to work on",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "加{か}工{こう}食{しょく}品{ひん}",
        english: "processed food",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "人{じん}物{ぶつ}",
        english: "people and things・subjects",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "目{め}立{だ}たせる",
        english: "to make something stand out",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "ぼかす",
        english: "to blur",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
    ],
    translation: `For images where you want the people to stand out more than the scenery, you can blur the background focus. This can easily be processed using an app.`,
    audio: "T88.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 78,
  },
  "89": {
    id: "89",
    rubyStory: [
      {
        character: "",
        dialogue: "[化{け}粧{しょう}]や[画{が}像{ぞう}]の[加{か}工{こう}]によって、自分の[外{がい}見{けん}]をよりよく見せることを「<盛{も}る>」という。これらを<支{し}援{えん}する>技{ぎ}術{じゅつ}は、シンデレラテクノロジーと<命{めい}名{めい}されて>いる。",
      },
    ],
    rubyWords: [
      {
        kanji: "盛{も}る",
        english: "to enhance・to exaggerate",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "支{し}援{えん}[する]",
        english: "support・to support",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "命{めい}名{めい}[する]",
        english: "name・to be named・to be called",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "化{け}粧{しょう}",
        english: "makeup・cosmetics",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "画{が}像{ぞう}",
        english: "picture・image",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "加{か}工{こう}",
        english: "processing・manufacturing",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "外{がい}見{けん}",
        english: "appearance・looks",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `The term "enhance" refers to the process of improving one's appearance through cosmetics or image manipulation. Technology that supports this is called Cinderella technology.`,
    audio: "T89.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 79,
  },
  "90": {
    id: "90",
    rubyStory: [
      {
        character: "A",
        dialogue: "印{いん}刷{さつ}された<活{かつ}字{じ}>資{し}料{りょう}を、データ化{か}してテキストファイルにしたいんだけど、どうするのがいいかな。",
      },
      {
        character: "B",
        dialogue: "んー、<ざっと>説明すると、まず資{し}料{りょう}をスキャンして、その後{あと}ソフトを使って文字を<読{よ}み込{こ}めば>いいよ。よく、文字が間違っていたり、いらない<記{き}号{ごう}>が入{はい}ったりしちゃうんだけど、そういうときはテキスト[編{へん}集{しゅう}]ソフトで<除{のぞ}いて>いけば、<最{さい}終{しゅう}的{てき}に>きれいなデータになるよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "活{かつ}字{じ}",
        english: "typeface・printing type",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "ざっと",
        english: "quickly・briefly",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "読{よ}み込{こ}む",
        english: "to load (data)・to read (data)",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "記{き}号{ごう}",
        english: "symbol・mark",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "除{のぞ}く",
        english: "To remove・to exclude",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "最{さい}終{しゅう}的{てき}に",
        english: "finally・in the end",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "最{さい}終{しゅう}",
        english: "Last・final",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "編{へん}集{しゅう} [する]",
        english: "editing・to edit",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
    ],
    translation: `A: I'd like to convert typed, printed documents into data and text files. How can I do that?\nB: Well, to explain briefly, you scan the material first, and then use software to read the text. There will often be incorrect characters or unwanted symbols, but if you remove them using text editing software, you'll finally end up with clean data.`,
    audio: "T90.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 80,
  },
  "91": {
    id: "91",
    rubyStory: [
      {
        character: "A",
        dialogue: "先週の[売{う}り上{げ}げ]の<速{そく}報{ほう}>メール、見た？",
      },
      {
        character: "B",
        dialogue: "さっき見た。またCさんがトップだったね。",
      },
      {
        character: "A",
        dialogue: "Cさんは会社の<行{い}き帰{かえ}り>によく一緒になるんだけど、本当に聞き上手だよね。お客さんの希望に<沿{そ}って>、商品を[提{てい}案{あん}]するのが上手なんだろうな。あと、<顧{こ}客{きゃく}>データをA Iに[分{ぶん}析{せき}させて]、[効{こう}率{りつ}的{てき}に]営{えい}業{ぎょう}してるんだって。",
      },
      {
        character: "B",
        dialogue: "セールテックってやつか。Cさん、さすが部長<候{こう}補{ほ}>だね。",
      },
    ],
    rubyWords: [
      {
        kanji: "速{そく}報{ほう}",
        english: "bulletin・quick report",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "行{い}き帰{かえ}り",
        english: "to and from",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "沿{そ}う",
        english: "to follow along・to be in line with・to comply with",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "顧{こ}客{きゃく}",
        english: "customer",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "候{こう}補{ほ}",
        english: "candidate・prospect",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "売{う}り上{あ}げ",
        english: "sales figures・sales performance",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "提{てい}案{あん}",
        english: "proposal・suggestion",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "分{ぶん}析{せき}[する]",
        english: "analysis・to analyze",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
      {
        kanji: "効{こう}率{りつ}",
        english: "efficiency",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
    ],
    translation: `A: Did you see the email with last week's sales bulletin?\nB: I just saw it. Ms. C was at the top of the list again.\nA: I often travel with Ms. C on the way to and from work, and she's a really good listener. I think shes good at recommending products in line with what the customer wants. Also, she gets AI analysis of customer data to make her sales more efficient.\nB: Sales tech, they call it. Now I know why shes a candidate for department manager.`,
    audio: "T91.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 81,
  },
  "92": {
    id: "92",
    rubyStory: [
      {
        character: "",
        dialogue: "音楽ゲーム、<略{きゃく}して>「音{おと}ゲー」は<リズム>に[合わせて]<太{たい}鼓{こ}>やボタンを[たたく]ゲームで、多くのゲームセンターに置いてある。最近では、リズムに合わせて<タップする>ゲームがスマホアプリでたくさん<リリースされて>いる。",
      },
    ],
    rubyWords: [
      {
        kanji: "略{きゃく}す",
        english: "to abbreviate",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "リズム",
        english: "rhythm",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "太{たい}鼓{こ}",
        english: "drum",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "タップ［する］",
        english: "tap・to tap",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
      },
      {
        kanji: "リリース［する］",
        english: "release・to release",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
      },
      {
        kanji: "合{あ}わせる",
        english: "to match・to fit",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "たたく",
        english: "to hit・to strike",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      }
    ],
    translation: `Musical rhythm games, often abbreviated in Japanese as "otoge", are games in which players tap drums or buttons to a musical rhythm. They can be found in many game arcades. Recently, many games in which players tap to the rhythm have been released as smartphone apps.`,
    audio: "T92.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 82,
  },
  "93": {
    id: "93",
    rubyStory: [
      {
        character: "A",
        dialogue: "このゲーム、最初の[城{しろ}]で<詰{つ}まった>んだけど。",
      },
      {
        character: "B",
        dialogue: "<武{ぶ}器{き}>は何使ってる？最初の[敷{てき}]は<銃{じゅう}>よりも剣{けん}に弱{よわ}かった気がする。",
      },
      {
        character: "A",
        dialogue: "そこが<弱{じゃく}点{てん}>なんだね。でも、[近{ちか}づく]と[攻{こう}撃{げき}]に当たっちゃうんだけど。",
      },
      {
        character: "B",
        dialogue: "あの城{しろ}は、[裏{うら}]の[壁{かべ}]に穴が開{あ}いてるから、そこから<こっそり>入{はい}って、[背{せ}中{なか}]から剣{けん}で[斬{き}る]んだよ。",
      },
      {
        character: "A",
        dialogue: "なんて<卑{ひ}怯{きよう}な>…。",
      },
    ],
    rubyWords: [
      {
        kanji: "詰{つ}まる",
        english: "to be stuck",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "武{ぶ}器{き}",
        english: "weapon",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "銃{じゅう}",
        english: "gun",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "剣{けん}",
        english: "sword",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "弱{じゃく}点{てん}",
        english: "weakess・vulnerability",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "こっそり（と）",
        english: "secretly",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "卑{ひ}怯{きよう}な",
        english: "cowardly",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "城{しろ}",
        english: "castle",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "敷{てき}",
        english: "ground",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "近{ちか}づく",
        english: "to approach",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        secondary: true,
      },
      {
        kanji: "攻{こう}撃{げき}",
        english: "attack",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "裏{うら}",
        english: "back・reverse side・other side (of something)",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "壁{かべ}",
        english: "wall",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "背{せ}中{なか}",
        english: "back・behind (someone's back)",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "斬{き}る",
        english: "to cut",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
    ],
    translation: `A: I'm stuck in the first castle in this game.\nB: What weapon are you using? I think the first enemies are more vulnerable to swords than guns.\nA: That's their weakness, right. But when I get too close, I get hit by their attacks.\nB: There's a hole in the back wall of the castle, so I sneak in through there and stab them in the back with my sword.\nA: That's so cowardly...`,
    audio: "T93.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 83,
  },
  "94": {
    id: "94",
    rubyStory: [
      {
        character: "A",
        dialogue: "<ライバル>ってすごく重要な<要{よう}素{そ}>だと思う。",
      },
      {
        character: "B",
        dialogue: "分かる。[名{めい}作{さく}]ってだいたいライバルが<主{しゅ}人{じん}公{こう}>より人気あるよね。最初強かった[敵{てき}]が、<味{み}方{かた}>になる。まさかあのキャラクターが[仲間]になってくれるなんて！って<わくわくする>。",
      },
      {
        character: "A",
        dialogue: "でも、主{しゅ}人{じん}公{こう}に<ふさわしい>敵{てき}として最後まで戦{たたか}うのもいいよね。",
      },
    ],
    rubyWords: [
      {
        kanji: "ライバル",
        english: "rival",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "要{よう}素{そ}",
        english: "factor・element",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "主{しゅ}人{じん}公{こう}",
        english: "main character・protagonist",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "味{み}方{かた}［する］",
        english: "Ally・to take sides with",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "わくわくする",
        english: "to feel excited",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "ふさわしい",
        english: "appropriate・suitable・worthy of",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "名{めい}作{さく}",
        english: "famous work・masterpiece",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "敵{てき}",
        english: "enemy",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "仲{なか}間{ま}",
        english: "companion・friend・ally",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      }
    ],
    translation: `A: I think rivalry is a very important element.\nB: I agree. In lots of great movies, rivals are more popular than the main characters. Someone who was a powerful enemy at first later becomes an ally. And you never expect that character to become a friend! It's exciting!\nA: But it's also great when they fight to the very end as an enemy worthy of the main character.`,
    audio: "T94.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 84,
  },
  "95": {
    id: "95",
    rubyStory: [
      {
        character: "",
        dialogue: "高いところから<ジャンプして>[登{とう}場{じょう}]する。戦{たたか}う前に<勇{いさ}ましい><せりふ>を言う。これらは日本のヒーローの[特{とく}徴{ちょう}]である。ロボットに乗って戦う場合も、<パイロット>は[必{ひっ}殺{さつ}技{わざ}]を<撃{う}つ>ときに、[技{わざ}]の名前を[叫{さけ}ぶ]のだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "ジャンプ［する］",
        english: "jump・to jump",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
      },
      {
        kanji: "勇{いさ}ましい",
        english: "brave・bold・heroic",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "せりふ",
        english: "line・speech・dialogue",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "パイロット",
        english: "pilot",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "撃{う}つ",
        english: "to fire off・to discharge",
        type: MiniStoryWordType.IRREGULAR_TRANSITIVE,
        important: true,
      },
      {
        kanji: "登{とう}場{じょう}",
        english: "appearance・to appear on the scene",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "特{とく}徴{ちょう}",
        english: "characteristic・feature",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "必{ひっ}殺{さつ}技{わざ}",
        english: "finishing move・special move",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "技{わざ}",
        english: "technique・move",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "叫{さけ}ぶ",
        english: "to shout・to cry out",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        secondary: true,
      },
    ],
    translation: `Jumping down from somewhere high to make a dramatic entrance. Saying heroic lines before fighting. These are the characteristics of Japanese heroes. Even when fighting in a giant robot, the pilot has to shout the name of the technique when firing off a killer technique.`,
    audio: "T95.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 84,
  },
  "96": {
    id: "96",
    rubyStory: [
      {
        character: "",
        dialogue: "ヒミコという名前はいろいろなマンガに登{とう}場{じょう}するが、これは[古{こ}代{だい}]の日本の<女{じょ}王{おう}>の名前である。男が[王{おう}]だった時代は、ずっと<争{あらそ}い>が続{つづ}いていた。しかし、女{じょ}王{おう}が国を<治{おさ}める>ようになると、争{あらそ}いは止まったと言われている。",
      },
    ],
    rubyWords: [
      {
        kanji: "女{じょ}王{おう}",
        english: "female ruler・queen",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "争{あらそ}い",
        english: "dispute・conflict",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "争{あらそ}う",
        english: "To fight・to compete・to struggle",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "治{おさ}める",
        english: "Rule・to govern・to reign over",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "古{こ}代{だい}",
        english: "ancient times・old era",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "王{おう}",
        english: "king・ruler",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `Himiko is the name of an ancient Japanese queen, and her name appears in various manga comics. When men were kings, there was constant conflict. However, it's said that when a queen ruled the land, the fighting ceased.`,
    audio: "T96.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 85,
  },
  "97": {
    id: "97",
    rubyStory: [
      {
        character: "",
        dialogue: "この映画では<悪{あく}役{やく}>の<演{えん}技{ぎ}>が素{す}晴{ば}らしく、[数{かず}々{かず}]の<名{めい}><シーン>を生{う}んだ。<評{ひょう}論{ろん}家{か}>も[絶{ぜっ}賛{さん}した]。しかし、あまりにも<醜{みにく}い><役{やく}>を[演{えん}じた]ためか、<役{やく}者{しゃ}>はその後{ご}、亡{な}くなってしまった。",
      },
    ],
    rubyWords: [
      {
        kanji: "悪{あく}役{やく}",
        english: "villain・antagonist・bad guy",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "演{えん}技{ぎ}［する］",
        english: "performance・acting・to perform・to act",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "名{めい}～",
        english: "famous ~, great ~",
        type: MiniStoryWordType.PREFIX,
        important: true,
      },
      {
        kanji: "シーン",
        english: "scene",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "評{ひょう}論{ろん}家{か}",
        english: "critic・reviewer",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "評{ひょう}論{ろん}［する］",
        english: "criticism・to criticize",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "醜{みにく}い",
        english: "ugly・hideous・unpleasant",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "役{やく}",
        english: "role",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "役{やく}者{しゃ}",
        english: "actor・performer",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "数{かず}々{かず}",
        english: "numerous・many",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "絶{ぜっ}賛{さん}[する]",
        english: "high praise・to praise highly",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
      {
        kanji: "演{えん}じる",
        english: "to perform・to act",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        secondary: true,
      },
    ],
    translation: `The villain's performance in this film was excellent, which made for lots of great scenes. Critics also praised it. However, perhaps because the role was so unpleasant, the actor had passedaway.`,
    audio: "T97.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 86,
  },
  "98": {
    id: "98",
    rubyStory: [
      {
        character: "",
        dialogue: "小学生の頃、私はいろいろ<空{くう}想{そう}して>、漫画を描くことが好きだった。中学生になると、家族たちは<くだらない>とか、そんな<幼{よう}稚{ち}な>ことはやめると言ってきた。しかし、私は高校でも大学でも漫画を描くことはやめなかった。そして25[才{さい}]のとき、<ついに>私の描いた漫画が[雑{ざっ}誌{し}]に<載{の}った>。",
      },
    ],
    rubyWords: [
      {
        kanji: "空{くう}想{そう}［する］",
        english: "fantasy・to fantasize・to have daydreams",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "くだらない",
        english: "silly・nonsense・pointless",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "幼{よう}稚{ち}な",
        english: "childish・naive",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "ついに",
        english: "finally・at last",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "載{の}る",
        english: "To be published・printed・posted",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "才{さい}",
        english: "years old",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "雑{ざっ}誌{し}",
        english: "magazine",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `When I was in elementary school, I liked to fantasize about all kinds of things and draw manga comics. When I entered junior high school, my family told me it was silly and that I should stop doing such childish things. But I never stopped drawing manga, even in high school and in college. Finally, when I was 25, a magazine published a manga comic that I'd drawn.`,
    audio: "T98.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 86,
  },
  "99": {
    id: "99",
    rubyStory: [
      {
        character: "",
        dialogue: "<演{えん}劇{げき}>の面白さは、<粗{あら}筋{すじ}>は同じでも、[演{えん}出{しゅつ}]によって全く[異{こと}なる]作品になることである。さらに、同じメンバーでも日{ひ}によって<芝{しば}居{い}>は少しずつ変化する。",
      },
    ],
    rubyWords: [
      {
        kanji: "演{えん}劇{げき}",
        english: "theater・play",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "粗{あら}筋{すじ}",
        english: "plot・outline・summary",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "芝{しば}居{い}［する］",
        english: "acting・to act・play・perform",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "演{えん}出{しゅつ}[する]",
        english: "direction・to direct",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
      {
        kanji: "異{こと}なる",
        english: "different・to differ",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE,
        secondary: true,
      },
    ],
    translation: `The fascinating thing about theater is that even if the broad outline of a play stays the same, it can become a completely different work depending on how it's directed. Moreover, even with the same cast, the show will vary slghdly from day to day.`,
    audio: "T99.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 87,
  },
  "100": {
    id: "100",
    rubyStory: [
      {
        character: "",
        dialogue: "私は最初、その漫画を、<単{たん}に>街を<脅{おびや}かす>巨人を<やっつける>だけの漫画だと思っていた。しかし、さまざまな<謎{なぞ}>があることに[気づき]、インターネット上{じょう}で[議{ぎ}論{ろん}]しながら<展{てん}開{かい}>を予想するようになった。",
      },
    ],
    rubyWords: [
      {
        kanji: "単{たん}に",
        english: "simply・just",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "脅{おびや}かす",
        english: "to threaten・to intimidate",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "やっつける",
        english: "to defeat・to slay",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "謎{なぞ}",
        english: "mystery・riddle",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "展{てん}開{かい}[する]",
        english: "development・to develop (a story)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "気{き}づく",
        english: "to notice・to realize・to become aware of",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        secondary: true,
      },
      {
        kanji: "議{ぎ}論{ろん}",
        english: "discussion・debate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
    ],
    translation: `At first, I thought this manga was simply a comic book about slaying giants that threaten the city. However, I later became aware of various mysteries and began to try to predict story developments through discussions on the Internet.`,
    audio: "T100.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 88,
  },
  "101": {
    id: "101",
    rubyStory: [
      {
        character: "",
        dialogue: "元{もと}<刑{けい}事{じ}>が<殺{ざつ}人{じん}>をしたと言って警{けい}察{さつ}にやってきた。そんなシーンから始まるこの[小{しょう}説{せつ}]は、[当{とう}初{しょ}]、<批{ひ}評{ひょう}>家{か}の[評{ひょう}価{か}]は高くなかった。しかし、読{どく}者{しゃ}の人気は高く、映画やドラマが<制{せい}作{さく}された>。",
      },
    ],
    rubyWords: [
      {
        kanji: "刑{けい}事{じ}",
        english: "detective・police officer",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "殺{さつ}人{じん}",
        english: "murder",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "批{ひ}評{ひょう}[する]",
        english: "Critique・to criticize・to review",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "制{せい}作{さく}[する]",
        english: "production・to produce",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "小{しょう}説{せつ}",
        english: "novel",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "当{とう}初{しょ}",
        english: "initially・at first",
        type: MiniStoryWordType.ADVERB,
        secondary: true,
      },
      {
        kanji: "評{ひょう}価{か}",
        english: "evaluation・to evaluate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
    ],
    translation: `A former detective comes to the police, claiming to have committed a murder. The novel, which begins with this scene, was not well received by critics at first. But it was very popular with readers, and a movie and drama series were later produced.`,
    audio: "T101.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 88,
  },
  "102": {
    id: "102",
    rubyStory: [
      {
        character: "",
        dialogue: "<娯{ご}楽{らく}>作品では、<探{たん}偵{てい}>は人気のある[職{しょく}業{ぎょう}]だが、[泥{どろ}棒{ぼう}]も人気があったりする。泥{どろ}棒{ぼう}のキャラクターは<ダイヤ>などの<宝{たから}>を[盗{ぬす}む]が、お金には興味がなく、盗{ぬす}んだものを<返{へん}却{きゃく}する>ことも多い。また、考えてみれば[不{ふ}思{し}議{ぎ}な]ことだが、しばしば[銃{じゅう}]から<トランプ>を<発{はっ}射{しゃ}して>戦{たたか}ったりする。",
      },
    ],
    rubyWords: [
      {
        kanji: "娛{ご}楽{らく}",
        english: "entertainment",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "探{たん}偵{てい}",
        english: "detective・investigator",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "ダイヤ",
        english: "diamond",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "宝{たから}",
        english: "treasure・valuable",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "返{へん}却{きゃく}[する]",
        english: "return・to return",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "トランプ",
        english: "playing cards",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "発{はっ}射{しゃ}［する］",
        english: "firing・to fire (a gun)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "職{しょく}業{ぎょう}",
        english: "occupation・profession",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "泥{どろ}棒{ぼう}",
        english: "thief・burglar",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "盗{ぬす}む",
        english: "to steal",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "不{ふ}思{し}議{ぎ}な",
        english: "mysterious・inexplicable",
        type: MiniStoryWordType.ADJECTIVE_NA,
        secondary: true,
      },
      {
        kanji: "銃{じゅう}",
        english: "gun",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "しばしば",
        english: "often・frequently",
        type: MiniStoryWordType.ADVERB,
        secondary: true,
      }
    ],
    translation: `In fictional works of entertainment, private investigators are popular characters, but thieves can also be popular. Thief characters steal diamonds and other riches, but they're often not interested in money and sometimes even return what they steal. It's odd when you think about it, but they often fight by firing playing cards from guns.`,
    audio: "T102.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 89,
  },
  "103": {
    id: "103",
    rubyStory: [
      {
        character: "",
        dialogue: "<炎{ほのお}>を出したり、<翼{つばさ}>を[生{は}やしたり]、漫画・アニメには[超{ちょう}能{のう}力{りょく}]がよく登{とう}場{じょう}する。その不{ふ}思{し}議{ぎ}な<パワー>を手に入{い}れる方法も様{さま}々{ざま}だ。有名な漫画では、<奇{き}妙{みょう}な>形の<実{み}>を食べることで、力を手に入{い}れる。<しかも>、その実{み}の<図{ず}鑑{かん}>があり、食べる前からどんな力が手に入{はい}るのかわかるのだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "炎{ほのお}",
        english: "fire・flame",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "翼{つばさ}",
        english: "wing",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "パワー",
        english: "power",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "奇{き}妙{みょう}な",
        english: "strange・odd",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "実{み}",
        english: "fruit・nut",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "しかも",
        english: "moreover・furthermore・on top of that",
        type: MiniStoryWordType.CONJUNCTION,
        important: true,
      },
      {
        kanji: "図{ず}鑑{かん}",
        english: "illustrated reference book・encyclopedia",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "生{は}やす",
        english: "to grow (e.g. wings)",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "超{ちょう}能{のう}力{りょく}",
        english: "supernatural power・superpower",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `The ability to produce flames, grow wings, and other supernatural powers often appear in manga comics and anime. There are also various ways to obtain these mysterious powers. In one well-known manga, powers are obtained by eating strangely shaped fruit. And what's more, there's even an illustrated book of these fruit, so you know what sort of power you'll get before you eat it.`,
    audio: "T103.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 90,
  },
  "104": {
    id: "104",
    rubyStory: [
      {
        character: "A",
        dialogue: "ホラー映画って苦手だな。<幽{ゆう}霊{れい}>に<恐{きょう}怖{ふ}>は感じないんだけど、大きな音で<驚{おどろ}かされる>のが嫌{きら}いなんだ。",
      },
      {
        character: "B",
        dialogue: "私は[推{すい}理{り}]ものとかでも、<死{し}体{たい}>が<映{うつ}って>いるとだめですね。<気{き}味{み}が悪{わる}い>から。",
      }
    ],
    rubyWords: [
      {
        kanji: "幽{ゆう}霊{れい}",
        english: "ghost",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "恐{きょう}怖{ふ}［する］",
        english: "fear・to be afraid of",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "驚{おどろ}かす",
        english: "to surprise・to frighten",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "死{し}体{たい}",
        english: "corpse",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "映{うつ}る",
        english: "to be reflected・to appear on a screen",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "映{うつ}す",
        english: "to reflect・to display",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "気{き}味{み}が悪{わる}い",
        english: "gross・disgusting・creepy・uneasy",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "推{すい}理{り}",
        english: "inference・deduction・reasoning ( process of thinking logically based on clues or evidence to reach a conclusion )",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: I don't like horror movies. I'm not afraid of ghosts, but I don't like being startled by loud noises.\nB: I don't like to see dead bodies shown in thriller movies . It gives me a creepy feeling.`,
    audio: "T104.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 90,
  },
  "105": {
    id: "105",
    rubyStory: [
      {
        character: "",
        dialogue: "ある人気漫画は36<巻{かん}>、<ストーリー>の[途{と}中{ちゅう}]で止まってしまっている。しかし、もうすぐ<再{さい}開{かい}する>と<うわさされて>いる。",
      },
    ],
    rubyWords: [
      {
        kanji: "～巻{かん}",
        english: "~th volume (of a manga series)・~installments",
        type: MiniStoryWordType.SUFFIX,
        important: true,
      },
      {
        kanji: "ストーリー",
        english: "Story",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "再{さい}開{かい}［する］",
        english: "restart・to resume (a series)・to restart",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "うわさ［する］",
        english: "rumor・to spread rumors・to hear rumors",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "途{と}中{ちゅう}",
        english: "in the middle of・during",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A certain popular manga has stopped at 36 volumes, and it's only partway through the story. However,its rumored that it wil resume soon.`,
    audio: "T105.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 91,
  },
  "106": {
    id: "106",
    rubyStory: [
      {
        character: "",
        dialogue: "RPG、ロールプレイングゲームが日本で発{はつ}売{ばい}されたとき、大{だい}<ブーム>が起こった。多くの若者が[剣{けん}]と<魔{ま}法{ほう}>の世界での<冒{ぼう}険{けん}>に<熱{ねっ}中{ちゅう}>した。<当{とう}時{じ}>は<徹{てつ}夜{や}して><プレイした>人も多かった。",
      },
    ],
    rubyWords: [
      {
        kanji: "ブーム",
        english: "boom",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "魔{ま}法{ほう}",
        english: "magic",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "冒{ぼう}険{けん}［する］",
        english: "adventure・to go on an adventure",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "熱{ねっ}中{ちゅう}［する］",
        english: "enthusiasm・to be absorbed in",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "当{とう}時{じ}",
        english: "at that time",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB],
        important: true,
      },
      {
        kanji: "徹{てつ}夜{や}［する］",
        english: "all-nighter・to stay up all night",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "プレイ［する］",
        english: "play・to play (a game)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
      },
      {
        kanji: "剣{けん}",
        english: "sword",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `When role-playing games, or RPGs, were first released in Japan, there was a huge RPG boom. Many young people were absorbed in adventures in sword and magical worlds. At that time, many people stayed up all night to play.`,
    audio: "T106.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 92,
  },
  "107": {
    id: "107",
    rubyStory: [
      {
        character: "",
        dialogue: "このゲームの<請{せい}求{きゅう}晝{しょ}>は、<あらゆる><端{たん}末{まつ}>から見ることができます。「<発{はっ}行{こう}する>」のボタンを押すと、PDFがダウンロードでき、印{いん}刷{さつ}することもできます。",
      },
    ],
    rubyWords: [
      {
        kanji: "請{せい}求{きゅう}晝{しょ}",
        english: "billing statement・invoice",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "請{せい}求{きゅう}［する］",
        english: "invoice・to request payment",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "あらゆる",
        english: "Any kind of・all sorts of",
        type: MiniStoryWordType.OTHER,
        important: true,
      },
      {
        kanji: "端{たん}末{まつ}",
        english: "device・terminal",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "発{はっ}行{こう}［する］",
        english: "issuence・to publish・to release",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
    ],
    translation: `The billing statement for this game can be viewed from any kind of device. You can also download a PDF file and print it out by clicking the “Issue" button.`,
    audio: "T107.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 92,
  },
  "108": {
    id: "108",
    rubyStory: [
      {
        character: "A",
        dialogue: "<シリーズ>最新作、3月に<上{じょう}映{えい}>だってね。今から[超{ちょう}楽{たの}しみ]。絶対<前{まえ}売{う}り>[券{けん}]買って、[初{しょ}日{にち}]に見る。",
      },
      {
        character: "B",
        dialogue: "どうせ上{じょう}映{えい}後{ご}1年したらテレビで見られるんだから、急{いそ}いで見る必要なくない？",
      },
      {
        character: "A",
        dialogue: "あの大きい<スクリーン>で見るのがいいんじゃない！それに、<CM>が入るのが我慢できないんだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "シリーズ",
        english: "series",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "上{じょう}映{えい}［する］",
        english: "release・projection・to release・project (a movie)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "前{まえ}売{う}り［する］",
        english: "pre-sale・to sell in advance",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "スクリーン",
        english: "screen",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "СМ・コマーシャル",
        english: "commercial",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "超{ちょう}",
        english: "super",
        type: MiniStoryWordType.OTHER,
        secondary: true,
      },
      {
        kanji: "超{ちょう}楽{たの}しみ",
        english: "super excited",
        type: MiniStoryWordType.OTHER,
        secondary: true,
      },
      {
        kanji: "券{けん}",
        english: "ticket",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "初{しょ}日{にち}",
        english: "first day",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: I heard that the latest movie in the series will screen in March. I'm really looking forward to it. I'll definitely buy a ticket in advance and see it on the first day.\nB: It'll be on TV a year after it screens anyway, so there's no rush to see it.\nA: It's better to see it on the big screen! Besides, I canit stand commercials.`,
    audio: "T108.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 93,
  },
  "109": {
    id: "109",
    rubyStory: [
      {
        character: "A",
        dialogue: "私の好きな漫画家のSNSが、「<公{こう}式{しき}>」って書いてあるのに、本{ほん}人{にん}じゃなかったんだー。<だまされた>気分。",
      },
      {
        character: "B",
        dialogue: "それは仕方ないね。漫画家がSNSやるの大変らしいよ。「私の好きなキャラクターを[活{かつ}躍{やく}]させてください」って<リクエスト>する人もいるし。",
      },
      {
        character: "A",
        dialogue: "えー。<ずうずうしい>人がいるんだね。",
      },
    ],
    rubyWords: [
      {
        kanji: "公{こう}式{しき}",
        english: "official",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "だます",
        english: "to deceive・to trick・to cheat",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "リクエスト［する］",
        english: "request・to request",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
      },
      {
        kanji: "ずうずうしい",
        english: "shameless・brazen",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "活{かつ}躍{やく}［する］",
        english: "to be active・to play an active role",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        secondary: true,
      },
    ],
    translation: `A: My favorite manga cartoonist's social media site says "Official" but it's not actually him! I feel cheated.\nB: But what can you do? It's not easy for cartoonists to be on social media. People make requests to put in their own favorite characters.\nA: Really? Some people are shameless.`,
    audio: "T109.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 94,
  },
  "110": {
    id: "110",
    rubyStory: [
      {
        character: "",
        dialogue: "昔は、<終{お}えた>ゲームは<中{ちゅう}古{こ}>ゲーム店{てん}に売ることが多かった。中{ちゅう}古{こ}ゲームには、前の持ち[主{ぬし}]の名前が書かれていたり、<シール>が[貼{は}られていたり]することもあった。",
      },
    ],
    rubyWords: [
      {
        kanji: "終{お}える",
        english: "to finish・to complete",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "中{ちゅう}古{こ}",
        english: "used・second-hand",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "シール",
        english: "sticker",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "主{ぬし}",
        english: "owner",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "貼{は}る",
        english: "to stick・to paste",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
    ],
    translation: `In the past, after finishing a video game, people often sold them to used game stores. Used games sometimes had the name of the previous owner written on them or were covered in stickers.`,
    audio: "T110.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 94,
  },
  "111": {
    id: "111",
    rubyStory: [
      {
        character: "A",
        dialogue: "うわー、もう死にそう。ここ難しすぎるよー。",
      },
      {
        character: "B",
        dialogue: "今見えた<泉{いずみ}>に入ってみたら？回{かい}復{ふく}するんじゃない？",
      },
      {
        character: "A",
        dialogue: "え、本当に回復した！<ヒント>は<一{いっ}切{さい}>なかったのに、どうして分かったの？",
      },
      {
        character: "B",
        dialogue: "こういうゲームは<一{ひと}通{とお}り>プレイしているからね。",
      },
      {
        character: "A",
        dialogue: "<さすが>だね。",
      },
    ],
    rubyWords: [
      {
        kanji: "泉{いずみ}",
        english: "spring・fountain",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "ヒント",
        english: "hint",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "一{いっ}切{さい}",
        english: "at all・absolutely",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "一{ひと}通{とお}り",
        english: "Generally speaking・usually",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "さすが",
        english: "As expected・Just like (someone)",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
    ],
    translation: `A: Whoa, I'm about to die. It's too difficult here.\nB: Why not try entering the fountain we just saw? You should recover.\nA: Hey, I did recover! There were no hints at all. How did you figure it out?\nB: I play a lot of these games, and they're usually quite similar.\nA: I knew it. That's just like you.`,
    audio: "T111.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 95,
  },
  "112": {
    id: "112",
    rubyStory: [
      {
        character: "A",
        dialogue: "ゲームのやりすぎかなあ。これ以上、<視{し}力{りょく}>が悪くなったらメガネかコンタクトだって医{い}者{しゃ}に<警{けい}告{こく}された>。どっちが<もてる>と思う？",
      },
      {
        character: "B",
        dialogue: "どっちにしても、もてないと思う。",
      },
    ],
    rubyWords: [
      {
        kanji: "視{し}力{りょく}",
        english: "vision・eyesight",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "警{けい}告{こく}［する］",
        english: "warning・to warn",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "もてる",
        english: "be attractive・to be popular (especially with the opposite sex)",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE,
        important: true,
      },
    ],
    translation: `A: I think I play too many games. My doctor warned me that if my eyesight gets any worse, I'll have to get glasses or contact lenses. Which do you think would be more attractive?\nB: Either way, I don't think you'll be attractive.`,
    audio: "T112.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 96,
  },
  "113": {
    id: "113",
    rubyStory: [
      {
        character: "A",
        dialogue: "今度の映画の<ゲスト>キャラクターの[役{やく}者{しゃ}]が<公{こう}表{ひょう}された>けど、<お笑{わら}い芸{げい}人{にん}>なんだって。ちゃんとプロの[声{せい}優{ゆう}]を使ってほしいよ。",
      },
      {
        character: "B",
        dialogue: "きっと、事{じ}務{む}所{しょ}が<推{すい}薦{せん}した>んだろうね。",
      },
    ],
    rubyWords: [
      {
        kanji: "ゲスト",
        english: "guest",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "公{こう}表{ひょう}［する］",
        english: "announcement・to announce",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "(お笑{わら}い）芸{げい}人{にん}",
        english: "comedian",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "推{すい}薦{せん}［する］",
        english: "recommendation・to recommend",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "推{すい}薦{せん}状{じょう}",
        english: "recommendation letter",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "役{やく}者{しゃ}",
        english: "actor",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "声{せい}優{ゆう}",
        english: "voice actor",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: They've announced who's playing the guest character in the upcoming movie, but he's a comedian. I wish they get a professional voice actor.\nB: Well, I'm sure the agency recommended him.`,
    audio: "T113.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 96,
  },
  "114": {
    id: "114",
    rubyStory: [
      {
        character: "",
        dialogue: "「ガチャ」と[呼{よ}ばれる]、<抽{ちゅう}選{せん}>でキャラクターがあたるシステムは、今は[大{たい}半{はん}]のスマホゲームに<広{ひろ}まって>いる。お金がかかるのでもうやめよう、と思っても「あと1回で当たるかも」と<悪{あく}魔{ま}>が<ささやいて>くる。",
      },
    ],
    rubyWords: [
      {
        kanji: "抽{ちゅう}選{せん}［する］",
        english: "lottery・to draw at random",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "広{ひろ}まる",
        english: "to spread・to become widespread",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "広{ひろ}める",
        english: "to spread・to make widespread",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "悪{あく}魔{ま}",
        english: "devil・demon",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "ささやく",
        english: "to whisper",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "呼{よ}ぶ",
        english: "to call・to summon",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        secondary: true,
      },
      {
        kanji: "大{たい}半{はん}",
        english: "most・majority",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `The gacha system, in which players are awarded characters by random draw, has now spread widely to the majority of smartphone games. Even if you decide to stop playing because it costs money, the devil will still whisper in your ear, "Just one more time— you might win..."`,
    audio: "T114.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 97,
  },
  "115": {
    id: "115",
    rubyStory: [
      {
        character: "A",
        dialogue: "今日漫画に「アメノ」なんとかっていう名前の[剣{けん}]が出てきて、変な名前だなって思ったよ。",
      },
      {
        character: "B",
        dialogue: "「アメノハバキリ」じゃない？日本の<神{しん}話{わ}>に出てくる剣{けん}だよ。",
      },
      {
        character: "A",
        dialogue: "え！本当にあったの？",
      },
      {
        character: "B",
        dialogue: "神{しん}話{わ}だよ。でも、<架{か}空{くう}>の剣{けん}に、<オリジナル>の名前をつけても覚えづらいでしょ。だから、剣{けん}でもモンスターでも、神{しん}話{わ}から名前を借{か}りてくることは多いよ。漫画やアニメを見ていると、神{しん}話{わ}にも詳しくなる。",
      },
      {
        character: "A",
        dialogue: "へえ。そこまでくると、<教{きょう}養{よう}>だね。",
      },
    ],
    rubyWords: [
      {
        kanji: "神{しん}話{わ}",
        english: "myth・mythology",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "架{か}空{くう}",
        english: "fictitious・imaginary・fantastical",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "オリジナル",
        english: "original",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "教{きょう}養{よう}",
        english: "education・training・refinement",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "剣{けん}",
        english: "sword",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `A: In the manga I read today, there was a sword named "Ameno" something, and I thought it was such a strange name.\nB: Isn't that Ame-no-Habakiri? It's a sword from Japanese mythology.\nA: What? Did it really exist?\nB: It's a myth. But it's harder to remember a fictional sword with an original name, isn't it? That's why swords and monsters often borrow names from mythology. If you watch manga and anime, you become more familiar with mythology.\nA: Wow. I suppose if you take it far enough, you can really gain an education.`,
    audio: "T115.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 98,
  },
  "116": {
    id: "116",
    rubyStory: [
      {
        character: "",
        dialogue: "<アイドル>の仕事はとても大変だ。スケジュールが<ハードな>上、<激{はげ}しい>動きのダンスをしながら、ステージでは[常{つね}に]<ほほ笑{え}んで>いなければならない。そして、休日にデートしているところを見られると、ニュースの<見{み}出{だ}し>に名前が[載{の}り]、ファンには「<裏{うら}切{ぎ}られた>」と言われる。しかし、大変だからこそ、<プライド>を持って仕事をしているのである。",
      },
    ],
    rubyWords: [
      {
        kanji: "アイドル",
        english: "idol",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "ハードな",
        english: "tough・demanding",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "激{はげ}しい",
        english: "strenuous・intense",
        type: MiniStoryWordType.ADJECTIVE_I,
        important: true,
      },
      {
        kanji: "ほほ笑{え}む",
        english: "to smile",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        important: true,
      },
      {
        kanji: "見{み}出{だ}し",
        english: "headline",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "裏{うら}切{ぎ}る",
        english: "to betray",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "プライド",
        english: "Pride",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "常{つね}に",
        english: "always",
        type: MiniStoryWordType.ADVERB,
        secondary: true,
      },
      {
        kanji: "載{の}る",
        english: "to be published・to be printed・to be posted",
        type: MiniStoryWordType.GODAN_INTRANSITIVE,
        secondary: true,
      },
    ],
    translation: `Working as a musical "idol" performer is not easy. The schedule is hard, and you have to constantly smile on stage while performing strenuous dance moves. And if you're ever spotted going on a date on your day off, your name will be in the headlines and fans will say that you've betrayed them. But precisely because it's so hard, they take pride in their work.`,
    audio: "T116.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 99,
  },
  "117": {
    id: "117",
    rubyStory: [
      {
        character: "",
        dialogue: "<いわゆる>オープンワールドと呼ばれるゲームは、<広{こう}大{だい}な>世界を自由に[移{い}動{どう}]できるゲームのことだ。プレイヤーは自由にゲームを<進{すす}める>ことができる。もちろん、世界のあちこちに敵{てき}が<存{そん}在{ざい}し>、それに<勝{しょう}利{り}する>ことが目的である。ストーリーが<進{しん}行{こう}する>にしたがって、最初は何も持っていなかった主人公がどんどん<重{じゅう}><装{そう}備{び}>になっていくことも、[魅{み}力{りょく}]の一つだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "いわゆる",
        english: "so-called",
        type: MiniStoryWordType.ADVERB,
        important: true,
      },
      {
        kanji: "広{こう}大{だい}な",
        english: "vast・huge",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "進{すす}める",
        english: "to proceed・move forward",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "存{そん}在{ざい}［する］",
        english: "existence・to exist",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "勝{しょう}利{り}［する］",
        english: "triumph over・to win・to defeat",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        important: true,
      },
      {
        kanji: "進{しん}行{こう}［する］",
        english: "progress・to progress",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "重{じゅう}～",
        english: "Heavily~",
        type: MiniStoryWordType.PREFIX,
        important: true,
      },
      {
        kanji: "装{そう}備{び}［する］",
        english: "equipment・to equip",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "移{い}動{どう}[する]",
        english: "movement・to move",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
      {
        kanji: "魅{み}力{りょく}",
        english: "charm・attraction",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
    ],
    translation: `So-called "open world" games are games that allow players to move freely through vast worlds. The player can proceed through the game however they like. Of course, enemies exist everywhere in the world, and the goal is to defeat them. As the story progresses, the main character, who initially had nothing, becomes more and more heavily equipped, which is one of the attractions of the game.`,
    audio: "T117.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 100,
  },
  "118": {
    id: "118",
    rubyStory: [
      {
        character: "A",
        dialogue: "やっぱり古い3[部{ぶ}作{さく}]は見た方{ほう}がいいかなあ？",
      },
      {
        character: "B",
        dialogue: "いろんな映画に影響を<及{およ}ぼした>名作だからね。映画[史{し}]に<永{えい}遠{えん}に>残{の}るだろうね。[帝{てい}国{こく}]に[支{し}配{はい}されて]いた[民{みん}族{ぞく}]が<解{かい}放{ほう}される>シーンは、当時の<思{し}想{そう}>なども[反{はん}映{えい}されて]いると思うよ。",
      },
      {
        character: "A",
        dialogue: "でも古い3部{ぶ}作{さく}は、ストーリーの最初じゃないんだよね。",
      },
      {
        character: "B",
        dialogue: "ストーリーの<順{じゅん}序{じょ}>は異なるけど、[映{えい}像{ぞう}]としては古いものから新しいものを見た方{ほう}が技術の[進{しん}歩{ぽ}]を感じられるよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "及{およ}ぼす",
        english: "to extend・to reach",
        type: MiniStoryWordType.GODAN_TRANSITIVE,
        important: true,
      },
      {
        kanji: "永{えい}遠{えん}な",
        english: "eternal・long-lasting・forever",
        type: MiniStoryWordType.ADJECTIVE_NA,
        important: true,
      },
      {
        kanji: "解{かい}放{ほう}［する］",
        english: "liberation・to free",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        important: true,
      },
      {
        kanji: "思{し}想{そう}",
        english: "thoughts・ideas・thinking",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "順{じゅん}序{じょ}",
        english: "order・sequence",
        type: MiniStoryWordType.NOUN,
        important: true,
      },
      {
        kanji: "部{ぶ}作{さく}",
        english: "part of a series・division",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "史{し}",
        english: "history",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "帝{てい}国{こく}",
        english: "imperial nation・empire",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "支{し}配{はい}[する]",
        english: "control・to control・to rule",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
      {
        kanji: "民{みん}族{ぞく}",
        english: "people・ethnic group・ethnicity",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "反{はん}映{えい}[する]",
        english: "reflection・to reflect",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE],
        secondary: true,
      },
      {
        kanji: "映{えい}像{ぞう}",
        english: "image・picture",
        type: MiniStoryWordType.NOUN,
        secondary: true,
      },
      {
        kanji: "進{しん}歩{ぽ}[する]",
        english: "progress・to advance",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE],
        secondary: true,
      },
    ],
    translation: `A: So should I watch the original trilogy?\nB: They're masterpieces whose influence has extended to lots of films. I think they'll go down forever in the history of cinema. The scenes showing the people once ruled by the Empire become liberated reflect the thinking of the time.\nA: But the original trilogy isn't the beginning of the story.\nB: The order of the story is different, but as for the images, you get more of a sense of how the technology progressed by watching the original trillogy first, then the new ones.`,
    audio: "T118.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 101,
  },
};