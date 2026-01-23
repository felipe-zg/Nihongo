import React from "react";
import Kanji from "./Kanji";
import { NIHONGO_NO_MORI_KANJI_N2 } from "../../consts";

const KanjiPage: React.FC = () => {

  return (
    <Kanji kanjiList={NIHONGO_NO_MORI_KANJI_N2} />
  );
};

export default KanjiPage;
