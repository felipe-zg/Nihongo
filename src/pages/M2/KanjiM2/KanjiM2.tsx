import React, { useMemo, useRef, useState } from "react";
import { Box, Button, HStack, Text, Select } from "native-base";

type Props = {
  wordsList: Record<number, TKanjiM2>;
};


const KanjiM2: React.FC<Props> = ({ wordsList }) => {

  function goToCardsDeck() {
    window.location.href = `/kanji-m2-cards?startKanjiIdParam=${426}&endKanjiIdParam=${426}`;
  };

  return (
    <Box alignItems="center" mt={10}>
      <Text fontSize={"xl"} bold color={"white"}>漢字 M2</Text>
      <Button variant="outline" colorScheme="primary" onPress={goToCardsDeck}>
        Cards deck
      </Button>
    </Box>
  );
};

export default KanjiM2;
