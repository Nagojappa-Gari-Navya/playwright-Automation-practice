import { test, expect } from ('@playwright/test');
test('Download files', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/download")
const [download] = await Promise.all([
	page.waitForEvent('download'),
	page.locator('//a[text()="SampleLaptop.JPG"]').click()
])
const fileName = download.suggestedFilename()
await download.saveAs(fileName)
const path=await download[0].path()
console.log(path)
await page.waitForTimeout(5000)
});