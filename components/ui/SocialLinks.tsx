import { aboutContent } from "@/lib/content/about";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";
import { Magnetic } from "./Magnetic";

interface SocialLinksProps {
  className?: string;
  inverted?: boolean;
}

const items: readonly { name: IconName & keyof typeof site.social; href: string }[] = [
  { name: "github", href: aboutContent.contact.github },
  { name: "linkedin", href: aboutContent.contact.linkedin },
  { name: "instagram", href: aboutContent.contact.instagram },
];

export function SocialLinks({ className, inverted = false }: SocialLinksProps) {
  return (
    <ul className={cn("flex gap-3", className)}>
      {items.map(({ name, href }) => (
        <li key={name}>
          <Magnetic strength={0.4}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={site.social[name]}
              className={cn(
                "inline-flex size-12 items-center justify-center rounded-full border-[1.5px] transition-[background-color,color,border-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4",
                inverted
                  ? "border-chalk/30 text-chalk hover:border-volt hover:bg-volt hover:text-ink focus-visible:outline-chalk"
                  : "border-ink text-ink hover:bg-ink hover:text-chalk focus-visible:outline-ink",
              )}
            >
              <Icon name={name} className="size-4.5" />
            </a>
          </Magnetic>
        </li>
      ))}
    </ul>
  );
}
