import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    await page.locator('(//input[@type="checkbox"])[1]').not.toBeChecked()
    await page.locator('(//input[@type="checkbox"])[2]').toBeChecked()
    // await page.locator('.btn.btn-primary.btn-lg.btn-block').click()
});