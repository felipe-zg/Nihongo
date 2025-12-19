import React from "react";
import { REAL_JAPANESE_VOCABS } from "../../consts";
import RealJapanese from "./RealJapanese";

const RealJapanesePage: React.FC = () => {

  return (
    <RealJapanese vocabsList={REAL_JAPANESE_VOCABS} />
  )
};

export default RealJapanesePage;