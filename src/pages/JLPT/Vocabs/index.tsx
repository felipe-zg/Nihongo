import React from "react";
import VocabsJLPT from "./VocabsJLPT";
import { VOCABS_N2, VOCABS_N3 } from "../../../consts";
import { useSearchParams } from "react-router-dom";

const VOCABS_PER_LEVEL = {
  N3: VOCABS_N3,
  N2: VOCABS_N2,
}

const VocabsJLPTPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const levelParam : 'N2' | 'N3'  = searchParams.get("level")! as 'N2' | 'N3';

  return (
    <VocabsJLPT vocabList={VOCABS_PER_LEVEL[levelParam]} level={levelParam} />
  )
};

export default VocabsJLPTPage;