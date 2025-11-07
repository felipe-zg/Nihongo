import React from "react";
import { Box, Button, Divider, Heading, HStack, Text} from "native-base";
import { NIHONGO_NO_MORI_JLPT_N3 } from "../../../consts";

function ExampleSentence({ example }: { example: string }) {
  // Split the string into 3 parts: before <>, inside <>, and after <>
  // const match = example.match(/^(.*)\{(.*)\}(.*)$/);
  const match = example.match(/^[\s\S]*?\{([\s\S]*?)\}[\s\S]*$/);

  if (!match) {
    // No <> found, render normally
    return (
      <Text fontSize="sm" italic color="gray.400">
        {example}
      </Text>
    );
  }

  const parts = example.split(/\{|\}/);

  if (parts.length < 3) {
    return (
      <Text fontSize="sm" italic color="gray.400">
        {example}
      </Text>
    );
  }

  const [before, highlighted, after] = parts;

  return (
    <Text fontSize="sm" italic>
      <Text color="gray.400">{before}</Text>
      <Text color="pink.500">{highlighted}</Text>
      <Text color="gray.400">{after}</Text>
    </Text>
  );
}

const NihongoNoMoriJLPTN3: React.FC = () => {
  const [showContent, setShowContent] = React.useState(true);

  return (
    <Box minHeight={"100vh"} px={5} py={5}>
      <Heading size="md" mt={5} mb={2} textAlign="center" color={"pink.400"}>
        日本語の森　日本語能力試験　N3
      </Heading>
      <Box borderWidth={1} borderColor={"white"} p={2} borderRadius={10} mb={5}>
        {NIHONGO_NO_MORI_JLPT_N3.map((item, index) => (
          <Box key={index}>
            <HStack space={3} alignItems="center" alignContent="center">
              <Text fontSize="3xl" color="pink.500">{item.kanji}</Text>
              <Text fontSize="md" color={showContent ? "primary.500" : "transparent"} mt={2}>
                {item.kana}
              </Text>
              <Text fontSize="md" color={showContent ? "white" : "transparent"} mt={2}>
                {item.english}
              </Text>
            </HStack>
            {item.explanation && (
              <>
                <Text fontSize="md" italic color="white">{item.explanation}</Text>
              </>
            )}
            {item.example && <ExampleSentence example={item.example} />}
            <Divider my={3} bg="gray.500" thickness={0.5} />
          </Box>
        ))}
        <Box
          position="fixed"
          right={0}
          top="75%"
          zIndex={100}
          style={{ transform: [{ translateY: -25 }] }}
        >
          <Button
            size="xs"
            borderRadius="full"
            colorScheme="pink"
            variant="outline"
            opacity={0.8}
            onPress={() => setShowContent(!showContent)}
          >
            {showContent ? "隠" : "見"}
          </Button>
        </Box>
      </Box>
    </Box>
  )
};

export default NihongoNoMoriJLPTN3;
