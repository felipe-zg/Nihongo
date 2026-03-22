import { Box, Text } from "native-base";

export const RubyWord = ({ kanji, furigana }: RubyPart) => (
  <Box>
    <Text
      fontFamily="Klee One"
      fontSize={{base: "md", md: "lg"}}
      opacity={furigana ? 1 : 0}
      color="pink.500"
      my={2}
    >
      {furigana || "あ"}
    </Text>
    <Text fontFamily="Klee One" color={furigana ? "yellow.500" : "white"} fontSize={{base: "2xl", md: "4xl"}}>{kanji}</Text>
  </Box>
);
