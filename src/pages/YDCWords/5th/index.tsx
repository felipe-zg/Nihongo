import React from "react";
import YDCWord from "../YDCWord";
import { words5th } from "../../../consts";

const Words5thPage = () => {
  const deckItems = words5th.sort(() => Math.random() - 0.5);
  return (
    <YDCWord deckItems={deckItems}/>
  )
};

export default Words5thPage;