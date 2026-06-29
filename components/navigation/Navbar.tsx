'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LuxuryButton } from '@/components/ui/LuxuryButton';

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const linkMotion = {
  whileHover: { y: -1, opacity: 1, scale: 1.01 },
  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <a href="#top" className="text-sm uppercase tracking-[0.35em] text-gold">
          Dream Space
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Primary navigation">
          {links.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={linkMotion.whileHover}
              transition={linkMotion.transition}
              className="text-sm uppercase tracking-[0.25em] text-muted transition hover:text-white"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LuxuryButton href="#contact" variant="secondary" className="px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm">
            Consult
          </LuxuryButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-black/95 md:hidden"
          >
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base uppercase tracking-[0.25em] text-muted transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <LuxuryButton href="#contact" variant="secondary" className="w-full px-5 py-3 text-sm text-center">
                Consult
              </LuxuryButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
