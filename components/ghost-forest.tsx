"use client";

import { type ReactNode, useEffect, useState } from "react";
import { usePointerPosition } from "./pointer-position-provider";

type ForestLayerProps = {
  children: ReactNode;
  className: string;
  depth: number;
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

export function GhostForest() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden text-ink">
      <ForestLayer className="absolute -bottom-8 -left-[10%] w-[120%] opacity-[0.07] blur-[1px]" depth={0.08}>
        <svg className="h-auto w-full" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="5" viewBox="0 0 1440 480" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 480V150M100 270L20 205M100 310L190 220M100 220L55 145M100 245L150 165M360 480V90M360 260L255 175M360 285L470 175M360 180L310 95M360 215L420 105M760 480V180M760 285L675 220M760 320L850 235M760 235L715 165M760 255L815 180M1160 480V115M1160 250L1065 170M1160 290L1265 180M1160 170L1110 95M1160 215L1225 130" />
        </svg>
      </ForestLayer>

      <ForestLayer className="absolute -bottom-12 -left-[12%] w-[124%] opacity-[0.09]" depth={0.16}>
        <svg className="h-auto w-full" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="7" viewBox="0 0 1440 480" xmlns="http://www.w3.org/2000/svg">
          <path d="M215 480V140M215 305L110 230M215 335L330 230M215 240L150 150M215 270L290 165M555 480V65M555 245L425 160M555 290L700 165M555 155L490 70M555 205L645 105M980 480V145M980 295L850 205M980 335L1110 225M980 210L920 135M980 245L1045 155M1330 480V105M1330 275L1210 185M1330 320L1425 230M1330 175L1285 105M1330 215L1390 145" />
        </svg>
      </ForestLayer>

      <ForestLayer className="absolute -bottom-20 -left-[15%] w-[130%] opacity-[0.12]" depth={0.28}>
        <svg className="h-auto w-full" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="10" viewBox="0 0 1440 480" xmlns="http://www.w3.org/2000/svg">
          <path d="M85 480V200M85 340L-20 265M85 370L205 275M85 265L30 190M85 305L155 225M455 480V115M455 310L325 225M455 345L605 235M455 195L390 110M455 250L545 150M850 480V160M850 320L705 225M850 355L1005 245M850 235L790 155M850 280L945 190M1240 480V120M1240 315L1110 220M1240 350L1400 250M1240 200L1175 110M1240 245L1330 145" />
        </svg>
      </ForestLayer>
    </div>
  );
}
