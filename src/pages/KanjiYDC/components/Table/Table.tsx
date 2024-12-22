import React from "react";
import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { speak } from "../../../../helpers";

interface Props {
  data: KanjiYDCExample[];
  onlyMainExamplesEnabled: boolean;
}

const Table: React.FC<Props> = ({ data, onlyMainExamplesEnabled }) => {

  return (
    <Box>
      {/* Table Header */}
      <HStack justifyContent="space-between" bg="gray.200" p={2} alignItems="center">
        <Box flex={1} alignItems="center">
          <Text bold>Reading</Text>
        </Box>
        <Box flex={1} alignItems="center">
          <Text bold>Kana</Text>
        </Box>
        <Box flex={1} alignItems="center">
          <Text bold>Meaning</Text>
        </Box>
        <Box flex={1} alignItems="center">
          <Text bold>Sentence</Text>
        </Box>
      </HStack>
      {/* Table Body */}
      <VStack>
        {data.map((example, index) =>
          onlyMainExamplesEnabled && example.type !== "main" ? null : (
            <HStack
              key={index}
              justifyContent="space-between"
              p={2}
              bg={index % 2 === 0 ? "gray.100" : "white"}
              alignItems="center"
            >
              <Box flex={1} alignItems="center">
                <Pressable onPress={() => speak(example.reading)}>
                  <Text color={example.type === "main" ? "red.500" : "gray.500"}>
                    {example.reading}
                  </Text>
                </Pressable>
              </Box>
              <Box flex={1} alignItems="center">
                <Text color={example.type === "main" ? "red.500" : "gray.500"}>
                  {example.kana}
                </Text>
              </Box>
              <Box flex={1} alignItems="center">
                <Text color={example.type === "main" ? "red.500" : "gray.500"}>
                  {example.meaning.join(", ")}
                </Text>
              </Box>
              <Box flex={1} alignItems="center">
                <Text color={example.type === "main" ? "red.500" : "gray.500"}>
                  {example.sentence}
                </Text>
              </Box>
            </HStack>
          )
        )}
      </VStack>
    </Box>
  );
};

export default Table;
