# Project Structure

```
/                           # v1 Gatsby site (legacy, do not modify unless asked)
├── src/
│   ├── components/         # React components (layout, header, seo, image)
│   ├── images/             # Static images (large + thumbnails)
│   └── pages/              # Gatsby page components (index, works, cv, contact, etc.)
├── gatsby-config.js        # Gatsby plugins and site metadata
├── gatsby-node.js          # Build-time page creation
└── public/                 # Gatsby build output (committed, do not edit directly)

/v2                         # v2 SvelteKit site (active development)
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
```

## Key patterns

- **Data loading**: Server-side via `+page.server.ts` files that call Contentful's GraphQL API using `contentfulFetch.ts`. Query strings are built in `queries.ts`.
- **Components**: Shared components live in `v2/src/lib/components/`. Route-specific components (like `Header.svelte`) live alongside their route.
- **Navigation**: Centralized in `v2/src/lib/constants/navigation.ts`. The layout handles GSAP-based page transitions.
- **Responsive**: `isMobileState` store tracks viewport width against `MOBILE_BREAKPOINT` (768px). Components subscribe to this store for responsive behavior.
- **Animations**: GSAP timelines are used throughout for page transitions, content reveals, and footer animations.
- **Works pages**: Use SvelteKit dynamic routes (`[slug]`) with slugs: `ceramic`, `installation`, `sculpture`, `customer`.
