import React, { useMemo, useRef, useState } from "react";
import { Box, Button, HStack, Text, Select, Switch, Stack } from "native-base";
import FlipCard, { FlipCardHandle } from "../../../components/FlipCard/FlipCard";
import { ExampleSentence } from "../../../utils/textDecoration";

type Props = {
  vocabList: JLPTReview[];
};


const TomoSenseiJLPT: React.FC<Props> = ({ vocabList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(vocabList.length - 1);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const flipCardRef = useRef<FlipCardHandle>(null);

  const handleStartIndexChange = (value: number) => {
    if (endIndex <= value) {
      setEndIndex(value + 1);
    }
    setStartIndex(value);
  };

  const handleEndIndexChange = (value: number) => {
    if (value < startIndex) {
      setStartIndex(value);
    }
    setEndIndex(value);
  };

  let filteredVocabList = useMemo(() => {
    if (startIndex === 0 && endIndex === 0) return vocabList;
    return vocabList.slice(startIndex, endIndex + 1);
  }, [vocabList, startIndex, endIndex]);

  const currentCard = filteredVocabList[currentIndex];

  function shuffleCards() {
    for (let i = filteredVocabList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredVocabList[i], filteredVocabList[j]] = [filteredVocabList[j], filteredVocabList[i]];
    }
    setCurrentIndex(0);
    flipCardRef.current?.unflip();
    setIsShuffled(true);
  }

  function handleNext() {
    if (!flipCardRef.current?.isFlipped()) {
      flipCardRef.current?.flip();
      return;
    } else {
      flipCardRef.current?.unflip();
    }

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredVocabList.length);
    }, 200);
  }

  return (
    <Box alignItems="center" mt={10}>
      <Text fontSize={"xl"} bold color={"white"}>トモ先生 JLPT 文字語彙</Text>
      <Text color="pink.500">{`${currentIndex + 1}/${filteredVocabList.length}`}</Text>
      {filteredVocabList.length > 0 && !isChallengeMode && (
        <FlipCard 
          ref={flipCardRef} 
          CardFrontContent={<Text fontSize={"7xl"} color={"teal.500"}>{currentCard.kanji}</Text>}
          CardBackContent={
            <>
              <Text textAlign={"center"} fontSize={"4xl"} color={"white"} mb={3}>{currentCard.kana}</Text>
              <Text textAlign={"center"} fontSize={"xl"} color={"primary.500"}>{currentCard.english}</Text>
              <Text textAlign={"center"} fontSize={"xl"} color={"pink.500"} mb={5}>{currentCard.explanation}</Text>
              <ExampleSentence sentence={currentCard.example || ""} textAlign="center" />
            </>
          } 
        />
      )}

      {/* <Text color={"gray.300"}>{quantitySeen}/{filteredVocabList.length}</Text> */}
      <HStack mt={12} paddingX={8} space={4} width={"100%"}>
        <Button onPress={handleNext} width={"100%"}>
            Next
        </Button>
      </HStack>

      <Stack my={10} width="100%" px={4} direction={{ base: "column", lg: "row" }} space={5}>
        <HStack space={2}>
          <Box width={120} mr={5}>
            <Select
              selectedValue={startIndex.toString()}
              onValueChange={(value) => handleStartIndexChange(parseInt(value))}
              placeholder="From"
              backgroundColor={"white"}
            >
              {Array.from({ length: vocabList.length }, (_, i) => (
                <Select.Item key={i} label={`${i + 1}`} value={i.toString()} />
              ))}
            </Select>
          </Box>
          <Box width={120} mr={5}>
            <Select
              selectedValue={endIndex.toString()}
              onValueChange={(value) => handleEndIndexChange(parseInt(value))}
              placeholder="To"
              backgroundColor={"white"}
            >
              {Array.from({ length: vocabList.length - startIndex }, (_, i) => (
                <Select.Item key={i + startIndex} label={`${i + startIndex + 1}`} value={(i + startIndex).toString()} />
              ))}
            </Select>
          </Box>
        </HStack>
        <HStack space={2} alignItems="center">
          <button disabled={isShuffled} onClick={shuffleCards}>Shuffle ⇄</button>
          <HStack space={2} ml={5} alignItems="center">
            <Switch
              onValueChange={(val) => setIsChallengeMode(val)}
              colorScheme="red"
              isChecked={isChallengeMode}
            />
            <Text color="red.500">Challenge Mode</Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
    
  );
};

export default TomoSenseiJLPT;
