interface LuxuryButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export function LuxuryButton({ href, variant = 'primary', children, className = '' }: LuxuryButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm uppercase tracking-[0.25em] transition focus:outline-none focus:ring-2 focus:ring-gold/40';
  const styles =
    variant === 'primary'
      ? 'border-transparent bg-gold text-black hover:bg-white/90'
      : 'border-gold/20 bg-white/5 text-white hover:border-gold/60 hover:text-gold';
  const combined = `${base} ${styles} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combined}>
      {children}
    </button>
  );
}
