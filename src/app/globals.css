@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1,
  h2,
  h3 {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  ::selection {
    background: theme("colors.sage.300");
    color: theme("colors.ink");
  }

  body {
    position: relative;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0.025;
    mix-blend-mode: multiply;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  body > * {
    position: relative;
    z-index: 1;
  }
}

@layer utilities {
  .label {
    @apply text-xs uppercase text-stone-700;
  }

  .atmosphere-sage::before {
    content: "";
    position: absolute;
    inset: -10%;
    z-index: -1;
    background: theme("colors.sage.200");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 200'%3E%3Cpath d='M50 0C90 40 96 160 50 200C4 160 10 40 50 0Z' fill='black'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 200'%3E%3Cpath d='M50 0C90 40 96 160 50 200C4 160 10 40 50 0Z' fill='black'/%3E%3C/svg%3E");
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: 10% 15%;
    mask-position: 10% 15%;
    -webkit-mask-size: 40% auto;
    mask-size: 40% auto;
    transform: rotate(-12deg);
    filter: blur(50px);
    opacity: 0.65;
  }

  .atmosphere-moss::before {
    content: "";
    position: absolute;
    inset: -10%;
    z-index: -1;
    background: theme("colors.moss.200");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 200'%3E%3Cpath d='M50 0C90 40 96 160 50 200C4 160 10 40 50 0Z' fill='black'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 200'%3E%3Cpath d='M50 0C90 40 96 160 50 200C4 160 10 40 50 0Z' fill='black'/%3E%3C/svg%3E");
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: 88% 25%;
    mask-position: 88% 25%;
    -webkit-mask-size: 34% auto;
    mask-size: 34% auto;
    transform: rotate(18deg);
    filter: blur(55px);
    opacity: 0.55;
  }

  .photo-sage {
    background-image:
      radial-gradient(120% 140% at 100% 0%, rgba(33,31,25,0.05) 0%, transparent 55%),
      linear-gradient(155deg, theme("colors.sage.50") 0%, theme("colors.sage.100") 60%, theme("colors.sage.300") 130%);
  }
  .photo-sand {
    background-image:
      radial-gradient(120% 140% at 100% 0%, rgba(33,31,25,0.05) 0%, transparent 55%),
      linear-gradient(155deg, theme("colors.sand.50") 0%, theme("colors.sand.100") 60%, theme("colors.sand.300") 130%);
  }
  .photo-moss {
    background-image:
      radial-gradient(120% 140% at 100% 0%, rgba(33,31,25,0.06) 0%, transparent 55%),
      linear-gradient(155deg, theme("colors.moss.50") 0%, theme("colors.moss.100") 60%, theme("colors.moss.300") 130%);
  }
  .photo-stone {
    background-image:
      radial-gradient(120% 140% at 100% 0%, rgba(33,31,25,0.05) 0%, transparent 55%),
      linear-gradient(155deg, theme("colors.stone.50") 0%, theme("colors.stone.100") 60%, theme("colors.stone.300") 130%);
  }
}
