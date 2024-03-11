describe('favorites page', () => {
  beforeEach(() => {
    cy.intercept('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10', {
      status: 200,
      fixture: 'cat-facts'
    })
    cy.visit('http://localhost:3000/fact')
    cy.get('.name').contains('Siamese')
    cy.get('.fav').click()
    cy.get('.nav-links').children().next().next().click()
  })

  it('should contain a favorited fact', () => {
    cy.get('.fav-card-name').contains('Siamese')
  })

  it('should have have a delete button', () => {
    cy.get('.card-btn-container').invoke('show')
    cy.get('.delete-btn').invoke('show').click()
    cy.get('.no-ideas').contains('No saved ideas yet')
  })

  it('should have an expand button', () => {
    cy.get('.card-btn-container').invoke('show')
    cy.get('.expand-btn').invoke('show').click()
    cy.get('.exp-name').contains('Siamese')
    cy.get('.exp-description').contains('While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.')
    cy.get('.exp-stats-title').contains('Stats')
    cy.get('.exp-dogFriendly').contains('Yes')
    cy.get('.exp-energyLevel').contains('5')
    cy.get('.exp-origin').contains('Thailand')
    cy.get('.exp-temperament').contains('Active, Agile, Clever, Sociable, Loving, Energetic')
    cy.get('.exp-links-title').contains('External Links')
    cy.get('.vca-link').contains('VCA')
    cy.get('.wiki-link').contains('Wikipedia')
  })

  it('should have a button to return to favorites view', () => {
    cy.get('.card-btn-container').invoke('show')
    cy.get('.expand-btn').invoke('show').click()
    cy.get('.remove-card').click()
  })
})