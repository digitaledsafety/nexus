import fs from 'fs';
import path from 'path';
import { generateFrontendConfigJS } from './loader.js';

const SRC_DIR = 'frontend';
const DIST_DIR = 'dist/frontend';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    // Skip original header/footer if they are still there (though we should clean up)
    if (src.endsWith('header.html') || src.endsWith('footer.html')) return;

    fs.copyFileSync(src, dest);
  }
}

function main() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  // Generate fresh frontend/config.js before copying
  generateFrontendConfigJS();

  // Simply copy everything from SRC_DIR to DIST_DIR, preserving structure
  // Since we are now a SPA, index.html is the only entry point and it handles its own "includes" via the router/shell
  copyRecursiveSync(SRC_DIR, DIST_DIR);


  console.log('Build complete!');
}

main();
