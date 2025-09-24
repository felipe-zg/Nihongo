declare type GrammarEntry = {
  id: number;
  grammar: string;
  imi: string;
  explanation?: string;
  usage: {
    form: { name: string; connector?: string }[];
    pattern: string[];
  };
  examples: {
    sentence: string;
    meaning?: string;
    point?: string;
  }[];
  extraInfo?: string;
  category: typeof GrammarEntryCategory[keyof typeof GrammarEntryCategory];
};