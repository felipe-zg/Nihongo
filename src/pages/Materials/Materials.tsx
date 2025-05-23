import React from "react";
import { Lesson36, Lesson37, Lesson38, Lesson39, Lesson40 } from ".";
import { Box, Heading, Select } from "native-base";

const lessonPages: Record<number, React.FC> = {
  36: Lesson36,
  37: Lesson37,
  38: Lesson38,
  39: Lesson39,
  40: Lesson40,
};

const Materials: React.FC = () => {
  const availableLessons = Object.keys(lessonPages).map(Number);
  const [selectedLesson, setSelectedLesson] = React.useState(availableLessons[0]);
  const lessonName = `Lesson ${selectedLesson}`;

  const LessonComponent = lessonPages[selectedLesson];

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      <Select
        selectedValue={String(selectedLesson)}
        minWidth={200}
        onValueChange={(itemValue) => setSelectedLesson(Number(itemValue))}
        accessibilityLabel="Select Lesson"
        placeholder="Select Lesson"
      >
        {availableLessons.map((l) => (
          <Select.Item key={l} value={String(l)} label={String(l)} />
        ))}
      </Select>
      <Heading size="lg" my={5} textAlign="center">
        {lessonName}
      </Heading>
      <LessonComponent />
    </Box>
  )
};

export default Materials;