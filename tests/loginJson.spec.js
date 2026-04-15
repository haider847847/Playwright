const {test,expect} = require ('@playwright/test')
const json = JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe("data driven testing", function()
{
    for (const data of json){
        test.describe(`login with users, ${data.id}`, function()
    {
        test("testing from test data", async function({page})
    {
        await page.goto("https://freelance-learn-automation.vercel.app/login")
        await page.locator("#email1").fill(data.username)
        await page.locator("#password1").fill(data.password)
    });
    
    })
    }
})