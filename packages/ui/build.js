#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// This is a meta-package that re-exports all sub-packages
// The actual build outputs are in the sub-packages

const distDir = path.join(__dirname, 'dist');

// Create dist directory
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create index files that re-export from components
const indexContent = `
// Re-export all components
export * from '@officesdk/ui-components';
`;

const indexDtsContent = `
// Re-export all components
export * from '@officesdk/ui-components';
`;

fs.writeFileSync(path.join(distDir, 'index.js'), indexContent);
fs.writeFileSync(path.join(distDir, 'index.mjs'), indexContent);
fs.writeFileSync(path.join(distDir, 'index.d.ts'), indexDtsContent);
fs.writeFileSync(path.join(distDir, 'index.d.mts'), indexDtsContent);

console.log('Meta-package build complete');

