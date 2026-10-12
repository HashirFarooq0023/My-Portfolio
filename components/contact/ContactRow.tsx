import { Icon, type IconName } from "@/components/ui/Icon";

interface ContactRowProps {
  href: string;
  icon: IconName;
  label: string;
  value: string;
  external?: boolean;
}

export function ContactRow({ href, icon, label, value, external = true }: ContactRowProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative isolate -mx-4 flex items-center gap-5 overflow-hidden rounded-panel px-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <span aria-hidden="true" className="absolute inset-0 -z-10 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-snap group-hover:scale-x-100" />
      <span className="grid size-12 shrink-0 place-items-center rounded-full border-[1.5px] border-ink transition-colors duration-500 group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
        <Icon name={icon} />
      </span>
      <span className="min-w-0 flex-1 transition-colors duration-500 group-hover:text-volt">
        <span className="block text-sm font-medium opacity-70">{label}</span>
        <span className="block truncate text-lg font-bold tracking-tight md:text-xl">{value}</span>
      </span>
      <Icon name="arrowUpRight" className="size-5 transition-[color,rotate] duration-500 ease-snap group-hover:rotate-45 group-hover:text-volt" />
    </a>
  );
}
