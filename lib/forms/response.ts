export function successResponse<T>(data?: T) {
  return new Response(JSON.stringify({ ok: true, data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export function errorResponse(message: string, details?: Record<string, string>, status = 400) {
  return new Response(JSON.stringify({ ok: false, error: { message, details } }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
