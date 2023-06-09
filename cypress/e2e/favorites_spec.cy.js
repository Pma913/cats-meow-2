describe('favorites page', () => {
  it('should be able to favorite a fact', () => {
    cy.intercept('https://catfact.ninja/fact', {
      status: 200,
      fixture: 'cat-facts'
    })
    cy.visit('http://localhost:3000/fact')
    cy.get('button[class=new-fact-btn]').click()
    cy.get('p').contains('Cats can see like wicked good')
    cy.get('button[class=fav-card-btn]').click()
    cy.get('div[class=nav-links]').children().next().next().click()
    cy.get('p[class=fav-card-fact]').contains('Cats can see like wicked good')
  })

  it('should have a card and a way to delete the card', () => {
    cy.intercept('https://catfact.ninja/fact', {
      status: 200,
      fixture: 'cat-facts'
    })
    cy.visit('http://localhost:3000/fact')
    cy.get('button[class=new-fact-btn]').click()
    cy.get('button[class=fav-card-btn]').click()
    cy.get('div[class=nav-links]').children().next().next().click()
    cy.get('div[class=fav-card]').should('have.length', 1)
    cy.get('button[class=delete-btn]:first').click()
    cy.get('section[class=fav-card-display]').children().should('have.length', 0)
  })
})