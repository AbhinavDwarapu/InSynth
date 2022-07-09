describe('Check Link', () => {
  it('Valid Test: Link to Synth Page', () => {
    cy.visit('/');
    cy.get('a[href*="about"]').click();
    cy.url().should('include', '/about');
  });
});

describe('Open All Accordions', () => {
  it('Valid Test: Open Accordion 1', () => {
    cy.get('button').eq(0).click();
    cy.get('button').eq(0).click();
  });
  it('Valid Test: Open Accordion 2', () => {
    cy.get('button').eq(1).click();
  });
  it('Valid Test: Open Accordion 3', () => {
    cy.get('button').eq(2).click();
  });
  it('Valid Test: Open Accordion 4', () => {
    cy.get('button').eq(3).click();
  });
  it('Valid Test: Open Accordion 5', () => {
    cy.get('button').eq(4).click();
  });
});

describe('Close All Accordions', () => {
  it('Valid Test: Close Accordion 1', () => {
    cy.get('button').eq(0).click();
  });
  it('Valid Test: Close Accordion 2', () => {
    cy.get('button').eq(1).click();
  });
  it('Valid Test: Close Accordion 3', () => {
    cy.get('button').eq(2).click();
  });
  it('Valid Test: Close Accordion 4', () => {
    cy.get('button').eq(3).click();
  });
  it('Valid Test: Close Accordion 5', () => {
    cy.get('button').eq(4).click();
  });
});
