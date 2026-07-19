/**
 * Curadoria da semana — imagem grande / texto pequeno (imagem ocupa
 * 3/5 da largura, não 50/50), tratada como capa de revista. Depois do
 * hero (imagem cheia) e antes do manifesto (texto puro), esta seção
 * varia o ritmo: imagem dominante + bloco de texto contido.
 */
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/api/products";

export async function CuradoriaDaSemana() {
  const [product] = await getFeaturedProducts();
  if (!product) return null;

  return (
    <section className="bg-sand-50 px-6 py-38 md:px-10">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[3fr_2fr] md:gap-20">
        <div className="photo-sand aspect-[4/5] md:aspect-[4/5]" />
        <div>
          <p className="label mb-5 text-moss-700">Curadoria da semana</p>
          <h2 className="font-display text-4xl md:text-5xl">{product.name}</h2>
          <p className="mt-6 max-w-sm text-sm leading-loose text-stone-700">
            {product.description}
          </p>
          <Link
            href={`/produto/${product.slug}`}
            className="label mt-10 inline-block border-b border-moss-500 pb-1 transition-colors duration-500 hover:border-ink"
          >
            Ver a peça
          </Link>
        </div>
      </div>
    </section>
  );
}
