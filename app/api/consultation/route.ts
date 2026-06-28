import { NextRequest } from 'next/server';
import { z } from 'zod';
import { consultationSchema } from './validation';
import { handleConsultation } from '@/lib/forms/service';
import { successResponse, errorResponse } from '@/lib/forms/response';

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const payload = consultationSchema.parse(json);
    await handleConsultation(payload);
    return successResponse({ message: 'Consultation request received' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const details = err.format();
      return errorResponse('Validation error', details);
    }
    console.error('Consultation endpoint error', err);
    return errorResponse('Internal server error');
  }
}
