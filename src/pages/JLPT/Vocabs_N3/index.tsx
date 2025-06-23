import React from "react";
import VocabsN3 from "./VocabsN3";

type TVocabN3 = {
  word: string;
  reading: string;
  meaning: string;
  example?: string;
  exampleReading?: string;
  exampleMeaning?: string;
}

const VOCABS_N3: TVocabN3[] = [
  {
    word: "挨拶",
    reading: "あいさつ",
    meaning: "greeting",
    example: "朝の挨拶をする。",
    exampleReading: "あさのあいさつをする。",
    exampleMeaning: "to greet in the morning"
  },
  {
    word: "間",
    reading: "あいだ",
    meaning: "between, interval",
    example: "二つの家の間に公園がある。",
    exampleReading: "ふたつのいえのあいだにこうえんがある。",
    exampleMeaning: "There is a park between the two houses."
  },
  {
    word: "相手",
    reading: "あいて",
    meaning: "partner, opponent",
    example: "試合の相手は強い。",
    exampleReading: "しあいのあいてはつよい。",
    exampleMeaning: "The opponent in the match is strong."
  },
  {
    word: "青",
    reading: "あお",
    meaning: "blue, green",
    example: "空が青い。",
    exampleReading: "そらがあおい。",
    exampleMeaning: "The sky is blue."
  },
  {
    word: "赤ちゃん",
    reading: "あかちゃん",
    meaning: "baby",
    example: "赤ちゃんが泣いている。",
    exampleReading: "あかちゃんがないている。",
    exampleMeaning: "The baby is crying."
  },
  {
    word: "明るい",
    reading: "あかるい",
    meaning: "bright, cheerful",
    example: "部屋が明るい。",
    exampleReading: "へやがあかるい。",
    exampleMeaning: "The room is bright."
  },
];

const VocabsN3Page: React.FC = () => {

  return (
    <VocabsN3 vocabList={VOCABS_N3} />
  )
};

export default VocabsN3Page;