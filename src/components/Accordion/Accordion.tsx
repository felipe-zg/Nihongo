import { ArrowDownIcon, ArrowUpIcon, Box, Button, HStack, Text } from "native-base";
import React from "react";
import { useScreenWidth } from "../../hooks";


type Props = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const screenWidth = useScreenWidth();

  return (
    <Box
      borderColor="coolGray.200" 
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} 
      _web={{
        shadow: 2,
        borderWidth: 0
      }}  
      _light={{
        backgroundColor: "gray.50"
      }}
      marginLeft={screenWidth < 768 ? 5 : 100}
      marginRight={screenWidth < 768 ? 5 : 100}
      marginTop={10}
    >
      <Button
        onPress={() => setIsOpen(!isOpen)}
        startIcon={isOpen ? <ArrowUpIcon size="4" /> : <ArrowDownIcon size="4" />}
        variant="ghost"
        colorScheme="indigo"
        paddingBottom={10}
      >
        <HStack>
          <Text fontSize="xl">{title}</Text>
        </HStack>
      </Button>
      {isOpen && (
        <Box paddingBottom={10}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default Accordion;
