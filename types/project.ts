import { SEOMetadata } from './global';

export type ProjectStatus = 'planning' | 'in-progress' | 'completed';

export interface ProjectDimension {
  areaSqFt: number;
  roomsCount?: number;
}

export interface ProjectBeforeAfter {
  beforeUrl: string;
  afterUrl: string;
  labelBefore?: string;
  labelAfter?: string;
}

export interface ProjectMaterial {
  name: string;
  description: string;
  imageUrl?: string;
  category: 'stone' | 'wood' | 'fabric' | 'lighting' | 'marble' | 'metal' | 'other';
}

export interface ProjectMedia {
  id: string;
  url: string;
  type: 'image' | 'video';
  alt: string;
  width?: number;
  height?: number;
  order: number;
  featured?: boolean;
}

export interface ProjectDesigner {
  name: string;
  role: string;
}

export interface ProjectClientInfo {
  name: string;
  type: 'residential' | 'commercial';
  feedback?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  scope: string[];
  category: 'residential' | 'commercial' | 'villa' | 'apartment' | 'office' | 'hospitality';
  client: ProjectClientInfo;
  location: string;
  year: number;
  status: ProjectStatus;
  budget: 'premium' | 'ultra-luxury' | 'bespoke';
  estimatedValue?: string;
  coverImage: string;
  gallery: ProjectMedia[];
  beforeAfter?: ProjectBeforeAfter;
  materials?: ProjectMaterial[];
  designers: ProjectDesigner[];
  completionDate?: string;
  seo?: SEOMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFilterOptions {
  category?: string;
  status?: string;
  budget?: string;
  limit?: number;
}
