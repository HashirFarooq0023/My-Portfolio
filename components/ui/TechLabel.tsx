import { techIcon } from "@/lib/techIcons";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

interface TechLabelProps {
  name: string;
  className?: string;
}

// Brand mark (or a matching glyph) plus the tech name, optically centred on one line.
export function TechLabel({ name, className }: TechLabelProps) {
  const icon = techIcon(name);
  return (
    <span className={cn("inline-flex items-center gap-1.5 leading-none", className)}>
      {icon.kind === "brand" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 shrink-0" fill="currentColor">
          <path d={icon.path} />
        </svg>
      ) : (
        <Icon name={icon.name} className="size-3.5" />
      )}
      <span>{name}</span>
    </span>
  );
}
