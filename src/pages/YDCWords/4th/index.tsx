import React from "react";
import YDCWord from "../YDCWord";
import { words4th } from "../../../consts";

const Words4thPage = () => {
  const deckItems = words4th.sort(() => Math.random() - 0.5);
  return (
    <YDCWord deckItems={deckItems}/>
  )
};

export default Words4thPage;