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
  limit?: number;
  offset?: number;
}
