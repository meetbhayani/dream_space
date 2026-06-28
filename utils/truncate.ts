/**
 * Cleanly truncates a string at a specified limit, preserving whole words.
 */
export function truncate(text: string, limit = 150, suffix = '...'): string {
  if (text.length <= limit) {
    return text;
  }

  const subString = text.substring(0, limit - 1);
  return (
    (subString.substring(0, Math.max(subString.lastIndexOf(' '), subString.lastIndexOf('.'), subString.lastIndexOf(','))) || subString) + suffix
  );
}
export default truncate;
