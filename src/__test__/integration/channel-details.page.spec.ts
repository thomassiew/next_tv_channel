import { test, expect } from "@playwright/test";

test.describe.parallel("Channel Details Page Integration Test", () => {
  test("Can navigate to channel detail page", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const title = await page
      .$("data-testid=home-content")
      .then((elem) => elem?.innerHTML());

    expect(await page.$(`text=${title}`)).toBeTruthy();

    await page.goto("http://localhost:3000/channels/TV1-HD-395");

    expect(await page.$(`text=CH101`)).toBeTruthy();
  });

  test("Can favourite channel", async ({ page }) => {
    await page.goto("http://localhost:3000/channels/TV1-HD-395");

    expect(await page.$(`text=CH101`)).toBeTruthy();

    await page.locator("data-testid=Favourite-Button").click(),
      await page.goto("http://localhost:3000/");

    const title = await page
      .$("data-testid=home-content")
      .then((elem) => elem?.innerHTML());

    expect(await page.$(`text=${title}`)).toBeTruthy();
    expect(await page.$("text=My Favourite Channel")).toBeDefined();
  });
});
