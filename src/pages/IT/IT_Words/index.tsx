import React from "react";
import ITWords from "./IT_Words";
import { FE_words, IT_words } from "../../../consts";
import { useSearchParams } from "react-router";
import { parseRuby } from "../../../utils/music/rubyParser";
import  ITWordsCards  from "./IT_Words_Cards";

type VocabularySource = 'FE' | 'IT';
type Mode = 'list' | 'cards';

const ITWordsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const vocabularySourceParam: VocabularySource = (searchParams.get("source") as VocabularySource);
  const modeParam: Mode = (searchParams.get("mode") as Mode);
  const vocabularyList = vocabularySourceParam === "IT" ? IT_words : FE_words;
  const [filteredWord, setFilteredWord] = React.useState<any | null>(null);

  const checkIfItemExists = (itemsArray: any[], filter: string): TangoWord | null => {
    for (const word of itemsArray) {
      const reading = parseRuby(word.wordRuby)
        .map(part => part.kanji)
        .join("");

      if (reading.includes(filter) || String(word.id).includes(filter)) {
        return word;
      }
    }
    return null;
  }

  const runFilter = (filter: string): boolean => {
    if (!filter) return false;
    let foundWord = checkIfItemExists(IT_words, filter);
    if (foundWord) {
      setFilteredWord(foundWord);
      return true;
    }
    foundWord = checkIfItemExists(FE_words, filter);
    if (foundWord) {
      setFilteredWord(foundWord);
      return true;
    }
    return false;
  };
  
  return modeParam === "cards" 
  ? <ITWordsCards  words={vocabularyList} />
  : <ITWords 
      words={vocabularyList}
      filteredWord={filteredWord}
      runFilter={runFilter}
    />;
  };

export default ITWordsPage;
