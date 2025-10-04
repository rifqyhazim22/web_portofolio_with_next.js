"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rh-palette";
const PALETTES = [
  { id: "midnight", label: "Midnight" },
  { id: "earthy", label: "Earthy" },
  { id: "aurora", label: "Aurora" }
] as const;

export type PaletteId = (typeof PALETTES)[number]["id"];

function resolveInitialPalette(): PaletteId {
  if (typeof window === "undefined") {
    return "midnight";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY) as PaletteId | null;
  if (stored && PALETTES.some((item) => item.id === stored)) {
    return stored;
  }
  return "midnight";
}

function nextPalette(current: PaletteId): PaletteId {
  const index = PALETTES.findIndex((item) => item.id === current);
  const nextIndex = (index + 1) % PALETTES.length;
  return PALETTES[nextIndex].id;
}

export default function PaletteToggle() {
  const [palette, setPalette] = useState<PaletteId>("midnight");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = resolveInitialPalette();
    setPalette(initial);
    document.documentElement.dataset.palette = initial;
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.palette = palette;
    window.localStorage.setItem(STORAGE_KEY, palette);
  }, [palette, ready]);

  const handleClick = () => {
    setPalette((current) => nextPalette(current));
  };

  const currentPalette = PALETTES.find((item) => item.id === palette) ?? PALETTES[0];
  const label = ready ? `🎨 ${currentPalette.label}` : "…";

  return (
    <button
      type="button"
      id="paletteToggle"
      className="pill"
      onClick={handleClick}
      aria-label="Toggle color palette"
    >
      {label}
    </button>
  );
}
