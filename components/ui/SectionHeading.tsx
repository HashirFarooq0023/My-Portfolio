import type { Headline } from "@/lib/content/types";
import { RevealLine } from "./RevealLine";

interface SectionHeadingProps {
  headline: Headline;
}

export function SectionHeading({ headline }: SectionHeadingProps) {
  return (
    <h2 className="mb-16">
      <RevealLine className="text-h2-serif">{headline.serif}</RevealLine>
      <RevealLine className="text-h2-sans" index={1}>{headline.sans}</RevealLine>
    </h2>
  );
}
