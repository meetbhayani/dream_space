import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { SERVICES_DATA } from '@/data/services';

export function ServicesSection() {
  const featuredServices = SERVICES_DATA.filter((service) => service.featured).slice(0, 3);

  return (
    <Section id="services" className="mt-32">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909]/90 p-8 before:absolute before:-right-20 before:top-1/2 before:h-[320px] before:w-[320px] before:-translate-y-1/2 before:rounded-full before:bg-gold/10 before:blur-3xl">
        <div className="relative">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Services"
                title="A studio-led approach to elevated interiors."
                description="From architecture-first residences to full turnkey delivery, every engagement is shaped around timeless detail, deep collaboration, and meticulous execution."
              />
            </div>
          </RevealOnScroll>

          <Grid cols={3} className="mt-12">
            {featuredServices.map((service) => (
              <RevealOnScroll key={service.id} className="h-full">
                <ServiceCard service={service} />
              </RevealOnScroll>
            ))}
          </Grid>
        </div>
      </div>
    </Section>
  );
}
