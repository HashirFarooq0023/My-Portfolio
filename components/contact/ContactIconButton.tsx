import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

interface ContactIconButtonProps {
  href: string;
  icon: IconName;
  label: string;
  hoverTint: string;
}

export function ContactIconButton({ href, icon, label, hoverTint }: ContactIconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      <span className="inline-flex size-14 items-center justify-center rounded-[var(--radius-control)] border-[1.5px] border-ink transition-[background-color,transform] duration-200 group-hover:bg-ink group-active:scale-[0.96]">
        <Icon name={icon} className={cn("size-6 transition-colors", hoverTint)} />
      </span>
      {label}
    </a>
  );
}
