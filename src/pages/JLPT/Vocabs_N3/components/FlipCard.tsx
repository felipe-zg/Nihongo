import React, {
  useImperativeHandle,
  useState,
  forwardRef
} from "react";
import { Box, Divider, HStack, Text } from "native-base";
import "./FlipCard.css";

function getColorByType(type: TVocabN3Type): string {
  switch (type) {
    case "noun":
      return "green.500";
    case "い adjective":
      return "red.500";
    case "な adjective":
      return "orange.500";
    case "る verb":
      return "purple.500";
    case "う verb":
      return "blue.500";
    case "する verb":
      return "yellow.500";
    default:
      return "gray.500";
  }
}

type Props = {
  vocab: TVocabN3;
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

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front" style={{backgroundColor: vocab._JLPT ? "#ffbeab" : "#fff"}}>
          <Text fontSize="7xl">
            {vocab.word}
          </Text>
        </div>
        <div className="card-face card-back">
          <Text fontSize="2xl" fontWeight="bold">
            {vocab.reading}
          </Text>
          <Text mt={2}>{vocab.meaning}</Text>
          <Divider my={4} />
          <Text fontSize="2xl">
            {vocab.example}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {vocab.exampleReading}
          </Text>
          <Text mt={1}>{vocab.exampleMeaning}</Text>
          <HStack mt={2}>
            {vocab.type.map((type, index) => (
              <Box
                key={index}
                borderColor={getColorByType(type)}
                borderWidth={1}
                mx={1}
                py={1}
                px={4}
                borderRadius="md"
              >
                <Text color={getColorByType(type)}>{type}</Text>
              </Box>
            ))}
          </HStack>
          {vocab.info && (
            <Text mt={4} fontSize={{base: "2xs", md: "sm"}} color="gray.600" textAlign={"justify"}>
              {vocab.info}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
});

export default FlipCard;
