const { test, expect } = require('@playwright/test');
let paygradenames={
    name1:"niha",
    name2:"radha",
    name3:"santhu"
}
for(let names in paygradenames){
    
test(`Add Pay Grade as Admin -${paygradenames[names]}`, async ({ page }) => {
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

  // Click on Pay Grades
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();

  // Click on Add
  await page.getByRole('button', { name: 'Add' }).click();

  // Enter random name
  //const randomName = 'PayGrade_' + Math.floor(Math.random() * 10000);
  //await page.getByPlaceholder('Name').fill(paygradenames[names]);
   await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(paygradenames[names]);

  // Click on Save
  await page.getByRole('button', { name: 'Save' }).click();

  // Assert that the new pay grade appears in the list
  await expect(page.locator('div.oxd-table-cell').first()).toContainText(randomName);
});

}
