interface LoadingSpinnerProps {
  className?: string;
}

export function LoadingSpinner({ className = '' }: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`.trim()}>
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-gold" />
    </div>
  );
}
