# Project Structure

```
/v3                         # v3 Astro site (live, current development target)
├── astro.config.mjs        # Astro config (tailwind, sitemap, site URL)
├── tailwind.config.mjs     # Tailwind theme (custom colors, fonts, screens)
├── vitest.config.ts        # Vitest config
├── tsconfig.json           # TypeScript strict config with @/* alias
├── .env                    # TinaCMS + StaticForms credentials
├── content/
│   └── fi/                 # Finnish markdown content (Git-backed via TinaCMS)
│       ├── home/index.md
│       ├── works/          # ceramic.md, installation.md, sculpture.md, customer.md
│       ├── cv/index.md
│       ├── statement/index.md
│       └── contact/index.md
├── tina/
│   ├── config.ts           # TinaCMS schema (collections: home, works, cv, contact, statement)
│   └── __generated__/      # Auto-generated TinaCMS types and queries
├── src/
│   ├── app.css             # Tailwind directives + global styles + prose-theme
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML shell, SEO, nav, footer, lightbox, GSAP animations, View Transitions
│   ├── components/
│   │   ├── Navigation.astro  # Sticky header, desktop + mobile nav, GSAP mobile menu
│   │   ├── Footer.astro      # Site footer with Instagram + credits
│   │   ├── Gallery.astro     # Works image grid with lightbox triggers
│   │   └── SEO.astro         # OpenGraph + Twitter meta tags
│   ├── lib/
│   │   ├── content.ts        # Markdown reader (gray-matter + marked)
│   │   └── i18n.ts           # Navigation labels, locale config, MOBILE_BREAKPOINT
│   └── pages/
│       ├── index.astro       # Home (hero image + intro content)
│       ├── cv.astro          # CV (structured sections from frontmatter)
│       ├── statement.astro   # Artist statement (rich text)
│       ├── contact.astro     # Contact form (StaticForms)
│       └── works/
│           └── [slug].astro  # Dynamic works pages (getStaticPaths)
├── public/
│   ├── images/             # Full-size + thumbnail images (jpg, webp)
│   ├── admin/              # TinaCMS admin UI (auto-generated)
│   ├── CNAME               # Custom domain: reettalipponen.art
│   └── favicon files
└── dist/                   # Astro build output (deployed to GitHub Pages)

/v2                         # v2 SvelteKit site (previous version)
├── src/
│   ├── app.html            # HTML shell
│   ├── app.css             # Tailwind directives
│   ├── app.d.ts            # App-level type declarations
│   ├── lib/
│   │   ├── components/     # Shared Svelte components (Footer, Meta, PageHeader, PageContent)
│   │   ├── constants/      # App constants (navigation items, breakpoints)
│   │   ├── images/         # Static images used in components
│   │   ├── contentfulClient.ts   # Contentful JS SDK client (client-side)
│   │   ├── contentfulFetch.ts    # Contentful GraphQL fetch helper (server-side)
│   │   ├── queries.ts      # GraphQL query builders
│   │   └── stores.ts       # Svelte writable stores (menuOpen, isMobileState)
│   └── routes/
│       ├── +layout.svelte  # Root layout (nav, GSAP page transitions, responsive logic)
│       ├── +page.svelte    # Home page
│       ├── +page.server.ts # Home page server load (Contentful fetch)
│       ├── Header.svelte   # Desktop + mobile navigation (route-level component)
│       ├── styles.css      # Global route styles
│       ├── contact/        # Contact page (+page.svelte, +page.server.ts, +page.ts)
│       ├── cv/             # CV page (+page.svelte, +page.server.ts, +page.ts)
│       └── works/
│           └── [slug]/     # Dynamic works pages (ceramic, installation, sculpture, customer)
├── contentful/
│   └── setup.js            # Contentful space provisioning script
├── static/                 # Static assets (favicon, robots.txt)
├── svelte.config.js        # SvelteKit config (adapter-auto, vitePreprocess)
├── vite.config.ts          # Vite config
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
└── .env                    # Contentful credentials

/                           # v1 Gatsby site (legacy, do not modify unless asked)
├── src/
│   ├── components/         # React components (layout, header, seo, image)
│   ├── images/             # Static images (large + thumbnails)
│   └── pages/              # Gatsby page components (index, works, cv, contact, etc.)
├── gatsby-config.js        # Gatsby plugins and site metadata
├── gatsby-node.js          # Build-time page creation
└── public/                 # Gatsby build output (committed, do not edit directly)
```

## Key patterns (v3)

- **Content**: Markdown files in `content/fi/` with YAML frontmatter. Parsed at build time by `src/lib/content.ts` using `gray-matter` + `marked`. TinaCMS provides an admin UI for editing.
- **Pages**: Astro file-based routing. Works pages use `getStaticPaths()` for static generation of slug-based routes.
- **Layout**: Single `BaseLayout.astro` wraps all pages with SEO, navigation, footer, lightbox, and View Transitions (`ClientRouter`).
- **Components**: Shared Astro components in `src/components/`. No client-side framework — interactivity via `<script>` tags with vanilla JS and GSAP.
- **Navigation**: Labels and routes defined in `src/lib/i18n.ts`. Sticky header hides on scroll down, shows on scroll up.
- **Animations**: GSAP-powered `.reveal` class elements animate in via IntersectionObserver. View Transitions handle page-to-page slides. `prefers-reduced-motion` is respected.
- **Lightbox**: Global lightbox in `BaseLayout.astro` with keyboard nav, focus trapping, and group navigation. Uses `is:inline` script to persist across View Transitions.
- **Works pages**: Dynamic `[slug].astro` with slugs: `ceramic`, `installation`, `sculpture`, `customer`. Each has a `Gallery` component rendering work items with thumbnails.
- **Deployment**: GitHub Actions workflow builds TinaCMS + Astro, deploys `v3/dist` to GitHub Pages. Custom domain: `reettalipponen.art`.
