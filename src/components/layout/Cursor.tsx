"use client";

/**
 * Cursor personalizado — um ponto discreto que acompanha o ponteiro em
 * velocidade 1:1 (sem spring na posição — spring aqui deixava o cursor
 * visivelmente atrasado, diferente da sensação de mouse nativo) e cresce
 * suavemente sobre links/botões. Só ativa em ponteiro fino (mouse/trackpad);
 * em touch, não faz nada — o cursor do sistema nunca é substituído em mobile.
 */
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button")));
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: x, top: y }}
      animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.4 : 0.8 }}
      transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
      className="pointer-events-none fixed z-[70] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
    />
  );
}
