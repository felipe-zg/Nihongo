import { Text } from "native-base";
import { RubyWord } from "./RubyWord";
import { parseRuby } from "../../../utils/music/rubyParser";

export const LyricLine = ({ rubyText, showFurigana }: { rubyText: string, showFurigana: boolean }) => {
  const parts = parseRuby(rubyText);
  return (
    <Text flexDirection="row" flexWrap="wrap">
      {parts.map((part, index) => (
        <RubyWord key={index} {...part} showFurigana={showFurigana} />
      ))}
    </Text>
  );
};