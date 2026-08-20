const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function capture() {
  console.log('Launching Puppeteer Chrome...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
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
      console.log(`\nNavigating to ${t.url}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
      await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 30000 }).catch(e => {
        console.log(`Navigation note: ${e.message}`);
      });
      // Wait extra 3s for animations/lazy images
      await new Promise(r => setTimeout(r, 3000));
      await page.screenshot({ path: fullDest, quality: 90, type: 'jpeg' });
      console.log(`✓ Successfully captured live screenshot to ${t.dest}`);
      await page.close();
    } catch (err) {
      console.error(`✗ Failed ${t.url}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('\nAll live captures finished!');
}

capture();
