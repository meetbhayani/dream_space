/**
 * Basic validation for international phone number structures.
 * Supports spaces, dashes, parentheses and a leading plus.
 */
export function validatePhone(phone: string): boolean {
  // Simple regex for international phone numbers matching +XX XXX XXX XXXX structures
  const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
  return phoneRegex.test(phone.trim());
}
export default validatePhone;
