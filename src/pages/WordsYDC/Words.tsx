import { Box, Button, Center, Heading, HStack, Select, Text } from "native-base";
import React from "react";
import { useScreenWidth } from "../../hooks";
import { LargeScreenWordDetails, SmallScreenWordDetails } from "./components";
import { getOptionsStep5 } from "../../helpers";

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
  deckItems: WordYDC[];
  availableLessons: number[];
  lessons: number[];
  handleLessonChange(lesson: number): void;
  showKana: boolean;
  handleToggleShowKana(): void;
};

const Words: React.FC<Props> = ({ 
  deckItems, 
  availableLessons,
  lessons,
  handleLessonChange,
  showKana,
  handleToggleShowKana,
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
    <div>
      <Center>
        <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
        <br/><br/><br/>
        <Heading size="4xl">
          <Text color={getTextColorByWordType(currentItem.type)}>{currentItem.word}</Text>
        </Heading>
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
      <div style={{display: 'flex', padding: '0px 32px'}}>
        <span>Lessons: &nbsp;&nbsp;
          {availableLessons.map((lesson) => (
            <span>
              <input
                type="checkbox"
                checked={lessons.includes(lesson)}
                onChange={() => handleLessonChange(lesson)}
              />
              <label>{lesson}&nbsp;&nbsp;</label>
            </span>
          ))}
        </span>
        <br/>
      </div>
      <br/><br/>
      <span>
        <label>Show kana: &nbsp;&nbsp;</label>
        <input type="checkbox" checked={showKana} onChange={handleToggleShowKana} />
      </span>
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
    </div>
  )
};

export default Words;
