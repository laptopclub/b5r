"use client";

import { useEffect, useState } from "react";
import { usePointerPosition } from "./pointer-position-provider";

const gradient = "radial-gradient(ellipse at center, rgb(16 15 15 / 0.94) 0%, rgb(16 15 15 / 0) 76%)";

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
      <div className="absolute -left-[20vw] -top-[14vh] h-[48vh] w-[78vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x}px, ${-y}px, 0) rotate(-18deg)` }} />
      <div className="absolute -right-[18vw] -top-[18vh] h-[44vh] w-[74vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 0.8}px, ${-y * 0.8}px, 0) rotate(14deg)` }} />
      <div className="absolute -bottom-[16vh] -left-[14vw] h-[48vh] w-[72vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 0.9}px, ${-y * 0.9}px, 0) rotate(12deg)` }} />
      <div className="absolute -bottom-[14vh] -right-[20vw] h-[50vh] w-[80vw] blur-3xl" style={{ backgroundImage: gradient, transform: `translate3d(${-x * 1.1}px, ${-y * 1.1}px, 0) rotate(-16deg)` }} />
    </div>
  );
}
