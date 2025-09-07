 const { test, expect } = require('@playwright/test');
//import { test, expect } from ('@playwright/test');
test('Select Values from Dropdown',async function({page})
{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await page.locator('#email1').fill("nihanavya56@gmail.com")
    await page.locator("//input[@type='password']").fill("press@8")
    await page.locator('//button[@type="submit"]').click()
    
})