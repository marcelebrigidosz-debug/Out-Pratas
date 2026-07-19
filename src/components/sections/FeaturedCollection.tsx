/**
 * Coleção em destaque — 3 a 4 peças, nunca uma grade densa.
 * Grade com leve desalinhamento vertical (itens pares descem) em vez de
 * um grid perfeitamente alinhado: quebra a rigidez de e-commerce comum
 * e aproxima da diagramação de uma página de editorial de moda.
 * Busca produtos via lib/api (já preparado para trocar por CMS).
 */
import { cn } from "@/lib/utils";
import { getFeaturedProducts } from "@/lib/api/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function FeaturedCollection() {
  const products = await getFeaturedProducts();

  return (
    <section className="bg-paper px-6 py-30 md:px-10">
      <SectionHeading eyebrow="Seleção" title="Peças em destaque" />
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <div key={product.id} className={cn(index % 2 === 1 && "md:mt-16")}>
            <ProductCard product={product} toneIndex={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
