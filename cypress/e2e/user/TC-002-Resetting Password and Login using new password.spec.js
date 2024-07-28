import { navigationBar } from '../../support/Selectors/common';
import { faker } from '@faker-js/faker';

describe('Reset Password', () => {
    it('TC-002: Reset Password and Login using new Password', () => {
        let email=faker.internet.email()
        let firstName=faker.person.firstName()
        let lastName=faker.person.lastName()
        let password=faker.internet.password()
        cy.navigateToLoginPage('');
        cy.navigateToSignUpPage('');
        cy.signUp(email,firstName,lastName,password);
        cy.navigateToLoginPage('');
        cy.resetPassword(email,password+'test');
        cy.navigateToLoginPage('');
        cy.login(email,password+'test');
        cy.get(navigationBar.userDetailsView).click();
        cy.contains(`${firstName} ${lastName}`).should('be.visible');
    });
  });