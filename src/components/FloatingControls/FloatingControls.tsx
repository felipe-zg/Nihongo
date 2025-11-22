import React from 'react';
import { Box, Button } from 'native-base';

type FloatingControlsProps = {
  onNext: () => void;
  onPrev: () => void;
  position?: "top" | "middle" | "bottom";
  nextLabel?: string;
  prevLabel?: string;
};

export default function FloatingControls({
  onNext,
  onPrev,
  position = "middle",
  nextLabel = "次",
  prevLabel = "前"
}: FloatingControlsProps) {
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
            {prevLabel}
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
            {nextLabel}
          </Button>
        </Box>
      </>
  );

}