import React, {
  useImperativeHandle,
  useState,
  forwardRef
} from "react";
import { Box, Divider, HStack, Text } from "native-base";
import "./FlipCard.css";

function getColorByType(type: TVocabJLPTType): string {
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
  vocab: TVocabJLPT;
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
          {vocab.extra && (
            <Box>
              {vocab.extra.map((extra, index) => (
                <HStack mt={2}>
                  <Box borderColor="red.500" borderRadius={5} borderWidth={1} mr={2}>
                    <Text color="red.500" fontSize={{base: "2xs", md: "sm"}} fontWeight="bold" px={2}>
                      {extra.charAt(0)}
                    </Text>
                  </Box>
                  <Text key={index} fontSize={{base: "2xs", md: "sm"}} color="gray.800" textAlign={"justify"}>
                    {extra.slice(2)}
                  </Text>
                </HStack>
              ))}
            </Box>
          )}
        </div>
      </div>
    </div>
  );
});

export default FlipCard;
