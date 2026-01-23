import React from "react";
import { Box, HStack, Text, Divider, Stack } from "native-base";

type Props = {
  kanjiList: TKanji[];
};


const Kanji: React.FC<Props> = ({
  kanjiList,
}) => {

  return (
    <Box alignItems="center" mt={10}>
      <Stack space={4} mb={6} alignItems="center" justifyContent={"space-between"} width="98%" direction={{ base: "column", lg: "row" }} >
        <Text fontSize={"xl"} bold color={"white"}>日本語の森美味しい漢字</Text>
      </Stack>
      {kanjiList.map((kanjiItem) => (
        <Box key={kanjiItem.kanji} borderWidth={1} borderColor="gray.300" borderRadius="md" p={4} mb={4} width="98%">
          {/* Main Kanji Information */}
          <Text alignSelf={"center"} color={"orange.400"}>{kanjiItem.radical}</Text>
          <HStack alignItems="center" space={4} mb={2}>
            <Text fontSize="6xl" color={"pink.400"} fontFamily="Klee One">{kanjiItem.kanji}</Text>
            <Box>
              <Text fontFamily="Klee One" color={"primary.400"}>{kanjiItem.on?.join(", ")}</Text>
              <Text fontFamily="Klee One" color={"primary.500"}>{kanjiItem.kun?.join(", ")}</Text>
              <Text fontFamily="Klee One" color={"pink.500"}>{kanjiItem.meaning}</Text>
            </Box>
          </HStack>
          {kanjiItem.components && (
            <HStack borderColor={"red.500"} borderWidth={1} borderRadius={5} alignSelf="flex-start">
              <Box borderLeftWidth={1} borderLeftColor={"red.500"} p={5}>
                <Text alignSelf={"center"} color={"orange.400"}>{kanjiItem.radical}</Text>
              </Box>
              {kanjiItem.components.map(component => (
                <Box borderLeftWidth={1} borderLeftColor={"red.500"} p={5}>
                  <Text alignSelf={"center"} color={"white"}>{component.word}の<Text color={"orange.400"}>{component.kanji}</Text></Text>
                </Box>
              ))}
            </HStack>
          )}

          {/* Main words and example sentences */}
          <Box mt={3}>
            {kanjiItem.vocabulary?.map((vocab, index) => {
              return (
                <Box key={index} mb={2}>
                  <HStack alignItems="center" space={4} mb={1}>
                    <Text fontFamily="Klee One" fontSize="2xl" color={"yellow.400"}>{vocab.kanji}</Text>
                    <Text fontFamily="Klee One" color={"green.400"}>{vocab.kana}</Text>
                    <Text fontFamily="Klee One" color={"white"}>{vocab.meaning}</Text>
                  </HStack>
                  <Text fontFamily="Klee One" color={"white"}>{vocab.description}</Text>
                  <Divider my={2} />
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Kanji;
