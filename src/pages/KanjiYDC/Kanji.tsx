import { Box, Button, Center, Heading, HStack, Text, VStack } from "native-base";
import React from "react";

type Props = {
  deckItems: KanjiYDC[];
  onlyMainExamplesEnabled: boolean;
  handleOnlyMainExamplesEnabled(): void;
  lessons: number[];
  handleLessonChange(lesson: number): void;
};

const Kanji: React.FC<Props> = ({ 
  deckItems, 
  onlyMainExamplesEnabled,
  handleOnlyMainExamplesEnabled,
  lessons,
  handleLessonChange,
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


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  if(endReached) {
    return (
      <Heading size="3xl">
        <Text color="emerald.500">END</Text>
      </Heading>
    )
  }

  return (
    <div>
      <div style={{display: 'flex', padding: '0px 32px'}}>
        <span> 
        <input
          type="checkbox"
          checked={onlyMainExamplesEnabled}
          onChange={handleOnlyMainExamplesEnabled}
        />
        <label>Only main examples</label>
        </span>
      </div>
      <Center>
        <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
        <br/><br/><br/>
        <Heading size="4xl">
          <Text color="emerald.500">{currentItem.kanji}</Text>
        </Heading>
        <br/>
        <Text fontSize="3xl" color={isFlipped ? "blue.700" : "transparent"}>
          {currentItem.onyomi.map((onyomi, index) => `${onyomi}${index === currentItem.onyomi.length - 1 ? "" : ", "}`)}
        </Text>
        <Text fontSize="3xl" color={isFlipped ? "orange.700" : "transparent"}>
          {currentItem.kunyomi.map((kunyomi, index) => `${kunyomi}${index === currentItem.kunyomi.length - 1 ? "" : ", "}`)}
        </Text>
        <Text fontSize="2xl" color={isFlipped ? "black.500" : "transparent"}>
          {currentItem.meaning}
        </Text>
        <br/>
        <div style={{opacity: `${isFlipped ? 1 : 0}`, display: 'flex', flexDirection: 'column', width: '50%'}}>
          <Box>
            {/* Table Header */}
            <HStack justifyContent="space-between" bg="gray.200" p={2} alignItems="center">
              <Box flex={1} alignItems="center">
                <Text bold>Reading</Text>
              </Box>
              <Box flex={1} alignItems="center">
                <Text bold>Kana</Text>
              </Box>
              <Box flex={1} alignItems="center">
                <Text bold>Meaning</Text>
              </Box>
              <Box flex={1} alignItems="center">
                <Text bold>Sentence</Text>
              </Box>
            </HStack>
            {/* Table Body */}
            <VStack>
              {currentItem.examples.map((example, index) =>
                onlyMainExamplesEnabled && example.type !== "main" ? null : (
                  <HStack
                    key={index}
                    justifyContent="space-between"
                    p={2}
                    bg={index % 2 === 0 ? "gray.100" : "white"}
                    alignItems="center"
                  >
                    <Box flex={1} alignItems="center">
                      <Text color={example.type === "main" ? "red.500" : "gray.500"}>
                        {example.reading}
                      </Text>
                    </Box>
                    <Box flex={1} alignItems="center">
                      <Text color={example.type === "main" ? "red.500" : "gray.500"}>
                        {example.kana}
                      </Text>
                    </Box>
                    <Box flex={1} alignItems="center">
                      <Text color={example.type === "main" ? "red.500" : "gray.500"}>
                        {example.meaning.join(", ")}
                      </Text>
                    </Box>
                    <Box flex={1} alignItems="center">
                      <Text color={example.type === "main" ? "red.500" : "gray.500"}>
                        {example.sentence}
                      </Text>
                    </Box>
                  </HStack>
                )
              )}
            </VStack>
          </Box>
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
      <div style={{display: 'flex', padding: '0px 32px'}}>
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '32px'}}>
          <span>
            <input
              type="checkbox"
              checked={lessons.includes(4)}
              onChange={() => handleLessonChange(4)}
            />
            <label>Lesson 4</label>
          </span>
          <span>
            <input
              type="checkbox"
              checked={lessons.includes(5)}
              onChange={() => handleLessonChange(5)}
            />
            <label>Lesson 5</label>
          </span>
          <span>
            <input
              type="checkbox"
              checked={lessons.includes(6)}
              onChange={() => handleLessonChange(6)}
            />
            <label>Lesson 6</label>
          </span>
        </div>
      </div>
    </div>
  )
};

export default Kanji;
