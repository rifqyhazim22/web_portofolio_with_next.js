"use client";

import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BaseLink from "./BaseLink";
import ThemeToggle from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sitebar">
      <div className="bar wrap">
        <Link href="/" className="brand pill">
          Rifqy Hazim HR
        </Link>
        <nav className="pills">
          {navLinks.map((link) => (
            <BaseLink
              key={link.href}
              href={link.href}
              className="pill"
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </BaseLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
