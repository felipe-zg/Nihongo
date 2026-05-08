import React from "react";
import { Box, Divider, HStack, Pressable, Text } from "native-base";
import { Word } from "../Word/Word";
import { ExamplePhrase } from "../../../../components";

export const VocabularyItem: React.FC<{ word: TangoWord }> = ({ word }) => {
  const [ShowInfo, setInfo] = React.useState(false);

  return (
    <Pressable key={word.wordRuby} mb={2} onPress={() => setInfo((prev) => !prev)}>
      <HStack>
        <Box flex={1}>
          <HStack alignItems={"end"}>
            <Word ruby={word.wordRuby} showFurigana={ShowInfo} />
            {word.connector && <Text fontFamily="Klee One" color={"white"} ml={2} mt={2}>{word.connector}</Text>}
          </HStack>
          <Text fontFamily="Klee One" color={ShowInfo ? "primary.500" : "transparent"}>
            {word.meaning}
          </Text>
        </Box>
        <HStack justifyContent={"flex-end"} flex={1} space={2}> 
          {word.components?.map((component: any, index: number) => (
            <HStack key={index}>
              {index > 0 && <Text color={"white"} mr={2} mt={2}>＋</Text>}
              <Box key={index}  mb={1} minW={"20"}>
                <Box borderColor={"red.500"} borderWidth={1} borderRadius={5} p={1} alignItems={"center"}>
                  <Text fontFamily="Klee One" color={"white"} bold>{component.kanji}</Text>
                </Box>
                <Text textAlign={"center"} fontFamily="Klee One" color={"gray.400"}>{component.meaning}</Text>
              </Box>
            </HStack>
          ))}
        </HStack>
      </HStack>
      <HStack>
          <Box flex={19}>
            <ExamplePhrase example={word.example} textAlign="left" secondayHighlightColor="tertiary.400"/>
            <ExamplePhrase 
              example={word.exampleMeaning}
              baseColor={ShowInfo ? "gray.400" : "transparent"}
              highlightColor={ShowInfo ? undefined : "transparent"}
              secondayHighlightColor={ShowInfo ? "tertiary.400" : "transparent"}
              textAlign="left" 
            />
            {word.extraVocabulary?.map((vocab, index) => (
              <HStack key={index} mt={2} space={4} alignItems={"center"} opacity={ShowInfo ? 1 : 0}>
                <Word ruby={vocab.wordRuby} showFurigana fontSize="md" color="fuchsia.500" />
                <Text fontFamily="Klee One" color={"fuchsia.300"}>
                  {vocab.meaning}
                </Text>
              </HStack>
            ))}
          </Box>
          <Box flex={1} alignItems={"flex-end"} justifyContent={"flex-end"}>
            <Text fontFamily="Klee One" fontSize={"md"} color="orange.500">
              {String(word.id).padStart(3, "0")}
            </Text>
          </Box>
      </HStack>
      <Divider my={2} />
    </Pressable>
  );
}