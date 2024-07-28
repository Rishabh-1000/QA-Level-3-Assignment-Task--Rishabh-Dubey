import { faker } from '@faker-js/faker';
import { loginModal,forgotPasswordModal,cart } from  '../support/Selectors/access';
import { navigationBar, userSignUpForm,search } from  '../support/Selectors/common';

// Cypress.Commands.add('Adminlogin', (user) => {
//     cy.visit('/login')
//     cy.get(loginModal.emailInputLabel).type(Cypress.env('ADMIN_EMAIL'))
//     cy.get(loginModal.passwordInputLabel).type(Cypress.env('ADMIN_PASSWORD'))
//      cy.get(NavigationBar.loginButton).click();
//     // // cy.url().should('contain', '/login-successful')
//   })

  Cypress.Commands.add('navigateToLoginPage', () => 
    {
      cy.visit('/');
      cy.contains(navigationBar.loginHome).click();
      cy.contains('Log In').should('be.visible');
    
  })

  Cypress.Commands.add('navigateToSignUpPage', () => 
    {
      cy.contains(loginModal.registerLinkLabel).click();
      cy.contains('Sign up').should('be.visible');
    
  })

  Cypress.Commands.add('signUp', (email,firstName,lastName,password) => 
    {
      
      cy.contains(userSignUpForm.firstName).parent().find('input').clear().type(firstName);
      cy.contains(userSignUpForm.lastName).parent().find('input').clear().type(lastName);
      cy.contains(userSignUpForm.email).parent().find('input').clear().type(email);
      cy.contains(userSignUpForm.phone).parent().find('input').clear().type(faker.phone.number());
      cy.contains(userSignUpForm.address).parent().find('input').clear().type(faker.location.streetAddress());
      cy.contains(userSignUpForm.password).parent().find('input').clear().type(password);
      cy.contains(userSignUpForm.passwordConfirmation).parent().find('input').clear().type(password);
      cy.contains(userSignUpForm.isMarketingCheckboxLabel).parent().find('input').check();
      cy.contains(userSignUpForm.registerButton).click();
  })

  Cypress.Commands.add('login', (email,password) => 
    {
      cy.contains(loginModal.emailInputLabel).parent().find('input').type(email);
      cy.contains(loginModal.passwordInputLabel).parent().find('input').type(password);
      cy.contains(loginModal.rememberMeCheckbox).parent().find('input').check();
      cy.contains(loginModal.loginButton).click();
  })

  Cypress.Commands.add('resetPassword', (email,password) => 
    {
      cy.contains(forgotPasswordModal.forgotPasswordLink).click();
        cy.url().should('include', '/recover');
        cy.reload();
        cy.wait(1500);
        cy.contains(userSignUpForm.email).parent().find('input').type(email);
        cy.xpath(forgotPasswordModal.recoverButton).click();
        cy.contains(forgotPasswordModal.recoverLink).click();
        cy.wait(1500);
        cy.contains(forgotPasswordModal.newPassword).parent().find('input').type(password);
        cy.contains(forgotPasswordModal.confirmNewPassword).parent().find('input').type(password);
        cy.contains(forgotPasswordModal.getRecoverLink).click();
  })

  Cypress.Commands.add('search', (searchKeyword) => 
    {
      cy.contains(search.label).parent().find('input').type(`${searchKeyword}{enter}`);
      cy.get(search.resultsPanelClass).should('be.visible').within(() => {
        cy.get(search.resultItemClass).each(($element) => {
          expect($element.text().trim()).to.include(searchKeyword);
          })   
          })   
  })

  Cypress.Commands.add('addToCart', (searchKeyword) => 
    {
      cy.contains(search.label).parent().find('input').type(`${searchKeyword}{enter}`);
      cy.get(search.resultsPanelClass).should('be.visible').within(() => {
        cy.get(search.resultItemClass).first().click();
      })
      cy.intercept('GET', '/api/v1/product/*').as('productsRequest');
      cy.wait('@productsRequest');
      cy.get(cart.productTitle).invoke('text').then(text => {
        cy.contains('add to cart ').should('be.visible');
        cy.contains(cart.addToCart).click();       
        cy.contains('remove from cart ').should('be.visible');
        cy.contains(cart.moveToCart).click();
        cy.contains(text).should('be.visible');
        cy.contains(cart.removeFromCart).click();
        cy.contains(text).should('not.exist');
      })
  })

