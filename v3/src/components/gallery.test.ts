import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { renderGalleryItems, type GalleryItem } from './gallery-render';

// Feature: v3-astro-portfolio, Property 4: Works page renders all gallery items
// **Validates: Requirements 4.2, 4.6**

describe('Gallery rendering property test', () => {
  // Generate safe strings (no HTML special chars)
  const safeString = fc
    .string({ minLength: 1 })
    .filter((s) => !s.includes('<') && !s.includes('>') && !s.includes('"') && !s.includes('&'));

  const galleryItemArb: fc.Arbitrary<GalleryItem> = fc.record({
    image: safeString.map((s) => `/images/${s}.jpg`),
    title: safeString,
  });

  it('Property 4: every gallery item image and title appears in rendered output', () => {
    fc.assert(
      fc.property(fc.array(galleryItemArb, { minLength: 1, maxLength: 20 }), (items) => {
        const html = renderGalleryItems(items);

        for (const item of items) {
          // Each item's image src should appear
          expect(html).toContain(`src="${item.image}"`);
          // Each item's title should appear as alt text
          expect(html).toContain(`alt="${item.title}"`);
          // Each item's title should appear as text
          if (item.title) {
            expect(html).toContain(`<p>${item.title}</p>`);
          }
        }
      }),
      { numRuns: 100 },
    );
  });

  it('Property 4: empty gallery renders no items', () => {
    const html = renderGalleryItems([]);
    expect(html).toBe('');
  });
});
