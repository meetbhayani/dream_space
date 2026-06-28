interface CardFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFrame({ children, className = '' }: CardFrameProps) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-[#111111] p-8 shadow-glow transition duration-500 ${className}`.trim()}>
      {children}
    </div>
  );
}
