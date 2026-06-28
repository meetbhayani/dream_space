import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionHeading } from '@/components/sections/SectionHeading';

export function ContactSection() {
  return (
    <section id="contact" className="mt-32 rounded-[32px] border border-white/10 bg-surface p-10 sm:p-14">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Consultation"
            title="Begin the conversation for your next luxury interior."
            description="We work with clients who seek thoughtful, high-end environments. Share your vision and we’ll craft a tailored design experience."
          />
        </RevealOnScroll>
        <RevealOnScroll className="rounded-[28px] border border-white/10 bg-black/70 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
          <p className="mt-6 text-lg text-white">hello@dreamspacestudio.com</p>
          <p className="mt-4 text-sm text-muted">Or send a brief about your project and we’ll follow up within 24 hours.</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
