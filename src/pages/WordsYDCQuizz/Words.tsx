import { Box, Button, Center, Heading, Input, Select, Text } from "native-base";
import React from "react";
import { arrayToString, getOptionsStep5 } from "../../helpers";
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
};

const Words: React.FC<Props> = ({ 
  deckItems, 
  availableLessons,
  lessons,
  handleLessonChange,
}) => {
  const [currentDeckPosition, setCurrentDeckPosition] = React.useState(0);
  const [currentQuantity, setCurrentQuantity] = React.useState(deckItems.length);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [answer, setAnswer] = React.useState('');
  const [shouldValidate, setShouldValidate] = React.useState(false);

  const currentItem = React.useMemo(() => deckItems[currentDeckPosition], [
    currentDeckPosition,
    deckItems,
  ]);

  const endReached = currentDeckPosition === deckItems.length;

  const handleNext = () => {
    if (!endReached) {
      if(!isFlipped) {
        setShouldValidate(true);
        setIsFlipped(true);
        return;
      }
      setShouldValidate(false);
      setIsFlipped(false);
      setAnswer('');
      setCurrentDeckPosition((prev) => prev + 1);
    }
  };

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputLeftIcon = React.useMemo(() => {
    let icon = "🟡";
    if (shouldValidate) {
      if (answer === currentItem.word || answer === currentItem.kana) {
        icon = "🟢";
      } else {
        icon = "🔴";
      }
    }
    return <span style={{marginRight: '10px'}}>{icon}</span>;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldValidate]);

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      <Center>
        <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
        <br/><br/><br/>
        <Heading size="xl">
          <Text color={getTextColorByWordType(currentItem.type)}>{arrayToString(currentItem.meaning)}</Text>
        </Heading>
        <br/>
        <Heading size="lg">
          <Text color={isFlipped ? getTextColorByWordType(currentItem.type): "transparent"}>{currentItem.word}</Text>
        </Heading>
        <br/>
        <Text fontSize="lg" color={isFlipped ? "blue.700" : "transparent"}>
          {currentItem.kana}
        </Text>
        <br/>
        <br/>
        <br/>
      </Center>
      <Center>
        <Box width={{ base: "100%", md: "60%" }}>
          <Input rightElement={inputLeftIcon} width="full" value={answer} onChangeText={ value => setAnswer(value)} placeholder="Kanji or Kana" />
        </Box>
        <br/><br/>
        <Box width={{ base: "100%", md: "60%" }}>
          <Button width="full" onPress={handleNext}>Next</Button>
        </Box>
      </Center>
      <br/><br/>
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
