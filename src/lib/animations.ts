import type { Variants } from "framer-motion";

/**
 * Variantes centrais de animação. A intenção de movimento (durações,
 * easing, deslocamento) é refinada na Etapa 3, mas a arquitetura —
 * variantes vivendo aqui, consumidas por qualquer componente — já
 * fica definida agora para manter consistência de "sentimento" no site inteiro.
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: [0.65, 0, 0.35, 1] } },
};

export const revealImage: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, ease: [0.65, 0, 0.35, 1] },
  },
};
