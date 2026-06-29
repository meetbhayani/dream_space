'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CardFrame } from '@/components/ui/CardFrame';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  highlight: string;
}

export function ProjectCard({ title, location, description, highlight }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="h-full"
    >
      <CardFrame className="group h-full overflow-hidden border-white/10 bg-[#0c0c0c] p-0 transition duration-300 hover:border-gold/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.12)]">
        <div className="relative overflow-hidden rounded-b-[28px] bg-gradient-to-br from-[#111111] via-[#0b0b0b] to-[#111111] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="relative mb-6 grid h-[280px] gap-4 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-5 shadow-inner">
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.2),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
            <div className="relative grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 rounded-[24px] border border-white/10 bg-white/5" />
                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-white/10" />
                  <div className="h-3 w-5/6 rounded-full bg-white/10" />
                  <div className="h-3 w-3/4 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-[1fr_0.6fr]">
                <div className="h-40 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="space-y-3">
                  <div className="h-14 rounded-[20px] border border-white/10 bg-white/5" />
                  <div className="h-14 rounded-[20px] border border-white/10 bg-white/5" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-[20px] border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
              <span className="text-[11px] uppercase tracking-[0.35em] text-gold">{highlight}</span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">{location}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-7 pb-7">
          <h3 className="text-2xl font-light leading-tight text-white">{title}</h3>
          <p className="text-sm leading-7 text-muted">{description}</p>
          <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold transition group-hover:gap-4">
            View project
            <ArrowRight size={14} />
          </div>
        </div>
      </CardFrame>
    </motion.article>
  );
}
