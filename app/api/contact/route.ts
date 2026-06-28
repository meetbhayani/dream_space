import { NextRequest } from 'next/server';
import { z } from 'zod';
import { contactSchema } from './validation';
import { handleContact } from '@/lib/forms/service';
import { successResponse, errorResponse } from '@/lib/forms/response';

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const payload = contactSchema.parse(json);
    await handleContact(payload);
    return successResponse({ message: 'Contact request received' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const details = err.format();
      return errorResponse('Validation error', details);
    }
    console.error('Contact endpoint error', err);
    return errorResponse('Internal server error');
  }
}
