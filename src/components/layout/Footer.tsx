/**
 * Footer minimalista — sem grade de 5 colunas típica de e-commerce.
 * Composição final (tipografia, espaçamento) na Etapa 4.
 */
export function Footer() {
  return (
    <footer className="border-t border-sage-300/60 bg-paper px-6 py-16 md:px-10">
      <p className="label">Out. — Pratas com intenção. © {new Date().getFullYear()}</p>
      <p className="label mt-2 text-stone-500">Enviamos para todo o Brasil.</p>
    </footer>
  );
}
