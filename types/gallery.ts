export type GalleryCategory = 'living-room' | 'kitchen' | 'bedroom' | 'office' | 'villa' | 'details' | 'materials';

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
  limit?: number;
  offset?: number;
}
