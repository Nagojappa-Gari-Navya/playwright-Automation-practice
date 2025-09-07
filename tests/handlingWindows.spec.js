import { test, expect, chromium } from "@playwright/test"

test("multiple tabs", async ({ browser }) => {
    //const browser = await chromium.launch();  
    //if you want to write in your own browser just add above line and remove {browser}.
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://www.flipkart.com/")
    await expect(page1).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    await page1.locator('//input[@title="Search for Products, Brands and More"]').fill("iphone")
    await page1.keyboard.press("Enter")

    const [page2] = await Promise.all([
        context.waitForEvent('page'),
        page1.click("//div[text()='Apple iPhone 16 (White, 128 GB)']")
    ]);
    await expect(page2).toHaveTitle("Apple iPhone 16 (White, 128 GB)")
    await page2.waitForTimeout(3000)
    await page2.close()

    await expect(page1.locator('//div[text()="Apple iPhone 15 (Black, 128 GB)"]')).toBeVisible();
    await page1.waitForTimeout(3000)
    await page1.close()
})