import { cn } from "@/lib/cn";

interface KickerProps {
  children: string;
  onInk?: boolean;
}

export function Kicker({ children, onInk = false }: KickerProps) {
  return (
    <h3 className={cn("flex items-center gap-2.5 text-sm font-medium", onInk ? "text-volt" : "text-graphite")}>
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", onInk ? "bg-volt" : "bg-ink")} />
      {children}
    </h3>
  );
}
