import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Switch, HStack, Text } from "native-base";
import FlipCard, { FlipCardHandle } from "./components/FlipCard";

type Props = {
  vocabList: TVocabN3[];
};

// const shuffleArray = (arr: TVocabN3[]) => {
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

const getWeightedIndex = (list: TVocabN3[], scores: Record<string, number>) => {
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

const openPrintPage = (shuffle = false) => {
  window.open(`/printable/JLPT/vocabs/N3?fromIndex=${0}&toIndex=${29}&shuffle=${shuffle}`, "_blank")?.focus();
};

const VocabsN3: React.FC<Props> = ({ vocabList }) => {
  const [scores, setScores] = useState<Record<string, number>>(() => loadScores());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantitySeen, setQuantitySeen] = useState(1);
  const [shuffled, setShuffled] = useState(false);
  const flipCardRef = useRef<FlipCardHandle>(null);

  const updateCardsCounter = () => {
    if (quantitySeen < vocabList.length) {
      setQuantitySeen((prev) => prev + 1);
    } else {
      setQuantitySeen(1);
    }
  };

  const getNextIndex = () => {
    updateCardsCounter();
    if (shuffled) {
      return getWeightedIndex(vocabList, scores);
    } else {
      return (currentIndex + 1) % vocabList.length;
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
    const word = vocabList[currentIndex].word;
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
    const word = vocabList[currentIndex].word;
    const newScores = { ...scores, [word]: Math.max(0, (scores[word] ?? 0) - 1) };
    updateScores(newScores);
  };

  useEffect(() => {
    if (shuffled) {
      setCurrentIndex(getWeightedIndex(vocabList, scores));
    } else {
      setCurrentIndex(0);
    }
    setQuantitySeen(1);
  }, [scores, shuffled, vocabList]);

  const currentCard = vocabList[currentIndex];

  return (
    <Box alignItems="center" mt={70}>
      <Text fontSize={"xl"} bold color={"white"}>JLPT N3</Text>
      <FlipCard ref={flipCardRef} vocab={currentCard} />
      <Text color={"gray.300"}>{quantitySeen}/{vocabList.length}</Text>
      {shuffled ? (
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
        <Switch isChecked={shuffled} onToggle={() => setShuffled(!shuffled)} />
      </HStack>
      <HStack mt={5} width="100%" px={4}>
        <Box width={120} mr={5}>
          <Button width="full" onPress={() => openPrintPage()}>Print</Button>
        </Box>
        <Box width={120}>
          <Button width="full" onPress={() => openPrintPage(true)}>Print shuffled</Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default VocabsN3;
