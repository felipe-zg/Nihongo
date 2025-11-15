import React from "react";
import Nihongo500Mondai from "./Nihongo500N3Mondai";
import { useSearchParams } from "react-router-dom";
import { JLPT_N2_GRAMMAR_EXERCISES, JLPT_N2_MOJI_EXERCISES, JLPT_N3_GOI_EXERCISES, JLPT_N3_GRAMMAR_EXERCISES, JLPT_N3_MOJI_EXERCISES } from "../../../consts";

function mergeAlternating<T extends { id: number }>(...arrays: T[][]): T[] {
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result: T[] = [];

  for (let i = 0; i < maxLength; i++) {
    for (const arr of arrays) {
      if (i < arr.length) {
        result.push(arr[i]);
      }
    }
  }

  return result.sort((a, b) => a.id - b.id);
}

const Nihongo500MondaiPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const levelParam = searchParams.get("level");
  const isN3 = levelParam === "N3";

  const moji = isN3 ? JLPT_N3_MOJI_EXERCISES : JLPT_N2_MOJI_EXERCISES;
  const grammar = isN3 ? JLPT_N3_GRAMMAR_EXERCISES : JLPT_N2_GRAMMAR_EXERCISES;
  const goi = isN3 ? JLPT_N3_GOI_EXERCISES : [];

  const items = mergeAlternating(moji, goi, grammar);

  return (
    <Nihongo500Mondai items={items} />
  );
};

export default Nihongo500MondaiPage;
