import React from "react";
import Words from "./Words";
import { GENKI_WORDS_OBJECT, WORDS_OBJECT } from "../../consts";

type Props = {
  source: TSource;
};

const WORDS_MAP = {
  YDC: WORDS_OBJECT,
  GENKI: GENKI_WORDS_OBJECT,
}

const KanjiPage: React.FC<Props> = ({ source }) => {
  const WORDS = WORDS_MAP[source];
  const [deckItems, setDeckItems] = React.useState<Array<Word>>(Object.values(WORDS).flat());
  const [showKana, setShowKana] = React.useState<boolean>(true);
  const [shuffle, setShuffle] = React.useState<boolean>(false);
  const availableLessons = Object.keys(WORDS).map(Number);
  const [lessons, setLessons] = React.useState<number[]>([1]);

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
    const newDeckItems = Object.keys(WORDS)
      .filter((lesson) => lessons.includes(Number(lesson)))
      .map((lesson) => WORDS[Number(lesson) as keyof typeof WORDS])
      .flat()
    return newDeckItems;
  }

  function updateDeckItemsAndShuffle() {
    const newDeckItems = updateDeckItemsByLessons().sort(() => Math.random() - 0.5);
    setDeckItems(newDeckItems);
  }

  function updateDeckItems() {
    const newDeckItems = updateDeckItemsByLessons();
    setDeckItems(newDeckItems);
  }

  function toggleShowKana(): void {
    setShowKana(prev => !prev);
  }

  function handleShuffleChange(): void {
    setShuffle(prev => !prev);
  }

  React.useEffect(() => {
      if(shuffle) {
        updateDeckItemsAndShuffle();
      } else {
        updateDeckItems();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lessons, shuffle]);

  return (
    <Words 
      deckItems={deckItems}
      availableLessons={availableLessons}
      lessons={lessons}
      handleLessonChange={handleLessonChange}
      showKana={showKana}
      handleToggleShowKana={toggleShowKana}
      shuffle={shuffle}
      handleShuffleChange={handleShuffleChange}
    />
  )
};

export default KanjiPage;