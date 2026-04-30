 const {test,expect} = require ('@playwright/test')
const LoginPage = require ("../Pages/LoginPage")

test ("testing page object model", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const loginPage = new LoginPage(page)
    await loginPage.LoginToApplication()
    

}
)