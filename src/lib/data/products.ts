import type { Product } from "@/lib/types";

/**
 * Dados mock — estrutura idêntica ao que virá do CMS na Etapa 6.
 * Nomes autorais e sensoriais, coerentes com o posicionamento da marca
 * (nunca "Anel 001" — cada peça tem identidade própria).
 */
export const products: Product[] = [
  {
    id: "1",
    slug: "anel-raiz",
    name: "Anel Raiz",
    category: "aneis",
    price: 289,
    currency: "BRL",
    shortDescription: "Forma orgânica inspirada em raízes entrelaçadas.",
    description:
      "Talhado à mão em prata 925, o Anel Raiz reproduz o movimento natural de raízes que se cruzam sob a terra. Uma peça para uso diário, que ganha personalidade com o tempo.",
    materials: ["Prata 925"],
    finish: "escovado",
    images: [
      { src: "/images/products/anel-raiz-1.jpg", alt: "Anel Raiz em prata 925, acabamento escovado" },
      { src: "/images/products/anel-raiz-2.jpg", alt: "Anel Raiz em prata 925, acabamento escovado — detalhe" },
      { src: "/images/products/anel-raiz-3.jpg", alt: "Anel Raiz em prata 925, acabamento escovado — em uso" },
    ],
    featured: true,
    relatedSlugs: ["anel-orvalho", "pulseira-musgo"],
  },
  {
    id: "2",
    slug: "brinco-orvalho",
    name: "Brinco Orvalho",
    category: "brincos",
    price: 349,
    currency: "BRL",
    shortDescription: "Gota suspensa, leve como orvalho sobre folha.",
    description:
      "Uma única gota de prata 925 suspensa em fio minimalista. O Brinco Orvalho capta luz de forma sutil, sem nunca gritar.",
    materials: ["Prata 925"],
    finish: "polido",
    images: [
      { src: "/images/products/brinco-orvalho-1.jpg", alt: "Brinco Orvalho em prata 925, acabamento polido" },
      { src: "/images/products/brinco-orvalho-2.jpg", alt: "Brinco Orvalho em prata 925, acabamento polido — detalhe" },
      { src: "/images/products/brinco-orvalho-3.jpg", alt: "Brinco Orvalho em prata 925, acabamento polido — em uso" },
    ],
    featured: true,
    relatedSlugs: ["colar-musgo"],
  },
  {
    id: "3",
    slug: "colar-musgo",
    name: "Colar Musgo",
    category: "colares",
    price: 429,
    currency: "BRL",
    shortDescription: "Textura densa, orgânica, quase viva.",
    description:
      "Corrente com pingente texturizado que remete à densidade do musgo sobre pedra. Acabamento oxidado acentua os relevos da peça.",
    materials: ["Prata 925"],
    finish: "oxidado",
    images: [
      { src: "/images/products/colar-musgo-1.jpg", alt: "Colar Musgo em prata 925, acabamento oxidado" },
      { src: "/images/products/colar-musgo-2.jpg", alt: "Colar Musgo em prata 925, acabamento oxidado — detalhe" },
      { src: "/images/products/colar-musgo-3.jpg", alt: "Colar Musgo em prata 925, acabamento oxidado — em uso" },
    ],
    featured: true,
    relatedSlugs: ["anel-raiz", "brinco-orvalho"],
  },
  {
    id: "4",
    slug: "pulseira-musgo",
    name: "Pulseira Musgo",
    category: "pulseiras",
    price: 379,
    currency: "BRL",
    shortDescription: "Elos irregulares, presença discreta.",
    description:
      "Elos de tamanhos sutilmente irregulares — uma escolha deliberada, não uma imperfeição. A Pulseira Musgo acompanha o pulso com naturalidade.",
    materials: ["Prata 925"],
    finish: "escovado",
    images: [
      { src: "/images/products/pulseira-musgo-1.jpg", alt: "Pulseira Musgo em prata 925, acabamento escovado" },
      { src: "/images/products/pulseira-musgo-2.jpg", alt: "Pulseira Musgo em prata 925, acabamento escovado — detalhe" },
      { src: "/images/products/pulseira-musgo-3.jpg", alt: "Pulseira Musgo em prata 925, acabamento escovado — em uso" },
    ],
    featured: false,
    relatedSlugs: ["anel-raiz"],
  },
  {
    id: "5",
    slug: "anel-orvalho",
    name: "Anel Orvalho",
    category: "aneis",
    price: 259,
    currency: "BRL",
    shortDescription: "Volume mínimo, curva contínua.",
    description:
      "Uma curva contínua sem início nem fim aparente. O Anel Orvalho é a peça mais silenciosa da coleção — e talvez a mais usada.",
    materials: ["Prata 925"],
    finish: "polido",
    images: [
      { src: "/images/products/anel-orvalho-1.jpg", alt: "Anel Orvalho em prata 925, acabamento polido" },
      { src: "/images/products/anel-orvalho-2.jpg", alt: "Anel Orvalho em prata 925, acabamento polido — detalhe" },
      { src: "/images/products/anel-orvalho-3.jpg", alt: "Anel Orvalho em prata 925, acabamento polido — em uso" },
    ],
    featured: false,
    relatedSlugs: ["brinco-orvalho"],
  },
];
