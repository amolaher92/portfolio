import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Test reporting
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'playwright-report/test-results.json' }],
  ],

  // Artifact folders
  outputDir: 'test-results/',
  use: {
    baseURL: 'http://localhost:5173',

    // Video configuration
    video: {
      mode: 'on-first-retry',
      size: { width: 1280, height: 720 },
    },

    // Screenshot configuration
    screenshot: {
      mode: 'on',
      fullPage: true,
    },

    // Trace configuration for debugging
    trace: {
      mode: 'on',
      snapshots: true,
      screenshots: true,
    },

    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
