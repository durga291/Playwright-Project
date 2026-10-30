export class HomePage
{
    constructor(page)
    {
        this.page = page
        this.RegisterLink  = page.locator("//a[normalize-space()='Register']")
    }

    async goTo() //method1 ----- for open url
    {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
    }

    async clickOnRegisterLink() //method2 ---- for click register 
    {
        await this.RegisterLink.click()
    }
}