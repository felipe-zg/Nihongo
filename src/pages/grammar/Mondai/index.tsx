import React, { useMemo } from "react";
import GrammarMondai from "./GrammarMondai";
import { NIHONGO_NO_MORI_GRAMMAR_MONDAI_N2 } from "../../../consts/grammar/N2/Mondai.const";
import { useSearchParams } from "react-router-dom";

type Level = "N3" | "N2";

const GrammarMondaiPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const levelParam: Level = (searchParams.get("level") as Level) || "N3";

  const mondaiList: GrammarEntry[] = useMemo(() => {
    switch (levelParam) {
      case "N2":
        return NIHONGO_NO_MORI_GRAMMAR_MONDAI_N2
      case "N3":
      default:
        return [];
    }
  }, [levelParam]);

  return (
    <GrammarMondai items={mondaiList} />
  );
};

export default GrammarMondaiPage;
