'use client';

import { motion } from 'framer-motion';
import { Briefcase, Home, ImageIcon, KeyRound, Leaf, Settings, Sun, type LucideIcon } from 'lucide-react';
import { CardFrame } from '@/components/ui/CardFrame';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import type { Service } from '@/types/service';

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  key: KeyRound,
  briefcase: Briefcase,
  settings: Settings,
  sun: Sun,
  leaf: Leaf,
  image: ImageIcon,
};

function getServiceIcon(iconName: string): LucideIcon {
  return iconMap[iconName] ?? Home;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon);

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="h-full"
    >
      <CardFrame className="group h-full border-white/10 bg-[#0c0c0c] p-7 transition duration-300 hover:border-gold/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.12)]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold">
            <Icon size={18} />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-muted">
            {service.category.replace(/-/g, ' ')}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-light leading-tight text-white">{service.title}</h3>
          <p className="text-sm leading-7 text-muted">{service.summary}</p>

          <ul className="space-y-2 text-sm text-muted">
            {service.features.slice(0, 3).map((feature) => (
              <li key={feature.title} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
          <span className="text-sm uppercase tracking-[0.25em] text-gold">
            {service.pricingRange || 'Tailored proposal'}
          </span>
          <LuxuryButton href="#contact" variant="secondary" className="px-4 py-2 text-[11px]">
            Discover
          </LuxuryButton>
        </div>
      </CardFrame>
    </motion.article>
  );
}
