# Design Context

## Users

Primary audience is art funders, fellow artists, and gallery curators — people who evaluate creative work professionally. They expect a polished, intentional presentation that signals the artist takes their practice seriously. They browse portfolios frequently and can spot generic templates instantly.

## Brand Personality

**Creative · Talented · Welcoming**

The artist (Reetta Lipponen) works across ceramics, installations, and sculpture. She's inspired by feeling and impulse rather than rigid planning — letting works find their own form. The site should reflect that organic, intuitive creative process while maintaining professional credibility.

Tone: Warm but confident. Not cold or corporate. Not whimsical or childish. Think "welcoming studio visit with someone whose work speaks for itself."

Emotional goals: Earthy groundedness, a sense of craft and materiality, with moments of genuine "wow" that reward attention.

## Aesthetic Direction

- **Theme**: Dark mode with earthy, organic tones (deep greens, warm golds, natural textures)
- **Feel**: Gallery-quality presentation meets earthy warmth — not sterile white-cube, not rustic craft fair
- **Typography**: Caveat (display/h1) for handwritten personality, Inter (body) for clean readability
- **Color palette**: Deep forest greens, warm gold accents, soft natural light tones — grounded in nature
- **Motion**: Purposeful, organic animations that feel like natural reveals — not flashy tech demos
- **"Wow" factor**: The site should have moments that make curators pause — dramatic hero treatments, confident scale, unexpected spatial choices
- **Anti-references**: Generic portfolio templates, Squarespace defaults, overly minimal "white box" gallery sites, anything that looks like every other artist website
- **Bigger shifts welcome**: Open to bold visual changes as long as the earthy, professional core remains

## Design Principles

1. **Let the work breathe**: Art is the hero. Design serves the work, never competes with it. Generous space, confident scale.
2. **Earned confidence**: Professional doesn't mean safe. Use dramatic typography, bold spatial choices, and intentional asymmetry to signal creative authority.
3. **Organic materiality**: Everything should feel grounded — earthy colors, natural motion curves, textures that evoke clay and earth rather than glass and chrome.
4. **Warmth over distance**: The site should feel like an invitation, not a barrier. Welcoming without being casual.
5. **Memorable moments**: At least one element per page should make someone pause. A dramatic scale shift, an unexpected layout choice, a beautiful transition.

## Technical Constraints

- Astro 5 static site, Tailwind CSS 3, GSAP animations
- WCAG 2.1 AA compliance required
- `prefers-reduced-motion` must be respected
- Content in Finnish
- Images are pre-optimized (jpg/webp with thumbnails)
