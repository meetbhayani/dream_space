'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { GALLERY_DATA } from '@/data/gallery';

const galleryItems = GALLERY_DATA.slice(0, 12);

const imageClassMap = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') setSelectedIndex((value) => (value === null ? 0 : (value + 1) % galleryItems.length));
      if (event.key === 'ArrowLeft') setSelectedIndex((value) => (value === null ? 0 : (value - 1 + galleryItems.length) % galleryItems.length));
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex]);

  const activeItem = useMemo(() => (selectedIndex === null ? null : galleryItems[selectedIndex]), [selectedIndex]);

  return (
    <Section id="gallery" className="mt-32">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909]/90 p-8 before:absolute before:-right-20 before:top-1/2 before:h-[320px] before:w-[320px] before:-translate-y-1/2 before:rounded-full before:bg-gold/10 before:blur-3xl">
        <div className="relative space-y-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Gallery"
                title="Moments of texture, light, and calm."
                description="A curated collection of interior scenes that show how atmosphere is shaped through material, proportion, and detail."
              />
            </div>
          </RevealOnScroll>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => {
              const isLoaded = loadedImages[item.id];
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  onClick={() => setSelectedIndex(index)}
                  className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111111] text-left ${imageClassMap[index % imageClassMap.length]}`}
                >
                  <img
                    src={item.thumbnailUrl || item.url}
                    alt={item.alt}
                    loading="lazy"
                    onLoad={() => setLoadedImages((current) => ({ ...current, [item.id]: true }))}
                    className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-70'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{item.category}</p>
                    <h3 className="mt-2 text-lg font-light text-white">{item.title}</h3>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-xl"
          >
            <div className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d] shadow-[0_0_80px_rgba(0,0,0,0.55)]">
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-white/10"
              >
                <X size={18} />
              </button>

              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.7fr]">
                <img src={activeItem.url} alt={activeItem.alt} className="h-[55vh] w-full object-cover lg:h-[70vh]" loading="eager" />
                <div className="flex flex-col justify-between bg-[#111111] p-6 sm:p-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{activeItem.category}</p>
                    <h3 className="mt-4 text-2xl font-light text-white">{activeItem.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{activeItem.description}</p>
                    {activeItem.materialsUsed?.length ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {activeItem.materialsUsed.map((material) => (
                          <span key={material} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70">
                            {material}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedIndex((value) => (value === null ? 0 : (value - 1 + galleryItems.length) % galleryItems.length))}
                      className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-muted transition hover:text-white"
                    >
                      <ArrowLeft size={16} />
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedIndex((value) => (value === null ? 0 : (value + 1) % galleryItems.length))}
                      className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-muted transition hover:text-white"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
