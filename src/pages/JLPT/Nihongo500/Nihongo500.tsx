import { Box, Button, Center, Heading, HStack, Pressable, Switch, Text } from "native-base";
import React from "react";
import { useScreenWidth } from "../../../hooks";
import { NewWords } from "../../../components";
import { speak } from "../../../helpers";

type Props = {
  deckItems: Nihongo500N3[];
  challengeMode: boolean;
  handleChallengeModeChange(): void;
  shuffle: boolean;
  handleShuffleChange(): void;
};

const Nihongo500: React.FC<Props> = ({ 
  deckItems, 
  challengeMode,
  handleChallengeModeChange,
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

  function _handleShuffleChange() {
    setCurrentDeckPosition(0);
    setIsFlipped(false);
    handleShuffleChange();
  };

  if(endReached) {
    restart();
    return <></>
  }

  const Commands = () => (
    <HStack alignItems="center" mt="auto" mb={30}>
      <HStack flex={1}>
        <Box display={screenWidth > 500 ? "flex" : "none"}>
          <HStack space={2}>
            <Text color="emerald.500">Challenge</Text>
            <Switch
              value={challengeMode}
              onValueChange={handleChallengeModeChange}
              colorScheme="emerald"
              isChecked={challengeMode}
            />
          </HStack>
        </Box>
        <Box ml={5} display={screenWidth > 500 ? "flex" : "none"}>
          <HStack space={2}>
            <Text color="emerald.500">Shuffle</Text>
            <Switch
              value={shuffle}
              onValueChange={_handleShuffleChange}
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
      <Center>
        <br/>
        <Heading size="2xl">
          <Text color="primary.500">{challengeMode ? currentItem.meaning : currentItem.kanji}</Text>
        </Heading>
        <br/>
        <Text fontSize="xl" color={isFlipped ? "fuchsia.500" : "transparent"}>
          {currentItem.kana}
        </Text>
        <Text fontSize="md" color={isFlipped ? "fuchsia.500" : "transparent"}>
          {challengeMode ? currentItem.kanji : currentItem.meaning}
        </Text>
        <br/>
        <Box>
          <Pressable onPress={() => speak(currentItem.example)}>
            <Text fontSize="lg" color={isFlipped ? "teal.500" : "transparent"}>
              {currentItem.example} 
            </Text>
          </Pressable>
          <Text fontSize="xs" color={isFlipped ? "teal.500" : "transparent"} mb={5}>
            {currentItem.exampleMeaning}
          </Text>
        </Box>
      </Center>
      {currentItem.parts && isFlipped && <NewWords words={currentItem.parts} />}
      {currentItem.notes && currentItem.notes.split("\n").map((note) => (
        <Text textAlign="left" fontSize="xs" color={isFlipped ? "gray.500" : "transparent"}>
          {note.trim()}
        </Text>
      ))}
      <Commands />
    </Box>
  )
};

export default Nihongo500;
