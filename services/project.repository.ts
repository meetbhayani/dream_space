import { PROJECTS_DATA } from '../data/projects';
import { Project, ProjectCategory, ProjectRepository } from '../types/project';

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
}

export const projectRepository = new ProjectRepositoryImpl();
export default projectRepository;
