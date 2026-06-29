interface GridProps {
  cols?: 1 | 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
}

const colsMap: Record<1 | 2 | 3 | 4, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
};

export function Grid({ cols = 2, className = '', children }: GridProps) {
  return <div className={`grid ${colsMap[cols]} gap-6 sm:gap-8 ${className}`.trim()}>{children}</div>;
}
