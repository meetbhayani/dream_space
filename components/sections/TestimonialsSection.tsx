import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/sections/SectionHeading';

export function TestimonialsSection() {
  return (
    <SectionContainer id="testimonials">
      <RevealOnScroll>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="A quiet confidence in every collaboration."
              description="Clients value our ability to simplify complexity, remain attentive to every detail, and deliver spaces that feel effortless and elevated."
            />
          </div>
          <div className="grid gap-6">
            <TestimonialCard
              quote="Dream Space Studio translated our brief into a serene home that feels both luxurious and deeply personal."
              name="Emma Coltrane"
              role="Private Residence Owner"
            />
            <TestimonialCard
              quote="The team brought a refined sense of calm to the project, with considered materials and seamless execution."
              name="Julian Moore"
              role="Hospitality Developer"
            />
          </div>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  );
}
