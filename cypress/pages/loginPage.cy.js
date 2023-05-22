export class loginPage{
    navigate(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/')
    }
    enterUsername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }
    enterPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    }
    clickLogin(){
        cy.get('.oxd-button').click()
    }
    verifyLogin(){
        cy.get('.oxd-topbar-header-title').should('have.text','Dashboard')
    }

}