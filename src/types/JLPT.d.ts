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

declare type TVocabN3Type = "noun" | "る verb" | "う verb" | "する verb" | "い adjective" | "な adjective" | "adverb" | "expression";
declare type TVocabN3 = {
  word: string;
  reading: string;
  meaning: string;
  example?: string;
  exampleReading?: string;
  exampleMeaning?: string;
  type: TVocabN3Type;
};