import React from "react";
import FastPass from "./FastPass";
import { JLPT_N2_FASTPASS_TANGO } from "../../consts";
import { parseRuby } from "../../utils/music/rubyParser";

const FastPassPage: React.FC = () => {
  const [startId, setStartId] = React.useState(1);
  const [endId, setEndId] = React.useState(10);
  const [filteredWord, setFilteredWord] = React.useState<TangoWord | null>(null);

  const openPrintPage = () => {
    const printWindow = window.open(`/printable/fastpass?startId=${startId}&endId=${endId}`, "_blank");
    if (printWindow) {
      printWindow.focus();
    } else {
      alert("Unable to open print page. Please allow pop-ups for this site.");
    }
  };

  const handleStartIdChange = (id: number) => {
    setStartId(id);
  };

  const handleEndIdChange = (id: number) => {
    setEndId(id);
  };

  const runFilter = (filter: string): boolean => {
    if (!filter) return false;
    
    for (const entry of Object.values(JLPT_N2_FASTPASS_TANGO)) {
      for (const word of entry.words) {
        const reading = parseRuby(word.wordRuby)
          .map(part => part.kanji)
          .join("");

        if (reading.includes(filter) || String(word.id).includes(filter)) {
          setFilteredWord(word);
          // setShowModal(true);
          return true;
        }
      }
    }
    return false;
  };


  const availableIds = Object.values(JLPT_N2_FASTPASS_TANGO)
    .flatMap(entry => entry.words.map(word => word.id));

  const tangoList = React.useMemo(() => {
    const filteredTango: Record<string, TangoEntry> = {};
    for (const [key, entry] of Object.entries(JLPT_N2_FASTPASS_TANGO)) {
      const filteredWords = entry.words.filter(word => word.id >= startId && word.id <= endId);
      if (filteredWords.length > 0) {
        filteredTango[key] = { ...entry, words: filteredWords };
      }
    }
    return filteredTango;
  }, [startId, endId]);

  return (
    <FastPass 
      tangoList={tangoList}
      filteredWord={filteredWord}
      openPrintPage={openPrintPage}
      startId={startId}
      endId={endId}
      onStartIdChange={handleStartIdChange}
      onEndIdChange={handleEndIdChange}
      availableIds={availableIds}
      runFilter={runFilter}
    />
  );
};

export default FastPassPage;
