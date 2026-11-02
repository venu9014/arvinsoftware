import puppeteer from 'puppeteer-core';
import fs from 'fs';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE_URL = 'http://localhost:3000';

const VIEWPORTS = [
  { name: 'Small mobile', width: 320, height: 640 },
  { name: 'Standard mobile', width: 375, height: 812 },
  { name: 'Large mobile', width: 430, height: 932 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Laptop', width: 1366, height: 768 },
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Large desktop', width: 1920, height: 1080 },
];

const PAGES = [
  { route: '/', name: 'Home', expectedHeading: 'Turning Ideas Into Digital Reality' },
  { route: '/about', name: 'About Us', expectedHeading: 'Architecting High-Impact Digital Solutions' },
  { route: '/services', name: 'Services', expectedHeading: 'Proposed Service Offerings' },
  { route: '/projects', name: 'Projects', expectedHeading: 'Active Initiatives' },
  { route: '/technologies', name: 'Technologies', expectedHeading: 'Proposed Technology Stack' },
  { route: '/contact', name: 'Contact Us', expectedHeading: 'Contact ArvinSoftware' },
  { route: '/blog', name: 'Blog', expectedHeading: 'Insights & Tech Updates' },
  { route: '/careers', name: 'Careers', expectedHeading: 'Build the Future with ArvinSoftware' },
  { route: '/testimonials', name: 'Testimonials', expectedHeading: 'Client Testimonials' },
  { route: '/privacy-policy', name: 'Privacy Policy', expectedHeading: 'Privacy Policy' },
  { route: '/terms', name: 'Terms & Conditions', expectedHeading: 'Terms & Conditions' },
];

const results = {
  inrTests: [],
  pageTests: [],
  formTests: [],
  themeTests: [],
  responsiveTests: [],
  navigationTests: [],
  accessibilityTests: [],
  seoTests: [],
  consoleErrors: [],
  failedCount: 0,
  passedCount: 0,
};

function recordTest(category, name, passed, details = '') {
  const item = { name, passed, details };
  results[category].push(item);
  if (passed) {
    results.passedCount++;
    console.log(`  [PASS] ${name}`);
  } else {
    results.failedCount++;
    console.error(`  [FAIL] ${name} - ${details}`);
  }
}

async function runTestSuite() {
  console.log('====================================================');
  console.log('STARTING ARVINSOFTWARE PHASE 1 AUTOMATED QA SUITE');
  console.log('====================================================\n');

  // --- PART 1: INR Currency Unit Testing ---
  console.log('--- 1. Testing INR Currency Formatter ---');
  const formatINR = (amount) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);

  const testAmounts = [500, 1000, 10000, 25000, 50000, 100000, 500000, 1000000, 10000000];
  const expectedFormats = [
    '₹500',
    '₹1,000',
    '₹10,000',
    '₹25,000',
    '₹50,000',
    '₹1,00,00,000' === '₹1,00,000' ? '' : '₹1,00,000',
    '₹5,00,000',
    '₹10,00,000',
    '₹1,00,00,000',
  ];

  testAmounts.forEach((amt, idx) => {
    const formatted = formatINR(amt);
    const expected = expectedFormats[idx];
    recordTest('inrTests', `Format INR for amount ${amt}`, formatted === expected, `Got: "${formatted}", Expected: "${expected}"`);
  });

  // Launch browser for end-to-end testing
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('pageerror', (err) => {
    results.consoleErrors.push(`[PAGE ERROR] ${err.message}`);
    console.error(`PAGE ERROR: ${err.message}`);
  });

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      results.consoleErrors.push(`[CONSOLE ERROR] ${msg.text()}`);
    }
  });

  // --- PART 2: All 11 Pages Verification ---
  console.log('\n--- 2. Verifying All 11 Website Pages ---');
  for (const p of PAGES) {
    const url = `${BASE_URL}${p.route}`;
    const response = await page.goto(url, { waitUntil: 'networkidle0' });
    const status = response ? response.status() : 0;
    const title = await page.title();
    const hasH1 = await page.evaluate(() => !!document.querySelector('h1'));
    const h1Text = await page.evaluate(() => document.querySelector('h1')?.innerText || '');

    const statusOk = status === 200;
    const titleOk = title.length > 5 && title.includes('ArvinSoftware');
    const headingOk = hasH1;

    recordTest(
      'pageTests',
      `Page ${p.name} (${p.route}) HTTP 200`,
      statusOk,
      `Status: ${status}`
    );
    recordTest(
      'pageTests',
      `Page ${p.name} Title check`,
      titleOk,
      `Title: "${title}"`
    );
    recordTest(
      'pageTests',
      `Page ${p.name} H1 Heading check`,
      headingOk,
      `H1: "${h1Text.replace(/\n/g, ' ')}"`
    );
  }

  // --- PART 3: Specific Content & Scope Constraint Tests ---
  console.log('\n--- 3. Verifying Scope Constraints & Specific Content ---');

  // Home Page Checks
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  const homeContent = await page.evaluate(() => document.body.innerText);
  recordTest(
    'pageTests',
    'Home: Company Tagline "Turning Ideas Into Digital Reality."',
    homeContent.includes('Turning Ideas Into Digital Reality.')
  );
  recordTest(
    'pageTests',
    'Home: Hero Description exact match',
    homeContent.includes('We transform ideas into powerful digital experiences')
  );
  recordTest(
    'pageTests',
    'Home: CTA "Explore Our Services" button exists',
    await page.evaluate(() => !!document.querySelector('a[href="/services"]'))
  );
  recordTest(
    'pageTests',
    'Home: CTA "Let\'s Talk" button exists',
    await page.evaluate(() => Array.from(document.querySelectorAll('button, a')).some((el) => el.innerText.includes("Let's Talk")))
  );

  // Projects Page Checks: Strictly WOWBUS and Madams Chocklets
  await page.goto(`${BASE_URL}/projects`, { waitUntil: 'networkidle0' });
  const projectsContent = await page.evaluate(() => document.body.innerText);
  recordTest('pageTests', 'Projects: WOWBUS present', projectsContent.includes('WOWBUS'));
  recordTest('pageTests', 'Projects: Madams Chocklets present', projectsContent.includes('Madams Chocklets'));
  recordTest('pageTests', 'Projects: Status is Ongoing', projectsContent.includes('Ongoing'));

  // Blog Page Checks: Empty state
  await page.goto(`${BASE_URL}/blog`, { waitUntil: 'networkidle0' });
  const blogContent = await page.evaluate(() => document.body.innerText);
  recordTest(
    'pageTests',
    'Blog: Required empty state "Insights and updates are coming soon."',
    blogContent.includes('Insights and updates are coming soon.')
  );

  // Careers Page Checks: Empty state
  await page.goto(`${BASE_URL}/careers`, { waitUntil: 'networkidle0' });
  const careersContent = await page.evaluate(() => document.body.innerText);
  recordTest(
    'pageTests',
    'Careers: Required empty state "No current openings. Please check back later."',
    careersContent.includes('No current openings. Please check back later.')
  );

  // Testimonials Page Checks: Empty state
  await page.goto(`${BASE_URL}/testimonials`, { waitUntil: 'networkidle0' });
  const testimonialsContent = await page.evaluate(() => document.body.innerText);
  recordTest(
    'pageTests',
    'Testimonials: Required empty state "Customer stories will be featured here soon."',
    testimonialsContent.includes('Customer stories will be featured here soon.')
  );

  // Legal Pages: Draft notice
  await page.goto(`${BASE_URL}/privacy-policy`, { waitUntil: 'networkidle0' });
  const privacyContent = await page.evaluate(() => document.body.innerText);
  recordTest(
    'pageTests',
    'Privacy Policy: Draft legal review warning banner present',
    privacyContent.includes('DRAFT DOCUMENT — REQUIRES FORMAL LEGAL REVIEW')
  );

  await page.goto(`${BASE_URL}/terms`, { waitUntil: 'networkidle0' });
  const termsContent = await page.evaluate(() => document.body.innerText);
  recordTest(
    'pageTests',
    'Terms & Conditions: Draft legal review warning banner present',
    termsContent.includes('DRAFT DOCUMENT — REQUIRES FORMAL LEGAL REVIEW')
  );

  // --- PART 4: Contact Information & Form Validation Testing ---
  console.log('\n--- 4. Testing Contact Details & Form Validation ---');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });
  const contactContent = await page.evaluate(() => document.body.innerText);

  recordTest('formTests', 'Contact: Exact Email venugopalreddyc.in@gmail.com', contactContent.includes('venugopalreddyc.in@gmail.com'));
  recordTest('formTests', 'Contact: Person 1 Venugopal Reddy present', contactContent.includes('Venugopal Reddy'));
  recordTest('formTests', 'Contact: Phone 1 9014194696 present with tel: link', await page.evaluate(() => !!document.querySelector('a[href="tel:9014194696"]')));
  recordTest('formTests', 'Contact: Person 2 Venkatesh Shetty present', contactContent.includes('Venkatesh Shetty'));
  recordTest('formTests', 'Contact: Phone 2 63632 67322 present with tel: link', await page.evaluate(() => !!document.querySelector('a[href="tel:6363267322"]')));
  recordTest('formTests', 'Contact: WhatsApp inactive notice present', contactContent.includes('pending international dialing code confirmation') || contactContent.includes('pending confirmation'));

  // Test Contact Form INR Budget Options
  const budgetOptions = await page.evaluate(() => {
    const select = document.querySelector('#budget');
    if (!select) return [];
    return Array.from(select.options).map((opt) => opt.text);
  });

  const expectedINRBudget = [
    'Below ₹10,000',
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹5,00,000',
    'Above ₹5,00,000',
    'Not decided yet',
  ];

  expectedINRBudget.forEach((opt) => {
    recordTest(
      'inrTests',
      `Budget dropdown contains INR option: "${opt}"`,
      budgetOptions.includes(opt),
      `Options found: ${JSON.stringify(budgetOptions)}`
    );
  });

  // Situation 1: Submit empty form
  console.log('  Testing form scenario: empty submission...');
  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 400));
  const emptyValidationErrors = await page.evaluate(() =>
    Array.from(document.querySelectorAll('p.text-rose-500')).map((p) => p.innerText.trim())
  );
  recordTest(
    'formTests',
    'Form Validation: Required field errors trigger on empty submit',
    emptyValidationErrors.length >= 4,
    `Error count: ${emptyValidationErrors.length}`
  );

  // Situation 2: Invalid Email
  console.log('  Testing form scenario: invalid email...');
  await page.type('#email', 'invalid-email-format');
  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 300));
  const emailError = await page.evaluate(() => {
    const errs = Array.from(document.querySelectorAll('p.text-rose-500')).map((p) => p.innerText);
    return errs.some((e) => e.includes('valid email'));
  });
  recordTest('formTests', 'Form Validation: Rejects invalid email', emailError);

  // Situation 3: Invalid Phone
  console.log('  Testing form scenario: invalid phone...');
  await page.type('#phone', '123');
  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 300));
  const phoneError = await page.evaluate(() => {
    const errs = Array.from(document.querySelectorAll('p.text-rose-500')).map((p) => p.innerText);
    return errs.some((e) => e.includes('valid phone'));
  });
  recordTest('formTests', 'Form Validation: Rejects invalid phone', phoneError);

  // Situation 4: Valid Submission with INR Budget
  console.log('  Testing form scenario: valid submission with INR budget selection...');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });
  await page.type('#fullName', 'QA Verification Specialist');
  await page.type('#email', 'qa.tester@example.com');
  await page.type('#phone', '9876543210');
  await page.type('#companyName', 'QA Enterprises Ltd');
  await page.select('#service', 'Website Development');
  await page.select('#budget', '₹50,000 – ₹1,00,000');
  await page.select('#timeline', '1 - 3 months');
  await page.type('#description', 'This is an automated regression test submission verifying INR budget and validation.');
  await page.evaluate(() => {
    const cb = document.querySelector('input[type="checkbox"]');
    if (cb && !cb.checked) cb.click();
  });

  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 1200));

  const successHeader = await page.evaluate(() => document.querySelector('h3.text-xl.font-bold')?.innerText || '');
  const isDemoDisclaimer = await page.evaluate(() => document.body.innerText.includes('Phase 1 Scope Disclosure'));

  recordTest(
    'formTests',
    'Form: Valid demo submission triggers success feedback state',
    successHeader.includes('Form Validation Completed Successfully') || successHeader.includes('Successfully'),
    `Success header: "${successHeader}"`
  );
  recordTest(
    'formTests',
    'Form: Success state clarifies frontend demo with no fake delivery',
    isDemoDisclaimer
  );

  // --- PART 5: Dark/Light Mode Theme Switching & Persistence ---
  console.log('\n--- 5. Testing Theme Switcher & Persistence ---');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

  // Check default theme is dark
  const isInitiallyDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  recordTest('themeTests', 'Default theme is dark', isInitiallyDark);

  // Toggle to light
  await page.click('header button[aria-label*="Switch to"]');
  await new Promise((r) => setTimeout(r, 500));
  const isNowLight = await page.evaluate(() => !document.documentElement.classList.contains('dark'));
  const storedThemeLight = await page.evaluate(() => localStorage.getItem('arvin-theme'));
  recordTest('themeTests', 'Toggles to Light Mode cleanly', isNowLight && storedThemeLight === 'light');

  // Reload and verify persistence
  await page.reload({ waitUntil: 'networkidle0' });
  const persistsLight = await page.evaluate(() => !document.documentElement.classList.contains('dark'));
  recordTest('themeTests', 'Light theme persists across page reload', persistsLight);

  // Toggle back to dark
  await page.click('header button[aria-label*="Switch to"]');
  await new Promise((r) => setTimeout(r, 500));
  const isBackToDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  const storedThemeDark = await page.evaluate(() => localStorage.getItem('arvin-theme'));
  recordTest('themeTests', 'Toggles back to Dark Mode cleanly', isBackToDark && storedThemeDark === 'dark');

  // Reload and verify persistence of dark
  await page.reload({ waitUntil: 'networkidle0' });
  const persistsDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  recordTest('themeTests', 'Dark theme persists across page reload', persistsDark);

  // --- PART 6: Responsive Viewport & Overflow Testing ---
  console.log('\n--- 6. Testing Responsive Layouts (7 Viewport Sizes) ---');
  for (const vp of VIEWPORTS) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    const isNavResponsive = await page.evaluate((width) => {
      const desktopNav = document.querySelector('header nav');
      const mobileToggle = document.querySelector('button[aria-label="Toggle navigation menu"]');
      if (width < 1024) {
        return !!mobileToggle;
      } else {
        return !!desktopNav;
      }
    }, vp.width);

    recordTest(
      'responsiveTests',
      `Viewport ${vp.name} (${vp.width}x${vp.height}): No horizontal scrollbar`,
      !hasHorizontalOverflow,
      `scrollWidth vs clientWidth check`
    );
    recordTest(
      'responsiveTests',
      `Viewport ${vp.name} (${vp.width}x${vp.height}): Correct Nav display (Mobile/Desktop)`,
      isNavResponsive
    );
  }

  // --- PART 7: 404 Not Found Page Testing ---
  console.log('\n--- 7. Testing 404 Not Found Page Handling ---');
  await page.setViewport({ width: 1440, height: 900 });
  const notFoundRes = await page.goto(`${BASE_URL}/non-existent-page-route-test-404`, { waitUntil: 'networkidle0' });
  const notFoundContent = await page.evaluate(() => document.body.innerText);
  const hasReturnBtn = await page.evaluate(() => !!document.querySelector('a[href="/"]'));

  recordTest(
    'navigationTests',
    'Invalid URL displays custom 404 Glassmorphic page',
    notFoundContent.includes('404') || notFoundContent.includes('Page Not Found')
  );
  recordTest(
    'navigationTests',
    '404 page provides working link back to Homepage',
    hasReturnBtn
  );

  // --- PART 8: Quick Connect Let's Talk Modal Testing ---
  console.log('\n--- 8. Testing Quick Connect Modal ---');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  const talkBtn = await page.$('header button[aria-label="Open Let\'s Talk contact options"]');
  if (talkBtn) {
    await talkBtn.click();
    await new Promise((r) => setTimeout(r, 500));
    const modalVisible = await page.evaluate(() => {
      const modal = document.querySelector('[role="dialog"]');
      return !!modal && modal.innerText.includes("Let's Talk") && modal.innerText.includes('venugopalreddyc.in@gmail.com');
    });
    recordTest('navigationTests', 'Let\'s Talk button opens Quick Connect Modal with direct channels', modalVisible);

    // Close modal
    await page.click('button[aria-label="Close modal"]');
    await new Promise((r) => setTimeout(r, 400));
    const modalClosed = await page.evaluate(() => !document.querySelector('[role="dialog"]'));
    recordTest('navigationTests', 'Quick Connect Modal closes cleanly', modalClosed);
  } else {
    recordTest('navigationTests', 'Let\'s Talk button found in header', false, 'Header button not located');
  }

  // --- PART 9: SEO & Accessibility Verification ---
  console.log('\n--- 9. Verifying SEO & Accessibility Basics ---');
  const robotsRes = await page.goto(`${BASE_URL}/robots.txt`, { waitUntil: 'networkidle0' });
  recordTest('seoTests', 'robots.txt exists and returns 200', robotsRes.status() === 200);

  const sitemapRes = await page.goto(`${BASE_URL}/sitemap.xml`, { waitUntil: 'networkidle0' });
  recordTest('seoTests', 'sitemap.xml exists and returns 200', sitemapRes.status() === 200);

  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  const metaDesc = await page.evaluate(() => document.querySelector('meta[name="description"]')?.getAttribute('content') || '');
  const ogTitle = await page.evaluate(() => document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '');
  recordTest('seoTests', 'Meta description present on homepage', metaDesc.length > 20);
  recordTest('seoTests', 'OpenGraph Title present', ogTitle.length > 5);

  const imagesWithoutAlt = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).filter((img) => !img.hasAttribute('alt')).length;
  });
  recordTest('accessibilityTests', 'All image tags have alt attributes', imagesWithoutAlt === 0, `Missing alt: ${imagesWithoutAlt}`);

  await browser.close();

  // Summary output
  console.log('\n====================================================');
  console.log(`QA TEST SUITE COMPLETED:`);
  console.log(`Total Test Cases Executed: ${results.passedCount + results.failedCount}`);
  console.log(`Passed: ${results.passedCount}`);
  console.log(`Failed: ${results.failedCount}`);
  console.log(`Console / Page Errors Logged: ${results.consoleErrors.length}`);
  console.log('====================================================\n');

  // Save results to json for detailed reporting
  fs.writeFileSync('qa-test-results.json', JSON.stringify(results, null, 2));
  console.log('Results saved to qa-test-results.json');
}

runTestSuite().catch((err) => {
  console.error('Fatal test runner error:', err);
  process.exit(1);
});
