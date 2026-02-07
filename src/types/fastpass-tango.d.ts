declare type TangoComponent = {
  kanji: string;
  meaning: string;
};

declare type TangoWord = {
  id: number;
  wordRuby: string;
  meaning: string;
  connector?: string;
  components: TangoComponent[];
  example: string;
  exampleMeaning: string;
};

declare type TangoEntry = {
  meaning: string;
  words: TangoWord[];
};