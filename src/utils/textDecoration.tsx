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
      <Text textAlign={textAlign || "left"} fontSize="sm" italic color="gray.400">
        {sentence}
      </Text>
    );
  }

  const parts = sentence.split(/\{|\}/);

  if (parts.length < 3) {
    return (
      <Text fontSize="sm" italic color="gray.400">
        {sentence}
      </Text>
    );
  }

  const [before, highlighted, after] = parts;

  return (
    <Text fontSize="sm" italic>
      <Text color="gray.400">{before}</Text>
      <Text color="pink.500">{highlighted}</Text>
      <Text color="gray.400">{after}</Text>
    </Text>
  );
}