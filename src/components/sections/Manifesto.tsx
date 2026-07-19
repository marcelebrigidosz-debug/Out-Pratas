/**
 * Manifesto — o momento de pausa da marca: ocupa quase a tela inteira
 * (min-h-[90vh]), centralizado, sem produto, sem imagem, só a frase.
 * A leitura precisa ser lenta — por isso o texto é grande (3xl/5xl) e
 * o espaço ao redor é enorme. Isso só funciona porque é a ÚNICA seção
 * assim no site; repetir esse tratamento em outro lugar anularia o
 * efeito.
 */
export function Manifesto() {
  return (
    <section className="atmosphere-sage relative flex min-h-[90vh] items-center overflow-hidden bg-sage-50 px-6 text-center md:px-10">
      <div className="mx-auto">
        <p className="label mb-8 text-moss-700">Manifesto</p>
        <p className="font-sans font-medium mx-auto max-w-xl text-xl leading-relaxed tracking-tight text-ink md:text-3xl">
          Não trabalhamos com tendências passageiras. Selecionamos peças com
          personalidade, formas orgânicas e estética atemporal.
        </p>
      </div>
    </section>
  );
}
