import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "on-volt";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
}

const base =
  "group inline-flex min-h-12 items-center gap-3 rounded-[var(--radius-control)] px-6 py-3 " +
  "font-sans font-condensed text-[1.0625rem] font-extrabold uppercase tracking-[0.01em] " +
  "transition-[background-color,color,transform] duration-200 ease-[var(--ease-snap)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-volt text-ink hover:bg-ink hover:text-volt",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-chalk",
  "on-volt": "bg-ink text-volt hover:bg-chalk hover:text-ink",
};

export function Button({ href, variant = "primary", icon, children, className, ...rest }: ButtonProps) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {icon && <span className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5">{icon}</span>}
      {children}
    </a>
  );
}
