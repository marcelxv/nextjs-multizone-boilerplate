import { defineConfig, devices } from "@playwright/test";

// Web app port
const PORT = process.env.ADMIN_PORT || 3001;
const baseURL = `http://0.0.0.0:${PORT}/admin`;

export default defineConfig({
  name: "Admin APP",
  testDir: "./tests",
  outputDir: "./test-results",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { outputFolder: "./playwright-report" }], ["list"]],
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on-first-retry",
  },
  projects: [
    {
      name: "Admin APP",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
  webServer: {
    command: "cd ../../apps/admin && pnpm run dev",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
    url: baseURL,
  },
});
