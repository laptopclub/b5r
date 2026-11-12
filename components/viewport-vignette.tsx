"use client";

import { useEffect, useState } from "react";
import { usePointerPosition } from "./pointer-position-provider";

const gradient = "radial-gradient(ellipse at center, rgb(16 15 15 / 0.99) 0%, rgb(16 15 15 / 0) 82%)";

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

export function ViewportVignette() {
  const position = usePointerPosition();
  const reducedMotion = useReducedMotion();
  const x = reducedMotion ? 0 : (position.x - 50) * 0.22;
  const y = reducedMotion ? 0 : (position.y - 50) * 0.22;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[7] overflow-hidden">
      <div className="absolute -left-[16vw] -top-[8vh] h-[54vh] w-[82vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x}px, ${-y}px, 0) rotate(-18deg)` }} />
      <div className="absolute -right-[14vw] -top-[12vh] h-[50vh] w-[78vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 0.8}px, ${-y * 0.8}px, 0) rotate(14deg)` }} />
      <div className="absolute -bottom-[10vh] -left-[10vw] h-[54vh] w-[76vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 0.9}px, ${-y * 0.9}px, 0) rotate(12deg)` }} />
      <div className="absolute -bottom-[8vh] -right-[16vw] h-[56vh] w-[84vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 1.1}px, ${-y * 1.1}px, 0) rotate(-16deg)` }} />
    </div>
  );
}
