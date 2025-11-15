import { Box, Button, HStack, Pressable, Text, VStack } from "native-base";
import React from "react";
import { parseRuby } from "../../../utils/music/rubyParser";

type Props = {
  items: JLPTExercise[];
};

function stripHtmlTags(s: string) {
  return s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function normalize(s: string | null | undefined) {
  if (s == null) return "";
  return stripHtmlTags(String(s)).toLowerCase();
}

function OptionsTable({
  options,
  correctAnswer,
}: {
  options: string[];
  correctAnswer: string | string[];
}) {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [checkResult, setCheckResult] = React.useState<boolean>(false);

  const correctNormalized =
    Array.isArray(correctAnswer) ? normalize(correctAnswer.join(" ")) : normalize(correctAnswer);

  return (
    <VStack space={2}>
      {options.map((option, index) => {
        const optionNormalized = normalize(option);
        const optionParts = parseRuby(optionNormalized);

        let backgroundColor = "white";

        if (checkResult) {
          // After pressing "Check Answer": mark the correct one green,
          // the selected-but-wrong one red, others remain white.
          if (optionNormalized === correctNormalized) {
            backgroundColor = "green.200";
          } else if (selectedOption && option === selectedOption && optionNormalized !== correctNormalized) {
            backgroundColor = "red.200";
          } else {
            backgroundColor = "white";
          }
        } else {
          // Before checking: selected -> pink, else white
          backgroundColor = selectedOption === option ? "pink.200" : "white";
        }

        return (
          <Pressable
            key={index}
            // Prevent changing selection after checking
            onPress={() => {
              if (!checkResult) setSelectedOption(option);
            }}
            backgroundColor={backgroundColor}
          >
            <Box padding={3} borderWidth={1} borderColor="gray.300" borderRadius={5}>
              <Text fontSize="md" color="black">
                {optionParts.map((part, partIndex) => {
                  return (
                    <span key={partIndex} style={{ color: 'black' }}>
                      {part.furigana ? <ruby>{part.kanji}<rt>{part.furigana}</rt></ruby> : part.kanji}
                    </span>
                  );
                })}
              </Text>
            </Box>
          </Pressable>
        );
      })}

      <HStack space={2}>
        <Button onPress={() => setCheckResult(true)} isDisabled={selectedOption === null}>
          Check Answer
        </Button>

        {/* optional reset/next button */}
        <Button
          variant="outline"
          onPress={() => {
            setSelectedOption(null);
            setCheckResult(false);
          }}
        >
          Reset
        </Button>
      </HStack>
    </VStack>
  );
}

function BoxHeader({ title, refersTo }: { title: string, refersTo?: number }) {
  return (
    <Box position="relative" w="100%">
      <Text fontSize="sm" color="pink.500" textAlign="center">
        {title}
      </Text>

      {refersTo && (
        <Box
          position="absolute"
          right={0}
          top={0}
          borderWidth={0.5}
          borderColor="pink.500"
          borderRadius="full"
          w={6}
          h={6}
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="sm" color="pink.500">
            {refersTo}
          </Text>
        </Box>
      )}
    </Box>
  )
}


const Nihongo500Mondai: React.FC<Props> = ({ items }) => {

  return (
    <Box padding={5} minHeight={"100vh"}>
      {items.map((item) => {
        const parts = parseRuby(item.content.join(item.moji ? `<${item.moji}>` : '_____'));
        let color = 'black';
        return (
          <Box key={item.id} marginBottom={8} px={5} pb={5} pt={3} backgroundColor="#fffff0" borderRadius={10} shadow={4} >
            <BoxHeader title={item.type} refersTo={item.refersTo} />
            <VStack space={4}>
              <h2 style={{ color: 'black', whiteSpace: 'pre-wrap' }}>{item.id}) &nbsp;&nbsp;
                {parts.map((part, partIndex) => {
                  if (part.kanji === '<') {
                    color = '#de3bd6ff';
                    return null;
                  }
                  if (part.kanji === '>') {
                    color = 'black';
                    return null;
                  }
                  return (
                    <span key={partIndex} style={{ color: color }}>
                      {part.furigana ? <ruby>{part.kanji}<rt>{part.furigana}</rt></ruby> : part.kanji}
                    </span>
                  );
                })}
              </h2>
              <OptionsTable options={item.options} correctAnswer={item.answer} />
            </VStack>
          </Box>
        )
      })}
    </Box>
  )
};

export default Nihongo500Mondai;
