import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Language } from "@/lib/language";
import type { HomeContent } from "./types";

const cache = new Map<Language, HomeContent>();

export function loadHomeContent(language: Language): HomeContent {
  if (cache.has(language)) {
    return cache.get(language)!;
  }

  const filePath = join(process.cwd(), "content", "home", `${language}.json`);
  const raw = readFileSync(filePath, "utf8");
  const parsed = JSON.parse(raw) as HomeContent;

  cache.set(language, parsed);
  return parsed;
}
