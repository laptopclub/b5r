"use client";

import { type ReactNode, useEffect, useState } from "react";
import { usePointerPosition } from "./pointer-position-provider";

type ForestLayerProps = {
  children: ReactNode;
  className: string;
  depth: number;
};

type PineProps = {
  scale: number;
  x: number;
  y: number;
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

function ForestLayer({ children, className, depth }: ForestLayerProps) {
  const position = usePointerPosition();
  const reducedMotion = useReducedMotion();
  const x = reducedMotion ? 0 : (position.x - 50) * depth;
  const y = reducedMotion ? 0 : (position.y - 50) * depth;

  return (
    <div className={className} style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}>
      {children}
    </div>
  );
}

function Pine({ scale, x, y }: PineProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0-280C8-246 16-226 30-207L16-210C35-182 55-162 68-143L29-150C56-118 78-91 92-63L42-72C64-45 78-21 88 0H-88C-78-21-64-45-42-72L-92-63C-78-91-56-118-29-150L-68-143C-55-162-35-182-16-210L-30-207C-16-226-8-246 0-280Z" />
      <path d="M-7-88H7V0H-7Z" opacity="0.65" />
    </g>
  );
}

export function GhostForest() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden text-ink">
      <ForestLayer className="absolute -bottom-8 -left-[10%] w-[120%] opacity-[0.06] blur-[1px]" depth={0.08}>
        <svg className="h-auto w-full" fill="currentColor" viewBox="0 0 1440 480" xmlns="http://www.w3.org/2000/svg">
          <Pine scale={0.54} x={50} y={480} />
          <Pine scale={0.72} x={130} y={480} />
          <Pine scale={0.46} x={205} y={480} />
          <Pine scale={0.64} x={280} y={480} />
          <Pine scale={0.5} x={365} y={480} />
          <Pine scale={0.78} x={445} y={480} />
          <Pine scale={0.48} x={535} y={480} />
          <Pine scale={0.62} x={610} y={480} />
          <Pine scale={0.44} x={690} y={480} />
          <Pine scale={0.76} x={760} y={480} />
          <Pine scale={0.52} x={850} y={480} />
          <Pine scale={0.68} x={925} y={480} />
          <Pine scale={0.46} x={1015} y={480} />
          <Pine scale={0.74} x={1085} y={480} />
          <Pine scale={0.5} x={1175} y={480} />
          <Pine scale={0.66} x={1250} y={480} />
          <Pine scale={0.48} x={1335} y={480} />
          <Pine scale={0.7} x={1405} y={480} />
        </svg>
      </ForestLayer>

      <ForestLayer className="absolute -bottom-12 -left-[12%] w-[124%] opacity-[0.08]" depth={0.16}>
        <svg className="h-auto w-full" fill="currentColor" viewBox="0 0 1440 480" xmlns="http://www.w3.org/2000/svg">
          <Pine scale={0.88} x={90} y={480} />
          <Pine scale={1.12} x={245} y={480} />
          <Pine scale={0.82} x={410} y={480} />
          <Pine scale={1.26} x={555} y={480} />
          <Pine scale={0.9} x={735} y={480} />
          <Pine scale={1.18} x={885} y={480} />
          <Pine scale={0.84} x={1060} y={480} />
          <Pine scale={1.28} x={1210} y={480} />
          <Pine scale={0.94} x={1390} y={480} />
        </svg>
      </ForestLayer>

      <ForestLayer className="absolute -bottom-20 -left-[15%] w-[130%] opacity-[0.1]" depth={0.28}>
        <svg className="h-auto w-full" fill="currentColor" viewBox="0 0 1440 480" xmlns="http://www.w3.org/2000/svg">
          <Pine scale={1.5} x={20} y={480} />
          <Pine scale={1.85} x={285} y={480} />
          <Pine scale={1.42} x={570} y={480} />
          <Pine scale={1.95} x={835} y={480} />
          <Pine scale={1.48} x={1140} y={480} />
          <Pine scale={1.82} x={1390} y={480} />
        </svg>
      </ForestLayer>
    </div>
  );
}
