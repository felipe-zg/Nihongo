const MiniStoryTopics = {
  FOOD: '食事',
  HOUSE_WORK: '家事',
  SHOPPING: "買い物",
  FASHION: "ファッション",
  TECHNOLOGY: "テクノロジー",
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
  "8": {
    id: "8",
    rubyStory: [
      {
        character: "",
        dialogue: "一人暮らしをしていると、栄{えい}養{よう}が<偏{かたよ}り>がちだ。何か野菜を食べなければと思うが、今は野菜が高くて<手{て}に入{い}れ>にくい。子どものときは<好{す}き嫌{きら}い>が多く、母の作る料理が嫌{いや}だと思ったこともあったが、今となっては栄{えい}養{よう}たっぷりの母の手料理が<恋{こい}しい>。",
      },
    ],
    rubyWords: [
      {
        kanji: "偏{かたよ}る",
        english: "To be uneven・biased",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "偏{かたよ}り",
        english: "Imbalance・Unevenness",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "手{て}に入{い}れる",
        english: "To obtain・get・acquire",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "手{て}に入{はい}る",
        english: "To be obtainable・To be available・To come into one’s possession",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "好{す}き嫌{きら}い［する］",
        english: "likes and dislikes・to be picky",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "恋{こい}しい",
        english: "To miss someone/something・To long for",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "恋［する］",
        english: "love・to fall in love",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
    ],
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
        dialogue: "冷蔵庫の中が<生{なま}臭{ぐさ}い>と思ったら、きゅうりが腐って白い<液{えき}体{たい}>が出ていた。普段、<賞{しょう}味{み}期{き}限{げん}><切{き}れ>のお菓子などは気にせず食べているが、これはさすがにやめておこう。せっかく母が<農{のう}薬{やく}>を使わずに育てたからと送ってくれたのに、<粗{そ}末{まつ}に>してしまって申し訳ない。",
      },
    ],
    rubyWords: [
      {
        kanji: "生{なま}臭{ぐさ}い",
        english: "Fishy・Smelly・Stinky",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "液{えき}体{たい}",
        english: "Liquid",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "賞{しょう}味{み}期{き}限{げん}",
        english: "Best before・Expiration date",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "消{しょう}費{ひ}期{き}限{げん}",
        english: "Use-by date・Expiration date",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "〜切{き}れ",
        english: "~ Used up・Expired・Past",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "農{のう}薬{やく}",
        english: "Pesticide",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "粗{そ}末{まつ}な",
        english: "Careless・Negligent",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
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
        dialogue: "昨日、久しぶりに友だちとスイーツ<ビュッフェ>に行った。壁{かべ}<一{いち}面{めん}>がパステルカラーで、メニューには、カラフルなケーキや、<綿{わた}>あめがのったドリンクがあったりして、とてもかわいかった。",
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
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "綿{わた}",
        english: "Cotton",
        type: MiniStoryWordType.NOUN
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
        dialogue: "感{かん}染{せん}症{しょう}の流{りゅう}行{こう}は、社会にさまざまな影響を与えている。例えば、外{がい}出{しゅつ}が制{せい}限{げん}されたため、旅行関係の<支{し}出{しゅつ}>は大きく減{げん}少{しょう}した。また、感{かん}染{せん}症{しょう}予{よ}防{ぼう}のマスク<着{ちゃく}用{よう}>により、<一{いっ}気{き}に><万{まん}引{び}き>が増えた店もあるようだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "支{し}出{しゅつ}［する］",
        english: "Expenditure・To spend",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "着{ちゃく}用{よう}［する］",
        english: "To wear・To put on (clothes, accessories)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "一{いっ}気{き}に",
        english: "All at once・In one go・Suddenly",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "万{まん}引{び}き［する］",
        english: "Shoplifting・To shoplift",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
    ],
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
        dialogue: "こないだ会社の人たちと飲みに行ったとき、全員分僕が払っておいたんだよ。それで昨日、どうやって<精{せい}算{さん}しよう>かと思って先輩に相談してみたら「1円まできれいに分{わ}けてくれ」って言われちゃって・・・。",
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
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "けちな",
        english: "stingy・cheap・Tight (with money)",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "高{こう}価{か}な",
        english: "expensive・high-priced",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "賞{しょう}与{よ}",
        english: "Bonus (salary)",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: The other night, I went out for drinks with some people from work and I paid for everyone. Yesterday, I asked a senior colleague for advice on how to settle the bill, and he told me to split it evenly, right down to the last yen...\nB: Wow, that's so stingy.\nA: And he was the only one drinking lots of expensive alcohol... Damn, I just got my bonus last month and finally saved up a little money.`,
    audio: "T37.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 42,
  },
  "38": {
    id: "38",
    rubyStory: [
      {
        character: "A",
        dialogue: "通{つう}販{はん}でコンロ買ったんだけど、<包{ほう}装{そう}>を<ほどいて>みたら、都{と}市{し}ガス用{よう}だったの。うちでは使えないから<返{へん}品{ぴん}しよう>と思ったんだけど、箱{はこ}に「<不{ふ}良{りょう}品{ひん}>を除{のぞ}いて、開{かい}封{ふう}済{ず}みの商品の返品には、送{そう}料{りょう}と<手{て}数{すう}料{りょう}>を<頂{ちょう}戴{だい}します>」って書いてあったの。",
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
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "ほどく",
        english: "To unwrap・To undo・To unfasten・To take off",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "ほどける",
        english: "To come undone・To loosen",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "返{へん}品{ぴん}［する］",
        english: "Return (goods)・To return (goods)",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "不{ふ}良{りょう}品{ひん}",
        english: "Defective goods",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "手{て}数{すう}料{りょう}",
        english: "Handling fee・Service charge",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "頂{ちょう}戴{だい}する",
        english: "To request・To require",
        type: MiniStoryWordType.IRREGULAR_TRANSITIVE
      },
      {
        kanji: "商売［する］",
        english: "Business・To do business",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
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
};