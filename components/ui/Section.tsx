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
    <section id={id} className={`${background} py-20 sm:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
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
