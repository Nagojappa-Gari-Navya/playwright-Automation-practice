import { test, expect } from '@playwright/test';
//import logindata from "../testData/login.json"
let page;
test.describe("verify login functionality",async() =>{
  test.beforeEach(async({browser})=>{
    page=await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  })

  test('Verify login with credentials', async ({  }) => {

  await page.goto();
  
  await page.getByRole('textbox', { name: 'Username' }).fill("Admin");

  await page.getByRole('textbox', { name: 'Password' }).fill("admin123");

  await page.getByRole('heading', { name: 'Dashboard' }).click();

  // assertion
  //verification
  //await expect(page.getByRole('heading', {name: 'Dashboard' })).toBeVisible();


});
test('Verify with valid username and invalid password', async ({  }) => {
  await page.goto();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('ndjedgjed');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify with Invalid username and valid password', async ({ }) => {
  await page.goto();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Adminvbj');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify with invalid username and invalid password', async ({  }) => {
  await page.goto();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Adbvmin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('ndjedgjed');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

})


   