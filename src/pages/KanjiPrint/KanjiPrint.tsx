import React from "react";
import { Box, Text } from "native-base";
import { useSearchParams } from "react-router-dom";

import {
  KANJI_YDC_LESSON_4,
  KANJI_YDC_LESSON_5,
  KANJI_YDC_LESSON_6,
  KANJI_YDC_LESSON_7,
  KANJI_YDC_LESSON_8,
  KANJI_YDC_LESSON_9,
  KANJI_YDC_LESSON_10,
  KANJI_YDC_LESSON_11,
  KANJI_YDC_LESSON_12,
  KANJI_YDC_LESSON_13,
  KANJI_YDC_LESSON_14,
  KANJI_YDC_LESSON_15,
  KANJI_YDC_LESSON_16,
  KANJI_YDC_LESSON_17,
  KANJI_YDC_LESSON_18,
  KANJI_YDC_LESSON_19,
  KANJI_YDC_LESSON_20,
  KANJI_YDC_LESSON_21,
  KANJI_YDC_LESSON_22,
  KANJI_YDC_LESSON_23,
  KANJI_YDC_LESSON_24,
  KANJI_YDC_LESSON_26,
  KANJI_YDC_LESSON_25,
  KANJI_YDC_LESSON_27,
} from "../../consts";

const items: Record<number, KanjiYDC[]> = {
  4: KANJI_YDC_LESSON_4,
  5: KANJI_YDC_LESSON_5,
  6: KANJI_YDC_LESSON_6,
  7: KANJI_YDC_LESSON_7,
  8: KANJI_YDC_LESSON_8,
  9: KANJI_YDC_LESSON_9,
  10: KANJI_YDC_LESSON_10,
  11: KANJI_YDC_LESSON_11,
  12: KANJI_YDC_LESSON_12,
  13: KANJI_YDC_LESSON_13,
  14: KANJI_YDC_LESSON_14,
  15: KANJI_YDC_LESSON_15,
  16: KANJI_YDC_LESSON_16,
  17: KANJI_YDC_LESSON_17,
  18: KANJI_YDC_LESSON_18,
  19: KANJI_YDC_LESSON_19,
  20: KANJI_YDC_LESSON_20,
  21: KANJI_YDC_LESSON_21,
  22: KANJI_YDC_LESSON_22,
  23: KANJI_YDC_LESSON_23,
  24: KANJI_YDC_LESSON_24,
  25: KANJI_YDC_LESSON_25,
  26: KANJI_YDC_LESSON_26,
  27: KANJI_YDC_LESSON_27,
};

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const KanjiPrint: React.FC = () => {
  const [searchParams] = useSearchParams();
  const lessonsParam = searchParams.get("lessons")!;
  const shuffleParam = searchParams.get("shuffle") === "true";
  const lessonKeys = lessonsParam
    .split(",")
    .map((num) => parseInt(num, 10))
    .filter((key) => !isNaN(key) && items[key]);

  let allExamples: KanjiYDCExample[] = [];

  lessonKeys.forEach((lessonNum) => {
    let examples = items[lessonNum].flatMap((kanji) => kanji.examples).filter((ex) => ex.type === "YDC_main");
    allExamples = allExamples.concat(examples);
  });

  if (shuffleParam) {
    allExamples = shuffleArray(allExamples);
  }

  const rows: React.ReactNode[] = [];

  for (let i = 0; i < allExamples.length; i += 4) {
    const row = allExamples.slice(i, i + 4);
    rows.push(
      <tr key={`row-${i}`}>
        {row.map((ex, idx) => (
          <React.Fragment key={idx}>
            <td><Text bold>{ex.kana}</Text></td>
            <td></td>
          </React.Fragment>
        ))}
        {/* Fill empty cells if less than 4 entries */}
        {row.length < 4 &&
          Array.from({ length: 4 - row.length }).map((_, j) => (
            <React.Fragment key={`empty-${j}`}>
              <td></td>
              <td></td>
            </React.Fragment>
          ))}
      </tr>
    );
  }

  return (
    <Box padding="1cm">
      <style>{`
        table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }
        td {
          border: 1px solid black;
          width: 16.66%; /* 6 columns */
          height: 1.5cm;
          vertical-align: middle;
          text-align: center;
          font-size: 12px;
        }
        tr {
          page-break-inside: avoid;
          break-inside: avoid;
        }
      `}</style>

      <table> 
        <tbody>
          {rows}
        </tbody>
      </table>
    </Box>
  );
};

export default KanjiPrint;
