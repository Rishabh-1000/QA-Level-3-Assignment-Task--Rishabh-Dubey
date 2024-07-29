

describe('Delete Product', () => {
    it('TC-006: An admin user Deletes the Product.', () => {
        cy.adminLogin("");
        cy.deleteProduct("");
    })
})