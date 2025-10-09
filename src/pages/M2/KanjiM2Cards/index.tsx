import React from "react";
import { useSearchParams } from "react-router-dom";
import KanjiM2 from "./KanjiM2Cards";

const KanjiM2CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams(); 
  const wordsListParam : Record<number, TKanjiM2> = JSON.parse(searchParams.get("wordsList") || "{}");
  const wordsList: TKanjiM2WordsWithExample[] = Object.values(wordsListParam)
    .flatMap(item => 
      item.words.concat(item.otherWords.map(word => ({...word, exampleSentenceRuby: ""})))
    );

  return (
    <KanjiM2 wordsList={wordsList} />
  )
};

export default KanjiM2CardsPage;