import React from "react";
import { Box, Divider, HStack, Text } from "native-base";
import { Word } from "../../FastPass/components/Word/Word";

type Props = {
  words: any[]; // Replace 'any' with the actual type of your words when available
};

const ITWords: React.FC<Props> = ({ words }) => {

  return (
    <Box mx={10} alignItems="center" mt={10} borderWidth={1} borderColor="gray.300" p={4} borderRadius={8}>
      {words.map((word) => (
        <Box key={word.id} mb={4} w="100%">
          <HStack flex={1} space={2} alignItems="flex-end">
            <Word ruby={word.wordRuby} showFurigana={true} fontSize="2xl" color="yellow.400" />
            <Text fontSize="md" color="tertiary.400">{word.meaning}</Text>
          </HStack>
          {word.extraVocabulary && word.extraVocabulary.length > 0 && (
            <Box flex={2} mt={2}>
              {word.extraVocabulary.map((extra: { wordRuby: string; meaning: string; }, index: React.Key | null | undefined) => (
                <HStack space={2} alignItems="center">
                  <Word ruby={extra.wordRuby} showFurigana={true} fontSize="md" color="orange.400" />
                  <Text fontSize="xs" color="orange.400">{extra.meaning}</Text>
                </HStack>
              ))}
            </Box>
          )}
          {word.notes && <Text fontSize="sm" color="gray.500">{word.notes}</Text>}
          <Divider mt={1} bg="gray.500" thickness={0.5}/>
        </Box>
      ))}
    </Box>
  );
};

export default ITWords;
