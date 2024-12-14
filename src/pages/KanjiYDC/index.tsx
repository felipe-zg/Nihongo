import React from "react";
import Kanji from "./Kanji";
import { 
  KANJI_YDC_LESSON_4,
  KANJI_YDC_LESSON_5,
  KANJI_YDC_LESSON_6,
  KANJI_YDC_LESSON_7,
  KANJI_YDC_LESSON_8,
} from "../../consts";

const KANJI_MAP = {
  4: KANJI_YDC_LESSON_4,
  5: KANJI_YDC_LESSON_5,
  6: KANJI_YDC_LESSON_6,
  7: KANJI_YDC_LESSON_7,
  8: KANJI_YDC_LESSON_8,
}

const KanjiPage = () => {
  const [deckItems, setDeckItems] = React.useState<Array<KanjiYDC>>(Object.values(KANJI_MAP).flat());
  const [onlyMainExamplesEnabled, setOnlyMainExamplesEnabled] = React.useState(true);
  const [lessons, setLessons] = React.useState<number[]>([4, 5, 6]);
  const [mode, setMode] = React.useState<KanjiYDCMode>("carousel");
  const availableLessons = Object.keys(KANJI_MAP).map(Number);

  function handleOnlyMainExamplesEnabled() {
    setOnlyMainExamplesEnabled(!onlyMainExamplesEnabled);
  }

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
    const newDeckItems = Object.keys(KANJI_MAP)
      .filter((lesson) => lessons.includes(Number(lesson)))
      .map((lesson) => KANJI_MAP[Number(lesson) as keyof typeof KANJI_MAP])
      .flat()
      .sort(() => Math.random() - 0.5);
    setDeckItems(newDeckItems);
  }

  function handleModeChange(mode: KanjiYDCMode) {
    setMode(mode);
  };

  React.useEffect(() => {
    updateDeckItemsByLessons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessons]);

  return (
    <Kanji 
      deckItems={deckItems}
      onlyMainExamplesEnabled={onlyMainExamplesEnabled}
      handleOnlyMainExamplesEnabled={handleOnlyMainExamplesEnabled}
      availableLessons={availableLessons}
      lessons={lessons}
      handleLessonChange={handleLessonChange}
      mode={mode}
      handleModeChange={handleModeChange}
    />
  )
};

export default KanjiPage;