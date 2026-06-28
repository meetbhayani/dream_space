import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { GlassCard } from '@/components/ui/GlassCard';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Grid } from '@/components/ui/Grid';

export function ContactSection() {
  return (
    <Section id="contact" background="bg-surface" className="rounded-[32px] border border-white/10 px-6 py-12 sm:px-10 sm:py-16 mt-32">
      <Grid cols={1} className="gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
        <RevealOnScroll>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Consultation"
              title="Begin the conversation for your next luxury interior."
              description="We work with clients who seek thoughtful, high-end environments. Share your vision and we’ll craft a tailored design experience."
            />
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@dreamspacestudio.com"
                className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-[0.25em] text-black transition hover:bg-white/90"
              >
                Send a brief
              </a>
              <a href="#projects" className="text-sm uppercase tracking-[0.35em] text-muted transition hover:text-white">
                View recent work
              </a>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <GlassCard className="bg-black/70">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
                <p className="text-lg text-white">hello@dreamspacestudio.com</p>
              </div>
              <p className="text-sm text-muted">Or send a brief about your project and we’ll follow up within 24 hours.</p>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm text-muted">
                Best for concept, material guidance, and luxury interior programming.
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </Grid>
    </Section>
  );
}
