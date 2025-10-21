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

  useImperativeHandle(ref, () => ({
    reset: () => {
      setStrokes([]);
      setCurrentStroke([]);
      const ctx = ctxRef.current;
      if (ctx) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
  }));

  const drawStrokes = (allStrokes: Stroke[]) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "black";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    for (const stroke of allStrokes) {
      const outline = getStroke(stroke, {
        size: 4,
        thinning: 0.5,
        smoothing: 0.6,
        streamline: 0.4,
      });
      if (outline.length > 1) {
        ctx.beginPath();
        ctx.moveTo(outline[0][0], outline[0][1]);
        for (let i = 1; i < outline.length; i++) {
          ctx.lineTo(outline[i][0], outline[i][1]);
        }
        ctx.closePath();
        ctx.fill();
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    // Resize & scale for Retina
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      drawStrokes(strokes);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let isDrawing = false;

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      const point: Point = [
        e.clientX - rect.left,
        e.clientY - rect.top,
        e.pressure || 0.5,
      ];
      setCurrentStroke([point]);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDrawing) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const point: Point = [
        e.clientX - rect.left,
        e.clientY - rect.top,
        e.pressure || 0.5,
      ];
      setCurrentStroke((prev) => {
        const newStroke = [...prev, point];
        drawStrokes([...strokes, newStroke]);
        return newStroke;
      });
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isDrawing) return;
      e.preventDefault();
      isDrawing = false;
      setStrokes((prev) => {
        const updated = [...prev, currentStroke];
        drawStrokes(updated);
        return updated;
      });
      setCurrentStroke([]);
    };

    canvas.style.touchAction = "none";
    
    canvas.addEventListener("pointerdown", handlePointerDown, { passive: false });
    canvas.addEventListener("pointermove", handlePointerMove, { passive: false });
    canvas.addEventListener("pointerup", handlePointerUp, { passive: false });
    canvas.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
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
      <div
        className="canvasContainer"
        style={{
          width: "100%",
          height: "300px",
          touchAction: "none",
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
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
