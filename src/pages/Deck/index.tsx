import React from "react";
import Deck from "./Deck";
import { potential } from '../../consts';

const DeckPage = () => {
  const deckItems = potential.sort(() => Math.random() - 0.5);
  return (
    <Deck deckItems={deckItems}/>
  )
};

export default DeckPage;