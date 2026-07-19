"use client";

/**
 * Loader de entrada — cortina curta que evita "pop" de conteúdo no
 * primeiro load. A marca ("Out.") aparece e some com fade, nunca um
 * spinner — reforça calma em vez de "carregando".
 */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-paper"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-lg"
          >
            Out.
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
