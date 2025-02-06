import React, { useMemo, useState } from "react";
import { Box, Button, Center, Heading, Text } from "native-base";

interface Props {
  data: KanjiYDCExample[];
  onlyMainExamplesEnabled: boolean;
}

const ExamplesMode: React.FC<Props> = ({ data, onlyMainExamplesEnabled }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const examples: KanjiYDCExample[] = useMemo(() => {
    const filtered = onlyMainExamplesEnabled
      ? data.filter((item) => item?.type === "main")
      : data;
    return filtered.length > 0
      ? filtered.sort(() => Math.random() - 0.5)
      : [{ reading: "", kana: "", meaning: [], sentence: "", type: "main" }];
  }, [data, onlyMainExamplesEnabled]);

  const handleNext = () => {
    if(!isFlipped) {
      setIsFlipped(true);
      return
    };
    setIsFlipped(false);
    setCurrentItemIndex((prev) => prev === examples.length - 1 ? 0 : prev + 1);
  };

  return (
    <Center width={{ base: "60%" }} minHeight={{ base: "80vh" }}>
      <Text color="emerald.500">{`${currentItemIndex + 1}/${examples.length}`}</Text>
      <br />
      <Heading size="2xl" color="emerald.500">
        {examples[currentItemIndex].reading}
      </Heading>
      <br />
      <br />
      <Box width={{ base: "100%" }}>
        <Center>
          <Text color={isFlipped ? "emerald.500" : "transparent"}>
            {examples[currentItemIndex].kana}
          </Text>
          <Text color={isFlipped ? "emerald.500" : "transparent"}>
            {examples[currentItemIndex].meaning.join(", ")}
          </Text>
        </Center>
        <br/><br/>
      </Box>
      <Box width={{ base: "100%" }}>
        <Button onPress={handleNext} colorScheme="emerald" variant="outline">
          Next
        </Button>
      </Box>
    </Center>
  );
};

export default ExamplesMode;
