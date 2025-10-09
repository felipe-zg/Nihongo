import React from "react";
import M2_KANJI from "../../../consts/kanji/M2";
import KanjiM2 from "./KanjiM2";

const KanjiM2Page: React.FC = () => {
  const wordsList = M2_KANJI;

  return (
    <KanjiM2 wordsList={wordsList} />
  )
};

export default KanjiM2Page;