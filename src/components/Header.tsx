"use client";

import {
  headerNav,
  type HeaderNavChild,
  type HeaderNavItem,
  type NavLabelKey,
} from "@/data/navLinks";
import type { Language } from "@/lib/language";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent } from "react";
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
  navLabels: Record<NavLabelKey, string>;
  languageToggle: {
    label: string;
    options: { id: string; en: string };
  };
}

const MOBILE_QUERY = "(max-width: 720px)";

export default function Header({ language, brand, navLabels, languageToggle }: HeaderProps) {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);
  const submenuTimer = useRef<number | undefined>(undefined);
  const [controlsWidth, setControlsWidth] = useState(0);

  const servicesItem = headerNav.find((item) => item.type === "menu");
  const servicesChildren: HeaderNavChild[] = servicesItem?.type === "menu"
    ? Array.from(servicesItem.children)
    : [];
  const servicesActive = servicesChildren.some((child) => isActive(pathname, child.href));

  // Sync submenu state with current route when menu opens
  useEffect(() => {
    if (!menuOpen) {
      setSubmenuOpen(false);
      return;
    }
    if (servicesActive) {
      setSubmenuOpen(true);
    }
  }, [menuOpen, servicesActive]);

  // Track control cluster width to size the overlay
  useEffect(() => {
    const updateWidth = () => {
      if (!controlsRef.current) return;
      setControlsWidth(controlsRef.current.offsetWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Close menu on pointer down outside the cluster
  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!overlayRef.current?.contains(target) && !controlsRef.current?.contains(target)) {
        setMenuOpen(false);
        setSubmenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSubmenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll for mobile overlays
  useEffect(() => {
    const body = document.body;
    const media = window.matchMedia(MOBILE_QUERY);

    const update = () => {
      if (menuOpen && media.matches) {
        body.classList.add("scroll-locked");
      } else {
        body.classList.remove("scroll-locked");
      }
    };

    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
    } else if (typeof media.addListener === "function") {
      media.addListener(update);
    }

    return () => {
      body.classList.remove("scroll-locked");
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", update);
      } else if (typeof media.removeListener === "function") {
        media.removeListener(update);
      }
    };
  }, [menuOpen]);

  // Clear submenu hover timer on unmount
  useEffect(() => () => {
    if (submenuTimer.current) {
      window.clearTimeout(submenuTimer.current);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  const handleNavigate = () => {
    closeMenu();
  };

  const openSubmenu = () => {
    if (submenuTimer.current) {
      window.clearTimeout(submenuTimer.current);
    }
    setSubmenuOpen(true);
  };

  const scheduleCloseSubmenu = () => {
    if (submenuTimer.current) {
      window.clearTimeout(submenuTimer.current);
    }
    submenuTimer.current = window.setTimeout(() => {
      setSubmenuOpen(false);
    }, 120);
  };

  const toggleSubmenu = () => {
    if (submenuTimer.current) {
      window.clearTimeout(submenuTimer.current);
    }
    setSubmenuOpen((open) => !open);
  };

  const handleSubmenuBlur = (event: FocusEvent<HTMLElement>) => {
    if (!servicesRef.current) return;

    const related = event.relatedTarget as Node | null;
    if (related && servicesRef.current.contains(related)) {
      return;
    }

    window.setTimeout(() => {
      if (!servicesRef.current) return;
      const active = document.activeElement;
      if (!active || !servicesRef.current.contains(active)) {
        setSubmenuOpen(false);
      }
    }, 0);
  };

  const renderNavItem = (item: HeaderNavItem) => {
    if (item.type === "link") {
      const active = isActive(pathname, item.href);
      return (
        <li key={item.key} className="menu-item">
          <BaseLink
            href={item.href}
            className="menu-link"
            data-active={active}
            aria-current={active ? "page" : undefined}
            onClick={handleNavigate}
          >
            {navLabels[item.key]}
          </BaseLink>
        </li>
      );
    }

    const expanded = submenuOpen || servicesActive;

    const submenuId = `${item.key}-submenu`;

    return (
      <li
        key={item.key}
        className="menu-item has-children"
        data-active={expanded}
        ref={servicesRef}
        onMouseEnter={openSubmenu}
        onMouseLeave={scheduleCloseSubmenu}
      >
        <button
          type="button"
          className="menu-link menu-toggle"
          aria-expanded={expanded}
          aria-haspopup="true"
          aria-controls={submenuId}
          onClick={toggleSubmenu}
          onFocus={openSubmenu}
          onBlur={handleSubmenuBlur}
        >
          {navLabels[item.key]}
        </button>
        <div
          id={submenuId}
          className="submenu"
          data-open={expanded}
          aria-hidden={!expanded}
          onFocusCapture={openSubmenu}
          onBlur={handleSubmenuBlur}
        >
          {item.children.map((child) => {
            const childActive = isActive(pathname, child.href);
            return (
              <BaseLink
                key={child.href}
                href={child.href}
                className="submenu-link"
                data-active={childActive}
                aria-current={childActive ? "page" : undefined}
                onClick={handleNavigate}
              >
                {navLabels[child.key]}
              </BaseLink>
            );
          })}
        </div>
      </li>
    );
  };

  return (
    <header className="sitebar">
      <div className="bar wrap">
        <Link href="/" className="brand pill">
          {brand}
        </Link>
        <div className="cluster" ref={controlsRef}>
          <div className="cluster-controls">
            <LanguageToggle language={language} label={languageToggle.label} options={languageToggle.options} />
            <ThemeToggle />
            <button
              type="button"
              className="pill menu-button"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={toggleMenu}
            >
              MENU
            </button>
          </div>
          {menuOpen && (
            <div
              id="site-menu"
              ref={overlayRef}
              className="menu-overlay card"
              style={controlsWidth ? { width: controlsWidth } : undefined}
            >
              <nav aria-label="Primary navigation">
                <ul className="menu-list">
                  {headerNav.map((item) => renderNavItem(item))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
