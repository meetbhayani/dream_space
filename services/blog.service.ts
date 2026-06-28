import { BlogPost, BlogFilterOptions, BlogCategory, BlogAuthor } from '../types/blog';
import { PaginatedResult } from '../types/api';

/**
 * Interface representing the database-agnostic Blog repository.
 */
export interface IBlogService {
  /**
   * Fetches blog articles with support for pagination, searching, and category filtering.
   */
  getPosts(filters?: BlogFilterOptions): Promise<PaginatedResult<BlogPost>>;

  /**
   * Fetches a single article based on its URL-safe slug.
   */
  getPostBySlug(slug: string): Promise<BlogPost | null>;

  /**
   * Fetches featured articles for highlights panels.
   */
  getFeaturedPosts(limit?: number): Promise<BlogPost[]>;

  /**
   * Fetches all available blog categories.
   */
  getCategories(): Promise<BlogCategory[]>;

  /**
   * Fetches active authors registered in the system.
   */
  getAuthors(): Promise<BlogAuthor[]>;
}
export default IBlogService;
