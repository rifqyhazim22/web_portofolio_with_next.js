import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Language } from "@/lib/language";
import type { AboutContent } from "./types";

const cache = new Map<Language, AboutContent>();

export function loadAboutContent(language: Language): AboutContent {
  if (cache.has(language)) {
    return cache.get(language)!;
  }

  const filePath = join(process.cwd(), "content", "about", `${language}.json`);
  const raw = readFileSync(filePath, "utf8");
  const parsed = JSON.parse(raw) as AboutContent;

  cache.set(language, parsed);
  return parsed;
}
