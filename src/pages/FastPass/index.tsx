import React from "react";
import FastPass from "./FastPass";
import { JLPT_N2_FASTPASS_TANGO } from "../../consts";

const FastPassPage: React.FC = () => {
  const tangolist = React.useMemo(() => {
    return JLPT_N2_FASTPASS_TANGO;
  }, []);

  return (
    <FastPass tangoList={tangolist} />
  );
};

export default FastPassPage;
