describe('visiting the fact page', () => {

  it('should show a random fact upon visit', () => {
    cy.intercept('https://catfact.ninja/fact', {
      status: 200,
      fixture: 'cat-facts'
    })
    cy.visit('http://localhost:3000/')
    cy.get('button[class=fact-btn]').click()
    cy.get('p').contains('Cats can see like wicked good')
  })

  it('should have two buttons', () => {
    cy.visit('http://localhost:3000/fact')
    cy.get('button[class=fav-card-btn]')
    cy.get('button[class=new-fact-btn]')
  })

  it('should display error if there it does not get fact and provide a path back home', () => {
    cy.intercept('https://catfact.ninja/fact', (res) => res.destroy())
    cy.visit('http://localhost:3000/fact')
    cy.get('button[class=new-fact-btn]').click()
    cy.get('h2').contains('Looks like there was a problem. Please try again later')
    cy.get('a').click()
    cy.get('h1').contains('Cats Meow')
  })
})