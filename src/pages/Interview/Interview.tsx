import React from "react";
import { Box, Text, Stack } from "native-base";
import { parseRuby } from "../../utils/music/rubyParser";

type InterviewQuestion = {
  id: number;
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
        <Text fontSize={"xl"} bold color={"white"}>面接</Text>
      </Stack>
      
      {questions.map((question) => (
        <Box key={question.id} borderWidth={1} borderColor="gray.300" borderRadius="md" mb={4} width="98%">
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
