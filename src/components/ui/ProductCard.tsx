/**
 * Card de produto — não é mais um "card": sem moldura, sem sombra
 * pesada, sem borda. É uma página de revista — a imagem é o assunto,
 * o preço é a informação menos importante da composição (menor, mudo,
 * quase uma nota de rodapé). Único gesto de interação: a imagem
 * respira (cresce 3%, bem devagar) — desejo e contemplação, não
 * "produto no carrinho".
 */
import Image from "next/image";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

const photoTones = ["photo-sage", "photo-sand", "photo-moss", "photo-stone"] as const;

interface ProductCardProps {
  product: Product;
  /** varia o tom do placeholder para não repetir o mesmo bloco em sequência */
  toneIndex?: number;
}

export function ProductCard({ product, toneIndex = 0 }: ProductCardProps) {
  const tone = photoTones[toneIndex % photoTones.length];
  const image = product.images?.[0];

  return (
    <a href={`/produto/${product.slug}`} className="group block">
      <div className={cn("relative aspect-[3/4] w-full overflow-hidden", !image && tone)}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.03]" />
        )}
      </div>
      <div className="mt-5">
        <p className="font-display text-lg transition-colors duration-500 group-hover:text-moss-700">
          {product.name}
        </p>
        <p className="mt-1 text-xs text-stone-500">
          {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </p>
      </div>
    </a>
  );
}
