import { LuxuryButton } from '@/components/ui/LuxuryButton';

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden rounded-full border border-white/10 bg-black/80 p-2 shadow-[0_0_35px_rgba(212,175,55,0.16)] backdrop-blur-xl md:block">
      <LuxuryButton href="#contact" className="px-5 py-3 text-xs sm:px-6 sm:py-3">
        Book a consultation
      </LuxuryButton>
    </div>
  );
}
