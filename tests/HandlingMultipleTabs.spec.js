 const {test,expect} = require ('@playwright/test')

 test("Handling Multiple Tabs", async function({browser})
{
    const context= await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage]= await Promise.all
    (
        [
            context.waitForEvent("page"),
            page.locator("//div[@class='container-child']//a[4]//*[name()='svg']").click()
        ]
    )

    await newPage.locator("#_r_e_").fill("hmahmood@xiqinc.com")
    await newPage.close()
    await page.locator("#email1").fill("admin@email.com")
})