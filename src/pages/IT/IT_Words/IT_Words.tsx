import React from "react";
import { Box, Button, Divider, HStack, Input, Modal, Text } from "native-base";
import { Word } from "../../FastPass/components/Word/Word";

type Props = {
  words: any[]; // Replace 'any' with the actual type of your words when available
  filteredWord: any | null;
  runFilter(filter: string): boolean;
};

const ITWords: React.FC<Props> = ({ words, filteredWord, runFilter }) => {
  const [filter, setFilter] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const onFilter = React.useCallback(() => {
    const showResult = runFilter(filter);
    if (showResult) {
      setShowModal(true);
    } else {
      alert("No matching word found.");
    }
  }, [filter, runFilter]);

  return (
    <Box>
      <HStack space={2} alignItems={"center"} justifyContent={"center"}>
        <Input placeholder="Filter by reading or ID" width={{ base: "100%", lg: "150px" }} bg="white" color="black" value={filter} onChangeText={setFilter} />
        <Button colorScheme="blue" size={"xs"} variant="outline" onPress={onFilter}>
          探す
        </Button>
      </HStack>
      <Box mx={10} alignItems="center" mt={10} borderWidth={1} borderColor="gray.300" p={4} borderRadius={8}>
        {words.map((word) => (
          <Box key={word.id} mb={4} w="100%">
            <HStack flex={1} space={2} alignItems="flex-end">
              <Word ruby={word.wordRuby} showFurigana={true} fontSize="2xl" color="yellow.400" />
              <Text fontSize="md" color="tertiary.400">{word.meaning}</Text>
            </HStack>
            {word.notes && <Text fontSize="sm" color="red.500">{word.notes}</Text>}
            {word.extraVocabulary && word.extraVocabulary.length > 0 && (
              <Box flex={2} mt={2}>
                {word.extraVocabulary.map((extra: { wordRuby: string; meaning: string; }, index: React.Key | null | undefined) => (
                  <HStack space={2} alignItems="center">
                    <Word ruby={extra.wordRuby} showFurigana={true} fontSize="md" color="orange.400" />
                    <Text fontSize="xs" color="orange.400">{extra.meaning}</Text>
                  </HStack>
                ))}
              </Box>
            )}
            <Divider mt={1} bg="gray.500" thickness={0.5}/>
          </Box>
        ))}
      </Box>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content bg={"gray.900"} maxWidth="650" mt={0} mb={"auto"}>
          <Modal.CloseButton />
          <Modal.Header>{filteredWord?.meaning}</Modal.Header>
          <Modal.Body>
            <Word ruby={filteredWord?.wordRuby} showFurigana={true} fontSize="2xl" color="yellow.400" />
            {filteredWord?.notes && <Text fontSize="sm" color="red.500">{filteredWord?.notes}</Text>}
            {/* {filteredWord && <VocabularyItem key={filteredWord?.id} word={filteredWord} />} */}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default ITWords;
