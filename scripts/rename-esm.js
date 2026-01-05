#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Rename .mjs to .js in ESM directory and add package.json
function processEsmDirectory(esmDir) {
  if (!fs.existsSync(esmDir)) {
    return;
  }

  // Add package.json to mark as ESM
  const packageJson = { type: 'module' };
  fs.writeFileSync(
    path.join(esmDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Recursively rename .mjs to .js
  function renameFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        renameFiles(fullPath);
      } else if (entry.name.endsWith('.mjs')) {
        const newPath = fullPath.replace(/\.mjs$/, '.js');
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed: ${path.relative(process.cwd(), fullPath)} -> ${path.basename(newPath)}`);
      } else if (entry.name.endsWith('.mjs.map')) {
        const newPath = fullPath.replace(/\.mjs\.map$/, '.js.map');
        fs.renameSync(fullPath, newPath);
      }
    }
  }

  renameFiles(esmDir);
}

// Process all packages
const packagesDir = path.join(__dirname, '..', 'packages');
const packages = ['components', 'theme', 'utils', 'icons'];

packages.forEach((pkg) => {
  const esmDir = path.join(packagesDir, pkg, 'dist', 'esm');
  console.log(`\nProcessing ${pkg}...`);
  processEsmDirectory(esmDir);
});

console.log('\nESM files renamed successfully!');

