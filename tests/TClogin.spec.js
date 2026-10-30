import { POManager } from '../pageobjects/POManager'
import { customtest as test,expect } from '../fixtures/testfixture'

//for login page

test('login',async({page,testdataForregistration})=>
{
        //create object of home page

        // const homepage = new HomePage(page)
        //                 homepage.goTo()
        //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
        //create object for pomanager,this will use multiple testcases

        const poManager = new POManager(page)
        const homepage =  poManager.getHomePage()
       await  homepage.goTo()
       await homepage.clickOnRegisterLink()

       //login page
       const LoginPage = poManager.getLoginPage()
       await LoginPage.loginToApplication(
        testdataForregistration.username,
        testdataForregistration.password)
        


        
}
)