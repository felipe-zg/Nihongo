import { Text, VStack } from "native-base";

export const RubyWord = ({ kanji, furigana }: RubyPart) => (
  <VStack alignItems="center" mx={0.5}>
    <Text
      fontSize="md"
      lineHeight="xs"
      opacity={furigana ? 1 : 0} // Hide but keep space
    >
      {furigana || "あ"} {/* Filler kana for consistent height */}
    </Text>
    <Text fontSize="2xl">{kanji}</Text>
  </VStack>
);
