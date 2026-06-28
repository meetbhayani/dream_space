import { Project, ProjectBreadcrumbItem, ProjectCategory, ProjectDetailData, ProjectFilterOptions, IProjectService, ProjectListResult, ProjectMaterial, ProjectMedia, ProjectQueryOptions, ProjectStatistic, ProjectTimelineItem } from '../types/project';
import { SEOMetadata } from '../types/global';
import { projectRepository } from './project.repository';
import { applyProjectFilters, buildProjectBreadcrumbs, buildProjectDetail, buildProjectListResult, buildProjectSeoMetadata, buildProjectStatistics, buildProjectStructuredData, buildProjectTimeline } from './project.utils';

class ProjectService implements IProjectService {
  async getProjects(filters?: ProjectFilterOptions): Promise<Project[]> {
    const projects = await projectRepository.getProjects();
    return applyProjectFilters(projects, filters);
  }

  async listProjects(query?: ProjectQueryOptions): Promise<ProjectListResult> {
    const projects = await projectRepository.getProjects();
    return buildProjectListResult(projects, query);
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    return projectRepository.getProjectBySlug(slug);
  }

  async getProjectById(id: string): Promise<Project | null> {
    return projectRepository.getProjectById(id);
  }

  async getFeaturedProjects(limit = 4): Promise<Project[]> {
    return projectRepository.getFeaturedProjects(limit);
  }

  async getRelatedProjects(currentSlug: string, category: string, limit = 3): Promise<Project[]> {
    const projects = await this.getProjects({
      category,
      excludeSlug: currentSlug,
      limit
    });

    return projects.sort((left, right) => right.year - left.year);
  }

  async getCategories(): Promise<ProjectCategory[]> {
    return projectRepository.getCategories();
  }

  async getProjectMaterials(slug: string): Promise<ProjectMaterial[]> {
    return projectRepository.getProjectMaterials(slug);
  }

  async getProjectGallery(slug: string): Promise<ProjectMedia[]> {
    return projectRepository.getProjectGallery(slug);
  }

  async getProjectSeoMetadata(slug: string): Promise<SEOMetadata | null> {
    return projectRepository.getProjectSeoMetadata(slug);
  }

  async getProjectBreadcrumbs(slug: string): Promise<ProjectBreadcrumbItem[]> {
    return projectRepository.getProjectBreadcrumbs(slug);
  }

  async getProjectStructuredData(slug: string): Promise<Record<string, unknown> | null> {
    return projectRepository.getProjectStructuredData(slug);
  }

  async getProjectStatistics(slug: string): Promise<ProjectStatistic[]> {
    return projectRepository.getProjectStatistics(slug);
  }

  async getProjectTimeline(slug: string): Promise<ProjectTimelineItem[]> {
    return projectRepository.getProjectTimeline(slug);
  }

  async getProjectDetail(slug: string): Promise<ProjectDetailData | null> {
    const project = await this.getProjectBySlug(slug);
    if (!project) {
      return null;
    }

    const [materials, gallery, seo, breadcrumbs, structuredData, statistics, timeline, relatedProjects] = await Promise.all([
      this.getProjectMaterials(slug),
      this.getProjectGallery(slug),
      this.getProjectSeoMetadata(slug),
      this.getProjectBreadcrumbs(slug),
      this.getProjectStructuredData(slug),
      this.getProjectStatistics(slug),
      this.getProjectTimeline(slug),
      this.getRelatedProjects(project.slug, project.category, 3)
    ]);

    return buildProjectDetail(
      project,
      relatedProjects,
      materials,
      gallery,
      seo ?? buildProjectSeoMetadata(project),
      breadcrumbs.length > 0 ? breadcrumbs : buildProjectBreadcrumbs(project),
      structuredData ?? buildProjectStructuredData(project),
      statistics.length > 0 ? statistics : buildProjectStatistics(project),
      timeline.length > 0 ? timeline : buildProjectTimeline(project)
    );
  }
}

export const projectService = new ProjectService();
export default projectService;
