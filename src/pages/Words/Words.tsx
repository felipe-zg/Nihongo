import { Box, Button, Center, Heading, HStack, Pressable, Select, Switch, Text } from "native-base";
import React from "react";
import { useScreenWidth } from "../../hooks";
import { LargeScreenWordDetails, SmallScreenWordDetails } from "./components";
import { getOptionsStep5, speak } from "../../helpers";
import CheckboxDropdown from "../../components/CheckboxDropdown/CheckboxDropdown";

function getTextColorByWordType(wordType: WordType) {
  switch(wordType) {
    case "う Verb":
      return "purple.500";
    case "る Verb":
      return "red.500";
    case "な Adjective":
      return "orange.500";
    case "い Adjective":
      return "green.500";
    default:
      return "gray.500";
  }
}

type Props = {
  deckItems: Word[];
  availableLessons: number[];
  lessons: number[];
  handleLessonChange(lesson: number): void;
  showKana: boolean;
  handleToggleShowKana(): void;
  shuffle: boolean;
  handleShuffleChange(): void;
};

const Words: React.FC<Props> = ({ 
  deckItems, 
  availableLessons,
  lessons,
  handleLessonChange,
  showKana,
  handleToggleShowKana,
  shuffle,
  handleShuffleChange
}) => {
  const [currentDeckPosition, setCurrentDeckPosition] = React.useState(0);
  const [currentQuantity, setCurrentQuantity] = React.useState(deckItems.length);
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

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  function restart() {
    setCurrentDeckPosition(0);
  }

  if(endReached || currentDeckPosition >= currentQuantity) {
    //Restart mode
    restart();
    return <></>
    // return (
    //   <Heading size="3xl">
    //     <Text color="emerald.500">END</Text>
    //   </Heading>
    // )
  }

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      <Center>
        <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
        <br/><br/><br/>
        <Pressable onPress={() => speak(currentItem.word)}>
          <Heading size="4xl">
            <Text color={getTextColorByWordType(currentItem.type)}>{currentItem.word}</Text>
          </Heading>
        </Pressable>
        <br/>
        <Text fontSize="3xl" color={isFlipped || showKana ? "blue.700" : "transparent"}>
          {currentItem.kana}
        </Text>
        <Text fontSize="xm" color={isFlipped ? "gray.500" : "transparent"}>
          {currentItem.type}
        </Text>
        <br/>
        <div style={{opacity: `${isFlipped ? 1 : 0}`, display: 'flex', flexDirection: 'column', width: '80%'}}>
          {screenWidth < 500 
            ? <SmallScreenWordDetails word={currentItem} /> 
            : <LargeScreenWordDetails word={currentItem} />
          }
          <br/>
          <Text fontSize="sm" color="red.500">{currentItem.details}</Text>
        </div>
        <br/>
        <br/>
        <Box width={{ base: "100%", md: "60%" }}>
          <HStack space={3} justifyContent="center">
            <Button width="1/2" onPress={handleFlip}>Flip</Button>
          </HStack>
        </Box>
      </Center>
      <Center>
        <br/><br/>
        <Box width={{ base: "100%", md: "60%" }}>
          <Button width="full" onPress={handleNext}>Next</Button>
        </Box>
      </Center>
      <br/><br/>
      <br/><br/>
      <Box paddingLeft={5}>
        <HStack space={2}>
          <Switch
            value={showKana}
            onValueChange={handleToggleShowKana}
            colorScheme="emerald"
            isChecked={showKana}
          />
          <Text color="emerald.500">Show kana</Text>
        </HStack>
      </Box>
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
      <br/><br/>
      <Center>
        <Box width={{ base: "100%", md: "60%" }}>
          <Select
            selectedValue={String(currentQuantity)}
            minWidth={200}
            onValueChange={(itemValue) => setCurrentQuantity(Number(itemValue))}
          >
            {getOptionsStep5(deckItems.length).map((option) => (
              <Select.Item key={option} label={`${option}`} value={String(option)} />
            ))}
          </Select>
        </Box>
      </Center>
      <br/><br/>
      <Center>
        <Box width={{ base: "100%", md: "60%" }}>
        <CheckboxDropdown
          options={availableLessons}
          selectedOptions={lessons}
          onOptionChange={handleLessonChange}
          label="Select Lessons"
        />
        </Box>
      </Center>
    </Box>
  )
};

export default Words;
