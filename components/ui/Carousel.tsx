'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  slides: React.ReactNode[];
  className?: string;
}

export function Carousel({ slides, className = '' }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollLeft = element.scrollLeft;
      const childWidth = element.children[0]?.clientWidth ?? 1;
      const closestIndex = Math.round(scrollLeft / (childWidth + 24));
      setActiveIndex(Math.min(Math.max(closestIndex, 0), slides.length - 1));
    };

    element.addEventListener('scroll', handleScroll, { passive: true });
    return () => element.removeEventListener('scroll', handleScroll);
  }, [slides.length]);

  const scrollToSlide = (index: number) => {
    const panel = containerRef.current?.children[index] as HTMLElement | undefined;
    if (panel) {
      panel.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, activeIndex - 1);
    scrollToSlide(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(slides.length - 1, activeIndex + 1);
    scrollToSlide(nextIndex);
  };

  if (!slides.length) {
    return null;
  }

  return (
    <div className={`relative ${className}`.trim()}>
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 touch-pan-x scroll-smooth"
        aria-roledescription="carousel"
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-[80vw] sm:min-w-[60vw] snap-center">
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 items-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={activeIndex === 0}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={activeIndex === slides.length - 1}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-8 rounded-full transition ${index === activeIndex ? 'bg-gold' : 'bg-white/15 hover:bg-white/30'}`}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
