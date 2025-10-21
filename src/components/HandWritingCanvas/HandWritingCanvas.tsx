// components/HandwritingCanvas.tsx
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { Button, HStack, VStack } from "native-base";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import "./HandwritingCanvas.css";

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

  useEffect(() => {
    const canvasEl = document.querySelector("canvas");
    if (!canvasEl) return;

    // 🧤 Ignore all non-pen touches (finger/palm)
    const ignoreNonPencil = (e: PointerEvent) => {
      if (e.pointerType !== "pen") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // ⚡ Prevent pointer capture (improves Apple Pencil performance)
    const releaseCapture = (e: PointerEvent) => {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    };

    // ✅ Attach listeners
    canvasEl.addEventListener("pointerdown", ignoreNonPencil, true);
    canvasEl.addEventListener("pointermove", ignoreNonPencil, true);
    canvasEl.addEventListener("pointerdown", releaseCapture, true);

    // 🧹 Clean up on unmount
    return () => {
      canvasEl.removeEventListener("pointerdown", ignoreNonPencil, true);
      canvasEl.removeEventListener("pointermove", ignoreNonPencil, true);
      canvasEl.removeEventListener("pointerdown", releaseCapture, true);
    };
  }, []);

  return (
    <VStack alignItems="center">
      <div className="canvasContainer">
        <ReactSketchCanvas
          ref={canvasRef}
          width={"100%"}
          height="300px"
          strokeWidth={4}
          strokeColor="black"
          canvasColor="#fff"
          allowOnlyPointerType="pen"
        />
      </div>
      <HStack width={"full"} space={2} justifyContent="space-between">
        <Button variant="outline" colorScheme={"pink"} flex="1" onPress={handleClear}>Clear</Button>
        <Button variant="outline" colorScheme={"yellow"} flex="1" onPress={handleUndo}>Undo</Button>
      </HStack>

    </VStack>
  );
});
