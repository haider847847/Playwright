const {test,expect} = require ('@playwright/test')

test ("salesapp login", async function({page}){

    //login

    await page.goto("https://xiqonline.com/auth/login?&redirectURL=https://salesapp.xiqonline.com")
    await page.getByPlaceholder("Enter your email address…").fill("hmahmood@xiqinc.com")
    await page.getByPlaceholder("Enter your password…").fill("Temp@11223344@")
    await Promise.all([
        page.waitForURL("**/feed/gilroy"),
        page.getByText("Log in now").click()
]);

    await expect(page).toHaveURL("https://salesapp.xiqonline.com/feed/gilroy")


//cancel certification pop up   

    await page.locator("//span[@aria-label='Register now'][normalize-space()='Cancel']").click()

    //logout

    await page.locator("(//button[@aria-label='Profile picture for menu'])[1]").click()
    await page.locator("//button[@title='Logout']").click()
    await Promise.all([
        page.waitForURL("https://xiqonline.com/auth/login?&redirectURL=https://salesapp.xiqonline.com"),
        await page.locator("div[class='ant-modal-wrap ant-modal-centered'] button:nth-child(2)").click()
    ])
    await page.waitForTimeout(1000)

})