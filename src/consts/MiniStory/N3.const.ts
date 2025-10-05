export const MiniStoryTopics = {
  FOOD: '食事',
  HOUSE_WORK: '家事',
  SHOPPING: "買い物",
} as const;

// type MiniStoryTopic = typeof MiniStoryTopics[keyof typeof MiniStoryTopics];

const MiniStoryWordType = {
  GODAN_INTRANSITIVE: '動1自',
  ICHIDAN_INTRANSITIVE: '動2自',
  IRREGULAR_INTRANSITIVE: '動3自',
  GODAN_TRANSITIVE: '動1他',
  ICHIDAN_TRANSITIVE: '動2他',
  IRREGULAR_TRANSITIVE: '動3他',
  ADJECTIVE_NA: 'ナ形',
  ADJECTIVE_I: 'イ形',
  ADVERB: '副',
  NOUN: '名',
  EXPRESSION: '表現',
  SUFFIX: '接尾',
  CLAUSE: '句',
  CONNECTION: '接続',
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
        type: MiniStoryWordType.CONNECTION
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
        type: MiniStoryWordType.CONNECTION
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
        kanji: "引{き}き出{だ}す",
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
};