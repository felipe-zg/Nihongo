import React from "react";
import Words from "./Words";
import { 
  WORD_YDC_LESSON_1,
  WORD_YDC_LESSON_2,
  WORD_YDC_LESSON_3,
  WORD_YDC_LESSON_4,
  WORD_YDC_LESSON_5,
  WORD_YDC_LESSON_6,
  WORD_YDC_LESSON_7,
  WORD_YDC_LESSON_8,
  WORD_YDC_LESSON_9,
  WORD_YDC_LESSON_10,
  WORD_YDC_LESSON_11,
  WORD_YDC_LESSON_12,
  WORD_YDC_LESSON_13,
  WORD_YDC_LESSON_14,
  WORD_YDC_LESSON_16,
  WORD_YDC_LESSON_17,
  WORD_YDC_LESSON_18,
  WORD_YDC_LESSON_19,
  WORD_YDC_LESSON_20,
  WORD_YDC_LESSON_21,
  WORD_YDC_LESSON_22,
} from "../../consts";

const WORDS_MAP = {
  1: WORD_YDC_LESSON_1,
  2: WORD_YDC_LESSON_2,
  3: WORD_YDC_LESSON_3,
  4: WORD_YDC_LESSON_4,
  5: WORD_YDC_LESSON_5,
  6: WORD_YDC_LESSON_6,
  7: WORD_YDC_LESSON_7,
  8: WORD_YDC_LESSON_8,
  9: WORD_YDC_LESSON_9,
  10: WORD_YDC_LESSON_10,
  11: WORD_YDC_LESSON_11,
  12: WORD_YDC_LESSON_12,
  13: WORD_YDC_LESSON_13,
  14: WORD_YDC_LESSON_14,
  16: WORD_YDC_LESSON_16,
  17: WORD_YDC_LESSON_17,
  18: WORD_YDC_LESSON_18,
  19: WORD_YDC_LESSON_19,
  20: WORD_YDC_LESSON_20,
  21: WORD_YDC_LESSON_21,
  22: WORD_YDC_LESSON_22,
};

const KanjiPage = () => {
  const [deckItems, setDeckItems] = React.useState<Array<WordYDC>>(Object.values(WORDS_MAP).flat());
  const [showKana, setShowKana] = React.useState<boolean>(true);
  const availableLessons = Object.keys(WORDS_MAP).map(Number);
  const [lessons, setLessons] = React.useState<number[]>(availableLessons);

  function addLesson(lesson: number) {
    setLessons([...lessons, lesson]);
  }

  function removeLesson(lesson: number) {
    setLessons(lessons.filter((l) => l !== lesson));
  }

  function handleLessonChange(lesson: number) {
    if(lessons.length === 1 && lessons.includes(lesson)) {
      return;
    }
    if(lessons.includes(lesson)) {
      removeLesson(lesson);
    } else {
      addLesson(lesson);
    }
  }

  function updateDeckItemsByLessons() {
    const newDeckItems = Object.keys(WORDS_MAP)
      .filter((lesson) => lessons.includes(Number(lesson)))
      .map((lesson) => WORDS_MAP[Number(lesson) as keyof typeof WORDS_MAP])
      .flat()
      .sort(() => Math.random() - 0.5);
    setDeckItems(newDeckItems);
  }

  function toggleShowKana(): void {
    setShowKana(prev => !prev);
  }

  React.useEffect(() => {
    updateDeckItemsByLessons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessons]);

  return (
    <Words 
      deckItems={deckItems}
      availableLessons={availableLessons}
      lessons={lessons}
      handleLessonChange={handleLessonChange}
      showKana={showKana}
      handleToggleShowKana={toggleShowKana}
    />
  )
};

export default KanjiPage;