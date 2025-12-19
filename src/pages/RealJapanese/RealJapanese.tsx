import React from "react";
import { Box, Divider, HStack, Text } from "native-base";
import { parseRuby } from "../../utils/music/rubyParser";
import { AudioPlayer } from "../../components";

type Props = {
  vocabsList: RealJapanese[];
};

const RealJapanese: React.FC<Props> = ({ vocabsList }) => {
  const Word: React.FC<{ word: string;}> = ({ word }) => {
    const parsed = parseRuby(word);
    const formatted = parsed.map(a =>
      a.furigana
        ? `<ruby>${a.kanji}<rt>${a.furigana}</rt></ruby>`
        : a.kanji
    ).join('');

    return <p style={{color: "white", fontFamily: "Klee One", margin: 0, fontSize: "1.5rem"}} dangerouslySetInnerHTML={{ __html: formatted }} />
  };

  return (
    <Box alignItems="center" mt={10} minHeight={"90vh"}>
      {vocabsList.map((vocab, index) => (
        <Box key={index} mb={8} width="90%" borderColor="pink.500" borderWidth={1} borderRadius={8} bg="#171736ff" overflow={"hidden"}>
          <HStack alignItems="center" justifyContent="space-between" px={4}>
            <Text fontSize="xl" fontFamily="Klee One" color="pink.500" flex={1}>
              {vocab.unit}
            </Text>
            <Text fontSize="xl" fontFamily="Klee One" color="primary.500" flex={1} textAlign="center">
              {vocab.topic}
            </Text>
            <Box flex={1} alignItems="flex-end">
              <AudioPlayer path={`real_japanese/${vocab.audio}.mp3`} />
            </Box>
          </HStack>
          <Divider mt={2} bg="pink.500" thickness={0.5}/>
          <Box p={4}>
            {vocab.sentences.map((sentence, idx) => (
              <HStack key={idx} mb={2} width="100%">
                <Box flex={1} justifyContent={"center"}>
                  <Text fontSize="lg" color="white">{sentence.english}</Text>
                </Box>
                <Box flex={1} justifyContent={"center"}>
                  <Word word={sentence.japanese} />
                </Box>
              </HStack>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default RealJapanese;
