import React from "react";
import { useSearchParams } from "react-router-dom";
import KanjiM2 from "./KanjiM2Cards";
import M2_KANJI from "../../../consts/kanji/M2";

const KanjiM2CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams(); 
  const startIndexParam: number = Number(searchParams.get("startIndex")) || 0;
  const endIndexParam: number = Number(searchParams.get("endIndex")) || 0;
  const isAllCardsParam: boolean = searchParams.get("allCards") === "true";
  const wordsList: TKanjiM2WordsWithExample[] | TKanjiM2Words[] = Object.values(M2_KANJI)
    .filter(item => item.id >= startIndexParam && item.id <= endIndexParam)
    .flatMap(item => 
      isAllCardsParam 
        ? item.words.concat(item.otherWords.map(word => ({...word, exampleSentenceRuby: ""})))
        : item.words
    );

  return (
    <KanjiM2 wordsList={wordsList} />
  )
};

export default KanjiM2CardsPage;