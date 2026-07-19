import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, getProducts } from "@/lib/api/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductGallery } from "@/components/ui/ProductGallery";
import { getWhatsAppCheckoutUrl } from "@/lib/whatsapp";

interface ProductPageProps {
  params: { slug: string };
}

// Revalida a cada 60s: peças novas publicadas no Studio ficam
// acessíveis sem precisar de um novo deploy.
export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product);

  return (
    <section className="px-6 pb-34 pt-36 md:px-10">
      <Link href="/colecao" className="label mb-12 inline-block text-stone-500 transition-colors duration-300 hover:text-moss-700">
        ← Voltar à coleção
      </Link>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[3fr_2fr] md:gap-20">
        <ProductGallery images={product.images} productName={product.name} />

        <div className="md:sticky md:top-32 md:max-w-sm md:self-start">
          <p className="label mb-4 text-stone-500">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
          <h1 className="font-display text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg text-stone-700">
            {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
          <p className="mt-8 text-sm leading-loose text-stone-700">{product.description}</p>
          <p className="label mt-8 text-stone-500">
            {product.materials.join(", ")}
            {product.finish ? ` · Acabamento ${product.finish}` : ""}
          </p>
          
            href={getWhatsAppCheckoutUrl(product)}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block border border-ink px-8 py-3 text-sm uppercase tracking-widest transition-colors duration-500 hover:border-moss-700 hover:bg-moss-700 hover:text-paper"
          >
            Comprar pelo WhatsApp
          </a>
          <p className="mt-3 text-xs text-stone-500">
            Enviamos para todo o Brasil. Você fala direto com a Out. para confirmar
            disponibilidade e combinar o envio.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-30">
          <p className="label mb-8 text-stone-500">Você também pode gostar</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {related.map((p, index) => (
              <ProductCard key={p.id} product={p} toneIndex={index} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
