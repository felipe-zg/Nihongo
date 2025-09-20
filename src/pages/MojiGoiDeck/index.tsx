import React from "react";
import MojiGoiDeck from "./MojiGoiDeck";
import { NIHONGO_NO_MORI_WORDS } from "../../consts";

//TODO: Improve later to make it possible to choose moji goi list
const MojiGoiDeckPage: React.FC = () => {
  return (
    <MojiGoiDeck vocabList={NIHONGO_NO_MORI_WORDS} />
  )
};

export default MojiGoiDeckPage;