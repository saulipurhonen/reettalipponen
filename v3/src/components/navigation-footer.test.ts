import { describe, it, expect } from 'vitest';
import { UI_STRINGS, DEFAULT_LOCALE } from '../lib/i18n';

describe('Navigation', () => {
  const navItems = UI_STRINGS[DEFAULT_LOCALE].navigation;

  it('has exactly 7 navigation items', () => {
    expect(navItems).toHaveLength(7);
  });

  it('renders all expected Finnish labels', () => {
    const expectedLabels = [
      'Etusivu', 'Keramiikka', 'Installaatio', 'Veistos',
      'Asiakastyö', 'CV', 'Yhteystiedot'
    ];
    const labels = navItems.map(item => item.label);
    expect(labels).toEqual(expectedLabels);
  });

  it('each item has a valid href starting with /', () => {
    navItems.forEach(item => {
      expect(item.href).toBeTruthy();
      expect(item.href.startsWith('/')).toBe(true);
    });
  });
});

describe('Footer', () => {
  it('has a non-empty credit string', () => {
    const { credit } = UI_STRINGS[DEFAULT_LOCALE].footer;
    expect(credit).toBeTruthy();
    expect(credit).toBe('Website by');
  });

  it('current year is a valid 4-digit number', () => {
    const year = new Date().getFullYear();
    expect(year).toBeGreaterThanOrEqual(2024);
    expect(year.toString()).toMatch(/^\d{4}$/);
  });
});
