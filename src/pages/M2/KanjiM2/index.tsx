import React, { useEffect } from "react";
import M2_KANJI from "../../../consts/kanji/M2";
import KanjiM2 from "./KanjiM2";

const KanjiM2Page: React.FC = () => {
  const [wordsList, setWordsList] = React.useState<Record<number, TKanjiM2>>(M2_KANJI);
  const [selectedStartIndex, setSelectedStartIndex] = React.useState<number>(0);
  const [selectedEndIndex, setSelectedEndIndex] = React.useState<number>(0);
  const [availableIndexes] = React.useState<number[]>(() => {
    return Object.keys(M2_KANJI).map(key => Number(key)).sort((a, b) => a - b);
  });

  function handleStartIndexChange(index: number) {
    setSelectedStartIndex(index);
  }

  function handleEndIndexChange(index: number) {
    setSelectedEndIndex(index);
  }

  useEffect(() => {
    // define start and end safely using existing availableIndexes
    const startIndex = selectedStartIndex || availableIndexes[0];
    const endIndex = selectedEndIndex || availableIndexes[availableIndexes.length - 1];

    // if nothing selected, return all words
    if (startIndex === availableIndexes[0] && endIndex === availableIndexes[availableIndexes.length - 1]) {
      setWordsList(M2_KANJI);
    } else {
      const filteredWords = Object.values(M2_KANJI).filter(word => {
        return word.id >= startIndex && word.id <= endIndex;
      });
      const newWordsList: Record<number, TKanjiM2> = {};
      filteredWords.forEach(word => {
        newWordsList[word.id] = word;
      });
      setWordsList(newWordsList);
    }
  }, [selectedStartIndex, selectedEndIndex, availableIndexes]);

  return (
    <KanjiM2
      wordsList={wordsList}
      selectedStartIndex={selectedStartIndex}
      onStartIndexChange={handleStartIndexChange}
      selectedEndIndex={selectedEndIndex}
      onEndIndexChange={handleEndIndexChange}
      availableIndexes={availableIndexes}
    />
  )
};

export default KanjiM2Page;