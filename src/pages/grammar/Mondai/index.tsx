import React from "react";
import GrammarMondai from "./GrammarMondai";
import { NIHONGO_NO_MORI_GRAMMAR_MONDAI_N2 } from "../../../consts/grammar/N2/Mondai.const";

const GrammarMondaiPage: React.FC = () => {
  // const [searchParams] = useSearchParams();
  // const levelParam = searchParams.get("level");
  // const isN3 = levelParam === "N3";

  return (
    <GrammarMondai items={NIHONGO_NO_MORI_GRAMMAR_MONDAI_N2} />
  );
};

export default GrammarMondaiPage;
