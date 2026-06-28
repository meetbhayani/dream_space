/**
 * Luxury Brand Color System according to DESIGN_SYSTEM.md.
 * Pure dark background, elevated surfaces, thin borders, and the signature gold accent.
 */
export const COLORS = {
  background: {
    primary: '#050505',   // Pure Black
    secondary: '#111111', // Dark Surface (cards, panels)
    elevated: '#181818',  // Hover states, dropdowns
  },
  text: {
    primary: '#FFFFFF',   // Headings, active states
    secondary: '#D6D6D6', // Paragraphs, description body
    muted: '#8B8B8B',     // Captions, labels, timestamps
  },
  accent: {
    gold: '#D4AF37',      // Signature gold for elements of craftsmanship/luxury
    goldHover: '#F3E5AB', // Softer cream gold for elegant transitions
  },
  border: {
    opacity08: 'rgba(255, 255, 255, 0.08)', // Standard 1px structural lines
    opacity10: 'rgba(255, 255, 255, 0.10)', // Subtle separators
  },
  overlay: {
    glass: 'rgba(255, 255, 255, 0.05)',
  },
} as const;
