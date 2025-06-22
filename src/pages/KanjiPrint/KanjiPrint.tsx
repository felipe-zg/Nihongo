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
        @media print {
          .lesson-break {
            page-break-before: always;
            break-before: page;
          }
        }
      `}</style>

      {lessonKeys.map((lessonNum) => {
        let examples = items[lessonNum].flatMap((kanji) => kanji.examples);
        if (shuffleParam) {
          examples = shuffleArray(examples);
        }


        // Build rows of 3 meaning/box pairs = 6 cells per row
        const rows: React.ReactNode[] = [];
        for (let i = 0; i < examples.length; i += 3) {
          const row = examples.slice(i, i + 3);
          rows.push(
            <tr key={`row-${i}`}>
              {row.map((ex, idx) => (
                <React.Fragment key={idx}>
                  <td>{ex.meaning[0]}</td>
                  <td></td>
                </React.Fragment>
              ))}
              {/* Fill empty cells if less than 3 entries */}
              {row.length < 3 &&
                Array.from({ length: 3 - row.length }).map((_, j) => (
                  <React.Fragment key={`empty-${j}`}>
                    <td></td>
                    <td></td>
                  </React.Fragment>
                ))}
            </tr>
          );
        }

        return (
          <div key={lessonNum} className={lessonNum !== lessonKeys[0] ? "lesson-break" : ""} style={{ marginBottom: "2cm" }}>
            <Text fontSize="md" fontWeight="bold" mb={4}>
              Lesson {lessonNum}
            </Text>
            <table>
              <tbody>{rows}</tbody>
            </table>
          </div>
        );
      })}
    </Box>
  );
};

export default KanjiPrint;
