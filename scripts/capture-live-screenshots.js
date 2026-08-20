const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  const targets = [
    { url: 'https://sdpttech.com/', dest: 'public/projects/sdpt/live-website-screenshot.jpg' },
    { url: 'https://www.gatexpay.in/', dest: 'public/projects/gatexpay/live-website-screenshot.jpg' },
    { url: 'https://gatecode.in/', dest: 'public/projects/gatecode-oms/live-website-screenshot.jpg' },
    { url: 'http://gatecode.net/', dest: 'public/projects/gatecode/live-website-screenshot.jpg' }
  ];

  for (const t of targets) {
    const fullDest = path.join(process.cwd(), t.dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    try {
      console.log(`Navigating to ${t.url}...`);
      const page = await context.newPage();
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 25000 }).catch(e => {
        console.log(`Wait networkidle timed out, proceeding: ${e.message}`);
      });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: fullDest, quality: 90, type: 'jpeg' });
      console.log(`Successfully captured ${t.dest}`);
      await page.close();
    } catch (err) {
      console.error(`Failed ${t.url}: ${err.message}`);
    }
  }

  await browser.close();
}

capture();
