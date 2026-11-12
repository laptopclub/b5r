"use client";

import { useEffect, useState } from "react";
import { usePointerPosition } from "./pointer-position-provider";

const gradient = "radial-gradient(ellipse at center, rgb(16 15 15 / 0.88) 0%, rgb(16 15 15 / 0) 72%)";

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
      <div className="absolute -left-[24vw] -top-[20vh] h-[44vh] w-[76vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x}px, ${-y}px, 0) rotate(-18deg)` }} />
      <div className="absolute -right-[22vw] -top-[26vh] h-[38vh] w-[72vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 0.8}px, ${-y * 0.8}px, 0) rotate(14deg)` }} />
      <div className="absolute -bottom-[22vh] -left-[18vw] h-[42vh] w-[70vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 0.9}px, ${-y * 0.9}px, 0) rotate(12deg)` }} />
      <div className="absolute -bottom-[18vh] -right-[26vw] h-[46vh] w-[78vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 1.1}px, ${-y * 1.1}px, 0) rotate(-16deg)` }} />
    </div>
  );
}
