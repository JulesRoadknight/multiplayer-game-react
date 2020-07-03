describe('Switching player', () => {
  it('Loops through the players', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="game"]').should('not.be.visible');

    cy.get('[data-testid="playerName"]')
      .type('New Player');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="playerName"]')
      .type('Player 2');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="playerName"]')
      .type('3');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="startGameButton"]')
      .click();

    cy.get('[data-testid="currentPlayer"]').should('contain', 'New Player');

    cy.get('[data-testid="endTurn"]')
      .click();

    cy.get('[data-testid="currentPlayer"]').should('contain', 'Player 2');

    cy.get('[data-testid="endTurn"]')
     .click();

    cy.get('[data-testid="currentPlayer"]').should('contain', '3');

    cy.get('[data-testid="endTurn"]')
    .click();

   cy.get('[data-testid="currentPlayer"]').should('contain', 'New Player');
  })
})