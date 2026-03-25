import React from "react";
import { Box, HStack, Switch, Text, VStack } from "native-base";
import { LyricLine } from "./components/LyricLine";

interface LyricsProps {
  lyric: string[];
}

const Lyrics: React.FC<LyricsProps> = ({ lyric }) => {
  const [showFurigana, setShowFurigana] = React.useState(true);
  return (
    <Box paddingY={50} paddingLeft={{base: 0, md: 50}} flex={1} minHeight={"100vh"}>
      <HStack space={2} alignItems={"center"} justifyContent={"flex-end"} px={10}>
        <Text color={"white"}>Show Furigana</Text>
        <Switch
          isChecked={showFurigana}
          onToggle={setShowFurigana}
        />
      </HStack>

      <VStack space={2} p={4}>
        {lyric.map((line, i) => (
          <LyricLine key={i} rubyText={line} showFurigana={showFurigana} />
        ))}
      </VStack>
    </Box>
  );
};

export default Lyrics;
