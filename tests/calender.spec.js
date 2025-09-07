import { test, expect } from '@playwright/test';
test.describe("calender feature",async() =>{
test('should display the calender', async ({ browser }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
  await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('//a[@class="oxd-main-menu-item active"]').click
  await page.locator('//input[@placeholder="yyyy-dd-mm"]').fill(2025-31-8)
})

})