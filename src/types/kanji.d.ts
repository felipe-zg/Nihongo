declare type Kanji = {
  id: number;
  word: string;
  reading: string;
  meaning: string;
  radicals: string[];
  level: number;
};

declare type KanjiWithExample = Kanji & {
  example: string;
  exampleReading: string;
  exampleMeaning: string;
};

declare type Word = {
  id: number;
  word: string;
  reading: string;
  meaning: string;
  level: number;
};

declare type WordWithExample = Word & {
  example: string;
  exampleReading: string;
  exampleMeaning: string;
};

declare type KanjiYDC = {
  kanji: string;
  onyomi: string[];
  kunyomi: string[];
  meaning: string[];
  examples: Array<KanjiYDCExample>;
}

declare type KanjiYDCExample = {
  reading: string;
  kana: string;
  meaning: string[];
  sentence: string;
  type: 'main' | 'secondary';
}