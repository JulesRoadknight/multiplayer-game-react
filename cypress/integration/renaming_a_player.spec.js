describe('Renaming a player', () => {
  it('Updates a player in the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="playerName"]')
      .type('New Player');

    cy.get('[data-testid="sendButton"]')
      .click();

    // cy.get('[data-testid="New Player"]')
    //   .click();

    cy.get('[data-testid="editNew Player"]')
      .type('Player Updated');

    cy.get('[data-testid="updateNew Player"]')
      .click();

    cy.contains('Player Updated');

    cy.get('[data-testid="playerName"]')
      .should('have.value', '');
  })

  it('Will not update a duplicate player name', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="playerName"]')
      .type('New Player');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="playerName"]')
      .type('Player 2');

    cy.get('[data-testid="sendButton"]')
      .click();

    // cy.get('[data-testid="New Player"]')
    //   .click();

    cy.get('[data-testid="editPlayer 2"]')
      .type('New Player');

    cy.get('[data-testid="updatePlayer 2"]')
      .click();

    cy.get('[data-testid="New Player"]').contains('New Player');
    cy.get('[data-testid="Player 2"]').contains('Player 2');

    cy.get('[data-testid="playerName"]')
      .should('have.value', '');
  })
})