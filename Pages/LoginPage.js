class LoginPage
{
    constructor(page){
        this.page=page
        this.username ="#email1"
        this.password ="#password1"
        this.login= "//button[@type='submit']"
    }

    async LoginToApplication(){
        await this.page.fill(this.username,"admin@email.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.login)
    }
}

module.exports = LoginPage;