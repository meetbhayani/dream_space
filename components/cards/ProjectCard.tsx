import { CardFrame } from '@/components/ui/CardFrame';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  highlight: string;
}

export function ProjectCard({ title, location, description, highlight }: ProjectCardProps) {
  return (
    <CardFrame className="group transition hover:-translate-y-1 hover:border-gold/30">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-sm uppercase tracking-[0.3em] text-gold">{location}</span>
        <span className="text-xs uppercase tracking-[0.35em] text-muted">{highlight}</span>
      </div>
      <h3 className="text-2xl font-light leading-tight text-white">{title}</h3>
      <p className="mt-6 text-sm leading-7 text-muted">{description}</p>
      <div className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold">
        View project
      </div>
    </CardFrame>
  );
}
