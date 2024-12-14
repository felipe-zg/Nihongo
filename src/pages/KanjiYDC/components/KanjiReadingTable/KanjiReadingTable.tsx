import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import { useScreenWidth } from "../../../../hooks";

interface Props {
  onyomi: string[];
  kunyomi: string[];
  meaning: string[];
  display?: boolean;
}

const KanjiReadingTable: React.FC<Props> = ({ onyomi, kunyomi, meaning, display = true }) => {
  const screenWidth = useScreenWidth();

  return (
    <Box w={screenWidth > 500 ? "1/2" : "full"} opacity={display ? 100 : 0} borderWidth={1} borderColor="gray.300">
      <VStack justifyContent="space-between">
        <HStack flex={1} alignItems="center" bg={"gray.100"} paddingTop={1} paddingBottom={1}>
          <Box flex={1} alignItems="center">
            <Text>Onyomi</Text>
          </Box>
          <Box flex={2} alignItems="flex-start">
            <Text ml={2} color="gray.500">
              {onyomi.join(", ")}
            </Text>
          </Box>
        </HStack>
        <HStack flex={1} alignItems="center" bg={"white"} paddingTop={1} paddingBottom={1}>
          <Box flex={1} alignItems="center">
            <Text>Kunyomi</Text>
          </Box>
          <Box flex={2} alignItems="flex-start">
            <Text ml={2} color="gray.500">
              {kunyomi.join(", ")}
            </Text>
          </Box>
        </HStack>
        <HStack flex={1} alignItems="center" bg={"gray.100"} paddingTop={1} paddingBottom={1}>
          <Box flex={1} alignItems="center">
            <Text>Meaning</Text>
          </Box>
          <Box flex={2} alignItems="flex-start">
            <Text ml={2} color="gray.500">
              {meaning.join(", ")}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default KanjiReadingTable;
