describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="synth"]').click();
    cy.url().should('include', '/synth');
  });
});
