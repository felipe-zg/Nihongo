import React from "react";
import { Text } from "native-base";

type Props = {
  example: string;
  fontSize?: string;
  baseColor?: string;
  highlightColor?: string;
  textAlign?: "center" | "left" | "right";
};

const ExamplePhrase: React.FC<Props> = ({ example, fontSize = "md", baseColor = "white", highlightColor = "pink.500", textAlign = "center" }) => {
    // Split by { } or [ ] or < >
    const parts = example.split(/(\{.*?\}|\[.*?\]|<.*?>)/g);

    return (
      <Text
        fontFamily="Klee One"
        bold
        textAlign={textAlign}
        color={baseColor}
        fontSize={fontSize}  
      >
        {parts.map((part, index) => {
          // { ... } → pink
          if (part.startsWith("{") && part.endsWith("}")) {
            return (
              <Text key={index} color={highlightColor}>
                {part.slice(1, -1)}
              </Text>
            );
          }

          // [ ... ] → yellow
          if (part.startsWith("[") && part.endsWith("]")) {
            return (
              <Text key={index} color="yellow.500">
                {part.slice(1, -1)}
              </Text>
            );
          }

          // < ... > → orange
          if (part.startsWith("<") && part.endsWith(">")) {
            return (
              <Text key={index} color="orange.500">
                {part.slice(1, -1)}
              </Text>
            );
          }

          // default text
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