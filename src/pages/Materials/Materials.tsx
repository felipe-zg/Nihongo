import React from "react";
import { Lesson37, Lesson38, Lesson39 } from ".";
import { Box, Heading, Select } from "native-base";

const lessonPages: Record<number, React.FC> = {
  37: Lesson37,
  38: Lesson38,
  39: Lesson39,
};

const Materials: React.FC = () => {
  const availableLessons = [37, 38, 39];
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