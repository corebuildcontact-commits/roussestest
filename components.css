/* ============================================================
   COMPONENTS.CSS — Widget Météo, Header, Hero, Cards, Footer
   Site Mairie des Rousses — Direction artistique : station de luxe
   ============================================================ */

/* ══════════════════════════════════════════════════════════════
   WEATHER WIDGET — Concierge premium, fixe en tête de page
   ══════════════════════════════════════════════════════════════ */

.weather-widget {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--ww-h);
  z-index: 62;
  background: linear-gradient(90deg, #060101 0%, #0E0404 45%, #060101 100%);
  overflow: hidden;
  font-family: var(--font-body);
}

/* Halo or subtil en arrière-plan */
.weather-widget::before {
  content: "";
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 12% 50%, rgba(201,169,110,0.09) 0%, transparent 48%),
    radial-gradient(ellipse at 88% 50%, rgba(201,169,110,0.06) 0%, transparent 45%);
  pointer-events: none;
}

/* Ligne dorée en bas */
.weather-widget::after {
  content: "";
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.4) 30%, rgba(201,169,110,0.55) 50%, rgba(201,169,110,0.4) 70%, transparent 100%);
}

.weather-widget__inner {
  display: flex;
  align-items: center;
  height: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--gutter);
  overflow-x: auto;
  scrollbar-width: none;
  position: relative;
  z-index: 1;
  gap: 0;
}
.weather-widget__inner::-webkit-scrollbar { display: none; }

/* Séparateur vertical or */
.ww-sep {
  width: 1px;
  height: 26px;
  background: linear-gradient(180deg, transparent, rgba(201,169,110,0.18), transparent);
  flex-shrink: 0;
  margin: 0 clamp(0.65rem, 1.2vw, 1.25rem);
}

/* ─── Identité : live + localisation ─── */
.ww-identity {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  flex-shrink: 0;
}

.ww-live {
  display: inline-flex;
  align-items: center;
  gap: 0.48rem;
  font-family: var(--font-numeric);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-accent);
  white-space: nowrap;
}

.ww-live__dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--color-accent);
  flex-shrink: 0;
  animation: wwPulse 2.5s ease-out infinite;
}
@keyframes wwPulse {
  0%   { box-shadow: 0 0 0 0 rgba(201,169,110,0.75); }
  70%  { box-shadow: 0 0 0 7px rgba(201,169,110,0); }
  100% { box-shadow: 0 0 0 0 rgba(201,169,110,0); }
}

.ww-location {
  display: flex;
  flex-direction: column;
  gap: 0.06rem;
  white-space: nowrap;
}
.ww-location__name {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-snow);
  letter-spacing: 0.03em;
  line-height: 1;
}
.ww-location__alt {
  font-family: var(--font-numeric);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  color: rgba(251,248,242,0.35);
  text-transform: uppercase;
}

/* ─── Température ─── */
.ww-temperature {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-shrink: 0;
}

.ww-temp-icon {
  width: 26px; height: 26px;
  color: var(--color-accent-soft);
  flex-shrink: 0;
  animation: wwSpin 14s linear infinite;
}
@keyframes wwSpin { to { transform: rotate(360deg); } }

.ww-temp-display {
  display: flex;
  align-items: baseline;
  gap: 0.12rem;
  line-height: 1;
}
.ww-temp-num {
  font-family: var(--font-numeric);
  font-size: 2.1rem;
  color: var(--color-accent-soft);
  letter-spacing: -0.02em;
  line-height: 0.9;
}
.ww-temp-unit {
  font-family: var(--font-numeric);
  font-size: 0.9rem;
  color: rgba(232,212,168,0.55);
  margin-bottom: 0.25rem;
}
.ww-temp-cond {
  font-size: 0.7rem;
  color: rgba(251,248,242,0.52);
  white-space: nowrap;
  letter-spacing: 0.03em;
  display: block;
  margin-top: 0.15rem;
}

/* ─── Stats (vent, manteau, visibilité, pistes) ─── */
.ww-stats {
  display: flex;
  align-items: center;
  gap: clamp(0.85rem, 1.8vw, 1.75rem);
  flex-shrink: 0;
}

.ww-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.18rem;
  white-space: nowrap;
}
.ww-stat__icon {
  width: 13px; height: 13px;
  color: rgba(201,169,110,0.55);
  flex-shrink: 0;
}
.ww-stat__val {
  font-family: var(--font-numeric);
  font-size: 0.98rem;
  color: var(--color-snow);
  line-height: 1;
  letter-spacing: 0.02em;
  display: flex;
  align-items: baseline;
  gap: 0.08rem;
}
.ww-stat__val small {
  font-size: 0.58rem;
  color: rgba(251,248,242,0.38);
  letter-spacing: 0.08em;
  font-family: var(--font-body);
  font-weight: 500;
}
.ww-stat__lbl {
  font-size: 0.55rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(251,248,242,0.32);
  font-weight: 500;
  font-family: var(--font-body);
}

/* ─── Prévisions 3 jours ─── */
.ww-forecast {
  display: flex;
  align-items: center;
  gap: clamp(0.65rem, 1.2vw, 1.1rem);
  flex-shrink: 0;
}

.ww-fc {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.22rem;
}
.ww-fc__day {
  font-family: var(--font-numeric);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: rgba(251,248,242,0.32);
  text-transform: uppercase;
}
.ww-fc__icon {
  width: 16px; height: 16px;
  color: rgba(201,169,110,0.7);
}
.ww-fc__temp {
  font-family: var(--font-numeric);
  font-size: 0.78rem;
  color: rgba(251,248,242,0.68);
  letter-spacing: 0.02em;
}

/* ─── Extras : lever/coucher + téléphone ─── */
.ww-extras {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-left: auto;
  flex-shrink: 0;
}

.ww-suntimes {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}
.ww-suntimes span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-numeric);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  color: rgba(251,248,242,0.36);
  white-space: nowrap;
}

.ww-phone {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-numeric);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: var(--color-snow);
  white-space: nowrap;
  padding: 0.5em 1.1em;
  border: 1px solid rgba(201,169,110,0.18);
  border-radius: var(--radius-full);
  transition: all var(--dur-fast);
}
.ww-phone:hover {
  color: var(--color-accent);
  border-color: rgba(201,169,110,0.45);
  background: rgba(201,169,110,0.06);
  transform: none;
}
.ww-phone svg { color: var(--color-accent); }

/* ─── Responsive breakpoints ─── */
@media (max-width: 1200px) { .ww-forecast { display: none; } }
@media (max-width: 1000px) {
  .ww-stats .ww-stat:nth-child(n+4) { display: none; }
}
@media (max-width: 860px)  {
  .ww-stats .ww-stat:nth-child(n+3) { display: none; }
  .ww-suntimes { display: none; }
}
@media (max-width: 680px)  {
  .ww-stats { display: none; }
  .ww-live { display: none; }
}
@media (max-width: 480px)  {
  .ww-phone span { display: none; }
  .weather-widget__inner { gap: 0; }
}


/* ══════════════════════════════════════════════════════════════
   HEADER / NAV — Flottant sous le widget météo
   ══════════════════════════════════════════════════════════════ */

.site-header {
  position: fixed;
  top: var(--ww-h);
  left: 0; right: 0;
  z-index: 50;
  transition: all var(--dur-base) var(--ease-out);
  padding-block: 1.35rem;
}

/* État scrollé : fond verre dépoli */
.site-header[data-scrolled="true"] {
  background: rgba(251,248,242,0.90);
  backdrop-filter: saturate(180%) blur(24px);
  -webkit-backdrop-filter: saturate(180%) blur(24px);
  box-shadow: 0 1px 0 var(--color-border), 0 4px 20px rgba(8,3,3,0.06);
  padding-block: 0.8rem;
}

/* État transparent sur hero */
.site-header[data-transparent="true"]:not([data-scrolled="true"]) {
  color: var(--color-snow);
}
.site-header[data-transparent="true"]:not([data-scrolled="true"]) .nav__link { color: rgba(251,248,242,0.92); }
.site-header[data-transparent="true"]:not([data-scrolled="true"]) .brand__name,
.site-header[data-transparent="true"]:not([data-scrolled="true"]) .brand__sub { color: var(--color-snow); }
.site-header[data-transparent="true"]:not([data-scrolled="true"]) .nav-toggle { color: var(--color-snow); }

.site-header[data-scrolled="true"] .brand__name { color: var(--color-primary); }
.site-header[data-scrolled="true"] .nav__link    { color: var(--color-text); }

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

/* ─── Brand ─── */
.brand {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-decoration: none;
  flex-shrink: 0;
}
.brand__logo img { transition: filter var(--dur-base) var(--ease-out); }

.site-header[data-transparent="true"]:not([data-scrolled="true"]) .brand__logo img {
  filter: brightness(0) invert(1);
}
.site-header[data-scrolled="true"] .brand__logo img {
  filter: brightness(0) saturate(100%) invert(72%) sepia(32%) saturate(520%) hue-rotate(3deg) brightness(92%) contrast(90%);
}
.site-header:not([data-transparent="true"]) .brand__logo img {
  filter: brightness(0) saturate(100%) invert(7%) sepia(40%) saturate(2200%) hue-rotate(348deg) brightness(55%) contrast(95%);
}
.brand:hover .brand__logo img {
  filter: brightness(0) saturate(100%) invert(72%) sepia(32%) saturate(520%) hue-rotate(3deg) brightness(92%) contrast(90%) !important;
}
.page-loader__logo img {
  width: 100%;
  filter: brightness(0) saturate(100%) invert(72%) sepia(32%) saturate(520%) hue-rotate(3deg) brightness(92%) contrast(90%);
}

.brand__text { display: flex; flex-direction: column; line-height: 1.1; }
.brand__name {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 1.08rem;
  color: var(--color-snow);
  letter-spacing: 0.02em;
  line-height: 1;
}
.brand__sub {
  font-family: var(--font-numeric);
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  color: rgba(251,248,242,0.45);
  text-transform: uppercase;
  margin-top: 0.22rem;
}
.site-header[data-scrolled="true"] .brand__sub {
  color: var(--color-text-muted);
}

/* ─── Navigation ─── */
.nav { display: none; }
@media (min-width: 1024px) {
  .nav { display: flex; align-items: center; gap: var(--space-1); }
}

.nav__link {
  display: inline-block;
  padding: 0.65em 1.05em;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text);
  position: relative;
  transition: color var(--dur-fast);
  letter-spacing: 0.02em;
}
.nav__link::after {
  content: "";
  position: absolute;
  left: 1.05em; right: 1.05em; bottom: 0.35em;
  height: 1px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-base) var(--ease-out);
}
.nav__link:hover::after, .nav__link[aria-current="page"]::after { transform: scaleX(1); }
.nav__link[aria-current="page"] { color: var(--color-primary); }
.site-header[data-transparent="true"]:not([data-scrolled="true"]) .nav__link[aria-current="page"] {
  color: var(--color-accent-soft);
}
.nav__cta { margin-left: 0.85rem; }

/* ─── Burger mobile ─── */
.nav-toggle {
  display: grid;
  place-items: center;
  width: 44px; height: 44px;
  color: var(--color-primary);
}
@media (min-width: 1024px) { .nav-toggle { display: none; } }

.nav-toggle__icon {
  position: relative;
  width: 22px; height: 16px;
}
.nav-toggle__icon span {
  position: absolute;
  left: 0; right: 0;
  height: 1.5px;
  background: currentColor;
  border-radius: 2px;
  transition: all var(--dur-base) var(--ease-out);
}
.nav-toggle__icon span:nth-child(1) { top: 0; }
.nav-toggle__icon span:nth-child(2) { top: 7px; }
.nav-toggle__icon span:nth-child(3) { top: 14px; }
.nav-toggle[aria-expanded="true"] .nav-toggle__icon span:nth-child(1) { top: 7px; transform: rotate(45deg); }
.nav-toggle[aria-expanded="true"] .nav-toggle__icon span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] .nav-toggle__icon span:nth-child(3) { top: 7px; transform: rotate(-45deg); }

/* ─── Drawer mobile ─── */
.drawer {
  position: fixed;
  top: 0; bottom: 0; right: 0;
  width: min(380px, 92vw);
  background: var(--color-primary-dark);
  color: var(--color-snow);
  z-index: 70;
  padding: 6rem var(--gutter) 2rem;
  transform: translateX(100%);
  transition: transform 420ms var(--ease-out);
  overflow-y: auto;
}
.drawer[data-open="true"] { transform: translateX(0); }

.drawer__overlay {
  position: fixed; inset: 0;
  background: rgba(6, 1, 1, 0.65);
  z-index: 65;
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms;
  backdrop-filter: blur(6px);
}
.drawer__overlay[data-open="true"] { opacity: 1; pointer-events: auto; }

.drawer__list { display: flex; flex-direction: column; gap: 0.15rem; }
.drawer__link {
  display: block;
  padding: 1.1rem 0;
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 400;
  border-bottom: 1px solid rgba(201,169,110,0.10);
  letter-spacing: 0.01em;
  transition: color var(--dur-fast), padding-left var(--dur-base) var(--ease-out);
}
.drawer__link:hover { color: var(--color-accent); padding-left: 0.5rem; }

.drawer__close {
  position: absolute;
  top: 1.5rem; right: 1.5rem;
  width: 44px; height: 44px;
  border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(201,169,110,0.08);
  border: 1px solid rgba(201,169,110,0.15);
  transition: all var(--dur-fast);
}
.drawer__close:hover { background: rgba(201,169,110,0.15); }


/* ══════════════════════════════════════════════════════════════
   HERO — Cinématique, full-screen vidéo
   ══════════════════════════════════════════════════════════════ */

.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  color: var(--color-snow);
  isolation: isolate;
}

.hero__bg {
  position: absolute; inset: 0;
  z-index: -2;
  overflow: hidden;
}

.hero__img,
.hero__video {
  position: absolute;
  inset: -5%;
  width: 110%; height: 110%;
  object-fit: cover;
  animation: kenBurns 30s ease-in-out infinite alternate;
  filter: saturate(1.08) contrast(1.05);
}
.hero__video { object-position: center 35%; }

@keyframes kenBurns {
  0%   { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.10) translate(-1%, -1.2%); }
}

/* Superposition cinématique multi-couche */
.hero__overlay {
  position: absolute; inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg,
      rgba(6,1,1,0.42) 0%,
      rgba(6,1,1,0.15) 28%,
      rgba(6,1,1,0.08) 50%,
      rgba(6,1,1,0.52) 72%,
      rgba(6,1,1,0.92) 100%
    ),
    radial-gradient(ellipse at 75% 15%, rgba(201,169,110,0.14), transparent 52%);
}
.hero__overlay::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(6,1,1,0.28));
  mix-blend-mode: multiply;
}

/* Flocons */
.hero__particles {
  position: absolute; inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.flake {
  position: absolute;
  top: -10px;
  width: 5px; height: 5px;
  background: rgba(251,248,242,0.75);
  border-radius: 50%;
  filter: blur(0.4px);
  animation: fall linear infinite;
  box-shadow: 0 0 5px rgba(255,255,255,0.35);
}
@keyframes fall {
  0%   { transform: translate3d(0, -10vh, 0); opacity: 0; }
  10%  { opacity: 1; }
  100% { transform: translate3d(36px, 110vh, 0); opacity: 0; }
}

/* Contenu hero */
.hero__content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding: var(--space-9) var(--gutter) var(--space-9);
  padding-top: calc(var(--ww-h) + var(--header-h) + var(--space-9));
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75em;
  padding: 0.6em 1.2em;
  border-radius: var(--radius-full);
  background: rgba(201,169,110,0.08);
  border: 1px solid rgba(201,169,110,0.22);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-family: var(--font-numeric);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: var(--space-5);
  opacity: 0; transform: translateY(20px);
  animation: heroFadeUp 700ms var(--ease-out) 200ms forwards;
  color: var(--color-accent-soft);
}
.hero__badge__dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 0 rgba(201,169,110,0.6);
  animation: pulse 2.2s ease-out infinite;
}
@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(201,169,110,0.65); }
  70%  { box-shadow: 0 0 0 11px rgba(201,169,110,0); }
  100% { box-shadow: 0 0 0 0 rgba(201,169,110,0); }
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 4.5vw + 2rem, 8.5rem);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: var(--color-snow);
  margin-bottom: var(--space-5);
  max-width: 12ch;
  text-shadow: 0 2px 28px rgba(0,0,0,0.22);
}
.hero__title em {
  font-style: italic;
  color: var(--color-accent-soft);
  font-weight: 300;
}

/* Animation lettre par lettre */
.split-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(-1em) rotate(-6deg);
  animation: charDrop 800ms var(--ease-out) forwards;
  animation-delay: calc(var(--char-i, 0) * 48ms + 120ms);
}
@keyframes charDrop { to { opacity: 1; transform: translateY(0) rotate(0); } }

.hero__subtitle {
  font-size: var(--fs-lg);
  font-weight: 300;
  max-width: 54ch;
  margin-bottom: var(--space-6);
  color: rgba(251,248,242,0.82);
  line-height: 1.55;
  opacity: 0; transform: translateY(20px);
  animation: heroFadeUp 700ms var(--ease-out) 850ms forwards;
}
@keyframes heroFadeUp { to { opacity: 1; transform: none; } }

.hero__actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
  opacity: 0; transform: translateY(20px);
  animation: heroFadeUp 700ms var(--ease-out) 1050ms forwards;
}

/* Méta flottante droite */
.hero__meta {
  position: absolute;
  bottom: var(--space-8);
  right: var(--gutter);
  display: none;
  z-index: 2;
  gap: var(--space-7);
}
@media (min-width: 1024px) { .hero__meta { display: flex; } }

.hero__meta__item {
  text-align: right;
  opacity: 0; transform: translateY(20px);
  animation: heroFadeUp 700ms var(--ease-out) 1200ms forwards;
}
.hero__meta__item:nth-child(2) { animation-delay: 1320ms; }
.hero__meta__item:nth-child(3) { animation-delay: 1440ms; }

.hero__meta__num {
  font-family: var(--font-numeric);
  font-size: 2.4rem;
  color: var(--color-accent);
  line-height: 1;
}
.hero__meta__lbl {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(251,248,242,0.58);
  margin-top: 0.35em;
}

/* Scroll cue */
.scroll-cue {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(251,248,242,0.55);
  font-family: var(--font-numeric);
  font-size: 0.65rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  opacity: 0;
  animation: fadeIn 1s ease 1600ms forwards;
}
@keyframes fadeIn { to { opacity: 1; } }
.scroll-cue__chevron {
  width: 22px; height: 22px;
  animation: bounce 2.2s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}


/* ══════════════════════════════════════════════════════════════
   ACCÈS RAPIDE
   ══════════════════════════════════════════════════════════════ */

.quick-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}
@media (min-width: 640px)  { .quick-grid { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 1024px) { .quick-grid { grid-template-columns: repeat(8, 1fr); } }

.quick-card {
  background: var(--color-snow);
  padding: 1.75rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.85rem;
  transition: all var(--dur-base) var(--ease-out);
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 148px;
  justify-content: center;
}
.quick-card::before {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 0;
  background: var(--color-primary-dark);
  transition: height var(--dur-base) var(--ease-out);
  z-index: -1;
}
.quick-card:hover { color: var(--color-snow); }
.quick-card:hover::before { height: 100%; }
.quick-card:hover .quick-card__icon { color: var(--color-accent); }

.quick-card__icon {
  width: 30px; height: 30px;
  color: var(--color-primary);
  transition: color var(--dur-base);
}
.quick-card__label {
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.01em;
}


/* ══════════════════════════════════════════════════════════════
   CARDS ACTUALITÉS
   ══════════════════════════════════════════════════════════════ */

.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}
@media (min-width: 768px)  { .news-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .news-grid { grid-template-columns: repeat(3, 1fr); } }

.news-card {
  background: #fff;
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  transition:
    transform var(--dur-base) var(--ease-out),
    box-shadow var(--dur-base) var(--ease-out);
  transform-style: preserve-3d;
  will-change: transform;
}
.news-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); }

.news-card__media {
  aspect-ratio: 16/10;
  overflow: hidden;
  position: relative;
}
.news-card__img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 750ms var(--ease-out);
}
.news-card:hover .news-card__img { transform: scale(1.06); }

.news-card__date {
  position: absolute;
  top: 1rem; left: 1rem;
  background: rgba(251,248,242,0.95);
  backdrop-filter: blur(8px);
  padding: 0.55rem 0.8rem;
  border-radius: var(--radius-md);
  font-family: var(--font-numeric);
  text-align: center;
  line-height: 0.9;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(28,8,8,0.06);
}
.news-card__date__day {
  font-size: 1.6rem;
  color: var(--color-primary);
  display: block;
}
.news-card__date__month {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent-deep);
}

.news-card__body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
}
.news-card__title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  line-height: 1.18;
  color: var(--color-primary);
  font-weight: 500;
}
.news-card__excerpt {
  font-size: 0.93rem;
  color: var(--color-text-soft);
  flex: 1;
  line-height: 1.6;
}
.news-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.82rem;
}
.news-card__readmore {
  color: var(--color-primary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  transition: gap var(--dur-base), color var(--dur-fast);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
}
.news-card:hover .news-card__readmore { gap: 0.7em; color: var(--color-accent-deep); }


/* ══════════════════════════════════════════════════════════════
   CHIFFRES CLÉS
   ══════════════════════════════════════════════════════════════ */

.stats {
  position: relative;
  padding-block: clamp(5.5rem, 11vw, 10rem);
  color: var(--color-snow);
  isolation: isolate;
  overflow: hidden;
}
.stats__bg {
  position: absolute; inset: 0; z-index: -2;
  overflow: hidden;
}
.stats__bg img {
  width: 100%; height: 120%;
  object-fit: cover;
  filter: brightness(0.5) contrast(1.08) saturate(0.85);
}
.stats__overlay {
  position: absolute; inset: 0; z-index: -1;
  background:
    linear-gradient(180deg, rgba(6,1,1,0.85), rgba(6,1,1,0.75)),
    linear-gradient(115deg, var(--color-primary-dark) 0%, transparent 55%);
}
.stats__head { color: var(--color-snow); }
.stats__head h2 { color: var(--color-snow); font-weight: 300; }

.stats__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}
@media (min-width: 1024px) { .stats__grid { grid-template-columns: repeat(4, 1fr); } }

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-left: 1.75rem;
  border-left: 1px solid rgba(201,169,110,0.22);
}
.stat__num {
  font-family: var(--font-numeric);
  font-size: clamp(3rem, 5vw + 1rem, 5.8rem);
  line-height: 0.85;
  color: var(--color-accent);
  letter-spacing: -0.01em;
}
.stat__num__suffix {
  font-size: 0.42em;
  color: rgba(251,248,242,0.6);
  margin-left: 0.15em;
  vertical-align: 0.45em;
}
.stat__label {
  font-size: 0.95rem;
  color: rgba(251,248,242,0.8);
  line-height: 1.45;
}
.stat__sub {
  font-family: var(--font-numeric);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(201,169,110,0.7);
  font-weight: 400;
}


/* ══════════════════════════════════════════════════════════════
   AGENDA
   ══════════════════════════════════════════════════════════════ */

.agenda-rail {
  display: flex;
  gap: var(--space-5);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0.5rem var(--gutter) 2.5rem;
  margin-inline: calc(-1 * var(--gutter));
  scroll-padding-inline: var(--gutter);
}
.agenda-rail::-webkit-scrollbar { height: 3px; }
.agenda-rail::-webkit-scrollbar-thumb {
  background: var(--color-border-gold);
  border-radius: 999px;
}

.event {
  flex: 0 0 min(380px, 82%);
  scroll-snap-align: start;
  background: #fff;
  border-radius: var(--radius-xl);
  padding: 2rem;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out);
}
.event:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }

.event__date {
  display: inline-flex;
  align-items: baseline;
  gap: 0.55rem;
  font-family: var(--font-numeric);
}
.event__date__day {
  font-size: 3.2rem;
  color: var(--color-primary);
  line-height: 0.85;
}
.event__date__rest {
  display: flex;
  flex-direction: column;
  font-size: 0.82rem;
  color: var(--color-text-soft);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  gap: 0.2rem;
}
.event__date__rest span:first-child { color: var(--color-accent-deep); font-weight: 600; }

.event__title {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 500;
  color: var(--color-primary);
  line-height: 1.18;
}
.event__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  font-size: 0.82rem;
  color: var(--color-text-soft);
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border);
}
.event__meta span { display: inline-flex; gap: 0.4em; align-items: center; }


/* ══════════════════════════════════════════════════════════════
   DÉCOUVERTE — Grille masonry photographique
   ══════════════════════════════════════════════════════════════ */

.discover-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}
@media (min-width: 768px) {
  .discover-grid {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 260px;
  }
  .discover-card:nth-child(1) { grid-column: span 4; grid-row: span 2; }
  .discover-card:nth-child(2) { grid-column: span 2; grid-row: span 1; }
  .discover-card:nth-child(3) { grid-column: span 2; grid-row: span 1; }
  .discover-card:nth-child(4) { grid-column: span 3; grid-row: span 1; }
  .discover-card:nth-child(5) { grid-column: span 3; grid-row: span 1; }
}

.discover-card {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
  min-height: 260px;
  cursor: pointer;
  transition: transform var(--dur-base) var(--ease-out);
}
.discover-card:hover { transform: translateY(-3px); }

.discover-card__img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 900ms var(--ease-out), filter var(--dur-base);
  z-index: -2;
}
.discover-card:hover .discover-card__img { transform: scale(1.08); filter: brightness(0.92); }

.discover-card::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(6,1,1,0.05) 0%,
    rgba(6,1,1,0.38) 55%,
    rgba(6,1,1,0.88) 100%
  );
  z-index: -1;
}

.discover-card__body {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.85rem;
  color: var(--color-snow);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.discover-card__kicker {
  font-family: var(--font-numeric);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  color: var(--color-accent-soft);
  text-transform: uppercase;
}
.discover-card__title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2vw + 0.6rem, 2.1rem);
  font-weight: 400;
  line-height: 1.08;
}
.discover-card__desc {
  font-size: 0.9rem;
  color: rgba(251,248,242,0.8);
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 500ms var(--ease-out), opacity 300ms, margin-top 300ms;
  line-height: 1.5;
}
.discover-card:hover .discover-card__desc {
  max-height: 80px;
  opacity: 1;
  margin-top: 0.45rem;
}

.discover-card.is-curtained::after {
  content: "";
  position: absolute; inset: 0;
  background: var(--color-primary-dark);
  transform-origin: top;
  transform: scaleY(1);
  transition: transform 950ms var(--ease-out);
  z-index: 1;
}
.discover-card.is-curtained.is-revealed::after { transform: scaleY(0); }


/* ══════════════════════════════════════════════════════════════
   MÉTÉO WIDGET (section mid-page)
   ══════════════════════════════════════════════════════════════ */

.weather {
  background: linear-gradient(135deg, #1C0808 0%, #120505 60%, #1A0707 100%);
  color: var(--color-snow);
  border-radius: var(--radius-2xl);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  border: 1px solid rgba(201,169,110,0.12);
  box-shadow: var(--shadow-xl), inset 0 1px 0 rgba(201,169,110,0.08);
}
@media (min-width: 768px) { .weather { grid-template-columns: 200px 1fr auto; } }

.weather::before {
  content: "";
  position: absolute;
  top: -40%; right: -8%;
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(201,169,110,0.12), transparent 65%);
  pointer-events: none;
}

/* Animated weather icon (snow scene) */
.weather__icon {
  width: 150px; height: 150px;
  position: relative;
  flex-shrink: 0;
}
.w-sun {
  position: absolute;
  top: 18px; left: 18px;
  width: 64px; height: 64px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ffe28a, #C9A96E);
  box-shadow: 0 0 40px rgba(201,169,110,0.45);
  animation: sunGlow 3.5s ease-in-out infinite alternate;
}
@keyframes sunGlow { to { box-shadow: 0 0 65px rgba(201,169,110,0.75); } }
.w-sun::before {
  content: "";
  position: absolute; inset: -12px;
  border-radius: 50%;
  background:
    conic-gradient(from 0deg,
      transparent 0deg, rgba(255,226,138,0.38) 6deg, transparent 12deg, transparent 30deg,
      transparent 30deg, rgba(255,226,138,0.38) 36deg, transparent 42deg, transparent 60deg,
      transparent 60deg, rgba(255,226,138,0.38) 66deg, transparent 72deg, transparent 90deg,
      transparent 90deg, rgba(255,226,138,0.38) 96deg, transparent 102deg, transparent 120deg,
      transparent 120deg, rgba(255,226,138,0.38) 126deg, transparent 132deg, transparent 360deg
    );
  animation: sunRotate 22s linear infinite;
  opacity: 0.65;
}
@keyframes sunRotate { to { transform: rotate(360deg); } }

.w-cloud {
  position: absolute;
  width: 82px; height: 30px;
  background: rgba(251,248,242,0.9);
  border-radius: 999px;
  box-shadow: -18px -8px 0 -2px rgba(251,248,242,0.9), 18px -10px 0 -3px rgba(251,248,242,0.9), 0 -15px 0 -2px rgba(251,248,242,0.9);
  top: 58px; left: 36px;
  animation: drift 6.5s ease-in-out infinite alternate;
}
@keyframes drift { 0% { transform: translateX(-4px); } 100% { transform: translateX(8px); } }

.w-flake {
  position: absolute;
  width: 4px; height: 4px;
  background: rgba(251,248,242,0.9);
  border-radius: 50%;
  opacity: 0.9;
  animation: wFall 3.2s linear infinite;
}
.w-flake:nth-child(3) { left: 50px;  top: 90px; animation-delay: 0s; }
.w-flake:nth-child(4) { left: 72px;  top: 90px; animation-delay: 0.85s; }
.w-flake:nth-child(5) { left: 92px;  top: 90px; animation-delay: 1.7s; }
.w-flake:nth-child(6) { left: 114px; top: 90px; animation-delay: 0.45s; }
@keyframes wFall {
  0%   { transform: translateY(0); opacity: 0; }
  20%  { opacity: 1; }
  100% { transform: translateY(42px) translateX(6px); opacity: 0; }
}

.weather__main { display: flex; flex-direction: column; gap: 0.45rem; }
.weather__temp {
  font-family: var(--font-numeric);
  font-size: 4.5rem;
  line-height: 0.9;
}
.weather__temp__deg { color: var(--color-accent); }
.weather__cond { font-size: 1.05rem; opacity: 0.85; font-weight: 300; }
.weather__loc {
  font-family: var(--font-numeric);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-accent-soft);
  opacity: 0.85;
}

.weather__details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  font-size: 0.85rem;
}
.weather__details dt {
  color: rgba(251,248,242,0.45);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-family: var(--font-numeric);
}
.weather__details dd {
  font-family: var(--font-numeric);
  font-size: 1.3rem;
  color: var(--color-snow);
}


/* ══════════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════════ */

.site-footer {
  background: var(--color-primary-dark);
  color: rgba(251,248,242,0.72);
  position: relative;
  padding-top: 0;
}

.footer-wave {
  display: block;
  width: 100%;
  height: 80px;
  background: var(--color-snow);
}
.section--dark + .site-footer .footer-wave,
.stats + .site-footer .footer-wave { background: var(--color-primary); }
.footer-wave svg { width: 100%; height: 100%; display: block; }
.footer-wave path { fill: var(--color-primary-dark); }

.site-footer__inner {
  max-width: var(--container);
  margin-inline: auto;
  padding: 4.5rem var(--gutter) 2.5rem;
  display: grid;
  gap: 3.5rem;
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .site-footer__inner { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
}

.site-footer h4 {
  color: var(--color-snow);
  font-family: var(--font-numeric);
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-bottom: 1.35rem;
  font-weight: 400;
}
.site-footer ul { display: flex; flex-direction: column; gap: 0.8rem; }
.site-footer a { transition: color var(--dur-fast); }
.site-footer a:hover { color: var(--color-accent); }

.site-footer__brand p { font-size: 0.92rem; max-width: 34ch; margin-top: 1rem; line-height: 1.65; }
.site-footer__brand .brand__name { color: var(--color-snow); }
.site-footer__brand .brand__sub { color: rgba(251,248,242,0.38); }

.socials { display: flex; gap: 0.55rem; margin-top: 1.75rem; }
.socials a {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(251,248,242,0.05);
  border: 1px solid rgba(201,169,110,0.12);
  transition: all var(--dur-base);
}
.socials a:hover {
  background: var(--color-accent);
  color: var(--color-primary-dark);
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.site-footer__bottom {
  border-top: 1px solid rgba(251,248,242,0.06);
  padding: 1.75rem var(--gutter);
  max-width: var(--container);
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.78rem;
  color: rgba(251,248,242,0.38);
}
.site-footer__bottom__links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.site-footer__bottom__links button { font-size: inherit; opacity: 0.75; }
.site-footer__bottom__links button:hover { opacity: 1; color: var(--color-accent); }


/* ══════════════════════════════════════════════════════════════
   BACK TO TOP
   ══════════════════════════════════════════════════════════════ */

.back-to-top {
  position: fixed;
  bottom: 1.75rem; right: 1.75rem;
  width: 52px; height: 52px;
  z-index: 40;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  transition: opacity 300ms, transform 300ms;
}
.back-to-top.is-visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
.back-to-top svg { position: absolute; inset: 0; transform: rotate(-90deg); }
.back-to-top__bg { fill: none; stroke: rgba(28,8,8,0.10); stroke-width: 2.5; }
.back-to-top__progress {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 154;
  stroke-dashoffset: 154;
  transition: stroke-dashoffset 100ms linear;
}
.back-to-top__icon { width: 16px; height: 16px; position: relative; z-index: 2; color: var(--color-primary); }
.back-to-top::before {
  content: "";
  position: absolute; inset: 4px;
  border-radius: 50%;
  background: var(--color-snow);
  box-shadow: var(--shadow-md);
}


/* ══════════════════════════════════════════════════════════════
   COOKIE BANNER
   ══════════════════════════════════════════════════════════════ */

.cookie-banner {
  position: fixed;
  bottom: 1.75rem; left: 1.75rem;
  z-index: 80;
  max-width: 420px;
  background: rgba(251,248,242,0.95);
  backdrop-filter: blur(20px);
  border: 1px solid var(--color-border-gold);
  border-radius: var(--radius-xl);
  padding: 1.75rem;
  box-shadow: var(--shadow-xl);
  transform: translateY(calc(100% + 2rem));
  transition: transform 500ms var(--ease-out) 1500ms;
}
.cookie-banner.is-visible { transform: translateY(0); }
.cookie-banner h5 { font-family: var(--font-display); font-size: 1.15rem; margin-bottom: 0.5rem; font-weight: 500; }
.cookie-banner p { font-size: 0.85rem; color: var(--color-text-soft); margin-bottom: 1.25rem; line-height: 1.6; }
.cookie-banner__actions { display: flex; gap: 0.5rem; }
.cookie-banner__actions .btn { font-size: 0.78rem; padding: 0.7em 1.2em; }


/* ══════════════════════════════════════════════════════════════
   LOADER INITIAL
   ══════════════════════════════════════════════════════════════ */

.page-loader {
  position: fixed; inset: 0;
  z-index: 100;
  background: var(--color-primary-dark);
  display: grid; place-items: center;
  transition: opacity 600ms var(--ease-out), visibility 0s 600ms;
}
.page-loader.is-done { opacity: 0; visibility: hidden; }
.page-loader__inner { display: flex; flex-direction: column; align-items: center; gap: 2.5rem; }
.page-loader__logo { width: 120px; height: auto; animation: logoBreathe 2.4s ease-in-out infinite; }
.page-loader__logo svg { fill: currentColor; }
@keyframes logoBreathe {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50%      { opacity: 1; transform: scale(1.04); }
}
.page-loader__progress {
  width: 200px; height: 1px;
  background: rgba(251,248,242,0.08);
  overflow: hidden;
  position: relative;
}
.page-loader__progress::after {
  content: "";
  position: absolute; inset: 0;
  width: 30%;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  animation: loadBar 1.5s ease-in-out infinite;
}
@keyframes loadBar { 0% { transform: translateX(-200%); } 100% { transform: translateX(800%); } }
.page-loader__label {
  font-family: var(--font-numeric);
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  color: rgba(251,248,242,0.45);
  text-transform: uppercase;
}


/* ══════════════════════════════════════════════════════════════
   REVEAL ON SCROLL
   ══════════════════════════════════════════════════════════════ */

.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 700ms var(--ease-out), transform 700ms var(--ease-out);
  transition-delay: var(--reveal-delay, 0ms);
}
.reveal.is-visible { opacity: 1; transform: none; }

.reveal-stagger > * {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 600ms var(--ease-out), transform 600ms var(--ease-out);
}
.reveal-stagger.is-visible > * { opacity: 1; transform: none; }
.reveal-stagger.is-visible > *:nth-child(1)  { transition-delay: 0ms; }
.reveal-stagger.is-visible > *:nth-child(2)  { transition-delay: 75ms; }
.reveal-stagger.is-visible > *:nth-child(3)  { transition-delay: 150ms; }
.reveal-stagger.is-visible > *:nth-child(4)  { transition-delay: 225ms; }
.reveal-stagger.is-visible > *:nth-child(5)  { transition-delay: 300ms; }
.reveal-stagger.is-visible > *:nth-child(6)  { transition-delay: 375ms; }
.reveal-stagger.is-visible > *:nth-child(7)  { transition-delay: 450ms; }
.reveal-stagger.is-visible > *:nth-child(8)  { transition-delay: 525ms; }
