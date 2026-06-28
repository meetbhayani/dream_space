interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <label className="block text-sm text-white">
      <span className="mb-3 block uppercase tracking-[0.25em] text-muted">{label}</span>
      <textarea
        {...props}
        className={`min-h-[140px] w-full rounded-[20px] border border-white/10 bg-[#101010] px-4 py-3 text-white outline-none transition placeholder:text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 ${className}`.trim()}
      />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </label>
  );
}
