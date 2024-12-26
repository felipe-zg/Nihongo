import React from "react";
import { Box, Pressable, Text, VStack } from "native-base";
import { speak } from "../../../helpers";

type Props = {
  word: Word;
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
      </VStack>
    </Box>
  )
};

export default SmallScreenWordDetails;
