import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: 'Message cannot be empty' }),
});

export type ContactPayload = z.infer<typeof contactSchema>;
