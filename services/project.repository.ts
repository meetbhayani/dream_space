import { PROJECTS_DATA } from '../data/projects';
import { MATERIALS_DATA } from '../data/materials';
import { Project, ProjectBreadcrumbItem, ProjectCategory, ProjectDetailData, ProjectMaterial, ProjectMedia, ProjectRepository, ProjectStatistic, ProjectTimelineItem } from '../types/project';
import { SEOMetadata } from '../types/global';

const projectCategories: ProjectCategory[] = [
  {
    id: 'cat-residential',
    slug: 'residential',
    name: 'Residential',
    description: 'Premium homes, villas, apartments, and private retreats.'
  },
  {
    id: 'cat-commercial',
    slug: 'commercial',
    name: 'Commercial',
    description: 'Offices, retail, hospitality, and mixed-use environments.'
  },
  {
    id: 'cat-villa',
    slug: 'villa',
    name: 'Villa',
    description: 'Luxury villa and bespoke high-end residential projects.'
  },
  {
    id: 'cat-office',
    slug: 'office',
    name: 'Office',
    description: 'Corporate headquarters and workplace environments.'
  },
  {
    id: 'cat-hospitality',
    slug: 'hospitality',
    name: 'Hospitality',
    description: 'Restaurants, lounges, and guest experience environments.'
  }
];

export class ProjectRepositoryImpl implements ProjectRepository {
  async getProjects(): Promise<Project[]> {
    return [...PROJECTS_DATA].sort((left, right) => right.year - left.year);
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    return PROJECTS_DATA.find((project) => project.slug === slug) ?? null;
  }

  async getProjectById(id: string): Promise<Project | null> {
    return PROJECTS_DATA.find((project) => project.id === id) ?? null;
  }

  async getFeaturedProjects(limit = 4): Promise<Project[]> {
    const featuredProjects = (await this.getProjects()).filter((project) => project.status === 'completed');
    return featuredProjects.slice(0, limit);
  }

  async getCategories(): Promise<ProjectCategory[]> {
    return projectCategories;
  }

  async getProjectMaterials(slug: string): Promise<ProjectMaterial[]> {
    const project = await this.getProjectBySlug(slug);
    if (!project) {
      return [];
    }

    return project.materials?.length ? project.materials : MATERIALS_DATA.slice(0, 3);
  }

  async getProjectGallery(slug: string): Promise<ProjectMedia[]> {
    const project = await this.getProjectBySlug(slug);
    return project?.gallery ?? [];
  }

  async getProjectSeoMetadata(slug: string): Promise<SEOMetadata | null> {
    const project = await this.getProjectBySlug(slug);
    return project?.seo ?? null;
  }

  async getProjectBreadcrumbs(slug: string): Promise<ProjectBreadcrumbItem[]> {
    const project = await this.getProjectBySlug(slug);
    if (!project) {
      return [];
    }

    return [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: project.title, href: `/projects/${project.slug}` }
    ];
  }

  async getProjectStructuredData(slug: string): Promise<Record<string, unknown> | null> {
    const project = await this.getProjectBySlug(slug);
    if (!project) {
      return null;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'Project',
      name: project.title,
      description: project.description,
      location: project.location,
      url: `/projects/${project.slug}`,
      image: project.coverImage,
      keywords: [project.category, project.location, project.client.type].join(', ')
    };
  }

  async getProjectStatistics(slug: string): Promise<ProjectStatistic[]> {
    const project = await this.getProjectBySlug(slug);
    if (!project) {
      return [];
    }

    return [
      { label: 'Location', value: project.location },
      { label: 'Year', value: String(project.year) },
      { label: 'Status', value: project.status },
      { label: 'Budget', value: project.budget },
      { label: 'Scope', value: `${project.scope.length} services` }
    ];
  }

  async getProjectTimeline(slug: string): Promise<ProjectTimelineItem[]> {
    const project = await this.getProjectBySlug(slug);
    if (!project) {
      return [];
    }

    return [
      { title: 'Concept', description: `Initial visioning for ${project.title}.`, date: `${project.year - 1}` },
      { title: 'Design Development', description: `Interior planning and material curation for ${project.title}.`, date: `${project.year}` },
      { title: 'Execution', description: `Delivery and installation of finishes, lighting, and custom fittings.`, date: project.completionDate ?? `${project.year}` }
    ];
  }

  async getProjectDetail(slug: string): Promise<ProjectDetailData | null> {
    const project = await this.getProjectBySlug(slug);
    if (!project) {
      return null;
    }

    const [materials, gallery, seo, breadcrumbs, structuredData, statistics, timeline] = await Promise.all([
      this.getProjectMaterials(slug),
      this.getProjectGallery(slug),
      this.getProjectSeoMetadata(slug),
      this.getProjectBreadcrumbs(slug),
      this.getProjectStructuredData(slug),
      this.getProjectStatistics(slug),
      this.getProjectTimeline(slug)
    ]);

    return {
      project,
      materials,
      gallery,
      relatedProjects: [],
      seo: seo ?? {
        title: project.title,
        description: project.description
      },
      breadcrumbs,
      structuredData: structuredData ?? {},
      statistics,
      timeline
    };
  }
}

export const projectRepository = new ProjectRepositoryImpl();
export default projectRepository;
