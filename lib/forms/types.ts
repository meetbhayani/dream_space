import { z } from 'zod';

/** Payload types generated from validation schemas */
export const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: 'Message is required' }),
});
export type ContactPayload = z.infer<typeof contactSchema>;

export const consultationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  preferredDate: z.string().optional(),
  notes: z.string().optional(),
});
export type ConsultationPayload = z.infer<typeof consultationSchema>;

export const newsletterSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});
export type NewsletterPayload = z.infer<typeof newsletterSchema>;

export const quoteSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  projectType: z.string().optional(),
  details: z.string().optional(),
  budget: z.string().optional(),
});
export type QuotePayload = z.infer<typeof quoteSchema>;

/** Simple email result type used by the stub service */
export interface EmailResult {
  success: boolean;
  error?: string;
}
