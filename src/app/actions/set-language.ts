"use server";

import { cookies } from "next/headers";
import { LANGUAGE_COOKIE, Language, validateLanguage } from "@/lib/language";

export async function setLanguage(lang: Language) {
  const value = validateLanguage(lang);
  const store = await cookies();
  store.set(LANGUAGE_COOKIE, value, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
