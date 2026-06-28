import { FadeInSection } from '@/components/animations/FadeInSection';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Grid } from '@/components/ui/Grid';
import { CardFrame } from '@/components/ui/CardFrame';

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
    <Section id="process" className="mt-32">
      <FadeInSection>
        <Grid cols={1} className="gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Process"
              title="A refined process designed to create calm, intentional interiors."
              description="Our method is thoughtful, collaborative, and precise. Every phase is tuned to deliver premium outcomes without excess noise."
            />
          </div>

          <Grid cols={1} className="gap-6 sm:grid-cols-2">
            {steps.map((step, index) => (
              <RevealOnScroll key={step.title}>
                <CardFrame className="h-full">
                  <span className="text-sm uppercase tracking-[0.35em] text-gold">0{index + 1}</span>
                  <h3 className="mt-4 text-2xl font-light text-white">{step.title}</h3>
                  <p className="mt-4 text-base text-muted">{step.detail}</p>
                </CardFrame>
              </RevealOnScroll>
            ))}
          </Grid>
        </Grid>
      </FadeInSection>
    </Section>
  );
}
