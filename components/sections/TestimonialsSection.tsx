import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Grid } from '@/components/ui/Grid';

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="mt-32">
      <Grid cols={1} className="gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <RevealOnScroll>
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="A quiet confidence in every collaboration."
              description="Clients value our ability to simplify complexity, remain attentive to every detail, and deliver spaces that feel effortless and elevated."
            />
          </div>
        </RevealOnScroll>

        <Grid cols={1} className="gap-6">
          <RevealOnScroll>
            <TestimonialCard
              quote="Dream Space Studio translated our brief into a serene home that feels both luxurious and deeply personal."
              name="Emma Coltrane"
              role="Private Residence Owner"
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <TestimonialCard
              quote="The team brought a refined sense of calm to the project, with considered materials and seamless execution."
              name="Julian Moore"
              role="Hospitality Developer"
            />
          </RevealOnScroll>
        </Grid>
      </Grid>
    </Section>
  );
}
