"use client";

import { useEffect } from "react";

const POINTER_X = "--pointer-x";
const POINTER_Y = "--pointer-y";

export default function PointerGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) {
      root.style.removeProperty(POINTER_X);
      root.style.removeProperty(POINTER_Y);
      return;
    }

    const handlePointer = (event: PointerEvent) => {
      root.style.setProperty(POINTER_X, `${event.clientX}px`);
      root.style.setProperty(POINTER_Y, `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return null;
}
