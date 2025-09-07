const { test, expect } = require('@playwright/test');
let Shifternames={
  name1:"teju",
  name2:"chandu"
}
for(let names in Shifternames){
  test(`Add Work Shift as Admin-${Shifternames[names]}`, async ({ page }) => {
  // Launch URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login as Admin
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Wait for dashboard to load
  await page.waitForSelector('nav[aria-label="Topbar Menu"]');

  // Click on Admin
  await page.click('a[href*="admin/viewAdminModule"]');

  // Click on Job
  await page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"]) [2]').click();

  // Click on Work Shifts
  //await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
  await page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"]) [5]').click()

  // Click on Add
  await page.getByRole('button', { name: 'Add' }).click();

  // Enter random Shift name
  //const shiftName = 'Shift_' + Math.floor(Math.random() * 10000);
  //await page.getByPlaceholder('Shift Name').fill(shiftName);
   await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(Shifternames[names]);

  // Fill the working hours randomly (e.g., 08:00 to 16:00)
  const startHour = String(Math.floor(Math.random() * 8) + 1).padStart(2, '0') + ':00';
  const endHour = String(Math.floor(Math.random() * 8) + 9).padStart(2, '0') + ':00';
  await page.locator('input[@placeholder="hh:mm"]').fill(startHour);
  await page.locator('(//input[@class="oxd-input oxd-input--active"]) [4]').fill(endHour);

  // Click on Save
  await page.getByRole('button', { name: 'Save' }).click();

  // Assert that the new work shift appears in the list
  await expect(page.locator('div.oxd-table-cell').first()).toContainText(Shifternames);
});

}

