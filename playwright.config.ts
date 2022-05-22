import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  use: {
    trace: "on-first-retry",
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    browserName: "chromium",
    headless: true,
  },
  testMatch: "**/?(*.)+(spec).[jt]s?(x)",
  testDir: "src/__test__/integration",
  webServer: {
    command: "npm run dev",
    port: 3000,
  },
};
export default config;
