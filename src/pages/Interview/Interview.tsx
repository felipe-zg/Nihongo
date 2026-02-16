import React from "react";
import { Box, Text, Stack, Pressable, Divider } from "native-base";
import { parseRuby } from "../../utils/music/rubyParser";

type InterviewQuestion = {
  id: number;
  label?: string;
  question: string;
  answerRuby: {
    subject?: string;
    ruby: string;
  }[];
};

type Props = {
  questions: InterviewQuestion[];
};

const Interview: React.FC<Props> = ({
  questions,
}) => {

  const scrollToQuestion = (id: number) => {
    const element = document.getElementById(`question-${id}`);

    if (element) {
      const yOffset = -20; // small top spacing
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const Word: React.FC<{ ruby: string }> = ({ ruby }) => {
    const parts: RubyPart[] = parseRuby(ruby);

    return (
      <Box width="100%" minWidth={0}>
        <Text
          fontFamily="Klee One"
          color="yellow.500"
          fontSize="3xl"
          lineHeight="60px"
        >
          {parts.map((part, index) => (
            <Text key={index}>
              {part.furigana ? (
                <ruby style={{ color: "white" }}>
                  {part.kanji}
                  <rt
                    style={{
                      fontSize: "0.65em",
                      lineHeight: "1",
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
    );
  };

  return (
    <Box alignItems="center" mt={10}>
      <Stack space={4} mb={6} alignItems="center" justifyContent={"space-between"} width="98%" direction={{ base: "column", lg: "row" }} >
        {/* <Text fontSize={"xl"} bold color={"white"}>面接</Text> */}
      </Stack>
      <Divider width="98%" mt={60} borderColor="gray.500" />
      <Box
        position="fixed"
        top="10px"
        left="50%"
        zIndex={1000}
        width="95%"
        maxW="900px"
        style={{
          transform: "translateX(-50%)",
        }}
      >
        <Box
          bg="rgba(0,0,0,0.7)"
          borderRadius="lg"
          px={3}
          py={2}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignContent="flex-start"
            maxH="70px"   // 👈 controls 2 rows
          >
            {questions.map((q) =>
              q.label ? (
                <Pressable
                  key={q.id}
                  onPress={() => scrollToQuestion(q.id)}
                  width="80px"
                  height="30px"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ opacity: 0.8 }}
                  borderBottomWidth={1}
                  borderColor="rgba(255,255,255,0.3)"
                >
                  <Text fontSize="xs" color="pink.500">
                    {q.label}
                  </Text>
                </Pressable>
              ) : null
            )}
          </Stack>
        </Box>
      </Box>



      
      {questions.map((question) => (
        <Box key={question.id} borderWidth={1} borderColor="gray.300" borderRadius="md" mb={4} width="98%" nativeID={`question-${question.id}`}
>
          {/* Main Entry Information */}
          <Box bg="gray.600">
            <Text px={4} py={2}>
              <Text fontSize={"2xl"} color={"green.500"}>{question.question}</Text>
            </Text>
          </Box>
          <Box p={4}>
            {question.answerRuby.map((ruby, index) => (
              <Box key={index} mb={2}>
                {ruby.subject && (
                  <Text fontSize="xl" color="primary.500" my={1}>
                    {ruby.subject}
                  </Text>
                )}
                <Word ruby={ruby.ruby} />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
      
    </Box>
  );
};

export default Interview;
