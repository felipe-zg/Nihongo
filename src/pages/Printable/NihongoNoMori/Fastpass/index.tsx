import React from "react";
import FastPassPrint from "./FastPassPrint";
import { JLPT_N2_FASTPASS_TANGO } from "../../../../consts";
import { useSearchParams } from "react-router-dom";

const FastPassPrintPrintPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const startId = searchParams.get("startId") 
    ? parseInt(searchParams.get("startId") as string, 10) : 23;
  const endId = searchParams.get("endId") 
    ? parseInt(searchParams.get("endId") as string, 10) : 37;

  const filteredWords = Object.values(JLPT_N2_FASTPASS_TANGO)
    .flatMap(entry => entry.words)
    .filter(word => word.id >= startId && word.id <= endId);

  return (
    <FastPassPrint words={filteredWords} />
  );
};

export default FastPassPrintPrintPage;
