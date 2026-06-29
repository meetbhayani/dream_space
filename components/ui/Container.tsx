import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  as?: ElementType;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
  children: ReactNode;
}

export function Container({
  as: Component = 'div',
  size = 'default',
  className = '',
  children,
}: ContainerProps) {
  const sizeClasses = {
    default: 'mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-12',
    narrow: 'mx-auto w-full max-w-[1024px] px-6 md:px-8 lg:px-12',
    wide: 'mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-12',
  };

  return <Component className={`${sizeClasses[size]} ${className}`.trim()}>{children}</Component>;
}
