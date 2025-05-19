import React from "react";
import Nihongo500 from "./Nihongo500";
import { NIHONGO_500_N3 } from "../../../consts";

const Nihongo500N3Page: React.FC = () => {
  const [deckItems, setDeckItems] = React.useState<Array<Nihongo500N3>>(NIHONGO_500_N3);
  const [shuffle, setShuffle] = React.useState<boolean>(false);
  const [chanllengeMode, setChallengeMode] = React.useState<boolean>(false);


  function handleShuffleChange() {
    setShuffle(!shuffle);
  };

  function handleChallengeModeChange() {
    setChallengeMode(!chanllengeMode);
  };

  React.useEffect(() => {
    if(shuffle) {
      const shuffledDeck = [...NIHONGO_500_N3].sort(() => Math.random() - 0.5);
      setDeckItems(shuffledDeck);
    } else {
      setDeckItems(NIHONGO_500_N3);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shuffle]);

  return (
    <Nihongo500 
      deckItems={deckItems}
      shuffle={shuffle}
      handleShuffleChange={handleShuffleChange}
      challengeMode={chanllengeMode}
      handleChallengeModeChange={handleChallengeModeChange}
    />
  )
};

export default Nihongo500N3Page;