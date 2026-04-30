 const {test,expect} = require ('@playwright/test')
 const SalesappLogin = require ("../Pages/SalesappLogin")


 test ("Login into salesapp with page object", async function({page})
{
    await page.goto("https://xiqonline.com/auth/login?&redirectURL=https://salesapp.xiqonline.com")
    const salesappLogin = new SalesappLogin (page)
    salesappLogin.LoginClick()
}
)