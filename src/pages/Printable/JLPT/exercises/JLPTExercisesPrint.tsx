import React, { useEffect } from "react";
import { Box, HStack } from "native-base";
import { useSearchParams } from "react-router-dom";
import { JLPT_N2_GRAMMAR_EXERCISES, JLPT_N2_MOJI_EXERCISES } from "../../../../consts";
import { parseRuby } from "../../../../utils/music/rubyParser";

const JLPTExercisesPrint: React.FC = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const exerciseType: 'grammar' | 'moji' = typeParam === 'grammar' || typeParam === 'moji' ? typeParam : 'grammar';

  let exerciseList: JLPTExercise[] = [];
  if (exerciseType === 'grammar') {
    exerciseList = JLPT_N2_GRAMMAR_EXERCISES;
  } else if (exerciseType === 'moji') {
    exerciseList = JLPT_N2_MOJI_EXERCISES;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.print();
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  // HTML with <span> tags to print the answers sheet
  // This will be used to generate the answers sheet
  let answerCells: string[] = [];

  const AnswerSheet: React.FC<{ answerCells: string[] }> = ({ answerCells }) => {
    const rows = [];
    for (let i = 0; i < answerCells.length; i += 3) {
      rows.push(
        <tr key={i}>
          {answerCells.slice(i, i + 3).map((cellHtml, idx) => (
            // Use dangerouslySetInnerHTML here to render the cell HTML string properly
            <td
              key={idx}
              style={{ padding: 8, verticalAlign: "top", border: "1px solid #000" }}
              dangerouslySetInnerHTML={{ __html: cellHtml }}
            />
          ))}
        </tr>
      );
    }

    return (
      <div className="answer-sheet-page-break">
        <h3 style={{textAlign: 'center', marginBottom: '16px'}}>Answers</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  };

  const OptionsTable: React.FC<{ options: string[] }> = ({ options }) => {
    return (
      <Box width="100%">
        {options.map((_, index) => {
          if (index % 2 !== 0) return null;

          const firstOption = options[index];
          const secondOption = options[index + 1];

          return (
            <HStack key={index} width="100%">
              <Box width="50%" mb={0.5}>
                <span>
                  <span style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}>
                    {String.fromCharCode(65 + index)})
                  </span>
                  <span style={{ fontSize: '1.4rem' }}>{firstOption}</span>
                </span>
              </Box>
              {secondOption && (
                <Box width="50%" px={2}>
                  <span>
                    <span style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}>
                      {String.fromCharCode(65 + index + 1)}){/* B, D, F, ... */}
                    </span>
                    <span style={{ fontSize: '1.4rem' }}>{secondOption}</span>
                  </span>
                </Box>
              )}
            </HStack>
          );
        })}
      </Box>
    );
  };

  let textDecorationStatus = 'none';

  return (
    <Box px="1cm">
      <style>{`
        @media print {
          .lesson-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .answer-sheet-page-break {
            page-break-before: always;
            break-before: page;
          }
        }
      `}</style>
      {exerciseList.map((ex, index) => {
        const parts = parseRuby(ex.content.join(ex.moji ? `<${ex.moji}>` : '_____'));
        const answer = parseRuby(ex.answer);
        const formattedAnswer = `${ex.id}) ` + answer.map(a =>
          a.furigana
            ? `<ruby>${a.kanji}<rt>${a.furigana}</rt></ruby>`
            : a.kanji
        ).join('');
        answerCells.push(`<td style="padding: 8px; vertical-align: top;">${formattedAnswer}</td>`);
        return (
        <div key={index} className="lesson-break">
          <h2>{ex.id}) &nbsp;&nbsp;
            {parts.map((part, partIndex) => {
              if (part.kanji === '<') {
                textDecorationStatus = 'underline';
                return null;
              }
              if (part.kanji === '>') {
                textDecorationStatus = 'none';
                return null;
              }
              return (
                <span key={partIndex} style={{ textDecoration: textDecorationStatus }}>
                  {part.furigana ? <ruby>{part.kanji}<rt>{part.furigana}</rt></ruby> : part.kanji}
                </span>
              );
            })}
          </h2>
          <OptionsTable options={ex.options} />
        </div>
      )})}

      <AnswerSheet answerCells={answerCells} />
    </Box>
  );
};

export default JLPTExercisesPrint;
