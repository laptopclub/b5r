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

export function ArtifactParallax() {
  const position = usePointerPosition();
  const reducedMotion = useReducedMotion();
  const x = reducedMotion ? 0 : (position.x - 50) * -0.3;
  const y = reducedMotion ? 0 : (position.y - 50) * -0.3;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[6] overflow-hidden">
      <div
        className="absolute -inset-12 bg-cover bg-center opacity-[0.18] mix-blend-screen"
        style={{
          backgroundImage: "url('/images/artifact-texture.jpg')",
          filter: "grayscale(1) contrast(280%) brightness(1.35)",
          transform: `translate3d(${x}px, ${y}px, 0)`
        }}
      />
    </div>
  );
}
