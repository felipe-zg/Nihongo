import React from "react";
import FastPass from "./FastPass";
import { JLPT_N2_FASTPASS_TANGO } from "../../consts";

const FastPassPage: React.FC = () => {

  return (
    <FastPass tangoList={JLPT_N2_FASTPASS_TANGO} />
  );
};

export default FastPassPage;
