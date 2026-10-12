import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-[clamp(3.5rem,7vw,6.5rem)]", className)}>
      {children}
    </section>
  );
}
