const { test, expect } = require('@playwright/test');
test('Add new employee via PIM -${firstname}', async ({ request }) => {
    const api_responce=await request.get("",{})

})
// console.log(jsonresponse)