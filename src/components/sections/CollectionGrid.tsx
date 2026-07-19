"use client";

/**
 * Grade da Coleção — filtro por categoria como texto sublinhado, não
 * pílulas/badges de e-commerce. "Todos" sempre primeiro. A troca de
 * categoria funciona no cliente (sem reload) porque o conjunto de
 * produtos já foi buscado no server component da página; quando o
 * catálogo crescer bastante, isso migra para filtro via URL/query.
 */
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product } from "@/lib/types";

interface CollectionGridProps {
  products: Product[];
}

const categories: { label: string; value: Product["category"] | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Anéis", value: "aneis" },
  { label: "Brincos", value: "brincos" },
  { label: "Colares", value: "colares" },
  { label: "Pulseiras", value: "pulseiras" },
];

export function CollectionGrid({ products }: CollectionGridProps) {
  const [active, setActive] = useState<(typeof categories)[number]["value"]>("todos");

  const filtered = useMemo(
    () => (active === "todos" ? products : products.filter((p) => p.category === active)),
    [products, active]
  );

  return (
    <div>
      <div className="mb-16 flex flex-wrap gap-x-8 gap-y-3">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActive(category.value)}
            className={cn(
              "label border-b pb-1 transition-colors duration-300 hover:text-moss-700",
              active === category.value
                ? "border-moss-500 text-ink"
                : "border-transparent text-stone-500"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((product, index) => (
          <div key={product.id} className={cn(index % 3 === 1 && "md:mt-12")}>
            <ProductCard product={product} toneIndex={index} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-stone-500">Nenhuma peça nesta categoria no momento.</p>
      )}
    </div>
  );
}
