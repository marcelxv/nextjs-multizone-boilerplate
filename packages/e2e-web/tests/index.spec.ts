import { test, expect } from "@playwright/test";

test.describe("Web", () => {
  test("should show index page", async ({ page }) => {
    await page.goto("/");
    expect(1).toBe(1);
  });
});
