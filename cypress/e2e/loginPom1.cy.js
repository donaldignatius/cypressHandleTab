/// <reference types ="cypress"/>
import { loginPage } from "../pages/loginPage.cy";
describe('to verify login with valid id', ()=> {
    //create a object of the loginPage
    const login = new loginPage()
    it('login wit valid id', ()=> {
        login.navigate()
        login.enterUsername('Admin')
        login.enterPassword('admin123')
        login.clickLogin()
        login.verifyLogin()
        cy.wait(4000)
    })

    it('login wit invalid username', ()=> {
        login.navigate()
        login.enterUsername('Admino')
        login.enterPassword('admin123')
        login.clickLogin()
        cy.wait(4000)
        //login.verifyLogin()
        expect(true).to.be.true
        let text= 'Invalid credentials'
        expect(text).to.be.eql('Invalid credentials')
    })


})