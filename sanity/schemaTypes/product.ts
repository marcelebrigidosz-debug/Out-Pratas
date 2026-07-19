import { defineField, defineType } from "sanity";

/**
 * Espelha lib/types.ts (Product). Campos obrigatórios mínimos para
 * evitar que quem edita o conteúdo publique uma peça sem preço ou
 * sem imagem — validação na origem, não só no front.
 */
export const product = defineType({
  name: "product",
  title: "Peça",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: { list: ["aneis", "brincos", "colares", "pulseiras", "pingentes"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "price", title: "Preço (BRL)", type: "number", validation: (r) => r.required().positive() }),
    defineField({ name: "shortDescription", title: "Descrição curta", type: "string", validation: (r) => r.required().max(140) }),
    defineField({ name: "description", title: "Descrição completa", type: "text" }),
    defineField({
      name: "materials",
      title: "Materiais",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["Prata 925"],
    }),
    defineField({
      name: "finish",
      title: "Acabamento",
      type: "string",
      options: { list: ["polido", "oxidado", "escovado"] },
    }),
    defineField({
      name: "images",
      title: "Imagens",
      type: "array",
      of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Texto alternativo", type: "string" }] }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "featured", title: "Destaque na Home", type: "boolean", initialValue: false }),
    defineField({
      name: "relatedProducts",
      title: "Peças relacionadas",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "images.0" },
  },
});
