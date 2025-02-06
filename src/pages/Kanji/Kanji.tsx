import { Box, Button, Center, Heading, HStack, Select, Switch, Text } from "native-base";
import React, { useRef } from "react";
import Carousel from "./components/Carousel/Carousel";
import CheckboxDropdown from "../../components/CheckboxDropdown/CheckboxDropdown";
import { useScreenWidth } from "../../hooks";
import Table from "./components/Table/Table";
import { KanjiReadingTable } from "./components";
import MemoryMode from "./components/MemoryMode/MemoryMode";
import ExamplesMode from "./components/ExamplesMode/ExamplesMode";

const modes: KanjiYDCMode[] = ['table', 'carousel', 'quizz'];

type Props = {
  deckItems: KanjiYDC[];
  onlyMainExamplesEnabled: boolean;
  handleOnlyMainExamplesEnabled(): void;
  availableLessons: number[];
  lessons: number[];
  handleLessonChange(lesson: number): void;
  mode: KanjiYDCMode;
  handleModeChange(mode: KanjiYDCMode): void;
  shuffle: boolean;
  handleShuffleChange(): void;
  memoryMode: boolean;
  handleMemoryModeChange(): void;
  examplesMode: boolean;
  handleExamplesModeChange(): void;
};

const Kanji: React.FC<Props> = ({ 
  deckItems, 
  onlyMainExamplesEnabled,
  handleOnlyMainExamplesEnabled,
  availableLessons,
  lessons,
  handleLessonChange,
  mode,
  handleModeChange,
  shuffle,
  handleShuffleChange,
  memoryMode,
  handleMemoryModeChange,
  examplesMode,
  handleExamplesModeChange,
}) => {
  const [currentDeckPosition, setCurrentDeckPosition] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const screenWidth = useScreenWidth();
  const memoryModeRef = useRef<MemoryModeRef>(null);

  const currentItem = React.useMemo(() => deckItems[currentDeckPosition], [
    currentDeckPosition,
    deckItems,
  ]);

  const endReached = currentDeckPosition === deckItems.length;

  const handleNext = () => {
    if (!endReached) {
      if (memoryMode) {
        setCurrentDeckPosition((prev) => prev + 1);
        memoryModeRef.current?.handleNext();
        return;
      }
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

  if(endReached) {
    restart();
    return <></>
  }

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      {memoryMode && (
        <Center>
          <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
          <br/><br/><br/>
          <MemoryMode ref={memoryModeRef} kanji={currentItem.meaning} data={currentItem.examples} onlyMainExamplesEnabled={onlyMainExamplesEnabled} />
        </Center>
      )}
      {examplesMode && (
        <Center>
          <ExamplesMode data={deckItems.map(item => item.examples).flat()} onlyMainExamplesEnabled={onlyMainExamplesEnabled} />
        </Center>
      )}

      {!examplesMode && !memoryMode && (
        <Center>
          <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
          <br/><br/><br/>
          <Heading size="4xl">
            <Text color="emerald.500">{currentItem.kanji}</Text>
          </Heading>
          <br/>
          <KanjiReadingTable 
            onyomi={currentItem.onyomi} 
            kunyomi={currentItem.kunyomi} 
            meaning={currentItem.meaning}
            display={isFlipped}
          />
          <br/>
          <div style={{opacity: `${isFlipped ? 1 : 0}`, display: 'flex', flexDirection: 'column', width: screenWidth > 500 ? '50%' : '100%'}}>
            {mode === "table" && <Table data={currentItem.examples} onlyMainExamplesEnabled={onlyMainExamplesEnabled} />}
            {mode === "carousel" && <Carousel data={currentItem.examples} onlyMainExamplesEnabled={onlyMainExamplesEnabled} />}
          </div>
          <br/>
          <br/>
          <Box width={{ base: "100%", md: "60%" }}>
            <HStack space={3} justifyContent="center">
              <Button width="1/2" opacity={isFlipped ? 0 : 100} disabled={isFlipped} onPress={handleFlip}>Flip</Button>
            </HStack>
          </Box>
        </Center>
      )}
      
      {!examplesMode && (
        <>
          <Center>
            <br/><br/>
            <Box width={{ base: "100%", md: "60%" }}>
              <Button width="full" onPress={handleNext}>Next</Button>
            </Box>
          </Center>
          <Center>
            <br/><br/>
            <Box width={{ base: "100%", md: "60%" }}>
              <Select
                selectedValue={String(mode)}
                minWidth={200}
                onValueChange={(itemValue) => handleModeChange(itemValue as KanjiYDCMode)}
              >
                {modes.map((mode) => (
                  <Select.Item key={mode} value={mode} label={mode} />
                ))}
              </Select>
            </Box>
          </Center>
        </>
      )}
      <Center>
        <br/><br/>
        <Box width={{ base: "100%", md: "60%" }}>
        <CheckboxDropdown
          options={availableLessons}
          selectedOptions={lessons}
          onOptionChange={handleLessonChange}
          label="Select Lessons"
        />
        </Box>
      </Center>
      <br/><br/>
      <Box paddingLeft={5}>
        <HStack space={2}>
          <Switch
            value={onlyMainExamplesEnabled}
            onValueChange={handleOnlyMainExamplesEnabled}
            colorScheme="emerald"
            isChecked={onlyMainExamplesEnabled}
          />
          <Text color="emerald.500">Only main examples</Text>
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
      <Box paddingLeft={5}>
        <HStack space={2}>
          <Switch
            value={memoryMode}
            onValueChange={handleMemoryModeChange}
            colorScheme="emerald"
            isChecked={memoryMode}
          />
          <Text color="emerald.500">Memory Mode</Text>
        </HStack>
      </Box>
      <Box paddingLeft={5}>
        <HStack space={2}>
          <Switch
            value={examplesMode}
            onValueChange={handleExamplesModeChange}
            colorScheme="emerald"
            isChecked={examplesMode}
          />
          <Text color="emerald.500">Examples Mode</Text>
        </HStack>
      </Box>
    </Box>
  )
};

export default Kanji;
