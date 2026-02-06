import React, { useEffect, useMemo } from "react";
import { Box, Button, Divider, HStack, Input, Pressable, Select, Stack, Text } from "native-base";
import { FloatingControls } from "../../../components";
import { GrammarCategory, GrammarEntryCategory } from "../../../enums";

type Props = {
  grammarList: GrammarEntry[];
  mode?: "test" | "grammar";
};

function ContentBox({ children }: { children: React.ReactNode }) {
  return (
    <Box borderColor={"white"} borderWidth={1} mb={2} p={4} borderRadius={10} width={"90%"} alignItems="center">
      {children}
    </Box>
  );
}

const NihongoNoMoriGrammar: React.FC<Props> = ({ grammarList, mode }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showContent, setShowContent] = React.useState(false);
  const [filterText, setFilterText] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState<GrammarCategory>();

  const grammarCategoryOptions = Object.entries(GrammarEntryCategory).map(
    ([key, value]) => ({ key, label: value, value })
  );

  const filteredList = grammarList.filter(item =>
    item.grammar.toLowerCase().includes(filterText.toLowerCase()) ||
    item.category.toLowerCase().includes(filterText.toLowerCase())
  ).filter(item =>
    categoryFilter ? item.category === categoryFilter : true
  );

  const currentItem = filteredList[currentIndex] || null;

  const handleNext = React.useCallback(() => {
    if (!showContent) {
      setShowContent(true);
      return;
    }
    setShowContent(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredList.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [showContent, filteredList.length]);

  const handlePrev = React.useCallback(() => {
    setShowContent(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredList.length - 1 : prevIndex - 1
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [filteredList.length]);

  const CategorySelect = useMemo(() => {
    return (
      <Select
        selectedValue={categoryFilter}
        onValueChange={(value) => setCategoryFilter(value as GrammarCategory)}
        placeholder="Category"
        backgroundColor={"white"}
      >
        {grammarCategoryOptions.map((category) => (
          <Select.Item
            key={category.key}
            label={category.label}
            value={category.value}
          />
        ))}
      </Select>
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FilterInput = useMemo(() => {
    return (
      <Input
        placeholder="検索..."
        width={"100%"}
        value={filterText}
        onChangeText={setFilterText}
        bg="white"
        color="pink.500"
      />
    );
  }, [filterText]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    setCurrentIndex(0);
    setShowContent(false);
  }, [filteredList.length, categoryFilter]);

  const ExamplePhrase: React.FC<{ example: string, fontSize?: string }> = ({ example, fontSize = "md" }) => {
    // Split by { } or [ ] or < >
    const parts = example.split(/(\{.*?\}|\[.*?\]|<.*?>)/g);

    return (
      <Text
        fontFamily="Klee One"
        bold
        textAlign="center"
        color="white"
        fontSize={fontSize}  
      >
        {parts.map((part, index) => {
          // { ... } → pink
          if (part.startsWith("{") && part.endsWith("}")) {
            return (
              <Text key={index} color="pink.500">
                {part.slice(1, -1)}
              </Text>
            );
          }

          // [ ... ] → yellow
          if (part.startsWith("[") && part.endsWith("]")) {
            return (
              <Text key={index} color="yellow.500">
                {part.slice(1, -1)}
              </Text>
            );
          }

          // < ... > → orange
          if (part.startsWith("<") && part.endsWith(">")) {
            return (
              <Text key={index} color="orange.500">
                {part.slice(1, -1)}
              </Text>
            );
          }

          // default text
          return (
            <Text key={index} color="white">
              {part}
            </Text>
          );
        })}
      </Text>
    );
  };

  const TestExample: React.FC<{item: {example: string; english: string, imi: string}}> = ({item}) => {
    const [showTranslation, setShowTranslation] = React.useState(false);

    return (
      <Pressable onPress={() => setShowTranslation(!showTranslation)} px={10}>
        <Box py={2}>
          <ExamplePhrase example={item.example} fontSize="xl"/>
          { showTranslation && <Text color={"white"} textAlign="center">{item.english}</Text> }
          { showTranslation && <Text color={"gray.400"} textAlign="center">意味：{item.imi}</Text> }
        </Box>
        <Divider my={2} bg="gray.500" thickness={0.5}/>
      </Pressable>
    );
  };

  const TestMode: React.FC = () => {
    let examples = filteredList.reduce((acc: { example: string; english: string, imi: string }[], item) => {
      item.examples.forEach(ex => {
        acc.push({ example: ex.sentence, english: ex.meaning || "", imi: item.imi});
      });
      return acc;
    }, []);

    //shuffle examples
    examples = examples.sort(() => Math.random() - 0.5);

    return (
      <Box minW={"100vw"}>
        {examples.map((ex, index) => (
          <TestExample item={ex} />
        ))}
      </Box>
    );
  };

  return (
    <Box alignItems="center" mt={10} minHeight={"90vh"}>
      <Stack
        mb={2}
        width="90%"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", sm: "row" }}
      >
        <Box flex={1} display={{ base: "none", sm: "flex" }}>
          {CategorySelect}
        </Box>
        <Box flex={2} alignItems="center">
          <Text fontFamily="Klee One" fontSize="xl" bold color="white">
            日本語の森・文法
          </Text>
        </Box>
        <Box flex={1} alignItems="flex-end" width={{ base: "100%", sm: "auto" }} display={{ base: "none", sm: "flex" }}>
          {FilterInput}
        </Box>
      </Stack>
      {filteredList.length === 0 ? (
        <Text fontFamily="Klee One" color="white" mt={4}>該当する文法が見つかりません。</Text>
      ) : (
        mode === "test" ? (
          <Box>
            <Text textAlign={"center"} color="gray.500" my={5}>{`${categoryFilter} - ${filteredList.length} grammar points`}</Text>
            <TestMode />
          </Box>
        ) :
        <>
          <Text color="pink.500" my={5}>{`${currentIndex + 1}/${filteredList.length}`}</Text>
          <ContentBox>
            <Text fontFamily="Klee One" fontSize={"2xl"} bold color={currentItem.important ? "yellow.500" : "white"}>{currentItem.grammar}</Text>
          </ContentBox>
          <Box opacity={showContent ? 1 : 0} alignItems={"center"} width={"100%"}>
            <ContentBox>
              <Text fontSize={"lg"} color={"white"}>{currentItem.imi}</Text>
              <Divider mt={2} bg="gray.500" thickness={0.5}/>
              <Text fontSize={"md"} italic color={"white"} textAlign={"center"} my={2}>{currentItem.explanation}</Text>
              <Box borderColor={"pink.500"} borderWidth={1} borderRadius={5} px={4} py={1} mt={2}>
                <Text fontSize={"sm"} italic color={"white"}>{`${currentItem.category}`}</Text>
              </Box>
            </ContentBox>
            {currentItem.extraInfo && (
              <ContentBox>
                <Text fontSize={"sm"} color={"orange.500"}>{currentItem.extraInfo}</Text>
              </ContentBox>
            )}
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
                        <Text key={index} color={currentItem.usage?.secondsForm ? "white" : "primary.500"}>{pattern}</Text>
                      ))}
                    </Box>
                    {currentItem.usage.secondsForm && (
                      <HStack space={3}>
                        <Text color={"white"} fontSize={"xl"}> + </Text>
                        <Box>
                          {currentItem.usage.secondsForm?.map((form, index) => (
                            <HStack key={index} space={10} alignItems={"center"} justifyContent={"space-between"}>
                              <Text color={"primary.500"}>{form.name}</Text>
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
                      <Box>
                        {form.pattern.map((pattern, pIndex) => (
                          <Text key={pIndex} color={"primary.500"}>{pattern}</Text>
                        ))}
                      </Box>
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
                  <ExamplePhrase example={example.sentence} />
                  {example.meaning && <Text italic textAlign={"center"} color={"primary.400"} fontSize={"xs"}>{example.meaning}</Text>}
                  {example.point && <Text italic textAlign={"center"} color={"green.400"} fontSize={"xs"}>{example.point}</Text>}
                  <Divider my={2} bg="gray.500" thickness={0.5}/>
                </Box>
              ))}
            </ContentBox>
            {currentItem.newWords && (
              <ContentBox>
                <Box minWidth={{ base: "100%", lg: "50%" }}>
                  {currentItem.newWords?.map((word, index) => (
                    <HStack key={index} width={"100%"}>
                      <Text flex={1} color={"yellow.300"} fontFamily="Klee One">{word.kanji}</Text>
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
      <HStack width="90%" space={4} mt={4} mb={10} display={{ base: "flex", sm: "none" }}>
        <Box flex={1}>
          {CategorySelect}
        </Box>
        <Box flex={1}>
          {FilterInput}
        </Box>
      </HStack>
    </Box>
  );
};

export default NihongoNoMoriGrammar;
