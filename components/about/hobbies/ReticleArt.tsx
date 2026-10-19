import { cn } from "@/lib/cn";

interface ReticleArtProps {
  className?: string;
}

const spin = "[transform-box:view-box] origin-[230px_110px] transition-transform duration-1000 ease-snap motion-reduce:transition-none";

// Sniper-scope reticle on a range grid. On card hover the outer ring turns and the
// crosshair tightens onto the target.
export function ReticleArt({ className }: ReticleArtProps) {
  const grid = Array.from({ length: 17 }, (_, i) => i * 20);
  return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className={className}>
      <g className="stroke-chalk/[0.07]" strokeWidth={1}>
        {grid.map((x) => <line key={`v${x}`} x1={x} y1={0} x2={x} y2={220} />)}
        {grid.slice(0, 12).map((y) => <line key={`h${y}`} x1={0} y1={y} x2={320} y2={y} />)}
      </g>
      <g className={cn(spin, "group-hover/hobby:rotate-90")}>
        <circle cx={230} cy={110} r={82} fill="none" className="stroke-chalk/30" strokeWidth={1} strokeDasharray="2 7" />
      </g>
      <circle cx={230} cy={110} r={56} fill="none" className="stroke-volt" strokeWidth={1.5} />
      <g className={cn(spin, "group-hover/hobby:scale-[0.82]")}>
        <g className="stroke-chalk/70" strokeWidth={1.25} strokeLinecap="round">
          <line x1={130} y1={110} x2={214} y2={110} />
          <line x1={246} y1={110} x2={330} y2={110} />
          <line x1={230} y1={10} x2={230} y2={94} />
          <line x1={230} y1={126} x2={230} y2={210} />
          {[26, 52, 78].map((d) => (
            <g key={d}>
              <line x1={230 - d} y1={105} x2={230 - d} y2={115} />
              <line x1={230 + d} y1={105} x2={230 + d} y2={115} />
              <line x1={225} y1={110 + d} x2={235} y2={110 + d} />
            </g>
          ))}
        </g>
      </g>
      <circle cx={230} cy={110} r={9} fill="none" className="stroke-volt/60 transition-opacity duration-500 group-hover/hobby:opacity-0" strokeWidth={1} />
      <circle cx={230} cy={110} r={3} className="fill-volt" />
      <g className="stroke-chalk/40" strokeWidth={1.5} fill="none" strokeLinecap="round">
        <path d="M24 36V24h12M24 184v12h12" />
      </g>
    </svg>
  );
}
