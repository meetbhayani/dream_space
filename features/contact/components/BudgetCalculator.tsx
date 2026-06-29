'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

const budgetSchema = z.object({
  propertyType: z.enum(['villa', 'apartment', 'office', 'retail']),
  areaSqFt: z.string().refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 100 && num <= 100000;
  }, 'Enter a valid area between 100 and 100,000 sq.ft.'),
  qualityLevel: z.enum(['premium', 'ultra-luxury', 'bespoke']),
  scope: z.array(z.string()).min(1, 'Select at least one scope'),
});

interface BudgetFormData {
  propertyType: 'villa' | 'apartment' | 'office' | 'retail';
  areaSqFt: string;
  qualityLevel: 'premium' | 'ultra-luxury' | 'bespoke';
  scope: string[];
}

const SCOPE_OPTIONS = [
  { value: 'living-room', label: 'Living Room' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'dining', label: 'Dining Area' },
  { value: 'office', label: 'Home Office' },
];

const RATES: Record<string, Record<string, number>> = {
  villa: { premium: 1800, 'ultra-luxury': 3500, bespoke: 5500 },
  apartment: { premium: 1500, 'ultra-luxury': 2800, bespoke: 4500 },
  office: { premium: 1200, 'ultra-luxury': 2200, bespoke: 3800 },
  retail: { premium: 1400, 'ultra-luxury': 2600, bespoke: 4200 },
};

interface BudgetResult {
  minEstimate: number;
  maxEstimate: number;
  baseRate: number;
  qualityLevel: string;
}

export function BudgetCalculator() {
  const [result, setResult] = useState<BudgetResult | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      propertyType: 'villa',
      qualityLevel: 'premium',
      scope: [],
      areaSqFt: '1000',
    },
  });

  const qualityLevel = watch('qualityLevel');
  const propertyType = watch('propertyType');
  const areaSqFt = watch('areaSqFt');

  const calculateEstimate = (data: BudgetFormData) => {
    const area = Number(data.areaSqFt);
    const baseRate = RATES[data.propertyType]?.[data.qualityLevel] ?? 2000;
    const scopeMultiplier = 1 + (data.scope.length - 1) * 0.08;
    const baseEstimate = area * baseRate * scopeMultiplier;

    setResult({
      minEstimate: Math.round(baseEstimate * 0.9),
      maxEstimate: Math.round(baseEstimate * 1.15),
      baseRate,
      qualityLevel: data.qualityLevel,
    });
  };

  const onSubmit = async (data: BudgetFormData) => {
    setSubmitting(true);
    calculateEstimate(data);
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // estimate still shown even if saving fails
    }
    setSubmitting(false);
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Property type</label>
            <select
              {...register('propertyType')}
              className="w-full rounded-[16px] border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
            >
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="office">Office</option>
              <option value="retail">Retail</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Area (sq. ft.)</label>
            <input
              {...register('areaSqFt')}
              type="number"
              className="w-full rounded-[16px] border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
            />
            {errors.areaSqFt && <p className="mt-1 text-xs text-red-400">{errors.areaSqFt.message}</p>}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Quality level</label>
          <div className="flex gap-3">
            {(['premium', 'ultra-luxury', 'bespoke'] as const).map((level) => (
              <label
                key={level}
                className={`flex-1 cursor-pointer rounded-[16px] border px-5 py-4 text-center text-sm transition ${
                  qualityLevel === level
                    ? 'border-gold/50 bg-gold/10 text-gold'
                    : 'border-white/10 bg-[#111111] text-muted hover:border-white/20'
                }`}
              >
                <input {...register('qualityLevel')} type="radio" value={level} className="sr-only" />
                <span className="block text-xs uppercase tracking-[0.15em]">
                  {level === 'ultra-luxury' ? 'Ultra Luxury' : level.charAt(0).toUpperCase() + level.slice(1)}
                </span>
                <span className="mt-1 block text-[10px] opacity-60">
                  ₹{RATES[propertyType]?.[level]?.toLocaleString('en-IN') ?? 2000}/sq.ft
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Scope of work</label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SCOPE_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 rounded-[16px] border border-white/10 bg-[#111111] px-4 py-3 text-sm text-muted transition hover:border-white/20 has-[:checked]:border-gold/50 has-[:checked]:bg-gold/10 has-[:checked]:text-gold"
              >
                <input
                  {...register('scope')}
                  type="checkbox"
                  value={option.value}
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
          {errors.scope && <p className="mt-1 text-xs text-red-400">{errors.scope.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-black transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Calculate estimate'}
        </button>
      </form>

      {result && (
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Estimated budget</p>
            <p className="mt-2 text-3xl font-light text-white">
              {formatCurrency(result.minEstimate)} &ndash; {formatCurrency(result.maxEstimate)}
            </p>
            <p className="mt-1 text-xs text-muted">
              Based on {areaSqFt} sq.ft. at ₹{result.baseRate.toLocaleString('en-IN')}/sq.ft ({result.qualityLevel})
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                setResult(null);
                reset();
              }}
              className="text-xs uppercase tracking-[0.2em] text-gold transition hover:text-white"
            >
              Reset calculator
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
