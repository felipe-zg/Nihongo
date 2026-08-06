import React from "react";
import { Box, HStack, Text, Stack, Input, Modal, Button, Select } from "native-base";
import { WordsList } from "./components/WordsList/WordsList";
import { VocabularyItem } from "./components/VocabularyItem/VocabularyItem";

type Props = {
  tangoList: Record<string, TangoEntry>;
  filteredWord: TangoWord | null;
  availableIds: number[];
  startId: number;
  endId: number;
  importantOnly: boolean;
  numberOfImportantWords: number;
  randomWords: boolean;
  onImportantOnlyChange(): void;
  onRandomWordsChange(): void;
  onStartIdChange(id: number): void;
  onEndIdChange(id: number): void;
  openPrintPage(): void;
  runFilter(filter: string): boolean;
};

const FastPass: React.FC<Props> = ({
  tangoList,
  filteredWord,
  startId,
  endId,
  importantOnly,
  numberOfImportantWords,
  randomWords,
  onImportantOnlyChange,
  onRandomWordsChange,
  onStartIdChange,
  onEndIdChange,
  openPrintPage,
  availableIds,
  runFilter,
}) => {
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

  const MemoizedWordsList = React.memo(() => WordsList({ wordsObjects: tangoList }));

  return (
    <Box alignItems="center" mt={10}>
      <Stack space={4} mb={6} alignItems="center" justifyContent={"space-around"} width="98%" direction={{ base: "column", lg: "row" }} >
        <HStack space={2} alignItems={"center"} justifyContent={"center"}>
          <Input placeholder="Filter by reading or ID" width={{ base: "100%", lg: "150px" }} bg="white" color="black" value={filter} onChangeText={setFilter} />
          <Button colorScheme="blue" size={"xs"} variant="outline" onPress={onFilter}>
            探す
          </Button>
        </HStack>
        <HStack px={4} space={4}>
          <Select w="100px" color={"white"} selectedValue={String(startId)} onValueChange={(itemValue) => onStartIdChange(Number(itemValue))}>
            <Select.Item label="-- Select a start index --" value="" />
            {availableIds.map((key) => (
              <Select.Item key={key} label={String(key)} value={String(key)} />
            ))}
          </Select>
          <Select w="100px" color={"white"} selectedValue={String(endId)} onValueChange={(itemValue) => onEndIdChange(Number(itemValue))}>
            <Select.Item label="-- Select an end index --" value="" />
            {availableIds.map((key) => (
              <Select.Item key={key} label={String(key)} value={String(key)} />
            ))}
          </Select>
          <Button
            variant={randomWords ? "solid" : "outline"}
            colorScheme="orange"
            size="xs"
            ml={2}
            onPress={onRandomWordsChange}
          >
            ランダム
          </Button>
          <Button
            variant={importantOnly ? "solid" : "outline"}
            colorScheme="yellow"
            size="xs"
            ml={2}
            onPress={onImportantOnlyChange}
          >
            重要だけ
          </Button>
          <Button onPress={openPrintPage} colorScheme="blue" size={"xs"} variant={"outline"}>
            印刷する
          </Button>
        </HStack>
      </Stack>
      {importantOnly && <Text mb={4} color={"yellow.400"}>{numberOfImportantWords} words</Text>}
      
      <MemoizedWordsList />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content bg={"gray.900"} maxWidth="650" mt={0} mb={"auto"}>
          <Modal.CloseButton />
          <Modal.Header>{filteredWord?.meaning}</Modal.Header>
          <Modal.Body>
            {filteredWord && <VocabularyItem key={filteredWord?.id} word={filteredWord} />}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default FastPass;
