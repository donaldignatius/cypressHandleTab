/// <reference types ="cypress"/>
import { loginPage } from "../pages/loginPage2.cy";
describe('login demo/pom', () => {
    //create an object of the loginPage
    const login = new loginPage()

    it('login with valid credentials', () => {
        cy.fixture('loginPom_fixture').then((data) => {
            login.navigate()
            login.enterUsername(data.username)
            login.enterPassword(data.password)
            login.clickLogin()
            login.verifyLogin()
        })
    })

    it('login with invalid username and password', ()=>{

        cy.fixture('loginPom_fixture').then((data)=>{
            login.navigate()
            login.enterUsername(data.username2)
            login.enterPassword(data.password3)
            login.clickLogin()
            expect(true).to.be.true
            let text= 'Invalid credentials'
            expect(text).to.be.eql('Invalid credentials')
        })
    })

    it('login with invalid username', () => {
        cy.fixture('loginPom_fixture').then((data) => {
            login.navigate()
            login.enterUsername(data.username2)
            login.enterPassword(data.password2)
            login.clickLogin()
            expect(true).to.be.true
            let text = 'Invalid credentials'
            expect(text).to.be.eql('Invalid credentials')
        })
    })

    it('login with invalid password', () => {
        cy.fixture('loginPom_fixture').then((data) => {
            login.navigate()
            login.enterUsername(data.username3)
            login.enterPassword(data.password3)
            login.clickLogin()
            expect(true).to.be.true
            let text = 'Invalid credentials'
            expect(text).to.be.eql('Invalid credentials')

        })

    })

    it('login with empty username and password fields', () => {
        login.navigate()
        //login.enterUsername()
        //login.enterPassword()
        login.clickLogin()
        expect(true).to.be.true
        let text = 'Required'
        expect(text).to.be.eql('Required')

    })

    it('login with empty username field', () => {
        cy.fixture('loginPom_fixture').then((data) => {
            login.navigate()
            //login.enterUsername()
            login.enterPassword(data.password4)
            login.clickLogin()
            expect(true).to.be.true
            let text = 'Required'
            expect(text).to.be.eql('Required')

        })

    })

    it('login with empty password field', () => {
        cy.fixture('loginPom_fixture').then((data) => {
            login.navigate()
            login.enterUsername(data.username4)
            //login.enterPassword()
            login.clickLogin()
            expect(true).to.be.true
            let text = 'Required'
            expect(text).to.be.eql('Required')
        })

    })

    it('verify user can reset password' , () => {
        cy.fixture('loginPom_fixture').then((data) => {
            login.navigate()
            login.clickForgotPsswd()
            login.enterResetUsername(data.username)
            login.clickResetPsswd()
        })
    })
})