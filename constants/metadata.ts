import { SITE_CONFIG } from './site';

/**
 * Standard default SEO values structure matching SEO_GUIDE.md constraints.
 */
export const DEFAULT_METADATA = {
  title: {
    default: 'Luxury Interior Designers in Ahmedabad & Gandhinagar | Dream Space Studio',
    template: '%s | Dream Space Studio',
  },
  description: 'Transform your spaces with luxury interior design and turnkey architectural solutions in Ahmedabad and Gandhinagar. Elevate your living experiences with Dream Space Studio.',
  keywords: [
    'Luxury Interior Design',
    'Best Interior Designer in Ahmedabad',
    'Best Interior Designer in Gandhinagar',
    'Residential Interior Design',
    'Commercial Interior Design',
    'Villa Interior Design Ahmedabad',
    'Turnkey Interior Solutions Gujarat',
    'Modular Kitchens Ahmedabad',
    'Office Interior Designers Gandhinagar',
  ],
  authors: [{ name: SITE_CONFIG.company.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.company.name,
  publisher: SITE_CONFIG.company.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.company.name,
    title: 'Luxury Interior Designers in Ahmedabad & Gandhinagar | Dream Space Studio',
    description: 'Transform your spaces with luxury interior design and turnkey architectural solutions in Ahmedabad and Gandhinagar. Elevate your living experiences with Dream Space Studio.',
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'Dream Space Studio - Luxury Living Interior Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Interior Designers in Ahmedabad & Gandhinagar | Dream Space Studio',
    description: 'Transform your spaces with luxury interior design and turnkey architectural solutions in Ahmedabad and Gandhinagar. Elevate your living experiences with Dream Space Studio.',
    images: [`${SITE_CONFIG.url}/images/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
} as const;
