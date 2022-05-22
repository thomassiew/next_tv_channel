import { test, expect } from "@playwright/test";

test.describe.parallel("Home Page Integration Test", () => {
  test("can render homepage", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const title = await page
      .$("data-testid=home-content")
      .then((elem) => elem?.innerHTML());

    expect(await page.$(`text=${title}`)).toBeTruthy();
  });

  test("can click channel", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
      page.click('img[alt="TV1 HD"]'),
    ]);

    expect(await page.$("text=TV1 HD")).toBeDefined();
  });

  test("can open/close refine modal", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await Promise.all([
      page.locator("data-testid=refine-button").click(),
      page.locator("data-testid=Refine-Modal-X").click(),
    ]);
    expect(await page.$("text=TV3")).toBeDefined();
  });

  test("can search content via Channel title or Channel number", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    await page.click('[data-testid="search-input"]');

    await page.fill('[data-testid="search-input"]', "TV3");
    await page.click('[data-testid="search-button"]');

    expect(await page.$("text=TV3")).toBeDefined();

    await page.click('[data-testid="search-input"]');

    await page.fill('[data-testid="search-input"]', "105");
    await page.click('[data-testid="search-button"]');

    expect(await page.$("text=Astro Prima HD")).toBeDefined();
  });

  test("can refine search via filtering", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await Promise.all([
      page.locator("data-testid=refine-button").click(),
      page.locator('button:has-text("Name")').click(),
      page.locator('button:has-text("Variety Entertainment")').click(),
      page.locator('button:has-text("Malay")').click(),
      page.locator('button:has-text("NON HD")').click(),
      page.locator("data-testid=Refine-Modal-X").click(),
    ]);

    expect(await page.$("text=NJOI TV")).toBeDefined();

    await Promise.all([
      page.locator("data-testid=refine-button").click(),
      page.locator('button:has-text("Number")').click(),
      page.locator('button:has-text("Special Interest")').click(),
      page.locator('button:has-text("Korean & Japanese")').click(),
      page.locator("data-testid=Refine-Modal-X").click(),
    ]);

    expect(await page.$("text=KBS World HD")).toBeDefined();
  });
});
