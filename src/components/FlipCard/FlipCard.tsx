import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  useEffect,
  useCallback
} from "react";
import "./FlipCard.css";


type Props = {
  CardFrontContent: React.ReactNode;
  CardBackContent: React.ReactNode;
  onNext?(): void;
  onPrev?(): void;
};

export type FlipCardHandle = {
  flip(): void;
  unflip(): void;
  isFlipped(): boolean;
};

const FlipCard = forwardRef<FlipCardHandle, Props>(({ CardFrontContent, CardBackContent, onNext, onPrev }, ref) => {
  const [flipped, setFlipped] = useState(false);

  useImperativeHandle(ref, () => ({
    flip: () => setFlipped(true),
    unflip: () => setFlipped(false),
    isFlipped: () => flipped,
  }));

  const handleNext = useCallback(() => {
    if (!flipped) {
      setFlipped(true);
      return;
    } else {
      setFlipped(false);
    }
    onNext && onNext();
  }, [flipped, onNext]);

  const handlePrev = useCallback(() => {
    if (flipped) {
      setFlipped(false);
    }
    onPrev && onPrev();
  }, [flipped, onPrev]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setFlipped(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

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
