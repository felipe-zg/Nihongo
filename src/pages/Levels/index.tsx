import React from "react";
import Levels from "./Levels";
import { N4_DECK } from "../../consts";

const KanjiPage: React.FC = () => {
  const DECK_ITEMS = N4_DECK;
  const [deckItems, setDeckItems] = React.useState<NLevel[]>(DECK_ITEMS);
  const [levels, setLevels] = React.useState<NLevels[]>(['N4']);
  const [shuffle, setShuffle] = React.useState<boolean>(true);

  function addLevel(level: NLevels) {
    setLevels([...levels, level]);
  }

  function removeLevel(level: NLevels) {
    setLevels(levels.filter((l) => l !== level));
  }

  function handleLevelChange(level: NLevels) {
    if(levels.length === 1 && levels.includes(level)) {
      return;
    }
    if(levels.includes(level)) {
      removeLevel(level);
    } else {
      addLevel(level);
    }
  }

  function updateDeckItemsByLevel(): Array<NLevel> {
    // const newDeckItems = Object.keys(KANJI)
    //   .filter((lesson) => lessons.includes(Number(lesson)))
    //   .map((lesson) => KANJI[Number(lesson) as keyof typeof KANJI])
    //   .flat();
    // return newDeckItems;
    return deckItems;
  }

  function updateDeckItemsAndShuffle() {
    const newDeckItems = updateDeckItemsByLevel().sort(() => Math.random() - 0.5);
    setDeckItems(newDeckItems);
  }

  function updateDeckItems() {
    const newDeckItems = updateDeckItemsByLevel();
    setDeckItems(newDeckItems);
  }

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
  }, [levels, shuffle]);

  return (
    <Levels 
      deckItems={deckItems}
      levels={levels}
      handleLevelChange={handleLevelChange}
      shuffle={shuffle}
      handleShuffleChange={handleShuffleChange}
    />
  )
};

export default KanjiPage;