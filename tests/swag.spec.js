import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/inventory.html');
  await page.locator('//button[text()="ADD TO CART"]').click
});
//input[@placeholder="hh:mm"]