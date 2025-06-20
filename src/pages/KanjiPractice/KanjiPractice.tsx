import { Box, Center, HStack, Modal, Pressable, Select, Text, useBreakpointValue, VStack } from "native-base";
import React, { useEffect, useState } from "react";

const Word = ({ meaning, kana, kanji, onOpenPopup }: { meaning: string, kana: string, kanji: string, onOpenPopup: () => void; }) => {
  const [isFliped, setIsFliped] = useState(false);
  const[ word ] = useState({ meaning, kana, kanji });
  const [status, setStatus] = React.useState<"unset" | "correct" | "wrong">("unset");

  //TODO: Use this background after implementing status logic
  // const backgroundColor = React.useMemo(() => {
  //   if (status === "unset") return "white.200";
  //   if (status === "correct") return "green.200";
  //   if (status === "wrong") return "red.200";
  // }, [status]);

  const backgroundColor = React.useMemo(() => {
    return isFliped ? "gray.100" : "white.200";
  }, [isFliped]);

  useEffect(() => {
    setIsFliped(false);
  }, [meaning, kana, kanji]);

  return (
    <HStack
      flex={1}
      alignItems="center"
      bg={backgroundColor}
      padding={1}
      borderBottomColor={"gray.200"}
      borderBottomWidth={1}
    >
      <Pressable
        flex={2}
        onPress={onOpenPopup}
        onLongPress={() => {
          setStatus(status === "correct" ? "unset" : "correct");
        }}
      >
        <Text fontSize={{base: "xl", md: "lg"}} color="gray.600">{word.meaning}</Text>
      </Pressable>
    </HStack>
  );
}

type Props = {
  lesson: number;
  availableLessons: number[];
  handleModeChange(lesson: number): void;
  type: "YDC_main" | "main";
  handleTypeChange(type: "YDC_main" | "main"): void;
  items: KanjiYDCExample[];
};

const KanjiPractice: React.FC<Props> = ({lesson, availableLessons, handleModeChange, type, handleTypeChange, items}) => {
  const SelectInputStack = useBreakpointValue({
    base: VStack,
    md: HStack,
  });
  const [selectedWord, setSelectedWord] = useState<null | KanjiYDCExample>(null);

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      {selectedWord && (
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundColor="rgba(0, 0, 0, 0.5)" zIndex={1}>
          <Modal isOpen={!!selectedWord} onClose={() => setSelectedWord(null)}>
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Body>
                <Center>
                  <Text fontSize="6xl" color="purple.400">{selectedWord?.reading}</Text>
                  <Text fontSize="2xl" color="primary.500">{selectedWord?.kana}</Text>
                </Center>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </Box>
      )}
      
      <SelectInputStack>
        <Center>
          <Select
            selectedValue={String(1)}
            onValueChange={(itemValue) => handleModeChange(Number(itemValue))}
            accessibilityLabel="Select Lesson"
            placeholder="Select Lesson"
          >
            {availableLessons.map((l) => (
              <Select.Item key={l} value={String(l)} label={String(l)} />
            ))}
          </Select>
        </Center>
        <Center mt={{base: 2, md: 0}} ml={{base: 0, md: 2}}>
          <Select
            selectedValue={type}
            onValueChange={(itemValue) => handleTypeChange(itemValue as "YDC_main" | "main")}
            accessibilityLabel="Select type"
            placeholder="Select Type"
          >
            <Select.Item value="YDC_main" label="YDC Main" />
            <Select.Item value="main" label="Main" />
          </Select>
        </Center>
      </SelectInputStack>
      <VStack
        justifyContent="space-between"
        borderColor={"gray.200"}
        borderWidth={1}
        borderRadius="md"
        marginTop={2}
        marginBottom={4}
        overflowY="scroll"
      >
          <HStack flex={1} alignItems="center" bg={"primary.100"} paddingTop={1} paddingBottom={1}>
            <Box flex={1} alignItems="center">
              <Text>Lesson {lesson}</Text>
            </Box>
          </HStack>
          {items.map((word) => {
            const { reading, kana, meaning } = word;
            return(
              <Word 
                key={reading + Math.random()}
                kanji={reading}
                kana={kana}
                meaning={meaning.join(", ")} 
                onOpenPopup={() => setSelectedWord(word)}
              />
            );
          })}
        </VStack>
    </Box>
  )
};

export default KanjiPractice;
