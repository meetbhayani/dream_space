/**
 * Main navigation configurations including active paths for Desktop, Mobile, and Footer links.
 */
export const NAV_LINKS = [
  { label: 'Vision', href: '/' },
  { label: 'Craftsmanship', href: '/services' },
  { label: 'Transformation', href: '/projects' },
  { label: 'Inspiration', href: '/gallery' },
  { label: 'Story', href: '/about' },
  { label: 'Journal', href: '/blog' },
  { label: 'Conversation', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  studio: [
    { label: 'The Studio', href: '/about' },
    { label: 'Design Team', href: '/team' },
    { label: 'Craft & Philosophy', href: '/about#philosophy' },
    { label: 'Careers', href: '/careers' },
  ],
  services: [
    { label: 'Residential Design', href: '/services#residential' },
    { label: 'Commercial Spaces', href: '/services#commercial' },
    { label: 'Turnkey Execution', href: '/services#turnkey' },
    { label: 'Custom Furniture', href: '/services#furniture' },
  ],
  inspiration: [
    { label: 'Portfolios', href: '/projects' },
    { label: 'Visual Gallery', href: '/gallery' },
    { label: 'Design Journal', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
} as const;

export const NAVIGATION_CONFIG = {
  main: NAV_LINKS,
  footer: FOOTER_LINKS,
  cta: {
    label: 'Book Consultation',
    href: '/book-consultation',
  },
} as const;
