describe('visiting the fact page', () => {

  it('should show a random fact upon visit', () => {
    cy.intercept('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10', {
      status: 200,
      fixture: 'cat-facts'
    })
    cy.visit('http://localhost:3000/')
    cy.get('button[class=fact-btn]').click()
    cy.get('p[class=name]').contains('Siamese')
    cy.get('p[class=dog-friendly]').contains("Yes")
    cy.get('p[class=energy-level]').contains(5)
    cy.get('p[class=affection-level]').contains(5)
    cy.get('p[class=origin]').contains('Thailand')
    cy.get('p[class=temperament]').contains("Active, Agile, Clever, Sociable, Loving, Energetic")
    cy.get('p[class=fact]').contains("While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.")
    cy.get('img[class=fact-img]').should('be.visible')
  })

  it('should have three buttons', () => {
    cy.visit('http://localhost:3000/fact')
    cy.get('.fav').should('be.visible')
    cy.get('.left').should('be.visible')
    cy.get('.right').should('be.visible')
  })
})