///  <reference types='cypress'/>
import { faker } from '@faker-js/faker';
import { loginModal,forgotPasswordModal,cart } from  '../support/Selectors/access';
import { navigationBar, userSignUpForm,search ,actionsMenu} from  '../support/Selectors/common';
import { leftSideBar,customerPage ,productPage} from './Selectors/admin';

Cypress.Commands.add('adminLogin', (user) => {
    cy.visit('/login')
    cy.contains(loginModal.emailInputLabel).parent().find('input').type(Cypress.env('ADMIN_EMAIL'))
    cy.contains(loginModal.passwordInputLabel).parent().find('input').type(Cypress.env('ADMIN_PASSWORD'))
    cy.contains(loginModal.loginButton).click();
    cy.intercept('GET', '/api/v1/orders/*').as('orders');
    cy.wait('@orders');
    cy.url().should('contain', '/dashboard');
  })

  Cypress.Commands.add('adminLogout', (user) => {
    cy.contains(navigationBar.logout).click();
    cy.wait(1000);
    cy.contains('LOGOUT').should('not.exist');
    cy.contains('LOGIN').should('be.visible');
  })
  Cypress.Commands.add('updatecustomerByAdmin', (email,firstName,lastName,password) => 
    {
      cy.get(leftSideBar.customers).click();
      cy.url().should('contain', '/customers');
      cy.get('tbody').within(() => {
        cy.get('tr').first().within(()=>{
          cy.get(productPage.customerAction).click();
          cy.get(actionsMenu.editButton).click();
        }); 
      });
      cy.get(customerPage.customerModalClass)
      .should('be.visible').within(() => {
      cy.contains(userSignUpForm.firstName).parent().find('input').clear().type(firstName);
      cy.contains(userSignUpForm.lastName).parent().find('input').clear().type(lastName);
      cy.contains(userSignUpForm.addEmail).parent().find('input').clear().type(email);
      cy.contains(userSignUpForm.phone).parent().find('input').clear().type(faker.phone.number());
      cy.contains(userSignUpForm.location).parent().find('input').clear().type(faker.location.streetAddress());
      cy.contains(userSignUpForm.password).parent().find('input').clear().type(password);
      cy.contains(userSignUpForm.passwordConfirmation).parent().find('input').clear().type(password);
      })  
      cy.contains('button', customerPage.updateCustomerLabel).click({
        force: true,
      });
  })
  Cypress.Commands.add('deleteProduct', () => 
    { 
      cy.get(leftSideBar.products).click();
      cy.url().should('contain', '/products');
      cy.get('tbody').within(() => {
        cy.get('tr').first().within(()=>{
          cy.get(productPage.productAction).click();
          cy.get(actionsMenu.editButton).click();
        }); 
      })
      cy.get(productPage.productEditWindow).within(()=>
      {
          cy.contains(productPage.editProductTitle).invoke('text').invoke('replace','Edit Product: ','').then(text => 
            {
              cy.contains(text).should('be.visible');
              cy.wrap(text).as('myText');
              cy.contains(productPage.deleteProduct).click();
              cy.wait(2000);  
          });
      });
      cy.get('@myText').then((text) =>  { 
      cy.contains(text).should('not.exist');
    });  
  })

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

