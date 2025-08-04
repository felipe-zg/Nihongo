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

declare type TVocabJLPTType = "noun" | "る verb" | "う verb" | "する verb" | "い adjective" | "な adjective" | "adverb" | "expression" | "conjunction";
declare type TVocabJLPT = {
  word: string;
  reading: string;
  meaning: string;
  example?: string;
  exampleReading?: string;
  exampleMeaning?: string;
  type: TVocabJLPTType[];
  _JLPT?: boolean;
  info?: string;
  extra?: string[];
};

declare type JLPTExercise = {
  id: number;
  content: string[];
  options: string[];
  answer: string;
  comment?: string;
}