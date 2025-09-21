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
  }[];
  extraInfo?: string;
};