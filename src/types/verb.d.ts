declare type Verb = {
  id: number;
  meaning: string;
  transitive: {
    kanji: string;
    kana: string;
    tearu: string;
  };
  intransitive: {
    kanji: string;
    kana: string;
    teiru: string;
  };
};