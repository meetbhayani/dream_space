import { GALLERY_DATA } from '../data/gallery';
import { GalleryCategory, GalleryItem, GalleryRepository } from '../types/gallery';

const galleryCategories: Array<{ id: string; slug: GalleryCategory; name: string; description: string }> = [
  { id: 'cat-living-room', slug: 'living-room', name: 'Living Room', description: 'Luxury interiors, lounge compositions, and architectural staging.' },
  { id: 'cat-kitchen', slug: 'kitchen', name: 'Kitchen', description: 'Custom culinary spaces with sculptural detailing.' },
  { id: 'cat-bedroom', slug: 'bedroom', name: 'Bedroom', description: 'Private retreats with tactile materials and ambient layering.' },
  { id: 'cat-dining', slug: 'dining', name: 'Dining', description: 'Dining environments with artful lighting and material richness.' },
  { id: 'cat-details', slug: 'details', name: 'Details', description: 'Material close-ups, fixtures, and craftsmanship details.' },
  { id: 'cat-materials', slug: 'materials', name: 'Materials', description: 'Material palettes and finish explorations.' }
];

export class GalleryRepositoryImpl implements GalleryRepository {
  async getGalleryItems(): Promise<GalleryItem[]> {
    return [...GALLERY_DATA].sort((left, right) => left.order - right.order);
  }

  async getFeaturedItems(limit = 6): Promise<GalleryItem[]> {
    return (await this.getGalleryItems()).filter((item) => item.featured).slice(0, limit);
  }

  async getProjectGalleryItems(projectId: string): Promise<GalleryItem[]> {
    return (await this.getGalleryItems()).filter((item) => item.projectId === projectId);
  }

  async getCategories(): Promise<Array<{ id: string; slug: GalleryCategory; name: string; description: string }>> {
    return galleryCategories;
  }
}

export const galleryRepository = new GalleryRepositoryImpl();
export default galleryRepository;
