import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { renderSEOTags } from './seo-render';

// Feature: v3-astro-portfolio, Property 1: SEO meta tags are complete for all pages
// **Validates: Requirements 3.3, 6.3, 7.3, 7.4**

describe('SEO meta tags property test', () => {
  const safeString = fc.string({ minLength: 1 }).filter(
    (s) => !s.includes('<') && !s.includes('>') && !s.includes('"')
  );

  it('Property 1: rendered output contains correct title, description, and OG tags for all inputs', () => {
    fc.assert(
      fc.property(safeString, safeString, (title, description) => {
        const html = renderSEOTags(title, description);

        // Verify <title> tag
        expect(html).toContain(`<title>${title}</title>`);

        // Verify meta description
        expect(html).toContain(`<meta name="description" content="${description}" />`);

        // Verify all three OG tags
        expect(html).toContain(`<meta property="og:title" content="${title}" />`);
        expect(html).toContain(`<meta property="og:description" content="${description}" />`);
        expect(html).toContain(`<meta property="og:type" content="website" />`);
      }),
      { numRuns: 100 }
    );
  });

  it('Property 1: custom ogType is rendered correctly', () => {
    fc.assert(
      fc.property(safeString, safeString, safeString, (title, description, ogType) => {
        const html = renderSEOTags(title, description, ogType);

        expect(html).toContain(`<title>${title}</title>`);
        expect(html).toContain(`<meta name="description" content="${description}" />`);
        expect(html).toContain(`<meta property="og:title" content="${title}" />`);
        expect(html).toContain(`<meta property="og:description" content="${description}" />`);
        expect(html).toContain(`<meta property="og:type" content="${ogType}" />`);
      }),
      { numRuns: 100 }
    );
  });
});
