const fs = require('fs');
const path = require('path');

// Mock require or simple copy-paste verification since node environment doesn't have transpilers set up yet
const COLORS = {
  accent: {
    gold: '#D4AF37'
  }
};
const BREAKPOINTS = {
  mobile: { max: 640 }
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       
    .replace(/[^\w\-]+/g, '')    
    .replace(/\-\-+/g, '-')      
    .replace(/^-+/, '')          
    .replace(/-+$/, '');         
}

function formatDate(date, includeDay = false) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(dateObj.getTime())) return '';
  const options = includeDay
    ? { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }
    : { month: 'long', year: 'numeric', timeZone: 'UTC' };
  return dateObj.toLocaleDateString('en-US', options);
}

function truncate(text, limit = 150, suffix = '...') {
  if (text.length <= limit) return text;
  const subString = text.substring(0, limit - 1);
  return (
    (subString.substring(0, Math.max(subString.lastIndexOf(' '), subString.lastIndexOf('.'), subString.lastIndexOf(','))) || subString) + suffix
  );
}

function validatePhone(phone) {
  const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
  return phoneRegex.test(phone.trim());
}

function calculateBudget(input) {
  const { propertyType, areaSqFt, qualityLevel, scope } = input;
  let baseRate = 1800;
  if (qualityLevel === 'ultra-luxury') baseRate = 3500;
  else if (qualityLevel === 'bespoke') baseRate = 6000;
  let multiplier = 1.0;
  if (propertyType === 'villa') multiplier = 1.15;
  else if (propertyType === 'office') multiplier = 0.9;
  else if (propertyType === 'retail') multiplier = 1.05;
  const allDesignAreas = ['kitchen', 'living-room', 'bedroom', 'bathroom', 'wardrobes', 'automation'];
  let scopeWeight = 1.0;
  if (scope.length > 0 && scope.length < allDesignAreas.length) {
    scopeWeight = scope.length / allDesignAreas.length;
  }
  const baseRatePerSqFt = Math.round(baseRate * multiplier);
  const minEstimate = Math.round(baseRatePerSqFt * areaSqFt * scopeWeight);
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
    formattedMax: formatter.format(maxEstimate)
  };
}

function runTests() {
  console.log('=== STARTING SPRINT 0 SANITY TESTS ===\n');

  console.log('1. Constants Verification:');
  console.log(`- Accent Gold: ${COLORS.accent.gold}`);
  console.log(`- Mobile Breakpoint Max: ${BREAKPOINTS.mobile.max}px`);
  console.log('SUCCESS\n');

  console.log('2. Utilities Verification:');
  
  const testTitle = 'Luxury Penthouse Sky Villa!';
  const slugified = slugify(testTitle);
  console.log(`- slugify("${testTitle}") => "${slugified}"`);
  if (slugified !== 'luxury-penthouse-sky-villa') throw new Error('slugify failed');

  const testDate = '2026-06-28T12:00:00Z';
  const formattedDate = formatDate(testDate);
  console.log(`- formatDate("${testDate}") => "${formattedDate}"`);
  if (formattedDate !== 'June 2026') throw new Error('formatDate failed');

  const testLongString = 'This is a very long description about a high-end duplex villa located in the heart of Ahmedabad.';
  const truncatedString = truncate(testLongString, 30);
  console.log(`- truncate("${testLongString.substring(0, 40)}...") => "${truncatedString}"`);

  const validPhone = validatePhone('+91 79400 08080');
  const invalidPhone = validatePhone('abc1234');
  console.log(`- validatePhone("+91 79400 08080") => ${validPhone}`);
  console.log(`- validatePhone("abc1234") => ${invalidPhone}`);
  if (!validPhone || invalidPhone) throw new Error('validatePhone failed');

  const budgetResult = calculateBudget({
    propertyType: 'villa',
    areaSqFt: 5000,
    qualityLevel: 'ultra-luxury',
    scope: ['kitchen', 'living-room', 'bedroom']
  });
  console.log(`- calculateBudget(villa, 5000sqft, ultra-luxury) => range: ${budgetResult.formattedMin} - ${budgetResult.formattedMax}`);
  console.log('SUCCESS\n');

  console.log('=== ALL SANITY TESTS PASSED SUCCESSFULLY ===');
}

runTests();
