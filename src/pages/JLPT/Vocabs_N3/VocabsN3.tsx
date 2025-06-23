import React, { useEffect, useState } from "react";
import { Box, Button, Switch, HStack, Text } from "native-base";
import FlipCard from "./components/FlipCard";

type TVocabN3 = {
  word: string;
  reading: string;
  meaning: string;
  example?: string;
  exampleReading?: string;
  exampleMeaning?: string;
};

type Props = {
  vocabList: TVocabN3[];
};

const shuffleArray = (arr: TVocabN3[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const VocabsN3: React.FC<Props> = ({ vocabList }) => {
  const [index, setIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [cardList, setCardList] = useState<TVocabN3[]>(vocabList);

  useEffect(() => {
    setCardList(shuffled ? shuffleArray(vocabList) : vocabList);
    setIndex(0); // Reset to first card
  }, [shuffled, vocabList]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cardList.length);
  };

  return (
    <Box alignItems="center" mt={10}>
      <FlipCard vocab={cardList[index]} />
      <Text mt={4} color="gray.500">
        {index + 1} / {cardList.length}
      </Text>
      <HStack mt={4} paddingX={8} space={3} width={"100%"}>
        <Button mt={8} onPress={handleNext} width={"100%"}>
            Next
        </Button>
      </HStack>
      <HStack alignItems="center" space={3} mb={6} width={"100%"} justifyContent="left" pl={4} pr={4} mt={8}>
        <Text color={"white"}>Shuffle</Text>
        <Switch isChecked={shuffled} onToggle={() => setShuffled(!shuffled)} />
      </HStack>
    </Box>
  );
};

export default VocabsN3;
