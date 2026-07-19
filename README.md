# Out. — Site editorial

Etapas 1 a 6 concluídas: arquitetura, design system, layout, direção de arte, páginas individuais, CMS (Sanity) e "checkout" via WhatsApp.

Site editorial da Out., marca de acessórios em prata. Next.js (App Router) + TypeScript + Tailwind + Framer Motion.

## Decisões de arquitetura e por quê

**App Router com rotas por página, não uma SPA.** Cada página (`/`, `/colecao`, `/produto/[slug]`, `/sobre`, `/contato`) é uma rota real, com metadata própria — essencial para SEO e para que produtos sejam compartilháveis individualmente, e permite transições de página controladas (fade entre rotas) sem perder a navegação nativa do navegador.

**Camada de dados isolada (`lib/api/products.ts`) separada dos dados em si (`lib/data/products.ts`).** Hoje os dados são mock; na Etapa 6, ao conectar um CMS, só o conteúdo de `lib/api` muda — nenhuma página ou componente precisa saber de onde os dados vêm. Isso é o que torna a arquitetura "escalável" no sentido pedido no briefing.

**Três camadas de componentes:** `layout` (Navbar, Footer, menu fullscreen, loader — aparecem em todas as páginas), `ui` (botão, card de produto, heading — blocos reutilizáveis) e `sections` (Hero, Manifesto, etc. — específicos da Home). Essa separação evita que a Home vire um arquivo monolítico de 500 linhas.

**`RevealOnScroll` como wrapper genérico de animação**, em vez de repetir `motion.div` com variantes em cada seção. Toda a "sensação" de movimento do site (fade, translate suave) fica centralizada em `lib/animations.ts` — se a marca decidir ajustar o timing de todas as revelações, é uma mudança em um único arquivo.

**Fullscreen menu em vez de dropdown.** Decisão de UX deliberada: em uma marca que quer parecer galeria/editorial, o menu é um momento de pausa e presença, não um utilitário que se abre e fecha discretamente no canto da tela — é assim que COS, Our Legacy e Lemaire tratam navegação.

**Smooth scroll via Lenis**, citado no briefing como "scroll elegante" — biblioteca leve, sem scroll-jacking, mantendo acessibilidade (teclado, leitores de tela) intacta.

**Nada de padrões de e-commerce genérico:** sem badges de desconto, sem contadores de urgência, sem grade densa de produtos. O `ProductCard` mostra só nome e preço; o hover é a única "decoração".

## Estrutura de pastas

```
out-prata/
├── src/
│   ├── app/                    # rotas (App Router)
│   │   ├── layout.tsx          # shell global: Navbar, Footer, Loader, metadata
│   │   ├── page.tsx            # Home
│   │   ├── colecao/page.tsx
│   │   ├── produto/[slug]/page.tsx
│   │   ├── sobre/page.tsx
│   │   ├── contato/page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/              # Navbar, FullscreenMenu, Footer, Loader, Cursor
│   │   ├── ui/                  # Button, ProductCard, SectionHeading, RevealOnScroll, Newsletter
│   │   └── sections/             # Hero, FeaturedCollection, Manifesto, EditorialGrid
│   ├── lib/
│   │   ├── types.ts             # Product, NavLink
│   │   ├── utils.ts             # cn()
│   │   ├── animations.ts        # variantes Framer Motion centrais
│   │   ├── api/products.ts      # camada de acesso a dados (troca fácil para CMS)
│   │   └── data/products.ts     # mock de produtos
│   └── hooks/
│       ├── useScrollDirection.ts
│       └── useLenis.ts
├── public/{fonts,images}/
├── tailwind.config.ts            # tokens de tema vazios — Etapa 2
└── package.json
```

## Roadmap (execução iterativa, conforme solicitado)

1. ✅ Arquitetura do projeto
2. ✅ Design System — paleta, tipografia, espaçamentos, componentes-base
3. ✅ Layout estrutural da Home
4. ✅ Direção de arte e implementação completa da Home
5. ✅ Páginas individuais (Coleção, Produto, Sobre, Contato)
6. ✅ CMS (Sanity) e "checkout" via WhatsApp

## Etapa 6 — CMS e checkout

**CMS: Sanity, com Studio embutido em `/studio`.** `lib/api/products.ts` consulta o Sanity via GROQ; se `NEXT_PUBLIC_SANITY_PROJECT_ID` não estiver definido, cai de volta para o mock em `lib/data/products.ts` automaticamente.

**Projeto Sanity já criado e conectado** ("Out Pratas", project ID `4dpclg28`, dataset `production`) — as credenciais já estão em `.env.local`, incluído neste zip. Não é preciso rodar `sanity init` nem usar o "Agent setup"/"Guided installation" mostrados no painel do sanity.io/manage: o Studio já está embutido no próprio código (pasta `sanity/`) e sobe junto com o site em `/studio`.

Assim que o site estiver rodando (local ou publicado), acesse `/studio`, faça login com a mesma conta usada no sanity.io, e edite nome, preço, categoria, materiais e fotos de cada peça num formulário visual — o schema já valida (não deixa publicar sem preço, categoria ou pelo menos 1 imagem).

**Checkout: WhatsApp, não gateway de pagamento.** O botão "Comprar" (`lib/whatsapp.ts`) abre uma conversa no WhatsApp com uma mensagem pronta ("Olá! Tenho interesse na peça X..."). Decisão deliberada: para uma marca pequena e autoral, o atendimento pessoal é parte da experiência — e evita a complexidade (conta de gateway, backend de pedidos, webhooks) de uma integração de pagamento real antes de fazer sentido para o volume de vendas. Configure o número em `NEXT_PUBLIC_WHATSAPP_NUMBER` (`.env.local`). Se o volume crescer e um checkout automatizado (Mercado Pago, Stripe) fizer sentido, a mudança fica isolada em `lib/whatsapp.ts` e no botão da página de produto.

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha as variáveis do Sanity e do WhatsApp
npm run dev
```
