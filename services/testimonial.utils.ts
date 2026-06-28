import { Testimonial, TestimonialFilterOptions, TestimonialListResult, TestimonialPaginationMeta, TestimonialQueryOptions, TestimonialSortOption } from '../types/testimonial';

const normalizeText = (value: string): string => value.trim().toLowerCase();

const sortTestimonialsBy = (items: Testimonial[], sortBy?: TestimonialSortOption): Testimonial[] => {
  const sortedItems = [...items];

  switch (sortBy) {
    case 'rating-asc':
      return sortedItems.sort((left, right) => left.rating - right.rating);
    case 'rating-desc':
      return sortedItems.sort((left, right) => right.rating - left.rating);
    case 'oldest':
      return sortedItems.sort((left, right) => left.order - right.order);
    case 'newest':
    case 'order':
    default:
      return sortedItems.sort((left, right) => left.order - right.order);
  }
};

const buildAppliedFilters = (filters?: TestimonialQueryOptions): string[] => {
  if (!filters) {
    return [];
  }

  const appliedFilters: string[] = [];

  if (typeof filters.featured === 'boolean') appliedFilters.push(`featured:${filters.featured}`);
  if (typeof filters.approved === 'boolean') appliedFilters.push(`approved:${filters.approved}`);
  if (filters.minRating) appliedFilters.push(`minRating:${filters.minRating}`);
  if (filters.projectId) appliedFilters.push(`project:${filters.projectId}`);
  if (filters.projectSlug) appliedFilters.push(`projectSlug:${filters.projectSlug}`);
  if (filters.search) appliedFilters.push(`search:${filters.search}`);

  return appliedFilters;
};

export const applyTestimonialFilters = (items: Testimonial[], filters?: TestimonialFilterOptions): Testimonial[] => {
  let filteredItems = [...items];

  if (typeof filters?.featured === 'boolean') {
    filteredItems = filteredItems.filter((item) => item.featured === filters.featured);
  }

  if (typeof filters?.approved === 'boolean') {
    filteredItems = filteredItems.filter((item) => item.approved === filters.approved);
  }

  if (typeof filters?.minRating === 'number') {
    filteredItems = filteredItems.filter((item) => item.rating >= filters.minRating!);
  }

  if (filters?.projectId) {
    filteredItems = filteredItems.filter((item) => item.projectId === filters.projectId);
  }

  if (filters?.projectSlug) {
    filteredItems = filteredItems.filter((item) => item.projectSlug === filters.projectSlug);
  }

  if (filters?.search) {
    const query = normalizeText(filters.search);
    filteredItems = filteredItems.filter((item) => {
      const haystack = [item.clientName, item.company, item.designation, item.review, item.projectName]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }

  if (typeof filters?.limit === 'number') {
    filteredItems = filteredItems.slice(0, filters.limit);
  }

  return filteredItems;
};

export const paginateTestimonials = (items: Testimonial[], query?: TestimonialQueryOptions): { items: Testimonial[]; pagination: TestimonialPaginationMeta } => {
  const safePage = Math.max(1, query?.page ?? 1);
  const safePageSize = Math.max(1, query?.pageSize ?? 6);
  const startIndex = (safePage - 1) * safePageSize;
  const endIndex = startIndex + safePageSize;

  return {
    items: items.slice(startIndex, endIndex),
    pagination: {
      total: items.length,
      page: safePage,
      pageSize: safePageSize,
      totalPages: Math.max(1, Math.ceil(items.length / safePageSize)),
      hasNextPage: endIndex < items.length,
      hasPreviousPage: safePage > 1
    }
  };
};

export const buildTestimonialListResult = (items: Testimonial[], query?: TestimonialQueryOptions): TestimonialListResult => {
  const filteredItems = applyTestimonialFilters(items, query);
  const sortedItems = sortTestimonialsBy(filteredItems, query?.sortBy);
  const { items: paginatedItems, pagination } = paginateTestimonials(sortedItems, query);

  return {
    items: paginatedItems,
    pagination,
    metadata: {
      totalMatches: filteredItems.length,
      appliedFilters: buildAppliedFilters(query)
    }
  };
};

export const calculateAverageRating = (items: Testimonial[]): number => {
  if (items.length === 0) {
    return 0;
  }

  const total = items.reduce((sum, item) => sum + item.rating, 0);
  return Number((total / items.length).toFixed(1));
};
