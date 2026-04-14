const {test,expect} = require ('@playwright/test')

test ("Get Error Message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log (await page.viewportSize().width)
    console.log (await page.viewportSize().height)
    await page.getByPlaceholder("Username").fill("admin")
    await page.getByPlaceholder("Password").fill("admin1234")
    await page.locator("//button[@type='submit']").click()
    const ErrorMessage= await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("Error Message is " +ErrorMessage)
    
    expect (ErrorMessage.includes("Invalid")).toBeTruthy()
    expect(ErrorMessage==="Invalid credentials").toBeTruthy()
})