import { COMPANY_INFO, SITE_CONFIG } from '@/constants/site';

export function OrganizationStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: COMPANY_INFO.description,
    email: COMPANY_INFO.email,
    foundingDate: `${COMPANY_INFO.foundedYear}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zip,
      addressCountry: COMPANY_INFO.address.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone.value,
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/dream_space_studio_/',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: COMPANY_INFO.name,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/og-default.jpg`,
    telephone: COMPANY_INFO.phone.display,
    email: COMPANY_INFO.email,
    description: COMPANY_INFO.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zip,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225,
      longitude: 72.5714,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Gandhinagar' },
      { '@type': 'State', name: 'Gujarat' },
    ],
    priceRange: '₹₹₹₹₹',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Interior Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Interior Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Turnkey Design Execution' } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
