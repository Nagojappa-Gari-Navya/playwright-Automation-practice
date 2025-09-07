import { test, expect } from '@playwright/test';

test('green cart tests', async ({ page }) => {
       
        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
       const price= await page.locator('(//p[@class="product-price"])[1]').textContent()
       console.log(price)

    });

   
     