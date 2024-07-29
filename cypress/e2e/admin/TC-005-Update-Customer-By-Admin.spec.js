import { faker } from '@faker-js/faker';
import { navigationBar } from '../../support/Selectors/common';

describe('Update Customer by Admin', () => {
    it('TC-005: An admin user update a customer and Login and verify he updates.', () => {
        let email=faker.internet.email()
        let firstName=faker.person.firstName()
        let lastName=faker.person.lastName()
        let password=faker.internet.password()
        cy.adminLogin("");
        cy.updatecustomerByAdmin(email,firstName,lastName,password);
        cy.navigateToLoginPage('');
        cy.login(email,password);
        cy.get(navigationBar.userDetailsView).click();
        cy.contains(`${firstName} ${lastName}`).should('be.visible');
    })
  })