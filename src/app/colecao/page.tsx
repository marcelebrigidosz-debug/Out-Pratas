import type { Metadata } from "next";
import { getProducts } from "@/lib/api/products";
import { CollectionGrid } from "@/components/sections/CollectionGrid";

export const metadata: Metadata = {
  title: "Coleção",
  description: "Toda a curadoria Out. em um só lugar.",
};

export default async function ColecaoPage() {
  const products = await getProducts();

  return (
    <section className="bg-paper px-6 pb-30 pt-32 md:px-10">
      <p className="label mb-3 text-moss-700">Coleção</p>
      <h1 className="font-display mb-16 max-w-editorial text-3xl md:text-4xl">
        Toda a curadoria, sem categorias forçadas.
      </h1>
      <CollectionGrid products={products} />
    </section>
  );
}
