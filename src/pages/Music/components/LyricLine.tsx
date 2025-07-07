import { Text } from "native-base";
import { RubyWord } from "./RubyWord";
import { parseRuby } from "../../../utils/music/rubyParser";

export const LyricLine = ({ rubyText }: { rubyText: string }) => {
  const parts = parseRuby(rubyText);
  return (
    <Text flexDirection="row" flexWrap="wrap">
      {parts.map((part, index) => (
        <RubyWord key={index} {...part} />
      ))}
    </Text>
  );
};