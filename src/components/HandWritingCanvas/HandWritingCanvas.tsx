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
        width={{ base: "90vw", lg: "50vw" }}
        height="300px"
      >
        <div
          style={{
            userSelect: "none",
            WebkitUserSelect: "none",
            WebkitTouchCallout: "none",
            touchAction: "none",
            borderRadius: "8px",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <ReactSketchCanvas
            ref={canvasRef}
            width={"100%"}
            height="300px"
            strokeWidth={4}
            strokeColor="black"
            canvasColor="#fff"
          />
        </div>
      </Box>
      <HStack width={"full"} space={2} justifyContent="space-between">
        <Button variant="outline" colorScheme={"pink"} flex="1" onPress={handleClear}>Clear</Button>
        <Button variant="outline" colorScheme={"yellow"} flex="1" onPress={handleUndo}>Undo</Button>
      </HStack>

    </VStack>
  );
});
