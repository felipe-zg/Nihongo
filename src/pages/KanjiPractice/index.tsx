import React from "react";
import KanjiPractice from "./KanjiPractice";
import { 
  KANJI_YDC_LESSON_4,
  KANJI_YDC_LESSON_5,
  KANJI_YDC_LESSON_6,
  KANJI_YDC_LESSON_7,
  KANJI_YDC_LESSON_8,
  KANJI_YDC_LESSON_9,
  KANJI_YDC_LESSON_10,
  KANJI_YDC_LESSON_11,
  KANJI_YDC_LESSON_12,
  KANJI_YDC_LESSON_13,
  KANJI_YDC_LESSON_14,
  KANJI_YDC_LESSON_15,
  KANJI_YDC_LESSON_16,
  KANJI_YDC_LESSON_17,
  KANJI_YDC_LESSON_18,
  KANJI_YDC_LESSON_19,
  KANJI_YDC_LESSON_20,
  KANJI_YDC_LESSON_21,
} from "../../consts";

type KanjiType = 'YDC_main' | 'main';

const filterKanjiItems = (kanjiLessonObj: Array<KanjiYDC>, type: KanjiType): KanjiYDCExample[] => {
  let examples: KanjiYDCExample[] = [];
  kanjiLessonObj.forEach((item) => {
    item.examples.forEach((example) => {
      if(example.type === type) {
        examples.push(example);
      }
    });
  });
  return examples;
}

let wordsList = (type: KanjiType = 'YDC_main'): Record<number, KanjiYDCExample[]> => {
  return {
    4: filterKanjiItems(KANJI_YDC_LESSON_4, type),
    5: filterKanjiItems(KANJI_YDC_LESSON_5, type),
    6: filterKanjiItems(KANJI_YDC_LESSON_6, type),
    7: filterKanjiItems(KANJI_YDC_LESSON_7, type),
    8: filterKanjiItems(KANJI_YDC_LESSON_8, type),
    9: filterKanjiItems(KANJI_YDC_LESSON_9, type),
    10: filterKanjiItems(KANJI_YDC_LESSON_10, type),
    11: filterKanjiItems(KANJI_YDC_LESSON_11, type),
    12: filterKanjiItems(KANJI_YDC_LESSON_12, type),
    13: filterKanjiItems(KANJI_YDC_LESSON_13, type),
    14: filterKanjiItems(KANJI_YDC_LESSON_14, type),
    15: filterKanjiItems(KANJI_YDC_LESSON_15, type),
    16: filterKanjiItems(KANJI_YDC_LESSON_16, type),
    17: filterKanjiItems(KANJI_YDC_LESSON_17, type),
    18: filterKanjiItems(KANJI_YDC_LESSON_18, type),
    19: filterKanjiItems(KANJI_YDC_LESSON_19, type),
    20: filterKanjiItems(KANJI_YDC_LESSON_20, type),
    21: filterKanjiItems(KANJI_YDC_LESSON_21, type)
  };
};

const KanjiPracticePage: React.FC = () => {
  const [type, setType] = React.useState<KanjiType>("YDC_main");
  const availableLessons = Object.keys(wordsList()).map(Number);
  const [selectedLesson, setSelectedLesson] = React.useState(availableLessons[0]);

  const words = React.useMemo(() => {
    return wordsList(type)[selectedLesson];
  }, [selectedLesson, type]);

  return (
    <KanjiPractice
      lesson={selectedLesson}
      availableLessons={availableLessons}
      handleModeChange={setSelectedLesson}
      type={type}
      handleTypeChange={setType}
      items={words}
    />
  )
};

export default KanjiPracticePage;
