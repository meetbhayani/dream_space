'use client';

import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.9, delay: 1.6 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.16),_transparent_55%)]" />
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center gap-6"
      >
        <div className="h-px w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center text-[11px] uppercase tracking-[0.42em] text-white/70"
        >
          Dream Space Studio
          <span className="mt-2 block text-[10px] tracking-[0.3em] text-white/40">Curating calm luxury</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
