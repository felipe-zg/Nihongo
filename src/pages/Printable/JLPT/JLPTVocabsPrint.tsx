import React, { useEffect } from "react";
import { Box } from "native-base";
import { useSearchParams } from "react-router-dom";
import { VOCABS_N3 } from "../../../consts";

const JLPTVocabsPrint: React.FC = () => {
  const [searchParams] = useSearchParams();
  const fromIndexParam = searchParams.get("fromIndex")!;
  const toIndexParam = searchParams.get("toIndex")!;
  const shuffleParam = searchParams.get("shuffle") === "true";

  const fromIndex = parseInt(fromIndexParam, 10);
  const toIndex = parseInt(toIndexParam, 10);
  const items = VOCABS_N3.slice(fromIndex, toIndex + 1);
  if (!!shuffleParam) {
    items.sort(() => Math.random() - 0.5);
  }

  const rows: React.ReactNode[] = [];
  for (let i = 0; i < items.length; i += 3) {
    const row = items.slice(i, i + 3);
    rows.push(
      <tr key={`row-${i}`}>
        {row.map((ex, idx) => (
          <React.Fragment key={idx}>
            <td>{ex.meaning.split(',')[0]}</td>
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

  useEffect(() => {
    if (items.length > 0) {
      const timeout = setTimeout(() => {
        window.print();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [items]);
  

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
        @page {
          size: landscape;
        }
      `}</style>
      
      <table>
        <tbody>{rows}</tbody>
      </table>
    </Box>
  );
};

export default JLPTVocabsPrint;
