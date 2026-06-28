import { GalleryItem, GalleryFilterOptions } from '../types/gallery';

/**
 * Interface representing the database-agnostic Gallery repository.
 */
export interface IGalleryService {
  /**
   * Fetches masonry gallery items based on filters (e.g. category tags).
   */
  getGalleryItems(filters?: GalleryFilterOptions): Promise<GalleryItem[]>;

  /**
   * Fetches featured items specifically for hero or section background sliders.
   */
  getFeaturedItems(limit?: number): Promise<GalleryItem[]>;

  /**
   * Fetches items belonging to a specific architectural project.
   */
  getProjectGalleryItems(projectId: string): Promise<GalleryItem[]>;
}
export default IGalleryService;
