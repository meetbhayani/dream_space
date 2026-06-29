'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
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

const stats = [
  { value: '28+', label: 'Awarded spaces' },
  { value: '12 yrs', label: 'Design experience' },
  { value: '100%', label: 'Tailored delivery' },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.05, ease: 'power3.out', delay: 0.12 },
      );
      gsap.fromTo(
        glowRef.current,
        { scale: 0.9, opacity: 0.6 },
        { scale: 1.04, opacity: 0.85, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut' },
      );
      gsap.fromTo(
        '.hero-stat-card',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 0.35, ease: 'power3.out' },
      );
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <Section id="top" background="bg-surface" className="relative overflow-hidden rounded-[32px] border border-white/10 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-10">
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/5 to-black/80" />
      <div ref={glowRef} className="absolute left-1/2 top-0 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <Grid cols={2} className="relative isolate mx-auto max-w-7xl items-center gap-12 lg:gap-16">
        <motion.div
          ref={heroRef}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={heroContainer}
          className="relative max-w-3xl"
        >
          <motion.p variants={heroItem} className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">
            Dream Space Studio
          </motion.p>

          <motion.h1 variants={heroItem} className="text-4xl font-light leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
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

          <motion.p variants={subtitleVariant} className="mt-8 max-w-3xl text-sm leading-7 text-muted sm:text-base lg:text-lg">
            We create premium living spaces that feel effortless, modern, and deeply considered. Every detail is refined to support a luxurious everyday experience.
          </motion.p>

          <motion.div variants={heroItem} className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
            <LuxuryButton href="#contact" className="w-full sm:w-auto">
              Book a consultation
            </LuxuryButton>
            <LuxuryButton href="#projects" variant="secondary" className="w-full sm:w-auto">
              Explore projects
            </LuxuryButton>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat-card rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-light text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[32px] border border-gold/20 bg-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-3 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111111]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-[320px] w-full object-cover sm:h-[400px]"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-[11px] uppercase tracking-[0.35em] text-white/70 backdrop-blur-xl">
                <Play size={12} className="fill-current" />
                Featured project
              </div>
            </div>
          </div>
        </motion.div>
      </Grid>

      <a href="#projects" className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-muted backdrop-blur-xl transition hover:text-white">
        <span>Scroll</span>
        <ArrowDown size={14} />
      </a>
    </Section>
  );
}
