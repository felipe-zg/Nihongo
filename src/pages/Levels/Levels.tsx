import { Box, Button, Center, Heading, HStack, Pressable, Switch, Text } from "native-base";
import React from "react";
import CheckboxDropdown from "../../components/CheckboxDropdown/CheckboxDropdown";
import { speak } from "../../helpers";

const availableLevels: NLevels[] = ["N5", "N4", "N3", "N2", "N1"];

type Props = {
  deckItems: NLevel[];
  levels: NLevels[];
  handleLevelChange(level: NLevels): void;
  shuffle: boolean;
  handleShuffleChange(): void;
};

const Levels: React.FC<Props> = ({ 
  deckItems, 
  levels,
  handleLevelChange,
  shuffle,
  handleShuffleChange,
}) => {
  const [currentDeckPosition, setCurrentDeckPosition] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);

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

  function getText(text: string | string[], separator = ", ") {
    if (Array.isArray(text)) {
      return text.join(separator);
    }
    return text;
  }

  if(endReached) {
    restart();
    return <></>
  }

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      <Center>
        <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
        <br/><br/><br/>
        <Heading size="xl">
          <Text color="emerald.500">{currentItem.kanji}</Text>
        </Heading>
        <Heading size="sm">
          <Text color="emerald.500">{currentItem.kana}</Text>
        </Heading>
        <br/>
        <Box background={"white"} opacity={isFlipped ? 100 : 0} padding={5} borderRadius={5}>
          <Text color="emerald.500">{getText(currentItem.meaning)}</Text>
          <Pressable onPress={() => speak(getText(currentItem.phrase, '\n'))}>
            <Text color="emerald.500">{getText(currentItem.phrase, '\n')}</Text>
          </Pressable>
          <Text color="emerald.500">{getText(currentItem.phraseMeaning, '\n')}</Text>
        </Box>
        <br/>
        <br/>
      </Center>

      <Center>
        <br/><br/>
        <Box width={{ base: "100%", md: "60%" }}>
          <Button width="full" onPress={handleNext}>Next</Button>
        </Box>
      </Center>
      <Center>
        <br/><br/>
        <Box width={{ base: "100%", md: "60%" }}>
        <CheckboxDropdown
          options={availableLevels}
          selectedOptions={levels}
          onOptionChange={handleLevelChange}
          label="Select Levels"
        />
        </Box>
      </Center>
      <br/><br/>
      <Box paddingLeft={5}>
        <HStack space={2}>
          <Switch
            value={shuffle}
            onValueChange={handleShuffleChange}
            colorScheme="emerald"
            isChecked={shuffle}
          />
          <Text color="emerald.500">Shuffle</Text>
        </HStack>
      </Box>
    </Box>
  )
};

export default Levels;
