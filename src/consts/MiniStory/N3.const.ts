export const MiniStoryTopics = {
  FOOD: '食事',
  HOUSE_WORK: '家事',
  SHOPPING: "買い物",
  FASHION: "ファッション",
  SCHOOL: "学校",
  WORK: "仕事",
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
  PREFIX: '接頭',
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
  "279": {
    id: "279",
    rubyStory: [
      {
        character: "",
        dialogue: "日本の大学は「<前{ぜん}期{き}>」に15週、「<後{こう}期{き}>」に15週、<合{こう}計{けい}>30週{しゅう}授{じゅ}業{ぎょう}を行{おこな}うところが多いが、最近は3学{がっ}期{き}制{せい}やクオーター制{せい}の大学もある。たいてい1年生は忙しく、<時{じ}間{かん}割{わり}>を見ると朝から夕{ゆう}方{がた}まで授{じゅ}業{ぎょう}がたくさんある。しかし、4年生になると授{じゅ}業{ぎょう}は減{へ}る。授{じゅ}業{ぎょう}の内{ない}容{よう}は<シラバス>に載{の}っている。",
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
        kanji: "合{こう}計{けい}［する］",
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
        type: MiniStoryWordType.CONNECTION
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
};