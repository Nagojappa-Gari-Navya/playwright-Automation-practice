// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/tables');
//   const tables=await page.$$('table')
//   expect(tables.length).toBe(2)
//   //await expect(page.locator("//table")).toHaveCount(2);
//   await expect(page.locator("//table[@id='table1']/tbody/tr[2]/td[3]")).toHaveText('fbach@yahoo.com');
//   await expect(page.locator("//table[@id='table1']/tbody/tr[2]/td[4]")).toHaveText("$50.00");

// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');
  await expect(page.locator('#table1').getByRole('cell', { name: 'Smith', exact: true })).toBeVisible();
  await page.locator('#table1').getByRole('cell', { name: 'fbach@yahoo.com' }).click();
  await page.locator('#table2').getByRole('cell', { name: 'Email' }).click();
});