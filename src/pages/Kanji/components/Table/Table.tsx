import React from "react";
import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { speak } from "../../../../helpers";

interface Props {
  data: KanjiYDCExample[];
  onlyMainExamplesEnabled: boolean;
}

const Table: React.FC<Props> = ({ data, onlyMainExamplesEnabled }) => {

  const getColor = (type: string) => {
    switch (type) {
      case "YDC_main":
        return "red.500";
      case "main":
        return "cyan.500";
      default:
        return "gray.500";
    }
  };

  return (
    <Box>
      {/* Table Header */}
      <HStack justifyContent="space-between" bg="gray.200" p={2} alignItems="center">
        <Box flex={1} alignItems="center">
          <Text bold>Examples</Text>
        </Box>
      </HStack>
      {/* Table Body */}
      <VStack>
        {data.map((example, index) =>
          onlyMainExamplesEnabled && (example.type !== "YDC_main" && example.type !== "main") ? null : (
            <>
              <HStack
                key={index}
                justifyContent="space-between"
                p={2}
                bg={index % 2 === 0 ? "gray.100" : "white"}
                alignItems="center"
              >
                <Box flex={1} alignItems="center">
                  <Pressable onPress={() => speak(example.reading)}>
                    <Text color={getColor(example.type)}>
                      {example.reading}
                    </Text>
                  </Pressable>
                </Box>
                <Box flex={1} alignItems="center">
                  <Text color={getColor(example.type)}>
                    {example.kana}
                  </Text>
                </Box>
              </HStack>
              <HStack
                key={index}
                justifyContent="space-between"
                p={2}
                bg={index % 2 === 0 ? "gray.100" : "white"}
                alignItems="center"
              >
                <Box flex={1} alignItems="center">
                  <Text color={getColor(example.type)}>
                    {example.meaning.join(", ")}
                  </Text>
                </Box>
                <Box flex={1} alignItems="center">
                <Pressable onPress={() => speak(example.sentence)}>
                  <Text color={getColor(example.type)}>
                    {example.sentence}
                  </Text>
                </Pressable>
                </Box>
              </HStack>
            </>
          )
        )}
      </VStack>
    </Box>
  );
};

export default Table;
