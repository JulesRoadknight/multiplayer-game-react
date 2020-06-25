describe('Adding a player', () => {
  it('Displays a player in the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="playerName"]')
      .type('New Player');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="playerName"]')
      .should('have.value', '');

    cy.contains('New Player');
  })
})