import React, { useMemo, useState, useEffect } from "react";
import { NIHONGO_NO_MORI_JLPT_N3, PAST_JLPT_N3, TOMO_SENSEI_JLPT_N3 } from "../../../consts";
import JLPTExamVocabs from "./JLPTExamVocabs";
import { useSearchParams } from "react-router-dom";

type VocabsSource = "TOMO_SENSEI" | "NIHONGO_NO_MORI" | "PAST_EXAMS";

const JLPTExamVocabsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [isDifficultWords, setIsDifficultWords] = useState(false);
  const lessonsParam: VocabsSource = (searchParams.get("source") as VocabsSource) || "TOMO_SENSEI";

  const handleStartIndexChange = (value: number) => {
    if (endIndex <= value) {
      setEndIndex(value + 1);
    }
    setStartIndex(value);
  };

  const handleEndIndexChange = (value: number) => {
    if (value < startIndex) {
      setStartIndex(value);
    }
    setEndIndex(value);
  };

  const vocabList: JLPTReview[] = useMemo(() => {
    switch (lessonsParam) {
      case "NIHONGO_NO_MORI":
        return NIHONGO_NO_MORI_JLPT_N3;
      case "PAST_EXAMS":
        return PAST_JLPT_N3;
      case "TOMO_SENSEI":
      default:
        return TOMO_SENSEI_JLPT_N3;
    }
  }, [lessonsParam]);

  let filteredVocabList = useMemo(() => {
    if (startIndex === 0 && endIndex === 0) return vocabList;
    return vocabList.slice(startIndex, endIndex + 1).filter(item => !isDifficultWords || item.repeat);
  }, [vocabList, startIndex, endIndex, isDifficultWords]);

  useEffect(() => {
    setEndIndex(vocabList.length > 0 ? vocabList.length - 1 : 0);
    setStartIndex(0);
  }, [vocabList]);

  return (
    <JLPTExamVocabs
      vocabList={filteredVocabList}
      startIndex={startIndex}
      handleStartIndexChange={handleStartIndexChange}
      endIndex={endIndex}
      handleEndIndexChange={handleEndIndexChange}
      isDifficultWords={isDifficultWords}
      handleIsDifficultWordsChange={setIsDifficultWords}
    />
  )
};

export default JLPTExamVocabsPage;