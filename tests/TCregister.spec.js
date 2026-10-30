//import{test,expect} from '@playwright/test'

// import { HomePage } from '../pageobjects/HomePage'
// import { RegistrationPage } from '../pageobjects/RegistrationPage' //no need of import all pages just import pageobject manager is enough

import { POManager } from '../pageobjects/POManager'

//import testdata from'../utils/parabank.json' assert {type:'json'}
import { customtest as test,expect } from '../fixtures/testfixture'

// test('registration',async({page})=>
// {
//         //create object of home page

//         // const homepage = new HomePage(page)
//         //                 homepage.goTo()
//         //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
//         //create object for pomanager,this will use multiple testcases

//         const poManager = new POManager(page)
//         const homepage =  poManager.getHomePage()
//        await  homepage.goTo()
//        await homepage.clickOnRegisterLink()


//         //create object of registration page

//         // const registerpage = new RegistrationPage(page)//if pomanager is manage pageobjects no need of object creation of every page

//         const registerpage = poManager.getRegistrationPage()
     
//         await registerpage.registerUser('rina','singh','noida','delhi','delhi','12345','8632154780','23564','riena','java123','java123')
//         registerpage.clickOnRegisterButton()
//         await page.waitForTimeout(2000)
// }
// )

//datadriven testing----

// for(const data of testdata)
// {

// test(`registration ${data.username}`,async({page})=>
// {
//         //create object of home page

//         // const homepage = new HomePage(page)
//         //                 homepage.goTo()
//         //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
//         //create object for pomanager,this will use multiple testcases

//         const poManager = new POManager(page)
//         const homepage =  poManager.getHomePage()
//        await  homepage.goTo()
//        await homepage.clickOnRegisterLink()


//         //create object of registration page

//         // const registerpage = new RegistrationPage(page)//if pomanager is manage pageobjects no need of object creation of every page

//         const registerpage = poManager.getRegistrationPage()
     
//         await registerpage.registerUser(data.firstname,data.lastname,data.city,data.address,data.state,data.zipcode,
//                                                         data.phonenumber,data.ssn,data.username,data.password,data.confirmpassword)
//         registerpage.clickOnRegisterButton()
//         await page.waitForTimeout(2000)
// }
// )
// }

//for fixture---


// test('registration',async({page,testdataForregistration})=>
// {
//         //create object of home page

//         // const homepage = new HomePage(page)
//         //                 homepage.goTo()
//         //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
//         //create object for pomanager,this will use multiple testcases

//         const poManager = new POManager(page)
//         const homepage =  poManager.getHomePage()
//        await  homepage.goTo()
//        await homepage.clickOnRegisterLink()


//         //create object of registration page

//         // const registerpage = new RegistrationPage(page)//if pomanager is manage pageobjects no need of object creation of every page

//         const registerpage = poManager.getRegistrationPage()
     
//         await registerpage.registerUser(testdataForregistration.firstname,
//                 testdataForregistration.lastname,
//                 testdataForregistration.city,
//                 testdataForregistration.address,
//                 testdataForregistration.state,
//                 testdataForregistration.zipcode,
//                 testdataForregistration.phonenumber,
//                 testdataForregistration.ssn,
//                 testdataForregistration.username,
//                 testdataForregistration.password,
//                 testdataForregistration.confirmpassword,
//         )
//         registerpage.clickOnRegisterButton()
//         await page.waitForTimeout(2000)

//         //validate url

//         // await page.waitForURL()

//         // expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

// }
// )

// //for login page

// test('login',async({page,testdataForregistration})=>
// {
//         //create object of home page

//         // const homepage = new HomePage(page)
//         //                 homepage.goTo()
//         //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
//         //create object for pomanager,this will use multiple testcases

//         const poManager = new POManager(page)
//         const homepage =  poManager.getHomePage()
//        await  homepage.goTo()
//        await homepage.clickOnRegisterLink()

//        //login page
//        const LoginPage = poManager.getLoginPage()
//        await LoginPage.loginToApplication(
//         testdataForregistration.username,
//         testdataForregistration.password)


        
// }
// )



// //To run testcases in parallel

// //by default these registration and login test cases run parallel,if we want to run parallel for our own

//when one test case is failed--skipped--failed

// test.describe.parallel('parallel test',()=>
// {


// test('registration',async({page,testdataForregistration})=>
// {
//         //create object of home page

//         // const homepage = new HomePage(page)
//         //                 homepage.goTo()
//         //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
//         //create object for pomanager,this will use multiple testcases

//         const poManager = new POManager(page)
//         const homepage =  poManager.getHomePage()
//        await  homepage.goTo()
//        await homepage.clickOnRegisterLink()


//         //create object of registration page

//         // const registerpage = new RegistrationPage(page)//if pomanager is manage pageobjects no need of object creation of every page

//         const registerpage = poManager.getRegistrationPage()
     
//         await registerpage.registerUser(testdataForregistration.firstname,
//                 testdataForregistration.lastname,
//                 testdataForregistration.city,
//                 testdataForregistration.address,
//                 testdataForregistration.state,
//                 testdataForregistration.zipcode,
//                 testdataForregistration.phonenumber,
//                 testdataForregistration.ssn,
//                 testdataForregistration.username,
//                 testdataForregistration.password,
//                 testdataForregistration.confirmpassword,
//         )
//         registerpage.clickOnRegisterButton()
//         await page.waitForTimeout(2000)

//         //validate url

//         // await page.waitForURL()

//         // expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

// }
// )

// //for login page

// test('login',async({page,testdataForregistration})=>
// {
//         //create object of home page

//         // const homepage = new HomePage(page)
//         //                 homepage.goTo()
//         //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
//         //create object for pomanager,this will use multiple testcases

//         const poManager = new POManager(page)
//         const homepage =  poManager.getHomePage()
//        await  homepage.goTo()
//        await homepage.clickOnRegisterLink()

//        //login page
//        const LoginPage = poManager.getLoginPage()
//        await LoginPage.loginToApplication(
//         testdataForregistration.username,
//         testdataForregistration.password)


        
// }
// )


// })


//To run testcases in serial

//when one testcase is failed  it will not run other ---it is dependent

// test.describe.serial('serial test',()=>
// {


// test('registration',async({page,testdataForregistration})=>
// {
//         //create object of home page

//         // const homepage = new HomePage(page)
//         //                 homepage.goTo()
//         //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
//         //create object for pomanager,this will use multiple testcases

//         const poManager = new POManager(page)
//         const homepage =  poManager.getHomePage()
//        await  homepage.goTo()
//        await homepage.clickOnRegisterLink()


//         //create object of registration page

//         // const registerpage = new RegistrationPage(page)//if pomanager is manage pageobjects no need of object creation of every page

//         const registerpage = poManager.getRegistrationPage()
     
//         await registerpage.registerUser(testdataForregistration.firstname,
//                 testdataForregistration.lastname,
//                 testdataForregistration.city,
//                 testdataForregistration.address,
//                 testdataForregistration.state,
//                 testdataForregistration.zipcode,
//                 testdataForregistration.phonenumber,
//                 testdataForregistration.ssn,
//                 testdataForregistration.username,
//                 testdataForregistration.password,
//                 testdataForregistration.confirmpassword,
//         )
//         registerpage.clickOnRegisterButton()
//         await page.waitForTimeout(2000)

//         //validate url

//         // await page.waitForURL()

//         // expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

// }
// )

// //for login page

// test('login',async({page,testdataForregistration})=>
// {
//         //create object of home page

//         // const homepage = new HomePage(page)
//         //                 homepage.goTo()
//         //                 homepage.clickOnRegisterLink() //if pomanager is manage pageobjects no need of object creation of every page
        
//         //create object for pomanager,this will use multiple testcases

//         const poManager = new POManager(page)
//         const homepage =  poManager.getHomePage()
//        await  homepage.goTo()
//        await homepage.clickOnRegisterLink()

//        //login page
//        const LoginPage = poManager.getLoginPage()
//        await LoginPage.loginToApplication(
//         testdataForregistration.username,
//         testdataForregistration.password)


        
// }
// )


// })

//tags--


test.describe.serial('serial test',()=>
{


test('@smoke registration',async({page,testdataForregistration})=>
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


        //create object of registration page

        // const registerpage = new RegistrationPage(page)//if pomanager is there,
                                                          // to manage pageobjects no need of object creation of every page

        const registerpage = poManager.getRegistrationPage()
     
        await registerpage.registerUser(testdataForregistration.firstname,
                testdataForregistration.lastname,
                testdataForregistration.city,
                testdataForregistration.address,
                testdataForregistration.state,
                testdataForregistration.zipcode,
                testdataForregistration.phonenumber,
                testdataForregistration.ssn,
                testdataForregistration.username,
                testdataForregistration.password,
                testdataForregistration.confirmpassword,
        )
        registerpage.clickOnRegisterButton()
        await page.waitForTimeout(2000)

        //validate url

        // await page.waitForURL()

        // expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

}

)

//for login page     //for smoke or regression tests we are using @smoke and @regression tag,if not no need to use that tags

test('login @smoke @regression',async({page,testdataForregistration})=>
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


})


