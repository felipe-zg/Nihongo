import React, { useMemo, useRef, useState } from "react";
import { Box, Button, HStack, Text, Select, Switch } from "native-base";
import FlipCard, { FlipCardHandle } from "../../../components/FlipCard/FlipCard";
import { HandwritingCanvas } from "../../../components";
import { HandwritingCanvasRef } from "../../../components/HandWritingCanvas/HandWritingCanvas";
import "./KanjiM2Cards.css";

type Props = {
  wordsList: TKanjiM2Words[] | TKanjiM2WordsWithExample[];
};

// eslint-disable-next-line no-useless-escape
const REGEX_WORD = /[（\(［\[][^）\)\]］]*[）\)\]］]/g;


const KanjiM2Cards: React.FC<Props> = ({ wordsList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(wordsList.length - 1);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isHiraganaMode, setIsHiraganaMode] = useState(false);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const flipCardRef = useRef<FlipCardHandle>(null);
  const canvasRef = useRef<HandwritingCanvasRef>(null);

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

  let filteredWordsList = useMemo(() => {
    if (startIndex === 0 && endIndex === 0) return wordsList;
    return wordsList.slice(startIndex, endIndex + 1);
  }, [wordsList, startIndex, endIndex]);

  const currentCard = filteredWordsList[currentIndex];

  function shuffleCards() {
    for (let i = filteredWordsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredWordsList[i], filteredWordsList[j]] = [filteredWordsList[j], filteredWordsList[i]];
    }
    setCurrentIndex(0);
    flipCardRef.current?.unflip();
    setIsShuffled(true);
  }

  function handleNextOnCanvasMode() {
    if (isShowAnswer) {
        setIsShowAnswer(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredWordsList.length);
        canvasRef.current?.reset();
      } else {
        setIsShowAnswer(true);
      }
  }

  function handleNext() {
    if(isCanvasOpen) {
      handleNextOnCanvasMode();
      return;
    }
    if (!flipCardRef.current?.isFlipped()) {
      flipCardRef.current?.flip();
      return;
    } else {
      flipCardRef.current?.unflip();
    }
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredWordsList.length);
      if (isCanvasOpen) {
        canvasRef.current?.reset();
      }
    }, 200);
  }

  function getCanvasMainText() {
    let mainText = "";
    if (isShowAnswer) {
      mainText = isHiraganaMode ? currentCard.word.replace(REGEX_WORD, "") : currentCard.reading.replace(REGEX_WORD, "");
    } else {
      mainText = isHiraganaMode ? currentCard.reading.replace(REGEX_WORD, "") : currentCard.word.replace(REGEX_WORD, "");
    }
    return <Text fontSize={"5xl"} mb={2} color={isShowAnswer ? "pink.300" : "yellow.500"}>{mainText}</Text>;
  }


  return (
    <div className="container">
      <Box alignItems="center" mt={10}>
        <Text fontSize={"xl"} bold color={"white"}>漢字</Text>
        <Text color="pink.500">{`${currentIndex + 1}/${filteredWordsList.length}`}</Text>
        {!isCanvasOpen && filteredWordsList.length > 0 && (
          <FlipCard 
            ref={flipCardRef} 
            CardFrontContent={<Text fontSize={"6xl"} color={"teal.300"}>{isHiraganaMode ? currentCard.reading : currentCard.word.replace(REGEX_WORD, "")}</Text>}
            CardBackContent={
              <>
                <Text fontSize={"5xl"} color={"white"}>{!isHiraganaMode ? currentCard.reading : currentCard.word.replace(REGEX_WORD, "")}</Text>
                <Text fontSize={"3xl"} color={"primary.500"}>{currentCard.meaning}</Text>
              </>
            } 
          />
        )}

        {isCanvasOpen && (
          <Box alignItems={"center"}>
            {getCanvasMainText()}
            <HandwritingCanvas ref={canvasRef} />
          </Box>
        )}

        {/* <Text color={"gray.300"}>{quantitySeen}/{filteredVocabList.length}</Text> */}
        <HStack mt={12} width={{base: "90vw", lg: "60vw"}}>
          <Button onPress={handleNext} width={"full"}>
              Next
          </Button>
        </HStack>

        <HStack mt={10} width={{base: "90vw", lg: "60vw"}}>
          <Box width={120} mr={5}>
            <Select
              selectedValue={startIndex.toString()}
              onValueChange={(value) => handleStartIndexChange(parseInt(value))}
              placeholder="From"
              backgroundColor={"white"}
            >
              {Array.from({ length: wordsList.length }, (_, i) => (
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
              {Array.from({ length: wordsList.length - startIndex }, (_, i) => (
                <Select.Item key={i + startIndex} label={`${i + startIndex + 1}`} value={(i + startIndex).toString()} />
              ))}
            </Select>
          </Box>
          <button disabled={isShuffled} onClick={shuffleCards}>Shuffle ⇄</button>
        </HStack>
        <HStack width={{base: "90vw", lg: "60vw"}} space={2} justifyContent={"space-between"} my={6} alignSelf={"center"}>
          <HStack space={2} alignItems="center">
            <Switch
              onValueChange={(val) => setIsCanvasOpen(val)}
              colorScheme="red"
              isChecked={isCanvasOpen}
            />
            <Text color="red.500">Show canvas</Text>
          </HStack>
          <HStack space={2} alignItems="center">
            <Text color="red.500">Hiragana</Text>
            <Switch
              onValueChange={(val) => setIsHiraganaMode(val)}
              colorScheme="red"
              isChecked={isHiraganaMode}
            />
          </HStack>
        </HStack>
      </Box>
    </div>
  );
};

export default KanjiM2Cards;
