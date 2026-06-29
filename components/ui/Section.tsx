interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, title, subtitle, background = 'bg-transparent', className = '', children }: SectionProps) {
  return (
    <section id={id} className={`${background} py-16 sm:py-20 lg:py-24 xl:py-28 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {title || subtitle ? (
          <div className="mb-12 max-w-3xl text-white">
            {subtitle ? <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gold">{subtitle}</p> : null}
            {title ? <h2 className="text-4xl font-light leading-tight sm:text-5xl">{title}</h2> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
