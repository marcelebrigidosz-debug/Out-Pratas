"use client";

/**
 * Galeria do produto — imagem principal grande com zoom delicado no
 * hover (mesma lógica do ProductCard) e miniaturas discretas abaixo,
 * não ao lado (evita competir com a informação do produto na coluna
 * de texto). Miniatura ativa marcada por uma linha fina, sem borda
 * grossa nem sombra.
 */
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/lib/types";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div>
      <div className="photo-sage relative aspect-[3/4] w-full overflow-hidden">
        {active ? (
          <Image
            key={activeIndex}
            src={active.src}
            alt={active.alt}
            fill
            priority
            sizes="(min-width: 768px) 60vw, 100vw"
            className="animate-[fadeIn_0.6s_ease-out] object-cover transition-transform duration-[1400ms] ease-editorial hover:scale-[1.03]"
          />
        ) : (
          <div
            key={activeIndex}
            className="h-full w-full animate-[fadeIn_0.6s_ease-out] transition-transform duration-[1400ms] ease-editorial hover:scale-[1.03]"
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver ${productName} — imagem ${index + 1}`}
              aria-current={index === activeIndex}
              className={cn(
                "relative h-16 w-12 overflow-hidden border-b-2 transition-colors duration-300",
                index === activeIndex ? "border-moss-500" : "border-transparent"
              )}
            >
              <Image src={image.src} alt="" fill sizes="48px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <p className="sr-only">{active.alt}</p>
    </div>
  );
}
