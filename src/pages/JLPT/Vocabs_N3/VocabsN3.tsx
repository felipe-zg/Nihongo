import React, { useEffect, useState } from "react";
import { Box, Button, Switch, HStack, Text } from "native-base";
import FlipCard from "./components/FlipCard";

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

const VocabsN3: React.FC<Props> = ({ vocabList }) => {
  const [scores, setScores] = useState<Record<string, number>>(() => loadScores());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);

  const getNextIndex = () => {
    if (shuffled) {
      return getWeightedIndex(vocabList, scores);
    } else {
      return (currentIndex + 1) % vocabList.length;
    }
  };

  const handleNext = () => {
    setCurrentIndex(getNextIndex());
  };

  const handleKnow = () => {
    const word = vocabList[currentIndex].word;
    const newScores = { ...scores, [word]: (scores[word] ?? 0) + 1 };
    setScores(newScores);
    saveScores(newScores);
    setCurrentIndex(getNextIndex());
  };

  const handleDontKnow = () => {
    const word = vocabList[currentIndex].word;
    const newScores = { ...scores, [word]: Math.max(0, (scores[word] ?? 0) - 1) };
    setScores(newScores);
    saveScores(newScores);
    setCurrentIndex(getNextIndex());
  };

  useEffect(() => {
    if (shuffled) {
      setCurrentIndex(getWeightedIndex(vocabList, scores));
    } else {
      setCurrentIndex(0);
    }
  }, [scores, shuffled, vocabList]);

  const currentCard = vocabList[currentIndex];

  return (
    <Box alignItems="center" mt={70}>
      <FlipCard vocab={currentCard} />
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
    </Box>
  );
};

export default VocabsN3;
