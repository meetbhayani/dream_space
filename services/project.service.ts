import { Project, ProjectFilterOptions } from '../types/project';

/**
 * Interface representing the database-agnostic Project repository.
 * Prepares the codebase for future CMS (Sanity) or Database (Supabase) integration.
 */
export interface IProjectService {
  /**
   * Fetches all projects, optionally filtered by category, status, budget.
   */
  getProjects(filters?: ProjectFilterOptions): Promise<Project[]>;

  /**
   * Fetches a single project by its slug identifier.
   */
  getProjectBySlug(slug: string): Promise<Project | null>;

  /**
   * Fetches a single project by its unique ID.
   */
  getProjectById(id: string): Promise<Project | null>;

  /**
   * Fetches featured projects for homepage carousel showcases.
   */
  getFeaturedProjects(limit?: number): Promise<Project[]>;

  /**
   * Fetches related projects excluding the current project.
   */
  getRelatedProjects(currentSlug: string, category: string, limit?: number): Promise<Project[]>;
}
export default IProjectService;
