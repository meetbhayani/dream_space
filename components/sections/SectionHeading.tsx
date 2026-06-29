interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">{eyebrow}</p> : null}
      <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-6 text-sm leading-7 text-muted sm:text-base lg:text-lg">{description}</p> : null}
    </div>
  );
}
