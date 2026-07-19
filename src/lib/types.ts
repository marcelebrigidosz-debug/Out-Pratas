/**
 * Tipos centrais do domínio. Mantidos independentes de qualquer
 * fonte de dados (mock hoje, CMS na Etapa 6) para que a troca
 * não exija alterar componentes — apenas `lib/data`.
 */

export type Finish = "polido" | "oxidado" | "escovado";

export interface ProductImage {
  src: string;
  alt: string;
  /** usada para blur placeholder editorial (LQIP) */
  blurDataURL?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "aneis" | "brincos" | "colares" | "pulseiras";
  price: number;
  currency: "BRL";
  shortDescription: string;
  description: string;
  materials: string[];
  finish?: Finish;
  images: ProductImage[];
  featured?: boolean;
  relatedSlugs?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
