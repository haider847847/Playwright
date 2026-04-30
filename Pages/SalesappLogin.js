class SalesappLogin
{
    constructor (page)
    {
        this.page =page
        this.email = "//input[@name='email']"
        this.password = "//input[@name='Password']"
        this.login ="//button[@value='Log in now']"
    }

    async LoginClick()
    {
        await this.page.fill(this.email, "hmahmood@xiqinc.com")
        await this.page.fill(this.password, "Temp@11223344")
        await this.page.click(this.login)
    }
}


module.exports = SalesappLogin;