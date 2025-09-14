const MiniStoryTopics = {
  FOOD: '食事',
  HOUSE_WORK: '家事',
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
    topic: MiniStoryTopics.FOOD,
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
    topic: MiniStoryTopics.FOOD,
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
    topic: MiniStoryTopics.FOOD,
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
    topic: MiniStoryTopics.FOOD,
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
        kanji: "溶く",
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
      {
        character: "",
        dialogue: "xxx",
      },
      {
        character: "",
        dialogue: "xxx",
      },
      {
        character: "",
        dialogue: "xxx",
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
        dialogue: "<冷{ひ}やして>おいたビールを冷{れい}蔵{ぞう}庫{こ}から<取{と}り出{だ}し>、飲みながらゆっくり食{しょく}事{じ}をする。これが私の<休{きゅう}日{じつ}>の<喜び{よろこ}び>です。",
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
        kanji: "喜び{よろこ}び",
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
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //   ],
  //   translation: ``,
  //   audio: "T31.mp3",
  //   topic: MiniStoryTopics.HOUSE_WORK,
  //   page: 100000,
  // },
  // "xxxx": {
  //   id: "xxxx",
  //   rubyStory: [
  //     {
  //       character: "",
  //       dialogue: "xxx",
  //     },
  //   ],
  //   rubyWords: [
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //     {
  //       kanji: "xxx",
  //       english: "xxx"
  //     },
  //   ],
  //   translation: ``,
  //   audio: "T31.mp3",
  //   topic: MiniStoryTopics.HOUSE_WORK,
  //   page: 100000,
  // },
};