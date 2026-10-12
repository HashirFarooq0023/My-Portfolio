import {
  siClaude,
  siDocker,
  siFastapi,
  siGithub,
  siGooglegemini,
  siHostinger,
  siHtml5,
  siJavascript,
  siLangchain,
  siLanggraph,
  siLmstudio,
  siMeta,
  siModelcontextprotocol,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPydantic,
  siPython,
  siReact,
  siRender,
  siSelenium,
  siSqlalchemy,
  siTailwindcss,
  siTypescript,
  siUv,
  siVercel,
  siVite,
  siWordpress,
} from "simple-icons";
import type { IconName } from "@/components/ui/Icon";

export type TechIcon = { kind: "brand"; path: string } | { kind: "glyph"; name: IconName };

const brand = (icon: { path: string }): TechIcon => ({ kind: "brand", path: icon.path });
const glyph = (name: IconName): TechIcon => ({ kind: "glyph", name });

// First keyword contained in the lowercased tech name wins, so order matters
// (e.g. "react" before "javascript", "html5" before "css").
const rules: readonly [string, TechIcon][] = [
  ["next.js", brand(siNextdotjs)],
  ["react framework", glyph("loop")],
  ["react", brand(siReact)],
  ["typescript", brand(siTypescript)],
  ["javascript", brand(siJavascript)],
  ["python", brand(siPython)],
  ["tailwind", brand(siTailwindcss)],
  ["fastapi", brand(siFastapi)],
  ["node.js", brand(siNodedotjs)],
  ["postgresql", brand(siPostgresql)],
  ["sqlalchemy", brand(siSqlalchemy)],
  ["pydantic", brand(siPydantic)],
  ["langgraph", brand(siLanggraph)],
  ["langchain", brand(siLangchain)],
  ["n8n", brand(siN8n)],
  ["mcp", brand(siModelcontextprotocol)],
  ["claude", brand(siClaude)],
  ["llama", brand(siMeta)],
  ["gemini", brand(siGooglegemini)],
  ["lm studio", brand(siLmstudio)],
  ["github", brand(siGithub)],
  ["docker", brand(siDocker)],
  ["vercel", brand(siVercel)],
  ["render", brand(siRender)],
  ["hostinger", brand(siHostinger)],
  ["uv", brand(siUv)],
  ["selenium", brand(siSelenium)],
  ["vite", brand(siVite)],
  ["php", brand(siPhp)],
  ["wordpress", brand(siWordpress)],
  ["html5", brand(siHtml5)],
  ["pinecone", glyph("database")],
  ["chromadb", glyph("database")],
  ["alembic", glyph("database")],
  ["groq", glyph("bolt")],
  ["serpapi", glyph("search")],
  ["ocr", glyph("scan")],
  ["multi-agent", glyph("connect")],
  ["hooks", glyph("code")],
  ["api", glyph("code")],
  ["scroll", glyph("layers")],
];

export function techIcon(name: string): TechIcon {
  const key = name.toLowerCase();
  return rules.find(([k]) => (k === "uv" ? key === "uv" : key.includes(k)))?.[1] ?? glyph("layers");
}
