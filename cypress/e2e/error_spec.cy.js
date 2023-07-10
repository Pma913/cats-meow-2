describe('error page', () => {
  it('should display an error page if failed to get fact', () => {
    cy.intercept('https://catfact.ninja/fact', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000')
    cy.get('button[class=fact-btn]').click()
    cy.get('h2').contains('Looks like there was a problem. Please try again later')
  })

  it('should display message if no favorited facts', () => {
    cy.visit('http://localhost:3000')
    cy.get('button[class=fav-btn]').click()
    cy.get('h2').contains('No saved ideas yet')
  })
})  