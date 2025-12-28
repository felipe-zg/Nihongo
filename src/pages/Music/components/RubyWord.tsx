import { Text, VStack } from "native-base";

export const RubyWord = ({ kanji, furigana }: RubyPart) => (
  <VStack alignItems="center">
    <Text
      fontSize={{base: "md", md: "3xl"}}
      lineHeight="xs"
      opacity={furigana ? 1 : 0} // Hide but keep space
      color="red.500"
      bold
      my={5}
    >
      {furigana || "あ"} {/* Filler kana for consistent height */}
    </Text>
    <Text color={furigana ? "red.500" : "black"} fontSize={{base: "2xl", md: "6xl"}}>{kanji}</Text>
  </VStack>
);
