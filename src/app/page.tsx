/**
 * Home — Hero > Coleção em destaque > Curadoria da semana > Manifesto >
 * Sobre a prata 925 > Grid editorial > Processo de curadoria >
 * Newsletter. As três seções novas (Curadoria da semana, Sobre a prata
 * 925, Processo de curadoria) existem principalmente para dar ritmo de
 * cor — paper, areia, sálvia, pedra e musgo se alternam, nunca dois
 * fundos brancos seguidos. O Hero aparece de imediato; as seções
 * seguintes só se revelam ao entrar no viewport (RevealOnScroll).
 */
import { Hero } from "@/components/sections/Hero";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { CuradoriaDaSemana } from "@/components/sections/CuradoriaDaSemana";
import { Manifesto } from "@/components/sections/Manifesto";
import { SobrePrata925 } from "@/components/sections/SobrePrata925";
import { EditorialGrid } from "@/components/sections/EditorialGrid";
import { ProcessoCuradoria } from "@/components/sections/ProcessoCuradoria";
import { Newsletter } from "@/components/ui/Newsletter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RevealOnScroll>
        <FeaturedCollection />
      </RevealOnScroll>
      <RevealOnScroll>
        <CuradoriaDaSemana />
      </RevealOnScroll>
      <RevealOnScroll>
        <Manifesto />
      </RevealOnScroll>
      <RevealOnScroll>
        <SobrePrata925 />
      </RevealOnScroll>
      <RevealOnScroll>
        <EditorialGrid />
      </RevealOnScroll>
      <RevealOnScroll>
        <ProcessoCuradoria />
      </RevealOnScroll>
      <RevealOnScroll>
        <Newsletter />
      </RevealOnScroll>
    </>
  );
}
