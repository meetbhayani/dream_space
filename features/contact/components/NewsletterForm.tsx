'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Loader2 } from 'lucide-react';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  className?: string;
  placeholder?: string;
}

export function NewsletterForm({ className = '', placeholder = 'Enter your email' }: NewsletterFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Subscription failed');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/5 px-5 py-4">
        <Check className="h-5 w-5 shrink-0 text-gold" />
        <p className="text-sm text-muted">You&apos;re subscribed. Welcome to the studio.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="flex gap-3">
        <div className="flex-1">
          <input
            {...register('email')}
            type="email"
            placeholder={placeholder}
            className="w-full rounded-[16px] border border-white/10 bg-[#111111] px-5 py-3 text-sm text-white placeholder:text-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex shrink-0 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] text-black transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
