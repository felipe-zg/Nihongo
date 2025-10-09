import React from "react";
import { useSearchParams } from "react-router-dom";
import M2_KANJI from "../../../consts/kanji/M2";
import KanjiM2 from "./KanjiM2Cards";

const KanjiM2CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams(); 
  const startKanjiIdParam : number = parseInt(searchParams.get("startKanjiId")!) || 426;
  const endKanjiIdParam : number = parseInt(searchParams.get("endKanjiId")!) || 426;
  const wordsList: TKanjiM2Words[] | TKanjiM2WordsWithExample[] = Object.values(M2_KANJI).filter(kaniItem => {
    if (kaniItem.id < startKanjiIdParam || kaniItem.id > endKanjiIdParam) {
      return false;
    }
    return true;
  }).flatMap(item => item.words.concat(item.otherWords.map(word => ({...word, exampleSentenceRuby: ""}))));

  return (
    <KanjiM2 wordsList={wordsList} />
  )
};

export default KanjiM2CardsPage;