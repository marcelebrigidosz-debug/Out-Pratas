import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "A história e a curadoria por trás da Out.",
};

/**
 * Sobre — três blocos que alternam imagem/texto (esquerda-direita,
 * depois direita-esquerda) em vez de uma única coluna de imagem fixa.
 * Cada bloco tem fundo e tom de verde diferente, criando o mesmo ritmo
 * de cor da Home. Ainda um ensaio, não uma página institucional.
 */
export default function SobrePage() {
  return (
    <>
      <section className="bg-paper px-6 pb-30 pt-38 md:px-10">
        <p className="label mb-8 text-moss-700">Sobre</p>
        <h1 className="font-display max-w-3xl text-5xl italic leading-tight md:text-7xl">
          Uma curadoria, não uma coleção.
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-16 bg-sage-50 px-6 py-30 md:grid-cols-[3fr_2fr] md:gap-16 md:px-10">
        <div className="photo-sage aspect-[4/5] md:order-2" />
        <div className="max-w-sm md:order-1 md:self-center">
          <p className="text-sm leading-loose text-stone-700 md:text-base">
            A Out. nasceu de prestar atenção. Não em tendências — em objetos.
            Peças que carregam presença própria, que não precisam de uma
            campanha para justificar por que existem.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-16 bg-sand-50 px-6 py-30 md:grid-cols-[2fr_3fr] md:gap-16 md:px-10">
        <div className="max-w-sm md:self-center">
          <p className="text-sm leading-loose text-stone-700 md:text-base">
            Não desenhamos joias pensando em coleções sazonais. Escolhemos,
            uma a uma, o que tem forma orgânica, o que envelhece bem, o que
            ainda faz sentido usar daqui a cinco anos. É mais fácil garimpar
            do que produzir em série — e é assim que preferimos trabalhar.
          </p>
        </div>
        <div className="photo-sand aspect-[4/5]" />
      </section>

      <section className="atmosphere-moss relative overflow-hidden bg-moss-50 px-6 py-30 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-[1fr_1fr]">
          <div className="photo-moss aspect-[4/5] md:mt-16" />
          <div className="max-w-sm md:self-center">
            <p className="text-sm leading-loose text-stone-700 md:text-base">
              A natureza é a referência que sempre volta: uma raiz, uma gota,
              a textura irregular do musgo sobre a pedra. A prata 925 se
              comporta como pele — escurece, marca, ganha história. Isso não
              é defeito de acabamento. É a peça se tornando sua.
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-[70vh] items-center bg-paper px-6 py-30 text-center md:px-10">
        <p className="font-display mx-auto max-w-3xl text-2xl italic leading-relaxed text-stone-700 md:text-4xl">
          Não existe &ldquo;coleção nova toda semana&rdquo; na Out. Existe
          cuidado em adicionar pouco, e bem.
        </p>
      </section>
    </>
  );
}
