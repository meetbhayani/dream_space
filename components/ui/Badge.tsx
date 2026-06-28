interface BadgeProps {
  label: string;
  variant?: 'default' | 'gold' | 'subtle';
  className?: string;
}

const badgeStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-white/5 text-white border border-white/10',
  gold: 'bg-gold/10 text-gold border border-gold/20',
  subtle: 'bg-white/5 text-muted border border-white/10',
};

export function Badge({ label, variant = 'default', className = '' }: BadgeProps) {
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs uppercase tracking-[0.3em] ${badgeStyles[variant]} ${className}`.trim()}>{label}</span>;
}
