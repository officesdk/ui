#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the package directory from command line argument or use current directory
const pkgDir = process.argv[2] || process.cwd();
const esmDir = path.join(pkgDir, 'dist', 'esm');

if (!fs.existsSync(esmDir)) {
  console.log('No ESM directory found, skipping...');
  process.exit(0);
}

// Add package.json to mark as ESM
const packageJson = { type: 'module' };
fs.writeFileSync(
  path.join(esmDir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);
console.log('Added package.json to ESM directory');

// Recursively rename .mjs to .js
function renameFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && entry.name !== 'node_modules') {
      renameFiles(fullPath);
    } else if (entry.name.endsWith('.mjs')) {
      const newPath = fullPath.replace(/\.mjs$/, '.js');
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${entry.name} -> ${path.basename(newPath)}`);
    } else if (entry.name.endsWith('.mjs.map')) {
      const newPath = fullPath.replace(/\.mjs\.map$/, '.js.map');
      fs.renameSync(fullPath, newPath);
    }
  }
}

renameFiles(esmDir);
console.log('ESM files renamed successfully!');

