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
          <SectionHeading
            eyebrow="Consultation"
            title="Begin the conversation for your next luxury interior."
            description="We work with clients who seek thoughtful, high-end environments. Share your vision and we’ll craft a tailored design experience."
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <GlassCard className="bg-black/70">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
              <p className="text-lg text-white">hello@dreamspacestudio.com</p>
              <p className="text-sm text-muted">Or send a brief about your project and we’ll follow up within 24 hours.</p>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </Grid>
    </Section>
  );
}
