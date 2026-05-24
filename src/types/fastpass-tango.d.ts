declare type VocabularyEntry = {
  wordRuby: string;
  meaning: string;
  important?: boolean;
};

declare type TangoComponent = {
  kanji: string;
  meaning: string;
};

declare type TangoWord = {
  id: number;
  wordRuby: string;
  meaning: string;
  info?: string,
  connector?: string;
  components?: TangoComponent[];
  example: string;
  exampleMeaning: string;
  extraVocabulary?: VocabularyEntry[];
  important?: boolean;
};

declare type TangoEntry = {
  meaning: string;
  words: TangoWord[];
};