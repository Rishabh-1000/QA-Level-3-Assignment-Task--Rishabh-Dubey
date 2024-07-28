
describe('Add and Remove Items From Cart', () => {
    it('TC-003: Add Item To Cart and then Remove', () => {
        const search='Dog';
        cy.visit('/');
        cy.wait(2000);
        cy.addToCart(search);
    });
  });