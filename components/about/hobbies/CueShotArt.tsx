import { cn } from "@/lib/cn";

interface CueShotArtProps {
  className?: string;
}

const ease = "transition-[translate,stroke-dashoffset] duration-700 ease-snap motion-reduce:transition-none";

// Perspective chessboard grid with knight move vector. On card hover the strategic trajectory traces.
export function CueShotArt({ className }: CueShotArtProps) {
  return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className={className}>
      {/* Outer chessboard border */}
      <rect x={30} y={25} width={260} height={170} rx={10} fill="none" className="stroke-ink/20" strokeWidth={1.5} />
      <rect x={40} y={35} width={240} height={150} rx={6} fill="none" className="stroke-ink/10" strokeWidth={1} />

      {/* Grid lines (horizontal) */}
      <line x1={40} y1={65} x2={280} y2={65} className="stroke-ink/10" strokeWidth={1} />
      <line x1={40} y1={95} x2={280} y2={95} className="stroke-ink/10" strokeWidth={1} />
      <line x1={40} y1={125} x2={280} y2={125} className="stroke-ink/10" strokeWidth={1} />
      <line x1={40} y1={155} x2={280} y2={155} className="stroke-ink/10" strokeWidth={1} />

      {/* Grid lines (vertical) */}
      <line x1={80} y1={35} x2={80} y2={185} className="stroke-ink/10" strokeWidth={1} />
      <line x1={120} y1={35} x2={120} y2={185} className="stroke-ink/10" strokeWidth={1} />
      <line x1={160} y1={35} x2={160} y2={185} className="stroke-ink/10" strokeWidth={1} />
      <line x1={200} y1={35} x2={200} y2={185} className="stroke-ink/10" strokeWidth={1} />
      <line x1={240} y1={35} x2={240} y2={185} className="stroke-ink/10" strokeWidth={1} />

      {/* Alternating shaded squares */}
      <rect x={40} y={35} width={40} height={30} className="fill-ink/5" />
      <rect x={120} y={35} width={40} height={30} className="fill-ink/5" />
      <rect x={200} y={35} width={40} height={30} className="fill-ink/5" />
      <rect x={80} y={65} width={40} height={30} className="fill-ink/5" />
      <rect x={160} y={65} width={40} height={30} className="fill-ink/5" />
      <rect x={240} y={65} width={40} height={30} className="fill-ink/5" />
      <rect x={40} y={95} width={40} height={30} className="fill-ink/5" />
      <rect x={120} y={95} width={40} height={30} className="fill-ink/5" />
      <rect x={200} y={95} width={40} height={30} className="fill-ink/5" />
      <rect x={80} y={125} width={40} height={30} className="fill-ink/5" />
      <rect x={160} y={125} width={40} height={30} className="fill-ink/5" />
      <rect x={240} y={125} width={40} height={30} className="fill-ink/5" />

      {/* Knight move trajectory path (L-shape from d2 to f3 to e5) */}
      <path
        d="M 100 140 L 100 80 L 140 80 L 180 50"
        pathLength={1}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("stroke-ink/80 [stroke-dasharray:1] [stroke-dashoffset:0.6] group-hover/hobby:[stroke-dashoffset:0]", ease)}
        strokeWidth={2}
      />

      {/* Target piece node (volt highlight) */}
      <circle cx={180} cy={50} r={10} className="fill-volt stroke-ink" strokeWidth={1.5} />
      <path d="M 176 46 L 184 54 M 184 46 L 176 54" className="stroke-ink" strokeWidth={1.5} strokeLinecap="round" />

      {/* Origin piece node */}
      <circle cx={100} cy={140} r={10} className="fill-paper stroke-ink" strokeWidth={1.5} />
      <circle cx={100} cy={140} r={4} className="fill-ink" />

      {/* King crown icon silhouette in corner */}
      <g className={cn("group-hover/hobby:-translate-y-1.5", ease)}>
        <path
          d="M 215 170 L 215 160 L 223 165 L 230 152 L 237 165 L 245 160 L 245 170 Z"
          className="fill-ink stroke-ink"
          strokeWidth={1}
          strokeLinejoin="round"
        />
        <line x1={212} y1={172} x2={248} y2={172} className="stroke-ink" strokeWidth={2} strokeLinecap="round" />
      </g>
    </svg>
  );
}
