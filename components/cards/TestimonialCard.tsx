interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-[#111111] p-8">
      <p className="text-lg leading-8 text-muted">“{quote}”</p>
      <div className="mt-8">
        <p className="font-medium text-white">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </div>
    </article>
  );
}
