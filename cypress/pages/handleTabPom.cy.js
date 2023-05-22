export class handleTab{
  tabNavigate= 'http://webdriveruniversity.com/'
  tabClickContactus= '#contact-us > div > div.section-title > h1'
  tabClickLoginPortal= '#login-portal > div > div.section-title > h1'
  tabEnterFirstName= '#contact_form > input:nth-child(1)'
  tabEnterLastName= '#contact_form > input:nth-child(2)'
  tabEnterUsername= '#text'
  tabEnterPassword= '#password'
  tabEnterMail= '#contact_form > input:nth-child(3)'
  tabComent= '#contact_form > textarea'
  tabVerifySubmitBttnIsEnable= '#form_buttons > input:nth-child(2)'
  tabVerifyLoginBttn= '#login-button'
  tabClickSubmit= '#form_buttons > input:nth-child(2)'
  tabClickLogin= '#login-button'


  //refer the above in the methods below
  navigate(){
    cy.visit(this.tabNavigate)
    cy.scrollTo(0, 200)
    cy.scrollTo(200 , 100)
//click contact us
  }
  clickContactUs(){
    cy.get('#contact-us').invoke('removeAttr' , 'target')
    cy.get(this.tabClickContactus).click()
  }
  enterFirstName(firstName){
    cy.get(this.tabEnterFirstName).type(firstName)
  }
  enterLastName(lastName){
    cy.get(this.tabEnterLastName).type(lastName)
  }
  enterMail(mail){
    cy.get(this.tabEnterMail).type(mail)
  }
  typeComment(comment){
    cy.get(this.tabComent).type(comment)
  }
  verifySubmitBttn(){
    cy.get(this.tabVerifySubmitBttnIsEnable).should('be.enabled')
  }
  clickSubmit(){
    cy.get(this.tabClickSubmit).click()
  }

  //click login portal
  clickLoginPortal(){
    cy.get('#login-portal').invoke('removeAttr','target')
    cy.get(this.tabClickLoginPortal).click()
  }
  enterUsername(username){
    cy.get(this.tabEnterUsername).type(username)
  }
  enterPassword(password){
    cy.get(this.tabEnterPassword).type(password)
  }
  verifyLoginIsEnabled(){
    cy.get(this.tabVerifyLoginBttn).should('be.enabled')
  }
  clickLogin(){
    cy.get(this.tabClickLogin).click()
  }


}