import React from "react";
import { Box, HStack, Text, Stack, Button, Select, Divider } from "native-base";
import { ExamplePhrase } from "../../../components";

type Props = {
  phrases: string[];
  availableIds: number[];
  startId: number;
  endId: number;
  importantOnly: boolean;
  numberOfImportantWords: number;
  onImportantOnlyChange(): void;
  onStartIdChange(id: number): void;
  onEndIdChange(id: number): void;
};

const FastPassPhrases: React.FC<Props> = ({
  phrases,
  startId,
  endId,
  importantOnly,
  numberOfImportantWords,
  onImportantOnlyChange,
  onStartIdChange,
  onEndIdChange,
  availableIds,
}) => {

  return (
    <Box alignItems="center" mt={10}>
      <Stack space={4} mb={6} alignItems="center" justifyContent={"space-between"} width="98%" direction={{ base: "column", lg: "row" }} >
        <Button
          variant={importantOnly ? "solid" : "outline"}
          colorScheme="yellow"
          size="xs"
          ml={2}
          onPress={onImportantOnlyChange}
        >
          重要だけ
        </Button>
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
      </Stack>
      {importantOnly && <Text mb={4} color={"yellow.400"}>{numberOfImportantWords} words</Text>}
      <Box p={10}>
        {phrases.map((phrase, index) => (
          <Box>
            <HStack alignItems="center" mb={2}>
              <Text flex={1} color="orange.400" fontSize="md" fontWeight="bold">
                {index + 1}.
              </Text>
              <Box flex={19}>
                <ExamplePhrase key={index} example={phrase} textAlign="left" secondayHighlightColor="tertiary.400" />
              </Box>
            </HStack>
            <Divider my={2} bg="gray.600" />
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default FastPassPhrases;
