/**
 * Sanity Studio embutido em /studio — só acessível para quem tem o
 * link; não aparece em nenhum menu do site público. `dynamic = "force-static"`
 * segue a recomendação oficial do next-sanity para essa rota.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
