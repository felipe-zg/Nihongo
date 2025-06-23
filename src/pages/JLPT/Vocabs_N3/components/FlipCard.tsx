import React, { useState } from "react";
import { Text } from "native-base";
import "./FlipCard.css";

type TVocabN3 = {
  word: string;
  reading: string;
  meaning: string;
  example?: string;
  exampleReading?: string;
  exampleMeaning?: string;
};

type Props = {
  vocab: TVocabN3;
};

const FlipCard: React.FC<Props> = ({ vocab }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front">
          <Text fontSize="5xl" fontWeight="bold">
            {vocab.word}
          </Text>
        </div>
        <div className="card-face card-back">
          <Text fontSize="xl" fontWeight="bold">
            {vocab.reading}
          </Text>
          <Text mt={2}>{vocab.meaning}</Text>
          {vocab.example && (
            <>
              <Text mt={4} fontStyle="italic">
                {vocab.example}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {vocab.exampleReading}
              </Text>
              <Text mt={1}>{vocab.exampleMeaning}</Text>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
