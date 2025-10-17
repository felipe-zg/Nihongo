// components/HandwritingCanvas.tsx
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { Box, Button, HStack, VStack } from "native-base";
import { forwardRef, useImperativeHandle, useRef } from "react";

export type HandwritingCanvasRef = {
  reset: () => void;
};

export const HandwritingCanvas = forwardRef<HandwritingCanvasRef>((_, ref) => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      canvasRef.current?.resetCanvas();
    },
  }));

  const handleClear = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  }

  return (
    <VStack alignItems="center">
      <Box
        borderWidth={1}
        borderColor="gray.400"
        borderRadius="md"
        overflow="hidden"
        width={{ base: "90vw", md: "50vw" }}
        height="300px"
      >
        <ReactSketchCanvas
          ref={canvasRef}
          width={"100%"}
          height="300px"
          strokeWidth={4}
          strokeColor="black"
          canvasColor="#fff"
        />
      </Box>
      <HStack width={"full"} space={2} justifyContent="space-between">
        <Button variant="outline" colorScheme={"pink"} flex="1" onPress={handleClear}>Clear</Button>
        <Button variant="outline" colorScheme={"yellow"} flex="1" onPress={handleUndo}>Undo</Button>
      </HStack>

    </VStack>
  );
});
