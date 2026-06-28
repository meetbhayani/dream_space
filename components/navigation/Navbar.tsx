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
  whileHover: { y: -1, opacity: 1 },
  transition: { duration: 0.2 },
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-8 lg:px-12">
        <a href="#top" className="text-sm uppercase tracking-[0.35em] text-gold">
          Dream Space
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
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
          <LuxuryButton href="#contact" variant="secondary" className="px-5 py-3 text-sm">
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
            <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-6">
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
