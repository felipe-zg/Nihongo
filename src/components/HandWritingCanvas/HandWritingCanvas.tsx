// components/HandwritingCanvas.tsx
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { Box, Button, HStack, VStack } from "native-base";
import { useRef } from "react";

export const HandwritingCanvas = () => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

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
};
