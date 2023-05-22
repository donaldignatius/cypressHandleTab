/// <reference types = "cypress"/>
import { handleTab } from "../pages/handleTabPom.cy";
describe('handling tabs in cypress', () => {
    const ht = new handleTab()
    it('switch focus to contact us tab', () => {
        cy.fixture('handleTabPage').then((data) => {
            ht.navigate()
            ht.clickContactUs()
            ht.enterFirstName(data.firstName)
            ht.enterLastName(data.lastName)
            ht.enterMail(data.mail)
            ht.typeComment(data.comment)
            ht.verifySubmitBttn()
            ht.clickSubmit()

        })
    })

    it('switch to login tab', ()=> {
        cy.fixture('handleTabPage').then((data) => {
            ht.navigate()
            ht.clickLoginPortal()
            ht.enterUsername(data.username)
            ht.enterPassword(data.password)
            ht.verifyLoginIsEnabled()
            ht.clickLogin()
        })
    })
})