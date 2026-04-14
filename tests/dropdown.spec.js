 const {test,expect} = require ('@playwright/test')


test ("Select Values from dropdown", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("#state").selectOption({label:"Goa"})
    await page.waitForTimeout(5000)
    await page.locator("#state").selectOption({value: "Bihar"})
    await page.waitForTimeout(4000)
    const Values = await page.locator("#state option").allTextContents()
    console.log("All dropdown values include ", Values)
    await expect(Values.includes("Bihar")).toBeTruthy()


})
