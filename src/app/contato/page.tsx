import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Out.",
};

/**
 * Contato — canais diretos (e-mail, Instagram) têm mais peso visual
 * que o formulário, porque é o caminho que a maioria vai preferir.
 * Formulário minimalista sem campos obrigatórios em excesso, sem
 * copy de urgência ("responda em 24h!!").
 */
export default function ContatoPage() {
  return (
    <>
    <section className="grid grid-cols-1 gap-16 bg-sand-50 px-6 pb-24 pt-36 md:grid-cols-2 md:gap-24 md:px-10">
      <div className="max-w-editorial">
        <p className="label mb-6 text-moss-700">Contato</p>
        <h1 className="font-display mb-6 text-3xl md:text-4xl">Fale com a Out.</h1>
        <p className="mb-10 text-sm leading-relaxed text-stone-700 md:text-base">
          Dúvidas sobre uma peça, cuidados com a prata, parcerias ou apenas
          uma conversa — estamos por aqui.
        </p>

        <dl className="space-y-4">
          <div>
            <dt className="label text-stone-500">E-mail</dt>
            <dd>
              <a href="mailto:out.pratass@gmail.com" className="text-sm transition-colors duration-300 hover:text-moss-700 md:text-base">
                out.pratass@gmail.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="label text-stone-500">Instagram</dt>
            <dd>
              <a
                href="https://www.instagram.com/out.pratas/"
                target="_blank"
                rel="noreferrer"
                className="text-sm transition-colors duration-300 hover:text-moss-700 md:text-base"
              >
                @out.pratas
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <form className="flex max-w-editorial flex-col gap-6">
        <div className="flex flex-col gap-2 border-b border-stone-300 pb-2 transition-colors duration-300 focus-within:border-moss-500">
          <label htmlFor="nome" className="label text-stone-500">
            Nome
          </label>
          <input id="nome" name="nome" type="text" className="bg-transparent text-sm outline-none" />
        </div>
        <div className="flex flex-col gap-2 border-b border-stone-300 pb-2 transition-colors duration-300 focus-within:border-moss-500">
          <label htmlFor="email" className="label text-stone-500">
            E-mail
          </label>
          <input id="email" name="email" type="email" className="bg-transparent text-sm outline-none" />
        </div>
        <div className="flex flex-col gap-2 border-b border-stone-300 pb-2 transition-colors duration-300 focus-within:border-moss-500">
          <label htmlFor="mensagem" className="label text-stone-500">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            className="resize-none bg-transparent text-sm outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 self-start border border-ink px-8 py-3 text-sm uppercase tracking-widest transition-colors duration-500 hover:border-moss-700 hover:bg-moss-700 hover:text-paper"
        >
          Enviar
        </button>
      </form>
    </section>

    <section className="atmosphere-sage relative overflow-hidden bg-sage-50 px-6 py-24 text-center md:px-10">
      <p className="font-display mx-auto max-w-editorial text-xl italic leading-relaxed text-stone-700 md:text-2xl">
        Cada peça é uma conversa antes de ser uma venda.
      </p>
      <p className="label mt-6 text-moss-700">Out. — pratas com intenção</p>
    </section>
    </>
  );
}
