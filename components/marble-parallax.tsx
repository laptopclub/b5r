"use client";

import { useEffect, useState } from "react";
import { usePointerPosition } from "./pointer-position-provider";

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

export function MarbleParallax() {
  const position = usePointerPosition();
  const reducedMotion = useReducedMotion();
  const x = reducedMotion ? 0 : (position.x - 50) * -0.18;
  const y = reducedMotion ? 0 : (position.y - 50) * -0.18;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -inset-8 bg-cover bg-center opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/black-marble.jpg')",
          transform: `translate3d(${x}px, ${y}px, 0)`
        }}
      />
    </div>
  );
}
