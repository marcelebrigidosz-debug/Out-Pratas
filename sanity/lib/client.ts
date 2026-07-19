import { createClient } from "@sanity/client";

/**
 * Client de leitura (CDN habilitado, sem token) — suficiente para todo
 * conteúdo público do site. Se faltar NEXT_PUBLIC_SANITY_PROJECT_ID,
 * `configured` fica false e lib/api/products.ts cai de volta para o
 * mock local, então `npm run dev` funciona mesmo antes de existir um
 * projeto Sanity real.
 */
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});
