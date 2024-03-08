describe('visiting the fact page', () => {

  it('should show a random fact upon visit', () => {
    cy.clearAllSessionStorage()
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
  })

  it.skip('should have two buttons', () => {
    cy.clearAllSessionStorage()
    cy.visit('http://localhost:3000/fact')
    cy.get('button[class=fav-card-btn]').should('be.visible')
    cy.get('button[class=new-fact-btn]').should('be.visible')
  })

  it.skip('should display error when failed to fetch fact and provide a path back home', () => {
    cy.visit('http://localhost:3000/fact')
    cy.intercept('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10', {
      statusCode: 404,
      body: '404 Not Found!',
      headers: {
        'x-not-found': 'true',
      },
    })
    cy.get('h2').contains('Looks like something is wrong. Please try again later.')
    cy.get('a').click()
    cy.get('h1').contains('Cats Meow')
  })

  it.skip('should maintain fact display over page refresh', () => {
    cy.clearAllSessionStorage()
    cy.visit('http://localhost:3000/fact')
    cy.intercept('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10', {
      status: 200,
      fixture: 'cat-facts'
    })
    cy.get('button[class=new-fact-btn]').click()
    cy.get('p').contains('Cats can see like wicked good')
    cy.reload()
    cy.get('p').contains('Cats can see like wicked good')
  })
})