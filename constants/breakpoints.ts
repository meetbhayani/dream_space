/**
 * Constants relating to breakpoints for the luxury grid system.
 * Based on DESIGN_SYSTEM.md responsive guidelines.
 */
export const BREAKPOINTS = {
  mobile: { min: 0, max: 640 },
  tablet: { min: 641, max: 1024 },
  laptop: { min: 1025, max: 1440 },
  desktop: { min: 1441, max: 1799 },
  ultraWide: { min: 1800, max: Infinity },
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
