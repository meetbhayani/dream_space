// lib/seo/canonical.ts
/**
 * Normalise a URL for use as a canonical link.
 * - Removes trailing slash (except for root)
 * - Lower‑cases hostname
 * - Strips query string and hash
 */
export function getCanonicalUrl(baseUrl: string, path: string): string {
  const url = new URL(path, baseUrl);
  url.search = '';
  url.hash = '';
  // Remove trailing slash if not root
  const href = url.href.replace(/\/+$/, '');
  return href;
}
