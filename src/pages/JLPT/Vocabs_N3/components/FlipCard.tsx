import React, { useEffect, useState } from "react";
import { Box, Divider, HStack, Text } from "native-base";
import "./FlipCard.css";

type Props = {
  vocab: TVocabN3;
};

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
};

const FlipCard: React.FC<Props> = ({ vocab }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [vocab]);

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front">
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
          <Text fontStyle="italic" fontSize="xl">
            {vocab.example}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {vocab.exampleReading}
          </Text>
          <Text mt={1}>{vocab.exampleMeaning}</Text>
          <HStack mt={2} justifyContent={"space-around"} minWidth={"00%"}>
            {vocab.type.map((type, index) => (
              <Box borderColor={getColorByType(type)} borderWidth={1} mx={1} py={1} px={4} borderRadius="md">
                <Text color={getColorByType(type)}>{type}</Text>
              </Box>
            ))}
          </HStack>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
