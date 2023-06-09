describe('visit home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display a home page with a logo and title', () => {
    cy.get('img[class=logo')
    cy.get('h1').contains('Cats Meow')
  })

  it('should have a hero image and two buttons to choose from', () => {
    cy.get('img[class=hero-img]').should('be.visible')
    cy.get('button[class=fact-btn]').contains('Get Cat Facts')
    cy.get('button[class=fav-btn]').contains('Get Favorites')
  })

  it('should have an about section that describes application', () => {
    cy.get('section[class=about-box]')
    cy.get('h2[class=about-title]').contains('About Cats Meow')
    cy.get('p[class=about-description]').contains('The app that is all about the cat.')
    cy.get('h3[class=how-title]').contains('How do I Cats Meow?')
    cy.get('li:first').contains('Click the "Get Cat Facts" button')
    .next().contains('View the random fact')
    .next().contains('Favorite')
    .next().contains('Repeat')
    .next().contains('View all your favorites in one convenient location')
    
  })
})