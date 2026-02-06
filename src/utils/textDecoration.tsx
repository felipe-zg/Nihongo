import { Text } from "native-base";

/**
 * Decorates words marked with {} in sentence sentences.
 * @param String - phrase to be decorated
 * @returns String - decorated phrase
 */
export function ExampleSentence({ sentence, textAlign }: { sentence: string; textAlign?: "left" | "center" | "right" }) {
  // Split the string into 3 parts: before <>, inside <>, and after <>
  // const match = sentence.match(/^(.*)\{(.*)\}(.*)$/);
  const match = sentence.match(/^[\s\S]*?\{([\s\S]*?)\}[\s\S]*$/);

  if (!match) {
    // No <> found, render normally
    return (
      <Text textAlign={textAlign || "left"} fontSize="sm" color="white">
        {sentence}
      </Text>
    );
  }

  const parts = sentence.split(/\{|\}/);

  if (parts.length < 3) {
    return (
      <Text fontSize="sm" textAlign={textAlign || "left"} color="white">
        {sentence}
      </Text>
    );
  }

  const [before, highlighted, after] = parts;

  return (
    <Text fontSize="xl" textAlign={textAlign || "left"}>
      <Text color="white">{before}</Text>
      <Text color="yellow.400">{highlighted}</Text>
      <Text color="white">{after}</Text>
    </Text>
  );
}