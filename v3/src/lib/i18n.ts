export const DEFAULT_LOCALE = 'fi' as const;
export type Locale = 'fi' | 'en';

export const UI_STRINGS: Record<
  Locale,
  {
    navigation: Array<{ label: string; href: string }>;
    worksSubnav: Array<{ label: string; href: string }>;
    footer: { credit: string };
  }
> = {
  fi: {
    navigation: [
      { label: 'Etusivu', href: '/' },
      { label: 'Keramiikka', href: '/works/ceramic' },
      { label: 'Installaatio', href: '/works/installation' },
      // { label: 'Veistos', href: '/works/sculpture' },
      { label: 'Asiakastyö', href: '/works/customer' },
      { label: 'CV', href: '/cv' },
      { label: 'Artist statement', href: '/statement' },
      { label: 'Yhteystiedot', href: '/contact' },
    ],
    worksSubnav: [
      { label: 'Keramiikka', href: '/works/ceramic' },
      { label: 'Installaatio', href: '/works/installation' },
      { label: 'Veistos', href: '/works/sculpture' },
      { label: 'Asiakastyö', href: '/works/customer' },
    ],
    footer: { credit: 'Website by' },
  },
  en: {
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'Ceramics', href: '/works/ceramic' },
      { label: 'Installation', href: '/works/installation' },
      // { label: 'Sculpture', href: '/works/sculpture' },
      { label: 'Custom Work', href: '/works/customer' },
      { label: 'CV', href: '/cv' },
      { label: 'Artist Statement', href: '/statement' },
      { label: 'Contact', href: '/contact' },
    ],
    worksSubnav: [
      { label: 'Ceramics', href: '/works/ceramic' },
      { label: 'Installation', href: '/works/installation' },
      { label: 'Sculpture', href: '/works/sculpture' },
      { label: 'Custom Work', href: '/works/customer' },
    ],
    footer: { credit: 'Website by' },
  },
};

export const MOBILE_BREAKPOINT = 768;
