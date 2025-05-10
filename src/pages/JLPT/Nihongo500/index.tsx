import React from "react";
import Nihongo500 from "./Nihongo500";
import { NIHONGO_500_N3 } from "../../../consts";

const Nihongo500N3Page: React.FC = () => {
  const [deckItems] = React.useState<Array<Nihongo500N3>>(NIHONGO_500_N3);
  const [shuffle, setShuffle] = React.useState<boolean>(false);
  const [showKana, setShowKana] = React.useState<boolean>(false);


  function handleShuffleChange() {
    setShuffle(!shuffle);
  };

  function handleShowKanaChange() {
    setShowKana(!showKana);
  };

  // React.useEffect(() => {
  //   if(shuffle) {
  //     updateDeckItemsAndShuffle();
  //   } else {
  //     updateDeckItems();
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [lessons, shuffle]);

  return (
    <Nihongo500 
      deckItems={deckItems}
      shuffle={shuffle}
      handleShuffleChange={handleShuffleChange}
      showKana={showKana}
      handleShowKanaChange={handleShowKanaChange}
    />
  )
};

export default Nihongo500N3Page;