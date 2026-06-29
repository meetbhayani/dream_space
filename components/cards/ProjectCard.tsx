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

export function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <CardFrame className="group overflow-hidden hover:-translate-y-1 hover:border-gold/30">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#111111] via-[#0b0b0b] to-[#111111] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="relative mb-6 grid h-[240px] gap-3 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-4 shadow-inner sm:h-[280px] sm:gap-4 sm:p-5">
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.2),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
            <div className="relative grid gap-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="h-16 rounded-[24px] border border-white/10 bg-white/5 sm:h-20" />
                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-white/10" />
                  <div className="h-3 w-5/6 rounded-full bg-white/10" />
                  <div className="h-3 w-3/4 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-[1fr_0.6fr]">
                <div className="h-32 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent sm:h-40" />
                <div className="space-y-3">
                  <div className="h-14 rounded-[20px] bg-white/5 border border-white/10" />
                  <div className="h-14 rounded-[20px] bg-white/5 border border-white/10" />
                </div>
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
        </div>
      </CardFrame>
    </motion.article>
  );
}
