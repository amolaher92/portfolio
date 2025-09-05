/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['verbose'],
    watch: false,
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['text', 'text-summary', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/**',
        'dist/**',
        'coverage/**',
        'playwright',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/*.d.ts',
        'src/setupTests.ts',
        'src/vitest-env.d.ts',
        'vitest.config.ts',
        'vite.config.ts',
      ],
      include: ['src/**/*.{ts,tsx}'],
    },
  },
});
