export interface CompanyPhone {
  display: string;
  value: string;
  whatsapp?: string;
}

export interface CompanyAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  formatted: string;
  mapsUrl: string;
}

export interface OperatingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
  formatted: string;
}

export interface CompanyMetadata {
  name: string;
  legalName: string;
  tagline: string;
  foundedYear: number;
  description: string;
  email: string;
  phone: CompanyPhone;
  address: CompanyAddress;
  operatingHours: OperatingHours;
}

export interface SiteConfiguration {
  url: string;
  defaultLocale: string;
  company: CompanyMetadata;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
  noindex?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface FooterNavigation {
  studio: NavigationItem[];
  services: NavigationItem[];
  inspiration: NavigationItem[];
  legal: NavigationItem[];
}
