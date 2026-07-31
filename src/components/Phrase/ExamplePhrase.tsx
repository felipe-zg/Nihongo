import React from "react";
import { Text } from "native-base";
import { GrammarExplanation } from "../../consts/JLPT/N2/gammar-points.const";

type Props = {
  example: string;
  fontSize?: string;
  baseColor?: string;
  highlightColor?: string;
  secondayHighlightColor?: string;
  textAlign?: "center" | "left" | "right";
  // Added new props to support the click functionality
  grammarPoints?: GrammarExplanation[];
  onGrammarClick?: (explanation: GrammarExplanation) => void;
};

const ExamplePhrase: React.FC<Props> = ({
  example,
  fontSize = "md",
  baseColor = "white",
  highlightColor = "pink.500",
  secondayHighlightColor = "yellow.500",
  textAlign = "center",
  grammarPoints,
  onGrammarClick,
}) => {
  // 1. Create a dictionary for quick O(1) lookups by grammar point ID
  const grammarLookup = grammarPoints?.reduce<Record<string, GrammarExplanation>>((acc, point) => {
    acc[point.id] = point;
    return acc;
  }, {});

  const parts = example.split(/(\{.*?\}|\[\*.*?\*.*?\]|\[.*?\]|<.*?>)/g);

  return (
    <Text
      fontFamily="Klee One"
      bold
      textAlign={textAlign}
      color={baseColor}
      fontSize={fontSize}
    >
      {parts.map((part, index) => {
        if (part.startsWith("{") && part.endsWith("}")) {
          return (
            <Text key={index} color={highlightColor}>
              {part.slice(1, -1)}
            </Text>
          );
        }

        if (part.startsWith("[") && part.endsWith("]")) {
          // Check if it has the ID format: [*id*text]
          if (part.startsWith("[*")) {
            const match = part.match(/\[\*(\d+)\*(.*?)\]/);
            if (match) {
              const [, grammarId, displayText] = match;
              const explanation = grammarLookup?.[grammarId];

              return (
                <Text
                  key={index}
                  color={secondayHighlightColor}
                  onPress={() => explanation && onGrammarClick?.(explanation)}
                >
                  {displayText}
                </Text>
              );
            }
          }

          // Fallback: Standard grammar string [text] without an ID
          // Stays the same color but has no onPress or underline
          return (
            <Text key={index} color={secondayHighlightColor}>
              {part.slice(1, -1)}
            </Text>
          );
        }

        // --- < ... > → orange ---
        if (part.startsWith("<") && part.endsWith(">")) {
          return (
            <Text key={index} color="orange.500">
              {part.slice(1, -1)}
            </Text>
          );
        }

        // --- Default text ---
        return (
          <Text key={index} color={baseColor}>
            {part}
          </Text>
        );
      })}
    </Text>
  );
};

export default ExamplePhrase;