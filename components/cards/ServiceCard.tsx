'use client';

import { motion } from 'framer-motion';
import { CardFrame } from '@/components/ui/CardFrame';

interface ServiceCardProps {
  title: string;
  description: string;
  highlight: string;
  details: string[];
}

export function ServiceCard({ title, description, highlight, details }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      className="h-full"
    >
      <CardFrame className="group h-full overflow-hidden border-white/15 bg-[#101010]">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold">{highlight}</span>
          <div className="h-2 w-2 rounded-full bg-gold/70" />
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Tailored service
          </div>
          <h3 className="mt-5 text-2xl font-light leading-tight text-white">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-muted">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </CardFrame>
    </motion.article>
  );
}
