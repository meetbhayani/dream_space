'use client';

import { motion } from 'framer-motion';
import { CardFrame } from '@/components/ui/CardFrame';

const galleryItems = [
  {
    title: 'Material Study',
    label: 'Texture',
    accent: 'from-white/10 to-transparent',
  },
  {
    title: 'Light Narrative',
    label: 'Atmosphere',
    accent: 'from-gold/15 to-transparent',
  },
  {
    title: 'Spatial Flow',
    label: 'Composition',
    accent: 'from-white/10 to-transparent',
  },
  {
    title: 'Quiet Luxury',
    label: 'Editorial',
    accent: 'from-gold/10 to-transparent',
  },
];

export function GalleryGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {galleryItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <CardFrame className="h-full overflow-hidden bg-[#101010]">
            <div className={`relative h-56 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br ${item.accent}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.2),_transparent_30%)]" />
              <div className="absolute inset-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-light text-white">{item.title}</h3>
                </div>
                <div className="h-10 w-10 rounded-full border border-white/10 bg-black/60" />
              </div>
            </div>
          </CardFrame>
        </motion.div>
      ))}
    </div>
  );
}
