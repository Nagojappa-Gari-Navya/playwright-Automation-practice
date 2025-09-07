import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill('N');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('N');
  await page.getByRole('textbox', { name: 'Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Navya');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('nihanavya56@gmail.com');
  await page.getByText('Female').click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('7013618601');
  await page.locator('#dateOfBirthInput').click();
  await page.locator('#dateOfBirthInput').fill('03 DEC 2003');
});