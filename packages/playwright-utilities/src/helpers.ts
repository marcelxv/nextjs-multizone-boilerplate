import { Page } from "@playwright/test";

/**
 * Waits for navigation to complete and network to be idle
 */
export async function waitForNavigation(page: Page) {
  await page.waitForLoadState("networkidle");
}

/**
 * Logs in a test user
 */
export async function loginTestUser(
  page: Page,
  username: string,
  password: string
) {
  await page.goto("/login");
  await page.fill('[data-testid="username"]', username);
  await page.fill('[data-testid="password"]', password);
  await page.click('[data-testid="login-button"]');
  await waitForNavigation(page);
}
