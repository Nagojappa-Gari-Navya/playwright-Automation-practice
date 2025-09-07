import { test, expect } from '@playwright/test';

const jobtitles ={
  jobtitle1 :"Automation QA",
   jobtitle2 :"Account assistent",
    jobtitle3 :"Finance controller"
}
for(let title in jobtitles){
  test(`Verify add job title-${jobtitles[title]} `, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('//input[@placeholder="Username"]').fill(process.env.App_username)
  await page.locator('//input[@placeholder="Password"]').fill(process.env.App_password)
  await page.locator("//button[@type='submit']").click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
  await page.locator("(//li[@class='oxd-topbar-body-nav-tab --parent'])[1]").click()
  await page.locator("//a[normalize-space(text())='Job Titles']").click()
  await page.locator("//div[@class='orangehrm-header-container']//button[1]").click()
  await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(jobtitles[title])
  await page.locator("(//label[normalize-space(text())='Job Description']/following::textarea)[1]").fill(jobtitles[description])
  await page.locator("//button[contains(.,'Save')]").click()
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")

})
}
