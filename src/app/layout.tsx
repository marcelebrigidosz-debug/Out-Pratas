import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
