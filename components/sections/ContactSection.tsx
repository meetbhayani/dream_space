import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function ContactSection() {
  return (
    <section id="contact" className="mt-32 rounded-[32px] border border-white/10 bg-surface p-10 sm:p-14">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Consultation</p>
          <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl">Begin the conversation for your next luxury interior.</h2>
          <p className="mt-6 text-base text-muted">We work with clients who seek thoughtful, high-end environments. Share your vision and we’ll craft a tailored design experience.</p>
        </div>
        <RevealOnScroll className="rounded-[28px] border border-white/10 bg-black/70 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
          <p className="mt-6 text-lg text-white">hello@dreamspacestudio.com</p>
          <p className="mt-4 text-sm text-muted">Or send a brief about your project and we’ll follow up within 24 hours.</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
