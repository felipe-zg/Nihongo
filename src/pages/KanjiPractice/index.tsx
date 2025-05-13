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
} from "../../consts";

const filterKanjiItems = (kanjiLessonObj: Array<KanjiYDC>): KanjiYDCExample[] => {
  let examples: KanjiYDCExample[] = [];
  kanjiLessonObj.forEach((item) => {
    item.examples.forEach((example) => {
      if(example.type === "main") {
        examples.push(example);
      }
    });
  });
  return examples;
}

const wordsList: Record<number, KanjiYDCExample[]> = {
  4: filterKanjiItems(KANJI_YDC_LESSON_4),
  5: filterKanjiItems(KANJI_YDC_LESSON_5),
  6: filterKanjiItems(KANJI_YDC_LESSON_6),
  7: filterKanjiItems(KANJI_YDC_LESSON_7),
  8: filterKanjiItems(KANJI_YDC_LESSON_8),
  9: filterKanjiItems(KANJI_YDC_LESSON_9),
  10: filterKanjiItems(KANJI_YDC_LESSON_10),
  11: filterKanjiItems(KANJI_YDC_LESSON_11),
  12: filterKanjiItems(KANJI_YDC_LESSON_12),
  13: filterKanjiItems(KANJI_YDC_LESSON_13),
  14: filterKanjiItems(KANJI_YDC_LESSON_14),
  15: filterKanjiItems(KANJI_YDC_LESSON_15),
  16: filterKanjiItems(KANJI_YDC_LESSON_16),
  17: filterKanjiItems(KANJI_YDC_LESSON_17),
  18: filterKanjiItems(KANJI_YDC_LESSON_18),
};

const KanjiPracticePage: React.FC = () => {
  const availableLessons = Object.keys(wordsList).map(Number);
  const [selectedLesson, setSelectedLesson] = React.useState(availableLessons[0]);

  const words = React.useMemo(() => {
    return wordsList[selectedLesson];
  }, [selectedLesson]);

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
