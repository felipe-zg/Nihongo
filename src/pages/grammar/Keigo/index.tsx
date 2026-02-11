import React from "react";
import Keigo from "./Keigo";
import { KEIGO_VERBS } from "../../../consts";

const KeigoPage: React.FC = () => {

  return (
    <Keigo keigoList={KEIGO_VERBS} />
  )
};

export default KeigoPage;