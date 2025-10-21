// components/HandwritingCanvas.tsx
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Button, HStack, VStack } from "native-base";
import getStroke from "perfect-freehand";
import "./HandwritingCanvas.css";

export type HandwritingCanvasRef = {
  reset: () => void;
};

type Point = [number, number, number]; // [x, y, pressure]
type Stroke = Point[];

export const HandwritingCanvas = forwardRef<HandwritingCanvasRef>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Reset canvas
  useImperativeHandle(ref, () => ({
    reset: () => {
      setStrokes([]);
      setCurrentStroke([]);
      const ctx = ctxRef.current;
      if (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }
    },
  }));

  const drawStrokes = (allStrokes: Stroke[]) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.fillStyle = "black";

    for (const stroke of allStrokes) {
      const outlinePoints = getStroke(stroke, {
        size: 4,
        thinning: 0.5,
        smoothing: 0.6,
        streamline: 0.4,
      });

      if (outlinePoints.length > 1) {
        ctx.beginPath();
        ctx.moveTo(outlinePoints[0][0], outlinePoints[0][1]);
        for (let i = 1; i < outlinePoints.length; i++) {
          ctx.lineTo(outlinePoints[i][0], outlinePoints[i][1]);
        }
        ctx.closePath();
        ctx.fill();
      }
    }
  };

  // Handle pen input
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      drawStrokes(strokes);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let isDrawing = false;

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "pen") return; // Ignore touch/mouse
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      const point: Point = [
        e.clientX - rect.left,
        e.clientY - rect.top,
        e.pressure,
      ];
      setCurrentStroke([point]);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDrawing || e.pointerType !== "pen") return;
      const rect = canvas.getBoundingClientRect();
      const point: Point = [
        e.clientX - rect.left,
        e.clientY - rect.top,
        e.pressure,
      ];
      setCurrentStroke((prev) => {
        const newStroke = [...prev, point];
        drawStrokes([...strokes, newStroke]);
        return newStroke;
      });
    };

    const handlePointerUp = () => {
      if (!isDrawing) return;
      isDrawing = false;
      setStrokes((prev) => {
        const updated = [...prev, currentStroke];
        drawStrokes(updated);
        return updated;
      });
      setCurrentStroke([]);
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointerleave", handlePointerUp);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerleave", handlePointerUp);
    };
  }, [strokes, currentStroke]);

  const handleClear = () => {
    setStrokes([]);
    setCurrentStroke([]);
    const ctx = ctxRef.current;
    if (ctx) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  const handleUndo = () => {
    const updated = strokes.slice(0, -1);
    setStrokes(updated);
    drawStrokes(updated);
  };

  return (
    <VStack alignItems="center">
      <div className="canvasContainer" style={{ width: "100%", height: "300px" }}>
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            touchAction: "none", // disables touch scrolling
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        />
      </div>
      <HStack width={"full"} space={2} justifyContent="space-between">
        <Button variant="outline" colorScheme="pink" flex="1" onPress={handleClear}>
          Clear
        </Button>
        <Button variant="outline" colorScheme="yellow" flex="1" onPress={handleUndo}>
          Undo
        </Button>
      </HStack>
    </VStack>
  );
});
