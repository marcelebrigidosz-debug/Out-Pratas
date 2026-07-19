"use client";

/**
 * Menu fullscreen — substitui dropdown/hamburguer convencional.
 * Decisão de UX: em uma marca "galeria", o menu é um momento em si,
 * não um utilitário escondido, por isso ocupa a tela inteira e revela
 * os links em cascata (stagger), não todos de uma vez. Fecha com Esc
 * e trava o scroll do fundo enquanto aberto.
 */

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { NavLink } from "@/lib/types";

interface FullscreenMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function FullscreenMenu({ open, onClose, links }: FullscreenMenuProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-paper"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="label absolute right-6 top-5 transition-colors duration-300 hover:text-moss-700 md:right-10"
          >
            Fechar
          </button>

          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.07,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="font-display text-3xl transition-colors duration-300 hover:text-moss-700 md:text-4xl"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
