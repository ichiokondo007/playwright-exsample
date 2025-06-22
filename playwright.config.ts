import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'https://playwright.dev',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
});