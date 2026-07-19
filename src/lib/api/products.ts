import { products as mockProducts } from "@/lib/data/products";
import type { Product } from "@/lib/types";
import { sanityClient, sanityConfigured } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

/**
 * Camada de acesso a dados — Etapa 6: agora consulta o Sanity de
 * verdade. Nenhuma página ou componente precisou mudar, porque tudo
 * já dependia só destas funções (a decisão de arquitetura da Etapa 1
 * valeu a pena aqui).
 *
 * Enquanto NEXT_PUBLIC_SANITY_PROJECT_ID não existir (projeto Sanity
 * ainda não criado), `sanityConfigured` é false e caímos de volta pro
 * mock — assim `npm run dev` continua funcionando sem nenhuma conta
 * configurada.
 */

interface SanityProduct {
  _id: string;
  name: string;
  slug: string;
  category: Product["category"];
  price: number;
  shortDescription: string;
  description: string;
  materials: string[];
  finish?: Product["finish"];
  images: { asset: unknown; alt?: string }[];
  featured?: boolean;
  relatedProducts?: { slug: string }[];
}

function mapSanityProduct(doc: SanityProduct): Product {
  return {
    id: doc._id,
    slug: doc.slug,
    name: doc.name,
    category: doc.category,
    price: doc.price,
    currency: "BRL",
    shortDescription: doc.shortDescription,
    description: doc.description,
    materials: doc.materials ?? ["Prata 925"],
    finish: doc.finish,
    images: (doc.images ?? []).map((img) => ({
      src: urlFor(img.asset).width(1200).url(),
      alt: img.alt ?? doc.name,
    })),
    featured: doc.featured,
    relatedSlugs: (doc.relatedProducts ?? []).map((p) => p.slug),
  };
}

const PRODUCT_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  category,
  price,
  shortDescription,
  description,
  materials,
  finish,
  featured,
  images[]{ asset, alt },
  "relatedProducts": relatedProducts[]->{ "slug": slug.current }
}`;

export async function getProducts(): Promise<Product[]> {
  if (!sanityConfigured) return mockProducts;
  const docs = await sanityClient.fetch<SanityProduct[]>(`*[_type == "product"]${PRODUCT_PROJECTION}`);
  return docs.map(mapSanityProduct);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  if (!sanityConfigured) return mockProducts.filter((p) => p.featured);
  const docs = await sanityClient.fetch<SanityProduct[]>(
    `*[_type == "product" && featured == true]${PRODUCT_PROJECTION}`
  );
  return docs.map(mapSanityProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!sanityConfigured) return mockProducts.find((p) => p.slug === slug);
  const doc = await sanityClient.fetch<SanityProduct | null>(
    `*[_type == "product" && slug.current == $slug][0]${PRODUCT_PROJECTION}`,
    { slug }
  );
  return doc ? mapSanityProduct(doc) : undefined;
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  if (!product.relatedSlugs?.length) return [];
  if (!sanityConfigured) {
    return mockProducts.filter((p) => product.relatedSlugs?.includes(p.slug));
  }
  const docs = await sanityClient.fetch<SanityProduct[]>(
    `*[_type == "product" && slug.current in $slugs]${PRODUCT_PROJECTION}`,
    { slugs: product.relatedSlugs }
  );
  return docs.map(mapSanityProduct);
}
