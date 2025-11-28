import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, HStack, Text, Select, Switch, Stack, Divider } from "native-base";
import FlipCard, { FlipCardHandle } from "../../../components/FlipCard/FlipCard";
import { ExampleSentence } from "../../../utils/textDecoration";
import { FloatingControls } from "../../../components";

type Props = {
  vocabList: JLPTReview[];
  numberOfVocabs: number;
  startIndex: number;
  handleStartIndexChange: (value: number) => void;
  endIndex: number;
  handleEndIndexChange: (value: number) => void;
  isDifficultWords: boolean;
  handleIsDifficultWordsChange: (value: boolean) => void;
};


const JLPTExamVocabs: React.FC<Props> = ({
  vocabList,
  numberOfVocabs,
  startIndex,
  handleStartIndexChange,
  endIndex,
  handleEndIndexChange,
  isDifficultWords,
  handleIsDifficultWordsChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [listLayout, setListLayout] = useState(false);
  const [isAutoJump, setIsAutoJump] = useState(false);
  const flipCardRef = useRef<FlipCardHandle>(null);


  const currentCard = vocabList[currentIndex];

  function shuffleCards() {
    for (let i = vocabList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [vocabList[i], vocabList[j]] = [vocabList[j], vocabList[i]];
    }
    setCurrentIndex(0);
    flipCardRef.current?.unflip();
    setIsShuffled(true);
  }

  const handleNext = useCallback(() => {
    if (!flipCardRef.current?.isFlipped()) {
      flipCardRef.current?.flip();
      return;
    } else {
      flipCardRef.current?.unflip();
    }

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabList.length);
    }, 200);
  }, [flipCardRef, vocabList.length]);

  const handlePrev = useCallback(() => {
    if (flipCardRef.current?.isFlipped()) {
      flipCardRef.current?.unflip();
    }

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + vocabList.length) % vocabList.length);
    }, 200);
  }, [flipCardRef, vocabList.length]);

  useEffect(() => {
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  }
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [handleNext, handlePrev]);

  useEffect(() => {
    //start/end auto jump of cards when auto jump is true/false
    if (isAutoJump) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // Change card every 3 seconds
      return () => clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoJump]);

  const CardsUI = useMemo(() => (
    <>
      <Text color="pink.500">{`${currentIndex + 1}/${vocabList.length}`}</Text>
      {vocabList.length > 0 && !isChallengeMode && (
        <FlipCard 
          ref={flipCardRef} 
          CardFrontContent={
            <Text
              fontSize={currentCard.kanji.length <= 4 ? "8xl" : "6xl"}
              fontFamily="Klee One"
              color={!!currentCard.important ? "orange.500" : "teal.500"}
            >
              {currentCard.kanji}
            </Text>
          }
          CardBackContent={
            <>
              <Text textAlign={"center"} fontSize={"5xl"} color={"white"} mb={3}>{currentCard.kana}</Text>
              <Text textAlign={"center"} fontSize={"xl"} color={"primary.500"}>{currentCard.english}</Text>
              <Text textAlign={"center"} fontSize={"xl"} color={"pink.500"}>{currentCard.explanation}</Text>
              <Divider bg="gray.500" thickness={0.5} my={3} />
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
      <FloatingControls onNext={handleNext} onPrev={handlePrev} position="top" />
    </>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [currentCard, vocabList]);

  const ListLayout = useMemo(() => (
    (
    <Box minHeight={"100vh"} width={"95%"} px={5} py={5}>
      <Box borderWidth={1} borderColor={"white"} p={2} borderRadius={10} mb={5}>
        {vocabList.map((item, index) => (
          <Box key={index}>
            <HStack space={3} alignItems="center" alignContent="center">
              <Text fontSize="3xl" color="pink.500" fontFamily="Klee One">{item.kanji}</Text>
              <Text fontSize="md" fontFamily="Klee One" color={showContent ? "primary.500" : "transparent"} mt={2}>
                {item.kana}
              </Text>
              <Text fontSize="md" fontFamily="Klee One" color={showContent ? "white" : "transparent"} mt={2}>
                {item.english}
              </Text>
            </HStack>
            {item.explanation && (
              <>
                <Text fontSize="md" italic color="white">{item.explanation}</Text>
              </>
            )}
            {item.example && <ExampleSentence sentence={item.example} />}
            <Divider my={3} bg="gray.500" thickness={0.5} />
          </Box>
        ))}
        <Box
          position="fixed"
          right={0}
          top="75%"
          zIndex={100}
          style={{ transform: [{ translateY: -25 }] }}
        >
          <Button
            size="xs"
            borderRadius="full"
            colorScheme="pink"
            variant="outline"
            opacity={0.8}
            onPress={() => setShowContent(!showContent)}
          >
            {showContent ? "隠" : "見"}
          </Button>
        </Box>
      </Box>
    </Box>
  )
  ), [vocabList, showContent]);

  return (
    <Box alignItems="center" mt={10}>
      <Text fontSize={"xl"} bold color={"white"}>JLPT 文字語彙</Text>
      {!listLayout && CardsUI}
      {listLayout && ListLayout}

      <Stack my={10} width="100%" px={4} direction={{ base: "column", lg: "row" }} space={5}>
        {!listLayout && (
          <HStack space={2}>
            <Box width={120} mr={5}>
              <Select
                selectedValue={startIndex.toString()}
                onValueChange={(value) => handleStartIndexChange(parseInt(value))}
                placeholder="From"
                backgroundColor={"white"}
              >
                {Array.from({ length: numberOfVocabs }, (_, i) => (
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
                {Array.from({ length: numberOfVocabs - startIndex }, (_, i) => (
                  <Select.Item key={i + startIndex} label={`${i + startIndex + 1}`} value={(i + startIndex + 1).toString()} />
                ))}
              </Select>
            </Box>
          </HStack>
        )}
        <Stack space={{base: 4, lg: 2}}  direction={{ base: "column", lg: "row" }}>
          {!listLayout && (
            <>
              <button disabled={isShuffled} onClick={shuffleCards}>Shuffle ⇄</button>
              <HStack space={2} ml={{ base: 0, lg: 5 }} alignItems="center">
                <Switch
                  onValueChange={(val) => setIsChallengeMode(val)}
                  colorScheme="red"
                  isChecked={isChallengeMode}
                />
                <Text color="red.500">Challenge Mode</Text>
              </HStack>
              <HStack space={2} ml={{ base: 0, lg: 5 }} alignItems="center">
                <Switch
                  onValueChange={(val) => setIsAutoJump(val)}
                  colorScheme="red"
                  isChecked={isAutoJump}
                />
                <Text color="red.500">Auto Jump</Text>
              </HStack>
            </>
          )}
          <HStack space={2} ml={{ base: 0, lg: 5 }} alignItems="center">
            <Switch
              onValueChange={(val) => handleIsDifficultWordsChange(val)}
              colorScheme="primary"
              isChecked={isDifficultWords}
            />
            <Text color="primary.500">Difficult words</Text>
          </HStack>
          <HStack space={2} ml={{ base: 0, lg: 5 }} alignItems="center">
            <Switch
              onValueChange={(val) => setListLayout(val)}
              colorScheme="green"
              isChecked={listLayout}
            />
            <Text color="green.200">List layout</Text>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default JLPTExamVocabs;
