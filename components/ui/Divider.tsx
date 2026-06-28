interface DividerProps {
  className?: string;
}

export function Divider({ className = '' }: DividerProps) {
  return <div className={`h-[1px] w-full bg-white/10 ${className}`.trim()} />;
}
