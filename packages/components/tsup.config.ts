import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: [
    'react',
    'react-dom',
    'styled-components',
    'react/jsx-runtime',
  ],
  treeshake: true,
  splitting: false,
  minify: false,
});

