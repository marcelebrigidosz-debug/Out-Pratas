import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

/**
 * Studio embutido em /studio (next-sanity). Um único deploy (o site em
 * si) serve tanto a loja quanto o painel de edição de conteúdo — sem
 * infraestrutura extra para manter.
 */
export default defineConfig({
  name: "out-prata",
  title: "Out.",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
