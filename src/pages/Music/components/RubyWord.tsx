import { Text, VStack } from "native-base";

export const RubyWord = ({ kanji, furigana }: RubyPart) => (
  <VStack alignItems="center">
    <Text
      fontSize={{base: "md", md: "xl"}}
      lineHeight="xs"
      opacity={furigana ? 1 : 0} // Hide but keep space
    >
      {furigana || "あ"} {/* Filler kana for consistent height */}
    </Text>
    <Text fontSize={{base: "2xl", md: "3xl"}}>{kanji}</Text>
  </VStack>
);
