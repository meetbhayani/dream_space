import { SEOMetadata } from './global';

/**
 * Statistic information displayed on the website.
 */
export interface Statistic {
  /** Unique stable identifier */
  id: string;
  /** Human‑readable label, e.g. "Projects Completed" */
  label: string;
  /** Numeric value or formatted string */
  value: number | string;
  /** Optional unit, e.g. "%" or "+" */
  unit?: string;
  /** Optional description for tooltip */
  description?: string;
  /** Optional icon name */
  icon?: string;
  /** Ordering for display */
  order: number;
  /** Feature flag */
  featured?: boolean;
  /** SEO metadata if needed */
  seo?: SEOMetadata;
  /** Creation timestamp */
  createdAt: string;
}
