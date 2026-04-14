 const {test,expect} = require ('@playwright/test')
const { promises } = require('node:dns')

 test ("Mouse hover", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    await Promise.all([
                 await page.locator("button[type='submit']").click(),
                 await page.waitForURL("https://freelance-learn-automation.vercel.app/")
    ])

    await page.locator("div[class='nav-menu-item-manage'] span").hover()
    await page.locator("//a[normalize-space()='Manage Courses']").click()
    await page.waitForTimeout(5000)
})


   