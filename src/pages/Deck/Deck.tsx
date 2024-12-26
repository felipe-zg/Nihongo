import { Box, Button, Center, FormControl, Heading, HStack, Input, Text, WarningOutlineIcon } from "native-base";
import React from "react";
import { checkEqualityByFilePath, setStateByFilePath } from "../../utils";

type PotentialFieldPaths = 
  | ['id']
  | ['word']
  | ['reading']
  | ['meaning']
  | ['level']
  | ['te']
  | ['tai']
  | ['formal', keyof Tense]
  | ['short', keyof Tense];

const emptyPotential: Potential = {
  id: 1,
  word: "",
  reading: "",
  meaning: "",
  level: 0,
  te: "",
  tai: "",
  formal: {
    present: "",
    past: "",
    negative: "",
    negativePast: "",
  },
  short: {
    present: "",
    past: "",
    negative: "",
    negativePast: "",
  },
  radicals: [],
};

type Props = {
  deckItems: Potential[];
};

const Deck: React.FC<Props> = ({ deckItems }) => {
  const [currentDeckPosition, setCurrentDeckPosition] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [ answer, setAnswer ] = React.useState<Potential>(emptyPotential);
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
      setAnswer(emptyPotential);
      setCurrentDeckPosition((prev) => prev + 1);
    }
  }


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleCheckAnswers = () => {
    setShouldValidate(!shouldValidate);
  };

  const updateAnswerField = (fieldPath: PotentialFieldPaths, value: string) => {
    setStateByFilePath(fieldPath, value, setAnswer);
  };

  const getInputBackgroundColor = (fieldPath: PotentialFieldPaths) => {
    if(!shouldValidate) {
      return "white";
    }
    return checkEqualityByFilePath(fieldPath, currentItem, answer) ? "lightgreen" : "lightcoral";
  }

  if(endReached) {
    return (
      <Heading size="3xl">
        <Text color="emerald.500">END</Text>
      </Heading>
    )
  }

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      <Center>
        <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length - 1}`}</Text>
        <br/><br/><br/>
        <Heading size="3xl">
          <Text color="emerald.500">{currentItem.word}</Text>
        </Heading>
        <br/>
        <Text fontSize="xl" color={isFlipped ? "gray.500" : "transparent"}>
          {currentItem.meaning}
        </Text>
        <Text fontSize="xl" color={isFlipped ? "gray.500" : "transparent"}>
          {currentItem.reading}
        </Text>
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
        >
          <br/>
          <HStack space={3} justifyContent="center">
            <FormControl isInvalid={shouldValidate && answer.te !== currentItem.te} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="TE Form" 
                onChangeText={(text) => updateAnswerField(['te'], text)} 
                value={answer.te}
                style={{ backgroundColor: getInputBackgroundColor(['te']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.te}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={shouldValidate && answer.tai !== currentItem.tai} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="TAI Form" 
                onChangeText={(text) => updateAnswerField(['tai'], text)} 
                value={answer.tai}
                style={{ backgroundColor: getInputBackgroundColor(['tai']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.tai}
              </FormControl.ErrorMessage>
            </FormControl>
          </HStack>
          <br/>
        </Box>  
        <br/>
        {/* FORMAL */}
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
        >
          {/* FORMAL POSITIVE */}
          <br/>
          <HStack space={3} justifyContent="center">
            <FormControl isInvalid={shouldValidate && answer.formal.present !== currentItem.formal.present} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="Present Potential" 
                onChangeText={(text) => updateAnswerField(['formal', 'present'], text)} 
                value={answer.formal.present}
                style={{ backgroundColor: getInputBackgroundColor(['formal', 'present']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.formal.present}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={shouldValidate && answer.formal.past !== currentItem.formal.past} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="Past Potential" 
                onChangeText={(text) => updateAnswerField(['formal', 'past'], text)}  
                value={answer.formal.past}
                style={{ backgroundColor: getInputBackgroundColor(['formal', 'past']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.formal.past}
              </FormControl.ErrorMessage>
            </FormControl>
          </HStack>
          {/* FORMAL NEGATIVE */}
          <br/>
          <HStack space={3} justifyContent="center">
            <FormControl isInvalid={shouldValidate && answer.formal.negative !== currentItem.formal.negative} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="Present Negative Potential" 
                onChangeText={(text) => updateAnswerField(['formal', 'negative'], text)} 
                value={answer.formal.negative}
                style={{ backgroundColor: getInputBackgroundColor(['formal', 'negative']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.formal.negative}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={shouldValidate && answer.formal.negativePast !== currentItem.formal.negativePast} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="Past Negative Potential" 
                onChangeText={(text) => updateAnswerField(['formal', 'negativePast'], text)} 
                value={answer.formal.negativePast} 
                style={{ backgroundColor: getInputBackgroundColor(['formal', 'negativePast']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.formal.negativePast}
              </FormControl.ErrorMessage>
            </FormControl>
          </HStack>
          <br/>
        </Box>  
        {/* SHORT */}
        <br/><br/>
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
        >
          {/* SHORT POSITIVE */}
          <br/>
          <HStack space={3} justifyContent="center">
            <FormControl isInvalid={shouldValidate && answer.short.present !== currentItem.short.present} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="Short Potential" 
                onChangeText={(text) => updateAnswerField(['short', 'present'], text)} 
                value={answer.short.present}
                style={{ backgroundColor: getInputBackgroundColor(['short', 'present']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.short.present}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={shouldValidate && answer.short.past !== currentItem.short.past} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="Short Past Potential" 
                onChangeText={(text) => updateAnswerField(['short', 'past'], text)}  
                value={answer.short.past}
                style={{ backgroundColor: getInputBackgroundColor(['short', 'past']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.short.past}
              </FormControl.ErrorMessage>
            </FormControl>
          </HStack>
          {/* SHORT NEGATIVE */}
          <br/>
          <HStack space={3} justifyContent="center">
            <FormControl isInvalid={shouldValidate && answer.short.negative !== currentItem.short.negative} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="Short Negative Potential" 
                onChangeText={(text) => updateAnswerField(['short', 'negative'], text)} 
                value={answer.short.negative}
                style={{ backgroundColor: getInputBackgroundColor(['short', 'negative']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.short.negative}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={shouldValidate && answer.short.negativePast !== currentItem.short.negativePast} w="100%" maxW="300px">
              <Input 
                variant="underlined" 
                placeholder="Short Past Negative Potential" 
                onChangeText={(text) => updateAnswerField(['short', 'negativePast'], text)} 
                value={answer.short.negativePast} 
                style={{ backgroundColor: getInputBackgroundColor(['short', 'negativePast']) }}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {currentItem.short.negativePast}
              </FormControl.ErrorMessage>
            </FormControl>
          </HStack>
          <br/>
        </Box> 
        <br/><br/><br/><br/>
        <Box width={{ base: "100%", md: "60%" }}>
          <Button width="full" onPress={handleNext}>Next</Button>
        </Box>
      </Center>
    </Box>
  )
};

export default Deck;
