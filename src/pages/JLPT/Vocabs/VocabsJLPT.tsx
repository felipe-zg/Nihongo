import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Switch, HStack, Text, Select } from "native-base";
import FlipCard, { FlipCardHandle } from "./components/FlipCard";

type Props = {
  vocabList: TVocabJLPT[];
  level?: "N3" | "N2";
};

// const shuffleArray = (arr: TVocabJLPT[]) => {
//   const copy = [...arr];
//   for (let i = copy.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [copy[i], copy[j]] = [copy[j], copy[i]];
//   }
//   return copy;
// };

const LOCAL_STORAGE_KEY = "vocab_scores";

const loadScores = (): Record<string, number> => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveScores = (scores: Record<string, number>) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(scores));
};

const getWeightedIndex = (list: TVocabJLPT[], scores: Record<string, number>) => {
  const weights = list.map((item) => {
    const score = scores[item.word] ?? 0;
    return Math.max(1, 10 - score); // Lower score = higher chance (10 = max known)
  });

  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * totalWeight;

  for (let i = 0; i < list.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }

  return 0;
};

const VocabsJLPT: React.FC<Props> = ({ vocabList, level }) => {
  const [scores, setScores] = useState<Record<string, number>>(() => loadScores());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantitySeen, setQuantitySeen] = useState(1);
  const [spacedRepetition, setSpacedRepetition] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(30);
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

  const openPrintPage = (printKanji = false, exercise?: 'grammar' | 'moji') => {
    if (exercise) {
      window.open(`/printable/JLPT/exercises?type=${exercise}&level=${level}`, "_blank")?.focus();
      return;
    }
    window.open(`/printable/JLPT/vocabs/N3?fromIndex=${startIndex}&toIndex=${endIndex}&shuffle=${spacedRepetition}&printKanji=${printKanji}`, "_blank")?.focus();
  };

  const filteredVocabList = useMemo(() => {
    if (startIndex === 0 && endIndex === 0) return vocabList;
    return vocabList.slice(startIndex, endIndex + 1);
  }, [vocabList, startIndex, endIndex]);

  const updateCardsCounter = () => {
    if (quantitySeen < filteredVocabList.length) {
      setQuantitySeen((prev) => prev + 1);
    } else {
      setQuantitySeen(1);
    }
  };

  const getNextIndex = () => {
    updateCardsCounter();
    if (spacedRepetition) {
      return getWeightedIndex(filteredVocabList, scores);
    } else {
      return (currentIndex + 1) % filteredVocabList.length;
    }
  };

  const handleNext = () => {
    if (!flipCardRef.current?.isFlipped()) {
      flipCardRef.current?.flip();
      return;
    } else {
      flipCardRef.current?.unflip();
    }
    setTimeout(() => {
      setCurrentIndex(getNextIndex());
    }, 200);
  };

  const updateScores = (newScores: Record<string, number>) => {
    setScores(newScores);
    saveScores(newScores);
    setTimeout(() => {
      setCurrentIndex(getNextIndex());
    }, 200);
  }

  const handleKnow = () => {
    if (!flipCardRef.current?.isFlipped()) {
      flipCardRef.current?.flip();
      return;
    } else {
      flipCardRef.current?.unflip();
    }
    const word = filteredVocabList[currentIndex].word;
    const newScores = { ...scores, [word]: (scores[word] ?? 0) + 1 };
    updateScores(newScores);
  };

  const handleDontKnow = () => {
    if (!flipCardRef.current?.isFlipped()) {
      flipCardRef.current?.flip();
      return;
    } else {
      flipCardRef.current?.unflip();
    }
    const word = filteredVocabList[currentIndex].word;
    const newScores = { ...scores, [word]: Math.max(0, (scores[word] ?? 0) - 1) };
    updateScores(newScores);
  };

  useEffect(() => {
    if (filteredVocabList.length === 0) return;
    if (spacedRepetition) {
      setCurrentIndex(getWeightedIndex(filteredVocabList, scores));
    } else {
      setCurrentIndex(0);
    }
    setQuantitySeen(1);
  }, [scores, spacedRepetition, filteredVocabList, startIndex, endIndex]);

  const currentCard = filteredVocabList[currentIndex];

  return (
    <Box alignItems="center" mt={10}>
      <Text fontSize={"xl"} bold color={"white"}>JLPT {level}</Text>
      {filteredVocabList.length > 0 && (
        <FlipCard ref={flipCardRef} vocab={currentCard} />
      )}
      <Text color={"gray.300"}>{quantitySeen}/{filteredVocabList.length}</Text>
      {spacedRepetition ? (
        <HStack mt={12} paddingX={8} justifyContent={"space-between"} width="100%">
          <Button
            width={"40%"}
            borderWidth={1}
            borderColor={"red.500"}
            backgroundColor={"transparent"}
            onPress={handleDontKnow}
          >
            Don't Know
          </Button>
          <Button
            width={"40%"}
            borderWidth={1}
            borderColor={"green.500"}
            backgroundColor={"transparent"}
            onPress={handleKnow}
          >
            Know
          </Button>
        </HStack>
      ) : (
        <HStack mt={12} paddingX={8} space={4} width={"100%"}>
          <Button onPress={handleNext} width={"100%"}>
              Next
          </Button>
        </HStack>
      )}
      <HStack alignItems="center" space={3} mb={6} width={"100%"} justifyContent="left" pl={4} pr={4} mt={16}>
        <Text color={"white"}>Spaced repetition</Text>
        <Switch isChecked={spacedRepetition} onToggle={() => setSpacedRepetition(!spacedRepetition)} />
      </HStack>
      <HStack mt={5} width="100%" px={4}>
        <Box width={120} mr={5}>
          <Button width="full" onPress={() => openPrintPage()}>Print</Button>
        </Box>
        <Box width={120}>
          <Button width="full" onPress={() => openPrintPage(true)}>Print Kanji</Button>
        </Box>
      </HStack>
      <HStack mt={5} width="100%" px={4}>
        <Box width={120} mr={5}>
          <Button width="full" onPress={() => openPrintPage(false, 'grammar')}>文法練習</Button>
        </Box>
        <Box width={120} mr={5}>
          <Button width="full" onPress={() => openPrintPage(false, 'moji')}>文字練習</Button>
        </Box>
      </HStack>
      <HStack mt={5} width="100%" px={4}>
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
    </Box>
  );
};

export default VocabsJLPT;
