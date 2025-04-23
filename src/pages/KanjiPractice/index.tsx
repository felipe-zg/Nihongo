import React from "react";
import KanjiPractice from "./KanjiPractice";
import { KANJI_PRACTICE_LESSON_17, KANJI_PRACTICE_LESSON_9 } from "../../consts/kanjiPractice";

const wordsList: Record<number, { kanji: string; kana: string; meaning: string; }[]> = {
  9: KANJI_PRACTICE_LESSON_9,
  17: KANJI_PRACTICE_LESSON_17
};

const KanjiPracticePage: React.FC = () => {
  const availableLessons = [9, 17];
  const [selectedLesson, setSelectedLesson] = React.useState(availableLessons[0]);
  const words = wordsList[selectedLesson];

  return (
    <KanjiPractice
      lesson={selectedLesson}
      availableLessons={availableLessons}
      handleModeChange={setSelectedLesson}
      items={words}
    />
  )
};

export default KanjiPracticePage;
