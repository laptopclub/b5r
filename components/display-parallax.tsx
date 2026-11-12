"use client";

import { type ReactNode, useEffect, useState } from "react";
import { usePointerPosition } from "./pointer-position-provider";

type DisplayParallaxProps = {
  children: ReactNode;
};

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}

export function DisplayParallax({ children }: DisplayParallaxProps) {
  const position = usePointerPosition();
  const reducedMotion = useReducedMotion();
  const x = reducedMotion ? 0 : (position.x - 50) * 0.12;
  const y = reducedMotion ? 0 : (position.y - 50) * 0.12;

  return <div className="will-change-transform" style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}>{children}</div>;
}
