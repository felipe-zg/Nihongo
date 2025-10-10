import React, {
  useImperativeHandle,
  useState,
  forwardRef
} from "react";
import "./FlipCard.css";


type Props = {
  CardFrontContent: React.ReactNode;
  CardBackContent: React.ReactNode;
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
        <div className="card-face card-front" style={{backgroundColor:"#171736ff"}}>
          {CardFrontContent}
        </div>
        <div className="card-face card-back" style={{backgroundColor:"#171736ff"}}>
          {CardBackContent}
        </div>
      </div>
    </div>
  );
});

export default FlipCard;
