import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TabCardProps {
  label: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "chalk" | "volt";
}

const tones = { paper: "bg-paper", chalk: "bg-chalk", volt: "bg-volt" } as const;

export function TabCard({ label, children, className, tone = "paper" }: TabCardProps) {
  return (
    <div className={cn("relative [--bw:1.5px] [--tab-h:1.75rem] [--tab-w:9rem]", className)}>
      <span className="absolute left-0 top-0 z-10 flex h-[var(--tab-h)] items-center text-sm font-medium text-ink">
        {label}
      </span>
      <div className="tab-clip absolute inset-0 bg-ink" aria-hidden="true" />
      <div className={cn("tab-clip relative m-[var(--bw)] p-5 pt-[calc(var(--tab-h)+1.25rem)]", tones[tone])}>
        {children}
      </div>
    </div>
  );
}
