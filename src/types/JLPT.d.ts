type Parts = {
  kanji: string;
  kana: string;
  meaning: string;
}

declare type Nihongo500N3 = {
  kanji: string;
  kana: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
  parts?: Parts[];
  notes?: string;
};