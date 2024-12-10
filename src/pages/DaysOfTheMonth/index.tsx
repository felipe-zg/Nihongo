import React from "react";
import DaysOfTheMonth from "./DaysOfTheMonth";
import { daysOfTheMonth } from "../../consts";

const DaysOfTheMonthPage = () => {
  const deckItems = daysOfTheMonth.sort(() => Math.random() - 0.5);
  return (
    <DaysOfTheMonth deckItems={deckItems}/>
  )
};

export default DaysOfTheMonthPage;