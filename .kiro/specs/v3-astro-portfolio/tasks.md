# Implementation Plan: V3 Astro Portfolio

## Overview

Build the v3 portfolio site from scratch in the `v3/` directory using Astro.js, TinaCMS, Tailwind CSS, GSAP, and TypeScript. Tasks are ordered so each step builds on the previous, with content and components wired together incrementally.

## Tasks

- [x] 1. Initialize Astro project with TinaCMS and Tailwind CSS

  - [x] 1.1 Scaffold a new Astro project in `v3/` with TypeScript support

    - Run `npm create astro@latest` (or equivalent) targeting `v3/`
    - Configure `tsconfig.json` for strict TypeScript
    - Add `@astrojs/tailwind` and `@astrojs/sitemap` integrations to `astro.config.mjs`
    - Create `tailwind.config.mjs` with mobile-first breakpoints
    - Create `v3/src/app.css` with Tailwind directives
    - _Requirements: 1.1, 1.4_

  - [x] 1.2 Initialize TinaCMS with content schema

    - Run `npx @tinacms/cli@latest init` in `v3/`
    - Create `tina/config.ts` with all four collections (home, works, cv, contact) using `content/fi/` paths as defined in the design
    - Configure media storage to `public/images/`
    - Configure build output to `public/admin/`
    - _Requirements: 1.2, 8.1, 8.2, 8.4_

  - [x] 1.3 Create seed content files

    - Create `content/fi/home/index.md` with placeholder heading and body
    - Create `content/fi/works/ceramic.md`, `installation.md`, `sculpture.md`, `customer.md` with placeholder gallery items
    - Create `content/fi/cv/index.md` with placeholder sections and entries
    - Create `content/fi/contact/index.md` with placeholder contact content
    - _Requirements: 8.3, 8.4_

  - [x] 1.4 Create i18n constants file
    - Create `src/lib/i18n.ts` with `DEFAULT_LOCALE`, `Locale` type, `UI_STRINGS` (fi + en navigation labels, footer strings), and `MOBILE_BREAKPOINT`
    - _Requirements: 10.1, 10.5_

- [x] 2. Implement shared layout and components

  - [x] 2.1 Create SEO component

    - Create `src/components/SEO.astro` that renders `<title>`, `<meta name="description">`, and Open Graph tags (`og:title`, `og:description`, `og:type`)
    - Accept `title`, `description`, and optional `ogType` props
    - _Requirements: 3.3, 6.3, 7.3, 7.4_

  - [x] 2.2 Write property test for SEO component

    - **Property 1: SEO meta tags are complete for all pages**
    - Use `fast-check` to generate random title/description strings and verify rendered output contains correct `<title>`, `<meta>`, and OG tags
    - **Validates: Requirements 3.3, 6.3, 7.3, 7.4**

  - [x] 2.3 Create Footer component

    - Create `src/components/Footer.astro` displaying current year, "Reetta Lipponen", and credit link
    - Use `UI_STRINGS[DEFAULT_LOCALE].footer` for translatable text
    - _Requirements: 2.9_

  - [x] 2.4 Create Navigation component

    - Create `src/components/Navigation.astro` with desktop horizontal nav and mobile hamburger menu
    - Read navigation items from `UI_STRINGS[DEFAULT_LOCALE].navigation`
    - Set `aria-current="page"` on the active link based on `Astro.url.pathname`
    - Add inline `<script>` for mobile menu toggle (open/close overlay)
    - Desktop nav hidden below 768px, mobile hamburger hidden at 768px+
    - _Requirements: 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

  - [x] 2.5 Create BaseLayout

    - Create `src/layouts/BaseLayout.astro` that wraps all pages
    - Accept `title`, `description`, and optional `locale` props
    - Set `<html lang={locale}>` (default `fi`)
    - Include `<ViewTransitions />` from `astro:transitions`
    - Render `<SEO>`, `<Navigation>`, `<main><slot /></main>`, `<Footer>`
    - _Requirements: 2.1, 10.4_

  - [x] 2.6 Write unit tests for Navigation and Footer
    - Test Navigation renders all 7 expected Finnish labels
    - Test Footer contains current year and artist name
    - _Requirements: 2.2, 2.9_

- [x] 3. Checkpoint - Verify project builds and layout renders

  - Ensure `npm run build` succeeds in `v3/`
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Implement page routes

  - [x] 4.1 Implement Home page

    - Create `src/pages/index.astro` using `BaseLayout`
    - Fetch home content from TinaCMS client (`client.queries.home`)
    - Render heading and rich text body
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 4.2 Implement Works pages with Gallery

    - Create `src/components/Gallery.astro` accepting `items` array, rendering responsive grid (single col mobile, multi-col desktop)
    - Create `src/pages/works/[slug].astro` with `getStaticPaths()` returning ceramic, installation, sculpture, customer
    - Fetch works content from TinaCMS client, render category title and Gallery
    - Each gallery item renders `<img>` with `alt` text and title
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [x] 4.3 Write property test for Gallery rendering

    - **Property 4: Works page renders all gallery items**
    - Use `fast-check` to generate random arrays of gallery items (image path + title), verify each item's image and title appear in rendered output
    - **Validates: Requirements 4.2, 4.6**

  - [x] 4.4 Implement CV page

    - Create `src/pages/cv.astro` using `BaseLayout`
    - Fetch CV content from TinaCMS client
    - Render sections with titles, entries with optional dates and content
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 4.5 Write property test for CV rendering

    - **Property 5: CV page renders all sections and entries**
    - Use `fast-check` to generate random CV sections with entries (some with dates, some without), verify all section titles, entry content, and dates appear in output
    - **Validates: Requirements 5.1, 5.2**

  - [x] 4.6 Implement Contact page
    - Create `src/pages/contact.astro` using `BaseLayout`
    - Fetch contact content from TinaCMS client
    - Render rich text body
    - _Requirements: 6.1, 6.2, 6.3_

- [ ] 5. Checkpoint - Verify all pages render with content

  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. SEO, static assets, and animations

  - [ ] 6.1 Configure sitemap and robots.txt

    - Ensure `@astrojs/sitemap` is configured in `astro.config.mjs` with the site URL
    - Create `public/robots.txt` allowing all crawlers
    - _Requirements: 7.1, 7.2_

  - [ ] 6.2 Add GSAP animations
    - Install `gsap` package
    - Add a client-side `<script>` in `BaseLayout.astro` that:
      - Animates `.reveal` elements on viewport entry (fade + slide up) using IntersectionObserver + GSAP
      - Animates footer fade-in on page load
      - Hooks into Astro View Transitions lifecycle events for page transition animations (fade out old content, fade in new)
    - Add `reveal` class to content elements across pages
    - _Requirements: 2.1 (layout consistency with animations)_

- [ ] 7. Final checkpoint - Full build and test verification
  - Run `npm run build` in `v3/` and verify static output
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- All tasks including tests are required
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties using `fast-check`
- Unit tests validate specific examples and edge cases using Vitest
- All commands should be run from the `v3/` directory
