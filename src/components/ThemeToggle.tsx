"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rh-theme";
const THEMES = ["light", "dark"] as const;
type Theme = (typeof THEMES)[number];

function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && (THEMES as readonly string[]).includes(saved)) {
    return saved as Theme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = resolveInitialTheme();
    setTheme(initial);
    const root = document.documentElement;
    root.dataset.theme = initial;
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, ready]);

  const toggle = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const label = theme === "dark" ? "🌙 Night" : "☀️ Day";

  return (
    <button
      id="themeToggle"
      className="pill"
      type="button"
      aria-label="Theme toggle"
      onClick={toggle}
    >
      {ready ? label : "…"}
    </button>
  );
}
