describe('error page', () => {
  it('should display an error page if failed to get fact', () => {
    cy.intercept('https://catfact.ninja/fact', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
    cy.get('button[class=fact-btn]').click()
    cy.get('h2').contains("Looks like something is wrong. Please try again later.")
  })

  it('should display message if no favorited facts', () => {
    cy.visit('https://cats-meow.vercel.app/')
    cy.get('button[class=fav-btn]').click()
    cy.get('h2').contains('No saved ideas yet')
  })
    it('should be able to navigate back to home page', () => {
      cy.intercept('https://catfact.ninja/fact', {
      statusCode: 500
    })
      cy.visit('http://localhost:3000/')
      cy.get('button[class=fact-btn]').click()
      cy.get('h2').contains("Looks like something is wrong. Please try again later.")
      cy.get('h3').click()
      cy.get('h1').contains('Cats Meow')
    })
})  