import React from "react";
import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { speak } from "../../../helpers";

type Props = {
  word: WordYDC;
};

const LargeScreenWordDetails: React.FC<Props> = ({ word }) => {
  return (
    <Box>
      <HStack justifyContent="space-between" bg="gray.200" p={2} alignItems="center">
        <Box flex={1} alignItems="center">
          <Text bold>Meaning</Text>
        </Box>
        <Box flex={1} alignItems="center">
          <Text bold>Example</Text>
        </Box>
        <Box flex={1} alignItems="center">
          <Text bold>Example</Text>
        </Box>
      </HStack>
      {/* Table Body */}
      <VStack>
        <HStack
          justifyContent="space-between"
          p={2}
          bg={"gray.100"}
          alignItems="center"
        >
          <Box flex={1} alignItems="center">
            <Text color={"gray.500"}>
              {word.meaning.join(", ")}
            </Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Pressable onPress={() => speak(word.example)}>
              <Text color={"gray.500"}>
                {word.example}
              </Text>
            </Pressable>
          </Box>
          <Box flex={1} alignItems="center">
            <Text color={"gray.500"}>
              {word.exampleMeaning}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
};

export default LargeScreenWordDetails;
