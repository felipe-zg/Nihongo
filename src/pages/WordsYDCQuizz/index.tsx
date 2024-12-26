import React from "react";
import Words from "./Words";
import { 
  WORD_YDC_LESSON_16,
  WORD_YDC_LESSON_17,
  WORD_YDC_LESSON_18,
  WORD_YDC_LESSON_19,
  WORD_YDC_LESSON_20,
  WORD_YDC_LESSON_21,
  WORD_YDC_LESSON_22,
} from "../../consts";

const WORDS_MAP = {
  16: WORD_YDC_LESSON_16,
  17: WORD_YDC_LESSON_17,
  18: WORD_YDC_LESSON_18,
  19: WORD_YDC_LESSON_19,
  20: WORD_YDC_LESSON_20,
  21: WORD_YDC_LESSON_21,
  22: WORD_YDC_LESSON_22,
};

const WordsQuizz = () => {
  const [deckItems, setDeckItems] = React.useState<Array<Word>>(Object.values(WORDS_MAP).flat());
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
    />
  )
};

export default WordsQuizz;