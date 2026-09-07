import React from "react";
import ITWords from "./IT_Words";
import { IT_words } from "../../../consts";

const ITWordsPage: React.FC = () => {
  return (
    <ITWords words={IT_words}/>
  );
};

export default ITWordsPage;
