import { BLOG_POSTS_DATA, BLOG_AUTHORS, BLOG_CATEGORIES } from '../data/blog';
import { BlogAuthor, BlogCategory, BlogPost, BlogRepository } from '../types/blog';

export class BlogRepositoryImpl implements BlogRepository {
  async getPosts(): Promise<BlogPost[]> {
    return [...BLOG_POSTS_DATA].sort((left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime());
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return BLOG_POSTS_DATA.find((post) => post.slug === slug) ?? null;
  }

  async getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
    return (await this.getPosts()).filter((post) => post.featured).slice(0, limit);
  }

  async getCategories(): Promise<BlogCategory[]> {
    return BLOG_CATEGORIES;
  }

  async getAuthors(): Promise<BlogAuthor[]> {
    return BLOG_AUTHORS;
  }
}

export const blogRepository = new BlogRepositoryImpl();
export default blogRepository;
