import { Box, HStack, VStack, Text, useBreakpointValue } from "native-base";

export const NewWords = ({ words }: { words: { kanji: string, kana: string, meaning: string }[] }) => (
  <VStack justifyContent="space-between" borderColor={"gray.200"} borderWidth={1} borderRadius="md" marginTop={2} marginBottom={4}>
    <HStack flex={1} alignItems="center" bg={"gray.200"} paddingTop={1} paddingBottom={1}>
      <Box flex={1} alignItems="center">
        <Text>Word</Text>
      </Box>
      <Box flex={1} alignItems="center">
        <Text>Kana</Text>
      </Box>
      <Box flex={1} alignItems="center">
        <Text>Meaning</Text>
      </Box>
    </HStack>
    {words.map((word, index) => (
      <Word key={index} kanji={word.kanji} kana={word.kana} meaning={word.meaning} />
    ))}
  </VStack>
);

export const Word = ({ kanji, kana, meaning }: { kanji?: string, kana: string, meaning: string }) => (
  <HStack flex={1} alignItems="center" bg={"white.200"} padding={1}>
    <Box flex={1}>
      <Text fontSize="lg" color="darkBlue.400">{kanji}</Text>
    </Box>
    <Box flex={1}>
      <Text fontSize="md" color="purple.400">{kana}</Text>
    </Box>
    <Box flex={1}>
      <Text fontSize="sm" color="amber.500">{meaning}</Text>
    </Box>
  </HStack>
);

export const Phrase = ({ children, litMeaning, altMeaning }: { children: React.ReactNode, litMeaning: string, altMeaning?: string }) => {
  const Stack = useBreakpointValue({
    base: VStack,
    md: HStack,
  });
  return (
    <Stack justifyContent="space-between" marginTop={1} marginBottom={1}>
      <Box flex={1}>
        <Text fontSize="md">
          {children}
        </Text>
      </Box>
      <Box flex={1}>
        <Text fontSize="xs" color="teal.500">{litMeaning}</Text>
      </Box>
      <Box flex={1}>
        <Text fontSize="xs" color="lime.500">{altMeaning ?? ""}</Text>
      </Box>
    </Stack>
  );
}