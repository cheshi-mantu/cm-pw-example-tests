import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["dot"], ["allure-playwright"]],
  use: {
    actionTimeout: 0,
  },
  projects: [
    {
      name: "chromium",
    },
  ],
};

export default config;