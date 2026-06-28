import { BlogListResult, BlogPaginationMeta, BlogPost, BlogQueryOptions, BlogSortOption } from '../types/blog';

const normalizeText = (value: string): string => value.trim().toLowerCase();

const sortPostsBy = (posts: BlogPost[], sortBy?: BlogSortOption): BlogPost[] => {
  const sortedPosts = [...posts];

  switch (sortBy) {
    case 'featured':
      return sortedPosts.sort((left, right) => Number(right.featured) - Number(left.featured));
    case 'title-asc':
      return sortedPosts.sort((left, right) => left.title.localeCompare(right.title));
    case 'title-desc':
      return sortedPosts.sort((left, right) => right.title.localeCompare(left.title));
    case 'oldest':
      return sortedPosts.sort((left, right) => new Date(left.publishedAt).getTime() - new Date(right.publishedAt).getTime());
    case 'newest':
    default:
      return sortedPosts.sort((left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime());
  }
};

const buildAppliedFilters = (filters?: BlogQueryOptions): string[] => {
  if (!filters) {
    return [];
  }

  const appliedFilters: string[] = [];

  if (filters.categorySlug) appliedFilters.push(`category:${filters.categorySlug}`);
  if (filters.tag) appliedFilters.push(`tag:${filters.tag}`);
  if (filters.authorId) appliedFilters.push(`author:${filters.authorId}`);
  if (filters.searchQuery) appliedFilters.push(`search:${filters.searchQuery}`);
  if (typeof filters.featured === 'boolean') appliedFilters.push(`featured:${filters.featured}`);
  if (filters.status) appliedFilters.push(`status:${filters.status}`);

  return appliedFilters;
};

export const applyBlogFilters = (posts: BlogPost[], filters?: BlogQueryOptions): BlogPost[] => {
  let filteredPosts = [...posts];

  if (filters?.categorySlug) {
    filteredPosts = filteredPosts.filter((post) => post.category.slug === filters.categorySlug);
  }

  if (filters?.tag) {
    filteredPosts = filteredPosts.filter((post) => post.tags.some((tag) => tag.toLowerCase() === filters.tag!.toLowerCase()));
  }

  if (filters?.authorId) {
    filteredPosts = filteredPosts.filter((post) => post.author.id === filters.authorId);
  }

  if (typeof filters?.featured === 'boolean') {
    filteredPosts = filteredPosts.filter((post) => post.featured === filters.featured);
  }

  if (filters?.status) {
    filteredPosts = filteredPosts.filter((post) => post.status === filters.status);
  }

  if (filters?.searchQuery) {
    const query = normalizeText(filters.searchQuery);
    filteredPosts = filteredPosts.filter((post) => {
      const haystack = [post.title, post.excerpt, post.content, post.author.name, post.category.name, post.tags.join(' ')]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }

  if (typeof filters?.limit === 'number') {
    filteredPosts = filteredPosts.slice(0, filters.limit);
  }

  return filteredPosts;
};

export const paginateBlogPosts = (posts: BlogPost[], query?: BlogQueryOptions): { items: BlogPost[]; pagination: BlogPaginationMeta } => {
  const safePage = Math.max(1, query?.page ?? 1);
  const safePageSize = Math.max(1, query?.pageSize ?? 6);
  const startIndex = (safePage - 1) * safePageSize;
  const endIndex = startIndex + safePageSize;

  return {
    items: posts.slice(startIndex, endIndex),
    pagination: {
      total: posts.length,
      page: safePage,
      pageSize: safePageSize,
      totalPages: Math.max(1, Math.ceil(posts.length / safePageSize)),
      hasNextPage: endIndex < posts.length,
      hasPreviousPage: safePage > 1
    }
  };
};

export const buildBlogListResult = (posts: BlogPost[], query?: BlogQueryOptions): BlogListResult => {
  const filteredPosts = applyBlogFilters(posts, query);
  const sortedPosts = sortPostsBy(filteredPosts, query?.sortBy);
  const { items, pagination } = paginateBlogPosts(sortedPosts, query);

  return {
    items,
    pagination,
    metadata: {
      totalMatches: filteredPosts.length,
      appliedFilters: buildAppliedFilters(query)
    }
  };
};

export const calculateReadingTime = (content: string): string => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

export const buildSeoMetadata = (post: BlogPost) => ({
  title: post.seo?.title ?? post.title,
  description: post.seo?.description ?? post.excerpt,
  keywords: [post.category.name, ...post.tags],
  canonicalUrl: `/blog/${post.slug}`,
  ogType: 'article' as const
});

export const buildArticleSchema = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  author: {
    '@type': 'Person',
    name: post.author.name
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dream Space Studio'
  },
  datePublished: post.publishedAt,
  image: post.coverImage
});
