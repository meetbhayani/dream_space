import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { projectService } from '@/services/project.service';
import { ProjectCard } from '@/components/cards/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of luxury interior design projects — residences, villas, commercial spaces, and bespoke interiors crafted by Dream Space Studio.',
  openGraph: {
    title: 'Luxury Interior Design Portfolio | Dream Space Studio',
    description: 'Browse our curated collection of premium interior design projects in Ahmedabad, Gandhinagar, and beyond.',
  },
};

export default async function ProjectsPage() {
  const projects = await projectService.getProjects();
  const categories = await projectService.getCategories();

  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Portfolio</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Signature interiors
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Each project is composed with restrained materials, sculptural lighting, and clean proportions.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/projects?category=${cat.slug}`}
                className="rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-muted transition hover:border-white/20 hover:text-white"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <Grid cols={3} className="gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                location={project.location}
                description={project.description}
                highlight={project.category}
              />
            ))}
          </Grid>
        </div>
      </Section>
    </main>
  );
}
