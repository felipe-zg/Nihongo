import React, { useEffect } from "react";
import KanjiM2 from "./KanjiM2";
// import { KanjiService } from "../../../api/firebase/firestore/kanji/m2/kanjiService.api";
import M2_KANJI from "../../../consts/kanji/M2";

const KanjiM2Page: React.FC = () => {
  const [wordsList, setWordsList] = React.useState<Record<number, TKanjiM2>>(M2_KANJI);
  const availableIndexes = Object.keys(M2_KANJI).map(k => Number(k)).sort((a, b) => a - b);
  const [selectedStartIndex, setSelectedStartIndex] = React.useState<number>(availableIndexes[0]);
  const [selectedEndIndex, setSelectedEndIndex] = React.useState<number>(availableIndexes[availableIndexes.length - 1]);


  // const [loading, setLoading] = React.useState<boolean>(true);

  // Load data from Firestore
  // useEffect(() => {
  //   async function loadData() {
  //     setLoading(true);

  //     const data = await KanjiService.getAllKanji(); // THIS RETURNS Record<number, TKanjiM2>

  //     setWordsList(data);

  //     // Same logic you used originally
  //     const indexes = Object.keys(data)
  //       .map(k => Number(k))
  //       .sort((a, b) => a - b);

  //     setAvailableIndexes(indexes);
  //     setSelectedStartIndex(indexes[0]);
  //     setSelectedEndIndex(indexes[indexes.length - 1]);

  //     setLoading(false);
  //   }

  //   loadData();
  // }, []);

  // Filter words based on selected range
  useEffect(() => {
    if (availableIndexes.length === 0) return;

    const min = availableIndexes[0];
    const max = availableIndexes[availableIndexes.length - 1];

    // If full range, use entire list
    if (selectedStartIndex === min && selectedEndIndex === max) {
      return; // wordsList already has everything
    }

    // Filter Record => Record
    const newRecord: Record<number, TKanjiM2> = {};
    Object.values(M2_KANJI).forEach(item => {
      if (item.id >= selectedStartIndex && item.id <= selectedEndIndex) {
        newRecord[item.id] = item;
      }
    });

    setWordsList(newRecord);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStartIndex, selectedEndIndex]);


  return (
    <KanjiM2
      wordsList={wordsList}
      selectedStartIndex={selectedStartIndex}
      onStartIndexChange={setSelectedStartIndex}
      selectedEndIndex={selectedEndIndex}
      onEndIndexChange={setSelectedEndIndex}
      availableIndexes={availableIndexes}
    />
  );
};

export default KanjiM2Page;
