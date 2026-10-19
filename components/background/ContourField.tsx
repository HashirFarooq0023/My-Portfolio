"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { createNoise2D } from "@/lib/simplex";

/**
 * Topographic background. Faint contour lines are drawn once; one dark
 * contour follows the elevation under the pointer, so the line "traces"
 * the terrain as the visitor moves. With no pointer (touch, idle), the
 * dark line drifts slowly through the levels.
 *
 * Colors come from Tailwind tokens: `text-*` = active line, `border-*` = faint lines.
 */
interface ContourFieldProps {
  className?: string;
  /** Grid cell in CSS px. Lower = smoother lines, more CPU. */
  cellSize?: number;
  /** Number of faint contour levels. */
  levels?: number;
  /** Terrain feature size in CSS px. Higher = broader hills. */
  scale?: number;
  seed?: number;
  /** Let the dark line drift when no pointer is present. */
  idleDrift?: boolean;
}

type Ctx = CanvasRenderingContext2D;

export function ContourField({
  className = "",
  cellSize = 7,
  levels = 22,
  scale = 760,
  seed = 7,
  idleDrift = true,
}: ContourFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const noise = createNoise2D(seed);
    const layer = document.createElement("canvas");
    const lctx = layer.getContext("2d");
    if (!lctx) return;

    const style = getComputedStyle(canvas);
    const activeColor = style.color;
    const faintColor = style.borderTopColor;
    const hoverCapable = window.matchMedia("(hover: hover)").matches;

    let w = 0, h = 0, dpr = 1, cols = 0, rows = 0;
    let field = new Float32Array(0);
    let level = 0.5, target = 0.5, drift = 1;
    let pointer: { x: number; y: number } | null = null;
    let raf = 0, dirty = true;

    // Marching squares: append every segment of one iso-level to the current path.
    const trace = (c: Ctx, L: number) => {
      const stride = cols + 1;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * stride + x;
          const a = field[i], b = field[i + 1], cc = field[i + stride + 1], d = field[i + stride];
          const idx = (a > L ? 8 : 0) | (b > L ? 4 : 0) | (cc > L ? 2 : 0) | (d > L ? 1 : 0);
          if (idx === 0 || idx === 15) continue;
          const px = x * cellSize, py = y * cellSize;
          const T = () => [px + (cellSize * (L - a)) / (b - a), py] as const;
          const R = () => [px + cellSize, py + (cellSize * (L - b)) / (cc - b)] as const;
          const B = () => [px + (cellSize * (L - d)) / (cc - d), py + cellSize] as const;
          const Lf = () => [px, py + (cellSize * (L - a)) / (d - a)] as const;
          const seg = (p: readonly [number, number], q: readonly [number, number]) => {
            c.moveTo(p[0], p[1]);
            c.lineTo(q[0], q[1]);
          };
          switch (idx) {
            case 1: case 14: seg(Lf(), B()); break;
            case 2: case 13: seg(B(), R()); break;
            case 3: case 12: seg(Lf(), R()); break;
            case 4: case 11: seg(T(), R()); break;
            case 6: case 9: seg(T(), B()); break;
            case 7: case 8: seg(T(), Lf()); break;
            case 5: seg(T(), R()); seg(Lf(), B()); break;
            case 10: seg(T(), Lf()); seg(B(), R()); break;
          }
        }
      }
    };

    const sample = (x: number, y: number) => {
      const gx = Math.min(Math.max(x / cellSize, 0), cols - 1e-3);
      const gy = Math.min(Math.max(y / cellSize, 0), rows - 1e-3);
      const x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
      const i = y0 * (cols + 1) + x0;
      const top = field[i] * (1 - fx) + field[i + 1] * fx;
      const bot = field[i + cols + 1] * (1 - fx) + field[i + cols + 2] * fx;
      return top * (1 - fy) + bot * fy;
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      if (!w || !h) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = layer.width = Math.round(w * dpr);
      canvas.height = layer.height = Math.round(h * dpr);
      cols = Math.ceil(w / cellSize);
      rows = Math.ceil(h / cellSize);

      field = new Float32Array((cols + 1) * (rows + 1));
      let min = Infinity, max = -Infinity;
      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          const nx = (x * cellSize) / scale, ny = (y * cellSize) / scale;
          const v = noise(nx, ny) + 0.35 * noise(nx * 2 + 17, ny * 2 + 31) + 0.1 * noise(nx * 4 - 9, ny * 4 + 5);
          field[y * (cols + 1) + x] = v;
          if (v < min) min = v;
          if (v > max) max = v;
        }
      }
      for (let i = 0; i < field.length; i++) field[i] = (field[i] - min) / (max - min);

      lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lctx.clearRect(0, 0, w, h);
      lctx.strokeStyle = faintColor;
      lctx.lineCap = lctx.lineJoin = "round";
      for (let k = 1; k < levels; k++) {
        const major = k % 5 === 0; // "index contours", like a real topo map
        lctx.globalAlpha = major ? 1 : 0.7;
        lctx.lineWidth = major ? 1.2 : 0.8;
        lctx.beginPath();
        trace(lctx, k / levels);
        lctx.stroke();
      }
      lctx.globalAlpha = 1;
      dirty = true;
      draw();
    };

    const draw = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(layer, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.strokeStyle = activeColor;
      ctx.lineCap = ctx.lineJoin = "round";
      ctx.lineWidth = 2;
      ctx.beginPath();
      trace(ctx, level);
      ctx.stroke();
      if (pointer && hoverCapable) {
        const s = 6;
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(pointer.x - s, pointer.y);
        ctx.lineTo(pointer.x + s, pointer.y);
        ctx.moveTo(pointer.x, pointer.y - s);
        ctx.lineTo(pointer.x, pointer.y + s);
        ctx.stroke();
      }
      dirty = false;
    };

    const tick = () => {
      if (pointer) {
        target = sample(pointer.x, pointer.y);
      } else if (idleDrift) {
        target += 0.0007 * drift;
        if (target > 0.85 || target < 0.15) drift *= -1;
      }
      const delta = target - level;
      if (Math.abs(delta) > 1e-4) {
        level += delta * 0.09;
        dirty = true;
      }
      if (dirty) draw();
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      pointer = x >= 0 && y >= 0 && x <= r.width && y <= r.height ? { x, y } : null;
      dirty = true;
    };
    const onLeave = () => { pointer = null; dirty = true; };
    const onUp = (e: PointerEvent) => { if (e.pointerType !== "mouse") onLeave(); };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(tick);
    };

    let resizeRaf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(build);
    });
    ro.observe(canvas);
    build();

    if (reduceMotion) return () => ro.disconnect(); // static map + one dark line

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [cellSize, levels, scale, seed, idleDrift, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block h-full w-full border-contour text-ink ${className}`}
    />
  );
}
