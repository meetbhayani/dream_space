import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Divider } from '@/components/ui/Divider';
import { projectService } from '@/services/project.service';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = await projectService.getProjectDetail(slug);
  if (!detail) return {};

  return {
    title: detail.seo.title,
    description: detail.seo.description,
    openGraph: {
      title: detail.seo.title,
      description: detail.seo.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = await projectService.getProjectDetail(slug);

  if (!detail) {
    notFound();
  }

  const { project, materials, gallery, statistics, relatedProjects } = detail;

  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">{project.location}</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-4 text-xl text-muted">{project.subtitle}</p>
            )}
          </div>

          <p className="max-w-3xl text-base leading-8 text-muted">{project.description}</p>

          {project.scope.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">Scope of work</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.scope.map((item) => (
                  <li key={item} className="rounded-[20px] border border-white/10 bg-white/5 px-6 py-4 text-sm text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Divider className="my-16" />

          {statistics.length > 0 && (
            <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {statistics.map((stat) => (
                <div key={stat.label} className="rounded-[20px] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{stat.label}</p>
                  <p className="mt-2 text-lg text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          )}

          {materials.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">Materials</h2>
              <Grid cols={3} className="gap-4">
                {materials.map((material) => (
                  <div key={material.name} className="rounded-[20px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white">{material.name}</p>
                    <p className="mt-1 text-xs text-muted">{material.description}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-gold/60">{material.category}</p>
                  </div>
                ))}
              </Grid>
            </div>
          )}

          {gallery.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">Gallery</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {gallery.map((img) => (
                  <div
                    key={img.id}
                    className="aspect-[4/3] rounded-[24px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                  >
                    <div className="flex h-full items-center justify-center p-6 text-center">
                      <div>
                        <p className="text-sm text-white">{img.alt}</p>
                        {img.featured && (
                          <span className="mt-2 inline-block text-[10px] uppercase tracking-[0.15em] text-gold">Featured</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedProjects.length > 0 && (
            <div>
              <Divider className="mb-12" />
              <h2 className="mb-8 text-sm uppercase tracking-[0.35em] text-gold">Related projects</h2>
              <Grid cols={3} className="gap-6">
                {relatedProjects.map((rp) => (
                  <a
                    key={rp.id}
                    href={`/projects/${rp.slug}`}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-gold/30"
                  >
                    <p className="text-lg text-white">{rp.title}</p>
                    <p className="mt-2 text-sm text-muted">{rp.location}</p>
                  </a>
                ))}
              </Grid>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
