import React from "react";
import { verbs } from "../../consts";
import Verbs from "./Verbs";

const VerbsPage = () => {
  const deckItems = verbs.sort(() => Math.random() - 0.5);
  return (
    <Verbs deckItems={deckItems}/>
  )
};

export default VerbsPage;