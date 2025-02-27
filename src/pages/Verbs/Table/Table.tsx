import { Box, HStack, Pressable, Text, VStack } from "native-base";
import React from "react";
import { useScreenWidth } from "../../../hooks";
import { speak } from "../../../helpers";

type Props = {
  verb: Verb;
  display?: boolean;
};

const Table: React.FC<Props> = ({ verb, display = true }) => {
  const screenWidth = useScreenWidth();

  const ExampleText: React.FC<{text: string}> = ({ text }) => (
    <Pressable onPress={() => speak(text)}>
      <Text ml={2}>{text}</Text>
    </Pressable>
  )

  return (
    <Box w={screenWidth > 500 ? "1/2" : "full"} opacity={display ? 100 : 0} borderWidth={1} borderColor="gray.300">
      <VStack justifyContent="space-between">
        <HStack flex={1} alignItems="center" bg={"gray.200"} paddingTop={1} paddingBottom={1}>
          <Box flex={1} alignItems="center">
            <Text>Transitive</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>Intransitive</Text>
          </Box>
        </HStack>
        <HStack flex={1} alignItems="center" bg={"white.200"} paddingTop={1} paddingBottom={1}>
          <Box flex={1} alignItems="center">
            <Text>{verb.transitive.kanji} ({verb.transitive.kana})</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>{verb.intransitive.kanji} ({verb.intransitive.kana})</Text>
          </Box>
        </HStack>
        <HStack flex={1} alignItems="center" bg={"gray.100"} paddingTop={1} paddingBottom={1}>
          <Box flex={1} alignItems="center">
            <ExampleText text={verb.transitive.tearu} />
          </Box>
          <Box flex={1} alignItems="center">
            <ExampleText text={verb.intransitive.teiru} />
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
};

export default Table;
