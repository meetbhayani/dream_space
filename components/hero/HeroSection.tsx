'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const subtitleVariant = {
  hidden: { opacity: 0, y: 18, filter: 'blur(14px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="top" background="bg-surface" className="relative overflow-hidden rounded-[32px] border border-white/10 px-6 py-16 sm:px-10 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/5 to-black/80" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <Grid cols={1} className="relative mx-auto max-w-4xl">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={heroContainer}
          className="relative"
        >
          <motion.p variants={heroItem} className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">
            Dream Space Studio
          </motion.p>

          <motion.h1 variants={heroItem} className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden">
              <motion.span variants={heroItem} className="block">
                Interiors designed with clarity,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={heroItem} className="block">
                calm, and a sense of craft.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p variants={subtitleVariant} className="mt-8 max-w-3xl text-base text-muted sm:text-lg">
            We create premium living spaces that feel effortless, modern, and deeply considered. Every detail is refined to support a luxurious everyday experience.
          </motion.p>

          <motion.div variants={heroItem} className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <LuxuryButton href="#contact" className="w-full sm:w-auto">
              Book a consultation
            </LuxuryButton>
            <LuxuryButton href="#projects" variant="secondary" className="w-full sm:w-auto">
              Explore projects
            </LuxuryButton>
          </motion.div>
        </motion.div>
      </Grid>
    </Section>
  );
}
