import { CardFrame } from '@/components/ui/CardFrame';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <CardFrame>
      <p className="text-lg leading-8 text-muted">“{quote}”</p>
      <div className="mt-8">
        <p className="font-medium text-white">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </div>
    </CardFrame>
  );
}
