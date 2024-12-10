import { Box, Text, VStack } from "native-base";
import React from "react";

type Props = {
  word: WordYDC;
};

const SmallScreenWordDetails: React.FC<Props> = ({ word }) => {
  return (
    <Box>
      <VStack>
          <Box flex={1} alignItems="center">
            <Text color={"gray.500"}>
              {word.meaning.join(", ")}
            </Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text color={"gray.500"}>
              {word.example}
            </Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text color={"gray.500"}>
              {word.exampleMeaning}
            </Text>
          </Box>
      </VStack>
    </Box>
  )
};

export default SmallScreenWordDetails;
