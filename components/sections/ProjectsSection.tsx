import { ProjectCard } from '@/components/cards/ProjectCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Grid } from '@/components/ui/Grid';
import { Carousel } from '@/components/ui/Carousel';

const projects = [
  {
    title: 'Residence A — Coastal villa',
    location: 'Monaco',
    description: 'A serene residence defined by natural stone, bespoke joinery, and expansive glass that brings the landscape inside.',
    highlight: 'Residential',
  },
  {
    title: 'Paris Loft — Gallery living',
    location: 'Paris',
    description: 'A refined loft where custom cabinetry, layered textures, and soft light create a calm, modern home.',
    highlight: 'Urban',
  },
  {
    title: 'Studio B — Boutique spa',
    location: 'London',
    description: 'An intimate wellness retreat shaped by rich materials, subtle lighting, and timeless craft.',
    highlight: 'Hospitality',
  },
  {
    title: 'Villa C — Hilltop residence',
    location: 'Los Angeles',
    description: 'A sculptural villa with generous terraces, warm oak details, and an effortless flow from interior to outdoors.',
    highlight: 'Luxury',
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="mt-32">
      <Grid cols={1} className="gap-14 lg:grid-cols-[1.1fr_1fr]">
        <RevealOnScroll>
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Projects"
              title="Signature interiors that feel quietly luxurious."
              description="Each project is composed with restrained materials, sculptural lighting, and clean proportions to create spaces that balance warmth and refinement."
            />
          </div>
        </RevealOnScroll>

        <div className="space-y-8">
          <div className="lg:hidden">
            <Carousel
              slides={projects.map((project) => (
                <div key={project.title} className="h-full">
                  <ProjectCard {...project} />
                </div>
              ))}
            />
          </div>

          <div className="hidden lg:grid gap-6">
            {projects.map((project) => (
              <RevealOnScroll key={project.title} className="h-full">
                <ProjectCard {...project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Grid>
    </Section>
  );
}
