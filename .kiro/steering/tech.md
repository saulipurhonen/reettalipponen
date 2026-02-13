# Tech Stack

## v2 (Active — `/v2`)

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
