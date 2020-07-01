describe('Deleting players', () => {
  it('Removes all players from the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="playerName"]')
      .type('New Player');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="playerName"]')
    .type('Player 2');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="removeAllPlayers"]')
      .click();

    cy.contains('New Player').should('not.exist');
    cy.contains('Player 2').should('not.exist');
  })

  it('Removes a single player from the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="playerName"]')
      .type('New Player');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="playerName"]')
    .type('Player 2');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="removeNew Player"]')
      .click();

    cy.contains('New Player').should('not.exist');
    cy.contains('Player 2');
  })
})