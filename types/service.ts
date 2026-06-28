import { SEOMetadata } from './global';

export interface ServiceStep {
  title: string;
  description: string;
  duration?: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  summary: string;
  icon: string; // Lucide icon identifier
  heroImage: string;
  category: 'interior-design' | 'architecture' | 'turnkey-execution' | 'consultation';
  features: ServiceFeature[];
  process: ServiceStep[];
  pricingRange?: string; // e.g. "Starting from ₹1,500/sq.ft."
  featured: boolean;
  order: number;
  seo?: SEOMetadata;
  createdAt: string;
  updatedAt: string;
}
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}
