import { Box, Center, Text } from "native-base";
import React from "react";


type Props = {};

const Levels: React.FC<Props> = () => {

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      <Center>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          日本語
        </Text>
      </Center>
    </Box>
  )
};

export default Levels;
