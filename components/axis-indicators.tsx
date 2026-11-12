"use client";

import { usePointerPosition } from "./pointer-position-provider";

const ticks = Array.from({ length: 11 }, (_, index) => index * 10);

export function AxisIndicators() {
  const position = usePointerPosition();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50">
      <div className="absolute bottom-4 left-1/2 h-6 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2">
        <div className="absolute inset-x-0 top-1/2 h-px bg-ink-muted" />
        {ticks.map((offset) => (
          <div key={offset} className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-ink-muted" style={{ left: `${offset}%` }} />
        ))}
        <div className="absolute top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-full border-x-4 border-x-transparent border-t-[6px] border-t-ink" style={{ left: `${position.x}%` }} />
      </div>

      <div className="absolute right-4 top-1/2 h-[min(18rem,calc(100vh-8rem))] w-6 -translate-y-1/2">
        <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-ink-muted" />
        {ticks.map((offset) => (
          <div key={offset} className="absolute left-1/2 h-px w-2 -translate-x-1/2 bg-ink-muted" style={{ top: `${offset}%` }} />
        ))}
        <div className="absolute left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-r-[6px] border-r-ink" style={{ top: `${position.y}%` }} />
      </div>
    </div>
  );
}
