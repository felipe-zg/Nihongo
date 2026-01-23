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

declare type TWord = {
  id: number;
  word: string;
  reading: string;
  meaning: string;
  level: number;
};

declare type WordWithExample = TWord & {
  example: string;
  exampleReading: string;
  exampleMeaning: string;
};

declare type KanjiYDCMode = 'table' | 'carousel' | 'quizz';

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
  type: 'main' | 'secondary' | 'YDC_main';
}

declare type TKanjiM2Words = {
  word: string;
  reading: string;
  meaning: string;
};

declare type TKanjiM2WordsWithExample = TKanjiM2Words & {
  exampleSentenceRuby: string;
}

declare type TKanjiM2 = {
  id: number;
  kanji: string;
  kun: string[];
  on: string[];
  meanings: string[];
  words: TKanjiM2WordsWithExample[];
  otherWords: TKanjiM2Words[];
};

//日本語の森美味しい漢字
declare type TKanjiRadical = typeof KanjiRadical[keyof typeof KanjiRadical];

declare type TKanjiVocabulary = {
  kanji: string;
  kana: string;
  meaning: string;
  description?: string;
}

declare type TKanjiComponent = {
  kanji: string;
  word: string;
}

declare type TKanji = {
  kanji: string;
  kun?: string[];
  on?: string[];
  meaning: string;
  radical: TKanjiRadical;
  components?: TKanjiComponent[];
  vocabulary?: TKanjiVocabulary[];
}