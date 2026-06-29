import { ProjectCard } from '@/components/cards/ProjectCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
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
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909]/90 p-8 before:absolute before:-left-20 before:top-1/2 before:h-[300px] before:w-[300px] before:-translate-y-1/2 before:rounded-full before:bg-gold/10 before:blur-3xl">
        <div className="relative space-y-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Projects"
                title="Signature interiors that feel quietly luxurious."
                description="Each project is composed with restrained materials, sculptural lighting, and clean proportions to create spaces that balance warmth and refinement."
              />
            </div>
          </RevealOnScroll>

          <div className="lg:hidden">
            <Carousel
              slides={projects.map((project) => (
                <div key={project.title} className="h-full">
                  <ProjectCard {...project} />
                </div>
              ))}
            />
          </div>

          <div className="hidden gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <RevealOnScroll key={project.title} className="h-full">
                <ProjectCard {...project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
