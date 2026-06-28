import { CardFrame } from '@/components/ui/CardFrame';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <CardFrame className="space-y-8 bg-[#101010]">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black/70">
            <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-gold/80" />
            <div className="absolute right-1 bottom-1 h-2 w-2 rounded-full bg-white/20" />
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">{name.charAt(0)}</span>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-gold">client testimonial</p>
          <p className="mt-2 text-xl font-light text-white">{name}</p>
          <p className="text-sm text-muted">{role}</p>
        </div>
      </div>

      <div className="grid gap-3 rounded-[24px] border border-white/10 bg-white/5 p-6">
        <div className="h-3 rounded-full bg-white/10" />
        <div className="h-3 w-5/6 rounded-full bg-white/10" />
        <div className="h-3 w-4/6 rounded-full bg-white/10" />
        <p className="text-lg leading-9 text-muted">“{quote}”</p>
      </div>
    </CardFrame>
  );
}
