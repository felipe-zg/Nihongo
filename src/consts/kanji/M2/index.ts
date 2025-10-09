const M2_KANJI: Record<number, TKanjiM2> = {
  426: {
    id: 426,
    kanji: "雨",
    kun: ["あめ", "あま"],
    on: ["ウ"],
    meanings: ["rain"],
    words: [
      { 
        word: "大雨",
        reading: "おおあめ",
        meaning: "heavy rain",
        exampleSentenceRuby: "九{きゅう}州{しゅう}地{ち}方{ほう}で大{おお}雨{あめ}が降{ふ}り、総{ぞう}雨{うり}量{よう}は多{おお}い所{ところ}で400ミリを超{こ}えた。",
      },
      { 
        word: "梅雨",
        reading: "つゆ・ばいう",
        meaning: "rainy season",
        exampleSentenceRuby: "太{たい}平{へい}洋{よう}高{こう}気{き}圧{あつ}が梅{ばい}雨{う}前{ぜん}線{せん}を北{きた}へ押{お}し上{あ}げ、梅{つ}雨{ゆ}が明{あ}けた。",
      },
      { 
        word: "雨天",
        reading: "うてん",
        meaning: "rainy day",
        exampleSentenceRuby: "10月に行われる野{や}外{がい}コンサートは雨{う}天{てん}決{けっ}行{こう}です。",
      },
    ],
    otherWords: [
      { word: "梅雨入り", reading: "つゆいり", meaning: "start of the rainy season" },
      { word: "梅雨明け", reading: "つゆあけ", meaning: "end of the rainy season" },
      { word: "雨水", reading: "あまみず", meaning: "rainwater" },
      { word: "長雨", reading: "ながあめ", meaning: "long rain" },
      { word: "小雨", reading: "こさめ", meaning: "light rain" },
      { word: "暴風雨", reading: "ぼうふうう", meaning: "stormy rain" },
    ],
  },
}

export default M2_KANJI;