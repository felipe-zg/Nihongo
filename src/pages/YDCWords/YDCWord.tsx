import { Box, Button, Center, FormControl, Heading, HStack, Input, Text, WarningOutlineIcon } from "native-base";
import React from "react";

type WordFieldPaths = 
  | ['id']
  | ['word']
  | ['reading']
  | ['meaning']
  | ['level']

const emptyWords: Word | WordWithExample = {
  id: 1,
  word: "",
  reading: "",
  meaning: "",
  level: 0,
};

type Props = {
  deckItems: Array<Word | WordWithExample>;
};

const YDCWords5th: React.FC<Props> = ({ deckItems }) => {
  const [currentDeckPosition, setCurrentDeckPosition] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [ answer, setAnswer ] = React.useState<Word | WordWithExample>(emptyWords);
  const [shouldValidate, setShouldValidate] = React.useState(false);

  const currentItem = React.useMemo(() => deckItems[currentDeckPosition], [
    currentDeckPosition,
    deckItems,
  ]);

  const endReached = currentDeckPosition === deckItems.length;

  const handleNext = () => {
    if (!endReached) {
      if(!isFlipped || !shouldValidate) {
        setIsFlipped(true);
        setShouldValidate(true);
        return;
      }
      setShouldValidate(false);
      setIsFlipped(false);
      setAnswer(emptyWords);
      setCurrentDeckPosition((prev) => prev + 1);
    }
  }


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleCheckAnswers = () => {
    setShouldValidate(!shouldValidate);
  };

  const updateAnswerField = (fieldPath: WordFieldPaths, value: string) => {
    setAnswer((prev) => {
      const updatedAnswer = { ...prev };
      let field: any = updatedAnswer;

      fieldPath.slice(0, -1).forEach((key) => {
        field = field[key];
      });

      field[fieldPath[fieldPath.length - 1]] = value;
      return updatedAnswer;
    });
  };

    
  if(endReached) {
    return (
      <Heading size="3xl">
        <Text color="emerald.500">END</Text>
      </Heading>
    )
  }

  return (
    <div>
      <Center>
      　<Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length - 1}`}</Text>
        <br/><br/><br/>
        <Heading size="4xl">
          <Text color="emerald.500">{currentItem.word}</Text>
        </Heading>
        <br/>
        <Text fontSize="xl" color={"gray.500"}>
          {currentItem.reading}
        </Text>
        <Text fontSize="xl" color={isFlipped ? "gray.500" : "transparent"}>
          {currentItem.meaning}
        </Text>
        {'example' in currentItem && (
          <Text fontSize="xl" color={isFlipped ? "gray.500" : "transparent"}>
            {currentItem.example}
          </Text>
        )}
        {'exampleReading' in currentItem && (
          <Text fontSize="xl" color={isFlipped ? "gray.500" : "transparent"}>
            {currentItem.exampleReading}
          </Text>
        )}
        {'exampleMeaning' in currentItem && (
          <Text fontSize="xl" color={isFlipped ? "gray.500" : "transparent"}>
            {currentItem.exampleMeaning}
          </Text>
        )}
        <br/>
        <Box width={{ base: "100%", md: "60%" }}>
          <HStack space={3} justifyContent="center">
            <Button width="1/2" onPress={handleFlip}>Flip</Button>
            <Button width="1/2" onPress={handleCheckAnswers}>Check Answers</Button>
          </HStack>
        </Box>
      </Center>
      <br/><br/><br/><br/>
      <Center>
        <Box 
          width={{ base: "100%", md: "60%" }}
          overflow="hidden" 
          borderColor="coolGray.200" 
          borderWidth="1" 
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
          }} 
          _web={{
            shadow: 2,
            borderWidth: 0
          }}  
          _light={{
            backgroundColor: "gray.50"
          }}
          paddingBottom={5}
        >
          <br/>
          <Center>
            <FormControl isInvalid={shouldValidate && answer.meaning !== currentItem.meaning} w="100%" maxW="500px">
              <Input 
                variant="underlined" 
                placeholder="Meaning in english" 
                onChangeText={(text) => updateAnswerField(['meaning'], text)}
                value={answer.meaning}
                style={{ backgroundColor: shouldValidate && answer.meaning === currentItem.meaning ? "lightgreen" : "white" }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.meaning}
              </FormControl.ErrorMessage>
            </FormControl>
          </Center>
        </Box> 
        <br/><br/><br/><br/>
        <Box width={{ base: "100%", md: "60%" }}>
          <Button width="full" onPress={handleNext}>Next</Button>
        </Box>
      </Center>
    </div>
  )
};

export default YDCWords5th;
