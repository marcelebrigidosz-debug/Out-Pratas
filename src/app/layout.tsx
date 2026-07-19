import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { Cursor } from "@/components/layout/Cursor";
import "./globals.css";

// Fraunces: serifada editorial, óptica leve — assina títulos e a headline do hero.
// Inter: grotesca neutra — corpo de texto, labels e UI. Poucas variações, muito respiro.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Out. — Pratas com intenção",
    template: "%s · Out.",
  },
  description:
    "Curadoria de acessórios em prata 925 para quem enxerga a joia como extensão da própria identidade.",
  metadataBase: new URL("https://outprata.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Out.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <Loader />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
