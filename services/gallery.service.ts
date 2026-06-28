import { GalleryItem, GalleryCategoryDefinition, GalleryFilterOptions, GalleryListResult, GalleryQueryOptions, IGalleryService } from '../types/gallery';
import { galleryRepository } from './gallery.repository';
import { applyGalleryFilters, buildGalleryListResult, buildImageMetadata, buildSeoAltText } from './gallery.utils';

class GalleryService implements IGalleryService {
  async getGalleryItems(filters?: GalleryFilterOptions): Promise<GalleryItem[]> {
    const items = await galleryRepository.getGalleryItems();
    return applyGalleryFilters(items, filters);
  }

  async listGalleryItems(query?: GalleryQueryOptions): Promise<GalleryListResult> {
    const items = await galleryRepository.getGalleryItems();
    return buildGalleryListResult(items, query);
  }

  async getFeaturedItems(limit = 6): Promise<GalleryItem[]> {
    return galleryRepository.getFeaturedItems(limit);
  }

  async getProjectGalleryItems(projectId: string): Promise<GalleryItem[]> {
    return galleryRepository.getProjectGalleryItems(projectId);
  }

  async getCategories(): Promise<GalleryCategoryDefinition[]> {
    return galleryRepository.getCategories();
  }

  async getImageMetadata(itemId: string): Promise<Record<string, string | number | boolean | undefined> | null> {
    const items = await this.getGalleryItems();
    const item = items.find((galleryItem) => galleryItem.id === itemId);

    return item ? buildImageMetadata(item) : null;
  }

  async getSeoAltText(itemId: string): Promise<string | null> {
    const items = await this.getGalleryItems();
    const item = items.find((galleryItem) => galleryItem.id === itemId);

    return item ? buildSeoAltText(item) : null;
  }
}

export const galleryService = new GalleryService();
export default galleryService;
