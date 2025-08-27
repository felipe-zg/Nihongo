const MiniStoryTopics = {
  FOOD: '食事',
  HOUSE_WORK: '家事',
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
};