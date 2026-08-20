const fs = require('fs');
const path = require('path');

const downloadList = [
  // SDPT Tech Real Live Images
  { url: 'https://sdpttech.com/images/pc.webp', dest: 'public/projects/sdpt/pc.webp' },
  { url: 'https://sdpttech.com/images/pc2.webp', dest: 'public/projects/sdpt/pc2.webp' },
  { url: 'https://sdpttech.com/images/streaming_setup_pc.png', dest: 'public/projects/sdpt/streaming.png' },
  { url: 'https://sdpttech.com/images/workstation_pc.png', dest: 'public/projects/sdpt/workstation.png' },
  { url: 'https://sdpttech.com/images/esports_pc.png', dest: 'public/projects/sdpt/esports.png' },

  // Gatexpay Real Live Images
  { url: 'https://ik.imagekit.io/zp0tch54w/GATEXPAY%20IMAGES/img1.png?updatedAt=1781074475839', dest: 'public/projects/gatexpay/img1.png' },
  { url: 'https://ik.imagekit.io/zp0tch54w/GATEXPAY%20IMAGES/img2.png?updatedAt=1781074473276', dest: 'public/projects/gatexpay/img2.png' },
  { url: 'https://ik.imagekit.io/zp0tch54w/GATEXPAY%20IMAGES/logo.png?updatedAt=1781074467601', dest: 'public/projects/gatexpay/logo.png' },
  { url: 'https://ik.imagekit.io/zp0tch54w/GATEXPAY%20IMAGES/security.png?updatedAt=1781074893635', dest: 'public/projects/gatexpay/security.png' },
  { url: 'https://ik.imagekit.io/zp0tch54w/GATEXPAY%20IMAGES/management.png?updatedAt=1781074893848', dest: 'public/projects/gatexpay/management.png' },
  { url: 'https://ik.imagekit.io/zp0tch54w/GATEXPAY%20IMAGES/process.png?updatedAt=1781074893916', dest: 'public/projects/gatexpay/process.png' },

  // Gatecode OMS Real Live Images
  { url: 'https://gatecode.in/images/gatecode.png', dest: 'public/projects/gatecode-oms/gatecode-logo.png' },
  { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop', dest: 'public/projects/gatecode-oms/enterprise-workspace.jpg' },
  { url: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1200&auto=format&fit=crop', dest: 'public/projects/gatecode-oms/fintech-payment.jpg' }
];

async function downloadAll() {
  for (const item of downloadList) {
    const fullDest = path.join(process.cwd(), item.dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    try {
      console.log(`Downloading ${item.url} -> ${item.dest}...`);
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(fullDest, Buffer.from(arrayBuffer));
      console.log(`Saved ${item.dest} (${arrayBuffer.byteLength} bytes)`);
    } catch (err) {
      console.error(`Failed ${item.dest}: ${err.message}`);
    }
  }
}

downloadAll();
