describe('Starting a game', () => {
  it('Cannot start with fewer than 2 players', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="startGameButton"]').should('be.disabled');

    cy.get('[data-testid="playerName"]')
      .type('New Player');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="startGameButton"]').should('be.disabled');

    cy.get('[data-testid="playerName"]')
      .type('Player 2');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="startGameButton"]').should('not.be.disabled');

    cy.get('[data-testid="startGameButton"]')
      .click();

    cy.get('[data-testid="game"]').should('be.visible');
    cy.get('[data-testid="currentPlayer"]').should('contain', 'New Player');
  })

  it('Displays current player', () => {
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

    cy.get('[data-testid="startGameButton"]')
      .click();

    cy.get('[data-testid="game"]').should('be.visible');
    cy.get('[data-testid="currentPlayer"]').should('contain', 'New Player');
  })
})