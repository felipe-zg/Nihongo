import React from "react";
import Kanji from "./Kanji";
import { KANJI_GENKI_OBJECT, KANJI_YDC_OBJECT } from "../../consts";

type Props = {
  source: TSource;
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
  const [memoryMode, setMemoryMode] = React.useState<boolean>(false);
  const [examplesMode, setExamplesMode] = React.useState<boolean>(false);

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

  function handleMemoryModeChange() {
    setExamplesMode(false);
    setMemoryMode(!memoryMode);
  };

  function handleExamplesModeChange() {
    setMemoryMode(false);
    setExamplesMode(!examplesMode);
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
      memoryMode={memoryMode}
      handleMemoryModeChange={handleMemoryModeChange}
      examplesMode={examplesMode}
      handleExamplesModeChange={handleExamplesModeChange}
    />
  )
};

export default KanjiPage;