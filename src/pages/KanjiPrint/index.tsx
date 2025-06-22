import React, { useEffect } from "react";
import KanjiPrint from "./KanjiPrint";

const KanjiPrintPage: React.FC = () => {
  useEffect(() => {
    window.print();
  }, []);
  return (
    <KanjiPrint />
  )
};

export default KanjiPrintPage;
