/**
 * Sobre a prata 925 — bloco educativo curto, não institucional. Fundo
 * em tom de pedra e uma afirmação de marca em destaque ("A prata muda.
 * A peça permanece.") — direta, sem aspas decorativas, funcionando
 * como declaração e não como citação.
 */
export function SobrePrata925() {
  return (
    <section className="relative overflow-hidden bg-stone-50 px-6 py-30 text-center md:px-10">
      <p className="label mb-6 text-moss-700">Prata 925</p>
      <blockquote className="font-display mx-auto max-w-editorial text-2xl italic leading-relaxed md:text-3xl">
        A prata muda. A peça permanece.
      </blockquote>
      <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-stone-700">
        Toda peça Out. é feita em prata 925, uma matéria viva que se
        transforma com o uso. Com o tempo, ela pode escurecer, revelar novas
        texturas e ganhar uma pátina única. Não é perda de qualidade. É a
        prata seguindo seu curso.
      </p>
    </section>
  );
}
