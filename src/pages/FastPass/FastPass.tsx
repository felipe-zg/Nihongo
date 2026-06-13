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
  onImportantOnlyChange(): void;
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
  onImportantOnlyChange,
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
      <Stack space={4} mb={6} alignItems="center" justifyContent={"space-between"} width="98%" direction={{ base: "column", lg: "row" }} >
        <Text fontSize={"xl"} bold color={"white"}>日本語の森 FAST PASS</Text>
        <HStack space={2} alignItems={"center"} justifyContent={"center"}>
          <Input placeholder="Filter by reading or ID" width={{ base: "100%", lg: "150px" }} bg="white" color="black" value={filter} onChangeText={setFilter} />
          <Button colorScheme="blue" size={"xs"} variant="outline" onPress={onFilter}>
            探す
          </Button>
        </HStack>
        <HStack px={4} space={4}>
          <Box>
            <Select size={"xs"} color={"white"} selectedValue={String(startId)} onValueChange={(itemValue) => onStartIdChange(Number(itemValue))}>
              <Select.Item label="-- Select a start index --" value="" />
              {availableIds.map((key) => (
                <Select.Item key={key} label={String(key)} value={String(key)} />
              ))}
            </Select>
          </Box>
          <Box>
            <Select size={"xs"} color={"white"} selectedValue={String(endId)} onValueChange={(itemValue) => onEndIdChange(Number(itemValue))}>
              <Select.Item label="-- Select an end index --" value="" />
              {availableIds.map((key) => (
                <Select.Item key={key} label={String(key)} value={String(key)} />
              ))}
            </Select>
          </Box>
        </HStack>
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
