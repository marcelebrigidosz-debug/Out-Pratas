/**
 * Título de seção — hierarquia consistente entre Home, Coleção e Sobre.
 * Escala tipográfica definida na Etapa 2.
 */
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {eyebrow && <p className="label mb-3 text-moss-700">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
    </div>
  );
}
