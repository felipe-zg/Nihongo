import React from "react";
import { Box, Text } from "native-base";
import { VocabularyItem } from "../VocabularyItem/VocabularyItem";

type Props = {
  wordsObjects: Record<string, TangoEntry>;
};

export const WordsList: React.FC<Props> = ({ wordsObjects }) => {

  return (
    <>
      {Object.entries(wordsObjects).map(([key, tangoItem]) => (
        <Box key={key} borderWidth={1} borderColor="gray.300" borderRadius="md" mb={4} width="98%" overflow={"hidden"}>
          {/* Main Entry Information */}
          <Box bg="gray.600">
            <Text px={4} py={2}>
              <Text fontSize={"2xl"} color={"yellow.400"}>{key}</Text>
              <Text color={"gray.400"}>&nbsp;&nbsp;{tangoItem.meaning}</Text>
            </Text>
          </Box>
          <Box p={4}>
            {tangoItem.words?.map((word) => (
              <VocabularyItem key={word.id} word={word} />
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
};