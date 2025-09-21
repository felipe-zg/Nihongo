import React from "react";
import NihongoNoMoriGrammar from "./nihongoNoMori";
import { NIHONGO_NO_MORI_GRAMMAR } from "../../../consts";



const NihongoNoMoriGrammarPage: React.FC = () => {
  return (
    <NihongoNoMoriGrammar grammarList={NIHONGO_NO_MORI_GRAMMAR} />
  )
};

export default NihongoNoMoriGrammarPage;