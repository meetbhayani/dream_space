'use client';

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';

export function BeforeAfterSection() {
  const [position, setPosition] = useState(55);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clampPosition = (value: number) => Math.min(90, Math.max(10, value));

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clampPosition(nextPosition));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    updatePosition(event.clientX);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const handleGlobalPointerUp = () => setIsDragging(false);
    window.addEventListener('pointerup', handleGlobalPointerUp);

    return () => window.removeEventListener('pointerup', handleGlobalPointerUp);
  }, [isDragging]);

  return (
    <Section id="before-after" className="mt-32">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]/90 p-6 sm:p-8">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Before / After"
            title="A transformation that feels calm, precise, and deeply considered."
            description="We shape interiors that reveal their full character through light, materiality, and architectural restraint."
          />
        </RevealOnScroll>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-[#111111] p-3 sm:mt-12">
          <div
            ref={containerRef}
            className="relative h-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0b] touch-none select-none sm:h-[420px]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={() => setIsDragging(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] via-[#111111] to-[#090909]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(212,175,55,0.16),_transparent_35%)]" />
            <div className="absolute left-6 top-6 h-16 w-24 rounded-[18px] border border-white/10 bg-white/5" />
            <div className="absolute bottom-10 left-6 right-10 h-24 rounded-[24px] border border-white/10 bg-white/5" />

            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#e9e2d8] via-[#d4c8b3] to-[#b8a686]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(255,255,255,0.32),_transparent_20%)]" />
              <div className="absolute left-6 top-6 h-16 w-24 rounded-[18px] border border-white/10 bg-white/40" />
              <div className="absolute bottom-10 left-6 right-10 h-24 rounded-[24px] border border-white/10 bg-white/35" />
            </div>

            <motion.div
              className="absolute inset-y-0 w-[2px] bg-gold/80"
              style={{ left: `${position}%` }}
            />
            <motion.div
              className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
              style={{ left: `${position}%` }}
            >
              <div className="h-3 w-3 rounded-full bg-gold" />
            </motion.div>

            <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none">
              <div className="rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/70 backdrop-blur-xl pointer-events-auto">
                Drag to compare
              </div>
            </div>

            <div
              className="absolute inset-0 cursor-ew-resize"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => setIsDragging(false)}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
