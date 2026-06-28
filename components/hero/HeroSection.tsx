export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface px-6 py-16 sm:px-10 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-black/80" />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">Dream Space Studio</p>
        <h1 className="text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Interiors designed with clarity, calm, and a sense of craft.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted sm:text-xl">
          We create premium living spaces that feel effortless, modern, and deeply considered. Every detail is refined to support a luxurious everyday experience.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-gold/20 bg-white/5 px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:border-gold/60 hover:text-gold"
          >
            Explore projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm uppercase tracking-[0.25em] text-black transition hover:bg-white/90"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
