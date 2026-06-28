import { z } from 'zod';

export const quoteSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  projectDetails: z.string().min(1, { message: 'Project details required' }),
  budget: z.string().optional(),
});

export type QuotePayload = z.infer<typeof quoteSchema>;
