import React from "react";
import Kanji from "./Kanji";
import { 
  KANJI_YDC_LESSON_4,
  KANJI_YDC_LESSON_5,
  KANJI_YDC_LESSON_6,
  KANJI_YDC_LESSON_7,
  KANJI_YDC_LESSON_8,
  KANJI_YDC_LESSON_9,
  KANJI_YDC_LESSON_10,
} from "../../consts";
import { KANJI_GENKI_OBJECT } from "../../consts/kanji";

const KANJI_YDC_OBJECT = {
  4: KANJI_YDC_LESSON_4,
  5: KANJI_YDC_LESSON_5,
  6: KANJI_YDC_LESSON_6,
  7: KANJI_YDC_LESSON_7,
  8: KANJI_YDC_LESSON_8,
  9: KANJI_YDC_LESSON_9,
  10: KANJI_YDC_LESSON_10,
}

type Props = {
  source: 'GENKI' | 'YDC';
};

const KANJI_MAP = {
  YDC: KANJI_YDC_OBJECT,
  GENKI: KANJI_GENKI_OBJECT,
}

const KanjiPage: React.FC<Props> = ({ source }) => {
  const KANJI = KANJI_MAP[source];
  const [deckItems, setDeckItems] = React.useState<Array<KanjiYDC>>(Object.values(KANJI).flat());
  const [onlyMainExamplesEnabled, setOnlyMainExamplesEnabled] = React.useState(true);
  const availableLessons = Object.keys(KANJI).map(Number);
  const [lessons, setLessons] = React.useState<number[]>(availableLessons);
  const [mode, setMode] = React.useState<KanjiYDCMode>("carousel");
  const [shuffle, setShuffle] = React.useState<boolean>(true);

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

  function updateDeckItemsByLessons(): Array<KanjiYDC> {
    const newDeckItems = Object.keys(KANJI)
      .filter((lesson) => lessons.includes(Number(lesson)))
      .map((lesson) => KANJI[Number(lesson) as keyof typeof KANJI])
      .flat();
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

  function handleModeChange(mode: KanjiYDCMode) {
    setMode(mode);
  };

  function handleShuffleChange() {
    setShuffle(!shuffle);
  };

  React.useEffect(() => {
    if(shuffle) {
      updateDeckItemsAndShuffle();
    } else {
      updateDeckItems();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessons, shuffle]);

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
      shuffle={shuffle}
      handleShuffleChange={handleShuffleChange}
    />
  )
};

export default KanjiPage;