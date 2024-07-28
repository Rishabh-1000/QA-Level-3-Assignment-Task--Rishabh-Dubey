
describe('Search Products', () => {
    it('TC-004: Search a Product and Verify Results have the Searched String', () => {
        const search='Dog';
        cy.visit('/');
        cy.wait(2000);
        cy.search(search);
    });
  });