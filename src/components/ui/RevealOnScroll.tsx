"use client";

/**
 * Wrapper genérico para revelar qualquer conteúdo (imagem, texto, grid)
 * ao entrar no viewport — fade + translate sutil. Usado em toda a Home
 * e páginas de conteúdo. Timing fino ajustado na Etapa 3.
 */
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { PropsWithChildren } from "react";

export function RevealOnScroll({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
