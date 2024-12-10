import React from "react";
import Kanji from "./Kanji";
import { kanji } from "../../consts";

const KanjiPage = () => {
  const deckItems = kanji.sort(() => Math.random() - 0.5);
  return (
    <Kanji deckItems={deckItems}/>
  )
};

export default KanjiPage;