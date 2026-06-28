export interface Testimonial {
  id: string;
  clientName: string;
  designation: string; // e.g. "CEO, Tech Corp" or "Villa Owner"
  company?: string;
  projectId?: string;
  projectName?: string;
  projectSlug?: string;
  rating: number; // 1 to 5 stars
  review: string;
  avatar: string;
  videoUrl?: string; // Optional link to video feedback
  featured: boolean;
  order: number;
  approved: boolean;
  createdAt: string;
}

export type TestimonialSortOption = 'newest' | 'oldest' | 'rating-desc' | 'rating-asc' | 'order';

export interface TestimonialFilterOptions {
  featured?: boolean;
  approved?: boolean;
  minRating?: number;
  projectId?: string;
  projectSlug?: string;
  search?: string;
  limit?: number;
}

export interface TestimonialQueryOptions extends TestimonialFilterOptions {
  sortBy?: TestimonialSortOption;
  page?: number;
  pageSize?: number;
}

export interface TestimonialPaginationMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface TestimonialListResult {
  items: Testimonial[];
  pagination: TestimonialPaginationMeta;
  metadata: {
    totalMatches: number;
    appliedFilters: string[];
  };
}

export interface TestimonialRepository {
  getTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(limit?: number): Promise<Testimonial[]>;
  getTestimonialsByProject(projectId?: string): Promise<Testimonial[]>;
  getTestimonialsByProjectSlug(projectSlug?: string): Promise<Testimonial[]>;
}

export interface ITestimonialService {
  getTestimonials(filters?: TestimonialFilterOptions): Promise<Testimonial[]>;
  listTestimonials(query?: TestimonialQueryOptions): Promise<TestimonialListResult>;
  getFeaturedTestimonials(limit?: number): Promise<Testimonial[]>;
  getTestimonialsByProject(projectId?: string): Promise<Testimonial[]>;
  getTestimonialsByProjectSlug(projectSlug?: string): Promise<Testimonial[]>;
  getAverageRating(): Promise<number>;
}
