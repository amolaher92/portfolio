/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['verbose'],
    watch: true,
    setupFiles: ['./src/setupTests.ts'],
    passWithNoTests: false,
    testTimeout: 10000,
    include: ['src/__tests__/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/playwright/**'],
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['text', 'text-summary', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: ['**/__tests__/**', '**/*.{test,spec}.{ts,tsx}', '**/*.d.ts'],
      include: ['src/**/*.{ts,tsx}'],
    },
  },
});
