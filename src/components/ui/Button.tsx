import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

/**
 * Botão discreto — nunca um CTA berrante. Variante "link" (texto +
 * sublinhado que se revela) é a primária da marca; "outline" é a exceção.
 * Estilo final na Etapa 2.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "link" | "outline";
}

export function Button({ variant = "link", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-60",
        className
      )}
      data-variant={variant}
      {...props}
    />
  );
}
