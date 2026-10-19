import { cn } from "@/lib/cn";

interface CueShotArtProps {
  className?: string;
}

const pockets: readonly [number, number][] = [[30, 30], [160, 26], [290, 30], [30, 190], [160, 194], [290, 190]];
const ease = "transition-[translate,stroke-dashoffset] duration-700 ease-snap motion-reduce:transition-none";

// Snooker table geometry: cue, ghost ball and the cut line to the pocket. On card hover
// the cue draws back and the object ball's path traces into the corner pocket.
export function CueShotArt({ className }: CueShotArtProps) {
  return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className={className}>
      <rect x={20} y={20} width={280} height={180} rx={14} fill="none" className="stroke-ink/20" strokeWidth={1.5} />
      <rect x={32} y={32} width={256} height={156} rx={6} fill="none" className="stroke-ink/10" strokeWidth={1} />
      <line x1={92} y1={32} x2={92} y2={188} className="stroke-ink/10" strokeWidth={1} />
      {pockets.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={8} className="fill-ink/80" />)}
      <line x1={96} y1={146} x2={181} y2={101} className="stroke-ink/35" strokeWidth={1} strokeDasharray="4 5" />
      <circle cx={181} cy={101} r={9} fill="none" className="stroke-ink/30" strokeWidth={1} strokeDasharray="3 3" />
      <path
        d="M196 92 L284 36"
        pathLength={1}
        fill="none"
        strokeLinecap="round"
        className={cn("stroke-ink/70 [stroke-dasharray:1] [stroke-dashoffset:0.65] group-hover/hobby:[stroke-dashoffset:0]", ease)}
        strokeWidth={1.5}
      />
      <path d="M210 92a16 16 0 0 0 -5 -11" fill="none" className="stroke-ink/50" strokeWidth={1} />
      <circle cx={190} cy={96} r={9} className="fill-volt stroke-ink" strokeWidth={1.5} />
      <circle cx={96} cy={146} r={9} className="fill-paper stroke-ink" strokeWidth={1.5} />
      <g className={cn("group-hover/hobby:-translate-x-3 group-hover/hobby:translate-y-2", ease)}>
        <line x1={34} y1={181} x2={83} y2={154} className="stroke-ink" strokeWidth={4} strokeLinecap="round" />
        <line x1={34} y1={181} x2={50} y2={172} className="stroke-graphite" strokeWidth={5} strokeLinecap="round" />
      </g>
    </svg>
  );
}
