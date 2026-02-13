export const DEFAULT_LOCALE = 'fi' as const;
export type Locale = 'fi' | 'en';

export const UI_STRINGS: Record<
  Locale,
  {
    navigation: Array<{ label: string; href: string }>;
    footer: { credit: string };
  }
> = {
  fi: {
    navigation: [
      { label: 'Etusivu', href: '/' },
      { label: 'Keramiikka', href: '/works/ceramic' },
      { label: 'Installaatio', href: '/works/installation' },
      { label: 'Veistos', href: '/works/sculpture' },
      { label: 'Asiakastyö', href: '/works/customer' },
      { label: 'CV', href: '/cv' },
      { label: 'Yhteystiedot', href: '/contact' },
    ],
    footer: { credit: 'Website by' },
  },
  en: {
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'Ceramics', href: '/works/ceramic' },
      { label: 'Installation', href: '/works/installation' },
      { label: 'Sculpture', href: '/works/sculpture' },
      { label: 'Custom Work', href: '/works/customer' },
      { label: 'CV', href: '/cv' },
      { label: 'Contact', href: '/contact' },
    ],
    footer: { credit: 'Website by' },
  },
};

export const MOBILE_BREAKPOINT = 768;
