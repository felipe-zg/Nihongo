import React, { useRef, useState } from "react";
import { Box, Button, Divider, HStack, Text, Modal } from "native-base";
import FlipCard, { FlipCardHandle } from "../../../components/FlipCard/FlipCard";
import { Word } from "../../FastPass/components/Word/Word";

type Props = {
  words: any[]; // Replace 'any' with the actual type of your words when available
};

const ITWordsCards: React.FC<Props> = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [showExampleWordsModal, setShowExampleWordsModal] = useState(false);
  const flipCardRef = useRef<FlipCardHandle>(null);

  const currentCard = words[currentIndex];

  function shuffleCards(): void {
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    setCurrentIndex(0);
    flipCardRef.current?.unflip();
    setIsShuffled(true);
  }

  function unshuffleCards(): void {
    words.sort((a, b) => a.id - b.id);
    setCurrentIndex(0);
    flipCardRef.current?.unflip();
    setIsShuffled(false);
  }

  function handleNext(): void {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 200);
  };

  function handlePrev(): void {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
    }, 200);
  };

  function onNextButtonClick(): void {
    if (flipCardRef.current?.isFlipped()) {
      flipCardRef.current?.unflip();
      handleNext();
    } else {
      flipCardRef.current?.flip();
    }
  };

  function onExampleWordsClick(): void {
    setShowExampleWordsModal(true);
  }

  return (
    <Box alignItems="center" mt={10}>
      <Text fontSize={"xl"} bold color={"white"}>漢字</Text>
      <Text color="pink.500">{`${currentIndex + 1}/${words.length}`}</Text>
      {words.length > 0 && (
        <FlipCard 
          ref={flipCardRef}
          onNext={handleNext}
          onPrev={handlePrev}
          CardFrontContent={
            <Word ruby={currentCard.wordRuby} showFurigana={false} fontSize="7xl" color="yellow.400" />
          }
          CardBackContent={
            <Box alignItems="center">
              <Word ruby={currentCard.wordRuby} showFurigana={true} fontSize="5xl" color="primary.400" />
              <Text mt={5} fontSize="md" color="tertiary.400">{currentCard.meaning}</Text>
              {currentCard.notes && <Text fontSize="sm" color="red.500" mb={1}>{currentCard.notes}</Text>}
              {currentCard.exampleSentence && <Text fontSize="md" color="violet.200">{currentCard.exampleSentence}</Text>}
            </Box>
          } 
        />
      )}

      <HStack mt={12} width={{base: "90vw", lg: "60vw"}} mb={10}>
        <HStack flex={1} space={2}>
          <Button onPress={isShuffled ? unshuffleCards : shuffleCards} variant="outline" colorScheme="yellow">
              {isShuffled ? "Unshuffle" : "Shuffle"}
          </Button>
          <Button onPress={onExampleWordsClick} variant="outline" colorScheme="red">
              Example words
          </Button>
        </HStack>
        <Box flex={1}>
          <Button onPress={onNextButtonClick}>
              Next
          </Button>
        </Box>
      </HStack>

      <Modal isOpen={showExampleWordsModal} onClose={() => setShowExampleWordsModal(false)} size="lg">
        <Modal.Content bg={"gray.900"} maxWidth="650" mt={0} mb={"auto"}>
          <Modal.CloseButton />
          <Modal.Body>
            <Box mt={2} w="100%" borderWidth={1} borderColor="gray.500" p={2} borderRadius={8}>
              {currentCard.extraVocabulary.map((extra: { wordRuby: string; meaning: string; }, index: number) => (
                  <Box key={index}>
                    <Word ruby={extra.wordRuby} showFurigana={true} fontSize="md" color="pink.500" />
                    <Text fontSize="xs" color="pink.400">{extra.meaning}</Text>
                    { index !== currentCard.extraVocabulary.length - 1 && <Divider mb={1} bg="gray.500" thickness={0.5}/> }
                  </Box>
                ))}
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default ITWordsCards;
