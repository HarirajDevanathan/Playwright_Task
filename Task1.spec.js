
const {test,chromium,expect} = require("@playwright/test");

test('launching Page Url',async()=>{
    const browser = await chromium.launch({
        headless : false
    })
    const page = await browser.newPage();
    const url = "https://x.com/?lang=en";
    await page.goto(url);
    
});

