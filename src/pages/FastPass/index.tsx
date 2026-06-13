import React from "react";
import FastPass from "./FastPass";
import { JLPT_N2_FASTPASS_TANGO, N2ExtraWords } from "../../consts";
import { parseRuby } from "../../utils/music/rubyParser";
import { useSearchParams } from "react-router-dom";

type VocabularySource = 'FASTPASS' | 'EXTRA';

const FastPassPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const vocabularySourceParam: VocabularySource = (searchParams.get("source") as VocabularySource);
  const vocabularyList = vocabularySourceParam === "EXTRA" ? N2ExtraWords : JLPT_N2_FASTPASS_TANGO;
  const [startId, setStartId] = React.useState(1);
  const [endId, setEndId] = React.useState(60);
  const [filteredWord, setFilteredWord] = React.useState<TangoWord | null>(null);
  const [importantOnly, setImportantOnly] = React.useState(false);
  const [numberOfImportantWords, setNumberOfImportantWords] = React.useState(0);

  const openPrintPage = () => {
    const printWindow = window.open(`/printable/fastpass?startId=${startId}&endId=${endId}`, "_blank");
    if (printWindow) {
      printWindow.focus();
    } else {
      alert("Unable to open print page. Please allow pop-ups for this site.");
    }
  };

  const handleStartIdChange = (id: number): void => {
    if (id > endId) {
      setEndId(id);
    }
    setStartId(id);
  };

  const handleEndIdChange = (id: number): void => {
    if (id < startId) {
      setStartId(id);
    }
    setEndId(id);
  };

  const handleImportantOnlyChange = (): void => {
    setImportantOnly(prev => !prev);
  }

  const runFilter = (filter: string): boolean => {
    if (!filter) return false;
    
    for (const entry of Object.values(vocabularyList)) {
      for (const word of entry.words) {
        const reading = parseRuby(word.wordRuby)
          .map(part => part.kanji)
          .join("");

        if (reading.includes(filter) || String(word.id).includes(filter)) {
          setFilteredWord(word);
          return true;
        }
      }
    }
    return false;
  };


  const availableIds = React.useMemo(() => {
    return Object.values(vocabularyList)
      .flatMap(entry => entry.words.map(word => word.id));
  }, [vocabularyList]);

  const filterByIdRange = (words: TangoWord[], startdId: number, endId: number) => {
    return words.filter(word => word.id >= startId && word.id <= endId);
  }

  const filterByIdImportance = (words: TangoWord[]) => {
    return words.filter(word => word.important);
  }

  const tangoList = React.useMemo(() => {
    const filteredTango: Record<string, TangoEntry> = {};
    let _numberOfImportantWords = 0;
    for (const [key, entry] of Object.entries(vocabularyList)) {
      const filteredWords = importantOnly ? filterByIdImportance(entry.words) : filterByIdRange(entry.words, startId, endId);
      if (filteredWords.length > 0) {
        filteredTango[key] = { ...entry, words: filteredWords };
        _numberOfImportantWords += filteredWords.length;
      }
    }
    setNumberOfImportantWords(_numberOfImportantWords);
    return filteredTango;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vocabularyList, importantOnly, startId, endId]);

  return (
    <FastPass 
      tangoList={tangoList}
      filteredWord={filteredWord}
      openPrintPage={openPrintPage}
      startId={startId}
      endId={endId}
      importantOnly={importantOnly}
      onImportantOnlyChange={handleImportantOnlyChange}
      numberOfImportantWords={numberOfImportantWords}
      onStartIdChange={handleStartIdChange}
      onEndIdChange={handleEndIdChange}
      availableIds={availableIds}
      runFilter={runFilter}
    />
  );
};

export default FastPassPage;
