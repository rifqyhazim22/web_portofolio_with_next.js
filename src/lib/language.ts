import { cookies } from "next/headers";

export const LANGUAGE_COOKIE = "rh-lang";
export type Language = "id" | "en";

export async function getCurrentLanguage(): Promise<Language> {
  const store = await cookies();
  const stored = store.get(LANGUAGE_COOKIE)?.value;
  return stored === "en" ? "en" : "id";
}

export function validateLanguage(value: string | undefined): Language {
  return value === "en" ? "en" : "id";
}
