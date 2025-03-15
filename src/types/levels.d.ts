type NLevels = "N5" | "N4" | "N3" | "N2" | "N1";

type NLevelItemType = 'number' 
  | 'verb' 
  | 'い adjective' 
  | 'な adjective'
  | 'adverb' 
  | 'noun' 
  | 'particle' 
  | 'conjunction' 
  | 'interjection' 
  | 'counter' 
  | 'prefix' 
  | 'suffix' 
  | 'expression' 
  | 'phrase';

declare type NLevel = {
  kanji: string;
  kana?: string;
  meaning: string | string[];
  type: NLevelItemType;
  phrase: string | string[];
  phraseMeaning: string | string[];
};