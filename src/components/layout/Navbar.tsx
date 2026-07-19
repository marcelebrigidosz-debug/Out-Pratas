"use client";

/**
 * Navbar transparente sobre o hero — ganha fundo (paper + blur) e uma
 * linha inferior sutil só depois de passar a dobra. Transição lenta
 * (500ms) para nunca parecer um "pulo" de estado.
 */

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import type { NavLink } from "@/lib/types";
import { FullscreenMenu } from "./FullscreenMenu";

const links: NavLink[] = [
  { label: "Coleção", href: "/colecao" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const { scrolled } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 transition-colors duration-500 ease-editorial md:px-10",
          scrolled
            ? "border-b border-sage-300/70 bg-paper/90 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Link href="/" className="font-display text-base transition-colors duration-300 hover:text-moss-700">
          Out.
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          className="label transition-colors duration-300 hover:text-moss-700"
        >
          Menu
        </button>
      </header>

      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </>
  );
}
