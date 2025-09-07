import { test, expect } from '@playwright/test';

test('verify Add reddif account', async ({ page }) => {
   await page.goto("https://register.rediff.com/register/register.php?FormName=user_details",{navigationTimeout : 120000})
   await page.locator('//input[@placeholder="Enter your full name"]').fill("Navya N")
   await page.locator('//input[@placeholder="Enter Rediffmail ID"]').fill("navud67")
   await page.locator('//input[@id="newpasswd"]').pressSequentially("nvjdvb")
   await page.locator('//input[@id="newpasswd1"]').pressSequentially("nvjdvd")
 
   await page.locator('select[class^="day"]').selectOption("02")
   await page.locator('select[class^="middle month"]').selectOption("JAN")
   await page.locator('select[class^="year"]').selectOption("1992")
   await page.locator("(//label[normalize-space(text())='Male']/following::input)[1]").check()
   await page.locator('//input[@id="country"]').Checked()
   await page.locator("//input[@placeholder='Enter recovery email']").fill("nihanavya56@gmail.com")
   await page.locator("//label[text()='City']/following-sibling::select").selectOption()
   await page.locator("//input[@type='checkbox']").isChecked()
  
  
});

  



