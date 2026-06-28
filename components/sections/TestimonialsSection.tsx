import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mt-32">
      <RevealOnScroll>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Testimonials</p>
            <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl">A quiet confidence in every collaboration.</h2>
            <p className="mt-6 text-base text-muted">Clients value our ability to simplify complexity, remain attentive to every detail, and deliver spaces that feel effortless and elevated.</p>
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
    </section>
  );
}
