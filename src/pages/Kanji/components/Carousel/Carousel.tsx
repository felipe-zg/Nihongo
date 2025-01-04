import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, HStack, Pressable, Text, VStack } from "native-base";
import { useSwipeable } from "react-swipeable";
import { useScreenWidth } from "../../../../hooks";

interface Props {
  data: KanjiYDCExample[];
  onlyMainExamplesEnabled: boolean;
}

const Carousel: React.FC<Props> = ({ data, onlyMainExamplesEnabled }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const screenWidth = useScreenWidth();

  const examples = useMemo(() => {
    const filtered = onlyMainExamplesEnabled
      ? data.filter((item) => item?.type === "main")
      : data;
    return filtered.length > 0 ? filtered : [{ reading: "", kana: "", meaning: [], sentence: "", type: "" }];
  }, [data, onlyMainExamplesEnabled]);

  const nextSlide = () => {
    if(isFlipped) {
      setIsFlipped(false);
    }
    setCurrentIndex((prev) => (prev + 1) % examples.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);
  };

  const flipCard = () => {
    if(isFlipped) return;
    setIsFlipped((prev) => !prev);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [examples]);

  return (
    <Pressable onPress={flipCard} alignItems="center" w="100%">
      {examples.length === 0 ? (
        <Text fontSize="lg" color="gray.500">No examples available.</Text>
      ) : (
        <>
          <HStack space={3} justifyContent="center"  w="100%">
            {screenWidth > 500 && (
              <Button
                style={{ transform: [{ translateY: -20 }] }} // Adjust vertical alignment
                size="sm"
                variant="unstyled"
                _text={{ fontSize: "2xl", color: "gray.500" }}
                onPress={prevSlide}
              >
                &#8592;
              </Button>
            )}

            <Box
              {...handlers}
              borderWidth={1}
              borderColor="gray.300"
              borderRadius="lg"
              p={4}
              width="90%"
              bg="white"
              overflow="hidden"
            >
              <VStack space={3} alignItems="center">
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  color={examples[currentIndex]?.type === "main" ? "red.500" : "gray.500"}
                >
                  {examples[currentIndex]?.reading}
                </Text>

                <Box opacity={isFlipped ? 100 : 0}>
                  <Text fontSize="lg" color="gray.600">
                    {examples[currentIndex]?.kana}
                  </Text>
                  <Text fontSize="md" color="gray.700">
                    {examples[currentIndex]?.meaning.join(", ")}
                  </Text>
                  <Text fontSize="md" italic color="gray.600">
                    {examples[currentIndex]?.sentence}
                  </Text>
                </Box>
              </VStack>
            </Box>

            {screenWidth > 500 && (
              <Button
                style={{ transform: [{ translateY: -20 }] }} // Adjust vertical alignment
                size="sm"
                variant="unstyled"
                _text={{ fontSize: "2xl", color: "gray.500" }}
                onPress={nextSlide}
              >
                &#8594;
              </Button>
            )}
          </HStack>

          {/* Slide Indicators */}
          <HStack space={2} mt={4} justifyContent="center">
            {examples?.map((_, index) => (
              <Box
                key={index}
                size={3}
                borderRadius="full"
                bg={index === currentIndex ? "blue.500" : "gray.300"}
              />
            ))}
          </HStack>
        </>
      )}
    </Pressable>
  );
};

export default Carousel;
