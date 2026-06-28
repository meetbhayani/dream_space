interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionContainer({ id, className = '', children }: SectionContainerProps) {
  return (
    <section id={id} className={`mt-32 ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">{children}</div>
    </section>
  );
}
