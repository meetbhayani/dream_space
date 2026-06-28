interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl ${className}`.trim()}>
      {children}
    </div>
  );
}
