"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

type PointerPosition = {
  x: number;
  y: number;
};

const initialPosition: PointerPosition = { x: 50, y: 50 };
const PointerPositionContext = createContext<PointerPosition>(initialPosition);

type PointerPositionProviderProps = {
  children: ReactNode;
};

export function PointerPositionProvider({ children }: PointerPositionProviderProps) {
  const [position, setPosition] = useState<PointerPosition>(initialPosition);

  useEffect(() => {
    let frameId: number | undefined;

    const updatePosition = (event: PointerEvent) => {
      if (frameId !== undefined) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        setPosition({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100
        });
        frameId = undefined;
      });
    };

    window.addEventListener("pointermove", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updatePosition);

      if (frameId !== undefined) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return <PointerPositionContext.Provider value={position}>{children}</PointerPositionContext.Provider>;
}

export function usePointerPosition() {
  return useContext(PointerPositionContext);
}
