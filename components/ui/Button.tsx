"use client";

import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";
import { Magnetic } from "./Magnetic";

type Variant = "primary" | "secondary" | "on-volt" | "on-ink";

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  href: string;
  children: string;
  variant?: Variant;
  icon?: IconName;
  size?: "md" | "sm";
}

const variants: Record<Variant, { root: string; sweep: string; badge: string }> = {
  primary: { root: "bg-volt text-ink hover:text-volt", sweep: "bg-ink", badge: "bg-ink text-volt group-hover:bg-volt group-hover:text-ink" },
  secondary: { root: "border-[1.5px] border-ink text-ink hover:text-chalk", sweep: "bg-ink", badge: "bg-ink text-chalk group-hover:bg-chalk group-hover:text-ink" },
  "on-volt": { root: "bg-ink text-volt hover:text-ink", sweep: "bg-chalk", badge: "bg-volt text-ink group-hover:bg-ink group-hover:text-volt" },
  "on-ink": { root: "bg-volt text-ink hover:text-ink", sweep: "bg-chalk", badge: "bg-ink text-volt" },
};

export function Button({ href, children, variant = "primary", icon = "arrowUpRight", size = "md", className, ...rest }: ButtonProps) {
  const v = variants[variant];
  return (
    <Magnetic className={className}>
      <a
        href={href}
        className={cn(
          "group relative isolate inline-flex items-center overflow-hidden rounded-full font-sans font-condensed font-extrabold uppercase tracking-[0.02em]",
          "transition-colors duration-500 ease-snap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink active:scale-[0.97]",
          size === "md" ? "min-h-14 gap-4 py-2 pl-7 pr-2 text-[1.0625rem]" : "min-h-12 gap-3 py-1.5 pl-5 pr-1.5 text-[0.9375rem]",
          v.root,
        )}
        {...rest}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 -z-10 translate-y-full rounded-t-[50%] transition-[translate,border-radius] duration-500 ease-snap group-hover:translate-y-0 group-hover:rounded-none",
            v.sweep,
          )}
        />
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-500 ease-snap group-hover:-translate-y-full">{children}</span>
          <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-snap group-hover:translate-y-0">
            {children}
          </span>
        </span>
        <span
          className={cn(
            "grid place-items-center rounded-full transition-[background-color,color,rotate] duration-500 ease-snap group-hover:rotate-45",
            size === "md" ? "size-10" : "size-9",
            v.badge,
          )}
        >
          <Icon name={icon} className="size-4" />
        </span>
      </a>
    </Magnetic>
  );
}
