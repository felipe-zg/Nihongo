import React from "react";
import { Box, VStack } from "native-base";
import { LyricLine } from "./components/LyricLine";

interface LyricsProps {
  lyric: string[];
}

const Lyrics: React.FC<LyricsProps> = ({ lyric }) => {

  return (
    <Box paddingY={50} paddingLeft={{base: 0, md: 50}} backgroundColor={"white"} flex={1} minHeight={"100vh"}>
      <VStack space={2} p={4}>
        {lyric.map((line, i) => (
          <LyricLine key={i} rubyText={line} />
        ))}
      </VStack>
    </Box>
  );
};

export default Lyrics;
