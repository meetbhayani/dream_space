import { BudgetCalculatorInput, BudgetCalculatorResult } from '../types/forms';

/**
 * Luxury Interior Budget Calculator Helper.
 * Estimates are formulated based on typical high-end finish rates per square foot in major metros.
 * Quality Levels:
 * - Premium (High-quality standard): Starting at ₹1,500/sq.ft.
 * - Ultra-Luxury (Elite brands & finishes): Starting at ₹3,000/sq.ft.
 * - Bespoke (Custom imported marbles, global brands): Starting at ₹5,000/sq.ft.
 */
export function calculateBudget(input: BudgetCalculatorInput): BudgetCalculatorResult {
  const { propertyType, areaSqFt, qualityLevel, scope } = input;

  let baseRate = 1800; // default premium base rate per sq.ft.
  
  if (qualityLevel === 'ultra-luxury') {
    baseRate = 3500;
  } else if (qualityLevel === 'bespoke') {
    baseRate = 6000;
  }

  // Adjustments based on property type complexity
  let multiplier = 1.0;
  if (propertyType === 'villa') {
    multiplier = 1.15; // Extra structural integration
  } else if (propertyType === 'office') {
    multiplier = 0.9;  // Higher volume density
  } else if (propertyType === 'retail') {
    multiplier = 1.05; // Complex lighting & display fixtures
  }

  // scope adjustments (if client selected a subset of design areas)
  const allDesignAreas = ['kitchen', 'living-room', 'bedroom', 'bathroom', 'wardrobes', 'automation'];
  let scopeWeight = 1.0;
  if (scope.length > 0 && scope.length < allDesignAreas.length) {
    scopeWeight = scope.length / allDesignAreas.length;
  }

  const baseRatePerSqFt = Math.round(baseRate * multiplier);
  const minEstimate = Math.round(baseRatePerSqFt * areaSqFt * scopeWeight);
  // Max estimate has a 25% buffer for luxury contingency & custom changes
  const maxEstimate = Math.round(minEstimate * 1.25);

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  return {
    minEstimate,
    maxEstimate,
    formattedMin: formatter.format(minEstimate),
    formattedMax: formatter.format(maxEstimate),
    qualityLevel,
    details: {
      baseRatePerSqFt,
      areaSqFt,
      propertyType,
    },
  };
}
export default calculateBudget;
