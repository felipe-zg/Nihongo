export const MiniStoryTopics = {
  FOOD: '食事',
  HOUSE_WORK: '家事',
  SHOPPING: "買い物",
  FASHION: "ファッション",
  SCHOOL: "学校",
  WORK: "仕事",
  TECHNOLOGY: "テクノロジー",
  LIFE: "人生",
  TRENDS: "流行",
  SOCIAL_LIFE: "人づきあい",
  SPORTS: "スポーツ",
  ANIMALS: "動物",
  CITIES: "市",
  WEATHER: "天気",
} as const;

// type MiniStoryTopic = typeof MiniStoryTopics[keyof typeof MiniStoryTopics];

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

export const MINI_STORY_N3: Record<string, MiniStory> = {
  "1": {
    id: "1",
    rubyStory: [
      {
        character: "A",
        dialogue: "<朝{ちょう}食{しょく}>に<フルーツ>を食べるといいって聞いたんだけど、<皮{かわ}>を<むく>のが面{めん}倒{どう}くさいんだよね。",
      },
      {
        character: "B",
        dialogue: "じゃあ<缶{かん}詰{づめ}>でいいじゃない。",
      },
      {
        character: "A",
        dialogue: "でも、<新{しん}鮮{せん}な>方{ほう}がよくない？",
      },
    ],
    rubyWords: [
      {
        kanji: "朝{ちょう}食{しょく}",
        english: "breakfast"
      },
      {
        kanji: "昼{ちゅう}食{しょく}",
        english: "lunch"
      },
      {
        kanji: "夕{ゆう}食{しょく}",
        english: "dinner"
      },
      {
        kanji: "フルーツ",
        english: "fruit"
      },
      {
        kanji: "皮{かわ}",
        english: "peel/skin"
      },
      {
        kanji: "むく",
        english: "to peel"
      },
      {
        kanji: "缶{かん}詰{づめ}",
        english: "canned food"
      },
      {
        kanji: "新{しん}鮮{せん}な",
        english: "fresh"
      },
    ],
    translation: `A: I heard that you should eat fruit for breakfast, but peeling it is a hassle.\nB: Then canned food would be fine, wouldn't it?\nA: But isn't fresh fruit better?`,
    audio: "T1.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 14,
  },
  "2": {
    id: "2",
    rubyStory: [
      {
        character: "",
        dialogue: "最近の<冷{れい}凍{とう}食{しょく}品{ひん}>はとてもおいしい。<手{て}作{づく}り>の料理と<区{く}別{べつ}できない>それに、<トレー>を分ければ、3<人{にん}分{ぶん}>とか1人分のように必要な<量{りょう}>だけを使うことができる。",
      },
    ],
    rubyWords: [
      {
        kanji: "冷{れい}凍{とう}食{しょく}品{ひん}",
        english: "frozen food"
      },
      {
        kanji: "冷{れい}凍{とう}［する］",
        english: "to freeze"
      },
      {
        kanji: "手{て}作{づく}り",
        english: "handmade"
      },
      {
        kanji: "区{く}別{べつ}する",
        english: "to distinguish"
      },
      {
        kanji: "〜人{にん}分{ぶん}",
        english: "for 〜 person/people"
      },
      {
        kanji: "量{りょう}",
        english: "amount"
      },
    ],
    translation: `Frozen foods these days are very delicious. They are indistinguishable from homemade dishes. Besides, if you divide the tray, you can use only the amount you need, such as for enough for three people or just one person.`,
    audio: "T2.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 14,
  },
  "3": {
    id: "3",
    rubyStory: [
      {
        character: "A",
        dialogue: "あのう、今日の<日{ひ}替{が}り<定{てい}食{しょく}>って何ですか。",
      },
      {
        character: "B",
        dialogue: "<本日>は、<エビ><フライ>と<おかず>が1つ、あとはご飯{はん}と<みそ汁{しる}>です。",
      },
    ],
    rubyWords: [
      {
        kanji: "日{ひ}替{が}り",
        english: "daily special"
      },
      {
        kanji: "定{てい}食{しょく}",
        english: "set meal"
      },
      {
        kanji: "本日",
        english: "today"
      },
      {
        kanji: "エビ",
        english: "shrimp"
      },
      {
        kanji: "フライ",
        english: "fried/fry"
      },
      {
        kanji: "おかず",
        english: "side dish"
      },
      {
        kanji: "みそ",
        english: "miso"
      },
      {
        kanji: "汁{しる}",
        english: "soup"
      },
    ],
    translation: `A:Um, what's in the daily set meal?\nB: Today, we have fried shrimp and one side dish, and also rice and miso soup.`,
    audio: "T3.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 15,
  },
  "4": {
    id: "4",
    rubyStory: [
      {
        character: "A",
        dialogue: "<お待たせしました>。和{わ}<風{ふう}>ハンバーグでございます。<ソース>をかけて、お<召{め}し上がり>ください。",
      },
      {
        character: "B",
        dialogue: "あ、どうぞ<お先{さき}に>。<ご遠{えん}慮{りょ}なく>。",
      },
      {
        character: "C",
        dialogue: "じゃあ、いただきます。",
      },
    ],
    rubyWords: [
      {
        kanji: "お待たせしました",
        english: "Thank you for waiting."
      },
      {
        kanji: " お待ちどおさま",
        english: "I'm sorry to have kept you waiting."
      },
      {
        kanji: "〜風{ふう}",
        english: "style"
      },
      {
        kanji: "ソース",
        english: "sauce"
      },
      {
        kanji: "召{め}し上がる",
        english: "to eat, drink (honorific)"
      },
      {
        kanji: "（お）先{さき}に",
        english: "After you"
      },
      {
        kanji: "（ご）遠{えん}慮{りょ}なく",
        english: "Without hesitation, No need to hesitate"
      },
    ],
    translation: `A: Thank you for your patience. Here is your Japanese-style hamburger steak. Please enjoy it with sauce.\nB: Oh, please go ahead. No need to hesitate.\nC: Then let's eat.`,
    audio: "T4.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 16,
  },
  "5": {
    id: "5",
    rubyStory: [
      {
        character: "",
        dialogue: "<焼{やき}肉{にく}>の<バイキング>は<セルフサービス>ではなく、テーブルで注文するスタイルが多い。肉{にく}以{い}外{がい}にも、<ライス>、<スープ>、<デザート>などが注文できる。もちろん、<残{のこ}して>はいけない。",
      },
    ],
    rubyWords: [
      {
        kanji: "焼{やき}肉{にく}",
        english: "grilled meat"
      },
      {
        kanji: "バイキング",
        english: "buffet"
      },
      {
        kanji: "セルフサービス",
        english: "self-service"
      },
      {
        kanji: "ライス",
        english: "rice"
      },
      {
        kanji: "スープ",
        english: "soup"
      },
      {
        kanji: "デザート",
        english: "dessert"
      },
      {
        kanji: "残{のこ}す",
        english: "to leave (behind), to waste"
      },
    ],
    translation: `Yakiniku buffet is not self-service, but is often ordered at the table. Besides meat, you can order rice, soup, dessert and more. Of course, you must not leave any leftovers.`,
    audio: "T5.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 16,
  },
  "6": {
    id: "6",
    rubyStory: [
      {
        character: "A",
        dialogue: " あ、その肉、早く<ひっくり返{かえ}して>。。これもこれも。",
      },
      {
        character: "B",
        dialogue: "うわ、肉が<燃{も}えた>！どうしよう！",
      },
      {
        character: "A",
        dialogue: "あー、そういうときは、この<氷{こおり}>を網{あみ}に乗{の}せればいいんだ。網{あみ}が汚{よご}れちゃったね。<取{と}り替{か}えて>もらおう。",
      },
    ],
    rubyWords: [
      {
        kanji: "ひっくり返{かえ}す",
        english: "to turn over"
      },
      {
        kanji: "ひっくり返{かえ}る",
        english: "to be turned over"
      },
      {
        kanji: "燃{も}える",
        english: "to burn / be burned"
      },
      {
        kanji: "燃{も}やす",
        english: "to burn (transitive)"
      },
      {
        kanji: "氷{こおり}",
        english: "ice"
      },
      {
        kanji: "取{と}り替{か}える",
        english: "to replace"
      },
    ],
    translation: `A: Oh, that meat, hurry up and turn it over. This one and this one too.\nB: Wow, the meat burned! What should I do!\nA: Ah, in that case, just put this ice on the net. The net got dirty.Let's have it replaced.`,
    audio: "T6.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 17,
  },
  "7": {
    id: "7",
    rubyStory: [
      {
        character: "",
        dialogue: "この店のラーメンはとても味{あじ}が<濃{こ}く>、スープの<表{ひょう}面{めん}>には<油{あぶら}>が浮{う}いている。しかし、<のり>とご飯と一緒に食べるとうまい。",
      },
    ],
    rubyWords: [
      {
        kanji: "濃{こ}い",
        english: "thick, rich, strong (flavor)"
      },
      {
        kanji: "薄{うす}い",
        english: "thin, weak (flavor)"
      },
      {
        kanji: "表{ひょう}面{めん}",
        english: "surface"
      },
      {
        kanji: "油{あぶら}",
        english: "oil"
      },
      {
        kanji: "サラダ油{あぶら}",
        english: "salad oil"
      },
      {
        kanji: "のり",
        english: "seaweed"
      },
    ],
    translation: `The ramen in this shop has a very strong taste, and oil floats on the surface of the soup. However, it is good to eat it with seaweed and rice.`,
    audio: "T7.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 18,
  },
  "8": {
    id: "8",
    rubyStory: [
      {
        character: "",
        dialogue: "納{なっ}豆{とう}は<匂{にお}い>を<嫌{いや}がる>人{ひと}も多{おお}いですが、慣{な}れると<平{へい}気{き}に>なります。<ねばねばして>いますが、<腐{くさ}って>いるわけではないですよ",
      },
    ],
    rubyWords: [
      {
        kanji: "匂{にお}い／臭{にお}い",
        english: "smell / odor"
      },
      {
        kanji: "匂{にお}う／臭{にお}う",
        english: "to smell / to stink"
      },
      {
        kanji: "嫌{いや}がる",
        english: "to dislike"
      },
      {
        kanji: "平{へい}気{き}な",
        english: "calm, unconcerned"
      },
      {
        kanji: "ねばねば［する］",
        english: "to be sticky"
      },
      {
        kanji: "腐{くさ}る",
        english: "to rot"
      },
    ],
    translation: `Many people don't like the smell of natto, but once you get used to it, you'll be fine. It's sticky, but it's not rotten.`,
    audio: "T8.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 18,
  },
  "9": {
    id: "9",
    rubyStory: [
      {
        character: "",
        dialogue: "<ドレッシング>を作るのは簡単だ。オリーブ<オイル>と<酢{す}>をよく<混{ま}ぜて>、好{この}みで塩{しお}・<こしょう>を入{い}れる。これでサラダをおいしく食べられる。",
      },
    ],
    rubyWords: [
      {
        kanji: "ドレッシング",
        english: "dressing"
      },
      {
        kanji: "オイル",
        english: "oil"
      },
      {
        kanji: "酢{す}",
        english: "vinegar"
      },
      {
        kanji: "混{ま}ぜる",
        english: "to mix"
      },
      {
        kanji: "混{ま}ざる",
        english: "to be mixed"
      },
      {
        kanji: "こしょう",
        english: "pepper"
      },
    ],
    translation: `Making a dressing is easy. Mix olive oil and vinegar thoroughly and add salt and pepper as you like. Now you can eat the great-tasting salad.`,
    audio: "T9.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 19,
  },
  "10": {
    id: "10",
    rubyStory: [
      {
        character: "",
        dialogue: "<腹{はら}>が痛い。<レバー>を<生{なま}>で食べたのが原{げん}因{いん}だろうか。<それとも>貝{かい}だろうか。",
      },
    ],
    rubyWords: [
      {
        kanji: "腹{はら}",
        english: "stomach"
      },
      {
        kanji: "レバー",
        english: "liver"
      },
      {
        kanji: "生{なま}",
        english: "raw"
      },
      {
        kanji: "それとも",
        english: "or"
      },
      {
        kanji: "貝{かい}",
        english: "shellfish"
      },
    ],
    translation: `I have a stomachache. Is it because I ate some liver raw? Or was it the shellfish?`,
    audio: "T10.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 19,
  },
  "11": {
    id: "11",
    rubyStory: [
      {
        character: "A",
        dialogue: "最{さい}近{きん}暑{あつ}すぎて、<食{しょく}欲{よく}>がないんだよねえ。<さっぱりした>ものが食べたい。冷{つめ}たい<そば>にしようかな。",
      },
      {
        character: "B",
        dialogue: "あ、なんか<酸{す}っぱい>ものもいいらしいよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "食{しょく}欲{よく}",
        english: "appetite"
      },
      {
        kanji: "さっぱり［する］",
        english: "to be refreshing・refresh"
      },
      {
        kanji: "そば",
        english: "soba"
      },
      {
        kanji: "うどん",
        english: "udon"
      },
      {
        kanji: "酸{す}っぱい",
        english: "sour"
      },
    ],
    translation: `A: It's been too hot lately, and I have no appetite. I want to eat refreshing food. Maybe I should make some cold soba.\nB: Oh, something sour is good too, I hear.`,
    audio: "T11.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 20,
  },
  "12": {
    id: "12",
    rubyStory: [
      {
        character: "",
        dialogue: "<ワイン>は温{おん}度{ど}の<管{かん}理{り}>が重{じゅう}要{よう}だ。気{き}をつけないと、すぐに<ぬるく>なってしまう。ぬるいワインはおいしくない。また、ワインを飲{の}む前{まえ}にグラスを<回{まわ}す>と、香{かお}りがよくなる。",
      },
    ],
    rubyWords: [
      {
        kanji: "ワイン",
        english: "wine"
      },
      {
        kanji: "管{かん}理{り}［する］",
        english: "management ・ to manage"
      },
      {
        kanji: "ぬるい",
        english: "lukewarm"
      },
      {
        kanji: "回{まわ}す",
        english: "to turn"
      },
    ],
    translation: `With wine, it is important to control the temperature. If you're not careful, it will become lukewarm. Lukewarm wine is not delicious. Also, if you turn the glass before drinking wine, the aroma will improve.`,
    audio: "T12.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 20,
  },
  "13": {
    id: "13",
    rubyStory: [
      {
        character: "",
        dialogue: "<カップル>用{よう}の<ストロー>というものがある。<片{かた}方{ほう}>は普{ふ}通{つう}のストローだが、もう片{かた}方{ほう}は2つに分{わ}かれていて、2{ふ}人{たり}が同{どう}時{じ}に飲{の}むことができる。途{と}中{ちゅう}が<ハート>の形{かたち}になっていることもある。使{つか}ってみたいが、<人{ひと}前{まえ}>で使{つか}うのは恥{は}ずかしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "カップル",
        english: "couple"
      },
      {
        kanji: "ストロー",
        english: "straw"
      },
      {
        kanji: "片{かた}方{ほう}",
        english: "one side"
      },
      {
        kanji: "ハート",
        english: "heart"
      },
      {
        kanji: "人{ひと}前{まえ}",
        english: "public"
      },
    ],
    translation: `There is a straw made specifically for couples. On one end, it is a normal straw, but the other is divided into two straws, so two people can drink at the same time. The middle may be in the form of a heart. I want to try using it, but it would be embarrassing using it in front ofpeople.`,
    audio: "T13.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 21,
  },
  "14": {
    id: "14",
    rubyStory: [
      {
        character: "A",
        dialogue: "<忘{ぼう}年{ねん}会{かい}>の店{みせ}、「梅{うめ}の花{はな}」はどうかな？",
      },
      {
        character: "B",
        dialogue: "え、どこですか。",
      },
      {
        character: "A",
        dialogue: "知らない？駅の北{きた}<口{ぐち}>にある居{い}酒{ざか}屋{や}。",
      },
      {
        character: "B",
        dialogue: "分かりました。<押{お}さえます>。。<乾{かん}杯{ぱい}>のあいさつは部{ぶ}長{ちょう}にお願{ねが}いするつもりです。",
      },
    ],
    rubyWords: [
      {
        kanji: "忘{ぼう}年{ねん}会{かい}",
        english: "year-end party",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "新{しん}年{ねん}会{かい}",
        english: "New Year's party",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～口{ぐち}",
        english: "~entrance/exit",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "押さえる",
        english: "to make a reservation・hold down",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "乾{かん}杯{ぱい}［する］",
        english: "toast・to toast",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
    ],
    translation: `A: How about having our year-end party at that restaurant called Ume no Hana?\nB: Where is it?\nA: You don't know? It's a pub at the north exit of the station.\nB: I got it. I'll make a reservation. I plan on asking the department chief to give a toast.`,
    audio: "T14.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 22,
  },
  "15": {
    id: "15",
    rubyStory: [
      {
        character: "",
        dialogue: "先{せん}輩{はい}の<送{そう}別{べつ}会{かい}>が、高{たか}そうな<西{せい}洋{よう}>料{りょう}理{り}<店{てん}>で開{ひら}かれた。テーブルにたくさんの食{しょっ}器{き}と<ナプキン>が置{お}かれていて、見るだけで緊{きん}張{ちょう}してしまった。見たことがない<ごちそう>だったが、緊{きん}張{ちょう}しすぎて全部食べられず、<もったいなかった>。",
      },
    ],
    rubyWords: [
      {
        kanji: "送{そう}別{べつ}会{かい}",
        english: "farewell party",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "西{せい}洋{よう}",
        english: "Western",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～店{てん}",
        english: "store/shop",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "ナプキン",
        english: "napkin",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ごちそう",
        english: "feast",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ごちそうする",
        english: "to feast",
        type: MiniStoryWordType.IRREGULAR_TRANSITIVE
      },
      {
        kanji: "もったいない",
        english: "wasteful",
        type: MiniStoryWordType.ADJECTIVE_I
      },
    ],
    translation: `A farewell party for our senior was held at an expensive-looking Western-style restaurant. There were a lot of tableware and napkins on the table, and I got nervous just from looking at them. It was a feast like I had never seen before, but I was too nervous to eat everything, which was a waste.`,
    audio: "T15.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 22,
  },
  "16": {
    id: "16",
    rubyStory: [
      {
        character: "",
        dialogue: "<ガム>は、<栄{えい}養{よう}>がほとんどないが、虫{むし}歯{ば}の予{よ}防{ぼう}や集{しゅう}中{ちゅう}力{りょく}を高{たか}める効{こう}果{か}があり、毎日かんでいる人も多い。。しかし、<ポイ捨{す}て>が問{もん}題{だい}になる。外{がい}出{しゅつ}するときは、<包{つつ}み紙{がみ}>を忘れないようにしたい。",
      },
    ],
    rubyWords: [
      {
        kanji: "ガム",
        english: "gum",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "栄{えい}養{よう}",
        english: "nutrition",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ポイ捨{す}て［する］",
        english: "littering・to litter・to throw away carelessly",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "包{つつ}み紙{がみ}",
        english: "wrapping paper",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Gum has little nutrition, but it has the effect of preventing cavities and increasing concentration, and many people chew it every day. However, littering is a problem. When going out, try not to forget to bring wrapping paper.`,
    audio: "T16.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 23,
  },
  "17x": {
    id: "17x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "飲{の}み会{かい}",
        english: "drinking party",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "割{わ}り勘{かん} [する］",
        english: "to split the bill",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "酔{よ}う",
        english: "to get drunk・become intoxicated",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.GODAN_INTRANSITIVE]
      },
      {
        kanji: "翌{よく}日{じつ}",
        english: "the next day",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: ``,
    audio: "T17.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 24,
  },
  "18x": {
    id: "18x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "評{ひょう}判{ばん}",
        english: "reputation",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "本{ほん}店{てん}",
        english: "main store",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "本{ほん}社{しゃ}",
        english: "Main office/headquarters",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "わざわざ",
        english: "take the trouble・to go out of one's way to do something",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "細{ほそ}長{なが}い",
        english: "long and narrow",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "行{ぎょう}列{れつ}",
        english: "line・queue・ranks",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: ``,
    audio: "T18.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 24,
  },
  "19x": {
    id: "19x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "食{しょく}品{ひん}",
        english: "food products",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "產{さん}地{ち}",
        english: "production area",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "基{き}本{ほん}的{てき}な",
        english: "basic",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "基{き}本{ほん}",
        english: "basics",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "国{こく}産{さん}",
        english: "domestically produced product",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "品{ひん}質{しつ}",
        english: "quality",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～産{さん}",
        english: "~produced in・~made in・~from",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "ラベル",
        english: "label",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: ``,
    audio: "T19.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 25,
  },
  "20x": {
    id: "20x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "スイーツ",
        english: "sweets/desserts",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "クリーム",
        english: "cream",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "幸{しあわ}せな",
        english: "happy",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "売{う}り切{き}れる",
        english: "to be sold out",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "売{う}り切{き}れ",
        english: "sold out",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "おやつ",
        english: "snack",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: ``,
    audio: "T20.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 26,
  },
  "21x": {
    id: "21x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "方{かた}",
        english: "person",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "ランチ",
        english: "lunch",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "モーニング",
        english: "morning",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ディナー",
        english: "dinner",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "おごる",
        english: "to treat (someone to a meal)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "機{き}会{かい}",
        english: "opportunity",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "鍋{なべ}",
        english: "hot pot",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "会{かい}",
        english: "party/gathering",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: ``,
    audio: "T21.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 26,
  },
  "22x": {
    id: "22x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "餅{もち}",
        english: "rice cake",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "蒸{む}す",
        english: "to steam",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "あんこ",
        english: "sweet red bean paste",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "くるむ",
        english: "to wrap",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "炊{た}く",
        english: "to cook (rice)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: ``,
    audio: "T22.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 27,
  },
  "23x": {
    id: "23x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "ノンアルコール",
        english: "non-alcoholic",
        type: MiniStoryWordType.NOUN,
      },
      {
        kanji: "肝{かん}臓{ぞう}",
        english: "liver",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "飲{いん}酒{しゅ}［する］",
        english: "to drink alcohol",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
    ],
    translation: ``,
    audio: "T23.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 28,
  },
  "24x": {
    id: "24x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "調{ちょう}味{み}料{りょう}",
        english: "seasoning",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "海{かい}水{すい}",
        english: "seawater",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "舌{した}",
        english: "tongue",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "なめる",
        english: "to lick",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "塩{しお}辛{から}い",
        english: "salty",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "しょっぱい",
        english: "salty",
        type: MiniStoryWordType.ADJECTIVE_I
      },
    ],
    translation: ``,
    audio: "T24.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 28,
  },
  "25x": {
    id: "25x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "（お）そうざい",
        english: "side dish",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "済{す}ませる",
        english: "to be done/settle (a meal, etc.)",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "済{す}む",
        english: "to be settled/to be finished",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "外{かい}食{しょく}［する］",
        english: "to eat out",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "記{き}念{ねん}日{び}",
        english: "anniversary",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "記{き}念{ねん}［する］",
        english: "commemoration・to commemorate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "ぜいたく［する］",
        english: "luxury・to do something luxurious",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
    ],
    translation: ``,
    audio: "T25.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 29,
  },
  "26x": {
    id: "26x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "全{ぜん}力{りょく}",
        english: "full power/with all one's strength",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ぺこぺこな",
        english: "hungry (stomach growling)",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "丼{どんぶり}",
        english: "rice bowl",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～杯{ぱい}",
        english: "Items (counter for bowls of food or cups of drink)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "おかわり［する］",
        english: "refill・to have seconds/ to have another drink",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
    ],
    translation: ``,
    audio: "T26.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 29,
  },
  "27x": {
    id: "27x",
    rubyStory: [
      {
        character: "",
        dialogue: "xxx",
      },
    ],
    rubyWords: [
      {
        kanji: "小{こ}麦{むぎ}",
        english: "wheat",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "小{こ}麦{むぎ}粉{こ}",
        english: "wheat flour",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "トウモロコシ",
        english: "corn",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "粉{こな}",
        english: "powder",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "麺{めん}",
        english: "noodles",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "パスタ",
        english: "pasta",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: ``,
    audio: "T27.mp3",
    topic: MiniStoryTopics.FOOD,
    page: 30,
  },
  "28": {
    id: "28",
    rubyStory: [
      {
        character: "",
        dialogue: "大きくて深{ふか}い<フライパン>は、材{ざい}料{りょう}を嫌{や}くだけでなく、<ゆでたり>、<鶏{に}たり>するのにも使える。ゆでる場合には、<ふた>があるとよい。",
      },
    ],
    rubyWords: [
      {
        kanji: "フライパン",
        english: "frying pan"
      },
      {
        kanji: "ゆでる",
        english: "to boil"
      },
      {
        kanji: "煮{に}る",
        english: "cook・simmer"
      },
      {
        kanji: "煮{に}える",
        english: "to be cooked"
      },
      {
        kanji: "ふた",
        english: "lid"
      },
    ],
    translation: `A large and deep frying pan can be used to not only grill ingredients, but also to boil or cook things. When boiling something, it is best to have a lid.`,
    audio: "T28.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 34,
  },
  "29": {
    id: "29",
    rubyStory: [
      {
        character: "",
        dialogue: "<湯{ゆ}のみ>や<まな板{いた}>についた汚{よご}れは、 水{みず}で<流{なが}す>だけでは、なかなか取{と}れない。1時間ほど漂{ひょう}白{はく}剤{ざい}に<浸{つ}けて>おくと、<ぴかぴか>になる。",
      },
    ],
    rubyWords: [
      {
        kanji: "湯{ゆ}のみ",
        english: "teacup"
      },
      {
        kanji: "まな板{いた}",
        english: "cutting board"
      },
      {
        kanji: "汚{よご}れ",
        english: "dirt"
      },
      {
        kanji: "流{なが}す",
        english: "to wash away・to flush"
      },
      {
        kanji: "浸{つ}ける",
        english: "to soak・immerse"
      },
      {
        kanji: "ぴかぴかな",
        english: "sparkling・shiny"
      },
    ],
    translation: `Dirt stuck on things like teacups and cutting boards is not easy to wash avay with only water. If you immerse them in bleach for an hour, they'll be sparkling clean.`,
    audio: "T29.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 34,
  },
  "30": {
    id: "30",
    rubyStory: [
      {
        character: "",
        dialogue: "使った<食{しょっ}器{き}>は、洗{あら}ってから、<シンク>の上{うえ}の<戸{と}棚{だな}>に<戻{もど}して>ください。<ポット>はまたすぐに使うので、<しまわなくて>いいです。",
      },
    ],
    rubyWords: [
      {
        kanji: "食{しょっ}器{き}",
        english: "tableware"
      },
      {
        kanji: "シンク",
        english: "sink"
      },
      {
        kanji: "流{なが}し",
        english: "sink"
      },
      {
        kanji: "戸{と}棚{だな}",
        english: "Cabinet"
      },
      {
        kanji: "戻{もど}す",
        english: "to return"
      },
      {
        kanji: "ポット",
        english: "pot"
      },
      {
        kanji: "しまう",
        english: "to put away"
      },
    ],
    translation: `Wash your used tableware and return it to the cabinet on the sink. Since the pots will be used again soon, you don't have to put them away.`,
    audio: "T30.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 35,
  },
  "31": {
    id: "31",
    rubyStory: [
      {
        character: "",
        dialogue: "<ほこり>は部{へ}屋{や}の<隅{すみ}>にたまります。<床{ゆか}>をよく掃{そう}除{じ}しましょう",
      },
    ],
    rubyWords: [
      {
        kanji: "ほこり",
        english: "dust"
      },
      {
        kanji: "隅{すみ}",
        english: "corner"
      },
      {
        kanji: "床{ゆか}",
        english: "floor"
      },
    ],
    translation: ``,
    audio: "T31.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 35,
  },
  "32": {
    id: "32",
    rubyStory: [
      {
        character: "",
        dialogue: "<一{ひ}人{とり}暮{ぐ}らし>を始めたばかりなので、家の中はまだ全{ぜん}然{ぜん}<片{かた}付{づ}いて>いない。早{はや}く必{ひつ}要{よう}な<家{か}具{ぐ}>を揃{そろ}えて、<家{か}事{じ}>にも慣{な}れたいと思う。",
      },
    ],
    rubyWords: [
      {
        kanji: "一{ひ}人{とり}暮{ぐ}らし",
        english: "living alone",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "片{かた}付{づ}く",
        english: "to tidy up",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "家{か}具{ぐ}",
        english: "furniture",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "家{か}事{じ}",
        english: "housework",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Since I just started living alone, I haven't cleaned up my home at all yet. I want to hurry up and get all the furniture I need and get used to doing housework.`,
    audio: "T32.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 36,
  },
  "33": {
    id: "33",
    rubyStory: [
      {
        character: "A",
        dialogue: "忙{いそが}しそうだから、何{なに}か手{て}伝{つだ}おうか？",
      },
      {
        character: "B",
        dialogue: "ありがとう。じゃあ、部{へ}屋{や}の<後{あと}片{かた}付{づ}け>をしてくれない？",
      },
      {
        character: "A",
        dialogue: "うん、子どもが<出{だ}した>おもちゃを片{かた}付{づ}けるよ。",
      },
      {
        character: "B",
        dialogue: "その後{あと}、玄{げん}関{かん}を<掃{は}いて>くれたらうれしいな。",
      },
      {
        character: "A",
        dialogue: "わかった。",
      },
    ],
    rubyWords: [
      {
        kanji: "手{て}伝{つだ}う",
        english: "to help",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "後{あと}片{かた}付{づ}け［する］",
        english: "cleaning up after・Clean up after",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ICHIDAN_INTRANSITIVE ]
      },
      {
        kanji: "出{だ}す",
        english: "to put out",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "掃{は}く",
        english: "to sweep",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `A: You look busy, so is there anything I can do to help?\nB: Thank you. Then, can you clean up this room after we're done?\nA: Yeah, I'll clean up the toys our kid took out.\nB: Also, I'd appreciate it if you could sweep the entrance.\nA: Okay.`,
    audio: "T33.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 36,
  },
  "34": {
    id: "34",
    rubyStory: [
      {
        character: "",
        dialogue: "私の趣{しゅ}味{み}は洗{せん}濯{たく}です。<洗{せん}濯{たく}物{もの}>を<干{ほ}す>ときは、、濃{こ}い色{いろ}の服{ふく}は<裏{うら}返{がえ}して>干{ほ}すと色{いろ}が落{お}ちません。<乾{かわ}いた>洗濯物は、日{ひ}が暮{く}れるまでに取{と}り込{こ}みましょう。太{たい}陽{よう}の匂{に}いのする洗濯物を<畳{たた}む>のは幸{しあわ}せです。",
      },
    ],
    rubyWords: [
      {
        kanji: "洗{せん}濯{たく}物{もの}",
        english: "laundry",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "干{ほ}す",
        english: "to dry",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "裏{うら}返{がえ}す",
        english: "to turn inside out・to turn over",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "乾{かわ}く",
        english: "to be dried",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "乾{かわ}かす",
        english: "to dry (clothes)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "畳{たた}む",
        english: "to fold",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `My hobby is doing laundry. When hanging out the laundry to dry, I turn my dark-colored clothes inside-out so the colors don't run. Be sure to take in dry laundry by the time the sun goes down. Folding laundry that smells the sun makes mne happy.`,
    audio: "T34.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 37,
  },
  "35": {
    id: "35",
    rubyStory: [
      {
        character: "",
        dialogue: "<掃{そう}除{じ}用{よう}具{ぐ}>は<まとめて><洗{せん}面{めん}所{じょ}>に置{お}いてあります。",
      },
    ],
    rubyWords: [
      {
        kanji: "掃{そう}除{じ}用{よう}具{ぐ}",
        english: "cleaning supplies",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "用{よう}具{ぐ}",
        english: "Equipment・Tool",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "まとめる",
        english: "to put together・to summarize",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "まとまる",
        english: "to be put together・to be summarized",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "洗{せん}面{めん}所{じょ}",
        english: "washroom",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Cleaning equipment is all stored together in the washroom`,
    audio: "T35.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 37,
  },
  "36": {
    id: "36",
    rubyStory: [
      {
        character: "",
        dialogue: "古{ふる}くなった<タオル>は<雑{ぞう}巾{きん}>にします。タオルをミシンで<縫{ぬ}って>もいいし、<針{はり}>と糸{いと}を使って自分で縫{ぬ}ってもいいです。雑{ぞう}巾{きん}は、床{ゆか}を<拭{ふ}く>ときなどに使うことができます。",
      },
    ],
    rubyWords: [
      {
        kanji: "タオル",
        english: "towel",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "雑{ぞう}巾{きん}",
        english: "dishcloth",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "縫{ぬ}う",
        english: "to sew",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "針{はり}",
        english: "needle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "拭{ふ}く",
        english: "to wipe",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `I use old towels as rags. You can sew the towels with a sewing machine, or you can sew them by yourself using a needle and thread. These rags can be used to wipe the floor.`,
    audio: "T36.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 38,
  },
  "37": {
    id: "37",
    rubyStory: [
      {
        character: "",
        dialogue: "仕事が忙しくて、<不{ふ}規{き}則{そく}な>生{せい}活{かつ}が続{つづ}いた、食{しょく}事{じ}は<インスタント食{しょく}品{ひん}>ばかりで、部{っへ}屋{や}も<散{ち}らかった>ままだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "不{ふ}規{き}則{そく}な",
        english: "irregular",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "インスタント食{しょく}品{ひん}",
        english: "instant food",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "散{ち}らかる",
        english: "to be scattered",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "散{ち}らかす",
        english: "to scatter",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: ``,
    audio: "T37.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 38,
  },
  "38": {
    id: "38",
    rubyStory: [
      {
        character: "",
        dialogue: "みそ汁{しろ}の作{つく}り方{かた}は簡{かん}単{たん}です。だしを取{と}って、<材{ざい}料{りょう}>を入{い}れて煮{に}ます。最{さい}後{ご}に<おたま>でみそを<溶{と}いたら><でき上{あ}がり>です。",
      },
    ],
    rubyWords: [
      {
        kanji: "材{ざい}料{りょう}",
        english: "ingredients・materials",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "おたま",
        english: "ladle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "溶{と}く",
        english: "to melt・to dissolve",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "でき上{あ}がり",
        english: "finished・completed",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "でき上{あ}がる",
        english: "to be finished・to be completed",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `Making miso soup is easy. Take the stock, add the ingredients and then cook it. Lastly, dissolve the miso using a ladle, and it's finished.`,
    audio: "T38.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 39,
  },
  "39": {
    id: "39",
    rubyStory: [
      {
        character: "A",
        dialogue: "少{すこ}し体{からだ}が<だるい>から、今からちょっと<昼{ひる}寝{ね}>するよ。",
      },
      {
        character: "B",
        dialogue: "アルバイトはどうするの？",
      },
      {
        character: "A",
        dialogue: "それは行くから、3時に起{お}こしてくれない？",
      },
      {
        character: "B",
        dialogue: "分かった。",
      },
      {
        character: "A",
        dialogue: "<ちゃんと>起こしてね。",
      },
    ],
    rubyWords: [
      {
        kanji: "だるい",
        english: "sluggish",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "昼{ひる}寝{ね}［する］",
        english: "to take a nap",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "ちゃんと",
        english: "properly",
        type: MiniStoryWordType.ADVERB
      },
    ],
    translation: `A: I'm feeling a little sluggish, so I'm going to take a short nap now.\nB: What are you going to do about your part-time job?\nA: I'll be going, so could you wake me up at 3 o'clock?\nB: Okay.\nA: Be sure to wake me up properly.`,
    audio: "T39.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 39,
  },
  "40": {
    id: "40",
    rubyStory: [
      {
        character: "",
        dialogue: "<冷{ひ}やして>おいたビールを冷{れい}蔵{ぞう}庫{こ}から<取{と}り出{だ}し>、飲みながらゆっくり食{しょく}事{じ}をする。これが私の<休{きゅう}日{じつ}>の<喜{よろこ}び>です。",
      },
    ],
    rubyWords: [
      {
        kanji: "冷{ひ}やす",
        english: "to cool",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "取{と}り出{だ}す",
        english: "to take out",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "休{きゅう}日{び}",
        english: "holiday",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "喜{よろこ}び",
        english: "joy",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Taking out a chilled beer from the refrigerator and slowly eating a meal while drinking. This is my holiday joy.`,
    audio: "T40.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 40,
  },
  "41": {
    id: "41",
    rubyStory: [
      {
        character: "",
        dialogue: "<コインランドリー>は、家の洗濯機には入らないような大{おお}きな<カーペット>なども洗{あら}ったり、<乾{かん}燥{そう}させたり>できるので、大{たい}変{へん}便{べん}利{り}だ。<欠{けっ}点{てん}>は、コインランドリーまで大きなカーペットを持{も}って行くのが大変だということだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "コインランドリー",
        english: "coin laundromat",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "カーペット",
        english: "carpet",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "乾{かん}燥{そう}［する］",
        english: "Drying・To dry",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "欠{けっ}点{てん}",
        english: "Disadvantage",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Coin laundromats are very convenient because things like large carpets that can't fit in household washing machines can be washed or dried there. The disadvantage is that it's difficult to bring a large carpet all the way to the coin laundromat.`,
    audio: "T41.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 40,
  },
  "42": {
    id: "42",
    rubyStory: [
      {
        character: "",
        dialogue: "私の<得{とく}意{い}な>料理はステーキだ。<少{しょう}々{しょう}><適{てき}当{とう}な>味{あじ}付{つ}けでも、硬{かた}くならないように焼{や}けば、<オーケー>だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "得{とく}意{い}な",
        english: "good at",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "少{しょう}々{しょう}",
        english: "somewhat・a little",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "適{てき}当{とう}な",
        english: "appropriate・Careless",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "オーケー",
        english: "okay",
        type: MiniStoryWordType.OTHER
      },
    ],
    translation: `The dish I'm best at cooking is steak. Even with somewhat careless seasoning, it'll be okay so long as its cooked so as not to be too tough.`,
    audio: "T42.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 41,
  },
  "43": {
    id: "43",
    rubyStory: [
      {
        character: "",
        dialogue: "夫{おっと}の趣{しゅ}味{み}は料{りょう}理{り}だ。「料{りょう}理{り}は<化{か}学{がく}>だ」と言{い}っていて、調{ちょう}味{み}料{りょう}を<加{くわ}える><順{じゅん}番{ばん}>も気{き}にしている。<包{ほう}丁{ちょう}>の使{つか}い方{かた}もとてもうまいし、料{りょう}理{り}家{か}の<記{き}事{じ}>もいつお熱{ねっ}心{しん}に読{よ}んでいる。",
      },
    ],
    rubyWords: [
      {
        kanji: "化{か}学{がく}",
        english: "chemistry",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "加{くわ}える",
        english: "to add",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "加{くわ}わる",
        english: "to be added",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "順{じゅん}番{ばん}",
        english: "order",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "包{ほう}丁{ちょう}",
        english: "kitchen knife",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "記{き}事{じ}",
        english: "article",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `My husband's hobby is cooking. He says, "Cooking is chemistry", and even pays attention to the order in which seasonings are added. He's really good at using kitchen knives, and he always reads articles about cooking enthusiastically."`,
    audio: "T43.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 41,
  },
  "44": {
    id: "44",
    rubyStory: [
      {
        character: "",
        dialogue: "私はワイシャツに<アイロン>をかけるのが苦手です。<どうしても>うまくできないので、うちでは夫{おっと}がアイロン<担{たん}当{とう}>です。夫{おっと}に不{ふ}満{まん}な様{よう}子{す}は<全{まった}く>なく、楽しそうにやっています。今日も<ハンガー>にきれいになったワイシャツがかかっていて、うれしいです。",
      },
    ],
    rubyWords: [
      {
        kanji: "アイロン",
        english: "iron",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "どうしても",
        english: "No matter what・By all means",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "担{たん}当{とう}［する］",
        english: "being in charge of・to be in charge of",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: " 担{たん}当{とう}者{しゃ}",
        english: "person in charge",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "不{ふ}満{まん}な",
        english: "dissatisfied",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "全{まった}く",
        english: "(Not) at all・completely",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "ハンガー",
        english: "(Clothes) hanger",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `I'm no good at ironing dress shirts. Because I just can't do it well no matter what, my husband is in charge of ironing. He doesn't seem to be dissatisfied at all, and looks like hes having fun doing it. I'm glad to see another cleaned dress shirt on the hanger today too.`,
    audio: "T44.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 42,
  },
  "45": {
    id: "45",
    rubyStory: [
      {
        character: "",
        dialogue: "家{いえ}の<光{こう}熱{ねつ}費{ひ}>を下{さ}げるために、使わない機{き}器{き}の<コード>をコンセントから抜{ぬ}くようにしている。しかし、この間{あいだ}<歯{は}磨{みが}き>をしながら歩いていたら、抜{ぬ}いたコードに引{ひ}っかかってしまって危{あぶ}なかった。コードを片{かた}付{づ}けるか、歯{は}磨{みが}きをしながら歩かないようにするか、どちらがいいだろうか。",
      },
    ],
    rubyWords: [
      {
        kanji: "光{こう}熱{ねつ}費{ひ}",
        english: "utility costs",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "コード",
        english: "code",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "歯{は}磨{みが}き［する］",
        english: "tooth brushing・to brush one's teeth",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "歯{は}ブラシ",
        english: "toothbrush",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "歯{は}磨{みが}き粉{こ}",
        english: "toothpaste",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `In order to lower utility costs at home, I've decided to pull the cords of devices l'm not using out of the power outlets. However, when I was walking around while brushing my teeth, I got caught in an unplugged cord, which was dangerous. I wonder which I should do, clean up the cords or stop walking around while brushing my teeth.`,
    audio: "T45.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 42,
  },
  "46": {
    id: "46",
    rubyStory: [
      {
        character: "",
        dialogue: "ここ<数{すう}日{にち}>、、年{とし}をとった母に<付{つ}き合{あ}って>、、一緒に公園を散{さん}歩{ぽ}している。毎日歩く母を<偉{えら}い>なあと思{おも}っていたが、最近は、私も<自{し}然{ぜん}に>散{さん}歩{ぽ}に行きたいと思うようになってきた。",
      },
    ],
    rubyWords: [
      {
        kanji: "数{すう}日{にち}",
        english: "several days",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "数{すう}年{ねん}",
        english: "several years",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "付{つ}き合{あ}う",
        english: "Accompany",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "偉{えら}い",
        english: "great・admirable",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "自{し}然{ぜん}な",
        english: "natural",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
    translation: `Over the past few days, I've been accompanying my aging mother and walking in the park with her. I was thinking about how great it is that my mother walks every day, but recently, I too have started to naturally want to go for walks.`,
    audio: "T46.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 43,
  },
  "47": {
    id: "47",
    rubyStory: [
      {
        character: "A",
        dialogue: " 日{に}本{ほん}<製{せい}>の<炊{すい}飯{はん}器{き}>って海{かい}外{がい}でも人{にん}気{き}があるらしいね。",
      },
      {
        character: "B",
        dialogue: "お米{こめ}がおいしく炊{た}けるからね。それに、料理もできるんだよ。材料{ざいりょう}を入れてボタンを押{お}すだけで、<自{じ}動{どう}>でできる。",
      },
      {
        character: "A",
        dialogue: "へー、そうなんだ。",
      },
      {
        character: "B",
        dialogue: "忙しい<主{しゅ}婦{ふ}>には助{たす}かるよね。海外の人に何か<贈{おく}る>なら炊{すい}飯{はん}器{き}だね！",
      },
    ],
    rubyWords: [
      {
        kanji: "～製{せい}",
        english: "made in ~",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "炊{すい}飯{はん}器{き}",
        english: "rice cooker",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "自{じ}動{どう}",
        english: "automatic",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "自{じ}動{どう}的{てき}な",
        english: "automatic",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "主{しゅ}婦{ふ}",
        english: "housewife",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "主{しゅ}夫{ふ}",
        english: "househusband",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "贈{おく}る",
        english: "to give (as a gift)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "贈{おく}り物{もの}",
        english: "gift",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Japanese rice cookers seems to be popular overseas.\nB: That's because you can cook delicious rice. Besides, you can cook with them too. You just put the ingredients and press the button and it does it automatically.\nA: Wow, really?\nB: It's a big help for busy housewives. If you want to give a gift to someone overseas, make it a rice cooker.`,
    audio: "T47.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 44,
  },
  "48": {
    id: "48",
    rubyStory: [
      {
        character: "",
        dialogue: "ワイシャツを<インク>で<汚{よご}して>しまったので、<慌{あわ}てて><洗{せん}剤{ざい}>をつけて洗{あら}った。",
      },
    ],
    rubyWords: [
      {
        kanji: "インク",
        english: "ink",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "汚{よご}す",
        english: "to stain・to make dirty",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "慌{あわ}てる",
        english: "to panic",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "洗{せん}剤{ざい}",
        english: "detergent",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `I got ink on my dress shirt, so I hurriedly rubbed detergent on it and washed i`,
    audio: "T48.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 45,
  },
  "49": {
    id: "49",
    rubyStory: [
      {
        character: "A",
        dialogue: "昨目、息子が学校でけがをしてしまって、先生が家まで連れて帰ってきてくださったんです。だから、「ぜひ<お上{あ}がりください>」って言ったんだけど「<お構{かま}いなく>」って遠{えん}慮{りょ}されてしまって。",
      },
      {
        character: "B",
        dialogue: "今{いま}は、装生は生{せい}徒{と}の家{いえ}にほとんど入{はい}らないよね。それに<賛{さん}成{せい}する>人も反{はん}対{たい}する人もいるけどね。",
      },
    ],
    rubyWords: [
      {
        kanji: "お上{あ}がりください",
        english: "Please come in.",
        type: MiniStoryWordType.CLAUSE
      },
      {
        kanji: "お構{かま}いなく",
        english: "Please don't worry about me.",
        type: MiniStoryWordType.CLAUSE
      },
      {
        kanji: "賛{さん}成{せい}［する］",
        english: "agreement・to agree",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
    ],
    translation: `A: Yesterday, my son was injured at school, and his teacher brought him back to our house. So I said, "Please come inside, but the teacher refused, saying, "Please don't worry about me"\nB: Nowadays, teachers rarely enter to students homes. Some people agree with this, and some people don't.`,
    audio: "T49.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 45,
  },
  "50": {
    id: "50",
    rubyStory: [
      {
        character: "",
        dialogue: "<おととい>飲んだワインの<瓶{びん}>がとてもきれいだったので、<内{うち}側{がわ}>をきれいに洗{あら}って、花{か}瓶{びん}として使うことにした。下{した}にきれいなレースを<敷{し}く>と、とてもいい雰{ふん}囲{い}気{き}になった。我{わ}が家{や}は<年{ねん}中{じゅう}>花{はな}を生{い}けているため、花{か}瓶{びん}がたくさん必{ひつ}要{よう}だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "おととい",
        english: "the day before yesterday",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "瓶{びん}",
        english: "bottle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "内{うち}側{がわ}",
        english: "inside",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "外{そと}側{がわ}",
        english: "outside",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "敷{し}く",
        english: "to lay (something) down",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "年{ねん}中{じゅう}",
        english: "year-round",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The bottle of the wine I drank the day before yesterday was very beautiful, so I washed the inside clean and used it as a vase. I laid a beautiful lace cloth below it and it really improved the atmosphere. Because my house is full of flowers year-round, I need a lot of vases.`,
    audio: "T50.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 46,
  },
  "51": {
    id: "51",
    rubyStory: [
      {
        character: "",
        dialogue: "野{や}菜{さい}炒{いた}めを作るコツは、火{ひ}が通{とお}りにくい材{ざい}料{りょう}だけ中{ちゅう}火{び}で炒{いた}め、少{すこ}しやわらかくなったら火{ひ}を<弱{よわ}め>、他{ほか}の野{や}菜{さい}を足{た}して、<そのまま>弱{よわ}火{び}で炒{いた}めることだ。<すると>、しゃきっとした野{や}菜{さい}炒{いた}めができるはずだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "〜炒{いた}め",
        english: "stir-fry・fried",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "炒{いた}める",
        english: "to stir-fry",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "弱{よわ}める",
        english: "to weaken",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "弱{よわ}まる",
        english: "to weaken",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "そのまま",
        english: "as it is",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "すると",
        english: "and so・then",
        type: MiniStoryWordType.CONJUNCTION
      },
    ],
    translation: `The trick to making stir-fried vegetables is using medium heat for hard-to-cook ingredients and swiching to low heat once they sofien a little, then adding other vegetables, and continuing to cook it on low heat. Then, you should be able to make crispy stir-fried vegetables.`,
    audio: "T51.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 46,
  },
  "52": {
    id: "52",
    rubyStory: [
      {
        character: "",
        dialogue: "＜母{はは}親{おや}から子{こ}どもへのメモ書{が}き＞ 昨日の夕{ゆう}ご飯{はん}の<残{のこ}り>が<紺{こん}色{いろ}>のお皿{さら}に入{はい}っているから、それをお昼{ひる}に食{た}べてね。<レンジ>で1分ほど<温{あたた}めて>ね。",
      },
    ],
    rubyWords: [
      {
        kanji: "残{のこ}り",
        english: "leftovers・remaining",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "紺{こん}色{いろ}",
        english: "indigo・Deep blue",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "（電{でん}子{し}）レンジ",
        english: "microwave",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "温{あたた}める",
        english: "to warm (something) up",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "温まる",
        english: "to warm (up)",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `A memo from a mother to her child: "The leftovers from yesterday's dinner is in the indigo dish, so eat it for lunch. Please warm it up for about one minute in the microwave.`,
    audio: "T52.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 47,
  },
  "53": {
    id: "53",
    rubyStory: [
      {
        character: "A",
        dialogue: "この<袋{ふくろ}>に入{はい}っている緑{みどり}色{いろ}の粉{こな}、何？",
      },
      {
        character: "B",
        dialogue: "ケールっていう野{や}菜{さい}を、粉{こな}にしたものよ。",
      },
      {
        character: "A",
        dialogue: "ああ、健{けん}康{こう}にいいやつだね。",
      },
      {
        character: "B",
        dialogue: "そうそう。お湯{ゆ}に<溶{と}かして>飲むの。粉{こな}を<固{かた}めて>作った錠{じょう}剤{ざい}もあるよ。",
      },
      {
        character: "A",
        dialogue: "ちょっと飲んでみたいな。",
      },
      {
        character: "B",
        dialogue: "今ちょうどわかしたお湯{ゆ}が<>やかん>に入{はい}っているから、作ってあげるよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "袋{ふくろ}",
        english: "bag",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "買{か}い物{もの}袋{ぶくろ}",
        english: "shopping bag",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "溶{と}かす",
        english: "to dissolve",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "溶{と}ける",
        english: "to dissolve",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "固{かた}める",
        english: "to harden",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "固{かた}まる",
        english: "to harden",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "やかん",
        english: "kettle",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: What's this green powder in this bag?\nB: It's a powder made from a vegetable called kale.\nA: Oh, it's good for health, isn't it?\nB: Yeah. You dissolve it in hot water and drink it. There are also tablets made from this powder.\nA: I want to try drinking a little.\nB: There's still some hot water in the kettle I just put on, so I'll make you some.`,
    audio: "T53.mp3",
    topic: MiniStoryTopics.HOUSE_WORK,
    page: 48,
  },
  "54": {
    id: "54",
    rubyStory: [
      {
        character: "",
        dialogue: "<ドラッグストア>に人の<列{れつ}>ができていた、閉{へい}店{てん}するから、店{てん}内{ない}の商品が<定{てい}価{か}>の２<割{わり}引{びき}>から<半{はん}額{がく}>で買えるらしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "ドラッグストア",
        english: "drugstore",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "薬{やっ}局{きょく}",
        english: "pharmacy",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "列{れつ}",
        english: "line・row",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "定{てい}価{か}",
        english: "retail price",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～割{わり}引{びき}",
        english: "~discount, ~off",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "半{はん}額{がく}",
        english: "half price",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `There was a line of people at the drugstore. It's going to close, so it seems that products in the store can be purchased at a discount of 20 percent to half off of the list price.`,
    audio: "T54.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 50,
  },
  "55": {
    id: "55",
    rubyStory: [
      {
        character: "",
        dialogue: "日本円に<両{りょう}替{がえ}>するときには、<金{きん}額{がく}>にかかわらず、手{て}数{すう}<料{りょう}>として<余{よ}分{ぶん}な>金{きん}額{がく}を<支{し}払{はら}わ>なければならない。",
      },
    ],
    rubyWords: [
      {
        kanji: "両{りょう}替{がえ}［する］",
        english: "to exchange (money)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "金{きん}額{がく}",
        english: "amount of money",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～料{りょう}",
        english: "fee",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "手{て}数{すう}料{りょう}",
        english: "handling fee・commission",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "余{よ}分{ぶん}な",
        english: "extra",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "支{し}払{はら}う",
        english: "to pay",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "支{し}払{はら}い",
        english: "payment",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `When exchanging to Japanese yen, you have to pay an extra amount as a fee, regardless of the total amount of money.`,
    audio: "T55.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 50,
  },
  "56": {
    id: "56",
    rubyStory: [
      {
        character: "",
        dialogue: "<自{じ}動{どう}販{はん}売{ばい}機{き}>でジュースを買おうと思ったのに、<お札{さつ}>が使えなかった。小{こ}銭{ぜに}だとあと50円<足{た}りない>。諦{あきら}めて他{ほか}の自{じ}動{どう}販{はん}売{ばい}機{き}を探{さが}したが、１００００円<札{さつ}>が使えるのはなかった。",
      },
    ],
    rubyWords: [
      {
        kanji: "自{じ}動{どう}販{はん}売{ばい}機{き}",
        english: "vending machine",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "（お）札{さつ}",
        english: "(Monetary) bill",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "足{た}りる",
        english: "to be enough",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "～札{さつ}",
        english: "bill・note",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `I wanted to buy juice at a vending machine, but I couldn't use bills. If I have to only pay in change, I'll be 50 yen short. I gave up and looked for another vending machine, but there were none that take 10,000-yen bills.`,
    audio: "T56.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 51,
  },
  "57": {
    id: "57",
    rubyStory: [
      {
        character: "",
        dialogue: "うちの大学には3つの<売{ばい}店{てん}>があります。そのうち、この売{ばい}店{てん}では教{きょう}科{か}書{しょ}の販{はん}売{ばい}もしています。注{ちゅう}文{もん}した教{きょう}科{か}書{しょ}の<代{だい}金{きん}>はこのレジで払{はら}うことができます。水{すい}曜{よう}日{び}は<定{てい}休{きゅう}日{び}>ですので、気{き}をつけてくださいね。",
      },
    ],
    rubyWords: [
      {
        kanji: "売{ばい}店{てん}",
        english: "shop・store",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "代{だい}金{きん}",
        english: "payment・price",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "定{てい}休{きゅう}日{び}",
        english: "regular holiday",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `My university has three stores. Among them, this shop also sells textbooks. The payment for the ordered textbooks can be made at this cash register. Wednesday is a regular holiday, so please be careful.`,
    audio: "T57.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 51,
  },
  "58": {
    id: "58",
    rubyStory: [
      {
        character: "A",
        dialogue: "<レシート>があれば返{へん}品{ぴん}できるんじゃないの？",
      },
      {
        character: "B",
        dialogue: "<ですから>、お客{きゃく}様{さま}、こちらは<特{とく}売{ばい}>品{ひん}のため、返{へん}品{ぴん}・交{こう}換{かん}ができません。",
      },
    ],
    rubyWords: [
      {
        kanji: "レシート",
        english: "receipt",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ですから",
        english: "therefore・as I said before",
        type: MiniStoryWordType.CONJUNCTION
      },
      {
        kanji: "特{とく}売{ばい}",
        english: "Bargain sale",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Can't I return it if I have a receipt?\nB: As I said before, this is a bargain product, so it can't be returned or exchanged.`,
    audio: "T58.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 52,
  },
  "59": {
    id: "59",
    rubyStory: [
      {
        character: "A",
        dialogue: "4月に社会人になったら、<きちんと>自分で将{しょう}来{らい}の計{けい}画{かく}を立{た}てて<貯{ちょ}金{きん}>するのよ。",
      },
      {
        character: "B",
        dialogue: "うん、大丈夫だよ、母さん。",
      },
      {
        character: "A",
        dialogue: "あと、<預{よ}金{きん}><通{つう}帳{ちょう}>と印{いん}鑑{かん}はなくさないように、しっかり自分で<管{かん}理{り}>してね。",
      },
    ],
    rubyWords: [
      {
        kanji: "きちんと",
        english: "properly・exactly",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "貯{ちょ}金{きん}［する］",
        english: "savings・to save money",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "預{よ}金{きん}［する］",
        english: "deposit・to deposit money",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "通{つう}帳{ちょう}",
        english: "bankbook",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Once you become a working adult in April, you will need to properly plan and save money on your own.\nB: Yeah, I'll be okay, Mom.\nA: Also, keep track of your bankbook and seal so you don't lose them.`,
    audio: "T59.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 52,
  },
  "60": {
    id: "60",
    rubyStory: [
      {
        character: "",
        dialogue: "先{せん}月{げつ}の携{けい}帯{たい}<代{だい}>が10000円を超{こ}えて、せっかくバイトで<貯{た}めた>お金がほとんどなくなった。プランを変{か}えようかと思うが、携{けい}帯{たい}電{でん}話{わ}の<料{りょう}金{きん}>プランは複{ふく}雑{ざつ}すぎてどれが得{とく}なのかよく分からない。今{こん}月{げつ}は飲{の}み会{かい}ばかりで食{しょく}<費{ひ}>もかかるし、ピンチだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "～代{だい}",
        english: "bill",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "貯{た}める",
        english: "to save (money)",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "貯{た}まる",
        english: "to be saved (money)",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "料{りょう}金{きん}",
        english: "payment・charge",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～費{ひ}",
        english: "fee・cost",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `Because my cell phone bill for last month was more than 10,000 yen, most of the money I saved up from my part-time job is now gone. I want to change my plan, but mobile phone payment plans are so complicated that I can't figure out which one is the better deal. I have a lot of drinking parties this month making my food bill high, so I'm in a pinch.`,
    audio: "T60.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 53,
  },
  "61": {
    id: "61",
    rubyStory: [
      {
        character: "",
        dialogue: "今日は新{しん}聞{ぶん}の<集{しゅう}金{きん}>がある日{ひ}なので、<口{こう}座{ざ}>からお金を<下{お}ろして>準{じゅん}備{び}しておこう。",
      },
    ],
    rubyWords: [
      {
        kanji: "集{しゅう}金{きん}［する］",
        english: "collection (of money)・to collect (money)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "口{こう}座{ざ}",
        english: "bank account",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "下{お}ろす",
        english: "to withdraw (money)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `Today is the day they come to collect newspaper subscription fees, so I should withdraw some money from my account and get ready.`,
    audio: "T61.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 53,
  },
  "62": {
    id: "62",
    rubyStory: [
      {
        character: "",
        dialogue: "3月までのプロジェクトだが、各{かく}<支{し}店{てん}>での<宣{せん}伝{でん}>活{かつ}動{どう}が思うように行かず、延{えん}長{ちょう}になりそうだ。<予{よ}算{さん}>を<繰{く}り越{こ}す>手{て}続{つづ}きをして、完{かん}成{せい}報{ほう}告{こく}会{かい}の予約の<取{と}り消{け}して>おかなければならない。",
      },
    ],
    rubyWords: [
      {
        kanji: "支{し}店{てん}",
        english: "branch (of a company)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "支{し}社{しゃ}",
        english: "branch office",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "宣{せん}伝{でん}［する］",
        english: "advertising・to advertise",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "予{よ}算{さん}",
        english: "budget",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "繰{く}り越{こ}す",
        english: "to carry over (a budget)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "越{こ}す",
        english: "to exceed",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "取{と}り消{け}す",
        english: "to cancel",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `I'm working on a project until March, but the advertising activity at each branch isn't going the way I had hoped, so it looks like the project might be extended. I have to file the paperwork to carry the budget over and cancel the reservation for the completion report meeting.`,
    audio: "T62.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 54,
  },
  "63": {
    id: "63",
    rubyStory: [
      {
        character: "",
        dialogue: "若{わか}い頃{ころ}はお金がなくて苦{く}労{ろう}した。近{きん}所{じょ}の<八{や}百{お}屋{や}>でいらないキャベツを<段{だん}ボール>にいっぱいもらって、野{や}菜{さい}炒{いた}めばかり食べていた。でも<貧{まず}しい>分{ぶん}、人の優{やさ}しさにもたくさん触{ふ}れられたと思う。",
      },
    ],
    rubyWords: [
      {
        kanji: "八{や}百{お}屋{や}",
        english: "grocery store",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "段{だん}ボール",
        english: "cardboard box",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "貧{まず}しい",
        english: "poor",
        type: MiniStoryWordType.ADJECTIVE_I
      },
    ],
    translation: `When I was young, I had no money and had a hard time. I would get a cardboard box from the local grocery store that was full of cabbage they didn't need, and I would eat nothing but stir-fried vegetables. But as poor as I was, I was all the more affected by people's kindness.`,
    audio: "T63.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 54,
  },
  "64": {
    id: "64",
    rubyStory: [
      {
        character: "",
        dialogue: "<通{つう}販{はん}>で<ダイヤモンド>のネックレスを買った。定{てい}価{か}8万円のものが<セール>で5万円だったので<得{とく}した>気分だ。お金も<振{ふ}り込{こ}んだ>し、<配{はい}達{たつ}される>のが楽しみだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "通{つう}販{はん}",
        english: "mail order",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ダイヤモンド",
        english: "diamond",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "セール",
        english: "sale",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "得{とく}［する］",
        english: "Bargain・to get a bargain",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "損{そん}［する］",
        english: "Loss・to incur a loss",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "振{ふ}り込{こ}む",
        english: "Send・deposit (a payment)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "配{はい}達{たつ}［する］",
        english: "Delivery・to deliver",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `I bought a diamond necklace by mail order. It feels like I got a bargain because it was on sale for 50,000 yen with a list price of 80,000 yen. I already sent the money, so I'm looking forward to getting the delivery.`,
    audio: "T64.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 55,
  },
  "65": {
    id: "65",
    rubyStory: [
      {
        character: "",
        dialogue: "<バーゲン>のシーズンが来た。高くて買えなかった服が<値{ね}下{さ}がり>していたら買うつもりだ。多{おお}めにお金を<引{き}き出{だ}して>おこう。",
      },
    ],
    rubyWords: [
      {
        kanji: "バーゲン（セール）",
        english: "bargain (sale)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "値{ね}下{さ}がり［する］",
        english: "price drop・to lower the price",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "値{ね}上{あ}がり［する］",
        english: "price increase・to raise the price",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "值{ね}",
        english: "value",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "引{ひ}き出{だ}す",
        english: "get out・withdraw",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `Bargain's season has arrived. If they lower the prices, I'm going to buy all of the clothes that I couldn't get before because they were too expensive. I should withdraw a little extra money.`,
    audio: "T65.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 56,
  },
  "66": {
    id: "66",
    rubyStory: [
      {
        character: "A",
        dialogue: "<税{ぜい}込{こ}み>3500円です。",
      },
      {
        character: "B",
        dialogue: "カードで。",
      },
      {
        character: "A",
        dialogue: "お支{し}払{はら}い方{ほう}法{ほう}はいかがいたしましょうか。",
      },
      {
        character: "B",
        dialogue: "<1{いっ}回{かい}払{ばら}い>でお願いします。",
      },
    ],
    rubyWords: [
      {
        kanji: "税{ぜい}込{こ}み",
        english: "tax included",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "1{いっ}回{かい}払{ばら}い",
        english: "one-instalment payment",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Thats 3,500 yen including tax.\nB: By card.\nA: What payment method would you like?\nB: In one installment, please.`,
    audio: "T66.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 56,
  },
  "67": {
    id: "67",
    rubyStory: [
      {
        character: "A",
        dialogue: "すみません、<クレジットカード>って使えますか。",
      },
      {
        character: "B",
        dialogue: "申{もう}し訳{わけ}ございません。<現{げん}金{きん}>のみになっております",
      },
      {
        character: "A",
        dialogue: "そうですか。あ、<領{りょう}収{しゅう}書{しょ}>お願いします。",
      },
      {
        character: "B",
        dialogue: "かしこまりました。<レジ袋{ぶくろ}>はお付{つ}けしますか。",
      },
    ],
    rubyWords: [
      {
        kanji: "クレジットカード",
        english: "credit card",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "キャッシュカード",
        english: "cash card",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "現{げん}金{きん}",
        english: "cash",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "領{りょう}収{しゅう}書{しょ}",
        english: "receipt",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "レジ袋{ぶくろ}",
        english: "shopping bag",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Excuse me, can I use a credit card?\nB: Sorry. We only accept cash.\nA: I see. Oh, please give me a receipt.\nB: Okay. Would you like a plastic bag?`,
    audio: "T67.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 57,
  },
  "68": {
    id: "68",
    rubyStory: [
      {
        character: "A",
        dialogue: "ねえねえ、これ、フリマアプリでいくらで<売{う}れる>と思う？",
      },
      {
        character: "B",
        dialogue: "商{しょう}品{ひん}代{だい}<プラス><送{そう}料{りょう}>で1000円なら買うかな。",
      },
    ],
    rubyWords: [
      {
        kanji: "売{う}れる",
        english: "sell・be sellable",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "プラス［する］",
        english: "plus・to add",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "送{そう}料{りょう}",
        english: "shipping cost",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Hey, how much do you think I can sell this for on a flea market app?\nB: Someone might buy it for 1,000 yen icluding shipping.`,
    audio: "T68.mp3",
    topic: MiniStoryTopics.SHOPPING,
    page: 57,
  },
  "69": {
    id: "69",
    rubyStory: [
      {
        character: "A",
        dialogue: "<髪{かみ}の毛{け}>伸{の}びたね。",
      },
      {
        character: "B",
        dialogue: "うん、ずっと<美{び}容{よう}院{いん}>行ってなくて。毎朝くしで<とかして><セットする>のも、毎晩<ドライヤー>で乾{かわ}かすのも大変！",
      },
      {
        character: "A",
        dialogue: "分かる！時間もかかるしね。",
      },
    ],
    rubyWords: [
      {
        kanji: "髪{かみ}の毛{け}",
        english: "hair",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "美{び}容{よう}院{いん}",
        english: "beauty salon",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "床{とこ}屋{や}",
        english: "barber shop",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "とかす",
        english: "to comb",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "セット［する］",
        english: "Set・to set (one's hair)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "ドライヤー",
        english: "hair dryer",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Your hair got longer.\nB: Yeah, I haven't been to a beauty salon in long time. It's such a pain combing and putting it up every morning and drying it out with a dryer every night!\nA: I know what you mean! It takes so much time.`,
    audio: "T69.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 60,
  },
  "70": {
    id: "70",
    rubyStory: [
      {
        character: "",
        dialogue: "<眉{まゆ}毛{げ}>を少し<剃{そ}って>、<まつ毛{げ}>に<パーマ>をかけたら、まるで別{べつ}人{じん}のようになった。",
      },
    ],
    rubyWords: [
      {
        kanji: "眉{まゆ}（毛{げ})",
        english: "eyebrows",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "剃{そ}る",
        english: "to shave",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "まつ毛{げ}",
        english: "eyelashes",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "パーマ",
        english: "perm",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `When I shave my eyebrows a little and perm my eyelashes, it's like I become another person.`,
    audio: "T70.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 60,
  },
  "71": {
    id: "71",
    rubyStory: [
      {
        character: "A",
        dialogue: "「ファッションに<正{せい}解{かい}>はない」って言うけど、どう思いますが。",
      },
      {
        character: "B",
        dialogue: "そうですね。私も若{わか}い頃{ころ}はファッション雑{ざっ}誌{し}を何{なん}冊{さつ}か買って<参{さん}考{こう}>にしながら、何が正{せい}解{かい}かを一{いっ}生{しょう}懸{けん}命{めい}探{さが}していました。でも今は、好{この}みも<体{たい}型{けい}>も人によって<それぞれ>なので、他の人の目を気にしすぐず、自{じ}由{ゆう}にしてほしいなと思っています。",
      },
    ],
    rubyWords: [
      {
        kanji: "正{せい}解{かい}［する］",
        english: "Correct answer・to answer correctly",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "参{さん}考{こう}",
        english: "Reference",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "体{たい}型{けい}",
        english: "Body type",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "それぞれ",
        english: "Each・respectively",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
    ],
    translation: `A: They say, "there are no right answers in fashion," but what do you think?\nB: That's right. When I was younger, I used to buy and reference various fashion magazines and try my best to look for the right answers. But now, since preferences and body types differ from person to person, they try not to worry about the gaze of others too much and just want to be free.`,
    audio: "T71.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 61,
  },
  "72": {
    id: "72",
    rubyStory: [
      {
        character: "",
        dialogue: "<身{しん}長{ちょう}>が高いので、<シンプルな><スタイル>を心{こころ}がけている。",
      },
    ],
    rubyWords: [
      {
        kanji: "身{しん}長{ちょう}",
        english: "height",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "シンプルな",
        english: "simple",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "スタイル",
        english: "style",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Since I'm tall, I make an effort to keep my style simple.`,
    audio: "T72.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 61,
  },
  "73": {
    id: "73",
    rubyStory: [
      {
        character: "",
        dialogue: "カラー<コンタクト>の<新{しん}><色{しょく}>をオンライン<ショップ>限{げん}定{てい}で売り出{だ}したところ、SNSで話{わ}題{だい}になって、注{ちゅう}文{もん}が何{なん}倍{ばい}にも増{ふ}えた。間{ま}もなく赤{あか}字{じ}から回{かい}復{ふく}するだろう。",
      },
    ],
    rubyWords: [
      {
        kanji: "コンタクト(レンズ)",
        english: "Contact (lens)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "新{しん}～",
        english: "New ～",
        type: MiniStoryWordType.PREFIX
      },
      {
        kanji: "〜色{しょく}",
        english: "~ Color",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "ショップ",
        english: "Shop",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "赤{あか}字{じ}",
        english: "Deficit・in the red",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: " 黒{くろ}字{じ}",
        english: "Surplus・in the black",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `When a new color of the color contacts that was available only on our online shop went on sale, it became a topic on social media, and the number of orders increased several times over. It will soon be recovered from the deficit.`,
    audio: "T73.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 62,
  },
  "74": {
    id: "74",
    rubyStory: [
      {
        character: "",
        dialogue: "<革{かわ}>の<ベルト>や<ひも>でウエストを<マークする>ファッションが人気だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "革{かわ}",
        english: "leather",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ベルト",
        english: "belt",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ひも",
        english: "cord・string",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "マーク［する］",
        english: "Mark・to mark",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `Fashion styles that mark the waist with leather belts or cords are popular.`,
    audio: "T74.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 62,
  },
  "75": {
    id: "75",
    rubyStory: [
      {
        character: "A",
        dialogue: "最近<スニーカー>で来てるの？",
      },
      {
        character: "B",
        dialogue: "うん、それで<ストッキング>やめて、5本{ほん}指{ゆび}<ソックス>にしてみたんだけど、すごく快{かい}適{てき}！",
      },
      {
        character: "A",
        dialogue: "そうなんだ、私も<試{ため}して>みようかな。",
      },
    ],
    rubyWords: [
      {
        kanji: "スニーカー",
        english: "Sneakers",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ストッキング",
        english: "Stockings",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ソックス",
        english: "Socks",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "試{ため}す",
        english: "Try・to try",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "試{ため}し",
        english: "Trial・test",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Have you been coming in sneakers recently?\nB: Yeah, and I stopped wearing stockings and have started wearing five-toed socks, and they're really comfortable!\nA: Really? Maybe I should try them too.`,
    audio: "T75.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 63,
  },
  "76": {
    id: "76",
    rubyStory: [
      {
        character: "A",
        dialogue: "腕{うで}の<毛{け}>、<濃{こ}い>ね。",
      },
      {
        character: "B",
        dialogue: "<気{き}にして>るんだから言わないでよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "毛{け}",
        english: "Hair (body hair)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "毛{け}糸{いと}",
        english: "Wool (yarn)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "濃{こ}い",
        english: "Thick (color)・dense・strong",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "薄{うす}い",
        english: "Thin (color)・light・weak",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "気{き}にする",
        english: "Be counscious (about something)・to be concerned (about something)",
        type: MiniStoryWordType.IRREGULAR_TRANSITIVE
      },
    ],
    translation: `A: Your arm hair sure is thick.\nB: Don't say that. I'm really self-conscious about it.\n`,
    audio: "T76.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 63,
  },
  "77": {
    id: "77",
    rubyStory: [
      {
        character: "",
        dialogue: "<なんとなく>入{はい}った店で見つけた<ジーンズ>があまりに気に入{い}ったので、色{いろ}違{ちが}いで3<着{ちゃく}>買った。兄が帰ってきたら<自{じ}慢{まん}>しよう。",
      },
    ],
    rubyWords: [
      {
        kanji: "なんとなく",
        english: "somehow・on a whim・for some reason",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "ジーンズ",
        english: "jeans",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ジーパン",
        english: "jeans (casual)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～着{ちゃく}",
        english: "counter for clothing",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "自{じ}慢{まん}［する］",
        english: "Pride・boasrt・to be proud of",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `I liked the jeans I found at a store I happened to wonder into so much, I bought three of them in different colors. I'm going to boast to my older brother when he comes back.`,
    audio: "T77.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 64,
  },
  "78": {
    id: "78",
    rubyStory: [
      {
        character: "A",
        dialogue: "シンプルなシャツを<お召{め}しになる>ときは、<サングラス>や<スカーフ>などの小{こ}物{もの}を<合{あ}わせて>、<アクセント>をつけるといいですよ。",
      },
      {
        character: "B",
        dialogue: "ああ、なるほど。難しそうですね・・・。",
      },
    ],
    rubyWords: [
      {
        kanji: "お召{め}しになる",
        english: "To wear (honorific)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "サングラス",
        english: "Sunglasses",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "スカーフ",
        english: "Scarf",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "合{あ}わせる",
        english: "To combine",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "アクセント",
        english: "Accent",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: When wearing a simple shirt, you should combine accessories such as sunglasses and scarves to add an accent.\nB: Oh, I see. That sounds difficult...`,
    audio: "T78.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 64,
  },
  "79": {
    id: "79",
    rubyStory: [
      {
        character: "A",
        dialogue: "机{つくえ}の上に<布{ぬの}>と<はさみ>が置いてあったけど、どうしたの？",
      },
      {
        character: "B",
        dialogue: "子ども服を作ったの。見て、これ。あとはこの<部{ぶ}分{ぶん}>に<ゴム>を通{とお}せば<完{かん}成{せい}する>よ！",
      },
      {
        character: "A",
        dialogue: "へえ、かわいいね。<着{き}せる>のが楽しみだね。",
      },
    ],
    rubyWords: [
      {
        kanji: "布{ぬの}",
        english: "Fabric・cloth",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "はさみ",
        english: "Scissors",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "部{ぶ}分{ぶん}",
        english: "Part・section",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ゴム",
        english: "Rubber band・elastic",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "完{かん}成{せい}［する］",
        english: "Completion・to complete",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "着{き}せる",
        english: "Put on・make wear・have wear",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `A: There was a cloth and scissors on the desk, but what happened to them?\nB: I made some children's clothes. Look at this. I just have to put a rubber band through this part and it'll be finished!\nA: Wow, it's cute. I'm looking forward to having them wear it.`,
    audio: "T79.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 65,
  },
  "80": {
    id: "80",
    rubyStory: [
      {
        character: "",
        dialogue: "コートのベルトをリボンのように<結{むす}ぶ>と<お嬢{じょう}さん>っぽい<雰{ふん}囲{い}気{き}>になる。",
      },
    ],
    rubyWords: [
      {
        kanji: "結{むす}ぶ",
        english: "Tie・to tie",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "お嬢{じょう}さん",
        english: "Young lady",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "雰{ふん}囲{い}気{き}",
        english: "Atmosphere・vibe",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Trying the belt of a coat like a ribbon gives you young lady-like vibes.`,
    audio: "T80.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 65,
  },
  "81": {
    id: "81",
    rubyStory: [
      {
        character: "A",
        dialogue: "今度、婚{こん}活{かつ}パーティー行くんだけど、この服どう？<似{に}合{あ}う>？",
      },
      {
        character: "B",
        dialogue: "うーん、なんか<上{じょう}下{げ}><ばらばらな>印{いん}象{しょう}だけど。。。",
      },
      {
        character: "A",
        dialogue: "えーそう？<流{りゅう}行{こう}>を<追{お}いかけて>みたんだけど。",
      },
      {
        character: "B",
        dialogue: "流{りゅう}行{こう}より、体{たい}型{けい}に合う服や清{けい}潔{けつ}感{かん}のある服を<身{み}に付{つ}ける>ことの方が大事だと思うけど。",
      },
    ],
    rubyWords: [
      {
        kanji: "似{に}合{あ}う",
        english: "Look good on・to suit",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "上{じょう}下{げ}",
        english: "Up and down (clothing)・top and bottom",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "左{さ}右{ゆう}",
        english: "Left and right",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "前{ぜん}後{ご}",
        english: "Before and after",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ばらばらな",
        english: "Not matching・Separate",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "流{りゅう}行{こう}［する］",
        english: "Trend・to be in fashion",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "追{お}いかける",
        english: "Follow・to chase after",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "身{み}に付{つ}ける",
        english: "Put on oneself・to wear",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `A: I'm going to a matchmaking party, so what do you think about these clothes? Do they look good on me?\nB: Hmm, I get the feeling that the top and bottom don't match.\nA: What, really? I tried following the latest trends.\nB: I think that it's more important to wear clothes that fit your body type and feel neat than to follow trends.`,
    audio: "T81.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 66,
  },
  "82": {
    id: "82",
    rubyStory: [
      {
        character: "",
        dialogue: "営{えい}業{ぎょう}の仕事をしていると、お客{きゃく}様{さま}と会{かい}話{わ}する<場{ば}面{めん}>が多いので、<服{ふく}装{そう}>には気をつかう。特{とく}に、<ジャケット>は明{あか}るい色{いろ}を選ぶようにしている。",
      },
    ],
    rubyWords: [
      {
        kanji: "場{ば}面{めん}",
        english: "Scene・Situation・context",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "服{ふく}装{そう}",
        english: "Outfit・clothing",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ジャケット",
        english: "Jacket",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Working in sales, I have a lot of settings in which to talk with customers, so I end up being mindful about my clothes. In particular, I make sure to go with a jacket in a bright color.`,
    audio: "T82.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 66,
  },
  "83": {
    id: "83",
    rubyStory: [
      {
        character: "A",
        dialogue: "このシャツって、男{だん}性{せい}<用{よう}>ですか。",
      },
      {
        character: "B",
        dialogue: "はい、元{もと}々{もと}は男{だん}性{せい}用{よう}なんですが、最近大きめの<サイズ>のシャツを着るのがはやっているので、女{じょ}性{せい}のお客{きゃく}様{さま}でも<おしゃれに>着ていただけますよ。",
      },
      {
        character: "A",
        dialogue: "うーん、私が着ると<パジャマ>っぽくなりそうで・・・。",
      },
    ],
    rubyWords: [
      {
        kanji: "～用{よう}",
        english: "For ～",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "サイズ",
        english: "Size",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "おしゃれな",
        english: "Stylish",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "パジャマ",
        english: "Pajamas",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Is this shirt for men?\nB: Yes, it is originally for men, but recently, wearing large-sized shirts is in fashion, so women can also wear it and look stylish.\nA: Hmm, if I wear it, It'll probably look like pajamas on me...`,
    audio: "T83.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 67,
  },
  "84": {
    id: "84",
    rubyStory: [
      {
        character: "A",
        dialogue: "どうしたの、その<唇{くちびる}>。",
      },
      {
        character: "B",
        dialogue: "新しい<口{くち}紅{べに}>つけてみたの！どう？",
      },
      {
        character: "A",
        dialogue: "うーん、ちょっと<きらきらし>すぎて、<不{ふ}>自{じ}然{ぜん}と言うか…<浮{う}いて>る感{かん}じがする。",
      },
      {
        character: "B",
        dialogue: "えー、せっかく買ったのに。",
      },
    ],
    rubyWords: [
      {
        kanji: "唇{くちびる}",
        english: "Lips",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "口{くち}紅{べに}",
        english: "Lipstick",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "きらきらする",
        english: "Be sparkly・to sparkle",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE
      },
      {
        kanji: "不{ふ}～",
        english: "Un-",
        type: MiniStoryWordType.PREFIX
      },
      {
        kanji: "浮{う}く",
        english: "Be out of place・to float",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `A: What's that on your lips?\nB: I tried wearing a new lipstick! How is it?\nA: Hmm, it's a little too sparkly and I'd say unnatural... or out of place.\nB: Aw, but I already bought and paid for it.`,
    audio: "T84.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 68,
  },
  "85": {
    id: "85",
    rubyStory: [
      {
        character: "",
        dialogue: "<実{じつ}は>最近、<ピアス>をする若者が減{へ}っている。自分の体に<穴{あな}>を開{あ}けるのが嫌{いや}だというのが理由らしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "実{じつ}は",
        english: "Actually",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "ピアス",
        english: "Piercing・earrings",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "穴{あな}",
        english: "Hole",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Actually, the number of young people getting piercings has been decreasing recently. It seems that it's because they don't want to open holes in their bodies.`,
    audio: "T85.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 68,
  },
  "86": {
    id: "86",
    rubyStory: [
      {
        character: "",
        dialogue: "誕{たん}生{じょう}日{び}に彼{かれ}から<ネックレス>と<イヤリング>をもらったが、<個{こう}性{せい}的{てき}な>デザインで<着{つ}ける>機{き}会{かい}がない。",
      },
    ],
    rubyWords: [
      {
        kanji: "ネックレス",
        english: "Necklace",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "イヤリング",
        english: "Earrings",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "個{こう}性{せい}的{てき}な",
        english: "Unique",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "個{こう}性{せい}",
        english: "Uniqueness・Individuality",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "着{つ}ける",
        english: "To wear",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `I got a necklace and earrings from my boyfriend on my birthday, but it's such a unique design that I have no opportunity to wear them.`,
    audio: "T86.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 69,
  },
  "87": {
    id: "87",
    rubyStory: [
      {
        character: "",
        dialogue: "せっかくいい<デザイン>の<ブーツ>があったのに、試{し}着{ちゃく}すると<ファスナー>が閉{し}まらなかった。",
      },
    ],
    rubyWords: [
      {
        kanji: "デザイン［する］",
        english: "design・To design",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "デザイナー",
        english: "Designer",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ブーツ",
        english: "Boots",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ファスナー",
        english: "Zipper",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Even though there were some boots with a nice design, the zipper wouldn't close when I tried them on.`,
    audio: "T87.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 69,
  },
  "88": {
    id: "88",
    rubyStory: [
      {
        character: "A",
        dialogue: "あ、お母さん、<制{せい}服{ふく}>のシャツのボタンが<取{と}れちゃ>って…・。<付{つ}けて>くれない？",
      },
      {
        character: "B",
        dialogue: "いいけど、どこのボタン？ ああ、右{みぎ}の<袖{そで}>ね。ボタン用の<糸{いと}>、あったかな？",
      },
    ],
    rubyWords: [
      {
        kanji: "制{せい}服{ふく}",
        english: "Uniform",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "取{と}れる",
        english: "To come off",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "付{つ}ける",
        english: "To put on・to attach",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "袖{そで}",
        english: "Sleeve",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "長{なが}袖{そで}",
        english: "Long sleeves",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "半{はん}袖{そで}",
        english: "Short sleeves",
        type: MiniStoryWordType.NOUN
      },
      { 
        kanji: "糸{いと}",
        english: "Thread・yarn",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Oh, Mom, one of my uniform shirt buttons came off... Can you put it back on?\nB: Sure, but which button? Oh, the right sleeve. Do we have thread for the button?`,
    audio: "T88.mp3",
    topic: MiniStoryTopics.FASHION,
    page: 70,
  },
  "89": {
    id: "89",
    rubyStory: [
      {
        character: "A",
        dialogue: "昨日スマホを落{お}としちゃって、<画{が}面{めん}><割{わ}れた>。<修{しゅう}理{り}>も無理だって。<ショック>だよー。",
      },
      {
        character: "B",
        dialogue: "え、<カバー>付{つ}けてなかったの？",
      },
      {
        character: "A",
        dialogue: "今度から付{つ}けるようにする。",
      },
    ],
    rubyWords: [
      {
        kanji: "画{が}面{めん}",
        english: "Screen",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "画{が}面{めん}共{きょう}有{ゆう}",
        english: "Screen Sharing",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "割{わ}れる",
        english: "To break",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "割{わ}る",
        english: "To break",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "修{しゅう}理{り}［する］",
        english: "Repair・to repair",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "ショック",
        english: "Shock",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "カバー",
        english: "Cover",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Yesterday, I dropped my smartphone and broke the screen. They said it's impossible to repair. I'm in shock.\nB: What, didn't you put a cover on it?\nA: I'll be sure to put one on the next time.`,
    audio: "T89.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 72,
  },
  "90": {
    id: "90",
    rubyStory: [
      {
        character: "",
        dialogue: "化{か}学{がく}の<実{じっ}験{けん}>の授{じゅ}業{ぎょう}で、学生が<死{し}亡{ぼう}する>という事{じ}故{こ}があった。大きな<騒{さわ}ぎ>になった。",
      },
    ],
    rubyWords: [
      {
        kanji: "実{じっ}験{けん}［する］",
        english: "Experiment・to do an experiment",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "死{し}亡{ぼう}［する］",
        english: "Death・to die",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "騒{さわ}ぎ",
        english: "Uproar・commotion",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `There was an incident where a student died during a chemistry experiment in class. There was a big uproar about it.`,
    audio: "T90.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 72,
  },
  "91": {
    id: "91",
    rubyStory: [
      {
        character: "",
        dialogue: "<資{し}料{りょう}>は以{い}下{か}の<アドレス>に<アップしました>ので、<ダウンロードして>ください。紙{かみ}の<資{し}料{りょう}>が欲しい人は、自分で<印{いん}刷{さつ}>してください。",
      },
    ],
    rubyWords: [
      {
        kanji: "資{し}料{りょう}",
        english: "Materials・Documents",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "アドレス",
        english: "Address (URL・email)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "アップ（ロード）［する］",
        english: "Upload・to upload",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "ダウンロード［する］",
        english: "Download・to download",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "印{いん}刷{さつ}［する］",
        english: "Print・to print",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `The materials have been uploaded to the following address, so please download them. If you would like paper materials, please print them yourself.`,
    audio: "T91.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 73,
  },
  "92": {
    id: "92",
    rubyStory: [
      {
        character: "",
        dialogue: "「携{けい}帯{たい}電{でん}話{わ}」という名前だが、<主{おも}に>アプリを使っている。<通{つう}話{わ}する>とお金が<かかる>ので、友人との会話は<全{すべ}て>チャットを使っている。",
      },
    ],
    rubyWords: [
      {
        kanji: "主{おも}に",
        english: "Mainly",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "通{つう}話{わ}［する］",
        english: "Call・to call",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "かかる",
        english: "To take・cost (time, money, etc.)",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "全{すべ}て",
        english: "All",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
    ],
    translation: `It may be called a "mobile phone" but I mainly use apps. Making calls costs money, so all of my conversations with friends are over chat apps.`,
    audio: "T92.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 73,
  },
  "93": {
    id: "93",
    rubyStory: [
      {
        character: "A",
        dialogue: "私、<スケジュール>はスマホじゃなくて、<手{て}帳{ちょう}>で管{かん}理{り}してるな。自由に書{か}けるし。",
      },
      {
        character: "B",
        dialogue: "あ、私はそれもスマホでやってる。なんか<アイコン>で自由に<印{しるし}>つけられるから、<カラフルで>楽しいよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "スケジュール",
        english: "Schedule",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "手{て}帳{ちょう}",
        english: "Notebook・planner",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "アイコン",
        english: "Icon",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "印{しるし}",
        english: "Stamp・mark",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "カラフルな",
        english: "Colorful",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
    translation: `A: I manage my schedule in a notebook rather than on a smartphone. I can write freely.\nB: Oh, I do that with a smartphone too. It's colorful and fun because you can freely place stamps with an icon.`,
    audio: "T93.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 74,
  },
  "94": {
    id: "94",
    rubyStory: [
      {
        character: "",
        dialogue: "この<マイク>は<ピン>で服に止めて使います。この<スイッチ>を押すと<電{でん}源{げん}>が入{はい}ります。あとは普通に話せば、声がマイクに入{はい}ります。",
      },
    ],
    rubyWords: [
      {
        kanji: "マイク",
        english: "Microphone",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ピン",
        english: "Pin",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "スイッチ",
        english: "Switch",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "電{でん}源{げん}",
        english: "Power・Power supply",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `This microphone is a pin microphone and is attached to clothing. Press this switch to turn on the power. After that, just speak normally, and your voice will be picked up by the microphone.`,
    audio: "T94.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 74,
  },
  "95": {
    id: "95",
    rubyStory: [
      {
        character: "",
        dialogue: "<待{ま}ち合{あ}わせ>の<日{にち}時{じ}>は以{い}下{か}の通{とお}りです。あと、場所は分かりにくいので、<マップ>で示{しめ}します。<リンク先{さき}>を見てください。",
      },
    ],
    rubyWords: [
      {
        kanji: "待{ま}ち合{あ}わせ",
        english: "Meeting",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "待{ま}ち合{あ}わせる",
        english: "To meet・Have a meeting",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "日{にち}時{じ}",
        english: "Date and time",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "マップ",
        english: "Map",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "リンク先{さき}",
        english: "Link destination",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "リンク［する］",
        english: "link・To link",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_HYBRID ]
      },
    ],
    translation: `The date and time of the meeting is as follows. Also, the location is difficult to understand, so I will show it on a map. Please see the link.`,
    audio: "T95.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 75,
  },
  "96": {
    id: "96",
    rubyStory: [
      {
        character: "A",
        dialogue: "あれ、ここ<電{でん}波{ぱ}>悪い？ なんか全{ぜん}然{ぜん}表{ひょう}示{じ}されないんだけど。",
      },
      {
        character: "B",
        dialogue: "ん？ こっちは問題ないけど。",
      },
      {
        character: "A",
        dialogue: "あ、しまった。今{こん}月{げつ}通{つう}信{しん}量{りょう}が多{おお}くて、<速{そく}度{ど}><制{せい}限{げん}>かかってたんだった。動{どう}画{が}見すぎたよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "電{でん}波{ぱ}",
        english: "Radio waves・reception・signal",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "速{そく}度{ど}",
        english: "Speed",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "制{せい}限{げん}［する］",
        english: "Limit・Restriction・to limit",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `A: Huh, reception is bad here. Nothing is being displayed at all.\nB; What? I'm not having any problems.\nA: Oh, my mistake. I had a lot of communication traffic this month, and they put a speed limit on my phone. I watched too many videos.`,
    audio: "T96.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 75,
  },
  "97": {
    id: "97",
    rubyStory: [
      {
        character: "A",
        dialogue: "あ、ごめん、もう<充{じゅう}電{でん}>切れそう。",
      },
      {
        character: "B",
        dialogue: "え、まだお昼だよ。そんなことある？",
      },
      {
        character: "A",
        dialogue: "いやー、夜に充{じゅう}電{でん}したつもりだったんだけど、<コンセント>から<ケーブル>が<抜{ぬ}けて>て。",
      },
    ],
    rubyWords: [
      {
        kanji: "充{じゅう}電{でん}［する］",
        english: "Charging・To charge",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "コンセント",
        english: "Power outlet",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ケーブル",
        english: "Cable",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "抜{ぬ}ける",
        english: "To come out・To be removed",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "抜{ぬ}く",
        english: "To pull out・To unplug・To remove",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `A: Oh, I'm sorry, it looks like my battery is already about to run out.\nB: What? But it's only the afternoon. How is that possible?\nA: I meant to charge it (last) night, but the plug came out of the outlet.`,
    audio: "T97.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 76,
  },
  "98": {
    id: "98",
    rubyStory: [
      {
        character: "",
        dialogue: "<容{よう}量{りょう}>がすぐになくなるので、<無{む}駄{だ}な><データ>や使わない<ファイル>はなるべく消{け}すようにしている。",
      },
    ],
    rubyWords: [
      {
        kanji: "容{よう}量{りょう}",
        english: "Capacity・Storage space",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "無{む}駄{だ}な",
        english: "Useless・Wasteful・Unnecessary",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "データ",
        english: "Data",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ファイル",
        english: "File",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Since I (always) run out of storage space so quickly, I try to delete as much unneeded data and files as I can.`,
    audio: "T98.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 76,
  },
  "99": {
    id: "99",
    rubyStory: [
      {
        character: "",
        dialogue: "<メールアドレス>を<聞{き}違{ちが}って>、他の人にメールを送{おく}らないように注意しないといけない。<うっかり><本{ほん}人{にん}>に<悪{わる}口{ぐち}>を書いたメールを送{おく}ったら、<最{さい}悪{あく}だ>。",
      },
    ],
    rubyWords: [
      {
        kanji: "メールアドレス",
        english: "Email address",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "間{ま}違{ちが}う",
        english: "To make a mistake・to be mistaken",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "間{ま}違{ちが}い",
        english: "Mistake・Error",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "うっかり",
        english: "Carelessly・Inadvertently",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "本{ほん}人{にん}",
        english: "The person in question・The actual person",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "悪{わる}口{ぐち}",
        english: "Bad-mouthing・Slander",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "最{さい}悪{あく}な",
        english: "The worst",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
    translation: `You must be careful not to get email addresses wrong and send emails to other people. Carelessly sending an email bad-mouthing the actual person you're sending it to is the worst.`,
    audio: "T99.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 77,
  },
  "100": {
    id: "100",
    rubyStory: [
      {
        character: "",
        dialogue: "私のパソコンは<モニター>を2台{だい}<使{し}用{よう}して>いる。<さまざまな>アプリを<同{どう}時{じ}>に表{ひょう}示{じ}できるので、便{べん}利{り}だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "モニター",
        english: "Monitor",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "使{し}用{よう}［する］",
        english: "Usage・To use",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "さまざまな",
        english: "Various・Different kinds of",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "同{どう}時{じ}",
        english: "Simultaneously",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `My personal computer uses two monitors. It is convenient because I can view various apps simultaneously.`,
    audio: "T100.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 77,
  },
  "101": {
    id: "101",
    rubyStory: [
      {
        character: "",
        dialogue: "最近の<翻{ほん}訳{やく}>アプリは<音{おん}声{せい}>入{にゅう}力{りょく}で話した言葉を<次{つぎ}々{つぎ}と><訳{やく}して>くれる。しかも、よく使う表{ひょう}現{げん}は<保{ほ}存{ぞん}できる>。これで<無{む}料{りょう}>というのが言{しん}じられない。",
      },
    ],
    rubyWords: [
      {
        kanji: "翻{ほん}訳{やく}［する］",
        english: "Translation・To translate",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "音{おん}声{せい}",
        english: "Voice",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "次{つぎ}々{つぎ}（と）",
        english: "Continuously・One after another・In succession",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "訳{やく}す",
        english: "To translate",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "訳{やく}",
        english: "Translation",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "保{ほ}存{ぞん}［する］",
        english: "Saving・To save",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "無{む}料{りょう}",
        english: "Free of charge",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "有{ゆう}料{りょう}",
        english: "Paid・Not free",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Recent translation apps can continuously translate the words spoken into them. Moreover, often-used expressions can be saved. I can't believe something like this is free.`,
    audio: "T101.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 78,
  },
  "102": {
    id: "102",
    rubyStory: [
      {
        character: "A",
        dialogue: "<パスワード>ってさ、<数{すう}字{じ}>があるものとか、<文{も}字{じ}>だけのものとかいろいろあって覚{おぼ}えるのが大変じゃない？ しかも<数{すう}回{かい}>間{ま}違{ちが}えたら、<ロックされる>し。",
      },
      {
        character: "B",
        dialogue: "<それなら>パスワード管{かん}理{り}アプリを<インストールする>といいよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "パスワード",
        english: "Password",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "数{すう}字{じ}",
        english: "Number",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "文{も}字{じ}",
        english: "Character・Letter",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "数{すう}回{かい}",
        english: "Number of times・Several times",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "ロック［する］",
        english: "Lock・To lock",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "それなら",
        english: "In that case",
        type: MiniStoryWordType.CONJUNCTION
      },
      {
        kanji: "インストール［する］",
        english: "Installation・To install",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `A: Isn't it really difficult to remember passwords when you've got some with numbers and some with only letters or something? What's more, if you get it wrong several times, your account will be locked.\nB: If that's the case, then you should install a password management app.`,
    audio: "T102.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 78,
  },
  "103": {
    id: "103",
    rubyStory: [
      {
        character: "",
        dialogue: "スマホを<替{か}えよう>と思って<カタログ>を見ているけど、<違{ちが}い>が分からない。<最{さい}新{しん}><型{がた}>は私には必要ないかな。",
      },
    ],
    rubyWords: [
      {
        kanji: "替{か}える・代{か}える・換{か}える",
        english: "To replace・change・exchange",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "替{か}わる・代{か}わる・換{か}わる",
        english: "To be replaced・be changed・be exchanged",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "カタログ",
        english: "Catalog",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "違{ちが}い",
        english: "Difference",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "最{さい}新{しん}",
        english: "Latest",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～型{がた}",
        english: "Type・Model",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `I want to get a new smartphone, so I'm looking at a catalog, but I can't tell the difference. I don't think I need the latest model.`,
    audio: "T103.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 79,
  },
  "104": {
    id: "104",
    rubyStory: [
      {
        character: "",
        dialogue: "この<円{えん}>グラフは、日本人がスマホを使って何をしているかを表{あらわ}したものである。<平{へい}均{きん}して>1日に4時間スマホを使っていて、その約{やく}50<パーセント>が<SNS>の利{り}用{よう}である。<ホームページ>や<ブログ>を見る時間は減{へ}ってきている。",
      },
    ],
    rubyWords: [
      {
        kanji: "円{えん}",
        english: "Circle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "平{へい}均{きん}［する］",
        english: "Average・To average",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "パーセント",
        english: "Percent",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "SNS",
        english: "Social Media",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ホームページ",
        english: "Home Page",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ブログ",
        english: "Blog",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `This pie chart shows what Japanese people do when using a smartphone. On average, people use their phones about four hours a day, and about 50 percent of that time is spent on social media. Time spent looking at home pages and blogs is decreasing.`,
    audio: "T104.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 80,
  },
  "105": {
    id: "105",
    rubyStory: [
      {
        character: "",
        dialogue: "<検{けん}索{さく}>するときは、この<矢{や}印{じるし}>が書かれているところに文{も}字{じ}を入{い}れます。<ローマ字{じ}>でも検{けん}索{さく}できます。",
      },
    ],
    rubyWords: [
      {
        kanji: "検{けん}索{さく}［する］",
        english: "Search・To search",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "矢{や}印{じるし}",
        english: "Arrow",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ローマ字{じ}",
        english: "Roman letters",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `When doing a search, put the characters in the place where this arrow is written. You can even search using Roman letters.`,
    audio: "T105.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 80,
  },
  "106": {
    id: "106",
    rubyStory: [
      {
        character: "",
        dialogue: "<デジタル><技{ぎ}術{じゅつ}>の発{はっ}達{たつ}によって、スマートフォンで簡{かん}単{たん}に<録{ろく}音{おん}したり><撮{さつ}影{えい}したり>できるようになった。",
      },
    ],
    rubyWords: [
      {
        kanji: "デジタル",
        english: "Digital",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "アナログ",
        english: "Analog",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "技{ぎ}術{じゅつ}",
        english: "Technology",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "録{ろく}音{おん}［する］",
        english: "Recording (sound)・To record (sound)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "撮{さつ}影{えい}［する］",
        english: "Shooting (video)・To shoot (video)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `The development of digital technology has made it easy to record sound or video with smartphones.`,
    audio: "T106.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 81,
  },
  "107": {
    id: "107",
    rubyStory: [
      {
        character: "",
        dialogue: "今日は<祝{しゅく}日{じつ}>だったのに、<目{め}覚{ざ}まし>をいつも通{どお}りにセットしてしまい、朝の6時に<アラーム>が鳴{な}ってしまった。",
      },
    ],
    rubyWords: [
      {
        kanji: "祝{しゅく}日{じつ}",
        english: "Public holiday",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "目{め}覚{ざ}まし（時{ど}計{けい}）",
        english: "Alarm clock",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "アラーム",
        english: "Alarm",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Even though today was a public holiday, I set my alarm in the morning as always, and the alarm went off at 6 o'clock in the morning.`,
    audio: "T107.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 81,
  },
  "108": {
    id: "108",
    rubyStory: [
      {
        character: "A",
        dialogue: "<ウェブサイト>の<広{こう}告{こく}>って本当に嫌{きら}い。なんか画{が}面{めん}の<あちこち>に出{で}てきて、うっかり<クリックし>そうになる。",
      },
      {
        character: "B",
        dialogue: "そういう<工{く}夫{ふう}>はしてほしくないよね。",
      },
    ],
    rubyWords: [
      {
        kanji: "ウェブサイト",
        english: "Website",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ウェブ",
        english: "Web",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "広{こう}告{こく}",
        english: "Advertisement",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "広{こう}告{こく}会{がい}社{しゃ}",
        english: "Advertising company",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "あちこち",
        english: "Everywhere・Here and there",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "あちらこちら",
        english: "Everywhere・Here and there (formal)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "クリック［する］",
        english: "Clicking (on a link)・To click (on a link)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "工{く}夫{ふう}［する］",
        english: "Devising・To devise",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `A: I really hate advertisements on websites. They just pop up all over the screen, and I always almost carelessly click on them.\nB: I wish they wouldn't design them like that.`,
    audio: "T108.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 82,
  },
  "109": {
    id: "109",
    rubyStory: [
      {
        character: "",
        dialogue: "インストールするときに、一緒に変{へん}な<プログラム>も<追{つい}加{か}する>アプリがある。また、<勝{かっ}手{て}に><個{こ}人{じん}情{じょう}報{ほう}>を<送{そう}信{しん}する>アプリもあるので、インストール前には注意が必要だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "プログラム",
        english: "Program",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "追{つい}加{か}［する］",
        english: "Addition・To add",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "勝{かっ}手{て}な",
        english: "Without permission・Unilateral",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "個{こ}人{じん}情{じょう}報{ほう}",
        english: "Personal information",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "情{じょう}報{ほう}",
        english: "Information",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "送{そう}信{しん}［する］",
        english: "Sending/transmission (a message)・To send/transmit (a message)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "受{じゅ}信{しん}［する］",
        english: "Receiving (a message)・To receive (a message)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `There are applications that also add strange programs without permission when installing them. In addition, there are also apps that send personal information without permission, so take care before installing them.`,
    audio: "T109.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 82,
  },
  "110": {
    id: "110",
    rubyStory: [
      {
        character: "A",
        dialogue: "<チャット>の<通{つう}知{ち}>がどんどん来るのが気になるんだけど。大{たい}したことじゃないときもあるし。",
      },
      {
        character: "B",
        dialogue: "通{つう}知{ち}<停{てい}止{し}すれば>いいじゃん。名前のところ<長{なが}押{お}し>して。",
      },
      {
        character: "A",
        dialogue: "<なるほど>ー。みんなそうしてたんだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "チャット［する］",
        english: "Chat・To chat",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "通{つう}知{ち}［する］",
        english: "Notification・To notify",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "停{てい}止{し}［する］",
        english: "Stopping・To stop",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "長{なが}押{お}し［する］",
        english: "Long press・To long press",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "なるほど",
        english: "I see・That makes sense",
        type: MiniStoryWordType.CLAUSE
      },
    ],
    translation: `A: I'm worried about these chat notifications that keep coming. Sometimes it's not even something important.\nB: You should turn off notifications. Press and hold on their name.\nA: I see. So that's what everyone does.`,
    audio: "T110.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 83,
  },
  "111": {
    id: "111",
    rubyStory: [
      {
        character: "A",
        dialogue: "<マウス>がときどき動{うご}かなくなるんですよ。",
      },
      {
        character: "B",
        dialogue: "<無{む}線{せん}>のマウスだったらたぶん<電{でん}池{ち}>が切{き}れかけています。<交{こう}換{かん}すれば>直{なお}りますよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "マウス",
        english: "Mouse (computer)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "無{む}線{せん}",
        english: "Wireless",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "有{ゆう}線{せん}",
        english: "Wired",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "電{でん}池{ち}",
        english: "Battery",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "乾{かん}電{でん}池{ち}",
        english: "Dry battery・Dry cell",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "交{こう}換{かん}［する］",
        english: "Replacement・To replace",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `A: My mouse stops moving sometimes.\nB: If it's a wireless mouse, the batteries are probably running out. If you replace them, it should work fine.`,
    audio: "T111.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 84,
  },
  "112": {
    id: "112",
    rubyStory: [
      {
        character: "",
        dialogue: "先{せん}日{じつ}、<落{お}とし物{もの}>をしたら、拾{ひろ}って届{とど}けてくれた人がいた。<神{かみ}様{さま}>みたいな人だと思った。私もこれから<他{た}人{にん}>に親{しん}切{せつ}にしよう。",
      },
    ],
    rubyWords: [
      {
        kanji: "落{お}とし物{もの}",
        english: "Dropping something・Lost item",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "神{かみ}様{さま}",
        english: "God",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "神{かみ}",
        english: "God",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "他{た}人{にん}",
        english: "Other person・Stranger",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The other day, I had a dropped something, and someone picked it up and delivered it to me. I thought that person was like a god. I will also try to help others from now on.`,
    audio: "T112.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 84,
  },
  "113": {
    id: "113",
    rubyStory: [
      {
        character: "",
        dialogue: "ある国の<一{いち}流{りゅう}>企{き}業{ぎょう}の<製{せい}品{ひん}>であっても、<中{なか}身{み}>の<部{ぶ}品{ひん}>は別{べつ}の国{くに}の小さな会社で<製{せい}造{ぞう}されて>いることがある。",
      },
    ],
    rubyWords: [
      {
        kanji: "一{いち}流{りゅう}",
        english: "First-class・Top-tier",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "製{せい}品{ひん}",
        english: "Product",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "中{なか}身{み}",
        english: "Contents・Inner・Inside",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "部{ぶ}品{ひん}",
        english: "Part・Component",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "製{せい}造{ぞう}［する］",
        english: "Manufacturing・To manufacture",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `Even though a product may be a leading company of one country, there are times when the parts inside are manufactured at small companies in another country.`,
    audio: "T113.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 85,
  },
  "114": {
    id: "114",
    rubyStory: [
      {
        character: "",
        dialogue: "文{も}字{じ}だけの<発{はつ}言{げん}>は<誤{ご}解{かい}される>ことも多い。だからこそ、親{しん}近{きん}<感{かん}>を表{あらわ}すために、<絵{え}文{も}字{じ}>や<スタンプ>が使{つか}われる。",
      },
    ],
    rubyWords: [
      {
        kanji: "発{はつ}言{げん}［する］",
        english: "Message・Transmission・To send a message",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "誤{ご}解{かい}［する］",
        english: "Misunderstanding・To misunderstand",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "～感{かん}",
        english: "Feeling of・Sense",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "絵{え}文{も}字{じ}",
        english: "Emoji",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "スタンプ",
        english: "Stamp",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Transmissions that only use letters are often misunderstood. So, in order to express a feeling of familiarity, things like emojis and stamps are used.`,
    audio: "T114.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 85,
  },
  "115": {
    id: "115",
    rubyStory: [
      {
        character: "A",
        dialogue: "メールの<件{けん}名{めい}>、全{ぜん}然{ぜん}変{か}えない人がいるけど、許{ゆる}せないんだよね。",
      },
      {
        character: "B",
        dialogue: "え、でも、<返{へん}信{しん}>のときは変{か}えない。変{か}えたら失{しつ}礼{れい}じゃない？",
      },
      {
        character: "A",
        dialogue: "でも、返{へん}信{しん}や<転{てん}送{そう}>が繞{つづ}くと、記{き}号{ごう}が増{ふ}えて長{なが}くなるでしょ。<最{さい}大{だい}>20文{も}字{じ}ぐらいになるようにしてるな。",
      },
    ],
    rubyWords: [
      {
        kanji: "件{けん}名{めい}",
        english: "Subject (of an email)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "返{へん}信{しん}［する］",
        english: "Reply・To reply",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "転{てん}送{そう}［する］",
        english: "Forwarding・To forward",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "最{さい}大{だい}",
        english: "Maximum・Greatest",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "最{さい}小{しょう}",
        english: "Minimum・Least",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Isn't it unforgivable how there are some people who don't change the subjects of their email at all?\nB: But I don't change it when replying. Wouldn't it be rude if you did?\nA: But as it continues to be replied to or forwarded, the number of symbols increases, and the subject gets longer. I make sure it's never more than 20 characters.`,
    audio: "T115.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 86,
  },
  "116": {
    id: "116",
    rubyStory: [
      {
        character: "",
        dialogue: "紙{かみ}の<アルバム>の中{なか}の写{しゃ}真{しん}を<スキャンして>、インターネットに<移{うつ}した>。",
      },
    ],
    rubyWords: [
      {
        kanji: "アルバム",
        english: "Album",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "スキャン［する］",
        english: "Scan・To scan",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "移{うつ}す",
        english: "To transfer・To move",
        type: MiniStoryWordType.IRREGULAR_TRANSITIVE
      },
      {
        kanji: "移{うつ}る",
        english: "To be transferred・To be moved",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `I scanned the pictures in my paper album and transferred them to the internet.`,
    audio: "T116.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 86,
  },
  "117": {
    id: "117",
    rubyStory: [
      {
        character: "A",
        dialogue: "<アンケート>に答えたら回{かい}答{とう}<者{しゃ}>にプレゼントが当{あ}たるっていうの、あるでしょ。あれ、本当に当{あ}たるのかな。",
      },
      {
        character: "B",
        dialogue: "子どものとき、漫{まん}画{が}雑{ざっ}誌{し}のアンケートでスマホの<ケース>当{あ}たったことあるよ。1位{い}はゲーム<機{き}>だったけど、それは当{あ}たった人には会{あ}ったことないなあ。",
      },
    ],
    rubyWords: [
      {
        kanji: "アンケート",
        english: "Survey",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～者{しゃ}",
        english: "Respondent・Person who ～",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "ケース",
        english: "Case",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～機{き}",
        english: "Device・Machine that ～",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `A: You know how there are surveys where you could win a present if you answer them? I wonder if you can really win anything.\nB: When I was a kid, I won a smartphone case from a survey in a manga magazine. First place was a game console, but I've never met anyone who's won one.`,
    audio: "T117.mp3",
    topic: MiniStoryTopics.TECHNOLOGY,
    page: 87,
  },
  "118": {
    id: "118",
    rubyStory: [
      {
        character: "",
        dialogue: "私の好きな<俳{はい}優{ゆう}>が初{はじ}めて<来{らい}日{にち}して><インタビューされて>いた。しかし、<記{き}者{しゃ}>の質{しつ}問{もん}のレベルが低{ひく}くて<がっかりした>。",
      },
    ],
    rubyWords: [
      {
        kanji: "俳{はい}優{ゆう}",
        english: "Actor",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "女{じょ}優{ゆう}",
        english: "Actress",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "来{らい}日{にち}［する］",
        english: "To come to Japan",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "インタビュー［する］",
        english: "Interview・To interview",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "記{き}者{しゃ}",
        english: "Reporter・Journalist",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "がっかりする",
        english: "To be disappointed",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE
      },
    ],
    translation: `My favorite actor came to Japan for the first time and was interviewed. However, I was disappointed at the low level of reporter's questions.`,
    audio: "T118.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 90,
  },
  "119": {
    id: "119",
    rubyStory: [
      {
        character: "A",
        dialogue: "<リメイク><作{さく}品{ひん}>は、音{おん}楽{がく}は昔{むかし}のものを使ってほしい。",
      },
      {
        character: "B",
        dialogue: "分かる。<曲{きょく}>が<流{なが}れた>だけで、<懐{なつ}かしく>なって<涙{なみだ}>が出{で}そうになる。",
      },
    ],
    rubyWords: [
      {
        kanji: "リメイク［する］",
        english: "Remake・To remake",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "作{さく}品{ひん}",
        english: "Work・Production",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "曲{きょく}",
        english: "Song・Track",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "流{なが}れる",
        english: "To flow",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "懐{なつ}かしい",
        english: "Nostalgic",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "涙{なみだ}",
        english: "Tears",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: For works that are remakes, I want them to use the old music.\nB: I know what you mean. Just hearing the song being played will make it feel nostalgic and make you feel like crying.`,
    audio: "T119.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 90,
  },
  "120": {
    id: "120",
    rubyStory: [
      {
        character: "",
        dialogue: "最近のライトノベルは、まず<オンライン>の小{しょう}説{せつ}サイトに掲{けい}載{さい}され、それから本になることが多い。<タイトル>が長{なが}く、タイトルだけで<内{ない}容{よう}>が分かることが<共{きょう}通{つう}して>いる。本の<表{ひょう}紙{し}>にはかわいいキャラクターが描{えが}かれているが、タイトルのせいで見にくかったりする。",
      },
    ],
    rubyWords: [
      {
        kanji: "オンライン",
        english: "Online",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "タイトル",
        english: "Title",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "題{だい}名{めい}",
        english: "Title",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "題{だい}",
        english: "Title",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "内{ない}容{よう}",
        english: "Content",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "共{きょう}通{つう}［する］",
        english: "Having in common・To have in common",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "表{ひょう}紙{し}",
        english: "Cover (of a book)",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Recent light novels are often first published on online novel sites and then become books. It is common that the titles are long, and you can figure out the content just by the title alone. Cute characters are drawn on the covers of the books, but they may difficult to see because of the title.`,
    audio: "T120.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 91,
  },
  "121": {
    id: "121",
    rubyStory: [
      {
        character: "A",
        dialogue: "この前<勧{すす}めて>くれた<ドラマ>、<追{お}いついた>よ。",
      },
      {
        character: "B",
        dialogue: "え、もう？いつ教{おし}えたっけ。",
      },
      {
        character: "A",
        dialogue: "<先{せん}々{せん}週{しゅう}>だから、2週{かん}間{かん}で20話{わ}ぐらい見たかな。今{こん}夜{や}の話{はなし}は予{よ}約{やく}<済{ず}み>。",
      },
    ],
    rubyWords: [
      {
        kanji: "勧{すす}める",
        english: "To recommend",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "おすすめ［する］",
        english: "Recommendation・To recommend",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "ドラマ",
        english: "Drama",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "追{お}いつく",
        english: "To catch up",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "先{せん}々{せん}週{しゅう}",
        english: "The week before last",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "〜済{ず}み",
        english: "Already finished ～",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `A: I got caught up in that drama that recommended to me the other day.\nB: What? Already? When did I tell you about it again?\nA: The week before last, so I watched 20 episodes in about two weeks. Ive already set a reservation for tonights episode.`,
    audio: "T121.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 92,
  },
  "122": {
    id: "122",
    rubyStory: [
      {
        character: "A",
        dialogue: "これ、私が小学生のときの<劇{げき}>のビデオです。",
      },
      {
        character: "B",
        dialogue: "え、どこに映{うつ}ってるの？",
      },
      {
        character: "A",
        dialogue: "ああ、木{き}の<手{て}前{まえ}>にいる、<リボン>をつけた子{こ}が私です。",
      },
    ],
    rubyWords: [
      {
        kanji: "劇{げき}",
        english: "Play",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "劇{げき}場{じょう}",
        english: "Theater",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "手{て}前{まえ}",
        english: "In front",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "リボン",
        english: "Ribbon",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: This is a video of a play from when I was in elementary school.\nB: Oh, where are you?\nA: Umm, I'm the kid in front of the tree wearing a ribbon.`,
    audio: "T122.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 92,
  },
  "123": {
    id: "123",
    rubyStory: [
      {
        character: "",
        dialogue: "以{い}前{ぜん}はよく<レンタル>ビデオ店{てん}にビデオやDVDを借{か}りに行った。しかし、今はインターネットでレンタルすることができる。まず会{かい}員{いん}<登{とう}録{ろく}し>、それから好きな金{きん}額{がく}を<チャージする>。チャージした金{きん}額{がく}分{ぶん}、自由にレンタルすることができる。このやり方は一つの<発{はつ}明{めい}>だと思う。私はサイトを<お気{き}に入{い}り>に登{とう}録{ろく}している。",
      },
    ],
    rubyWords: [
      {
        kanji: "レンタル［する］",
        english: "Rental・To rent",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "登{とう}録{ろく}［する］",
        english: "Registration・To register",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "チャージ［する］",
        english: "Charge・To charge",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "発{はつ}明{めい}［する］",
        english: "Invention・To invent",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "お気{き}に入{い}り",
        english: "Favorite・Favorite thing",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `In the past, people rented videos and DVDs at rental video stores. But now, you can rent things on the internet. First, register as a member and then charge whatever amount you like. You can freely rent things with the charged amount. I think this method is one invention. I've registered the site to my favorites.`,
    audio: "T123.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 93,
  },
  "124": {
    id: "124",
    rubyStory: [
      {
        character: "",
        dialogue: "最{さい}初{しょ}はみんな、この<アニメ>を<仲{なか}良{よ}し>の女の子が変{へん}身{しん}して<戦{たたか}う>だけの話{はなし}だと思っていた。しかし、<第{だい}>3話{わ}で一人のキャラが<殺{ころ}され>、みんなショックを受{う}けた。",
      },
    ],
    rubyWords: [
      {
        kanji: "アニメ（ーション）",
        english: "Animation・Anime",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "仲{なか}良{よ}し",
        english: "Close friend・Good friend",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "戦{たたか}う",
        english: "To fight",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "戦{たたか}い",
        english: "Fight・Battle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "第{だい}～",
        english: "No. ~・~th・~nd・~rd (used for numbering episodes, chapters, etc.)",
        type: MiniStoryWordType.PREFIX
      },
      {
        kanji: "殺{ころ}す",
        english: "To kill",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `At first everyone thought that the anime was only about girls who were friends and would change form and fight. However, one character was killed in the third episode, and everyone was shocked.`,
    audio: "T124.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 94,
  },
  "125": {
    id: "125",
    rubyStory: [
      {
        character: "",
        dialogue: "この会社のアニメは、<前{ぜん}半{はん}>がどんな話{はなし}でも、<後{こう}半{はん}>は必ず<宇{う}宙{ちゅう}>に<飛{と}び出{だ}す>。",
      },
    ],
    rubyWords: [
      {
        kanji: "前{ぜん}半{はん}",
        english: "First half",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "後{こう}半{はん}",
        english: "Second half",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "宇{う}宙{ちゅう}",
        english: "Space (outer space)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "飛{と}び出{だ}す",
        english: "To jump out・To launch out",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `No matter what happens in the first half of the anime from that company, they always fly off to space in the second half.`,
    audio: "T125.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 94,
  },
  "126": {
    id: "126",
    rubyStory: [
      {
        character: "",
        dialogue: "<少{しょう}年{ねん}>漫{まん}画{が}で何が<はやっている>かは、小{ちい}さな子どもたちを見れば分かる。彼{かれ}らはすぐに言葉や<技{わざ}>を<まね>するから。",
      },
    ],
    rubyWords: [
      {
        kanji: "少{しょう}年{ねん}",
        english: "Boy・Young boy",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "少{しょう}女{じょ}",
        english: "Girl・Young girl",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "はやる",
        english: "To be popular・To be in fashion",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "はやり",
        english: "Trend・Fashion",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "技{わざ}",
        english: "Technique・Skill",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "まね［する］",
        english: "Imitation・To imitate",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `You can tell what young boy's comics are popular by looking at young children. This is because they immediately imitate their words and techniques.`,
    audio: "T126.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 95,
  },
  "127": {
    id: "127",
    rubyStory: [
      {
        character: "A",
        dialogue: "<ミステリー>のドラマってだいたい<ハンサムな>役{やく}者{しゃ}が<犯{はん}人{にん}>だよな。",
      },
      {
        character: "B",
        dialogue: "<おい>、そんなこと言うのやめるよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "ミステリー",
        english: "Mystery (genre)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ハンサムな",
        english: "Handsome",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "犯{はん}人{にん}",
        english: "Criminal",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "おい",
        english: "Hey",
        type: MiniStoryWordType.OTHER
      },
    ],
    translation: `A: In mystery dramas, the criminal is usually the handsome actor, right?\nB: Hey, stop saying things like that.`,
    audio: "T127.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 95,
  },
  "128": {
    id: "128",
    rubyStory: [
      {
        character: "",
        dialogue: "<恋{れん}愛{あい}>と<友{ゆう}情{じょう}>は、人{にん}間{げん}にとって最{もっと}も<重{じゅう}大{だい}な><テーマ>だ。だからこそ、歴{れき}史{し}の中{なか}でたくさんの<物{もの}語{がたり}>が作られてきた。現{げん}代{だい}の曲{きょく}の<歌{か}詞{し}>にも多{おお}く登{とう}場{じょう}する。",
      },
    ],
    rubyWords: [
      {
        kanji: "恋{れん}愛{あい}［する］",
        english: "Love・To love",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "友{ゆう}情{じょう}",
        english: "Friendship",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "重{じゅう}大{だい}な",
        english: "Serious・Significant",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "テーマ",
        english: "Theme",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "物{もの}語{がたり}",
        english: "Story・Tale",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "歌{か}詞{し}",
        english: "Lyrics",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Love and friendship are the most significant themes for humans. That's why there have been a lot of stories in history. Many appear in the lyrics of modern songs too.`,
    audio: "T128.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 96,
  },
  "129": {
    id: "129",
    rubyStory: [
      {
        character: "",
        dialogue: "この<作{さく}者{しゃ}>の漫{まん}画{が}は面{おも}白{しろ}いけど、<ところどころ>変{へん}だ。最{さい}初{しょ}女の子だったキャラが、<いつの間{ま}にか>男の子になっていた。ストーリーにも<波{なみ}>があり、<調{ちょう}子{し}>がいいときは読{よ}んでいて<どきどきする>が、調{ちょう}子{し}が悪{わる}いときは本当に面{おも}白{しろ}くない。",
      },
    ],
    rubyWords: [
      {
        kanji: "作{さく}者{しゃ}",
        english: "Author",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ところどころ",
        english: "Here and there・In various places",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "いつの間{ま}にか",
        english: "At some point",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "波{なみ}",
        english: "Wave",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "調{ちょう}子{し}",
        english: "Condition・Tune",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "どきどき［する］",
        english: "Exciting・To be excited",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `This author's manga are interesting, but there are some strange parts here and there. One character who was a girl at first at some point became a boy. There are waves in the story, and when the condition is good, I read it and get excited, but when it's not good, it's really uninteresting.`,
    audio: "T129.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 96,
  },
  "130": {
    id: "130",
    rubyStory: [
      {
        character: "A",
        dialogue: "この映画は、<観{かん}客{きゃく}>に<カード>のプレゼントがあるから、4回{かい}見に行かないと。",
      },
      {
        character: "B",
        dialogue: "そんなに見たら<飽{あ}きない>？",
      },
      {
        character: "A",
        dialogue: "カードだけもらう人もいるけど、私は見る。最{さい}初{しょ}、<あれ？>って思ったところが、2回{かい}目{め}に見ると意味が分かったりするから。",
      },
    ],
    rubyWords: [
      {
        kanji: "観{かん}客{きゃく}",
        english: "Audience",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "カード",
        english: "Card",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "飽{あ}きる",
        english: "To get tired of",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "あれ？",
        english: "Huh?",
        type: MiniStoryWordType.OTHER
      },
    ],
    translation: `A: This movie has a card present for the audience, so I have to go four times.\nB: Won't you get tired of watching it so much?\nA: Some people get only the cards, but I watch it. I can better understand some of the things that made me go "huh?" the first time I watched it when watching it for the second time.`,
    audio: "T130.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 97,
  },
  "131": {
    id: "131",
    rubyStory: [
      {
        character: "",
        dialogue: "私はアイドルには<少{すこ}しも>興味が<なかった>。しかし、友人に誘{さそ}われて、<コンサート>に行ってから、ファンになった。彼{かれ}らが<登{とう}場{じょう}した>ときの会{かい}場{じょう}の空{くう}気{き}は忘れられない。とても感{かん}動{どう}<的{てき}>で、終{お}わる頃{ころ}には泣{な}いていた。",
      },
    ],
    rubyWords: [
      {
        kanji: "少{すこ}しも～ない",
        english: "Not even a little・Not at all ~",
        type: MiniStoryWordType.CLAUSE
      },
      {
        kanji: "コンサート",
        english: "Concert",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: " ライブ",
        english: "Live (performance)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "登{とう}場{じょう}［する］",
        english: "Appearance・To appear・To make an appearance",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "〜的{てき}",
        english: "〜ish",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `I didn't used to be interested in idols at all. However, I was invited by a friend to a concert and have been a fan ever since. I'll never forget the vibe in the venue the moment they appeared. It was really moving, and I cried when it was over.`,
    audio: "T131.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 98,
  },
  "132": {
    id: "132",
    rubyStory: [
      {
        character: "",
        dialogue: "来週、私の好きな漫{まん}画{が}家{か}の最{さい}新{しん}<作{さく}>が<スタートします>。私は小さい頃{ころ}、<お小{こ}遣{づか}い>をためて、その人の全{ぜん}作{さく}品{ひん}を<そろえて>いました。新しい作品は、<過{か}去{こ}>の作品の<続{つづ}き>のストーリーです。",
      },
    ],
    rubyWords: [
      {
        kanji: "～作{さく}",
        english: "～Work",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "スタート［する］",
        english: "Start・To start",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "（お）小{こ}遣{づか}い",
        english: "Pocket money",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "そろえる",
        english: "To arrange together・To collect",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "そろう",
        english: "To be collected・To be arranged together",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "おそろい",
        english: "Complete set・Matching set",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "過{か}去{こ}",
        english: "Past",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "続{つづ}き",
        english: "Continuation",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Next week, the latest work from my favorite manga artist will be starting. When I was younger, I used to save up my pocket money, and I had collected all of their works. Their new work is a continuation of the story of their past work.`,
    audio: "T132.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 98,
  },
  "133": {
    id: "133",
    rubyStory: [
      {
        character: "A",
        dialogue: "<展{てん}覧{らん}会{かい}>とか行ったことないんだよね。どれに行ったらいいか分からないし。",
      },
      {
        character: "B",
        dialogue: "最{さい}初{しょ}はなんでもいいんだよ。適{てき}当{とう}に行って、何{なに}かの絵{え}が<気{き}に入{い}ったら>、それを描{か}いた<画{が}家{か}>のことを調{しら}べる。そうしているうちにだんだん<詳{くわ}しく>なるよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "展{てん}覧{らん}会{かい}",
        english: "Exhibition",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "気{き}に入{い}る",
        english: "To like・To be pleased with",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "画{が}家{か}",
        english: "Painter",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "詳{くわ}しい",
        english: "Detailed・Knowledgeable",
        type: MiniStoryWordType.ADJECTIVE_I
      },
    ],
    translation: `A: I have never been to an exhibition. I wouldn't even know which one to go to.\nB: Anything is okay at first. Just go when you feel like it, and if you see a painting you like, check out the painter who painted it. You'll grow more knowledgeable as you do that.`,
    audio: "T133.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 99,
  },
  "134": {
    id: "134",
    rubyStory: [
      {
        character: "",
        dialogue: "コンサートのチケットは<夜{よ}中{なか}>に<発{はつ}売{ばい}された>のに、アクセスが<集{しゅう}中{ちゅう}し>、<たった>1分で売{う}り切{き}れた。",
      },
    ],
    rubyWords: [
      {
        kanji: "夜{よ}中{なか}",
        english: "Nighttime",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "発{はつ}売{ばい}［する］",
        english: "Selling・To sell",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "新{しん}発{はつ}売{ばい}",
        english: "Now on sale・Newly released",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "集{しゅう}中{ちゅう}［する］",
        english: "Concentrating・To concentrate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "集{しゅう}中{ちゅう}力{りょく}",
        english: "Concentration (ability to concentrate)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "たった",
        english: "Just・Only",
        type: MiniStoryWordType.ADVERB
      },
    ],
    translation: `The tickets for the concert went on sale during the night, but access was concentrated, and they sold out in just one minute.`,
    audio: "T134.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 100,
  },
  "135": {
    id: "135",
    rubyStory: [
      {
        character: "",
        dialogue: "これは、少{しょう}年{ねん}が妹{いもうと}を守{まも}るために、父{ちち}親{おや}である<王{おう}>を<倒{たお}す>物{もの}語{がたり}です。そのために、少{しょう}年{ねん}はいろいろな<犯{はん}罪{ざい}>も狙{おか}します。でも、<ラスト>は本当に感{かん}動{どう}的{てき}で、見{め}終{お}わったときは<拍{はく}手{しゅ}しました>。",
      },
    ],
    rubyWords: [
      {
        kanji: "王{おう}",
        english: "King",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "王{おう}様{さま}",
        english: "King (honorific)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "国{こく}王{おう}",
        english: "King (of a country)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "倒{たお}す",
        english: "To defeat",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "犯{はん}罪{ざい}",
        english: "Crime",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ラスト",
        english: "Ending・Finale",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "拍{はく}手{しゅ}［する］",
        english: "Applause・Clap・To applaud",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `This is a story of a boy that defeats the king who is also his father to protect his sister. To that end, the boy also commits a variety of crimes. But the ending was really moving, and I clapped when it ended.`,
    audio: "T135.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 100,
  },
  "136": {
    id: "136",
    rubyStory: [
      {
        character: "",
        dialogue: "テレビを見ている人も参{さん}加{か}できる<クイズ>番{ばん}組{ぐみ}があった。私はいつも、スマホを<操{そう}作{さ}して>いる<途{と}中{ちゅう}>で<締{し}め切{き}られて>しまっていた。答{こた}えは全{ぜん}部{ぶ}分{わ}かっていて、もうちょっとで商{しょう}品{ひん}がもらえたのに、<惜{お}しかった>。",
      },
    ],
    rubyWords: [
      {
        kanji: "クイズ",
        english: "Quiz",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "操{そう}作{さ}［する］",
        english: "Manipulation・To manipulate",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "途{と}中{ちゅう}",
        english: "On the way・In the middle of",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "締{し}め切{き}る",
        english: "To close (e.g. applications)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "締{し}め切{き}り",
        english: "Deadline",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "惜{お}しい",
        english: "Frustrating・Regrettable・Unfortunate",
        type: MiniStoryWordType.ADJECTIVE_I
      },
    ],
    translation: `There were quiz programs where people watching on TV can participate too. They always ended while I was busy using my smartphone. I knew all of the answers, and I was almost able to get a prize, so it was frustrating.`,
    audio: "T136.mp3",
    topic: MiniStoryTopics.TRENDS,
    page: 101,
  },
  "137": {
    id: "137",
    rubyStory: [
      {
        character: "",
        dialogue: "<久{ひさ}しぶりに>中国人の<友{ゆう}人{じん}>が来{らい}日{にち}した。<母{はは}親{おや}>が「<ようこそ>、<よくいらっしゃいました>」と言うと、友{ゆう}人{じん}は「<ご無{ぶ}沙{さ}汰{た}して>います」とあいさつした。",
      },
    ],
    rubyWords: [
      {
        kanji: "久{ひさ}しぶりに",
        english: "For the first time in a while",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "友{ゆう}人{じん}",
        english: "Friend",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "母{はは}親{おや}",
        english: "Mother",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "父{ちち}親{おや}",
        english: "Father",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ようこそ",
        english: "Welcome",
        type: MiniStoryWordType.CLAUSE
      },
      {
        kanji: "よくいらっしゃいました",
        english: "Thank you for coming",
        type: MiniStoryWordType.CLAUSE
      },
      {
        kanji: "ご無{ぶ}沙{さ}汰{た}［する］",
        english: "Long silence・Not see/talk to each other for a while",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `A Chinese friend of mine came to Japan for the first time in a while. When my mother said, "Welcome, I'm glad you made it," my friend greeted her by saying, "Long time no see."`,
    audio: "T137.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 104,
  },
  "138": {
    id: "138",
    rubyStory: [
      {
        character: "",
        dialogue: "友人が中国へ帰るので、空{くう}港{こう}まで<見{み}送{おく}った>。<後{ご}日{じつ}>、友人から<小{こ}包{づつみ}>が届{とど}いた。<便{びん}箋{せん}>には、「<お世{せ}話{わ}になりました>。<どうか><お元{げん}気{き}で>」と書{か}かれていた。",
      },
    ],
    rubyWords: [
      {
        kanji: "見{み}送{おく}る",
        english: "See off・Send off",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "見{み}送{おく}り",
        english: "See-off・Sending off",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "後{ご}日{じつ}",
        english: "A few days later・Another day",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "小{こ}包{づつみ}",
        english: "Parcel・Package",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "便{びん}箋{せん}",
        english: "Letter paper・Writing paper",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "お世{せ}話{わ}になりました",
        english: "Thank you for your help/assistance",
        type: MiniStoryWordType.CLAUSE
      },
      {
        kanji: "どうか",
        english: "Please",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "お元{げん}気{き}で",
        english: "Please take care",
        type: MiniStoryWordType.CLAUSE
      },
    ],
    translation: `My friend returned to China, so I saw him off to the airport. Later, a package arrived from my friend. The letter on it read "Thank you for looking after me. Please take care.".`,
    audio: "T138.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 104,
  },
  "139": {
    id: "139",
    rubyStory: [
      {
        character: "",
        dialogue: "<親{しん}戚{せき}>の家を<訪{ほう}問{もん}したら>, <おじさん>がいた。あいさつをし、「<ところで>、<おばさん>は」と聞{き}くと、<別{べつ}々{べつ}に>暮{く}らしているらしい。<そういえば>、今{こ}年{とし}の<年{ねん}賀{が}状{じょう}>におばさんの名前がなかった。",
      },
    ],
    rubyWords: [
      {
        kanji: "親{しん}戚{せき}",
        english: "Relative",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "訪{ほう}問{もん}［する］",
        english: "Visit・To visit",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "おじ（さん）",
        english: "Uncle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ところで",
        english: "By the way",
        type: MiniStoryWordType.CONJUNCTION
      },
      {
        kanji: "おば（さん）",
        english: "Aunt",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "別{べつ}々{べつ}に",
        english: "Separately",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "そういえば",
        english: "Speaking of which",
        type: MiniStoryWordType.CLAUSE
      },
      {
        kanji: "年{ねん}賀{が}状{じょう}",
        english: "New Year's card",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `I went to visit a relatives house, and my uncle was there. I greeted him and asked "By the way, where's my aunt?," and it seems that they're now living separately. Speaking of which, this Year's New Year's card didn't have my aunt's name on it.`,
    audio: "T139.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 105,
  },
  "140": {
    id: "140",
    rubyStory: [
      {
        character: "",
        dialogue: "<長{ちょう}女{じょ}>は<生{なま}意{い}気{き}だ>が、<目{め}上{うえ}>の人に会うときちんと<おじぎする>。それが<長{ちょう}所{しょ}>だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "長{ちょう}女{じょ}",
        english: "Eldest daughter",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "次{じ}女{じょ}",
        english: "Second daughter",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "生{なま}意{い}気{き}な",
        english: "Sassy・Cheeky",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "目{め}上{うえ}",
        english: "Superior・Elder person",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "目{め}下{した}",
        english: "Subordinate・Junior person",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "おじぎ［する］",
        english: "Bow・To bow",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "長{ちょう}所{しょ}",
        english: "Strength・Strong point",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "短{たん}所{しょ}",
        english: "Weakness・Weak point",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `My eldest daughter is sassy, but when meeting older people, she bows. That's her strong point.`,
    audio: "T140.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 106,
  },
  "141": {
    id: "141",
    rubyStory: [
      {
        character: "",
        dialogue: "中学生の<姪{めい}>とは<仲{なか}>がいい。。日{ひ}が<暮{く}れたら>3年<ぶり>に<花{はな}火{び}>をしうと約{やく}束{そく}した。しかし、ライターを<切{き}らして>いて、できなかった。私は「<すまない>ね」と謝{あやま}った。",
      },
    ],
    rubyWords: [
      {
        kanji: "姪{めい}",
        english: "Niece",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "甥{おい}",
        english: "Nephew",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "仲{なか}",
        english: "Relationship",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "暮{く}れる",
        english: "To get dark・To end",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "〜ぶり",
        english: "In〜 (e.g. first time in 3 years)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "花{はな}火{び}",
        english: "Fireworks",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "切{き}らす",
        english: "To run out of",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "すまない",
        english: "I'm sorry・Remorseful",
        type: MiniStoryWordType.CLAUSE
      },
    ],
    translation: `I'm close with my niece who is a junior high school student. When the sun went down, I promised to light some fireworks for the first time in three years. However, my lighter was empty and I couldn't light them. I told her I was sorry.`,
    audio: "T141.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 106,
  },
  "142": {
    id: "142",
    rubyStory: [
      {
        character: "",
        dialogue: "田中先生の研{けん}究{きゅう}室{しつ}を<ノックした>が、留{る}守{す}のようだ。今日は大学を<お休{やす}みになって>いるのかもしれない。<伝{でん}言{ごん}>メモに、「<お目{め}にかかって>、先生の本{ほん}を<拝{はい}見{けん}したい>と思っています。明日また<訪{たず}ねます>」と書{か}いた。<氏{し}名{めい}>を書{か}くのも忘れなかった。",
      },
    ],
    rubyWords: [
      {
        kanji: "ノック［する］",
        english: "Knock・To knock",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "お休{やす}みになる",
        english: "To be absent",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "伝{でん}言{ごん}［する］",
        english: "Message・To leave a message",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "お目{め}にかかる",
        english: "To meet (humbly)",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "拝{はい}見{けん}［する］",
        english: "Seeing・To see (humbly)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "訪{たず}ねる",
        english: "To visit",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "氏{し}名{めい}",
        english: "Name (full name)",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `I knocked (on the door of) Tanaka-sensei's laboratory, but it seemed that no one was there. He may be absent from university today. On a memo, I wrote, "I would like to meet with you and see your book. I will come by again tomorrow." I also did not forget to write my name.`,
    audio: "T142.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 107,
  },
  "143": {
    id: "143",
    rubyStory: [
      {
        character: "",
        dialogue: "彼は<信{しん}じられる><人{にん}間{げん}>だ。<秘{ひ}密{みつ}>を守{まも}り、<離{はな}れて>いても<頼{たの}み>を聞{き}いてくれる。彼はみんなから<尊{そん}敬{けい}されて>いる。",
      },
    ],
    rubyWords: [
      {
        kanji: "信{しん}じる",
        english: "To believe・To trust",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "人{にん}間{げん}",
        english: "Human being",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "秘{ひ}密{みつ}",
        english: "Secret",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "離{はな}れる",
        english: "To separate・To leave",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "頼{たの}み",
        english: "Favor・Request",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "尊{そん}敬{けい}［する］",
        english: "Respect・To respect",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `He is a person people trust. He keeps secrets and listens to your favors even when he's away. He is respected by everyone.`,
    audio: "T143.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 108,
  },
  "144": {
    id: "144",
    rubyStory: [
      {
        character: "",
        dialogue: "<知{し}り合{あ}い>は、私の友人を<バーベキュー>に<誘{さそ}う><ついでに>、私を誘{さそ}った。私が「用{よう}事{じ}があって」と<断{ことわ}ったら>、グループチャットから<外{はず}された>。",
      },
    ],
    rubyWords: [
      {
        kanji: "知{し}り合{あ}い",
        english: "Acquaintance",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "知{し}り合{あ}う",
        english: "To get to know someone",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "バーベキュー",
        english: "Barbecue",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "誘{さそ}う",
        english: "To invite",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "誘{さそ}い",
        english: "Invitation",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ついでに",
        english: "At the same time・While you're at it",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "断{ことわ}る",
        english: "To refuse",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "外{はず}す",
        english: "To remove・To take off",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `An acquaintance invited my friend to barbecue and invited me as well. When I refused saying "I have some errands to do” I was removed from the group chat.`,
    audio: "T144.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 108,
  },
  "145": {
    id: "145",
    rubyStory: [
      {
        character: "",
        dialogue: "<彼{かの}女{じょ}>は<デート>中{ちゅう}、ずっと<不{ふ}機{き}嫌{げん}で>、<話{はな}しかけても><黙{だま}って>いるので、全{ぜん}然{ぜん}<楽{たの}しめなかった>。その後{ご}、彼{かの}女{じょ}との関{かん}係{けい}は自{し}然{ぜん}と<切{き}れた>。",
      },
    ],
    rubyWords: [
      {
        kanji: "彼{かの}女{じょ}",
        english: "She・girlfriend",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "彼{かれ}（氏{し}）",
        english: "He・boyfriend",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "デート［する］",
        english: "Date・To date",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "不{ふ}機{き}嫌{げん}な",
        english: "In a bad mood・Irritable",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "話{はな}しかける",
        english: "To talk to someone",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "黙{だま}る",
        english: "To be silent",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "楽{たの}しむ",
        english: "To enjoy・To have fun",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "切{き}れる",
        english: "To be ended・To be severed",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
    ],
    translation: `During our date, she was in a bad mood the whole time, staying silent even when I tried to talk to her, so I wasn't able to enjoy it at all. After that, my relationship with her organically ended.`,
    audio: "T145.mp3",
    topic: MiniStoryTopics.SOCIAL_LIFE,
    page: 109,
  },
  "146": {
    id: "146",
    rubyStory: [
      {
        character: "",
        dialogue: "<卓{たっ}球{きゅう}>の<団{だん}体{たい}><戦{せん}>が行{おこな}われて、中国が3<対{たい}>2で日本に勝{しょう}利{り}した。",
      },
    ],
    rubyWords: [
      {
        kanji: "卓{たっ}球{きゅう}",
        english: "Table tennis",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "団{だん}体{たい}",
        english: "Team・Group",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "〜戦{せん}",
        english: "Match・Game (suffix for competitions)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "〜対{たい}〜",
        english: "Match-up・Versus (e.g. A vs B)",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `A table tennis team competition was held, and China won over Japan 3 to 2.`,
    audio: "T146.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 112,
  },
  "147": {
    id: "147",
    rubyStory: [
      {
        character: "",
        dialogue: "<オリンピック>の<開{かい}会{かい}>式{しき}の<入{にゅう}場{じょう}><券{けん}>が抽{ちゅう}選{せん}で<当{あ}たった>。",
      },
    ],
    rubyWords: [
      {
        kanji: "オリンピック",
        english: "Olympics",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "開{かい}会{かい}［する］",
        english: "Opening ceremony・To have an opening ceremony",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "閉{へい}会{かい}［する］",
        english: "Closing ceremony・To have a closing ceremony",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "入{にゅう}場{じょう}［する］",
        english: "Entrance・To enter (a venue)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "退{たい}場{じょう}［する］",
        english: "Leaving・To leave (a venue)",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "券{けん}",
        english: "Ticket",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "チケット",
        english: "Ticket",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "当{あ}たる",
        english: "To hit・To win (a lottery)",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `I won the lottery for tickets for the Olympic Opening Ceremony.`,
    audio: "T147.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 112,
  },
  "148": {
    id: "148",
    rubyStory: [
      {
        character: "",
        dialogue: "あの有名な水{すい}泳{えい}<選{せん}手{しゅ}>も、子供の頃{ころ}、<浅{あさ}い>川で<溺{おぼ}れた>ことがあるらしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "選{せん}手{しゅ}",
        english: "Athlete・Player",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "浅{あさ}い",
        english: "Shallow",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "溺{おぼ}れる",
        english: "To drown・To be lost in",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `Even that famous swimmer once (almost) drowned in a river as a child.`,
    audio: "T148.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 113,
  },
  "149": {
    id: "149",
    rubyStory: [
      {
        character: "",
        dialogue: "<グラウンド>から<派{は}手{で}な><応{おう}援{えん}><歌{か}>や選{せん}手{しゅ}の<叫{さけ}ぶ>声{ごえ}が<盛{さか}んに>聞{き}こえてくる。",
      },
    ],
    rubyWords: [
      {
        kanji: "グラウンド",
        english: "Field (of play)・Ground",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "派{は}手{で}な",
        english: "Loud・Flashy",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "応{おう}援{えん}［する］",
        english: "Cheering・To cheer",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "～歌{か}",
        english: "Song (suffix)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "叫{さけ}ぶ",
        english: "To shout・To yell",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "盛{さか}んな",
        english: "Frequent・Active・Energetic",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
    translation: `From the field, loud cheers and the shouts of the players can be actively heard frequently.`,
    audio: "T149.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 113,
  },
  "150": {
    id: "150",
    rubyStory: [
      {
        character: "",
        dialogue: "<マラソン><コース>の<両{りょう}側{がわ}>に<ロープ>が張{は}られ、道{どう}路{ろ}の<中{ちゅう}央{おう}>を走るようになっている。",
      },
    ],
    rubyWords: [
      {
        kanji: "マラソン",
        english: "Marathon",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "コース",
        english: "Course・Route",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "両{りょう}側{がわ}",
        english: "Both sides",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ロープ",
        english: "Rope",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "中{ちゅう}央{おう}",
        english: "Center・Middle",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Rope is put on both sides of the marathon course, and people are supposed to run in the center of the road.`,
    audio: "T150.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 114,
  },
  "151": {
    id: "151",
    rubyStory: [
      {
        character: "",
        dialogue: "どんなに<才{さい}能{のう}>がある選{せん}手{しゅ}でも、<トレーニング>を続{つづ}けなければ、<記{き}録{ろく}>を<伸{の}ばす>ことはできない。",
      },
    ],
    rubyWords: [
      {
        kanji: "才{さい}能{のう}",
        english: "Talent",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "トレーニング［する］",
        english: "Training・To train",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "記{き}録{ろく}［する］",
        english: "Record・To record",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "伸{の}ばす",
        english: "To improve・To extend・To stretch",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "伸{の}びる",
        english: "To be extended・To be stretched",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
    ],
    translation: `No matter how talented athletes may be, if they do not continue training, they won't be able to improve their records.`,
    audio: "T151.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 114,
  },
  "152": {
    id: "152",
    rubyStory: [
      {
        character: "",
        dialogue: "サッカーの世{せ}界{かい}一{いち}を決{き}める<大{たい}会{かい}>がカリフォルニア<州{しゅう}>ロサンゼルスでで行{おこな}われていて、多くの人が<注{ちゅう}目{もく}して>いる。",
      },
    ],
    rubyWords: [
      {
        kanji: "大{たい}会{かい}",
        english: "Tournament",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "州{しゅう}",
        english: "State (of the US)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "注{ちゅう}目{もく}［する］",
        english: "Attention・To pay attention",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `A tournament that determines the best in the world of soccer will be held in Los Angeles, California, and many people are paying attention to it.`,
    audio: "T152.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 115,
  },
  "153": {
    id: "153",
    rubyStory: [
      {
        character: "",
        dialogue: "<オリンピック>で<体{たい}操{そう}>の日本<代{だい}表{ひょう}>が<金{きん}>、<銀{ぎん}>、銅{どう}の表{ひょう}彰{しょう}<台{だい}>を<独{どく}占{せん}した>。",
      },
    ],
    rubyWords: [
      {
        kanji: "体{たい}操{そう}［する］",
        english: "Gymnastics・To do gymnastics",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "代{だい}表{ひょう}［する］",
        english: "Representation・To represent",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "金{きん}",
        english: "Gold",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "金{きん}色{いろ}",
        english: "Golden color",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "銀{ぎん}",
        english: "Silver",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "銀{ぎん}色{いろ}",
        english: "Silver color",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "〜台{だい}",
        english: "〜Stand・Podium (suffix for ranking)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "独{どく}占{せん}［する］",
        english: "Monopoly・To monopolize",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `The Japanese national representative in gymnastics at the Olympics monopolized the gold, silver and bronze podium.`,
    audio: "T153.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 115,
  },
  "154": {
    id: "154",
    rubyStory: [
      {
        character: "",
        dialogue: "<体{たい}育{いく}>の授{じゅ}業{ぎょう}でバレーボールをやった。1<セット>目{め}は<点{てん}>を取{と}ることができたが、その後{あと}は一{いっ}方{ぽう}的{てき}に負{ま}けてしまた。試{し}合{あい}の後{ご}、<両{りょう}>チームが<握{あく}手{しゅ}>した。",
      },
    ],
    rubyWords: [
      {
        kanji: "体{たい}育{いく}",
        english: "Physical education",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "体{たい}育{いく}館{かん}",
        english: "Gymnasium",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "〜セット",
        english: "〜Set (suffix for sets in sports)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "点{てん}",
        english: "Point",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "両{りょう}～",
        english: "Both～",
        type: MiniStoryWordType.PREFIX
      },
      {
        kanji: "握{あく}手{しゅ}［する］",
        english: "Handshake・To shake hands",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `We played volleyball in my physical education class. We scored some points in the first set, but after that, we lost one-sidedly. After the game, both teams shook hands.`,
    audio: "T154.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 116,
  },
  "155": {
    id: "155",
    rubyStory: [
      {
        character: "",
        dialogue: "雨で中止の場合でも、大{たい}会{かい}<当{とう}日{じつ}>にチケット代{だい}を<払{はら}い戻{もど}す>ことはできません。",
      },
    ],
    rubyWords: [
      {
        kanji: "当{とう}日{じつ}",
        english: "The actual day of",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "当{とう}日{じつ}券{けん}",
        english: "Same-day ticket",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "払{はら}い戻{もど}す",
        english: "To refund",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `Even in the event of cancellation due to rainy weather, you will not be able to get a refund for ticket fees on the day of the tournament.`,
    audio: "T155.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 116,
  },
  "156": {
    id: "156",
    rubyStory: [
      {
        character: "",
        dialogue: "球{きゅう}場{じょう}では多くの観{かん}客{きゃく}がグローブを手{て}に<はめ>、ホームランのボールを捕{と}ろうとしている。",
      },
    ],
    rubyWords: [
      {
        kanji: "はめる",
        english: "To fit (something) into (something)",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "ボール",
        english: "Ball",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "球{たま}",
        english: "Ball",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "捕{と}る",
        english: "To catch・To take",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `In the stadium, many spectators have gloves on their hands and are trying to catch home run balls.`,
    audio: "T156.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 117,
  },
  "157": {
    id: "157",
    rubyStory: [
      {
        character: "",
        dialogue: "マラソン選{せん}手{しゅ}が1<着{ちゃく}>で<ゴールする><姿{すがた}>を見て<感{かん}動{どう}した>。<たまたま><録{ろく}画{が}して>いたので何{なん}度{ど}も見た。",
      },
    ],
    rubyWords: [
      {
        kanji: "～着{ちゃく}",
        english: "～Place (suffix for ranking)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "ゴール［する］",
        english: "Goal・To reach the goal",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "姿{すがた}",
        english: "Figure・Appearance",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "感{かん}動{どう}［する］",
        english: "Emotion・To be moved",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "たまたま",
        english: "Just happened to・By chance",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "録{ろく}画{が}［する］",
        english: "Recording・To record",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
    ],
    translation: `I was moved seeing the marathon runner cross the goal in first place. I just happened to record it, so I watched it again and again.`,
    audio: "T157.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 117,
  },
  "158": {
    id: "158",
    rubyStory: [
      {
        character: "",
        dialogue: "柔{じゅう}道{どう}の48キロ<級{きゅう}>の日本選手が試{し}合{あい}中{ちゅう}に<肩{かた}>を<負{ふ}傷{しょう}した>が、見{み}事{ごと}に金{きん}<メダル>を<獲{かく}得{とく}した>。",
      },
    ],
    rubyWords: [
      {
        kanji: "～級{きゅう}",
        english: "Class",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "肩{かた}",
        english: "Shoulder",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "負{ふ}傷{しょう}［する］",
        english: "Injury・To be injured",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "メダル",
        english: "Medal",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "獲{かく}得{とく}［する］",
        english: "Acquisition・To acquire",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
    ],
    translation: `Judo's 48 kg-class Japanese athlete injured their shoulders during the match but still impressively won a gold medal.`,
    audio: "T158.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 118,
  },
  "159": {
    id: "159",
    rubyStory: [
      {
        character: "",
        dialogue: "私は<ランニング>が<苦{にが}手{て}だ>。しかし<コーチ>が、ランニングの<効{こう}果{か}>は大きいと言ったので、走{はし}り続{つづ}けている。",
      },
    ],
    rubyWords: [
      {
        kanji: "ランニング［する］",
        english: "Running・To run",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "苦{にが}手{て}な",
        english: "Poor at・Weak in・Not good at",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "コーチ",
        english: "Coach",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "効{こう}果{か}",
        english: "Effect・Effectiveness",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `I'm no good at running. But my coach said that my running results were significant, so I keep running.`,
    audio: "T159.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 118,
  },
  "160": {
    id: "160",
    rubyStory: [
      {
        character: "",
        dialogue: "フリーキックの<天{てん}才{さい}>と呼{よ}ばれる選手がボールを<蹴{け}った>。右{みぎ}に大きく<曲{ま}げよう>としたが、<回{かい}転{てん}しなかった>ので、まっすぐ飛{と}んでいってしまった。",
      },
    ],
    rubyWords: [
      {
        kanji: "天{てん}才{さい}",
        english: "Genius",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "蹴{け}る",
        english: "To kick",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "曲{ま}げる",
        english: "To curve・To bend",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "回{かい}転{てん}［する］",
        english: "Rotation・To rotate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
    ],
    translation: `The player called the free kick genius kicked the ball. She tried to curve the ball wide to the right, but the ball didn't spin, so it flew straight.`,
    audio: "T160.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 119,
  },
  "161": {
    id: "161",
    rubyStory: [
      {
        character: "",
        dialogue: "手{て}続{つづ}きに<ミス>があって、予{よ}算{さん}が<カットされて>しまい。<次{じ}回{かい}>の大{たい}会{かい}に<出{しゅつ}場{じょう}できなく>なってしまった。",
      },
    ],
    rubyWords: [
      {
        kanji: "ミス［する］",
        english: "Mistake・To make a mistake",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "カット［する］",
        english: "Cut・To cut",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "次{じ}回{かい}",
        english: "Next time",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "出{しゅつ}場{じょう}［する］",
        english: "Participation・To participate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
    ],
    translation: `As there was a mistake in the procedure, the budget was cut and I will now no longer be able to participate in the next tournament.`,
    audio: "T161.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 119,
  },
  "162": {
    id: "162",
    rubyStory: [
      {
        character: "",
        dialogue: "<プロ>野{や}球{きゅう}では、7回{かい}をラッキー7{セブン}と呼{よ}ぶ。ラッキー7{セブン}の<攻{こう}撃{げき}>前{まえ}には、<ファン>は<風{ふう}船{せん}>を飛{と}ばしたり、<ビニール>傘{かさ}を使って応{おう}援{えん}したりする。",
      },
    ],
    rubyWords: [
      {
        kanji: "プロ",
        english: "Professional",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "攻{こう}撃{げき}［する］",
        english: "Attack・To attack",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE]
      },
      {
        kanji: "ファン",
        english: "Fan",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "風{ふう}船{せん}",
        english: "Balloon",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ビニール",
        english: "Vinyl",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ビニール袋{ぶくろ}",
        english: "Plastic bag",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `In professional baseball, the seventh inning is called lucky 7. Before their team goes to bat in the lucky 7, fans will do things like let loose balloons or cheer using vinyl umbrellas.`,
    audio: "T162.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 120,
  },
  "163": {
    id: "163",
    rubyStory: [
      {
        character: "",
        dialogue: "<相{す}撲{もう}>は<ルール>が簡{かん}単{たん}だ。<それに><結{けっ}果{か}>が分かりやすいので、人気がある。",
      },
    ],
    rubyWords: [
      {
        kanji: "相{す}撲{もう}",
        english: "Sumo wrestling",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ルール",
        english: "Rules",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "それに",
        english: "In addition",
        type: MiniStoryWordType.CONJUNCTION
      },
      {
        kanji: "結{けっ}果{か}",
        english: "Result",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The rules of sumo wrestling are simple. In addition, the results are easy to understand, so it's popular.`,
    audio: "T163.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 120,
  },
  "164": {
    id: "164",
    rubyStory: [
      {
        character: "",
        dialogue: "ポールを<追{お}った>選手同{どう}士{し}がかなりの<スピード>でぶつかった。ぶつかった脚{あし}はすぐに<動{うご}かさず>、<スプレー>をかけて冷{ひ}やし、様{よう}子{す}を見た。",
      },
    ],
    rubyWords: [
      {
        kanji: "追{お}う",
        english: "to chase",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "スピード",
        english: "speed",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "動{うご}かす",
        english: "to move",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "スプレー",
        english: "spray",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The players who were chasing the ball collided at a considerable speed. They kept their legs that had collided still, and they sprayed them to cool them and waited to see how things turned out.`,
    audio: "T164.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 121,
  },
  "165": {
    id: "165",
    rubyStory: [
      {
        character: "",
        dialogue: "全{まった}く<点{てん}数{すう}>が入{はい}らず、選手は汗{あせ}ばかり<かいて>いる。こんなときは<ベンチ>からの指{し}示{じ}が重{じゅう}要{よう}となる。",
      },
    ],
    rubyWords: [
      {
        kanji: "点{てん}数{すう}",
        english: "Score",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "かく",
        english: "To perspire・To sweat",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "ベンチ",
        english: "Bench",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `No one is scoring, and the players are covered in sweat. In cases like this, giving instructions from the bench is important.`,
    audio: "T165.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 121,
  },
  "166": {
    id: "166",
    rubyStory: [
      {
        character: "",
        dialogue: "<リーダー>が<本{ほん}気{き}に>なった。<講{こう}習{しゅう}>に<申{もう}し込{こ}んで><競{きょう}争{そう}><力{りょく}>を高{たか}めようとしている。",
      },
    ],
    rubyWords: [
      {
        kanji: "リーダー",
        english: "Leader",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "本{ほん}気{き}な",
        english: "Serious",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "講{こう}習{しゅう}",
        english: "Lecture・Course",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "申{もう}し込{こ}む",
        english: "To apply",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "申{もう}し込{こ}み",
        english: "Application",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "競{きょう}争{そう}［する］",
        english: "Competition・To compete",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "〜カ{りょく}",
        english: "〜ability",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `The leader became serious. She is applying for courses and trying to increase her competitiveness.`,
    audio: "T166.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 122,
  },
  "167": {
    id: "167",
    rubyStory: [
      {
        character: "",
        dialogue: "今回は予{よ}想{そう}が外{はず}れ、<優{ゆう}勝{しょう}した><チーム>を<当{あ}てる>ことができなかった。",
      },
    ],
    rubyWords: [
      {
        kanji: "優{ゆう}勝{しょう}［する］",
        english: "Victory・To win a championship",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "チーム",
        english: "Team",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "当{あ}てる",
        english: "To hit・To guess",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `This time, my expectations were wrong, and I was unable to guess the winning team.`,
    audio: "T167.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 122,
  },
  "168": {
    id: "168",
    rubyStory: [
      {
        character: "",
        dialogue: "<会{かい}費{ひ}>を支{し}払{はら}うことで、有{ゆう}名{めい}なサッカーチームのファン<クラブ>に<参{さん}加{か}する>ことができる。",
      },
    ],
    rubyWords: [
      {
        kanji: "会{かい}費{ひ}",
        english: "Membership fee",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "クラブ",
        english: "Club",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "参{さん}加{か}［する］",
        english: "Participation・To participate",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `By paying the membership fee, you can participate in the famous football team fan club.`,
    audio: "T168.mp3",
    topic: MiniStoryTopics.SPORTS,
    page: 123,
  },
  "169": {
    id: "169",
    rubyStory: [
      {
        character: "A",
        dialogue: "この<金{きん}属{ぞく}>の棒{ぼう}は何をするためのものですか。",
      },
      {
        character: "B",
        dialogue: "ああ、これは動物の体{たい}重{じゅう}を<確{かく}認{にん}>するためのものですよ。",
      },
      {
        character: "A",
        dialogue: "へえ～、これで測{はか}るんですね。",
      },
      {
        character: "B",
        dialogue: "あとで園{えん}長{ちょう}に<許{きょ}可{か}>をもらったら、試{ため}しに使ってみましょうか。",
      },
    ],
    rubyWords: [
      {
        kanji: "金{きん}属{ぞく}",
        english: "Metal",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "確{かく}認{にん}［する］",
        english: "Confirmation・To confirm",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "許{きょ}可{か}［する］",
        english: "Permission・To permit",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `A: What does this metal pole do?\nB: Oh, this is to check the weight of animals.\nA: Wow, you measure that with this.\nB: If we get permission from the head of the zoo later, why don't we try using it?`,
    audio: "T169.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 126,
  },
  "170": {
    id: "170",
    rubyStory: [
      {
        character: "",
        dialogue: "あのおじいさんは毎朝<釣{つ}り>に行く前に必ずこの公園に来て、7<羽{わ}>の鳩{はと}に<バケツ>いっぱいの<豆{まめ}>を<やる>ことを日{にっ}課{か}にしている。",
      },
    ],
    rubyWords: [
      {
        kanji: "釣{つ}り",
        english: "Fishing",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "釣{つ}る",
        english: "To fish",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "～羽{わ}",
        english: "Counter for birds",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "バケツ",
        english: "Bucket",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "豆{まめ}",
        english: "Beans",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "やる",
        english: "To do・To give (to pets, plants, etc.)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `Every morning, that old man always comes to this park before going fishing, and his daily routine is to give seven pigeons a whole bucket of beans.`,
    audio: "T170.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 126,
  },
  "171": {
    id: "171",
    rubyStory: [
      {
        character: "A",
        dialogue: "小{しょう}動{どう}物{ぶつ}<館{かん}>が休{きゅう}館{かん}になってましたが、<なんで>でしょうかね。",
      },
      {
        character: "B",
        dialogue: "ああ、リスに続{つづ}いて、昨{さく}夜{や}、うさぎが死んでしまったみたいです。",
      },
      {
        character: "A",
        dialogue: "そうですか。みんなで<かわいがって>いたのに、残{ざん}念{ねん}ですね。つらいことは<重{かさ}なる>ものですね。",
      },
    ],
    rubyWords: [
      {
        kanji: "～館{かん}",
        english: "～Building",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "なんで",
        english: "Why",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "かわいがる",
        english: "Adore・To be affectionate towards",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "重{かさ}なる",
        english: "Overlap・To pile up・To happen one after another",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "重{かさ}ねる",
        english: "To pile up・To stack",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `A: The small animal building is closed, but I wonder why.\nB: Oh, I heard that a rabbit died last night followed by a squirrel.\nA: Really? That's a pity, since they were so adored by everyone. Bad things tend to happen one after the other.`,
    audio: "T171.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 127,
  },
  "172": {
    id: "172",
    rubyStory: [
      {
        character: "A",
        dialogue: "見て見て、あの<猿{さる}>、ちっちゃい<枕{まくら}>を<抱{だ}いて>る。",
      },
      {
        character: "B",
        dialogue: "そうそう、寝るときに枕{まくら}を使うから、「ピロー」って名前らしいよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "猿{さる}",
        english: "Monkey",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "枕{まくら}",
        english: "Pillow",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "抱{だ}く",
        english: "To carry・To hold (in arms)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `A: Look, look. That monkey is carrying a tiny pillow.\nB: Yeah, it uses a pillow when it goes to sleep, so they named it Pillow.`,
    audio: "T172.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 127,
  },
  "173": {
    id: "173",
    rubyStory: [
      {
        character: "A",
        dialogue: " あの<からす>、ずっとあの<枝{えだ}>の上で<じっとして>いるね。",
      },
      {
        character: "B",
        dialogue: "ははは、あれ<本{ほん}物{もの}>じゃないよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "からす",
        english: "Crow",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "枝{えだ}",
        english: "Branch",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "じっとする",
        english: "To sit still",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE
      },
      {
        kanji: "本{ほん}物{もの}",
        english: "Real thing",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: That crow has been sitting still on that branch for a while.\nB: Hahaha, it's not real.`,
    audio: "T173.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 128,
  },
  "174": {
    id: "174",
    rubyStory: [
      {
        character: "A",
        dialogue: "息{むす}子{こ}さん、<成{せい}長{ちょう}した>ね。そのうち、お父さんの背{せ}も<追{お}い越{こ}し>そうね。",
      },
      {
        character: "B",
        dialogue: "そうなの。ちょっと前までは子どもだったのに、そのうち就{しゅう}職{しょく}や結{けっ}婚{こん}で家{いえ}を出{で}る日{ひ}が来{く}るなんて、想{そう}像{ぞう}するだけで<過{おそ}ろしい>わ。",
      },
      {
        character: "A",
        dialogue: "あはは。<冗{じょう}談{だん}>でしょ。かわいい子には旅{たび}をさせろって言{い}うじゃない。",
      },
    ],
    rubyWords: [
      {
        kanji: "成{せい}長{ちょう}［する］",
        english: "Growth・To grow",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "追{お}い越{こ}す",
        english: "To be more than・Overtake",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "恐{おそ}ろしい",
        english: "Terrible",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "冗{じょう}談{だん}",
        english: "Joke",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ジョーク",
        english: "Joke",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Your son has grown. Pretty soon, he'll be even taller than his father.\nB: That's right. Though he was a child up until recently, now just thinking about the fact that he'll soon have to leave the house to find work and get married is terrifying.\nA: Ahaha. You're joking, right? Don't they say, if you love something, you have to let it go?`,
    audio: "T174.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 128,
  },
  "175": {
    id: "175",
    rubyStory: [
      {
        character: "",
        dialogue: "<生{せい}物{ぶつ}>の授{じゅ}業{ぎょう}で、<真{ま}っ赤{か}な>羽{はね}に黒{くろ}い<模{も}様{よう}>がある<虫{むし}>を観{かん}察{さつ}した。虫は苦手だったが、いろんな<特{とく}徴{ちょう}>をノートにまとめる作{さ}業{ぎょう}が面{おも}白{しろ}くて、いつの間{ま}にか好きに<なって>いた。",
      },
    ],
    rubyWords: [
      {
        kanji: "生{せい}物{ぶつ}",
        english: "Biology・Living things",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "真{ま}っ赤{か}な",
        english: "Deep red",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "真{ま}っ青{さお}な",
        english: "Deep blue",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "模{も}様{よう}",
        english: "Pattern",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "水{みず}玉{たま}模{も}様{よう}",
        english: "Polka dot pattern",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "虫{むし}",
        english: "Insect",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "特{とく}徴{ちょう}",
        english: "Characteristic",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "なる",
        english: "To become",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE
      },
    ],
    translation: `In biology class, we observed an insect that had deep red wings with a black pattern. I was no good with insects, but it was interesting to write down their various characteristics in our notes and I soon came to like them.`,
    audio: "T175.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 129,
  },
  "176": {
    id: "176",
    rubyStory: [
      {
        character: "",
        dialogue: "私は<植{しょく}物{ぶつ}>を見るのは好きだが育{そだ}てるのは苦手だ。この間{あいだ}も、水をやるのを忘れてしまって、観{かん}葉{よう}植{しょく}物{ぶつ}がすっかり<枯{か}れて>しまった。<かわいそうな>ことをした。",
      },
    ],
    rubyWords: [
      {
        kanji: "植{しょく}物{ぶつ}",
        english: "Plant",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "枯{か}れる",
        english: "To wither",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "かわいそうな",
        english: "Poor thing・Pitiful",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
    translation: `I like to look at plants, but I'm not good at raising them. Just a while back, I forgot to water my houseplant, and it completely withered away. That poor thing.`,
    audio: "T176.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 130,
  },
  "177": {
    id: "177",
    rubyStory: [
      {
        character: "",
        dialogue: "動物を<飼{か}う>ことは<命{いのち}>を預{あず}かることである。最{さい}後{ご}まで<責{せき}任{にん}>を持って<育{そだ}て>ることができない人に動物を飼{か}う資{し}格{かく}はない。",
      },
    ],
    rubyWords: [
      {
        kanji: "飼{か}う",
        english: "To own (a pet)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "命{いのち}",
        english: "Life",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "責{せき}任{にん}",
        english: "Responsibility",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "責{せき}任{にん}者{しゃ}",
        english: "Person responsible",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "育{そだ}てる",
        english: "To raise (a child/pet)",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "育{そだ}つ",
        english: "To be raised",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `Owning an animal means being responsible for a life. People who cannot responsibly raise one to the very end are not qualified to own an animal.`,
    audio: "T177.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 130,
  },
  "178": {
    id: "178",
    rubyStory: [
      {
        character: "",
        dialogue: "日本は、世界の中でも<水{すい}族{ぞく}館{かん}>が多いことで有名だ。水{すい}族{ぞく}館{かん}ではたくさんの<種{しゅ}類{るい}>の魚{さかな}たちを見ることができるだけでなく、イルカのショーを見たり、ペンギンやサメに<餌{えさ}>をやることもできる。",
      },
    ],
    rubyWords: [
      {
        kanji: "水{すい}族{ぞく}館{かん}",
        english: "Aquarium",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "種{しゅ}類{るい}",
        english: "Type・Kind",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "餌{えさ}",
        english: "Feed",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Japan is famous around the world for having many aquariums. At these aquariums, not only can you see many types of fish, but you can also watch dolphin shows and even feed penguins and sharks.`,
    audio: "T178.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 131,
  },
  "179": {
    id: "179",
    rubyStory: [
      {
        character: "A",
        dialogue: "わあ、部屋の中にカメムシがいる。",
      },
      {
        character: "B",
        dialogue: "つぶすと<臭{くさ}い>から、つぶさないように<ティッシュ>で<捕{つか}まえて>窓{まど}の外{そと}へ出{だ}して。",
      },
    ],
    rubyWords: [
      {
        kanji: "臭{くさ}い",
        english: "Stink・Odor",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "ティッシュ（ペーパー）",
        english: "Tissue (paper)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "トイレットペーパー",
        english: "Toilet paper",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "捕{つか}まえる",
        english: "To catch",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "捕{つか}まる",
        english: "To be caught",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `A: Oh no, there's a stink bug in the room.\nB: Crushing it only makes it stink, so catch it with a tissue without crushing it and throw it out the window.`,
    audio: "T179.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 131,
  },
  "180": {
    id: "180",
    rubyStory: [
      {
        character: "A",
        dialogue: "どうしたんですか。大丈夫ですか。",
      },
      {
        character: "B",
        dialogue: "あ、すみません。<立{た}ち上{あ}がろう>とした<際{さい}>に、<突{とつ}然{ぜん}>目{め}の前が真{ま}っ暗{くら}になって……。",
      },
      {
        character: "A",
        dialogue: "えっと、まずはこの<平{たい}らな>ところに<そっと>座{すわ}ってください。ゆっくりでいいですよ。今、救{きゅう}急{きゅう}車{しゃ}呼{よ}びますね。",
      },
    ],
    rubyWords: [
      {
        kanji: "立{た}ち上{あ}がる",
        english: "To stand up",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "立{た}ち上{あ}げる",
        english: "To build",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "際{さい}",
        english: "When・(In the) event・Occasion・Situation",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "突{とつ}然{ぜん}",
        english: "Suddenly",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "平{たい}らな",
        english: "Flat",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "そっと",
        english: "Gently・Quietly",
        type: MiniStoryWordType.ADVERB
      },
    ],
    translation: `A: What happened? Are you okay?\nB: I'm sorry. I tried to stand up, and suddenly everything went black...\nA: Well, first please slowly sit down on this flat surface. Just take your time. I'll call an ambulance right now.`,
    audio: "T180.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 132,
  },
  "181": {
    id: "181",
    rubyStory: [
      {
        character: "",
        dialogue: "<天{てん}井{じょう}>にカビが<生{は}えて>いるのを<発{はっ}見{けん}して>、思{おも}わず大きな声を出{だ}してしまった。",
      },
    ],
    rubyWords: [
      {
        kanji: "天{てん}井{じょう}",
        english: "Ceiling",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "生{は}える",
        english: "To grow",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "発{はっ}見{けん}［する］",
        english: "To discover",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `I found mold on the ceiling, and unintentionally screamed loudly.`,
    audio: "T181.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 132,
  },
  "182": {
    id: "182",
    rubyStory: [
      {
        character: "",
        dialogue: "隣{となり}の家の子は<おとなしい><性{せい}格{かく}>で、あまり<感{かん}情{じょう}的{てき}な>ところを見たことがない。だけど、私に気{き}がつくといつも<立{た}ち止{ど}まって><にっこりと>笑{わら}ってくれる。",
      },
    ],
    rubyWords: [
      {
        kanji: "おとなしい",
        english: "Gentle・Quiet",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "性{せい}格{かく}",
        english: "Personality",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "感{かん}情{じょう}的{てき}な",
        english: "Emotional",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "感{かん}情{じょう}",
        english: "Emotion",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "立{た}ち止{ど}まる",
        english: "To stop (in place)",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "にっこり（と）",
        english: "Sweetly・Grinningly・ With a smile",
        type: MiniStoryWordType.ADVERB
      },
    ],
    translation: `The child in the house next door has a gentle personality, and I haven't really seen them being that emotional. But whenever they notice me, they always stop and smile.`,
    audio: "T182.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 133,
  },
  "183": {
    id: "183",
    rubyStory: [
      {
        character: "A",
        dialogue: "見て見て。<象{ぞう}>の<親{おや}子{こ}>が鼻{はな}を合{あ}わせて遊{あそ}んでる。",
      },
      {
        character: "B",
        dialogue: "本当だ。自由に鼻{はな}を動{うご}かせるんだね。",
      },
      {
        character: "A",
        dialogue: "うん、象{ぞう}の鼻{はな}って<骨{ほね}>がないらしいよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "象{ぞう}",
        english: "Elephant",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "親{おや}子{こ}",
        english: "Parent and child",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "骨{ほね}",
        english: "Bone",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `A: Look, look. Adult elephants and its child putting their noses together and playing.\nB: Oh, you're right. They can move their noses so freely,\nA: Yeah, I hear elephant's noses don't have any bones.`,
    audio: "T183.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 133,
  },
  "184": {
    id: "184",
    rubyStory: [
      {
        character: "",
        dialogue: "毎朝、愛{あい}犬{けん}の毛{け}を<ブラシ>でとかして、<爪{つめ}>を切{き}っている。しっぽを<振{ふ}って>喜{よろこ}んでくれる姿{すがた}がとてもかわいく、<心{こころ}>が癒{いや}される。",
      },
    ],
    rubyWords: [
      {
        kanji: "ブラシ",
        english: "Brush",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "爪{つめ}",
        english: "Nail",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "振{ふ}る",
        english: "To wag・To shake",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "心{こころ}",
        english: "Heart",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Every morning, I brush my pet's dog hair with a brush and cut its nails. Seeing its tail wag in happiness is so cute, and it warms my heart.`,
    audio: "T184.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 134,
  },
  "185": {
    id: "185",
    rubyStory: [
      {
        character: "",
        dialogue: "<幼{よう}児{じ}>は集{しゅう}団{だん}生{せい}活{かつ}を通{とお}して、相手の気持ちを<理{り}解{かい}したり>、<仲{なか}間{ま}>を<助{たす}ける>ことを学{まな}ぶ。",
      },
    ],
    rubyWords: [
      {
        kanji: "幼{よう}児{じ}",
        english: "Toddler",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "理{り}解{かい}［する］",
        english: "Understanding・To understand",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "仲{なか}間{ま}",
        english: "Friend",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "助{たす}ける",
        english: "To help・save",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "助{たす}かる",
        english: "To be helped・To be saved",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `Through communal living, toddlers learn to understand other people's feelings and how to help them.`,
    audio: "T185.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 134,
  },
  "186": {
    id: "186",
    rubyStory: [
      {
        character: "A",
        dialogue: "最近、犬{いぬ}を飼{か}いたいと思ってるんだけど。",
      },
      {
        character: "B",
        dialogue: "そうなんだ。<大{おお}型{がた}>犬{けん}と<小{こ}型{がた}>犬{けん}、どっち？",
      },
      {
        character: "A",
        dialogue: "うーん、育{そだ}てやすい方{ほう}がいいから小{こ}型{がた}犬{けん}かな。",
      },
      {
        character: "B",
        dialogue: "案{あん}外{がい}、<大{おお}型{がた}>犬{けん}の方{ほう}がおとなしくて育{そだ}てやく、小{こ}型{がた}犬{けん}の方{ほう}がよく<ほえる>らしいよ。",
      },
    ],
    rubyWords: [
      {
        kanji: "大{おお}型{がた}",
        english: "Large breed・Large size",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "小{こ}型{がた}",
        english: "Small breed・Small size",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ほえる",
        english: "To bark",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
    ],
    translation: `A: I've been thinking about getting a dog recently.\nB: Really? Which kind, a large dog or a small dog?\nA: Hmm, maybe a small dog since I prefer one that's easy to raise.\nB: Large dogs are actually surprisingly quieter and easy to raise, and I hear small dogs tend to bark more.`,
    audio: "T186.mp3",
    topic: MiniStoryTopics.ANIMALS,
    page: 135,
  },
  "187": {
    id: "187",
    rubyStory: [
      {
        character: "",
        dialogue: "今住{す}んでいる<マンション>の<ベランダ>は南{みなみ}<向{む}き>で、<日{ひ}当{あ}たり>がいい。<和{わ}室{しつ}>だけではなく、<洋{よう}室{しつ}>も<立{りっ}派{ぱ}>だ。しかもエントランス<ホール>が広{ひろ}い。",
      },
    ],
    rubyWords: [
      {
        kanji: "マンション",
        english: "Apartment",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ベランダ",
        english: "Balcony",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～向{む}き",
        english: "Facing ~",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "日{ひ}当{あ}たり",
        english: "Sunlight exposure",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "和{わ}室{しつ}",
        english: "Japanese-style room",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "洋{よう}室{しつ}",
        english: "Western-style room",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "立{りっ}派{ぱ}な",
        english: "Splendid",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "ホール",
        english: "Hall",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The balcony of the apartment I'm living in now is south facing and sunny. Both its Japanese-style room and Western-style room are splendid. Moreover, the entrance hall is spacious.`,
    audio: "T187.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 138,
  },
  "188": {
    id: "188",
    rubyStory: [
      {
        character: "",
        dialogue: "家{いえ}の壁{かべ}の色{いろ}を<塗{ぬ}り>直{なお}し、<門{もん}>の<電{でん}球{きゅう}>を取{と}り替{か}えたら、明{あか}るくなった。",
      },
    ],
    rubyWords: [
      {
        kanji: "塗{ぬ}る",
        english: "To paint",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "門{もん}",
        english: "Gate",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "電{でん}球{きゅう}",
        english: "Light bulb",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `I repainted the walls of my house and changed the light bulbs at the gate and it got brighter.`,
    audio: "T188.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 138,
  },
  "189": {
    id: "189",
    rubyStory: [
      {
        character: "",
        dialogue: "<寮{りょう}>の<リビング>は狭{せま}く、<ソファー>を<斜{なな}め>にしか置{お}けない。しかし、<低{てい}><家{や}賃{ちん}>なので、<わがまま>は言{い}えない。<我{が}慢{まん}>するしかない。",
      },
    ],
    rubyWords: [
      {
        kanji: "寮{りょう}",
        english: "Dormitory",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "リビング",
        english: "Living room",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ソファー",
        english: "Sofa",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "斜{なな}め",
        english: "Diagonal",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "低{てい}～",
        english: "Low ~",
        type: MiniStoryWordType.PREFIX
      },
      {
        kanji: "家{や}賃{ちん}",
        english: "Rent",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "わがまま",
        english: "Complaint・Selfishness",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "我{が}慢{まん}［する］",
        english: "Endurance・Bear・To endure・To bear",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `The dorm living room is cramped and the sofa can only be arranged diagonally. However, it's low rent, so I can't complain. I've no choice but to bear it.`,
    audio: "T189.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 139,
  },
  "190": {
    id: "190",
    rubyStory: [
      {
        character: "",
        dialogue: "この家は、大{たい}<都{と}市{し}>にも<地{ち}方{ほう}都{と}市{し}>にも<距{きょ}離{り}>が近{ちか}い。<最{さい}高{こう}>だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "都{と}市{し}",
        english: "City",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "地{ち}方{ほう}都{と}市{し}",
        english: "Local city",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "地{ち}方{ほう}",
        english: "Region",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "距{きょ}離{り}",
        english: "Distance",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "最{さい}高{こう}",
        english: "Best",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `This house is close in distance to both a large city and the local cities, It's the best.`,
    audio: "T190.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 139,
  },
  "191": {
    id: "191",
    rubyStory: [
      {
        character: "",
        dialogue: "<出{しゅっ}勤{きん}>する途{と}中{ちゅう}、<踏{ふみ}切{きり}>の前{まえ}で車{くるま}が動{うご}かなくなった。近{ちか}くに<住{じゅう}民{みん}>はいない。<確{たし}か>、近{ちか}くに<消{しょう}防{ぼう}署{しょ}>があったはずだ。<のんびりして>はいられない。。行{い}ってみよう。",
      },
    ],
    rubyWords: [
      {
        kanji: "出{しゅっ}勤{きん}［する］",
        english: "Commuting to work・To commute to work",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "踏{ふみ}切{きり}",
        english: "Railroad crossing",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "住{じゅう}民{みん}",
        english: "Resident",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "確{たし}か",
        english: "Sure・Certain",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "消{しょう}防{ぼう}署{しょ}",
        english: "Fire station・Fire department",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "消{しょう}防{ぼう}車{しゃ}",
        english: "Fire truck",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "消{しょう}防{ぼう}士{し}",
        english: "Firefighter",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "のんびりする",
        english: "To relax・Sit around・Take it easy",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE
      },
    ],
    translation: `While commuting to work, my car stopped moving right in front of a railroad crossing. There are no residents nearby. I'm sure there was a fire station nearby. I can't just sit around. Let's go and see.`,
    audio: "T191.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 140,
  },
  "192": {
    id: "192",
    rubyStory: [
      {
        character: "",
        dialogue: "<向{む}かい>の<幼{よう}稚{ち}園{えん}>は<たびたび><工{こう}事{じ}>をする。うるさくて、休みの日も<リラックスして><過{す}ごせない>。早{はや}く<終{しゅう}了{りょう}>してほしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "向{む}かい",
        english: "Opposite",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "幼{よう}稚{ち}園{えん}",
        english: "Kindergarten",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "たびたび",
        english: "Frequently",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "工{こう}事{じ}［する］",
        english: "Construction・To undergo construction",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "工{こう}事{じ}現{げん}場{ば}",
        english: "Construction site",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "リラックス［する］",
        english: "Relaxation・To relax",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "過{す}ごす",
        english: "To spend (time)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "終{しゅう}了{りょう}［する］",
        english: "End・To end・To finish",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `The kindergarten on the other side of the street frequently undergoes construction. It's so loud I can't even relax on my days off. I hope it ends soon`,
    audio: "T192.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 140,
  },
  "193": {
    id: "193",
    rubyStory: [
      {
        character: "",
        dialogue: "この電車は発{はっ}車{しゃ}<時{じ}刻{こく}>を<過{す}ぎても>動{うご}かない。<落{お}ち着{つ}いて>よく見ると、<行{い}き先{さき}>も表{ひょう}示{じ}していないし、<ライト>も消{き}えている。<車{しゃ}庫{こ}>に行くのだろうか。なかなか<帰{き}宅{たく}できない>。",
      },
    ],
    rubyWords: [
      {
        kanji: "時{じ}刻{こく}",
        english: "Time (of departure/arrival)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "時{じ}刻{こく}表{ひょう}",
        english: "Timetable",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "過{す}ぎる",
        english: "To pass・To exceed",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "落{お}ち着{つ}く",
        english: "To calm down・To settle down",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "行{い}き先{さき}",
        english: "Destination",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ライト",
        english: "Light",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "車{しゃ}庫{こ}",
        english: "Depot",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "帰{き}宅{たく}［する］",
        english: "Going home・To go home",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `This train isn't moving even though it's past its departure time. After calmly looking around, I noticed that the destination wasn't even displayed and the lights were off. It might be going to the depot. I'm having a hard time getting home.`,
    audio: "T193.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 141,
  },
  "194": {
    id: "194",
    rubyStory: [
      {
        character: "",
        dialogue: "<都{と}会{かい}><生{う}まれ>の私の夢{ゆめ}は、<いつか><土{と}地{ち}>を買{か}い、<畑{はたけ}>で近{きん}所{じょ}の人に分けられる<程{てい}度{ど}>の野{や}菜{さい}<または>果物を作ることだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "都{と}会{かい}",
        english: "City・Urban area",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "〜生{う}まれ",
        english: "~born",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "いつか",
        english: "Someday",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "土{と}地{ち}",
        english: "Land・Soil",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "畑{はたけ}",
        english: "Field・Farm",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "程{てい}度{ど}",
        english: "Degree・Extent・Degree (of)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "または",
        english: "Or",
        type: MiniStoryWordType.CONJUNCTION
      },
    ],
    translation: `Having been born in the city, it's my dream to someday buy some land and raise enough vegetables or even fruit to share with the people living nearby.`,
    audio: "T194.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 142,
  },
  "195": {
    id: "195",
    rubyStory: [
      {
        character: "",
        dialogue: "昨日の<大{おお}雪{ゆき}>のせいで、<首{しゅ}都{と}><高{こう}速{そく}道{どう}路{ろ}>の<出{で}入{い}口{ぐち}>で事{じ}故{こ}があった。<パトカー>や<救{きゅう}急{きゅう}車{しゃ}>が集{あつ}まっている。けが人{にん}がいないことを<願{ねが}う>。",
      },
    ],
    rubyWords: [
      {
        kanji: "大{おお}雪{ゆき}",
        english: "Heavy snow",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "首{しゅ}都{と}",
        english: "Capital",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "高{こう}速{そく}道{どう}路{ろ}",
        english: "Expressway・Highway",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "出{で}入{い}口{ぐち}",
        english: "Entrance and exit",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "パトカー",
        english: "Police car",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "救{きゅう}急{きゅう}車{しゃ}",
        english: "Ambulance",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "願{ねが}う",
        english: "Make a wish・To hope for",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "願{ねが}い",
        english: "Wish・Hope",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Yesterday's heavy snow caused an accident at the on-ramp of the Tokyo Metropolitan Expressway. Police cars and ambulances have gathered there. I hope no one is hurt.`,
    audio: "T195.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 142,
  },
  "196": {
    id: "196",
    rubyStory: [
      {
        character: "",
        dialogue: "私が住{す}んでいる<団{だん}地{ち}>は<坂{さか}>の上{うえ}にある。<商{しょう}店{てん}街{がい}>がある<大{おお}通{どお}り>から<外{はず}れた>たところに<位{い}置{ち}して>いるので、子どもがよく<迷{まい}子{ご}>になる。",
      },
    ],
    rubyWords: [
      {
        kanji: "団{だん}地{ち}",
        english: "House complex・Apartment complex",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "坂{さか}",
        english: "Slope・Hill",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "商{しょう}店{てん}街{がい}",
        english: "Shopping district・Shopping street",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "商{しょう}店{てん}",
        english: "Shop・Store",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "大{おお}通{どお}り",
        english: "Main street・Boulevard",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "外{はず}れる",
        english: "To come off・To be off",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "位{い}置{ち}［する］",
        english: "Position・Placement・To position・To place",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "迷{まい}子{ご}",
        english: "Lost child・Stray child",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The housing complex where I live is at the top of a slope. It's located some distance away from the bigger streets around the commercial district, so the children often get lost.`,
    audio: "T196.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 143,
  },
  "197": {
    id: "197",
    rubyStory: [
      {
        character: "",
        dialogue: "<郊{こう}外{がい}>に<暮{く}らす>と、<アクセス>が悪{わる}いという<イメージ>がある、しかし、実{じっ}際{さい}には地{ち}下{か}鉄{てつ}一{いっ}本{ぽん}で<通{つう}勤{きん}できる>。",
      },
    ],
    rubyWords: [
      {
        kanji: "郊{こう}外{がい}",
        english: "Suburbs",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "暮{く}らす",
        english: "To live・To reside",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "暮{く}らし",
        english: "Life・Living",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "アクセス［する］",
        english: "Access・To access",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "イメージ［する］",
        english: "Image・To imagine",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "通{つう}勤{きん}［する］",
        english: "Commuting to work・To commute to work",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `People tend to imagine that living in the suburbs means having poor access, but I can actually commute to work with just one subway line.`,
    audio: "T197.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 144,
  },
  "198": {
    id: "198",
    rubyStory: [
      {
        character: "",
        dialogue: "公園の<芝{し}生{ばふ}>に寝{ね}<転{ころ}がる>と、<土{つち}>の<香{かお}り>がした。<蚊{か}>がいたので、<扇{せん}子{す}>でたたいた。",
      },
    ],
    rubyWords: [
      {
        kanji: "芝{し}生{ばふ}",
        english: "Lawn・Grass",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "転{ころ}がる",
        english: "To roll around・To roll over",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "転{ころ}がす",
        english: "To roll something over・To turn something over",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "土{つち}",
        english: "Soil・Dirt",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "香{かお}り",
        english: "Fragrance・Aroma・Smell",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "蚊{か}",
        english: "Mosquito",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "扇{せん}子{す}",
        english: "Fan (folding)",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `When I laid out on the grass in the park, it smelled like soil. There was a mosquito, so I swatted it with a folding fan.`,
    audio: "T198.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 144,
  },
  "199": {
    id: "199",
    rubyStory: [
      {
        character: "",
        dialogue: "私が生まれ育った場所の<地{ち}名{めい}>を言っても、誰も知らないだろう。<商{しょう}業{ぎょう}>が盛{さか}んな<街{まち}>で、いろいろな会社の事務<所{しょ}>がある。<住{じゅう}宅{たく}>地{ち}の中に大{おお}型{がた}スーパーがあるので、<食{しょく}料{りょう}品{ひん}>もすぐに買{か}えるし、有{ゆう}名{めい}な<書{しょ}店{てん}>もある。",
      },
    ],
    rubyWords: [
      {
        kanji: "地{ち}名{めい}",
        english: "Place name",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "商{しょう}業{ぎょう}",
        english: "Commerce・Trade・Business",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "街{まち}",
        english: "Town・City",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～所{しょ}",
        english: "~Place・~Location",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "住{じゅう}宅{たく}",
        english: "Housing・Residence",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "食{しょく}料{りょう}品{ひん}",
        english: "Food products",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "食{しょく}料{りょう}",
        english: "Food",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "書{しょ}店{てん}",
        english: "Bookstore",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Even if I tell people the name of the place where I was born and raised, no one would probably know it. It is a city with a lot of commerce, and there are offices of various companies. There is a large supermarket in the residential area, so food products can be purchased right away, and there is also a famous bookstore.`,
    audio: "T199.mp3",
    topic: MiniStoryTopics.CITIES,
    page: 145,
  },
  "200": {
    id: "200",
    rubyStory: [
      {
        character: "",
        dialogue: "天気<予{よ}報{ほう}>によると、<大{おお}雨{あめ}><注{ちゅう}意{い}報{ほう}>が出{で}ている。午{ご}後{ご}から<にわか雨{あめ}>が降るので、早{はや}めに<毛{もう}布{ふ}>と<シーツ>を取{と}り込{こ}まなければならない。",
      },
    ],
    rubyWords: [
      {
        kanji: "予{よ}報{ほう}［する］",
        english: "Forecast・To forecast",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "大{おお}雨{あめ}",
        english: "Heavy rain",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "小{こ}雨{さめ}",
        english: "Light rain",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "注{ちゅう}意{い}報{ほう}",
        english: "Advisory",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "警{けい}報{ほう}",
        english: "Alert・Warning",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "にわか雨{あめ}",
        english: "shower (rain)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "毛{もう}布{ふ}",
        english: "Blanket",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "シーツ",
        english: "Bed sheets",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The weather forecast said that a heavy rain advisory is in effect. There could be sudden showers starting in the afternoon, so I have to bring in the blanket and sheets before that.`,
    audio: "T200.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 148,
  },
  "201": {
    id: "201",
    rubyStory: [
      {
        character: "",
        dialogue: "<大{たい}陸{りく}>が<地{ち}球{きゅう}>の上{うえ}を<移{い}動{どう}して>、現{げん}在{ざい}の世{せ}界{かい}ができたという<説{せつ}>が1912年に発{はっ}表{ぴょう}された。",
      },
    ],
    rubyWords: [
      {
        kanji: "大{たい}陸{りく}",
        english: "Continent",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "地{ち}球{きゅう}",
        english: "Earth",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "移{い}動{どう}［する］",
        english: "Movement・To move",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "説{せつ}",
        english: "Theory・Reason",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The theory that our present world is result of the movement of the continents over the earth was presented in 1912.`,
    audio: "T201.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 148,
  },
  "202": {
    id: "202",
    rubyStory: [
      {
        character: "",
        dialogue: "<海{かい}外{がい}>と<比{ひ}較{かく}して>、日本は<防{ぼう}災{さい}>の<意{い}識{しき}>が強{つよ}い。<梅{つ}雨{ゆ}>のシーズンだが、今年は大{おお}きな被{ひ}害{がい}が出{で}ないことを<祈{いの}って>いる。",
      },
    ],
    rubyWords: [
      {
        kanji: "海{かい}外{がい}",
        english: "Overseas",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "比{ひ}較{かく}［する］",
        english: "Comparison・To compare",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "防{ぼう}災{さい}",
        english: "Disaster prevention",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "意{い}識{しき}［する］",
        english: "Awareness・Consciousness・To be aware of",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "梅{つ}雨{ゆ}",
        english: "Rainy season",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "祈{いの}る",
        english: "To pray",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "祈{いの}り",
        english: "Prayer",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Japan has a stronger awareness of disaster prevention in comparison to other countries. It is now the rainy season, and I pray that there will be no serious damage this year.`,
    audio: "T202.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 149,
  },
  "203": {
    id: "203",
    rubyStory: [
      {
        character: "",
        dialogue: "今日は<花{か}粉{ふん}>がたくさん飛{と}んでいる。目{め}が<かゆくて>、鼻{はな}もむずむずするので、<外{がい}出{しゅつ}>はやめておこう。",
      },
    ],
    rubyWords: [
      {
        kanji: "花{か}粉{ふん}",
        english: "Pollen",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "花{か}粉{ふん}症{しょう}",
        english: "Hay fever",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "かゆい",
        english: "Itchy",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "外{がい}出{しゅつ}［する］",
        english: "Going out・To go out",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `There's so much pollen in the air today. My eyes are itchy and my nose tickles, so I'm not going to leave the house.`,
    audio: "T203.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 149,
  },
  "204": {
    id: "204",
    rubyStory: [
      {
        character: "",
        dialogue: "台風が近{ちか}づいているので、大雨、<強{きょう}風{ふう}>、<洪{こう}水{ずい}>の被{ひ}害{がい}が心配である。<電{でん}柱{ちゅう}>が倒{たお}れて、突{とつ}然{ぜん}<停{てい}電{でん}したり>、<断{だん}水{すい}したり>するかもしれない。",
      },
    ],
    rubyWords: [
      {
        kanji: "強{きょう}風{ふう}",
        english: "Strong wind",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "洪{こう}水{ずい}",
        english: "Flood",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "電{でん}柱{ちゅう}",
        english: "Utility pole・Telephone pole",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "電{でん}線{せん}",
        english: "Power line・Electrical wire",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "停{てい}電{でん}［する］",
        english: "Blackout・Power outage・To have a blackout",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "断{だん}水{すい}［する］",
        english: "Water outage・To have a water outage",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `A typhoon is approaching, so I'm worried about damage from heavy rain, strong wind, and flooding. There could be sudden power outages due to downed utility poles or the water could be cut off.`,
    audio: "T204.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 150,
  },
  "205": {
    id: "205",
    rubyStory: [
      {
        character: "",
        dialogue: "雨の日に<レインコート>を着{き}て自転車に乗っていたら、<タイヤ>が<滑{すべ}って><転{ころ}び>そうになったが、なんとか<無{ぶ}事{じ}だった>。",
      },
    ],
    rubyWords: [
      {
        kanji: "レインコート",
        english: "Raincoat",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "タイヤ",
        english: "Tire",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "滑{すべ}る",
        english: "To slip・To slide",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "転{ころ}ぶ",
        english: "To fall down・To crash",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "無{ぶ}事{じ}な",
        english: "Safe・Unharmed",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
    ],
    translation: `I was wearing a raincoat as I rode my bike on a rainy day, the tires slipped and I almost crashed, but somehow made it through safe.`,
    audio: "T205.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 150,
  },
  "206": {
    id: "206",
    rubyStory: [
      {
        character: "",
        dialogue: "日本の夏{なつ}は<湿{しつ}度{ど}>が高く<蒸{む}し暑{あつ}い>。<クーラー>や<扇{せん}風{ぷう}機{き}>が使わなかったら、すぐにのどが<からからに>なり、<息{いき}>ができなくなる。",
      },
    ],
    rubyWords: [
      {
        kanji: "湿{しつ}度{ど}",
        english: "Humidity",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "蒸{む}し暑{あつ}い",
        english: "Humid",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "クーラー",
        english: "Air conditioner・Cooler",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "扇{せん}風{ぷう}機{き}",
        english: "Electric fan",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "からからな",
        english: "Thirsty・Dry",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "息{いき}",
        english: "Breath",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `With high humidity, summer in Japan is hot and muggy. Without air conditioning or a fan, you will find your throat so bone dry, you'll barely be able to breathe.`,
    audio: "T206.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 151,
  },
  "207": {
    id: "207",
    rubyStory: [
      {
        character: "",
        dialogue: "田{いな}舎{か}と<比{くら}べる>と、都{と}会{かい}は<コンクリート>に<囲{かこ}まれて>いるので、なかなか地{じ}面{めん}の<温{おん}度{ど}>が下{さ}がりにくい。",
      },
    ],
    rubyWords: [
      {
        kanji: "比{くら}べる",
        english: "To compare",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "コンクリート",
        english: "Concrete",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "囲{かこ}む",
        english: "To surround",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "温{おん}度{ど}",
        english: "Temperature",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "温{おん}度{ど}計{けい}",
        english: "Thermometer",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Compared to the countryside, the city is surrounded by concrete, so the temperature of the ground doesn't fall easily.`,
    audio: "T207.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 151,
  },
  "208": {
    id: "208",
    rubyStory: [
      {
        character: "",
        dialogue: "<昨{さく}日{じつ}>、<震{しん}度{ど}>5強{きょう}の地{じ}震{しん}があり、かなり<揺{ゆ}れた>。<海{かい}岸{がん}>の近{ちか}くにいて、<今{いま}にも>津{つ}波{なみ}が来{き}そうだったので、<はだし>で走り、近{ちか}くの家{いえ}の<屋{や}根{ね}>の上{うえ}に逃{に}げた。",
      },
    ],
    rubyWords: [
      {
        kanji: "昨{さく}日{じつ}",
        english: "Yesterday",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "昨{さく}年{ねん}",
        english: "Last year",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "震{しん}度{ど}",
        english: "Seismic intensity",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "揺{ゆ}れる",
        english: "To shake・To quake・To sway",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "海{かい}岸{がん}",
        english: "Coast・Seashore",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "今{いま}にも",
        english: "At any moment・Soon",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "はだし",
        english: "Barefoot",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "屋{や}根{ね}",
        english: "Roof",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Yesterday, there was an earthquake that registered a strong 5 of the Japanese seismic intensity scale. It shook a fair amount. I was near the coast, and it seemed a tsunami could come at any moment, so I ran barefoot to the roof of a nearby house.`,
    audio: "T208.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 152,
  },
  "209": {
    id: "209",
    rubyStory: [
      {
        character: "",
        dialogue: "地{ち}球{きゅう}温{おん}暖{だん}<化{か}>の<影{えい}響{きょう}>で最{さい}近{きん}の<気{き}候{こう}>は<おかしい>。<森{しん}林{りん}>を切{き}りすぎたことは<無{む}関{かん}係{けい}で>はなく、いろんなバランスが<崩{くず}れて>いるのだろう。",
      },
    ],
    rubyWords: [
      {
        kanji: "～化{か}",
        english: "~Change",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "影{えい}響{きょう}［する］",
        english: "Influence・To influence",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "気{き}候{こう}",
        english: "Weather・Climate",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "おかしい",
        english: "Strange・Weird",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "森{しん}林{りん}",
        english: "Forest",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "無{む}関{かん}係{けい}な",
        english: "Unrelated・Irrelevant",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "崩{くず}れる",
        english: "To collapse・To crumble",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "崩{くず}す",
        english: "To destroy・To ruin・To demolish",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `The weather has been impacted lately by global warming. The overcutting of forests is not unrelated to this and has lead to the collapse of various types of balance.`,
    audio: "T209.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 152,
  },
  "210": {
    id: "210",
    rubyStory: [
      {
        character: "",
        dialogue: "子供が初{はじ}めて<マフラー>を巻{ま}いたが、うまく巻{ま}けず、<けっこう><めちゃめちゃだった>。顔を見ると、悔{くや}しくて涙{なみだ}を<こぼして>いた。",
      },
    ],
    rubyWords: [
      {
        kanji: "マフラー",
        english: "Scarf",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "けっこう",
        english: "Quite・Fairly",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "めちゃめちゃな",
        english: "Messy・Disorderly",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "こぼす",
        english: "To spill・To let slip",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "こぼれる",
        english: "To be spilled・To overflow",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
    ],
    translation: `The child tried to put her scarf on herself for the first time, but wasn't able to do it well so it looked quite messy. Looking at her face, she looked frustrated and teary-eyed.`,
    audio: "T210.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 153,
  },
  "211": {
    id: "211",
    rubyStory: [
      {
        character: "",
        dialogue: "<津{つ}波{なみ}>は<一{いっ}瞬{しゅん}>のうちに多{おお}くの命{いのち}を奪{うば}ってしまう。<被{ひ}害{がい}>を<防{ふせ}ぐ>ために、逃{に}げる場{ば}所{しょ}を<確{たし}かめて>おいた方{ほう}がいい。",
      },
    ],
    rubyWords: [
      {
        kanji: "津{つ}波{なみ}",
        english: "Tsunami",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "一{いっ}瞬{しゅん}",
        english: "(For a) Moment・Instant",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB]
      },
      {
        kanji: "被{ひ}害{がい}",
        english: "Damage・Harm",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "防{ふせ}ぐ",
        english: "To prevent・To defend",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "確{たし}かめる",
        english: "To confirm・To make sure",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `A tsunami can extinguish many lives in the blink of an eye. You should confirm ahead of time where you will run to protect yourself in times of disaster.`,
    audio: "T211.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 154,
  },
  "212": {
    id: "212",
    rubyStory: [
      {
        character: "",
        dialogue: "ひどい雨で、服{ふく}が<濡{ぬ}れて>しまった。家に着{つ}いてからも、風{かぜ}はどんどん強{つよ}くなり、<雷{かみなり}>も鳴{な}りはじめた。窓{まど}ガラスがガタガタと<震{ふる}えている>。",
      },
    ],
    rubyWords: [
      {
        kanji: "濡{ぬ}れる",
        english: "To get wet",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "濡{ぬ}らす",
        english: "To wet・To soak",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "雷{かみなり}",
        english: "Thunder",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "震{ふる}える",
        english: "To tremble・To shake・To shiver",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
    ],
    translation: `My clothes got wet from the terrible rain. Even after I got home, the wind got stronger and stronger, and it started to thunder. The windowpane was rattling.`,
    audio: "T212.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 154,
  },
  "213": {
    id: "213",
    rubyStory: [
      {
        character: "",
        dialogue: "まだ<桜{さくら}>が<散{ち}り>つつある4{し}月{がつ}<上{じょう}旬{じゅん}>だが、<気{き}温{おん}>が25<度{ど}>もあるので、<汗{あせ}>がたくさん出{で}る。",
      },
    ],
    rubyWords: [
      {
        kanji: "桜{さくら}",
        english: "Cherry Blossom",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "散{ち}る",
        english: "To fall (as in blossoms)・To scatter",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "上{じょう}旬{じゅん}",
        english: "First ten days of the month",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "中{ちゅう}旬{じゅん}",
        english: "Middle ten days of the month",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "下{げ}旬{じゅん}",
        english: "Last ten days of the month",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "気{き}温{おん}",
        english: "Temperature",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～度{ど}",
        english: "~Degrees (temperature)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "汗{あせ}",
        english: "Sweat",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Although it's only early April and the cherry blossoms are still falling, at 25 degrees already, I'm sweating a lot.`,
    audio: "T213.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 155,
  },
  "214": {
    id: "214",
    rubyStory: [
      {
        character: "",
        dialogue: "今日はとても寒{さむ}いので、外{そと}に置{お}いていた<旗{はた}>が<凍{こお}って>いる。でも、日{ひ}が<照{て}れば>、すぐに元{もと}に戻{もど}るだろう。",
      },
    ],
    rubyWords: [
      {
        kanji: "旗{はた}",
        english: "Flag",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "凍{こお}る",
        english: "To freeze",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "照{て}る",
        english: "To shine",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `Since it is very cold today, the flag that was placed outside is frozen. But once the sun shines on it, it will soon go back to the way it was.`,
    audio: "T214.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 155,
  },
  "215": {
    id: "215",
    rubyStory: [
      {
        character: "A",
        dialogue: "旅{りょ}行{こう}に行くなら、<太{たい}陽{よう}>が<昇{のぼ}る>ところを楽{たの}しみたい。でも、夕{ゆう}日{ひ}が<沈{しず}む>ところもいいなあ。<一{いち}度{ど}に>両{りょう}方{ほう}は無{む}理{り}かな。",
      },
      {
        character: "B",
        dialogue: "景{け}色{しき}のいいところでテントを張{は}って、<キャンプする>ってのはどう？",
      },
    ],
    rubyWords: [
      {
        kanji: "太{たい}陽{よう}",
        english: "Sun",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "昇{のぼ}る",
        english: "To rise",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "沈{しず}む",
        english: "To go down・To set (sun)",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "一{いち}度{ど}に",
        english: "At once・Simultaneously・At the same time",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "キャンプ［する］",
        english: "Camping・To camp",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `A: If I'm going on a trip, I want to enjoy the sunrise. But, I sunsets are nice too. I wonder if I can do both.\nB: Why don't you pitch a tent someplace with nice scenery and camp out?`,
    audio: "T215.mp3",
    topic: MiniStoryTopics.WEATHER,
    page: 156,
  },
  "279": {
    id: "279",
    rubyStory: [
      {
        character: "",
        dialogue: "日本の大学は「<前{ぜん}期{き}>」に15週、「<後{こう}期{き}>」に15週、<合{ごう}計{けい}>30週{しゅう}授{じゅ}業{ぎょう}を行{おこな}うところが多いが、最近は3学{がっ}期{き}制{せい}やクオーター制{せい}の大学もある。たいてい1年生は忙しく、<時{じ}間{かん}割{わり}>を見ると朝から夕{ゆう}方{がた}まで授{じゅ}業{ぎょう}がたくさんある。しかし、4年生になると授{じゅ}業{ぎょう}は減{へ}る。授{じゅ}業{ぎょう}の内{ない}容{よう}は<シラバス>に載{の}っている。",
      },
    ],
    rubyWords: [
      {
        kanji: "前{ぜん}期{き}",
        english: "first semester",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "後{こう}期{き}",
        english: "second semester",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "合{ごう}計{けい}［する］",
        english: "sum total・total",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "時{じ}間{かん}割{わり}",
        english: "class schedule・timetable",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "シラバス",
        english: "syllabus",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Japan's universities have a total of 30 weeks of classes with 15 weeks in the first semester, and 15 weeks in the second semester, but there are also universities that have trimesters and quarters. Usually, first-year students are busy, and when you look at their schedules, they have many classes from morning to evening. However, once they become fourth-year students, the number of classes will decrease. The content of the classes is written on the syllabus.`,
    audio: "T279.mp3",
    topic: MiniStoryTopics.SCHOOL,
    page: 198,
  },
  "280": {
    id: "280",
    rubyStory: [
      {
        character: "",
        dialogue: "工{こう}事{じ}のために<掘{ほ}られて>いた少{ちい}さな穴{あな}に気{き}づかず、<こけて>しまった。そのとき、足{あし}を石{いし}に<ぶつけて>、けがをしてしまった。",
      },
    ],
    rubyWords: [
      {
        kanji: "掘{ほ}る",
        english: "to dig",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "こける",
        english: "to trip and fall",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
      {
        kanji: "ぶつける",
        english: "to bump",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "ぶつかる",
        english: "bump into",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
    ],
    translation: `I didn't notice a small hole that had been dug for construction, and I tripped it. At that moment, my foot bumped into a rock, and I injured myself`,
    audio: "T280.mp3",
    topic: MiniStoryTopics.SCHOOL,
    page: 198,
  },
  "281": {
    id: "281",
    rubyStory: [
      {
        character: "",
        dialogue: "今日のホームルームは、学{がっ}級{きゅう}<委{い}員{いん}>が<中{ちゅう}心{しん}>になって、<司{し}会{かい}>をしてくれた。",
      },
    ],
    rubyWords: [
      {
        kanji: "委{い}員{いん}",
        english: "committee member",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "委{い}員{いん}会{かい}",
        english: "committee",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "中{ちゅう}心{しん}",
        english: "center",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "司{し}会{かい}",
        english: "Moderating",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: " 司{し}会{かい}者{しゃ}",
        english: "moderator",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `In today's homeroom, the class committee took the lead and acted as moderators.`,
    audio: "T281.mp3",
    topic: MiniStoryTopics.SCHOOL,
    page: 199,
  },
  "282": {
    id: "282",
    rubyStory: [
      {
        character: "",
        dialogue: "妹{いもうと}は<平{へい}日{じつ}>は<クリーニング>屋{や}、週末はホテルの<フロント>でアルバイトをしている。いつも<寝{ね}不{ぶ}足{そく}>で、なかなか体{からだ}を<休{やす}める>ことができない。",
      },
    ],
    rubyWords: [
      {
        kanji: "平{へい}日{じつ}",
        english: "weekday",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "クリーニング［する］",
        english: "cleaning・to clean",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "フロント",
        english: "front desk",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "寝{ね}不{ぶ}足{そく}な",
        english: "sleep deprived",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "休{やす}める",
        english: "rest",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `My sister works at a cleaner's on weekdays and works part-time job at a hotel front desk on weekends. She is always sleep deprived and can never really rest her body.`,
    audio: "T282.mp3",
    topic: MiniStoryTopics.WORK,
    page: 202,
  },
  "283": {
    id: "283",
    rubyStory: [
      {
        character: "",
        dialogue: "子どもたちがなりたい<職{しょく}業{ぎょう}>について、かつては<エンジニア>が<上{じょう}位{い}>だった。しかし、最近の１<位{い}>は<意{い}外{がい}に>も<サラリーマン>である。",
      },
    ],
    rubyWords: [
      {
        kanji: "職{しょく}業{ぎょう}",
        english: "job・occupation",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "エンジニア",
        english: "engineer`",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "上{じょう}位{い}",
        english: "top・higher ranking",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "～位{い}",
        english: "position (ranking)",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "意{い}外{がい}な",
        english: "surprising・unexpected",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "サラリーマン",
        english: "salaryman・office worker",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Being an engineer used to be the top among jobs children want to have. However nowadays, first place surprisingly goes to being an ofhce worker.`,
    audio: "T283.mp3",
    topic: MiniStoryTopics.WORK,
    page: 202,
  },
  "284": {
    id: "284",
    rubyStory: [
      {
        character: "",
        dialogue: "彼女は<先{せん}々{せん}月{げつ}>から仕事を始めたが、<研{けん}修{しゅう}><期{き}間{かん}>も<給{きゅう}料{りょう}>がもらえるらしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "先{せん}々{せん}月{げつ}",
        english: "the month before last",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "研{けん}修{しゅう}［する］",
        english: "training・to train",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "期{き}間{かん}",
        english: "period",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "給{きゅう}料{りょう}",
        english: "salary",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `She started her job the month before last, and it seems she can get paid during their training period too.`,
    audio: "T284.mp3",
    topic: MiniStoryTopics.WORK,
    page: 203,
  },
  "285": {
    id: "285",
    rubyStory: [
      {
        character: "",
        dialogue: "新{しん}入{にゅう}<社{しゃ}員{いん}>には、いつも「<単{たん}純{じゅん}で><機{き}械{かい}的{てき}な><作{さ}業{ぎょう}>であっても、<繰{く}り返{かえ}す>ことが大切だ」という<アドバイス>を送{おく}っている。",
      },
    ],
    rubyWords: [
      {
        kanji: "社{しゃ}員{いん}",
        english: "employee",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "単{たん}純{じゅん}な",
        english: "simple",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "機{き}械{かい}的{てき}な",
        english: "mechanical",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "作{さ}業{ぎょう}［する］",
        english: "work・to do work",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "繰{く}り返{かえ}す",
        english: "to repeat",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "アドバイス［する］",
        english: "advice・to give advice",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `I always send new employees the advice "It's important to repeat even simple, mechanical work.`,
    audio: "T285.mp3",
    topic: MiniStoryTopics.WORK,
    page: 203,
  },
  "286": {
    id: "286",
    rubyStory: [
      {
        character: "",
        dialogue: "<ガソリンスタンド>でのアルバイトは<きつく>、まったく座{すわ}ることができないので、<腰{こし}>を痛{いた}めてしまい、<半{はん}年{とし}>で辞{や}めてしまった。",
      },
    ],
    rubyWords: [
      {
        kanji: "ガソリンスタンド",
        english: "gas station",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "きつい",
        english: "tight・tough",
        type: MiniStoryWordType.ADJECTIVE_I
      },
      {
        kanji: "腰{こし}",
        english: "Back・lower back",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "半{はん}年{とし}",
        english: "half a year",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `My part-time job at a gas station was hard and I couldn't get to sit at all, I hurt my back and quit in half a year.`,
    audio: "T286.mp3",
    topic: MiniStoryTopics.WORK,
    page: 204,
  },
  "287": {
    id: "287",
    rubyStory: [
      {
        character: "",
        dialogue: "店{てん}<長{ちょう}>の<態{たい}度{ど}>が悪{わる}く、<その上{うえ}>、<休{きゅう}憩{けい}>時{じ}間{かん}も短{みじか}い。無{む}理{り}を<承{しょう}知{ち}>の上で、<月{げつ}末{まつ}>で辞{や}めることを伝{つた}えたら、うまくいった。",
      },
    ],
    rubyWords: [
      {
        kanji: "～長{ちょう}",
        english: "manager",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "態{たい}度{ど}",
        english: "attitude",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "その上{うえ}",
        english: "moreover・on top of that",
        type: MiniStoryWordType.CONJUNCTION
      },
      {
        kanji: "休{きゅう}憩{けい}［する］",
        english: "break・to take a break",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "承{しょう}知{ち}［する］",
        english: "Understanding・to acknowledge",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "月{げつ}末{まつ}",
        english: "end of the month",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `The store manager has a bad attitude, and moreover, break times are short. After acknowledging that this isn't working, I communicated that I would be quitting at the end of the month and it went well.`,
    audio: "T287.mp3",
    topic: MiniStoryTopics.WORK,
    page: 204,
  },
  "288": {
    id: "288",
    rubyStory: [
      {
        character: "",
        dialogue: "ある<出{しゅっ}版{ぱん}社{しゃ}>の<副{ふく}>社{しゃ}長{ちょう}と<面{めん}接{せつ}する>ことになった。<特{とく}技{ぎ}>は<事{じ}務{む}>だとアピールしたら、見{み}事{ごと}に<受{う}かった>。",
      },
    ],
    rubyWords: [
      {
        kanji: "出{しゅっ}版{ぱん}社{しゃ}",
        english: "publisher company",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "出{しゅっ}版{ぱん}［する］",
        english: "publishing・to publish",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "副{ふく}～",
        english: "vice-・assistant-",
        type: MiniStoryWordType.PREFIX
      },
      {
        kanji: "面{めん}接{せつ}［する］",
        english: "interview・to interview",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "特{とく}技{ぎ}",
        english: "special skill",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "事{じ}務{む}",
        english: "Office work",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "受{う}かる",
        english: "to pass (an exam)",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "落{お}ちる",
        english: "to fall・to drop",
        type: MiniStoryWordType.ICHIDAN_INTRANSITIVE
      },
    ],
    translation: `I had an interview with the vice president of a certain publishing company. I appealed to her by telling her that my special skill was office work, and it was wonderfully received`,
    audio: "T288.mp3",
    topic: MiniStoryTopics.WORK,
    page: 205,
  },
  "289": {
    id: "289",
    rubyStory: [
      {
        character: "",
        dialogue: "この月{つき}に<失{しつ}業{ぎょう}した>人{ひと}の<約{やく}>7<割{わり}>が新{しん}型{がた}コロナウイルスの影{えい}響{きょう}によるものである。",
      },
    ],
    rubyWords: [
      {
        kanji: "失{しつ}業{ぎょう}［する］",
        english: "to lose one's job・unemployment",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "約{やく}～",
        english: "about・approximately",
        type: MiniStoryWordType.PREFIX
      },
      {
        kanji: "～割{わり}",
        english: "Percent",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `About 70 percent of the people who lost their job this month did so due to the influence of the novel coronavirus.`,
    audio: "T289.mp3",
    topic: MiniStoryTopics.WORK,
    page: 205,
  },
  "290": {
    id: "290",
    rubyStory: [
      {
        character: "",
        dialogue: "彼は<営{えい}業{ぎょう}>の仕事をしているが、扱{あつか}っている<商{しょう}品{ひん}>が<高{こう}級{きゅう}な>物のため、めったに売{う}れずに<苦{く}労{ろう}して>いる。",
      },
    ],
    rubyWords: [
      {
        kanji: "営{えい}業{ぎょう}［する］",
        english: "sales・do sales・to work in sales",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "商{しょう}品{ひん}",
        english: "product・goods",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "高{こう}級{きゅう}な",
        english: "high-class・luxury",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "苦{く}労{ろう}［する］",
        english: "hardship・to struggle・to have a hard time",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `He is working in sales, but because the product being handled is high-class, he has a hard time and rarely make any sales.`,
    audio: "T290.mp3",
    topic: MiniStoryTopics.WORK,
    page: 206,
  },
  "291": {
    id: "291",
    rubyStory: [
      {
        character: "",
        dialogue: "新しい<職{しょく}場{ば}>は大変だと思うが、しっかり経験を<積{つ}んで>、<実{じつ}力{りょく}>をつけてもらいたい。<コミュニケーション>能{のう}力{りょく}が高い彼女なら、きっとできるはずだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "職{しょく}場{ば}",
        english: "workplace",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "積{つ}む",
        english: "gain・acquire (experience, skills)",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "積{つ}もる",
        english: "accumulate・pile up",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "実{じつ}力{りょく}",
        english: "Proficiency・ability",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "コミュニケーション",
        english: "Communication",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `I'm sure her new workplace is tough, but I hope she will steadily gain experience and improve her proficiency. She is skilled at communication, so I'm sure she'll be able to do it.`,
    audio: "T291.mp3",
    topic: MiniStoryTopics.WORK,
    page: 206,
  },
  "292": {
    id: "292",
    rubyStory: [
      {
        character: "",
        dialogue: "<パート>として働いているが、<時{じ}給{きゅう}>が<まあまあな>ので長{なが}く続{つづ}けられており、今月<末{まつ}>で5年になる。",
      },
    ],
    rubyWords: [
      {
        kanji: "パート",
        english: "part-timer・part-time job",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "時{じ}給{きゅう}",
        english: "hourly wage",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "月{げっ}給{きゅう}",
        english: "monthly salary",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "まあまあな",
        english: "so-so・not bad・just okay",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "~末{まつ}",
        english: "end of ~",
        type: MiniStoryWordType.SUFFIX
      },
    ],
    translation: `I work part-time, but my hourly wage is just okay, so I've been able to work there for a long time, and it will be five years at the end of this month.`,
    audio: "T292.mp3",
    topic: MiniStoryTopics.WORK,
    page: 207,
  },
  "293": {
    id: "293",
    rubyStory: [
      {
        character: "",
        dialogue: "今回の<イベント>は<会{かい}員{いん}><限{げん}定{てい}>なので、会{かい}員{いん}に<向{む}けた>参{さん}加{か}<マニュアル>を作{さく}成{せい}する必{ひつ}要{よう}がある。",
      },
    ],
    rubyWords: [
      {
        kanji: "イベント",
        english: "event",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "会{かい}員{いん}",
        english: "member",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "限{げん}定{てい}［する］",
        english: "limitation・to limit",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "向{む}ける",
        english: "aim at・to direct toward",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "向{む}く",
        english: "to face・to turn toward",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "マニュアル",
        english: "manual",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Since this event is limited to members only, we need to create a participation manual for members.`,
    audio: "T293.mp3",
    topic: MiniStoryTopics.WORK,
    page: 207,
  },
  "294": {
    id: "294",
    rubyStory: [
      {
        character: "",
        dialogue: "あの店は<新{しん}年{ねん}>とお盆{ぼん}のときに<混{こん}雑{ざつ}する>ので、半{はん}<期{き}>に一度<臨{りん}時{じ}>でアルバイトを<募{ぼ}集{しゅう}する。>",
      },
    ],
    rubyWords: [
      {
        kanji: "新{しん}年{ねん}",
        english: "New Year",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "混{こん}雑{ざつ}［する］",
        english: "congestion・to be crowded",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "～期{き}",
        english: "period",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "臨{りん}時{じ}",
        english: "temporary",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "募{ぼ}集{しゅう}［する］",
        english: "recruitment・to recruit",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `Since that store is crowded during the New Year and obon, they recruit once every half-year for temporary part-time workers.`,
    audio: "T294.mp3",
    topic: MiniStoryTopics.WORK,
    page: 208,
  },
  "295": {
    id: "295",
    rubyStory: [
      {
        character: "",
        dialogue: "運転手にとって周{まわ}りの人や車に気を<配{くば}り>、注意を<注{そそ}ぐ>ことは<義{ぎ}務{む}>である。事{じ}故{こ}を起{お}こしたら、<二{に}度{ど}と>ハンドルを<握{にぎ}れなく>なる。",
      },
    ],
    rubyWords: [
      {
        kanji: "配{くば}る",
        english: "to distribute",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "注{そそ}ぐ",
        english: "take (care)・to pour",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "義{ぎ}務{む}",
        english: "duty・obligation",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "二{に}度{ど}と",
        english: "again・never again",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "握{にぎ}る",
        english: "to grasp・to hold",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
    ],
    translation: `As a driver, it is your duty to pay attention to the people and cars around you and be careful. If you get into an accident, you may never be able to take hold of the wheel again.`,
    audio: "T295.mp3",
    topic: MiniStoryTopics.WORK,
    page: 208,
  },
  "296": {
    id: "296",
    rubyStory: [
      {
        character: "",
        dialogue: "会社に<問{と}い合{あ}わせた>ところ、今日中{じゅう}に<速{そく}達{たつ}>で<履{り}歴{れき}書{しょ}>を<提{てい}出{しゅつ}>すれば大丈夫だった。時間がないので、<宛{あて}名{な}>などを書き忘れないようにしなければならない。",
      },
    ],
    rubyWords: [
      {
        kanji: "問{と}い合{あ}わせる",
        english: "to contact・to inquire・to ask about",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
      {
        kanji: "速{そく}達{たつ}",
        english: "express (mail)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "履{り}歴{れき}書{しょ}",
        english: "resume・curriculum vitae (CV)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "提{てい}出{しゅつ}［する］",
        english: "submission・to submit",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "宛{あて}名{な}",
        english: "addressee's name",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "宛{あて}先{さき}",
        english: "addressee's address・destination",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `When I contacted the company, I was told that it would be okay if I submitted my resume by express within the day. Because there is no time, I have to be careful not to forget to write things like the name of the receiver.`,
    audio: "T296.mp3",
    topic: MiniStoryTopics.WORK,
    page: 209,
  },
  "297": {
    id: "297",
    rubyStory: [
      {
        character: "",
        dialogue: "<指{し}定{てい}された>場所に<集{しゅう}合{ごう}>して、みんなで一緒に面{めん}接{せつ}会{かい}場{じょう}に行った。",
      },
    ],
    rubyWords: [
      {
        kanji: "指{し}定{てい}［する］",
        english: "specifying・to specify・to designate",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "指{し}定{てい}席{せき}",
        english: "designated seat・reserved seat",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "集{しゅう}合{ごう}［する］",
        english: "gathering・to gather",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "集{しゅう}合{ごう}場{ば}所{しょ}",
        english: "gathering place・meeting place",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `We gathered at the specified place and went to the interview venue together.`,
    audio: "T297.mp3",
    topic: MiniStoryTopics.WORK,
    page: 209,
  },
  "298": {
    id: "298",
    rubyStory: [
      {
        character: "",
        dialogue: "国{こく}際{さい}会{かい}議{ぎ}<場{じょう}>でたまたま知り合いに会った。久しぶりだったので、<名{めい}刺{し}>を交{こう}換{かん}して、食{しょく}事{じ}会{かい}の日{にっ}程{てい}<調{ちょう}整{せい}>を行{おこな}った。",
      },
    ],
    rubyWords: [
      {
        kanji: "～場{じょう}",
        english: "place・location",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "名{めい}刺{し}",
        english: "business card",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "調{ちょう}整{せい}［する］",
        english: "adjustment・to adjust",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `I happened to meet an acquaintance at the international conference center. It had been a while, so we exchanged business cards and arranged a date for a dinner party.`,
    audio: "T298.mp3",
    topic: MiniStoryTopics.WORK,
    page: 210,
  },
  "299": {
    id: "299",
    rubyStory: [
      {
        character: "",
        dialogue: "ハローワークで<工{こう}業{ぎょう}>、サービス業などの希{き}望{ぼう}<条{じょう}件{けん}>から<順{じゅん}>に質問された。良{よ}い仕事かどうかがなかなか<判{はん}断{だん}できなかった>。",
      },
    ],
    rubyWords: [
      {
        kanji: "工{こう}業{ぎょう}",
        english: "manufacturing industry",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "条{じょう}件{けん}",
        english: "conditions・terms",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "順{じゅん}",
        english: "order・sequence",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "判{はん}断{だん}［する］",
        english: "judgment・decision・to judge・to decide",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `At the Public Employment Security Office, I was asked in order about the desired conditions for industries such as the manufacturing and service industries. I wasn't really able to judge whether it was a good job or not.`,
    audio: "T299.mp3",
    topic: MiniStoryTopics.WORK,
    page: 210,
  },
  "300": {
    id: "300",
    rubyStory: [
      {
        character: "",
        dialogue: "レストランで食事をして、<会{かい}計{けい}>のとき、レジの人の<名{な}札{ふだ}>を見ると高{こう}校{こう}時{じ}代{だい}の恋{こい}人{びと}だった。久しぶりに会って驚{おどろ}いたため、クレジットカードの<サイン>を間違えてしまった。",
      },
    ],
    rubyWords: [
      {
        kanji: "会{かい}計{けい}",
        english: "Check・bill",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "名{な}札{ふだ}",
        english: "name tag",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "サイン［する］",
        english: "signature・to sign",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `I was eating at a restaurant, and when it came time to pay the bill, I looked at the name tag of the person working the register, and they happened to be an old flame from high school. I was surprised to see them for the first time in so long, and I made a mistake signing my credit card receipt.`,
    audio: "T300.mp3",
    topic: MiniStoryTopics.WORK,
    page: 211,
  },
  "301": {
    id: "301",
    rubyStory: [
      {
        character: "",
        dialogue: "製{せい}造{ぞう}<業{ぎょう}>はどこも<経{けい}営{えい}>が厳{きび}しい。ある人の話では、<個{こ}人{じん}>経{けい}営{えい}の会社はもうからないらしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "～業{ぎょう}",
        english: "industry",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "経{けい}営{えい}［する］",
        english: "management・to manage",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "個{こ}人{じん}",
        english: "individual・private person",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `Every company is having trouble with sales in the manufacturing industry. I heard from one person that privately managed companies don't seem to make any money.`,
    audio: "T301.mp3",
    topic: MiniStoryTopics.WORK,
    page: 211,
  },
  "302": {
    id: "302",
    rubyStory: [
      {
        character: "",
        dialogue: "<オフィス>に誰もいないのは危ないから、<留{る}守{す}番{ばん}して>おいて。<正{しょう}午{ご}>までに戻{もど}ってくるから、それまでに部{へ}屋{や}の<整{せい}理{り}>もやっておいてね！",
      },
    ],
    rubyWords: [
      {
        kanji: "オフィス",
        english: "office",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "留{る}守{す}番{ばん}［する］",
        english: "To stay (home) house watching",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "正{しょう}午{ご}",
        english: "noon",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "整{せい}理{り}［する］",
        english: "organizing・to organize",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `It's dangerous if no one is in the office, so stay here. I'll be back by noon, so organize the rooms by then!`,
    audio: "T302.mp3",
    topic: MiniStoryTopics.WORK,
    page: 212,
  },
  "303": {
    id: "303",
    rubyStory: [
      {
        character: "",
        dialogue: "<居{い}酒{ざか}屋{や}>の<キッチン>で働{はたら}いているが、<看{かん}板{ばん}>メニューを作ることを上{じょう}司{し}に<命{めい}令{れい}された>。",
      },
    ],
    rubyWords: [
      {
        kanji: "居{い}酒{ざか}屋{や}",
        english: "tavern・pub",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "キッチン",
        english: "kitchen",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "看{かん}板{ばん}",
        english: "signboard・signature (dish)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "命{めい}令{れい}［する］",
        english: "Command・to give commands",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
    ],
    translation: `I worked in the kitchen of a tavern, and I was commanded to make a signature dish by my senior.`,
    audio: "T303.mp3",
    topic: MiniStoryTopics.WORK,
    page: 212,
  },
  "304": {
    id: "304",
    rubyStory: [
      {
        character: "",
        dialogue: "送{そう}別{べつ}会{かい}でビールを10本{ぽん}<注{ちゅう}文{もん}す>べきだったのに、間違えて10<ダース>注{ちゅう}文{もん}してしまった。<一{いち}時{じ}>はどうなるかと思ったが、いろんな人が<協{きょう}力{りょく}して>くれたおかげで、何{なん}とかなり<ほっとしている>。",
      },
    ],
    rubyWords: [
      {
        kanji: "注{ちゅう}文{もん}［する］",
        english: "order・to order",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "~ダース",
        english: "~dozen",
        type: MiniStoryWordType.SUFFIX
      },
      {
        kanji: "一{いち}時{じ}",
        english: "For a moment",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "一{いち}時{じ}帰{き}国{こく}［する］",
        english: "to temporarily return to one's home country",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "協{きょう}力{りょく}［する］",
        english: "cooperation・to cooperate",
        type: [MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE]
      },
      {
        kanji: "ほっとする",
        english: "to be relieved",
        type: MiniStoryWordType.IRREGULAR_INTRANSITIVE
      },
    ],
    translation: `Even though I should've ordered 10 beers at the farewell party, I made a mistake and ordered 10 dozen. For a moment, I didn't know what to do, but thanks to various people helping out, it worked out, so I was relieved.`,
    audio: "T304.mp3",
    topic: MiniStoryTopics.WORK,
    page: 213,
  },
  "305": {
    id: "305",
    rubyStory: [
      {
        character: "",
        dialogue: "私は<無{む}職{しょく}>で<独{どく}身{しん}>だ。<焦{あせ}ったり>、<不{ふ}安{あん}に>なったりすることもある。だが、<可{か}能{のう}な>限{かぎ}り、仕事も恋{れん}愛{あい}も<諦{あきら}めないで>がんばるつもりだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "無{む}職{しょく}",
        english: "unemployed・jobless",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "独{どく}身{しん}",
        english: "single (unmarried)",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "焦{あせ}る",
        english: "To get impatient・to be in a hurry",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "不{ふ}安{あん}な",
        english: "anxious・uneasy",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "可{か}能{のう}な",
        english: "possible",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "不{ふ}可{か}能{のう}な",
        english: "Impossible",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "可{か}能{のう}性{せい}",
        english: "possibility",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "諦{あきら}める",
        english: "To give up・to abandon",
        type: MiniStoryWordType.ICHIDAN_TRANSITIVE
      },
    ],
    translation: `I am unemployed and single. I sometimes get impatient or anxious. But I'm going to do my best without giving up on work or love as much as I can.`,
    audio: "T305.mp3",
    topic: MiniStoryTopics.LIFE,
    page: 216,
  },
  "306": {
    id: "306",
    rubyStory: [
      {
        character: "",
        dialogue: "<孫{まご}>は<悩{なや}んで>いる人を助{たす}けるため、<弁{べん}護{ご}士{し}>になることを<目{め}指{ざ}して>いる。人の<倍{ばい}>は<努{ど}力{りょく}して>いる<様{よう}子{す}>だ。",
      },
    ],
    rubyWords: [
      {
        kanji: "孫{まご}",
        english: "grandchild",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "悩{なや}む",
        english: "To worry",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: " 悩{なや}み",
        english: "worry・anxiety",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "弁{べん}護{ご}士{し}",
        english: "lawyer",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "目{め}指{ざ}す",
        english: "To aim for・to aspire to",
        type: MiniStoryWordType.GODAN_TRANSITIVE
      },
      {
        kanji: "倍{ばい}",
        english: "double・twice",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "努{ど}力{りょく}［する］",
        english: "Effort・to make an effort",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "様{よう}子{す}",
        english: "appearance・condition",
        type: MiniStoryWordType.NOUN
      },
    ],
    translation: `My grandson aims to be a lawyer to help those who are in trouble. He seems to be making double the effort of the average person.`,
    audio: "T306.mp3",
    topic: MiniStoryTopics.LIFE,
    page: 216,
  },
  "307": {
    id: "307",
    rubyStory: [
      {
        character: "",
        dialogue: "<同{どう}僚{りょう}>は<素{す}敵{てき}な>女{じょ}性{せい}に<出{で}会{あ}い>、<真{しん}剣{けん}に><交{こう}際{さい}して>いる。<そのため>、まだ<キス>もしていないようだ。",
      },
    ],
    rubyWords: [
      {
        kanji: "同{どう}僚{りょう}",
        english: "colleague",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "素{す}敵{てき}な",
        english: "nice・lovely・wonderful",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "出{で}会{あ}う",
        english: "Meet",
        type: MiniStoryWordType.GODAN_INTRANSITIVE
      },
      {
        kanji: "出{で}会{あ}い",
        english: "Meeting・encounter",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "真{しん}剣{けん}な",
        english: "Serious",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "交{こう}際{さい}［する］",
        english: "Dating・To date",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
      {
        kanji: "そのため",
        english: "so・therefore",
        type: MiniStoryWordType.CONJUNCTION
      },
      {
        kanji: "キス［する］",
        english: "Kiss・To kiss",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `My colleagues met a nice women, and they have started seriously dating. Therefore, it seems that they still haven't kissed.`,
    audio: "T307.mp3",
    topic: MiniStoryTopics.LIFE,
    page: 217,
  },
  "308": {
    id: "308",
    rubyStory: [
      {
        character: "",
        dialogue: "親{しん}友{ゆう}の<葬{そう}式{しき}>で、<ろうそく>を見つめながら、彼女がいないこれからの<人{じん}生{せい}>を<想{そう}像{ぞう}した>。<つらく>なった。",
      },
    ],
    rubyWords: [
      {
        kanji: "葬{そう}式{しき}",
        english: "funeral",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "ろうそく",
        english: "candle",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "人{じん}生{せい}",
        english: "life",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "想{そう}像{ぞう}［する］",
        english: "imagination・to imagine",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_TRANSITIVE ]
      },
      {
        kanji: "想{そう}像{ぞう}力{りょく}",
        english: "imaginative power・imagination",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "つらい",
        english: "Painful・hard・tough",
        type: MiniStoryWordType.ADJECTIVE_I
      },
    ],
    translation: `At my best friend's funeral, I imagined life without her from now on while staring at a candle. It was tough.`,
    audio: "T308.mp3",
    topic: MiniStoryTopics.LIFE,
    page: 218,
  },
  "309": {
    id: "309",
    rubyStory: [
      {
        character: "",
        dialogue: "両{りょう}親{しん}は<理{り}想{そう}的{てき}な><夫{ふう}婦{ふ}>だ。<お互{たが}いに><相{あい}手{て}>を大切にしている。母が父に<プロポーズした>らしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "理{り}想{そう}的{てき}な",
        english: "Ideal",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "理{り}想{そう}",
        english: "Ideal",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "夫{ふう}婦{ふ}",
        english: "husband and wife・married couple",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "お互{たが}い（に）",
        english: "each other",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "相{あい}手{て}",
        english: "partner・opponent",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "プロポーズ［する］",
        english: "Propose・To propose",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `My parents are an ideal couple. They value each other. It seems my mother proposed to my father.`,
    audio: "T309.mp3",
    topic: MiniStoryTopics.LIFE,
    page: 218,
  },
  "310": {
    id: "310",
    rubyStory: [
      {
        character: "",
        dialogue: "<末{すえ}っ子{こ}>の娘{むすめ}は、<たとえ>結{けっ}婚{こん}しても<絶{ぜっ}対{たい}に><姓{せい}>は変{か}えたくないと言っている。<世{よ}の中{なか}>の<常{じょう}識{しき}>に<縛{しば}られ>たくないらしい。",
      },
    ],
    rubyWords: [
      {
        kanji: "末{すえ}っ子{こ}",
        english: "youngest child",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "たとえ",
        english: "Even if・no matter",
        type: MiniStoryWordType.ADVERB
      },
      {
        kanji: "絶{ぜっ}対{たい}（に）",
        english: "Definitely・absolutely",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.ADVERB ]
      },
      {
        kanji: "姓{せい}",
        english: "surname・family name",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "世{よ}の中{なか}",
        english: "In the world・society",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "常{じょう}識{しき}",
        english: "Common sense",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "縛{しば}る",
        english: "To bind・to tie",
        type: MiniStoryWordType.IRREGULAR_TRANSITIVE
      },
    ],
    translation: `My youngest daughter says that even if she gets married, she definitely doesn't want to change her surname. It seems that she doesn't want to be tied down by the common thinking of the world.`,
    audio: "T310.mp3",
    topic: MiniStoryTopics.LIFE,
    page: 219,
  },
  "311": {
    id: "311",
    rubyStory: [
      {
        character: "",
        dialogue: "<ある>友人は、<周{しゅう}囲{い}>の人に小さな<出{で}来{き}事{ごと}>を<大{おお}げさに>話すので、聞いていて<いらいらする>。",
      },
    ],
    rubyWords: [
      {
        kanji: "ある",
        english: "A certain",
        type: MiniStoryWordType.OTHER
      },
      {
        kanji: "周{しゅう}囲{い}",
        english: "Surroundings",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "出{で}来{き}事{ごと}",
        english: "Event・incident",
        type: MiniStoryWordType.NOUN
      },
      {
        kanji: "大{おお}げさな",
        english: "Exaggerated",
        type: MiniStoryWordType.ADJECTIVE_NA
      },
      {
        kanji: "いらいら［する］",
        english: "Annoyance・to be annoyed",
        type: [ MiniStoryWordType.NOUN, MiniStoryWordType.IRREGULAR_INTRANSITIVE ]
      },
    ],
    translation: `One of my friends always makes a big deal of things, and I get annoyed just listening,`,
    audio: "T311.mp3",
    topic: MiniStoryTopics.LIFE,
    page: 219,
  },
};