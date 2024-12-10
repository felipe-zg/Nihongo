import React from "react";
import Periods from "./Periods";
import { periods } from "../../consts";

const DaysOfTheMonthPage = () => {
  const deckItems = periods.sort(() => Math.random() - 0.5);
  return (
    <Periods deckItems={deckItems}/>
  )
};

export default DaysOfTheMonthPage;