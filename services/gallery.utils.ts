import { GalleryFilterOptions, GalleryItem, GalleryListResult, GalleryPaginationMeta, GalleryQueryOptions } from '../types/gallery';

const normalizeText = (value: string): string => value.trim().toLowerCase();

const buildAppliedFilters = (filters?: GalleryQueryOptions): string[] => {
  if (!filters) {
    return [];
  }

  const appliedFilters: string[] = [];

  if (filters.category) appliedFilters.push(`category:${filters.category}`);
  if (filters.search) appliedFilters.push(`search:${filters.search}`);
  if (filters.projectId) appliedFilters.push(`project:${filters.projectId}`);

  return appliedFilters;
};

export const applyGalleryFilters = (items: GalleryItem[], filters?: GalleryFilterOptions): GalleryItem[] => {
  let filteredItems = [...items];

  if (filters?.category) {
    filteredItems = filteredItems.filter((item) => item.category === filters.category);
  }

  if (filters?.search) {
    const query = normalizeText(filters.search);
    filteredItems = filteredItems.filter((item) => {
      const haystack = [item.title, item.alt, item.description, item.projectName, item.category]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }

  if (filters?.projectId) {
    filteredItems = filteredItems.filter((item) => item.projectId === filters.projectId);
  }

  if (typeof filters?.limit === 'number') {
    filteredItems = filteredItems.slice(0, filters.limit);
  }

  return filteredItems;
};

export const paginateGalleryItems = (items: GalleryItem[], query?: GalleryQueryOptions): { items: GalleryItem[]; pagination: GalleryPaginationMeta } => {
  const safePage = Math.max(1, query?.page ?? 1);
  const safePageSize = Math.max(1, query?.pageSize ?? 12);
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

export const buildGalleryListResult = (items: GalleryItem[], query?: GalleryQueryOptions): GalleryListResult => {
  const filteredItems = applyGalleryFilters(items, query);
  const { items: paginatedItems, pagination } = paginateGalleryItems(filteredItems, query);

  return {
    items: paginatedItems,
    pagination,
    metadata: {
      totalMatches: filteredItems.length,
      appliedFilters: buildAppliedFilters(query)
    }
  };
};

export const buildImageMetadata = (item: GalleryItem): Record<string, string | number | boolean | undefined> => ({
  id: item.id,
  title: item.title,
  alt: item.alt,
  width: item.width,
  height: item.height,
  featured: item.featured,
  category: item.category,
  projectId: item.projectId,
  projectSlug: item.projectSlug,
  projectName: item.projectName
});

export const buildSeoAltText = (item: GalleryItem): string => {
  if (item.alt && item.alt.trim()) {
    return item.alt.trim();
  }

  return `${item.title} for ${item.projectName ?? 'Dream Space Studio'}`;
};
