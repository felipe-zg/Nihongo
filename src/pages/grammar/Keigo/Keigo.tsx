import React from "react";
import { Box, HStack, Pressable, Text, VStack } from "native-base";

type Props = {
  keigoList: TKeigo[];
};

const Keigo: React.FC<Props> = ({ keigoList }) => {
  const TableItem: React.FC<{ item: TKeigo }> = ({ item }) => {
    const [show, setShow] = React.useState(false);
    return (
      <Pressable onPress={() => setShow(!show)}>
        <HStack borderTopWidth={1} borderColor="gray.600" py={2}>
          <Box flex={1} p={2}><Text color={"white"} fontSize={"2xl"}>{item.verb}</Text></Box>
          <Box flex={1} p={2}>
            <Text color={show ? "yellow.500" : "transparent"} fontSize={"2xl"}>{item.honorific}</Text>
          </Box>
          <Box flex={1} p={2}>
            <Text color={show ? "red.700" : "transparent"} fontSize={"2xl"}>{item.humble}</Text>
          </Box>
        </HStack>
      </Pressable>
    );
  };

  return (
    <Box alignItems="center" mt={10} >
      <VStack borderWidth={1} borderColor="coolGray.300" borderRadius={5} minW="95%">
        <HStack bg="gray.400">
          <Box flex={1}><Text fontSize={"2xl"} textAlign={"center"}>普通形</Text></Box>
          <Box flex={1}><Text fontSize={"2xl"} textAlign={"center"}>尊敬語</Text></Box>
          <Box flex={1}><Text fontSize={"2xl"} textAlign={"center"}>謙譲語</Text></Box>
        </HStack>
        {keigoList.map((item, index) => <TableItem key={index} item={item} /> )}
      </VStack>
    </Box>
  );
};

export default Keigo;
