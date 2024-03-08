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