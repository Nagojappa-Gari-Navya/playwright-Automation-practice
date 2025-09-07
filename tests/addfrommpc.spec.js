const { test, expect } = require('@playwright/test');
const Employees={
    emp1:{
        firstname:"navya",
        lastname:"navya123"
    },
     emp2:{
        firstname:"swamy",
        lastname:"nhna123"
    },
     emp3:{
        firstname:"maneesha",
        lastname:"maneeshaya123"
    },
     emp4:{
        firstname:"sandhyaa",
        lastname:"sandhya123"
    }
  }
for ( const emp in Employees){
   const {firstname, lastname} =Employees[emp];
  test(`Add new employee via PIM -${firstname}`, async ({ page }) => {
  // Launch URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login as Admin
  await page.locator('//input[@placeholder="Username"]').fill(process.env.App_username || 'Admin');
  await page.locator('//input[@placeholder="Password"]').fill(process.env.App_password || 'admin123');
  await page.locator("//button[@type='submit']").click();

  // Wait for dashboard
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Click on PIM menu
  await page.locator("//span[text()='PIM']").click();

  // Click on Add Employee
  await page.locator("//a[contains(.,'Add Employee')]").click();

  // Enter random firstname and lastname
  const randomFirstName = `First${Math.floor(Math.random() * 10000)}`;
  const randomLastName = `Last${Math.floor(Math.random() * 10000)}`;
  await page.locator("input[name='firstName']").fill(`${firstname}`);
  await page.locator("input[name='lastName']").fill(`${lastname}`);

  // Click on Save button
  await page.locator("//button[contains(.,'Save')]").click();

  // Assert employee is added (URL or confirmation message)
});

}

