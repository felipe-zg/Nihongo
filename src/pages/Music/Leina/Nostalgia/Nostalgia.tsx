import React from "react";
import { Box, VStack } from "native-base";
import { LyricLine } from "../../components/LyricLine";
import { LEINA_NOSTALGIA } from "../../../../consts/music/Leina/nostalgia.const";

const Nostalgia: React.FC = () => {

  return (
    <Box padding="1cm" backgroundColor={"white"} flex={1} minHeight={"100vh"}>
      <VStack space={2} p={4}>
        {LEINA_NOSTALGIA.map((line, i) => (
          <LyricLine key={i} rubyText={line} />
        ))}
      </VStack>
    </Box>
  );
};

export default Nostalgia;
