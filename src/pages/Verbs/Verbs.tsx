import { Box, Button, Center, Heading, HStack, Text } from "native-base";
import React from "react";
import Table from "./Table/Table";

type Props = {
  deckItems: Array<Verb>;
};

const Verbs: React.FC<Props> = ({ deckItems }) => {
  const [currentDeckPosition, setCurrentDeckPosition] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
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
      setCurrentDeckPosition((prev) => prev + 1);
    }
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
        <Text color="emerald.500">{`${currentDeckPosition + 1}/${deckItems.length}`}</Text>
        <br/><br/><br/>
        <Heading size="xl">
          <Text color="emerald.500">{currentItem.meaning}</Text>
        </Heading>
        <br/>
        <Table verb={currentItem} display={isFlipped} />
        <br/><br/>
        <Box width={{ base: "100%"}}>
          <HStack space={3} justifyContent="center">
            <Button width="1/2" onPress={handleNext}>Next</Button>
          </HStack> 
        </Box>
      </Center>
    </Box>
  )
};

export default Verbs;
