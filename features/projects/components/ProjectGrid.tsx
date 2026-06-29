import { projectService } from '@/services/project.service';
import { ProjectCard } from '@/components/cards/ProjectCard';

interface ProjectGridProps {
  limit?: number;
  category?: string;
  className?: string;
}

export async function ProjectGrid({ limit, category, className = '' }: ProjectGridProps) {
  const projects = await projectService.getProjects({ category, limit });

  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          location={project.location}
          description={project.description}
          highlight={project.category}
        />
      ))}
    </div>
  );
}
