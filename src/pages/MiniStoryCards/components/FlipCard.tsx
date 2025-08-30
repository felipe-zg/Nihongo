import React, {
  useImperativeHandle,
  useState,
  forwardRef
} from "react";
import { Text } from "native-base";
import "./FlipCard.css";
import { parseRuby } from "../../../utils/music/rubyParser";


type Props = {
  vocab: {kanji: string; english: string};
};

export type FlipCardHandle = {
  flip: () => void;
  unflip: () => void;
  isFlipped: () => boolean;
};

const FlipCard = forwardRef<FlipCardHandle, Props>(({ vocab }, ref) => {
  const [flipped, setFlipped] = useState(false);

  useImperativeHandle(ref, () => ({
    flip: () => setFlipped(true),
    unflip: () => setFlipped(false),
    isFlipped: () => flipped,
  }));

  function formattedKanji(kanji: string, hideFurigana = false) {
    const parts = parseRuby(kanji);
    const formattedDialogue = parts.map(a => {
      const mainContent = a.furigana && !hideFurigana ? `<ruby>${a.kanji}<rt>${a.furigana}</rt></ruby>` : a.kanji;
      return `<span>${mainContent}</span>`;
    }
    ).join('');
    return <span dangerouslySetInnerHTML={{ __html: formattedDialogue }}  />
  }

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front" style={{backgroundColor:"#ffbeab"}}>
          <Text fontSize={vocab.kanji.length > 4 ? "5xl" : "7xl"}>
            <Text>{formattedKanji(vocab.kanji, true)}</Text>
          </Text>
        </div>
        <div className="card-face card-back">
          <Text fontSize="2xl">
            {formattedKanji(vocab.kanji)}
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {vocab.english}
          </Text>
        </div>
      </div>
    </div>
  );
});

export default FlipCard;
