"use client";

/**
 * Envelope condicional: em qualquer rota normal do site, mostra
 * Navbar/Footer/Loader/Cursor. Em /studio, não mostra nada disso — o
 * Sanity Studio precisa da tela inteira para o próprio painel de
 * navegação, e a navbar do site ficava sobrepondo o topo do Studio.
 */
import { usePathname } from "next/navigation";
import { Loader } from "./Loader";
import { Cursor } from "./Cursor";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
