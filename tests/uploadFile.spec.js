 const {test,expect} = require ('@playwright/test')

 test("upload file", async function({page})
{
    await page.goto("https://xiqonline.com/auth/login?&redirectURL=https://salesapp.xiqonline.com")
    await page.getByPlaceholder("Enter your email address…").fill("hmahmood@xiqinc.com")
    await page.getByPlaceholder("Enter your password…").fill("Temp@11223344@")
    await Promise.all ([
        page.waitForURL("**/feed/gilroy"), 
        page.getByText("Log in now").click()
    ])
    await page.locator("//span[@aria-label='Register now'][normalize-space()='Cancel']").click()
    await Promise.all([
        page.waitForURL("**/documents"),
        page.locator(".document-svg").click()
    ])
    await page.waitForTimeout(2000)
    await page.locator("//span[normalize-space()='xiQ, Inc. (Shared Folder)']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[normalize-space()='Upload document']").click()
    //await page.locator("//div[@class='content-div']").click()
    //await page.locator('input[type="file"]').setInputFiles("C:/Users/Haider Mahmood/Downloads/workkk.pptx");
    const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator("//div[@class='content-div']").click()
]);

    await fileChooser.setFiles("C:/Users/Haider Mahmood/Downloads/workkk.pptx");
    await page.waitForTimeout(10000)
    await expect(page.locator("//span[@class='upload-percentage isSuccessful']")).toHaveText("Uploaded Successfully")
    }
)