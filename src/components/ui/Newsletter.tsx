/**
 * Captura de e-mail discreta — texto convidativo, sem pop-up, sem
 * urgência artificial ("últimas vagas!"). No desktop, linha única
 * (texto à esquerda, campo à direita) alinhada às margens da página —
 * evita o bloco centralizado tipo banner de e-commerce. Composição
 * final (micro-interação de foco) na Etapa 4.
 */
export function Newsletter() {
  return (
    <div className="border-t border-sage-300/60 bg-paper px-6 py-22 md:px-10">
      <div className="mx-auto flex max-w-editorial flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xs text-sm text-stone-700">
          Receba, ocasionalmente, novas peças e histórias da Out.
        </p>
        <form className="flex w-full max-w-xs items-center gap-2 border-b border-stone-300 pb-2 transition-colors duration-300 focus-within:border-moss-500">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full bg-transparent text-sm outline-none placeholder:text-stone-500"
          />
          <button
            type="submit"
            className="label whitespace-nowrap transition-colors duration-300 hover:text-moss-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
