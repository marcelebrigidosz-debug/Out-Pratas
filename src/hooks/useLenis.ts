"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll editorial (inércia suave). Biblioteca leve (lenis),
 * sem dependência de scroll-jacking — mantém acessibilidade e
 * compatibilidade com leitores de tela e navegação por teclado.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
