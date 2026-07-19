"use client";

/**
 * Composição editorial — não é mais uma "grid": duas fileiras soltas
 * (flex, não grid-cols fixo) com larguras e proporções diferentes por
 * bloco, e cada bloco tem seu próprio deslocamento vertical (mt-*), o
 * que quebra o alinhamento em vez de reforçá-lo. Pensado como uma
 * dupla página de revista — mistura de escalas (bloco grande e alto ao
 * lado de um quadrado pequeno), nunca três quadrados iguais em fileira.
 * Um dos blocos tem parallax sutil para dar profundidade. Fotografia
 * real entra assim que houver material próprio; por ora, os tons
 * "photo-*" (globals.css) fazem esse papel.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function EditorialGrid() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section ref={ref} className="overflow-hidden">
      <div className="flex flex-col gap-1 md:flex-row md:items-start">
        <div className="photo-moss aspect-[4/5] w-full overflow-hidden md:aspect-auto md:basis-[44%]">
          <motion.div style={{ y }} className="photo-moss h-[116%] w-full" />
        </div>
        <div className="photo-sand aspect-square w-full md:mt-24 md:basis-[31%]" />
        <div className="photo-sage aspect-[3/4] w-full md:mt-10 md:basis-[25%]" />
      </div>
      <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-start">
        <div className="photo-stone aspect-[16/9] w-full md:-mt-6 md:basis-[58%]" />
        <div className="photo-sage aspect-square w-full md:mt-8 md:basis-[42%]" />
      </div>
    </section>
  );
}
