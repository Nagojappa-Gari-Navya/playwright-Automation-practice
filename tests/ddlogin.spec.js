import { test, expect } from '@playwright/test';
const logincreds={
    creds1:{
        username:"navya",
        password:"navya123"
    },
     creds2:{
        username:"swamy",
        password:"nhna123"
    },
     creds3:{
        username:"maneesha",
        password:"maneeshaya123"
    },
     creds4:{
        username:"sandhyaa",
        password:"sandhya123"
    }
}
for (let user in logincreds){
    const {username, password} =logincreds[user];
    test(`Verify with valid username and invalid password -${username}` , async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(`${username}`);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(`${username}`);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

}
