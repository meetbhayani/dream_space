import { z } from 'zod';

export const consultationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  preferredDate: z.string().optional(),
  notes: z.string().optional(),
});

export type ConsultationPayload = z.infer<typeof consultationSchema>;
