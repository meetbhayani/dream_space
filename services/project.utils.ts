import { SITE_CONFIG } from '../constants/site';
import { Project, ProjectBreadcrumbItem, ProjectDetailData, ProjectFilterOptions, ProjectListResult, ProjectPaginationMeta, ProjectQueryOptions, ProjectSortOption, ProjectTimelineItem, ProjectStatistic, ProjectMaterial, ProjectMedia } from '../types/project';
import { SEOMetadata } from '../types/global';

const normalizeText = (value: string): string => value.trim().toLowerCase();

const sortProjectsBy = (projects: Project[], sortBy?: ProjectSortOption): Project[] => {
  const sortedProjects = [...projects];

  switch (sortBy) {
    case 'oldest':
      return sortedProjects.sort((left, right) => left.year - right.year);
    case 'year-asc':
      return sortedProjects.sort((left, right) => left.year - right.year);
    case 'title-asc':
      return sortedProjects.sort((left, right) => left.title.localeCompare(right.title));
    case 'title-desc':
      return sortedProjects.sort((left, right) => right.title.localeCompare(left.title));
    case 'year-desc':
    case 'newest':
    default:
      return sortedProjects.sort((left, right) => right.year - left.year);
  }
};

const buildAppliedFilters = (filters?: ProjectQueryOptions): string[] => {
  if (!filters) {
    return [];
  }

  const appliedFilters: string[] = [];

  if (filters.category) appliedFilters.push(`category:${filters.category}`);
  if (filters.status) appliedFilters.push(`status:${filters.status}`);
  if (filters.budget) appliedFilters.push(`budget:${filters.budget}`);
  if (filters.search) appliedFilters.push(`search:${filters.search}`);
  if (filters.sortBy) appliedFilters.push(`sort:${filters.sortBy}`);

  return appliedFilters;
};

export const applyProjectFilters = (projects: Project[], filters?: ProjectFilterOptions): Project[] => {
  let filteredProjects = [...projects];

  if (filters?.category) {
    filteredProjects = filteredProjects.filter((project) => project.category === filters.category);
  }

  if (filters?.status) {
    filteredProjects = filteredProjects.filter((project) => project.status === filters.status);
  }

  if (filters?.budget) {
    filteredProjects = filteredProjects.filter((project) => project.budget === filters.budget);
  }

  if (filters?.search) {
    const query = normalizeText(filters.search);
    filteredProjects = filteredProjects.filter((project) => {
      const haystack = [project.title, project.subtitle, project.description, project.location, project.category]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }

  if (filters?.excludeSlug) {
    filteredProjects = filteredProjects.filter((project) => project.slug !== filters.excludeSlug);
  }

  if (typeof filters?.limit === 'number') {
    filteredProjects = filteredProjects.slice(0, filters.limit);
  }

  return filteredProjects;
};

export const paginateProjects = (projects: Project[], query?: ProjectQueryOptions): { items: Project[]; pagination: ProjectPaginationMeta } => {
  const safePage = Math.max(1, query?.page ?? 1);
  const safePageSize = Math.max(1, query?.pageSize ?? 12);
  const startIndex = (safePage - 1) * safePageSize;
  const endIndex = startIndex + safePageSize;

  return {
    items: projects.slice(startIndex, endIndex),
    pagination: {
      total: projects.length,
      page: safePage,
      pageSize: safePageSize,
      totalPages: Math.max(1, Math.ceil(projects.length / safePageSize)),
      hasNextPage: endIndex < projects.length,
      hasPreviousPage: safePage > 1
    }
  };
};

export const buildProjectListResult = (projects: Project[], query?: ProjectQueryOptions): ProjectListResult => {
  const filteredProjects = applyProjectFilters(projects, query);
  const sortedProjects = sortProjectsBy(filteredProjects, query?.sortBy);
  const { items, pagination } = paginateProjects(sortedProjects, query);

  return {
    items,
    pagination,
    metadata: {
      totalMatches: filteredProjects.length,
      appliedFilters: buildAppliedFilters(query)
    }
  };
};

export const buildProjectSeoMetadata = (project: Project): SEOMetadata => ({
  title: project.seo?.title ?? `${project.title} | Dream Space Studio`,
  description: project.seo?.description ?? project.description,
  keywords: [project.category, project.location, project.client.type],
  canonicalUrl: `${SITE_CONFIG.url}/projects/${project.slug}`,
  ogType: 'article'
});

export const buildProjectBreadcrumbs = (project: Project): ProjectBreadcrumbItem[] => [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: project.title, href: `/projects/${project.slug}` }
];

export const buildProjectStructuredData = (project: Project) => ({
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: project.title,
  description: project.description,
  location: project.location,
  url: `/projects/${project.slug}`,
  image: project.coverImage,
  keywords: [project.category, project.location, project.client.type].join(', ')
});

export const buildProjectStatistics = (project: Project): ProjectStatistic[] => [
  { label: 'Location', value: project.location },
  { label: 'Year', value: String(project.year) },
  { label: 'Status', value: project.status },
  { label: 'Budget', value: project.budget },
  { label: 'Scope', value: `${project.scope.length} services` }
];

export const buildProjectTimeline = (project: Project): ProjectTimelineItem[] => [
  { title: 'Concept', description: `Initial visioning for ${project.title}.`, date: `${project.year - 1}` },
  { title: 'Design Development', description: `Interior planning and material curation for ${project.title}.`, date: `${project.year}` },
  { title: 'Execution', description: `Delivery and installation of finishes, lighting, and custom fittings.`, date: project.completionDate ?? `${project.year}` }
];

export const buildProjectDetail = (
  project: Project,
  relatedProjects: Project[],
  materials: ProjectMaterial[],
  gallery: ProjectMedia[],
  seo: SEOMetadata,
  breadcrumbs: ProjectBreadcrumbItem[],
  structuredData: Record<string, unknown>,
  statistics: ProjectStatistic[],
  timeline: ProjectTimelineItem[]
): ProjectDetailData => ({
  project,
  materials,
  gallery,
  relatedProjects,
  seo,
  breadcrumbs,
  structuredData,
  statistics,
  timeline
});
