import React, { useMemo } from "react";
import NihongoNoMoriGrammar from "./nihongoNoMori";
import { NIHONGO_NO_MORI_GRAMMAR, NIHONGO_NO_MORI_GRAMMAR_N2 } from "../../../consts";
import { useSearchParams } from "react-router-dom";

type Level = "N3" | "N2";

const NihongoNoMoriGrammarPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const levelParam: Level = (searchParams.get("level") as Level) || "N3";

  const grammarList: GrammarEntry[] = useMemo(() => {
    switch (levelParam) {
      case "N2":
        return NIHONGO_NO_MORI_GRAMMAR_N2
      case "N3":
      default:
        return NIHONGO_NO_MORI_GRAMMAR;
    }
  }, [levelParam]);

  return (
    <NihongoNoMoriGrammar grammarList={grammarList} />
  )
};

export default NihongoNoMoriGrammarPage;