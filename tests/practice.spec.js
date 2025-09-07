const { test, expect } = require('@playwright/test');

test.describe('Practice Tests', () => {
    test('Sample test', async ({ page }) => {
        // Your test code goes here
        await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
        // let image=await page.locator("#singleFileInput").setInputFiles("testData/download.jpeg")
        // console.log("image")
        const drag=await page.locator('//p[text ( )="Drag me to my target"]').dragTo(page.locator('//p[text ( )="Dropped!"]'))
        console.log("drag")
    });
});