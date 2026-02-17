# Tech Stack

## v3 (Live — `/v3`)

- **Framework**: Astro 5 (static output, View Transitions via `ClientRouter`)
- **Language**: TypeScript (strict, with `@/*` path alias)
- **Build tool**: Astro's built-in Vite pipeline
- **Styling**: Tailwind CSS 3 + `@tailwindcss/typography` plugin + global `app.css`
- **CMS**: TinaCMS (Git-backed, markdown content in `content/fi/`)
- **Animations**: GSAP (scroll-reveal via IntersectionObserver, footer fade-in)
- **Markdown**: `gray-matter` for frontmatter parsing, `marked` for HTML rendering
- **Contact form**: StaticForms (`api.staticforms.xyz`)
- **Sitemap**: `@astrojs/sitemap`
- **Testing**: Vitest 3 + fast-check (property-based)
- **Deployment**: GitHub Actions → GitHub Pages (from `v3/dist`)

### Fonts

- **Display**: Caveat (Google Fonts, used for `h1`)
- **Body**: Inter (Google Fonts)

### Custom Tailwind theme

Defined in `v3/tailwind.config.mjs`:

- `surface` / `surface-raised` / `surface-elevated` — dark green background tones
- `accent` / `accent-light` / `accent-dark` — green accent palette
- `gold` — highlight color
- `text` / `text-muted` / `text-dim` — light text hierarchy
- `font-display` — Caveat cursive

### Common commands (run from `v3/`)

```bash
npm run dev        # Start TinaCMS + Astro dev server
npm run build      # TinaCMS build + Astro production build
npm run preview    # Preview production build
npm run check      # Astro/TS type checking
npm run test       # Vitest (single run)
```

### Environment variables (v3)

Stored in `v3/.env`:

- `TINA_TOKEN` / `TINA_CLIENT_ID` — TinaCMS cloud auth
- `STATIC_FORMS_API_KEY` — StaticForms contact form API key

## v2 (Previous — `/v2`)

- **Framework**: SvelteKit 2 with Svelte 4
- **Language**: TypeScript (with some JS in Svelte components)
- **Build tool**: Vite 5
- **Styling**: Tailwind CSS 3 + PostCSS + scoped `<style>` blocks (SCSS supported via `sass`)
- **CMS**: Contentful (GraphQL API for server-side fetches, JS SDK available)
- **Animations**: GSAP
- **Rich text**: `@contentful/rich-text-html-renderer` for rendering Contentful rich text to HTML
- **Adapter**: `@sveltejs/adapter-auto`
- **Linting**: ESLint with `@typescript-eslint` + `eslint-plugin-svelte` + Prettier integration
- **Formatting**: Prettier with `prettier-plugin-svelte`

### Prettier config (v2)

- 2-space indent, no tabs
- Single quotes, trailing commas (`all`), 100 char print width

### Common commands (run from `v2/`)

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build
npm run check      # Svelte/TS type checking
npm run lint       # ESLint + Prettier check
npm run format     # Auto-format with Prettier
npm run setup      # Contentful space setup script
```

### Environment variables (v2)

Contentful credentials are in `v2/.env`:

- `CONTENTFUL_SPACE_ID` / `CONTENTFUL_ACCESS_TOKEN` — used server-side via `$env/static/private`
- `VITE_CONTENTFUL_SPACE_ID` / `VITE_CONTENTFUL_DELIVERY_API_TOKEN` — used client-side via `import.meta.env`

## v1 (Legacy — root `/`)

- **Framework**: Gatsby 2 (React 17)
- **Styling**: styled-components + Bootstrap 4 + Material UI 4
- **Fonts**: Google Fonts (Quicksand)
- **Images**: Static local files with gatsby-image/sharp pipeline

### Common commands (root)

```bash
npm run develop    # Start Gatsby dev server
npm run build      # Production build
npm run format     # Prettier
npm run deploy     # Build + deploy to GitHub Pages
```
