import React, { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import { Box, Center, Heading, HStack, Pressable, Text, VStack } from "native-base";

interface Props {
  kanji: string | string[];
  data: KanjiYDCExample[];
  onlyMainExamplesEnabled: boolean;
}

const MemoryMode = forwardRef<MemoryModeRef, Props>(({ kanji, data, onlyMainExamplesEnabled }, ref) => {
  const [flippedExamplesIndex, setFlippedExamplesIndex] = useState<number[]>([]);

  const examples = useMemo(() => {
    const filtered = onlyMainExamplesEnabled
      ? data.filter((item) => item?.type === "main")
      : data;
    return filtered.length > 0
      ? filtered
      : [{ reading: "", kana: "", meaning: [], sentence: "", type: "" }];
  }, [data, onlyMainExamplesEnabled]);

  useImperativeHandle(ref, () => ({
    handleNext() {
      setFlippedExamplesIndex([]);
    },
  }));

  return (
    <Center width={{ base: "60%" }}>
      <Heading color="emerald.500">
        {typeof kanji === "string" ? kanji : kanji.join(",")}
      </Heading>
      <br />
      <br />
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
            const flipped = flippedExamplesIndex.includes(index);
            return (
              <Pressable
                key={index}
                onPress={() =>
                  setFlippedExamplesIndex((prev) =>
                    prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
                  )
                }
              >
                <HStack
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
                    <Text fontSize="xl" color={example.type === "main" ? "red.500" : "gray.500"}>
                      {flipped && example.reading}
                    </Text>
                  </Box>
                  <Box flex={1} alignItems="center">
                    <Text fontSize="xl" color={example.type === "main" ? "red.500" : "gray.500"}>
                      {flipped && example.kana}
                    </Text>
                  </Box>
                </HStack>
              </Pressable>
            );
          })}
        </VStack>
      </Box>
    </Center>
  );
});

export default MemoryMode;
