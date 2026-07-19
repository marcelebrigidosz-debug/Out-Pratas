import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes condicionais com merge inteligente de Tailwind.
 * Uso: cn("px-4", condicao && "px-8") -> resolve conflito mantendo a última.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
