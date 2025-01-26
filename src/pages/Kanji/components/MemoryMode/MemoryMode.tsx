import React, { useMemo, useState } from "react";
import { Box, Center, Heading, HStack, Pressable, Text, VStack } from "native-base";

interface Props {
  data: KanjiYDCExample[];
  onlyMainExamplesEnabled: boolean;
}

const MemoryMode: React.FC<Props> = ({ data, onlyMainExamplesEnabled }) => {
  const [flippedExamplesIndex, setFlippedExamplesIndex] = useState<number[]>([]);

  const examples = useMemo(() => {
    const filtered = onlyMainExamplesEnabled
      ? data.filter((item) => item?.type === "main")
      : data;
    return filtered.length > 0 ? filtered : [{ reading: "", kana: "", meaning: [], sentence: "", type: "" }];
  }, [data, onlyMainExamplesEnabled]);

  return (
    <Center width={{ base: "60%" }}>
      <Heading color="emerald.500">Memorize Mode</Heading>
      <br/><br/>
      <Box width={{ base: "100%" }}>
        {/* Table Header */}
        <HStack justifyContent="space-between" bg="gray.200" p={2} alignItems="center">
          <Box flex={1} alignItems="center">
            <Text bold>English</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text bold>Kanji</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text bold>Kana</Text>
          </Box>
        </HStack>
        {/* Table Body */}
        <VStack>
          {examples.map((example, index) => {
            if (onlyMainExamplesEnabled && example.type !== "main") return null;
            let flipped = flippedExamplesIndex.includes(index);
            return (
              <Pressable onPress={() => {
                setFlippedExamplesIndex((prev) => {
                  if (prev.includes(index)) {
                    return prev.filter((i) => i !== index);
                  }
                  return [...prev, index];
                });
              }}>
                <HStack
                  key={index}
                  justifyContent="space-between"
                  p={2}
                  bg={index % 2 === 0 ? "gray.100" : "white"}
                  alignItems="center"
                >
                  <Box flex={1} alignItems="center">
                    <Text fontSize="xl" color={example.type === "main" ? "red.500" : "gray.500"}>
                      {example.meaning.join(", ")}
                    </Text>
                  </Box>
                  <Box flex={1} alignItems="center">
                    <Text fontSize="4xl" color={example.type === "main" ? "red.500" : "gray.500"}>
                      { flipped && example.reading}
                    </Text>
                  </Box>
                  <Box flex={1} alignItems="center">
                    <Pressable onPress={() => { flipped = !flipped }}>
                      <Text fontSize="xl" color={example.type === "main" ? "red.500" : "gray.500"}>
                        { flipped && example.kana}
                      </Text>
                    </Pressable>
                  </Box>
                </HStack>
              </Pressable>
            );
          }
            
          )}
        </VStack>
      </Box>
    </Center>
  );
};

export default MemoryMode;
