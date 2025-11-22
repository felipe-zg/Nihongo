import React from "react";
import { Box, Button, Divider, HStack, Input, Stack, Text } from "native-base";
import { FloatingControls } from "../../../components";

type Props = {
  grammarList: GrammarEntry[];
};

function ContentBox({ children }: { children: React.ReactNode }) {
  return (
    <Box borderColor={"white"} borderWidth={1} mb={2} p={4} borderRadius={10} width={"90%"} alignItems="center">
      {children}
    </Box>
  );
}

const NihongoNoMoriGrammar: React.FC<Props> = ({ grammarList }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showContent, setShowContent] = React.useState(false);
  const [filterText, setFilterText] = React.useState("");

  const filteredList = grammarList.filter(item =>
    item.grammar.toLowerCase().includes(filterText.toLowerCase()) ||
    item.category.toLowerCase().includes(filterText.toLowerCase())
  );

  const currentItem = filteredList[currentIndex] || null;

  function handleNext() {
    if(!showContent) {
      setShowContent(true);
      return;
    }
    setShowContent(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredList.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePrev() {
    setShowContent(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredList.length - 1 : prevIndex - 1
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  React.useEffect(() => {
    setCurrentIndex(0);
    setShowContent(false);
  }, [filterText]);

  return (
    <Box alignItems="center" mt={10} minHeight={"90vh"}>
      <Stack
        mb={2}
        width="90%"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", sm: "row" }}
      >
        <Box flex={1}></Box>
        <Box flex={2} alignItems="center">
          <Text fontSize="xl" bold color="white">
            日本語の森・文法
          </Text>
        </Box>
        <Box flex={1} alignItems="flex-end" width={{ base: "100%", sm: "auto" }}>
          <Input
            placeholder="検索..."
            width={"100%"}
            value={filterText}
            onChangeText={setFilterText}
            bg="white"
            color="pink.500"
          />
        </Box>
      </Stack>
      {filteredList.length === 0 ? (
        <Text color="white" mt={4}>該当する文法が見つかりません。</Text>
      ) : (
        <>
          <Text color="pink.500" my={5}>{`${currentIndex + 1}/${filteredList.length}`}</Text>
          <ContentBox>
            <Text fontSize={"2xl"} bold color={"white"}>{currentItem.grammar}</Text>
          </ContentBox>
          <Box opacity={showContent ? 1 : 0} alignItems={"center"} width={"100%"}>
            <ContentBox>
              <Text fontSize={"lg"} color={"white"}>{currentItem.imi}</Text>
              <Divider mt={2} bg="gray.500" thickness={0.5}/>
              <Text fontSize={"md"} italic color={"white"} textAlign={"center"}>{currentItem.explanation}</Text>
              <Box borderColor={"pink.500"} borderWidth={1} borderRadius={5} px={4} py={1} mt={2}>
                <Text fontSize={"sm"} italic color={"white"}>{`${currentItem.category}`}</Text>
              </Box>
            </ContentBox>
            {currentItem.usage && (
              <ContentBox>
                {(currentItem.usage.form || currentItem.usage.pattern) && (
                  <HStack space={5} alignItems="center">
                    <Box>
                      {currentItem.usage.form?.map((form, index) => (
                        <HStack key={index} space={10} justifyContent={"space-between"}>
                          <Text color={currentItem.usage?.secondsForm ? "primary.500" : "white"} bold={!!currentItem.usage?.secondsForm}>{form.name}</Text>
                          {form.connector && <Text>
                            <Text color={"green.500"}> + </Text>
                            <Text color={"pink.500"}>{form.connector}</Text>  
                          </Text>}
                        </HStack>
                      ))}
                    </Box>
                    <Box>
                      <Text color={"white"} fontSize={"xl"}> + </Text>
                    </Box>
                    <Box>
                      {currentItem.usage.pattern?.map((pattern, index) => (
                        <Text key={index} color={currentItem.usage?.secondsForm ? "white" : "primary.500"} bold={!!!currentItem.usage?.secondsForm}>{pattern}</Text>
                      ))}
                    </Box>
                    {currentItem.usage.secondsForm && (
                      <HStack space={3}>
                        <Text color={"white"} fontSize={"xl"}> + </Text>
                        <Box>
                          {currentItem.usage.secondsForm?.map((form, index) => (
                            <HStack key={index} space={10} alignItems={"center"} justifyContent={"space-between"}>
                              <Text color={"primary.500"} bold>{form.name}</Text>
                              {form.connector && <Text>
                                <Text mr={5} color={"white"} fontSize={"xl"}> + </Text>
                                <Text color={"primary.500"}>{form.connector}</Text>  
                              </Text>}
                            </HStack>
                          ))}
                        </Box>
                      </HStack>
                    )}
                  </HStack>
                )}
                {currentItem.usage.combinedForms && (
                  <>
                  <Divider my={2} bg="gray.500" thickness={0.5}/>
                  {currentItem.usage.combinedForms?.map((form, index) => (
                    <HStack key={index} space={5} alignItems="center">
                      <Text key={index} color={"white"}>{form.first}</Text>
                      <Text color={"white"} fontSize={"xl"}> + </Text>
                      <Text key={index} color={"primary.500"} bold>{form.pattern}</Text>
                      {form.second && <>
                        <Text color={"white"} fontSize={"xl"}> + </Text>
                        <Text key={index} color={"white"}>{form.second}</Text>
                      </>}
                    </HStack>
                  ))}
                  </>
                )}
              </ContentBox>
            )}
            <ContentBox>
              {currentItem.examples.map((example, index) => (
                <Box key={index} mb={4} alignItems="center">
                  <Text textAlign={"center"} color={"white"}>{example.sentence}</Text>
                  {example.meaning && <Text italic textAlign={"center"} color={"primary.400"} fontSize={"xs"}>{example.meaning}</Text>}
                  {example.point && <Text italic textAlign={"center"} color={"pink.400"} fontSize={"xs"}>{example.point}</Text>}
                  <Divider my={2} bg="gray.500" thickness={0.5}/>
                </Box>
              ))}
            </ContentBox>
            {currentItem.extraInfo && (
              <ContentBox>
                <Text fontSize={"sm"} color={"pink.400"}>{currentItem.extraInfo}</Text>
              </ContentBox>
            )}
            {currentItem.newWords && (
              <ContentBox>
                <Box minWidth={{ base: "100%", lg: "50%" }}>
                  {currentItem.newWords?.map((word, index) => (
                    <HStack key={index} width={"100%"}>
                      <Text flex={1} color={"yellow.300"}>{word.kanji}</Text>
                      <Text flex={2} color={"primary.400"}>{word.kana}</Text>
                      <Text flex={2} color={"white"}>{word.english}</Text>
                    </HStack>
                  ))}
                </Box>
              </ContentBox>
            )}
          </Box>
          <FloatingControls onPrev={handlePrev} onNext={handleNext} nextLabel={showContent ? "次" : "見"} prevLabel={"前"} />
          <Box width={"90%"} mt={"auto"} mb={35}>
            <Button w={"full"} onPress={handleNext} mt={4} variant={showContent ? "solid" : "outline"} colorScheme="pink">{showContent ? "次へ" : "見る"}</Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default NihongoNoMoriGrammar;
