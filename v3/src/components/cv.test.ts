import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { renderCvSections, type CvSection } from './cv-render';

// Feature: v3-astro-portfolio, Property 5: CV page renders all sections and entries
// **Validates: Requirements 5.1, 5.2**

describe('CV rendering property test', () => {
  const safeString = fc
    .string({ minLength: 1 })
    .filter(
      (s) => !s.includes('<') && !s.includes('>') && !s.includes('"') && !s.includes('&'),
    );

  const cvEntryArb = fc.record({
    date: fc.option(safeString, { nil: undefined }),
    content: safeString,
  });

  const cvSectionArb: fc.Arbitrary<CvSection> = fc.record({
    sectionTitle: safeString,
    entries: fc.array(cvEntryArb, { minLength: 1, maxLength: 10 }),
  });

  it('Property 5: all section titles and entry content appear in rendered output', () => {
    fc.assert(
      fc.property(
        fc.array(cvSectionArb, { minLength: 1, maxLength: 5 }),
        (sections) => {
          const html = renderCvSections(sections);

          for (const section of sections) {
            // Section title must appear
            expect(html).toContain(section.sectionTitle);

            for (const entry of section.entries) {
              // Entry content must appear
              expect(html).toContain(entry.content);
              // If entry has a date, it must appear
              if (entry.date) {
                expect(html).toContain(entry.date);
              }
            }
          }
        },
      ),
      { numRuns: 100 },
    );
  });

  it('Property 5: empty sections array renders empty string', () => {
    const html = renderCvSections([]);
    expect(html).toBe('');
  });
});
