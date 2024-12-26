declare type WordType = 'る Verb' 
  | 'う Verb' 
  | 'IRREGULAR' 
  | 'な Adjective' 
  | 'い Adjective' 
  | 'NOUN' 
  | 'ADVERB' 
  | 'STATE' 
  | 'CONDITION' 
  | 'PHRASE'
  | 'CONJUNCTION'
  | 'PARTICLE';

declare type Word = {
  word: string;
  kana: string;
  meaning: string[];
  example: string;
  exampleMeaning: string;
  type: WordType
  details?: string;
}