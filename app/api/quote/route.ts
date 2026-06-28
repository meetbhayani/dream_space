import { NextRequest } from 'next/server';
import { z } from 'zod';
import { quoteSchema } from './validation';
import { handleQuote } from '@/lib/forms/service';
import { successResponse, errorResponse } from '@/lib/forms/response';

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const payload = quoteSchema.parse(json);
    await handleQuote(payload);
    return successResponse({ message: 'Quote request received' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const details = err.format();
      return errorResponse('Validation error', details);
    }
    console.error('Quote endpoint error', err);
    return errorResponse('Internal server error');
  }
}
