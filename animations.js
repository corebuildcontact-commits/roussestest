/* ============================================================
   BASE.CSS — Reset, tokens, typographie, utilitaires
   Site Mairie des Rousses — Direction artistique : haute montagne de luxe
   ============================================================ */

:root {
  /* ── Palette — nuit alpine, bois d'ébène & or chaud ── */
  --color-primary: #1C0808;             /* Nuit bordeaux */
  --color-primary-dark: #0A0303;        /* Ébène pur */
  --color-primary-mid: #2A0C0C;         /* Bordeaux mi-profond */
  --color-primary-light: #3D1212;       /* Bordeaux clair */
  --color-secondary: #1E5038;           /* Vert sapin profond */
  --color-secondary-dark: #133426;

  /* Or — plus chaud, moins orange, plus raffiné */
  --color-accent: #C9A96E;              /* Or chaud pâle */
  --color-accent-deep: #B08540;         /* Or foncé — hover */
  --color-accent-soft: #E8D4A8;         /* Champagne doux */
  --color-accent-glow: rgba(201, 169, 110, 0.22);
  --color-accent-subtle: rgba(201, 169, 110, 0.10);

  /* Surfaces claires */
  --color-snow: #FBF8F2;               /* Ivoire crème pur */
  --color-snow-warm: #F4EDE0;          /* Crème chaude */
  --color-snow-deep: #EAE0CC;          /* Lin sable */

  /* Texte */
  --color-text: #0E0505;               /* Ébène texte */
  --color-text-soft: #4A3228;          /* Brun chaud intermédiaire */
  --color-text-muted: #8C706A;         /* Vieux rose mat */

  /* Bordures */
  --color-border: rgba(28, 8, 8, 0.08);
  --color-border-strong: rgba(28, 8, 8, 0.18);
  --color-border-gold: rgba(201, 169, 110, 0.22);

  /* Surfaces sombres — widget météo, footer, sections dark */
  --color-dark:           #060202;
  --color-dark-surface:   #0E0505;
  --color-dark-elevated:  #160707;
  --color-dark-border:    rgba(201, 169, 110, 0.13);

  /* ── Typographie ── */
  --font-display: "Cormorant Garamond", "Playfair Display", "Times New Roman", serif;
  --font-body:    "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-numeric: "Bebas Neue", "Arial Narrow", sans-serif;

  /* ── Échelles fluides (clamp) ── */
  --fs-xs:  clamp(0.72rem,  0.68rem + 0.2vw,  0.8rem);
  --fs-sm:  clamp(0.85rem,  0.82rem + 0.16vw, 0.925rem);
  --fs-base:clamp(1rem,     0.96rem + 0.2vw,  1.0625rem);
  --fs-md:  clamp(1.0625rem,1rem    + 0.3vw,  1.1875rem);
  --fs-lg:  clamp(1.25rem,  1.1rem  + 0.7vw,  1.5rem);
  --fs-xl:  clamp(1.5rem,   1.3rem  + 1vw,    2rem);
  --fs-2xl: clamp(2rem,     1.6rem  + 2vw,    3.25rem);
  --fs-3xl: clamp(2.75rem,  2rem    + 3.75vw, 5rem);
  --fs-4xl: clamp(3.5rem,   2.5rem  + 5vw,    7.5rem);

  /* ── Espacements ── */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4.5rem;
  --space-9: 6.5rem;
  --space-10: 9rem;

  /* ── Conteneur ── */
  --container:        1360px;
  --container-narrow: 980px;
  --gutter:           clamp(1.25rem, 5vw, 3rem);

  /* ── Rayons ── */
  --radius-sm:   3px;
  --radius-md:   8px;
  --radius-lg:   14px;
  --radius-xl:   22px;
  --radius-2xl:  36px;
  --radius-full: 999px;

  /* ── Ombres — système de profondeur ── */
  --shadow-sm: 0 1px 3px rgba(8, 3, 3, 0.06),  0 2px 8px rgba(8, 3, 3, 0.04);
  --shadow-md: 0 4px 14px rgba(8, 3, 3, 0.10), 0 8px 28px rgba(8, 3, 3, 0.06);
  --shadow-lg: 0 12px 40px rgba(8, 3, 3, 0.16),0 6px 18px rgba(8, 3, 3, 0.08);
  --shadow-xl: 0 28px 72px rgba(8, 3, 3, 0.24),0 12px 28px rgba(8, 3, 3, 0.12);
  --shadow-gold: 0 6px 28px rgba(201, 169, 110, 0.25);

  /* ── Transitions ── */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast: 180ms;
  --dur-base: 320ms;
  --dur-slow: 620ms;

  /* ── Hauteurs fixes ── */
  --ww-h:     64px;   /* Weather widget */
  --header-h: 88px;   /* Header nav */
}

/* ============== Reset ============== */
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; padding: 0; }
html { -webkit-text-size-adjust: 100%; tab-size: 4; scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  font-size: var(--fs-base);
  line-height: 1.65;
  color: var(--color-text);
  background: var(--color-snow);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}
img, svg, video { display: block; max-width: 100%; height: auto; }
button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }
a { color: inherit; text-decoration: none; }
input, textarea, select { font: inherit; color: inherit; }
ul, ol { list-style: none; }

/* ============== Typographie ============== */
.h-display, h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.01em;
  color: var(--color-primary);
  text-wrap: balance;
}
h1 { font-size: var(--fs-3xl); }
h2 { font-size: var(--fs-2xl); }
h3 { font-size: var(--fs-xl); }
h4, h5, h6 {
  font-family: var(--font-body);
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-primary);
}
p { text-wrap: pretty; }

.eyebrow {
  font-family: var(--font-numeric);
  font-size: 0.72rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--color-accent-deep);
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 0.8em;
}
.eyebrow::before {
  content: "";
  width: 28px; height: 1px;
  background: var(--color-accent-deep);
  display: inline-block;
  flex-shrink: 0;
}

.numeric {
  font-family: var(--font-numeric);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 0.9;
}

/* ============== Layout ============== */
.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
.container--narrow { max-width: var(--container-narrow); }

.section { padding-block: clamp(4.5rem, 9vw, 9rem); }
.section--tight { padding-block: clamp(3.5rem, 6vw, 6rem); }
.section--dark {
  background: var(--color-primary);
  color: var(--color-snow);
}
.section--dark h1, .section--dark h2, .section--dark h3 { color: var(--color-snow); }
.section--dark .eyebrow { color: var(--color-accent-soft); }

.section__head {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  max-width: 740px;
}
.section__head--center { margin-inline: auto; text-align: center; align-items: center; }

.section__head__row {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--space-6);
  flex-wrap: wrap;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

/* ============== Boutons ============== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  padding: 0.95em 1.8em;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--fs-sm);
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition:
    transform var(--dur-base) var(--ease-out),
    box-shadow var(--dur-base) var(--ease-out),
    background var(--dur-base) var(--ease-out),
    color var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out);
  min-height: 44px;
  position: relative;
  overflow: hidden;
}
.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }

.btn--primary {
  background: var(--color-accent);
  color: var(--color-primary-dark);
  box-shadow: var(--shadow-gold);
  letter-spacing: 0.06em;
  font-family: var(--font-numeric);
  font-size: 0.82rem;
  padding: 1em 2em;
}
.btn--primary:hover {
  background: var(--color-accent-deep);
  box-shadow: 0 12px 40px rgba(201, 169, 110, 0.40);
}

.btn--ghost {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-border-strong);
}
.btn--ghost:hover { background: var(--color-primary); color: var(--color-snow); border-color: var(--color-primary); }

.btn--ghost-light {
  background: transparent;
  color: var(--color-snow);
  border: 1px solid rgba(251, 248, 242, 0.35);
  backdrop-filter: blur(4px);
}
.btn--ghost-light:hover { background: var(--color-snow); color: var(--color-primary); border-color: var(--color-snow); }

.btn--icon-only { padding: 0.85em; aspect-ratio: 1; }

/* Ripple */
.btn .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.38);
  transform: scale(0);
  animation: ripple 600ms ease-out;
  pointer-events: none;
}
@keyframes ripple { to { transform: scale(4); opacity: 0; } }

/* ============== Tags / Pills ============== */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.65rem;
  font-family: var(--font-numeric);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.45em 1em;
  border-radius: var(--radius-full);
  background: var(--color-snow);
  color: var(--color-primary);
  border: 1px solid var(--color-border);
}
.tag--commune {
  background: rgba(28, 8, 8, 0.06);
  color: var(--color-primary);
  border-color: rgba(28, 8, 8, 0.12);
}
.tag--travaux {
  background: rgba(201, 169, 110, 0.12);
  color: #7A5A10;
  border-color: rgba(201, 169, 110, 0.25);
}
.tag--culture {
  background: rgba(30, 80, 56, 0.10);
  color: var(--color-secondary-dark);
  border-color: rgba(30, 80, 56, 0.18);
}
.tag--solid { background: var(--color-primary); color: var(--color-snow); border-color: var(--color-primary); }

/* ============== Accessibilité ============== */
.skip-link {
  position: absolute;
  top: -100px; left: 0;
  background: var(--color-primary);
  color: var(--color-snow);
  padding: 1em 1.5em;
  z-index: 9999;
  border-radius: 0 0 var(--radius-md) 0;
  transition: top var(--dur-base);
}
.skip-link:focus { top: 0; }

:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; border-radius: 4px; }

.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
  white-space: nowrap; border: 0;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body.high-contrast {
  --color-text: #000;
  --color-text-soft: #1a1a1a;
  --color-text-muted: #333;
  --color-border: rgba(0,0,0,0.6);
  --color-border-strong: rgba(0,0,0,0.85);
}
