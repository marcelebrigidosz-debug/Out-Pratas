import type { Config } from "tailwindcss";

// Design System — atualização de identidade visual (evolução da Etapa 2).
// A base branco/cinza continua, mas a paleta de verdes naturais e tons de
// terra agora tem peso de verdade: sage (sálvia), moss (musgo), olive
// (oliva), sand (areia) e stone (pedra) — nada saturado, tudo terroso.
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F4EC",
        ink: "#211F19",
        charcoal: "#2C2A22",
        sand: {
          50: "#F6F1E6",
          100: "#EDE4CF",
          300: "#DBCBA3",
          500: "#B9A276",
        },
        stone: {
          50: "#F1EEE6",
          100: "#E7E2D5",
          300: "#D2CBB9",
          500: "#A29A87",
          700: "#6E6858",
        },
        sage: {
          50: "#EFF2E7",
          100: "#DEE5CD",
          300: "#B9C79E",
          500: "#7C8F5F",
          700: "#4C5A38",
          900: "#293321",
        },
        moss: {
          50: "#EBEEE0",
          100: "#D6DEC1",
          300: "#A6B382",
          500: "#5E6E42",
          700: "#3A4529",
          900: "#20260F",
        },
        olive: {
          300: "#BBB47F",
          500: "#8A8752",
          700: "#5C5934",
        },
        silver: {
          300: "#DAD9D4",
          500: "#B7B6AF",
          700: "#8C8B84",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "sans-serif"],
      },
      fontSize: {
        // Contraste maior entre corpo (sans, compacto) e display (serif,
        // generoso) — pedido explícito de "hierarquia mais sofisticada".
        xs: ["0.75rem", { letterSpacing: "0.14em", lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.7" }],
        base: ["1rem", { lineHeight: "1.8" }],
        lg: ["1.125rem", { lineHeight: "1.8" }],
        xl: ["1.375rem", { lineHeight: "1.6" }],
        "2xl": ["1.75rem", { lineHeight: "1.35" }],
        "3xl": ["2.25rem", { lineHeight: "1.15" }],
        "4xl": ["3.25rem", { lineHeight: "1.05" }],
        "5xl": ["4.5rem", { lineHeight: "1" }],
        "6xl": ["6rem", { lineHeight: "0.96" }],
        "7xl": ["8rem", { lineHeight: "0.9" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        44: "11rem",
      },
      maxWidth: {
        editorial: "42rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      boxShadow: {
        // sombra extremamente suave — profundidade sem parecer "efeito digital"
        soft: "0 1px 2px rgba(33, 31, 25, 0.03), 0 12px 32px -16px rgba(33, 31, 25, 0.10)",
        card: "0 8px 24px -12px rgba(44, 42, 34, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
