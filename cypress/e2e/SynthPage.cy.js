describe('Check Link', () => {
  it('links to synth', () => {
    cy.visit('/');
    cy.get('a[href*="synth"]').click();
    cy.url().should('include', '/synth');
  });
});

describe('Set Controller Functions', () => {
  it('sets channel', () => {
    cy.visit('/');
    cy.get('a[href*="synth"]').click();
    cy.url().should('include', '/synth');
  });
});
