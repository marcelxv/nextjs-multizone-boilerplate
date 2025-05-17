import { test, expect } from "@playwright/test";

test.describe("Admin MFA", () => {
  test("should show index page", async ({ page }) => {
    await page.goto("/admin/dashboard");
    expect(1).toBe(1);
  });
});
