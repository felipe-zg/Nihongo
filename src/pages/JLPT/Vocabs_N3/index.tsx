import React from "react";
import VocabsN3 from "./VocabsN3";
import { VOCABS_N3 } from "../../../consts";


const VocabsN3Page: React.FC = () => {

  return (
    <VocabsN3 vocabList={VOCABS_N3} />
  )
};

export default VocabsN3Page;