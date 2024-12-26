import React from "react";
import Words from "./Words";
import { WORDS_OBJECT } from "../../consts";

const KanjiPage = () => {
  const [deckItems, setDeckItems] = React.useState<Array<Word>>(Object.values(WORDS_OBJECT).flat());
  const [showKana, setShowKana] = React.useState<boolean>(true);
  const availableLessons = Object.keys(WORDS_OBJECT).map(Number);
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
    const newDeckItems = Object.keys(WORDS_OBJECT)
      .filter((lesson) => lessons.includes(Number(lesson)))
      .map((lesson) => WORDS_OBJECT[Number(lesson) as keyof typeof WORDS_OBJECT])
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