import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

import { RegistrationPage } from "./RegistrationPage";

export class POManager
{
    constructor (page)
    {
        this.page= page
        this.homepage = new HomePage(page)
        this.registerpage = new RegistrationPage(this.page)
        this.loginpage = new LoginPage(this.page)
    }
    //method for homepage

    getHomePage()
    {
        return this.homepage
    }

    //method for registration page

    getRegistrationPage()
    {
        return this.registerpage
    }

    //method for loginpage

    getLoginPage()
    {
        return this.loginpage
    }





}