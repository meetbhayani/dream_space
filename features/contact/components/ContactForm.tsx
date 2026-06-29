'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  projectType: z.enum(['residential', 'commercial', 'retail', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-[24px] border border-white/10 bg-white/5 p-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <Check className="h-8 w-8 text-gold" />
        </div>
        <h3 className="text-xl text-white">Thank you</h3>
        <p className="mt-2 text-sm text-muted">We&apos;ll review your message and get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-5 ${className}`}>
      <div className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Full name"
            className="w-full rounded-[16px] border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white placeholder:text-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Email address"
              className="w-full rounded-[16px] border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white placeholder:text-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>
          <div>
            <input
              {...register('phone')}
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-[16px] border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white placeholder:text-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <select
            {...register('projectType')}
            className="w-full rounded-[16px] border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="retail">Retail</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && <p className="mt-1 text-xs text-red-400">{errors.projectType.message}</p>}
        </div>

        <div>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full resize-none rounded-[16px] border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white placeholder:text-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
          />
          {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-black transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          'Send message'
        )}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
