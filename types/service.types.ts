import { SEOMetadata } from './global';

export type ServiceCategoryType = 'interior-design' | 'architecture' | 'turnkey-execution' | 'consultation';

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
  icon: string;
  heroImage: string;
  category: ServiceCategoryType;
  features: ServiceFeature[];
  process: ServiceStep[];
  pricingRange?: string;
  featured: boolean;
  order: number;
  seo?: SEOMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface ServiceFilterOptions {
  category?: ServiceCategoryType | string;
  featured?: boolean;
  search?: string;
  excludeSlug?: string;
  limit?: number;
}

export interface ServiceRepository {
  getServices(): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | null>;
  getServiceById(id: string): Promise<Service | null>;
  getFeaturedServices(limit?: number): Promise<Service[]>;
  getCategories(): Promise<ServiceCategory[]>;
}

export interface IServiceService {
  getServices(filters?: ServiceFilterOptions): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | null>;
  getServiceById(id: string): Promise<Service | null>;
  getFeaturedServices(limit?: number): Promise<Service[]>;
  getRelatedServices(currentSlug: string, category?: ServiceCategoryType, limit?: number): Promise<Service[]>;
  getCategories(): Promise<ServiceCategory[]>;
}
