 const {test,expect} = require ('@playwright/test')
const { count } = require('node:console')

 test ("Load State", async function({page})

{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByText("New user? Signup").click()
    await page.waitForLoadState("networkidle")
    const count = await page.locator("//input[@type='checkbox']").count()
    await expect(count).toBe(8)
}
)