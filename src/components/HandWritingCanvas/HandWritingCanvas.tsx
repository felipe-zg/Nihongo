// components/HandwritingCanvas.tsx
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button, HStack, VStack } from "native-base";
import getStroke from "perfect-freehand";

export type HandwritingCanvasRef = {
  reset: () => void;
};

type Point = [number, number, number]; // [x, y, pressure]
type Stroke = Point[];

const PERFECT_FREEHAND_OPTIONS = {
  size: 6,
  thinning: 0.5,
  smoothing: 0.6,
  streamline: 0.4,
};

const HandwritingCanvas = forwardRef<HandwritingCanvasRef>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // visible state for re-renders (so UI updates when undo/clear happen)
  const [, setVersion] = useState(0);

  // Refs to hold the actual stroke arrays so handlers don't close over stale values
  const strokesRef = useRef<Stroke[]>([]);
  const currentRef = useRef<Stroke>([]);
  const isDrawingRef = useRef(false);

  // small helper to trigger rerender when needed
  const touch = () => setVersion((v) => v + 1);

  // expose reset via imperative handle
  useImperativeHandle(ref, () => ({
    reset: () => {
      strokesRef.current = [];
      currentRef.current = [];
      clearCanvas();
      touch();
    },
  }));

  // draw all strokes from refs onto canvas
  const drawAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // clear full canvas (use canvas pixel size)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    const all = [...strokesRef.current, currentRef.current];

    for (const stroke of all) {
      if (!stroke || stroke.length === 0) continue;
      const path = getStroke(stroke, PERFECT_FREEHAND_OPTIONS);
      if (!path || path.length < 1) continue;

      ctx.beginPath();
      ctx.moveTo(path[0][0], path[0][1]);
      for (let i = 1; i < path.length; i++) {
        const [x, y] = path[i];
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // set canvas size with DPR and ensure correct scaling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      // reset any transforms before scaling to avoid compounding
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(ratio, ratio);
      drawAll();
    };

    window.addEventListener("resize", resize);
    // initial resize
    resize();

    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // helper: map pointer event coords to canvas coordinates (taking DPR and client rect into account)
  const getRelativeCoords = (e: PointerEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;

    // normalized to canvas pixel grid, then divide by ratio to match scaled ctx
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    // convert back to CSS pixel coordinates used by ctx after ctx.scale(ratio, ratio)
    return [x / ratio, y / ratio] as const;
  };

  // pointer handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ensure iPad/Chrome/Safari don't steal gestures
    const style = canvas.style as CSSStyleDeclaration & {
      msTouchAction?: string;
      WebkitTouchCallout?: string;
      WebkitUserSelect?: string;
    };
    style.touchAction = "none";
    style.msTouchAction = "none";
    style.WebkitTouchCallout = "none";
    style.WebkitUserSelect = "none";

    const handlePointerDown = (e: PointerEvent) => {
      // start drawing for primary button or any pen touch
      // for pen or touch, browsers may set buttons differently; accept pointerdown start unconditionally
      isDrawingRef.current = true;
      canvas.setPointerCapture?.(e.pointerId); // optional: capture pointer
      const [x, y] = getRelativeCoords(e);
      currentRef.current = [[x, y, e.pressure ?? 0.5]];
      drawAll();
      touch();
      e.preventDefault();
      e.stopPropagation();
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDrawingRef.current) return;
      const [x, y] = getRelativeCoords(e);
      currentRef.current = [...currentRef.current, [x, y, e.pressure ?? 0.5]];
      drawAll();
      // don't call touch() on every move (would hammer re-renders). We draw directly to canvas.
      e.preventDefault();
      e.stopPropagation();
    };

    const finishStroke = (e?: PointerEvent) => {
      if (!isDrawingRef.current) return;
      isDrawingRef.current = false;
      if (e && canvas.releasePointerCapture) {
        try {
          canvas.releasePointerCapture(e.pointerId);
        } catch {
          /* ignore */
        }
      }
      // commit current stroke to strokesRef
      if (currentRef.current.length > 0) {
        strokesRef.current = [...strokesRef.current, currentRef.current];
        currentRef.current = [];
        drawAll();
        touch(); // update UI for undo/clear
      }
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    canvas.addEventListener("pointerdown", handlePointerDown, { passive: false });
    canvas.addEventListener("pointermove", handlePointerMove, { passive: false });
    // use window pointerup to avoid missing pointerup when pointer leaves canvas
    window.addEventListener("pointerup", finishStroke, { passive: false });
    // pointercancel in some browsers
    window.addEventListener("pointercancel", finishStroke, { passive: false });

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", finishStroke);
      window.removeEventListener("pointercancel", finishStroke);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // expose Undo and Clear handlers
  const handleClear = () => {
    strokesRef.current = [];
    currentRef.current = [];
    clearCanvas();
    touch();
  };

  const handleUndo = () => {
    strokesRef.current = strokesRef.current.slice(0, -1);
    drawAll();
    touch();
  };

  // drawAll whenever strokes/current change in ref via some external call (we already draw inside handlers)
  // but keep a small effect so if somebody updates refs externally we still render
  useEffect(() => {
    drawAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          overflow: "hidden",
          borderRadius: 8,
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            borderRadius: 8,
            display: "block",
          }}
        />
      </div>

      <HStack width={"full"} space={2} justifyContent="space-between" mt={3}>
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

export default HandwritingCanvas;
