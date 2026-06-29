import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Grid } from '@/components/ui/Grid';
import { ServiceCard } from '@/components/cards/ServiceCard';

const services = [
  {
    title: 'Full interior design',
    description: 'A complete design experience from concept through execution, with refined spatial planning and material direction.',
    highlight: 'Signature',
    details: ['Architecture-aware layouts', 'Material palettes', 'Lighting choreography'],
  },
  {
    title: 'Furniture & styling',
    description: 'Curated pieces, bespoke details, and styling layers that bring calm, texture, and longevity to a home.',
    highlight: 'Curated',
    details: ['Custom sourcing', 'Furniture planning', 'Styling direction'],
  },
  {
    title: 'Renovation guidance',
    description: 'Thoughtful coordination for renovations with a strong emphasis on flow, craftsmanship, and seamless spaces.',
    highlight: 'Refined',
    details: ['Phased planning', 'Builder coordination', 'Finish selection'],
  },
  {
    title: 'Consultation',
    description: 'A premium advisory experience for clients needing clarity, direction, and expert support early in the journey.',
    highlight: 'Private',
    details: ['Design roadmap', 'Budget alignment', 'Concept development'],
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="mt-32">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]/90 p-6 sm:p-8 lg:p-10 before:absolute before:right-0 before:top-0 before:h-40 before:w-40 before:rounded-full before:bg-gold/12 before:blur-3xl">
        <Grid cols={1} className="relative gap-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Services"
              title="A boutique service shaped around calm luxury and intentional living."
              description="Every engagement is tailored to the rhythm of your space, the pace of your family, and the atmosphere you want to create."
            />
          </RevealOnScroll>

          <Grid cols={1} className="gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <RevealOnScroll key={service.title}>
                <ServiceCard {...service} />
              </RevealOnScroll>
            ))}
          </Grid>
        </Grid>
      </div>
    </Section>
  );
}
