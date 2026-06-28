import { SEOMetadata } from './global';

export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    pinterest?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export type BlogStatus = 'draft' | 'published';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown/HTML content representation
  coverImage: string;
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  status: BlogStatus;
  publishedAt: string;
  readTime: string; // e.g. "5 min read"
  featured: boolean;
  seo?: SEOMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface BlogFilterOptions {
  categorySlug?: string;
  tag?: string;
  searchQuery?: string;
  authorId?: string;
  featured?: boolean;
  status?: BlogStatus;
  limit?: number;
  offset?: number;
}

export type BlogSortOption = 'newest' | 'oldest' | 'featured' | 'title-asc' | 'title-desc';

export interface BlogQueryOptions extends BlogFilterOptions {
  sortBy?: BlogSortOption;
  page?: number;
  pageSize?: number;
}

export interface BlogPaginationMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface BlogListResult {
  items: BlogPost[];
  pagination: BlogPaginationMeta;
  metadata: {
    totalMatches: number;
    appliedFilters: string[];
  };
}

export interface BlogRepository {
  getPosts(): Promise<BlogPost[]>;
  getPostBySlug(slug: string): Promise<BlogPost | null>;
  getFeaturedPosts(limit?: number): Promise<BlogPost[]>;
  getCategories(): Promise<BlogCategory[]>;
  getAuthors(): Promise<BlogAuthor[]>;
}

export interface IBlogService {
  getPosts(filters?: BlogFilterOptions): Promise<BlogListResult>;
  getPostBySlug(slug: string): Promise<BlogPost | null>;
  getFeaturedPosts(limit?: number): Promise<BlogPost[]>;
  getCategories(): Promise<BlogCategory[]>;
  getAuthors(): Promise<BlogAuthor[]>;
  getRelatedPosts(currentSlug: string, categorySlug?: string, limit?: number): Promise<BlogPost[]>;
  getReadingTime(slug: string): Promise<string>;
  getSeoMetadata(slug: string): Promise<unknown>;
  getArticleSchema(slug: string): Promise<unknown>;
}
