import { FadeInSection } from '@/components/animations/FadeInSection';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

const steps = [
  {
    title: 'Discovery',
    detail: 'We begin with listening, research, and a careful understanding of space, materiality, and lifestyle.',
  },
  {
    title: 'Concept',
    detail: 'A restrained concept is developed with strong geometry, refined palette choices, and purposeful details.',
  },
  {
    title: 'Refinement',
    detail: 'We resolve every junction, surface, and lighting condition to ensure a cohesive and elevated result.',
  },
  {
    title: 'Delivery',
    detail: 'The finished interior is executed with craftsmanship, quality control, and a calm sense of completion.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="mt-32">
      <FadeInSection>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Process</p>
            <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl">A refined process designed to create calm, intentional interiors.</h2>
            <p className="mt-6 text-base text-muted">Our method is thoughtful, collaborative, and precise. Every phase is tuned to deliver premium outcomes without excess noise.</p>
          </div>
          <div className="grid gap-6">
            {steps.map((step, index) => (
              <RevealOnScroll key={step.title} className="rounded-[28px] border border-white/10 bg-[#111111] p-8">
                <span className="text-sm uppercase tracking-[0.35em] text-gold">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-light text-white">{step.title}</h3>
                <p className="mt-4 text-base text-muted">{step.detail}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
