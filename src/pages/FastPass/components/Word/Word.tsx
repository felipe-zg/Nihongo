import React from "react";
import { Box, HStack, Text } from "native-base";
import { parseRuby } from "../../../../utils/music/rubyParser";

export const Word: React.FC<{ ruby: string, showFurigana: boolean }> = ({ ruby, showFurigana }) => {
  const parts = React.useMemo(() => parseRuby(ruby), [ruby]);

  return (
    <HStack>
      <Box>
        <Text
          fontFamily="Klee One"
          color="yellow.400"
          fontSize="3xl"
          lineHeight="32px"
        >
          {parts.map((part, index) => (
            <Text key={index}>
              {part.furigana ? (
                <ruby>
                  {part.kanji}
                  <rt
                    style={{
                      fontSize: "0.45em",
                      lineHeight: "1",
                      color: showFurigana ? undefined : "transparent",
                    }}
                  >
                    {part.furigana}
                  </rt>
                </ruby>
              ) : (
                part.kanji
              )}
            </Text>
          ))}
        </Text>
      </Box>
    </HStack>
  );
};