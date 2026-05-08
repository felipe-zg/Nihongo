import React from "react";
import { Box, HStack, Text } from "native-base";
import { parseRuby } from "../../../../utils/music/rubyParser";

type Props = {
  ruby: string;
  showFurigana: boolean;
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color?: string;
};

export const Word: React.FC<Props> = ({ ruby, showFurigana, fontSize = '3xl', color = "yellow.400" }) => {
  const parts = React.useMemo(() => parseRuby(ruby), [ruby]);

  return (
    <HStack>
      <Box>
        <Text
          fontFamily="Klee One"
          color={color}
          fontSize={fontSize}
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