const fs = require('fs');
const path = require('path');

const targetUrls = [
  { name: 'sdpt', url: 'https://sdpttech.com/' },
  { name: 'gatecode-agency', url: 'http://gatecode.net/' },
  { name: 'gatexpay', url: 'https://www.gatexpay.in/' },
  { name: 'gatecode-oms', url: 'https://gatecode.in/' }
];

async function run() {
  for (const item of targetUrls) {
    console.log(`\nFetching ${item.name} (${item.url})...`);
    try {
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
        signal: AbortSignal.timeout(10000)
      });
      const html = await res.text();
      console.log(`Status: ${res.status}, Length: ${html.length}`);

      // Extract all image URLs
      const imgMatches = Array.from(html.matchAll(/<img[^>]*src=["']([^"']+)["']/gi)).map(m => m[1]);
      console.log(`Found ${imgMatches.length} images:`, imgMatches.slice(0, 8));

      // Extract OpenGraph image
      const ogMatch = html.match(/property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ||
                      html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
      if (ogMatch) {
        console.log(`OG Image: ${ogMatch[1]}`);
      }
    } catch (err) {
      console.error(`Failed ${item.name}: ${err.message}`);
    }
  }
}

run();
