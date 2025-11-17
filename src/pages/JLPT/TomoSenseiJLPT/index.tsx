import React from "react";
import { TOMO_SENSEI_JLPT_N3 } from "../../../consts";
import TomoSenseiJLPT from "./TomoSenseiJLPT";

const TomoSenseiJLPTPage: React.FC = () => {
  return (
    <TomoSenseiJLPT vocabList={TOMO_SENSEI_JLPT_N3} />
  )
};

export default TomoSenseiJLPTPage;