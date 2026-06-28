'use client';

import { motion } from 'framer-motion';
import { LuxuryButton } from '@/components/ui/LuxuryButton';

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface px-6 py-16 sm:px-10 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-black/80" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">Dream Space Studio</p>
          <h1 className="text-4xl font-light leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Interiors designed with clarity, calm, and a sense of craft.
          </h1>
          <p className="mt-8 max-w-2xl text-base text-muted sm:text-lg">
            We create premium living spaces that feel effortless, modern, and deeply considered. Every detail is refined to support a luxurious everyday experience.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <LuxuryButton href="#projects" variant="secondary" className="w-full sm:w-auto">
              Explore projects
            </LuxuryButton>
            <LuxuryButton href="#contact" className="w-full sm:w-auto">
              Book a consultation
            </LuxuryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
