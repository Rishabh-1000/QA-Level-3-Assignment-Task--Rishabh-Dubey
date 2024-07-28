import { navigationBar } from '../../support/Selectors/common';
import { faker } from '@faker-js/faker';

describe('User Sign-Up Process', () => {
    it('TC-001: User registration to create a new account in the Pet Shop application.', () => {
        let email=faker.internet.email()
        let firstName=faker.person.firstName()
        let lastName=faker.person.lastName()
        let password=faker.internet.password()
        cy.navigateToLoginPage('');
        cy.navigateToSignUpPage('');
        cy.signUp(email,firstName,lastName,password);
        cy.navigateToLoginPage('');
        cy.login(email,password);
        cy.get(navigationBar.userDetailsView).click();
        cy.contains(`${firstName} ${lastName}`).should('be.visible');
    });
  });