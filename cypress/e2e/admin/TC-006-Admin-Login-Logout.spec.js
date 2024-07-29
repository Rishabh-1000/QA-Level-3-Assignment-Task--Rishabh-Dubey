describe('Admin Login Logout', () => {
  it('TC-006: An admin user Login and then Logout.', () => {
      cy.adminLogin("");
      cy.adminLogout("");
  })
})