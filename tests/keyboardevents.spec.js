const {test,expect} = require ('@playwright/test')
test("keybard events", async function({page})
{
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("uefa champions league")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Backspace")
    //await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)

})