/**
 * Company information and site metadata details.
 * Reflects the premium interior design firm Dream Space Studio located in Ahmedabad/Gandhinagar.
 */
export const COMPANY_INFO = {
  name: 'Dream Space Studio',
  legalName: 'Dream Space Studio',
  tagline: 'Crafting Cinematic Living Experiences',
  foundedYear: 2018,
  description: 'Dream Space Studio is a premier luxury interior design and architecture studio specializing in high-end residential villas, penthouses, and bespoke commercial spaces in Ahmedabad and Gandhinagar.',
  email: 'hello@dreamspacestudio.in',
  phone: {
    display: '099136 89946',
    value: '+9109913689946',
    whatsapp: '+919924820849',
  },
  address: {
    street: 'B, C, D Ground Floor, Imperia, Sheetal Westpark Residency, near Alpha One Mall, Vastrapur',
    city: 'Ahmedabad',
    state: 'Gujarat',
    zip: '380054',
    country: 'India',
    formatted: 'B, C, D Ground Floor, Imperia, Sheetal Westpark Residency, near Alpha One Mall, Vastrapur, Ahmedabad, Gujarat 380054, India',
    mapsUrl: 'https://maps.google.com/?q=Imperia+Sheetal+Westpark+Residency+Vastrapur+Ahmedabad',
  },
  operatingHours: {
    weekdays: '10:00 AM - 7:00 PM',
    saturday: '10:00 AM - 6:00 PM',
    sunday: 'Closed',
    formatted: 'Mon - Sat: 10 AM - 7 PM',
  },
} as const;

export const SITE_CONFIG = {
  url: 'https://dreamspacestudio.in',
  defaultLocale: 'en',
  company: COMPANY_INFO,
} as const;
