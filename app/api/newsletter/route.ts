import { NextRequest } from 'next/server';
import { z } from 'zod';
import { newsletterSchema } from './validation';
import { handleNewsletter } from '@/lib/forms/service';
import { successResponse, errorResponse } from '@/lib/forms/response';

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const payload = newsletterSchema.parse(json);
    await handleNewsletter(payload);
    return successResponse({ message: 'Newsletter subscription successful' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const details = err.format();
      return errorResponse('Validation error', details);
    }
    console.error('Newsletter endpoint error', err);
    return errorResponse('Internal server error');
  }
}
