import { test, expect } from '@playwright/test';

test('verify student valid credentials', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.locator("#firstName").fill("Nagojappagari")
  await page.locator('//input[@placeholder="Last Name"]').fill("Navya")
  await page.locator('//input[@placeholder="name@example.com"]').fill("nihanavya56@gmail.com")
  await page.locator('.custom-control-label').click()
  await page.locator('#userNumber').fill(7013618601)
  await page.locator('#dateOfBirthInput').selectOption("03 DEC 2003")
  await page.locator('.subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3').fill("Automation")
  await page.locator('.//label[@class="custom-control-label"]')[5].click()
  await page.locator('#uploadPicture').click()
  await page.locator('#currentAddress').fill("kn palli")

});