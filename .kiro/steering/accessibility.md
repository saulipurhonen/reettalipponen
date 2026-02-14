# Accessibility

All pages and components must meet **WCAG 2.1 AA** compliance.

## Key requirements

- All interactive elements must be keyboard accessible
- Focus must be visible (`:focus-visible` outline)
- Color contrast ratio: at least 4.5:1 for normal text, 3:1 for large text
- All images must have meaningful `alt` text (or `alt=""` for decorative images)
- Form inputs must have associated labels
- ARIA landmarks and roles used where appropriate
- Skip-to-content link on every page
- Focus trapping in modals/overlays (lightbox, mobile menu)
- `prefers-reduced-motion` respected for animations
- Status messages use `aria-live` regions
- Interactive elements have minimum 44×44px touch target size
