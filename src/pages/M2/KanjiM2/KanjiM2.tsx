import React from "react";
import { Box, Button, HStack, Text, Divider } from "native-base";
import { parseRuby } from "../../../utils/music/rubyParser";

type Props = {
  wordsList: Record<number, TKanjiM2>;
};


const KanjiM2: React.FC<Props> = ({ wordsList }) => {

  function goToCardsDeck() {
    window.location.href = `/kanji-m2-cards?wordsList=${JSON.stringify(wordsList)}`;
  };

  return (
    <Box alignItems="center" mt={10}>
      <HStack space={4} mb={6} alignItems="center" justifyContent={"space-between"} width="90%">
        <Text fontSize={"xl"} bold color={"white"}>漢字 M2</Text>
        <Button variant="outline" colorScheme="primary" onPress={goToCardsDeck}>
          Cards deck
        </Button>
      </HStack>
      {wordsList && Object.values(wordsList).map((kanjiItem) => (
        <Box key={kanjiItem.id} borderWidth={1} borderColor="gray.300" borderRadius="md" p={4} mb={4} width="90%">
          {/* Main Kanji Information */}
          <Text alignSelf={"center"} color={"orange.400"}>{kanjiItem.id}</Text>
          <HStack alignItems="center" space={4} mb={2}>
            <Text fontSize="6xl" color={"pink.400"}>{kanjiItem.kanji}</Text>
            <Box>
              <Text color={"primary.500"}>{kanjiItem.on.join(", ")}</Text>
              <Text color={"primary.500"}>{kanjiItem.kun.join(", ")}</Text>
              <Text color={"white"}>{kanjiItem.meanings.join(", ")}</Text>
            </Box>
          </HStack>

          {/* Main words and example sentences */}
          <Box mt={3}>
            {kanjiItem.words.map((wordObj, index) => {
              const exampleSentence = parseRuby(wordObj.exampleSentenceRuby || "");
              return (
                <Box key={index} mb={2}>
                  <HStack alignItems="center" space={4} mb={1}>
                    <Text fontSize="2xl" color={"pink.400"}>{wordObj.word}</Text>
                    <Text color={"primary.500"}>{wordObj.reading}</Text>
                    <Text color={"white"}>{wordObj.meaning}</Text>
                  </HStack>
                  <Text fontSize={"xl"}>
                    {exampleSentence.map((part, idx) => 
                      typeof part === 'string' ? (
                        <Text fontSize={"xl"} key={idx}>{part}</Text>
                      ) : (
                        <Text key={idx} fontSize={"xl"} color={"white"}>
                          <ruby>{part.kanji}<rt>{part.furigana}</rt></ruby>
                        </Text>
                      )
                    )}
                  </Text>
                  <Divider my={2} />
                </Box>
              );
            })}
          </Box>

          {/* Other words */}
          <Box mt={3}>
            {kanjiItem.otherWords.map((otherWordObj, index) => (
              <Box key={index} mb={1}>
                <HStack alignItems="center" space={4}>
                  <Text fontSize="2xl" color={"yellow.400"}>{otherWordObj.word}</Text>
                  <Text color={"red.500"}>{otherWordObj.reading}</Text>
                </HStack>
                <Text color={"white"}>{otherWordObj.meaning}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default KanjiM2;
