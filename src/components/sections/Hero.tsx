"use client";

/**
 * Hero editorial — a fotografia é a tela inteira (não uma faixa de
 * fundo atrás de texto); o texto fica sobre ela, integrado por um
 * scrim neutro (ink a baixa opacidade, nunca colorido) que garante
 * legibilidade sem parecer uma caixa de texto sobreposta. Headline
 * enorme (6xl/7xl) porque numa capa de editorial o texto TEM presença
 * — não é uma legenda discreta.
 *
 * A entrada é encenada, não instantânea: fundo primeiro, depois
 * headline, subtexto e CTA em cascata. O fundo se desloca com o
 * scroll (parallax leve). Placeholder "fotográfico" (gradiente +
 * vinheta, ver .photo-moss em globals.css) até existir fotografia
 * própria — troca por next/image sem mexer no restante do layout.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section ref={ref} className="relative flex h-[96vh] min-h-[640px] items-end overflow-hidden px-6 pb-14 md:px-10 md:pb-20">
      <motion.div style={{ y }} className="photo-moss absolute inset-0 -z-10" />

      {/* Scrim neutro — só para legibilidade do texto, nunca um "card" visível */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-ink/25 to-transparent" />

      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative max-w-2xl">
        <motion.h1
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl font-normal text-paper md:text-7xl"
        >
          Pratas com intenção.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-sm text-sm text-paper/80 md:text-base"
        >
          Curadoria de acessórios em prata para quem enxerga a joia como
          extensão da própria identidade.
        </motion.p>
        <motion.a
          variants={fadeUp}
          transition={{ delay: 0.7 }}
          href="/colecao"
          className="label mt-10 inline-block border-b border-paper pb-1 text-paper transition-colors duration-500 hover:border-paper/50 hover:text-paper/70"
        >
          Explorar coleção
        </motion.a>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="label absolute bottom-8 right-6 hidden text-paper/70 md:block md:right-10"
      >
        Role para explorar
      </motion.span>
    </section>
  );
}
