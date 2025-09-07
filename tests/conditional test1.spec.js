import { test, expect } from '@playwright/test';

test('Based on visible run different script', async ({ page,browserName }) => {
    await page.goto("https://the-internet.herokuapp.com/disappearing_elements")
    const gallary =await page.locator('a[href="/gallery/"]')
    const portfolio= await page.locator('a[href="/portfolio/"]');
    if(gallary.isVisible()){
        await gallary.click()
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/gallery/')
    }
        else {
            //console.log("gallary option not visible")
            await portfolio.click()
            await expect(page).toHaveURL('https://the-internet.herokuapp.com/portfolio/')
        }
    
});