import { Box, Button, Center, Heading, HStack, Switch, Text } from "native-base";
import React from "react";
import { useScreenWidth } from "../../../hooks";
import { NewWords } from "../../../components";

type Props = {
  deckItems: Nihongo500N3[];
  showKana: boolean;
  handleShowKanaChange(): void;
  shuffle: boolean;
  handleShuffleChange(): void;
};

const Nihongo500: React.FC<Props> = ({ 
  deckItems, 
  showKana,
  handleShowKanaChange,
  shuffle,
  handleShuffleChange,
}) => {
  const [currentDeckPosition, setCurrentDeckPosition] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const screenWidth = useScreenWidth();

  const currentItem = React.useMemo(() => deckItems[currentDeckPosition], [
    currentDeckPosition,
    deckItems,
  ]);

  const endReached = currentDeckPosition === deckItems.length;

  const handleNext = () => {
    if (!endReached) {
      if(!isFlipped) {
        setIsFlipped(true);
        return;
      }
      setIsFlipped(false);
      setCurrentDeckPosition((prev) => prev + 1);
    }
  }

  function restart() {
    setCurrentDeckPosition(0);
  }

  if(endReached) {
    restart();
    return <></>
  }

  const Commands = () => (
    <HStack>
      <HStack flex={1}>
        <Box display={screenWidth > 500 ? "flex" : "none"}>
          <HStack space={2}>
            <Text color="emerald.500">Show Kana</Text>
            <Switch
              value={showKana}
              onValueChange={handleShowKanaChange}
              colorScheme="emerald"
              isChecked={showKana}
            />
          </HStack>
        </Box>
        <Box ml={5} display={screenWidth > 500 ? "flex" : "none"}>
          <HStack space={2}>
            <Text color="emerald.500">Shuffle</Text>
            <Switch
              value={shuffle}
              onValueChange={handleShuffleChange}
              colorScheme="emerald"
              isChecked={shuffle}
            />
          </HStack>
        </Box>
      </HStack>
      <Center flex={1}>
        <Text  color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
      </Center>
      <Box flex={1}>
        <Button onPress={handleNext}>Next</Button>
      </Box>
    </HStack>
  )

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      <Commands />
      <Center>
        <br/>
        <Heading size="2xl">
          <Text color="primary.500">{currentItem.kanji}</Text>
        </Heading>
        <br/>
        <Text fontSize="xl" color={isFlipped ? "fuchsia.500" : "transparent"}>
          {currentItem.kana}
        </Text>
        <Text fontSize="md" color={isFlipped ? "fuchsia.500" : "transparent"}>
          {currentItem.meaning}
        </Text>
        <br/>
        <Box>
          <Text fontSize="lg" color={isFlipped ? "teal.500" : "transparent"}>
            {currentItem.example}
          </Text>
          <Text fontSize="xs" color={isFlipped ? "teal.500" : "transparent"} mb={5}>
            {currentItem.exampleMeaning}
          </Text>
        </Box>
      </Center>
      {currentItem.parts && isFlipped && <NewWords words={currentItem.parts} />}
      {currentItem.notes && currentItem.notes.split("\n").map((note) => (
        <Text fontSize="xs" color={isFlipped ? "gray.500" : "transparent"}>
          {note}
        </Text>
      ))}
    </Box>
  )
};

export default Nihongo500;
