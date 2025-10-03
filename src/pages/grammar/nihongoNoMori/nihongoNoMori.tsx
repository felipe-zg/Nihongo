import React from "react";
import { Box, Button, Divider, HStack, Text } from "native-base";

type Props = {
  grammarList: GrammarEntry[];
};

function ContentBox({ children }: { children: React.ReactNode }) {
  return (
    <Box borderColor={"white"} borderWidth={1} mb={2} p={4} borderRadius={10} width={"90%"} alignItems="center">
      {children}
    </Box>
  );
}

const NihongoNoMoriGrammar: React.FC<Props> = ({ grammarList }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showContent, setShowContent] = React.useState(false);
  const currentItem = grammarList[currentIndex];

  function handleNext() {
    if(!showContent) {
      setShowContent(true);
      return;
    }
    setShowContent(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % grammarList.length);
  }

  return (
    <Box alignItems="center" mt={10} minHeight={"90vh"}>
      <Text fontSize={"xl"} bold color={"white"}>日本語の森・文法</Text>
      <Text color="pink.500" my={5}>{`${currentIndex + 1}/${grammarList.length}`}</Text>
      <ContentBox>
        <Text fontSize={"2xl"} bold color={"white"}>{currentItem.grammar}</Text>
      </ContentBox>
      <Box opacity={showContent ? 1 : 0} alignItems={"center"} width={"100%"}>
        <ContentBox>
          <Text fontSize={"lg"} color={"white"}>{currentItem.imi}</Text>
          <Text fontSize={"md"} italic color={"white"} textAlign={"center"}>{currentItem.explanation}</Text>
          <Box borderColor={"pink.500"} borderWidth={1} borderRadius={5} px={4} py={1} mt={2}>
            <Text fontSize={"sm"} italic color={"white"}>{`${currentItem.category}`}</Text>
          </Box>
        </ContentBox>
        <ContentBox>
          <HStack space={5} alignItems="center">
            <Box>
              {currentItem.usage.form.map((form, index) => (
                <HStack key={index} space={10} justifyContent={"space-between"}>
                  <Text color={"white"}>{form.name}</Text>
                  {form.connector && <Text>
                    <Text color={"green.500"}> + </Text>
                    <Text color={"pink.500"}>{form.connector}</Text>  
                  </Text>}
                </HStack>
              ))}
            </Box>
            <Box>
              <Text color={"white"} fontSize={"xl"}> + </Text>
            </Box>
            <Box>
              {currentItem.usage.pattern.map((pattern, index) => (
                <Text key={index} color={"white"}>{pattern}</Text>
              ))}
            </Box>
          </HStack>
        </ContentBox>
        <ContentBox>
          {currentItem.examples.map((example, index) => (
            <Box key={index} mb={4} alignItems="center">
              <Text textAlign={"center"} color={"white"}>{example.sentence}</Text>
              {example.meaning && <Text italic textAlign={"center"} color={"white"} fontSize={"xs"}>{example.meaning}</Text>}
              {example.point && <Text italic textAlign={"center"} color={"pink.400"} fontSize={"xs"}>{example.point}</Text>}
              <Divider my={2} borderColor={"pink.500"} />
            </Box>
          ))}
        </ContentBox>
        {currentItem.extraInfo && (
          <ContentBox>
            <Text fontSize={"sm"} color={"pink.400"}>{currentItem.extraInfo}</Text>
          </ContentBox>
        )}
        {currentItem.newWords && (
          <ContentBox>
            <Box minWidth={{ base: "100%", md: "50%" }}>
              {currentItem.newWords?.map((word, index) => (
                <HStack key={index} width={"100%"}>
                  <Text flex={1} color={"white"}>{word.kanji}</Text>
                  <Text flex={2} color={"white"}>{word.kana}</Text>
                  <Text flex={2} color={"white"}>{word.english}</Text>
                </HStack>
              ))}
            </Box>
          </ContentBox>
        )}
      </Box>
      <Box width={"90%"} mt={"auto"}>
        <Button w={"full"} onPress={handleNext} mt={4} variant={showContent ? "solid" : "outline"} colorScheme="pink">{showContent ? "次へ" : "見る"}</Button>
      </Box>
    </Box>
  );
};

export default NihongoNoMoriGrammar;
