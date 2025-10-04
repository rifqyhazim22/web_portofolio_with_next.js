"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rh-font-scale";
const SCALES = [
  { id: "base", label: "Aa" },
  { id: "comfortable", label: "Aa+" },
  { id: "focus", label: "Aa++" }
] as const;

type ScaleId = (typeof SCALES)[number]["id"];

function resolveInitialScale(): ScaleId {
  if (typeof window === "undefined") {
    return "base";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY) as ScaleId | null;
  if (stored && SCALES.some((item) => item.id === stored)) {
    return stored;
  }
  return "base";
}

function nextScale(current: ScaleId): ScaleId {
  const index = SCALES.findIndex((item) => item.id === current);
  const nextIndex = (index + 1) % SCALES.length;
  return SCALES[nextIndex].id;
}

export default function TextScaleToggle() {
  const [scale, setScale] = useState<ScaleId>("base");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = resolveInitialScale();
    setScale(initial);
    document.documentElement.dataset.fontScale = initial;
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.fontScale = scale;
    window.localStorage.setItem(STORAGE_KEY, scale);
  }, [scale, ready]);

  const handleClick = () => {
    setScale((current) => nextScale(current));
  };

  const current = SCALES.find((item) => item.id === scale)?.label ?? "Aa";

  return (
    <button
      type="button"
      id="textScaleToggle"
      className="pill"
      onClick={handleClick}
      aria-label="Toggle base font size"
    >
      {ready ? current : "Aa"}
    </button>
  );
}
