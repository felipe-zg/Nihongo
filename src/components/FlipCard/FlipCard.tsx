import React, {
  useImperativeHandle,
  useState,
  forwardRef
} from "react";
import "./FlipCard.css";


type Props = {
  CardFrontContent: React.ComponentType;
  CardBackContent: React.ComponentType;
};

export type FlipCardHandle = {
  flip: () => void;
  unflip: () => void;
  isFlipped: () => boolean;
};

const FlipCard = forwardRef<FlipCardHandle, Props>(({ CardFrontContent, CardBackContent }, ref) => {
  const [flipped, setFlipped] = useState(false);

  useImperativeHandle(ref, () => ({
    flip: () => setFlipped(true),
    unflip: () => setFlipped(false),
    isFlipped: () => flipped,
  }));

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front" style={{backgroundColor:"#ffbeab"}}>
          <CardFrontContent />
        </div>
        <div className="card-face card-back">
          <CardBackContent />
        </div>
      </div>
    </div>
  );
});

export default FlipCard;
