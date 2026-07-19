"use client";

import { useEffect, useState } from "react";

/**
 * Detecta direção do scroll para a Navbar reagir com sutileza
 * (recolher ao descer, reaparecer ao subir) — nunca some abruptamente.
 * Refinamento de comportamento (thresholds, easing) na Etapa 3.
 */
export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 16);
      setDirection(currentY > lastY ? "down" : "up");
      lastY = currentY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, scrolled };
}
