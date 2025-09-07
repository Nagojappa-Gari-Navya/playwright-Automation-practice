import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://id.heroku.com/login");
    await page.locator('#email').fill("nihanavya56@gmail.com")
    await page.locator('#password').fill("navya@78")
    await page.locator('.btn.btn-primary.btn-lg.btn-block').click()
});