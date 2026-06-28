export type GalleryCategory = 'living-room' | 'kitchen' | 'bedroom' | 'office' | 'villa' | 'details' | 'materials' | 'dining';

export interface GalleryItem {
  id: string;
  url: string;
  thumbnailUrl?: string;
  title: string;
  alt: string;
  category: GalleryCategory;
  projectId?: string;
  projectSlug?: string;
  projectName?: string;
  width: number;
  height: number;
  featured: boolean;
  order: number;
  description?: string;
  materialsUsed?: string[];
  createdAt: string;
}

export interface GalleryFilterOptions {
  category?: GalleryCategory;
  search?: string;
  projectId?: string;
  limit?: number;
  offset?: number;
}

export interface GalleryCategoryDefinition {
  id: string;
  slug: GalleryCategory;
  name: string;
  description: string;
}

export interface GalleryQueryOptions extends GalleryFilterOptions {
  page?: number;
  pageSize?: number;
}

export interface GalleryPaginationMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface GalleryListResult {
  items: GalleryItem[];
  pagination: GalleryPaginationMeta;
  metadata: {
    totalMatches: number;
    appliedFilters: string[];
  };
}

export interface GalleryRepository {
  getGalleryItems(): Promise<GalleryItem[]>;
  getFeaturedItems(limit?: number): Promise<GalleryItem[]>;
  getProjectGalleryItems(projectId: string): Promise<GalleryItem[]>;
  getCategories(): Promise<GalleryCategoryDefinition[]>;
}

export interface IGalleryService {
  getGalleryItems(filters?: GalleryFilterOptions): Promise<GalleryItem[]>;
  listGalleryItems(query?: GalleryQueryOptions): Promise<GalleryListResult>;
  getFeaturedItems(limit?: number): Promise<GalleryItem[]>;
  getProjectGalleryItems(projectId: string): Promise<GalleryItem[]>;
  getCategories(): Promise<GalleryCategoryDefinition[]>;
  getImageMetadata(itemId: string): Promise<Record<string, string | number | boolean | undefined> | null>;
  getSeoAltText(itemId: string): Promise<string | null>;
}
