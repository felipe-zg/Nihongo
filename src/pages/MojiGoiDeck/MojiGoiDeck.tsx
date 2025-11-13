import React, { useMemo, useRef, useState } from "react";
import { Box, Button, HStack, Text, Select, Switch, Divider } from "native-base";
import FlipCard, { FlipCardHandle } from "../../components/FlipCard/FlipCard";

type Props = {
  vocabList: { word: string; reading: string; meaning: string; example?: string }[]; //TODO: Create type
};


const MojiGoiDeck: React.FC<Props> = ({ vocabList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(vocabList.length - 1);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [showKanji, setShowKanji] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
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
    if(isChallengeMode) {
      if(!showKanji) {
        setShowKanji(true);
        setShowMeaning(true);
        return;
      } else {
        setShowKanji(false);
        setShowMeaning(false);
      }
    } else {
      if (!flipCardRef.current?.isFlipped()) {
        flipCardRef.current?.flip();
        return;
      } else {
        flipCardRef.current?.unflip();
      }
    }

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredVocabList.length);
    }, 200);
  }

  return (
    <Box alignItems="center" mt={10}>
      <Text fontSize={"xl"} bold color={"white"}>JLPT 文字・語彙</Text>
      <Text color="pink.500">{`${currentIndex + 1}/${filteredVocabList.length}`}</Text>
      {filteredVocabList.length > 0 && !isChallengeMode && (
        <FlipCard 
          ref={flipCardRef} 
          CardFrontContent={<Text fontSize={"7xl"} color={"teal.500"}>{currentCard.word}</Text>}
          CardBackContent={
            <>
              <Text fontSize={"4xl"} color={"white"}>{currentCard.reading}</Text>
              <Text fontSize={"3xl"} color={"primary.500"}>{currentCard.meaning}</Text>
              <Text fontSize={"3xl"} mt={8} textAlign={"center"} color={"pink.500"}>{currentCard.example || ""}</Text>
            </>
          } 
        />
      )}

      {filteredVocabList.length > 0 && isChallengeMode && (
        <Box mt={3} borderColor={"pink.500"} borderWidth={1} borderRadius={5} padding={5} width={"90%"} alignItems={"center"}>
          <Text color={"primary.400"} fontSize={"2xl"} bold italic>{currentCard.reading}</Text>
          <Divider my={2} bg="gray.500" thickness={0.5}/>
          <Text color={showKanji ? "pink.500" : "transparent"} fontSize={"6xl"}>{currentCard.word}</Text>
          <Text color={showMeaning ? "white" : "transparent"} fontSize={"xl"}>{currentCard.meaning}</Text>
          <Button mt={4} variant={"outline"} onPress={() => setShowMeaning(true)}>Meaning</Button>
        </Box>
      )}

      {/* <Text color={"gray.300"}>{quantitySeen}/{filteredVocabList.length}</Text> */}
      <HStack mt={12} paddingX={8} space={4} width={"100%"}>
        <Button onPress={handleNext} width={"100%"}>
            Next
        </Button>
      </HStack>

      <HStack mt={10} width="100%" px={4} >
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
        <button disabled={isShuffled} onClick={shuffleCards}>Shuffle ⇄</button>
        <HStack space={2} ml={5}>
          <Switch
            onValueChange={(val) => setIsChallengeMode(val)}
            colorScheme="red"
            isChecked={isChallengeMode}
          />
          <Text color="red.500">Challenge Mode</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default MojiGoiDeck;
