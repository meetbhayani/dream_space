/**
 * Formats a Date object or ISO string into a luxury editorial format.
 * Example: "October 2026" or "October 15, 2026"
 */
export function formatDate(date: Date | string, includeDay = false): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return '';
  }

  const options: Intl.DateTimeFormatOptions = includeDay
    ? { month: 'long', day: 'numeric', year: 'numeric' }
    : { month: 'long', year: 'numeric' };

  return dateObj.toLocaleDateString('en-US', options);
}
export default formatDate;
