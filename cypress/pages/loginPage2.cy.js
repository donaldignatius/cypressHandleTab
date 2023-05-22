export class loginPage{
    
    loginNavigate= 'https://opensource-demo.orangehrmlive.com/web/'
    loginUsername= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginPassword= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginClickbtn= '.oxd-button'
    loginVerifylgn= '.oxd-topbar-header-title'
    loginClickForgotPsswd= '.orangehrm-login-forgot > .oxd-text'
    loginUsernameReset= '.oxd-input'
    loginClickResetPsswd= '.oxd-button--secondary'
    
    
    
    
    
    
    
    navigate(){
        cy.visit(this.loginNavigate)
    }
    enterUsername(username){
        cy.get(this.loginUsername).type(username)
    }
    enterPassword(password){
        cy.get(this.loginPassword).type(password)
    }
    clickLogin(){
        cy.get(this.loginClickbtn).click()
    }
    verifyLogin(){
        cy.get(this.loginVerifylgn).should('have.text','Dashboard')
    }
    clickForgotPsswd(){
        cy.get(this.loginClickForgotPsswd).click()
    }
    enterResetUsername(username){
        cy.get(this.loginUsernameReset).type(username)
    }
    clickResetPsswd(){
        cy.get(this.loginClickResetPsswd).click()
    }
}