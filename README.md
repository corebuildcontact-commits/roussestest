# Mairie des Rousses — Site officiel

Site institutionnel pour la commune des Rousses (Haut-Jura, 39220).
Frontend HTML/CSS/JS pur, structuré pour conversion WordPress.

## Structure

```
├── index.html             Homepage
├── actualites.html        Listing actualités
├── css/
│   ├── base.css           Reset, tokens, typo, utilitaires
│   ├── components.css     Header, hero, cards, footer, widgets
│   └── actualites.css     Spécifique listing actualités
├── js/
│   ├── main.js            Nav, drawer, alertes, smooth scroll, back-to-top
│   ├── animations.js      Splitting, reveal, compteurs, tilt, particules
│   ├── tweaks-panel.jsx   Composants Tweaks (réglages live)
│   └── tweaks-app.jsx     Configuration Tweaks de la page
```

## Direction artistique

- **Palette** : `#1B3A5C` (bleu nuit Jura), `#2E7D54` (vert forêt), `#E8A020` (or couchant), `#F5F7FA` (neige)
- **Typographie** : Playfair Display (titres), DM Sans (corps), Bebas Neue (chiffres)

## Conversion WordPress

Le code est annoté pour faciliter le portage en thème :

- **Zones dynamiques** marquées par des commentaires `<!-- WP: ... -->`
  - `<!-- WP: the_title() -->` — titre de page/article
  - `<!-- WP: the_content() -->` — contenu
  - `<!-- WP: wp_nav_menu( 'primary' ) -->` — menu principal
  - `<!-- WP: have_posts() loop -->` — boucle d'articles

- **Conventions BEM** : `.news-card__title`, `.hero__subtitle`, `.brand__mark`...
- **CSS découpé** par responsabilité (à charger avec `wp_enqueue_style`)
- **JS dans des fichiers séparés** (à charger avec `wp_enqueue_script`)
- **Polices Google Fonts** déjà via CDN (compatible)
- **Images** à remplacer par `the_post_thumbnail()` ou ACF
- **Tweaks panel** à retirer en production (outil de design uniquement)

### Mapping suggéré

| HTML actuel              | Template WP             |
|--------------------------|-------------------------|
| `index.html` hero        | `front-page.php`        |
| `actualites.html` listing| `archive.php` ou `home.php` |
| `news-card`              | `template-parts/card-news.php` |
| `event` (agenda)         | CPT `event` + ACF       |
| `quick-card`             | `nav_menu` "accès rapide" + custom walker |

## Accessibilité

- Skip link, landmarks ARIA, focus visible, `prefers-reduced-motion`
- Mode contraste élevé (toggle dans le footer)
- Alt text sur toutes les images
- Touch targets ≥ 44×44px

## Performance

- Images `loading="lazy"` avec `width`/`height`
- CSS `<link>` sans blocage critique
- Polices via `font-display: swap`
- Animations basées sur transform/opacity (composées GPU)
- IntersectionObserver pour le reveal-on-scroll

## Tweaks (panneau de réglages)

La homepage embarque un panneau **Tweaks** activable depuis la barre d'outils de design.
Permet de tester en direct : palette, polices, densité d'effets, flocons, bandeau alerte.
À retirer dans le thème WordPress final.

## À venir

- Page article unique (`article.html`)
- Page contact (`contact.html`)
- Templates WordPress (PHP)
