import React from "react";
import { JLPT_N2_FASTPASS_TANGO, N2ExtraWords } from "../../../consts";
import { useSearchParams } from "react-router-dom";
import FastPassPhrases from "./FastPassPhrases";

type VocabularySource = 'FASTPASS' | 'EXTRA';

const FastPassPhrasesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const vocabularySourceParam: VocabularySource = (searchParams.get("source") as VocabularySource);
  const vocabularyList = vocabularySourceParam === "EXTRA" ? N2ExtraWords : JLPT_N2_FASTPASS_TANGO;
  const [startId, setStartId] = React.useState(1);
  const [endId, setEndId] = React.useState(60);
  const [importantOnly, setImportantOnly] = React.useState(false);
  const [numberOfImportantWords, setNumberOfImportantWords] = React.useState(0);

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

  const phrases = React.useMemo(() => {
    const filteredPhrases: string[] = [];
    let _numberOfImportantWords = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_, entry] of Object.entries(vocabularyList)) {
      const filteredWords = importantOnly ? filterByIdImportance(entry.words) : filterByIdRange(entry.words, startId, endId);
      if (filteredWords.length > 0) {
        filteredPhrases.push(...filteredWords.map(word => word.example));
        _numberOfImportantWords += filteredWords.length;
      }
    }
    setNumberOfImportantWords(_numberOfImportantWords);
    return filteredPhrases;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vocabularyList, importantOnly, startId, endId]);

  return (
    <FastPassPhrases
      phrases={phrases}
      startId={startId}
      endId={endId}
      importantOnly={importantOnly}
      onImportantOnlyChange={handleImportantOnlyChange}
      numberOfImportantWords={numberOfImportantWords}
      onStartIdChange={handleStartIdChange}
      onEndIdChange={handleEndIdChange}
      availableIds={availableIds}
    />
  );
};

export default FastPassPhrasesPage;
