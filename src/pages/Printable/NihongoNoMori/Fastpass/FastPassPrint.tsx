import React, { useEffect } from "react";
import { Box, HStack, Text } from "native-base";

type Props = {
  words: TangoWord[];
};

const FastPassPrint: React.FC<Props> = ({ words }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.print();
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  function extractReading(str: string): string {
    return str
      .replace(/\{([^}]+)\}/g, '$1')
      .replace(/[一-龯]/g, '');
  }

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
      {words.map((ex, index) => {
        const reading = extractReading(ex.wordRuby);
        return (
        <div key={index} className="lesson-break" style={{ whiteSpace: 'pre-wrap' }}>
          <HStack borderWidth={1} borderColor={"black"} borderBottomColor={index === words.length -1 ? 'black' : 'transparent'}>
            <Box p={1} flex={1} borderRightColor={'black'} borderRightWidth={1}>
              <Text fontSize={"lg"}>{ex.id}・{ex.meaning}</Text>
              <Text fontSize={"lg"}>{reading}</Text>
            </Box>
            <Box flex={1}>

            </Box>
          </HStack>
        </div>
      )})}

    </Box>
  );
};

export default FastPassPrint;
