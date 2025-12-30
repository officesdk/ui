import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()] as any,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.stories.tsx',
        '**/*.d.ts',
        '**/index.ts',
        '**/__tests__/**',
        '**/test-utils.tsx',
      ],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 65,
        statements: 70,
      },
    },
  },
  resolve: {
    alias: {
      '@officesdk/ui': path.resolve(__dirname, './packages/components/src'),
      '@officesdk/ui/theme': path.resolve(__dirname, './packages/theme/src'),
      '@officesdk/ui/icons': path.resolve(__dirname, './packages/icons/src'),
      '@officesdk/ui/utils': path.resolve(__dirname, './packages/utils/src'),
    },
  },
});

