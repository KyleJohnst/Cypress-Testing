describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
  })

  it('starts off on zero', () => {
    cy.get('h1').should('have.text', 'Current Count: 0')
  })

  it('can increment to 1', () => {
    cy.contains('Increment!').click()
    cy.get('h1').should('have.text', 'Current Count: 1')
  })

  it('can decrease to 1', () => {
    cy.contains('Increment!').click()
    cy.get('h1').should('have.text', 'Current Count: 2')
    cy.contains('Decrement!').click()
    cy.get('h1').should('have.text', 'Current Count: 1')
  })
  
  
  it('can be reset to zero', () => {
    cy.contains('Increment!').click()
    cy.get('h1').should('have.text', 'Current Count: 2')
    cy.contains('Reset').click()
    cy.get('h1').should('have.text', 'Current Count: 0')
  })
})