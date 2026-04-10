import React from "react";
import { Box, HStack, Text, Divider, Stack, Pressable } from "native-base";
import { ExamplePhrase } from "../../components";
import { parseRuby } from "../../utils/music/rubyParser";

type Props = {
  tangoList: Record<string, TangoEntry>;
};

const FastPass: React.FC<Props> = ({
  tangoList
}) => {

  const Word: React.FC<{ ruby: string, showFurigana: boolean }> = ({ ruby, showFurigana }) => {
    const parts: RubyPart[] = parseRuby(ruby);

    return (
      <HStack>
        <Box>
          <Text
            fontFamily="Klee One"
            color="yellow.400"
            fontSize="3xl"
            lineHeight="32px"
          >
            {parts.map((part, index) => (
              <Text key={index}>
                {part.furigana ? (
                  <ruby>
                    {part.kanji}
                    <rt
                      style={{
                        fontSize: "0.45em",
                        lineHeight: "1",
                        color: showFurigana ? undefined : "transparent",
                      }}
                    >
                      {part.furigana}
                    </rt>
                  </ruby>
                ) : (
                  part.kanji
                )}
              </Text>
            ))}
          </Text>
        </Box>
      </HStack>
    );
  };

  const VocabularyItem: React.FC<{ word: TangoWord }> = ({ word }) => {
    const [ShowInfo, setInfo] = React.useState(false);

    return (
      <Pressable key={word.wordRuby} mb={2} onPress={() => setInfo((prev) => !prev)}>
        <HStack>
          <Box flex={1}>
            <HStack alignItems={"end"}>
              <Word ruby={word.wordRuby} showFurigana={ShowInfo} />
              {word.connector && <Text fontFamily="Klee One" color={"white"} ml={2} mt={2}>{word.connector}</Text>}
            </HStack>
            <Text fontFamily="Klee One" color={ShowInfo ? "primary.500" : "transparent"}>
              {word.meaning}
            </Text>
          </Box>
          <HStack justifyContent={"flex-end"} flex={1} space={2}> 
            {word.components?.map((component: any, index: number) => (
              <HStack key={index}>
                {index > 0 && <Text color={"white"} mr={2} mt={2}>＋</Text>}
                <Box key={index}  mb={1} minW={"20"}>
                  <Box borderColor={"red.500"} borderWidth={1} borderRadius={5} p={1} alignItems={"center"}>
                    <Text fontFamily="Klee One" color={"white"} bold>{component.kanji}</Text>
                  </Box>
                  <Text textAlign={"center"} fontFamily="Klee One" color={"gray.400"}>{component.meaning}</Text>
                </Box>
              </HStack>
            ))}
          </HStack>
        </HStack>
        <HStack>
            <Box flex={19}>
              <ExamplePhrase example={word.example} textAlign="left"/>
              <ExamplePhrase 
                example={word.exampleMeaning}
                baseColor={ShowInfo ? "gray.400" : "transparent"}
                highlightColor={ShowInfo ? undefined : "transparent"}
                textAlign="left" 
              />
            </Box>
            <Box flex={1} alignItems={"flex-end"} justifyContent={"flex-end"}>
              <Text fontFamily="Klee One" fontSize={"md"} color="orange.500">
                {String(word.id).padStart(3, "0")}
              </Text>
            </Box>
        </HStack>
        <Divider my={2} />
      </Pressable>
    );
  }

  return (
    <Box alignItems="center" mt={10}>
      <Stack space={4} mb={6} alignItems="center" justifyContent={"space-between"} width="98%" direction={{ base: "column", lg: "row" }} >
        <Text fontSize={"xl"} bold color={"white"}>日本語の森 FAST PASS</Text>
      </Stack>
      
      {Object.entries(tangoList).map(([key, tangoItem]) => (
        <Box key={key} borderWidth={1} borderColor="gray.300" borderRadius="md" mb={4} width="98%" overflow={"hidden"}>
          {/* Main Entry Information */}
          <Box bg="gray.600">
            <Text px={4} py={2}>
              <Text fontSize={"2xl"} color={"yellow.400"}>{key}</Text>
              <Text color={"gray.400"}>&nbsp;&nbsp;{tangoItem.meaning}</Text>
            </Text>
          </Box>
          <Box p={4}>
            {tangoItem.words?.map((word) => (
              <VocabularyItem word={word} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FastPass;
