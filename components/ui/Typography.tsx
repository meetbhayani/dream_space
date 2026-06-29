import type { ElementType, ReactNode } from 'react';

interface TypographyProps {
  as?: ElementType;
  variant?: 'eyebrow' | 'h1' | 'h2' | 'h3' | 'p' | 'muted' | 'label';
  className?: string;
  children: ReactNode;
}

export function Typography({
  as: Component = 'p',
  variant = 'p',
  className = '',
  children,
}: TypographyProps) {
  const variantClasses = {
    eyebrow: 'text-sm uppercase tracking-[0.35em] text-gold',
    h1: 'text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl',
    h2: 'text-3xl font-light leading-tight text-white sm:text-4xl',
    h3: 'text-2xl font-light leading-tight text-white',
    p: 'text-base leading-7 text-muted',
    muted: 'text-sm leading-7 text-muted',
    label: 'text-[11px] uppercase tracking-[0.35em] text-white/70',
  };

  return <Component className={`${variantClasses[variant]} ${className}`.trim()}>{children}</Component>;
}
