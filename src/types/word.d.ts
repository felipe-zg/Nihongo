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
  | 'SUFFIX'
  | 'PARTICLE'
  | 'COUNTER';

declare type Word = {
  word: string;
  kana: string;
  meaning: string | string[];
  example: string | string[];
  exampleMeaning: string | string[];
  type: WordType
  details?: string;
}