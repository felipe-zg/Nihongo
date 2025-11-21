import React from 'react';
import { Box, Button } from 'native-base';

type FloatingControlsProps = {
  onNext: () => void;
  onPrev: () => void;
  position?: "top" | "middle" | "bottom";
};

export default function FloatingControls({ onNext, onPrev, position = "middle" }: FloatingControlsProps) {
  const topPosition = position === "top" ? "15%" : position === "middle" ? "50%" : "75%";

  return (
    <>
    <Box
          position="fixed"
          left={0}
          top={topPosition}
          zIndex={100}
          style={{ transform: [{ translateY: -25 }] }}
        >
          <Button
            size="xs"
            borderRadius="full"
            colorScheme="pink"
            variant="outline"
            opacity={0.5}
            onPress={onPrev}
          >
            {"前"}
          </Button>
        </Box>

        <Box
          position="fixed"
          right={0}
          top={topPosition}
          zIndex={100}
          style={{ transform: [{ translateY: -25 }] }}
        >
          <Button
            size="xs"
            borderRadius="full"
            colorScheme="pink"
            opacity={0.5}
            onPress={onNext}
          >
            次
          </Button>
        </Box>
      </>
  );

}