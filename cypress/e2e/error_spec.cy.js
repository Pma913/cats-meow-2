describe('error page', () => {
  it('should display an error page if failed to get fact', () => {
    cy.visit('http://localhost:3000/factsss')
    cy.get('.error-message').contains("Looks like something is wrong. Please try again later.")
  })
})  