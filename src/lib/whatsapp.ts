import type { Product } from "@/lib/types";

/**
 * "Comprar" abre o WhatsApp com uma mensagem pronta em vez de um
 * checkout automatizado — decisão da Etapa 6. Para uma marca pequena
 * e autoral, o atendimento pessoal (tirar dúvida de tamanho, prazo,
 * embalagem) é parte da experiência, não um atrito a eliminar. Sem
 * taxas de gateway, sem backend de pedidos para manter agora.
 */
export function getWhatsAppCheckoutUrl(product: Product): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5541992580505";
  const price = product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const message = `Olá! Tenho interesse na peça "${product.name}" (${price}). Ela ainda está disponível?`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
