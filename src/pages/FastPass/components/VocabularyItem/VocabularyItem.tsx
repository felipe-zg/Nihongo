import React, { useState } from "react";
import { Box, Divider, HStack, Pressable, Text, VStack } from "native-base";
import { Word } from "../Word/Word";
import { ExamplePhrase, Modal } from "../../../../components";
import { GrammarExplanation, grammarPoints } from "../../../../consts/JLPT/N2/gammar-points.const";

export const VocabularyItem: React.FC<{ word: TangoWord }> = ({ word }) => {
  const [ShowInfo, setInfo] = React.useState(false);
  const [selectedGrammar, setSelectedGrammar] = useState<GrammarExplanation | null>(null);
  const [showExampleTranslation, setShowExampleTranslation] = useState(false);
  const [showExtraVocabulary, setShowExtraVocabulary] = useState(false);

  function GrammarPointModal({ isOpen, grammar }: { isOpen: boolean; grammar?: GrammarExplanation }) {
    return (
      <Modal isOpen={isOpen} onClose={() => setSelectedGrammar(null)} size="lg" position={"fixed"} top={0} left={0} w={"100vw"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Box>
          <HStack space={2} mb={2} alignItems={"center"} justifyContent={"space-between"}>
            <HStack space={2} mb={2} alignItems={"center"}>
              <VStack>
                {grammar?.rule.map((rule, index) => (
                  <Text key={index} fontFamily="Klee One" color={"red.500"} mb={1}>{rule}</Text>
                ))}
              </VStack>
              <VStack>
                <Text color={"white"}>+</Text>
              </VStack>
              <VStack>
                {grammar?.pattern.map((pattern, index) => (
                  <Text key={index} fontFamily="Klee One" color={"tertiary.400"} mb={1}>{pattern}</Text>
                ))}
              </VStack>
              {grammar?.rule2 && (
                <>
                  <VStack>
                    <Text color={"white"}>+</Text>
                  </VStack>
                  <VStack>
                    {grammar?.rule2.map((rule, index) => (
                      <Text key={index} fontFamily="Klee One" color={"red.500"} mb={1}>{rule}</Text>
                    ))}
                  </VStack>
                </>
              )}
              {grammar?.pattern2 && (
                <>
                  <VStack>
                    <Text color={"white"}>+</Text>
                  </VStack>
                  <VStack>
                    {grammar?.pattern2.map((pattern, index) => (
                  <Text key={index} fontFamily="Klee One" color={"tertiary.400"} mb={1}>{pattern}</Text>
                ))}
                  </VStack>
                </>
              )}
            </HStack>
            <Box alignItems={"center"} justifyContent={"center"} borderWidth={1} borderColor={"yellow.600"} borderRadius={5} p={1} minW={"20"}>
              <Text fontFamily="Klee One" color={"white"}>{grammar?.level}</Text>
            </Box>
          </HStack>
          {grammar?.extraPattern && (
            <>
              <Divider mb={2} thickness={0.1} bg="gray.600"  />
              <HStack space={2} mb={2} alignItems={"center"}>
                <VStack>
                  {grammar?.extraPattern.rule.map((rule, index) => (
                    <Text key={index} fontFamily="Klee One" color={"red.500"} mb={1}>{rule}</Text>
                  ))}
                </VStack>
                <VStack>
                  <Text color={"white"}>+</Text>
                </VStack>
                <VStack>
                  {grammar?.extraPattern.pattern.map((pattern, index) => (
                    <Text key={index} fontFamily="Klee One" color={"tertiary.400"} mb={1}>{pattern}</Text>
                  ))}
                </VStack>
                {grammar?.extraPattern.rule2 && (
                  <>
                    <VStack>
                      <Text color={"white"}>+</Text>
                    </VStack>
                    <VStack>
                      {grammar?.extraPattern.rule2.map((rule, index) => (
                        <Text key={index} fontFamily="Klee One" color={"red.500"} mb={1}>{rule}</Text>
                      ))}
                    </VStack>
                  </>
                )}
                {grammar?.extraPattern.pattern2 && (
                  <>
                    <VStack>
                      <Text color={"white"}>+</Text>
                    </VStack>
                    <VStack>
                      {grammar?.extraPattern.pattern2.map((pattern, index) => (
                        <Text key={index} fontFamily="Klee One" color={"tertiary.400"} mb={1}>{pattern}</Text>
                      ))}
                    </VStack>
                  </>
                )}
              </HStack>
            </>
          )}
          <Divider mb={2} thickness={0.1} bg="gray.600"  />
          <Text fontFamily="Klee One" color={"white"}>{grammar?.explanation.replace(/\/n\/n/g, '\n\n')}</Text>
        </Box>
      </Modal>
    );
  }

  function WordInfoModal({ isOpen, word }: { isOpen: boolean; word: TangoWord }) {
    return (
      <Modal isOpen={isOpen} onClose={() => setInfo(false)} size="lg" position={"fixed"} top={0} left={0} w={"100vw"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Box>
          <Word ruby={word.wordRuby} showFurigana={true} />
          <Text fontFamily="Klee One" color={"primary.400"} mb={4}>{word.meaning}</Text>
          <Text fontFamily="Klee One" color={"white"} mb={1}>{word.info}</Text>
        </Box>
      </Modal>
    );
  }

  function ExampleTranslationModal({ isOpen, example }: { isOpen: boolean; example: string }) {
    return (
      <Modal isOpen={isOpen} onClose={() => setShowExampleTranslation(false)} size="lg" position={"fixed"} top={0} left={0} w={"100vw"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <ExamplePhrase 
          example={example}
          baseColor="gray.400"
          secondayHighlightColor="tertiary.400"
          textAlign="left" 
        />
      </Modal>
    );
  }

  function ExtraVocabularyModal({ isOpen, extraVocabulary }: { isOpen: boolean; extraVocabulary?: VocabularyEntry[] }) {
    return (
      <Modal isOpen={isOpen} onClose={() => setShowExtraVocabulary(false)} size="lg" position={"fixed"} top={0} left={0} w={"100vw"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        {extraVocabulary?.map((vocab, index) => (
          <>
            <HStack key={index} space={4} alignItems={"center"}>
              <Box flex={1}>
                <Word ruby={vocab.wordRuby} showFurigana fontSize="md" color="orange.500" />
              </Box>
              <Text flex={9} fontFamily="Klee One" color={"orange.500"}>
                {vocab.meaning}
              </Text>
            </HStack>
            <Divider mt={1} mb={2} thickness={0.1} bg="gray.600"  />
          </>
        ))}
      </Modal>
    );
  }

  return (
    <Box key={word.wordRuby} mb={2}>
      <HStack>
        <Box flex={1}>
          <HStack alignItems={"end"}>
            <Pressable onPress={() => setInfo(!ShowInfo)}>
              <Word ruby={word.wordRuby} showFurigana={false} color={word.important ? "warning.500" : undefined} />
            </Pressable>
            {word.connector && <Text fontFamily="Klee One" color={"white"} ml={2} mt={2}>{word.connector}</Text>}
          </HStack>
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
            <HStack space={2} alignItems={"start"}>
              <ExamplePhrase example={word.example} textAlign="left" secondayHighlightColor="tertiary.400" grammarPoints={grammarPoints} onGrammarClick={(grammar) => setSelectedGrammar(grammar)} />
              <Pressable onPress={() => setShowExampleTranslation(true)} borderWidth={1} borderColor={"gray.400"} borderRadius={5} p={1} w={5} h={5} alignItems={"center"} justifyContent={"center"}>
                <Text color="primary.500">
                  訳
                </Text>
              </Pressable>
              {word.extraVocabulary && (
                <Pressable onPress={() => setShowExtraVocabulary(true)} borderWidth={1} borderColor={"gray.400"} borderRadius={5} p={1} w={5} h={5} alignItems={"center"} justifyContent={"center"}>
                  <Text color="orange.500">
                    詳
                  </Text>
                </Pressable>
              )}
            </HStack>
          </Box>
          <Box flex={1} alignItems={"flex-end"} justifyContent={"flex-end"}>
            <Text fontFamily="Klee One" fontSize={"md"} color="orange.500">
              {String(word.id).padStart(3, "0")}
            </Text>
          </Box>
      </HStack>
      <Divider mt={4} />

      <GrammarPointModal isOpen={selectedGrammar !== null} grammar={selectedGrammar!} />
      <WordInfoModal isOpen={ShowInfo} word={word} />
      <ExampleTranslationModal isOpen={showExampleTranslation} example={word.exampleMeaning} />
      <ExtraVocabularyModal isOpen={showExtraVocabulary} extraVocabulary={word.extraVocabulary} />
      
    </Box>
  );
}
