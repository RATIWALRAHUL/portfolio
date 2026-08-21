const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const NEW_DIR = path.join(__dirname, '..', 'public', 'projects', 'newimage');
const BASE_PROJECTS = path.join(__dirname, '..', 'public', 'projects');

async function processImage(srcPath, destDir, destBaseName) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const destPng = path.join(destDir, `${destBaseName}.png`);
  const destJpg = path.join(destDir, `${destBaseName}.jpg`);
  const destWebp = path.join(destDir, `${destBaseName}.webp`);

  console.log(`Processing: ${path.basename(srcPath)} -> ${destBaseName}`);

  const image = sharp(srcPath);
  const metadata = await image.metadata();

  // If the height is excessively large (> 3000), create a hero/top crop for fast preview
  if (metadata.height > 3000) {
    const topCropJpg = path.join(destDir, `${destBaseName}-hero.jpg`);
    await sharp(srcPath)
      .extract({ left: 0, top: 0, width: metadata.width, height: Math.min(1080, metadata.height) })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(topCropJpg);
    console.log(`  Generated top-crop: ${destBaseName}-hero.jpg`);
  }

  // Generate web-optimized JPG
  // If height > 12000, scale width to 1440 for manageable memory and fast load
  if (metadata.height > 12000) {
    await sharp(srcPath)
      .resize({ width: 1440 })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(destJpg);
  } else {
    await sharp(srcPath)
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(destJpg);
  }

  // Generate web-optimized WebP (WebP limit is 16383px)
  if (metadata.height <= 16000 && metadata.width <= 16000) {
    await sharp(srcPath)
      .webp({ quality: 88 })
      .toFile(destWebp);
  } else {
    // Resize down to fit WebP max dimension
    await sharp(srcPath)
      .resize({ height: 15000 })
      .webp({ quality: 85 })
      .toFile(destWebp);
  }

  // Copy or save PNG if height <= 3000
  if (metadata.height <= 3000) {
    await sharp(srcPath)
      .png({ quality: 90, compressionLevel: 8 })
      .toFile(destPng);
  }

  console.log(`  Done: ${destBaseName}`);
}

async function main() {
  const mappings = [
    // Gatecode OMS
    {
      src: 'Gatecode-OMS-08-21-2026_10_17_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'live-dashboard'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_17_AM (1).png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'live-full-dashboard'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_18_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'leave-management'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_20_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'attendance-records'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_20_AM (1).png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'branch-attendance'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_21_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'payroll-approvals'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_22_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'system-settings'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_23_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'company-management'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_24_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'employee-onboarding'
    },
    {
      src: 'Gatecode-OMS-08-21-2026_10_25_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode-oms'),
      name: 'role-permissions'
    },

    // GateXPay
    {
      src: 'Secure-Scalable-Digital-Payment-Processing-GateXPay-08-21-2026_10_12_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatexpay'),
      name: 'live-hero'
    },
    {
      src: 'Secure-Scalable-Digital-Payment-Processing-GateXPay-08-21-2026_10_13_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatexpay'),
      name: 'merchant-solutions'
    },
    {
      src: 'Secure-Scalable-Digital-Payment-Processing-GateXPay-08-21-2026_10_13_AM (1).png',
      dir: path.join(BASE_PROJECTS, 'gatexpay'),
      name: 'security-compliance'
    },

    // Damru By Namo
    {
      src: 'Damru-By-Namo-Restaurant-Banquet-Hall-Jaipur-Damru-By-Namo-08-21-2026_10_41_AM.png',
      dir: path.join(BASE_PROJECTS, 'damru'),
      name: 'live-hero'
    },
    {
      src: 'Damru-By-Namo-Restaurant-Banquet-Jaipur-Damru-By-Namo-08-21-2026_10_48_AM.png',
      dir: path.join(BASE_PROJECTS, 'damru'),
      name: 'dining-ambiance'
    },
    {
      src: 'Damru-By-Namo-Restaurant-Banquet-Hall-Jaipur-Damru-By-Namo-08-21-2026_10_40_AM.png',
      dir: path.join(BASE_PROJECTS, 'damru'),
      name: 'full-website'
    },

    // Gatecode Technologies & Digital Marketing
    {
      src: 'Gatecode-Technologies-—-Empowering-Business-Innovation-08-21-2026_10_28_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode'),
      name: 'corporate-home'
    },
    {
      src: 'Contact-Gatecode-Technologies-IT-Software-Company-in-Jaipur-India-08-21-2026_10_30_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode'),
      name: 'contact-inquiry'
    },
    {
      src: 'Best-Digital-Marketing-Company-in-India-Digital-Marketing-Agency-08-21-2026_10_32_AM.png',
      dir: path.join(BASE_PROJECTS, 'gatecode'),
      name: 'digital-marketing'
    }
  ];

  for (const map of mappings) {
    const srcPath = path.join(NEW_DIR, map.src);
    if (fs.existsSync(srcPath)) {
      await processImage(srcPath, map.dir, map.name);
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  }

  // Also create root shortcut / cover images for the projects directory
  console.log('Copying primary cover images to /public/projects/ root...');
  
  // Gatecode OMS main cover
  await sharp(path.join(BASE_PROJECTS, 'gatecode-oms', 'live-dashboard.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(BASE_PROJECTS, 'gatecode-oms-cover.jpg'));

  // GateXPay main cover
  await sharp(path.join(BASE_PROJECTS, 'gatexpay', 'live-hero.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(BASE_PROJECTS, 'gatexpay-cover.jpg'));

  // Damru main cover
  await sharp(path.join(BASE_PROJECTS, 'damru', 'live-hero.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(BASE_PROJECTS, 'damru-cover.jpg'));

  // Gatecode corporate main cover
  await sharp(path.join(BASE_PROJECTS, 'gatecode', 'corporate-home-hero.jpg'))
    .jpeg({ quality: 90 })
    .toFile(path.join(BASE_PROJECTS, 'gatecode-cover.jpg'));

  console.log('All images processed successfully!');
}

main().catch(console.error);
