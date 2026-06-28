import { ProjectCard } from '@/components/cards/ProjectCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionHeading } from '@/components/sections/SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-32">
      <RevealOnScroll>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Projects"
              title="Signature interiors that feel quietly luxurious."
              description="Each project is composed with restrained materials, sculptural lighting, and clean proportions to create spaces that balance warmth and refinement."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            <ProjectCard
              title="Residence A — Coastal villa"
              location="Monaco"
              description="A serene residence defined by natural stone, bespoke joinery, and expansive glass that brings the landscape inside."
              highlight="Residential"
            />
            <ProjectCard
              title="Paris Loft — Gallery living"
              location="Paris"
              description="A refined loft where custom cabinetry, layered textures, and soft light create a calm, modern home."
              highlight="Urban"
            />
            <ProjectCard
              title="Studio B — Boutique spa"
              location="London"
              description="An intimate wellness retreat shaped by rich materials, subtle lighting, and timeless craft."
              highlight="Hospitality"
            />
            <ProjectCard
              title="Villa C — Hilltop residence"
              location="Los Angeles"
              description="A sculptural villa with generous terraces, warm oak details, and an effortless flow from interior to outdoors."
              highlight="Luxury"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
