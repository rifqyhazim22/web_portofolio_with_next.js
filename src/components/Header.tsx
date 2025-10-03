"use client";

import { navLinks } from "@/data/navLinks";
import type { NavKey } from "@/data/navLinks";
import type { Language } from "@/lib/language";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BaseLink from "./BaseLink";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface HeaderProps {
  language: Language;
  brand: string;
  navLabels: Record<NavKey, string>;
  languageToggle: {
    label: string;
    options: { id: string; en: string };
  };
}

export default function Header({ language, brand, navLabels, languageToggle }: HeaderProps) {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sitebar">
      <div className="bar wrap">
        <Link href="/" className="brand pill">
          {brand}
        </Link>
        <nav className="pills">
          {navLinks.map((link) => (
            <BaseLink
              key={link.href}
              href={link.href}
              className="pill"
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {navLabels[link.key]}
            </BaseLink>
          ))}
          <LanguageToggle language={language} label={languageToggle.label} options={languageToggle.options} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
