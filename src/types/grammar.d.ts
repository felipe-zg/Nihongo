type GrammarEntryNewWord = {
  kanji: string;
  kana: string;
  english: string;
}

declare type GrammarEntry = {
  id: number;
  grammar: string;
  imi: string;
  explanation?: string;
  usage?: {
    form?: { name: string; connector?: string }[];
    pattern?: string[];
    secondsForm?: { name: string; connector?: string }[];
    combinedForms?: { first: string; pattern: string[]; second?: string }[]
  };
  examples: {
    sentence: string;
    meaning?: string;
    point?: string;
  }[];
  extraInfo?: string;
  category: typeof GrammarEntryCategory[keyof typeof GrammarEntryCategory];
  newWords?: GrammarEntryNewWord[];
  important?: boolean;
};