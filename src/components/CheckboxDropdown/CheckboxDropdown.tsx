import React from "react";
import { Box, Checkbox, VStack, Text, Pressable } from "native-base";

type CheckboxDropdownProps<T> = {
  options: T[];
  selectedOptions: T[];
  onOptionChange: (option: T) => void;
  label: string;
};

const CheckboxDropdown = <T extends React.Key>({
  options,
  selectedOptions,
  onOptionChange,
  label,
}: CheckboxDropdownProps<T>) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <Box>
      <Pressable
        onPress={toggleDropdown}
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        borderWidth={1}
        borderRadius="md"
        p={3}
      >
        <Text>{label}</Text>
        <Text>{isOpen ? "▲" : "▼"}</Text>
      </Pressable>
      {isOpen && (
        <Box
          borderWidth={1}
          borderRadius="md"
          mt={2}
          bg="white"
          p={3}
          overflow="hidden"
        >
          <VStack space={2}>
            {options.map((option) => (
              <Checkbox
                key={option}
                value={String(option)}
                isChecked={selectedOptions.includes(option)}
                onChange={() => onOptionChange(option)}
              >
                <Text>{typeof option === "object" ? JSON.stringify(option) : String(option)}</Text>
              </Checkbox>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default CheckboxDropdown;
