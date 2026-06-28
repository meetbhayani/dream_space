import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' })
});

export type NewsletterPayload = z.infer<typeof newsletterSchema>;
