import { BlogAuthor, BlogCategory, BlogFilterOptions, BlogListResult, BlogPost, BlogQueryOptions, IBlogService } from '../types/blog';
import { blogRepository } from './blog.repository';
import { applyBlogFilters, buildArticleSchema, buildBlogListResult, buildSeoMetadata, calculateReadingTime } from './blog.utils';

class BlogService implements IBlogService {
  async getPosts(filters?: BlogFilterOptions): Promise<BlogListResult> {
    const posts = await blogRepository.getPosts();
    return buildBlogListResult(posts, filters as BlogQueryOptions | undefined);
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return blogRepository.getPostBySlug(slug);
  }

  async getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
    return blogRepository.getFeaturedPosts(limit);
  }

  async getCategories(): Promise<BlogCategory[]> {
    return blogRepository.getCategories();
  }

  async getAuthors(): Promise<BlogAuthor[]> {
    return blogRepository.getAuthors();
  }

  async getRelatedPosts(currentSlug: string, categorySlug?: string, limit = 3): Promise<BlogPost[]> {
    const posts = await blogRepository.getPosts();
    return applyBlogFilters(posts, { categorySlug, limit, offset: 0 })
      .filter((post) => post.slug !== currentSlug)
      .slice(0, limit);
  }

  async getReadingTime(slug: string): Promise<string> {
    const post = await blogRepository.getPostBySlug(slug);
    return post ? calculateReadingTime(post.content) : '0 min read';
  }

  async getSeoMetadata(slug: string) {
    const post = await blogRepository.getPostBySlug(slug);
    return post ? buildSeoMetadata(post) : null;
  }

  async getArticleSchema(slug: string) {
    const post = await blogRepository.getPostBySlug(slug);
    return post ? buildArticleSchema(post) : null;
  }
}

export const blogService = new BlogService();
export default blogService;
