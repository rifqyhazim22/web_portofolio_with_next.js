"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLanguage } from "@/app/actions/set-language";
import type { Language } from "@/lib/language";

interface LanguageToggleProps {
  language: Language;
  label: string;
  options: { id: string; en: string };
}

export default function LanguageToggle({ language, label, options }: LanguageToggleProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const switchTo = language === "id" ? "en" : "id";

  const handleClick = () => {
    startTransition(async () => {
      await setLanguage(switchTo);
      router.refresh();
    });
  };

  return (
    <button
      type="button"
      className="pill"
      onClick={handleClick}
      aria-label={`${label}: ${language === "id" ? options.id : options.en}`}
      disabled={pending}
      style={{ gap: "6px" }}
    >
      <span data-active={language === "id"}>{options.id}</span>
      <span style={{ opacity: 0.5 }}>|</span>
      <span data-active={language === "en"}>{options.en}</span>
    </button>
  );
}
