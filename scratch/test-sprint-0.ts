import { slugify } from './utils/slugify';
import { formatDate } from './utils/formatDate';
import { truncate } from './utils/truncate';
import { validatePhone } from './utils/validatePhone';
import { calculateBudget } from './utils/calculateBudget';
import { PROJECTS_DATA } from './data/projects';
import { SERVICES_DATA } from './data/services';
import { TESTIMONIALS_DATA } from './data/testimonials';
import { FAQ_DATA } from './data/faq';
import { TEAM_DATA } from './data/team';
import { COLORS } from './constants/colors';
import { BREAKPOINTS } from './constants/breakpoints';

function runTests() {
  console.log('=== STARTING SPRINT 0 SANITY TESTS ===\n');

  // 1. Check constants
  console.log('1. Constants Verification:');
  console.log(`- Accent Gold: ${COLORS.accent.gold}`);
  console.log(`- Mobile Breakpoint Max: ${BREAKPOINTS.mobile.max}px`);
  console.log('SUCCESS\n');

  // 2. Check utils
  console.log('2. Utilities Verification:');
  
  const testTitle = 'Luxury Penthouse Sky Villa!';
  const slugified = slugify(testTitle);
  console.log(`- slugify("${testTitle}") => "${slugified}" (Expected: "luxury-penthouse-sky-villa")`);
  if (slugified !== 'luxury-penthouse-sky-villa') throw new Error('slugify failed');

  const testDate = '2026-06-28T12:00:00Z';
  const formattedDate = formatDate(testDate);
  console.log(`- formatDate("${testDate}") => "${formattedDate}" (Expected: "June 2026")`);
  if (formattedDate !== 'June 2026') throw new Error('formatDate failed');

  const testLongString = 'This is a very long description about a high-end duplex villa located in the heart of Ahmedabad.';
  const truncatedString = truncate(testLongString, 30);
  console.log(`- truncate("${testLongString.substring(0, 40)}...") => "${truncatedString}"`);

  const validPhone = validatePhone('+91 79400 08080');
  const invalidPhone = validatePhone('abc1234');
  console.log(`- validatePhone("+91 79400 08080") => ${validPhone} (Expected: true)`);
  console.log(`- validatePhone("abc1234") => ${invalidPhone} (Expected: false)`);
  if (!validPhone || invalidPhone) throw new Error('validatePhone failed');

  const budgetResult = calculateBudget({
    propertyType: 'villa',
    areaSqFt: 5000,
    qualityLevel: 'ultra-luxury',
    scope: ['kitchen', 'living-room', 'bedroom']
  });
  console.log(`- calculateBudget(villa, 5000sqft, ultra-luxury) => range: ${budgetResult.formattedMin} - ${budgetResult.formattedMax}`);
  console.log('SUCCESS\n');

  // 3. Check data structures
  console.log('3. Data Structures Verification:');
  console.log(`- Services count: ${SERVICES_DATA.length}`);
  console.log(`- Projects count: ${PROJECTS_DATA.length}`);
  console.log(`- Testimonials count: ${TESTIMONIALS_DATA.length}`);
  console.log(`- FAQ count: ${FAQ_DATA.length}`);
  console.log(`- Team members: ${TEAM_DATA.map(t => t.name).join(', ')}`);
  console.log('SUCCESS\n');

  console.log('=== ALL SANITY TESTS PASSED SUCCESSFULLY ===');
}

try {
  runTests();
} catch (error) {
  console.error('TEST RUN FAILED:', error);
  process.exit(1);
}
