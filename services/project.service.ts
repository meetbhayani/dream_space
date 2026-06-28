import { Project, ProjectCategory, ProjectFilterOptions, IProjectService, ProjectListResult, ProjectQueryOptions } from '../types/project';
import { projectRepository } from './project.repository';
import { applyProjectFilters, buildProjectListResult } from './project.utils';

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
}

export const projectService = new ProjectService();
export default projectService;
