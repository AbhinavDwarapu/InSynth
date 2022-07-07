describe('Check Link', () => {
  it('links to synth', () => {
    cy.visit('/');
    cy.get('a[href*="synth"]').click();
    cy.url().should('include', '/synth');
  });
});

describe('Use keyboard as piano', () => {
  it('presses keys: \'asdfghjk\'', () => {
    cy.get('body').type('asdfghjk', { delay: 300 });
  });
});

describe('Test and Play Each Effect', () => {
  it('Play bitcrusher effect', () => {
    cy.get('div[id=bitcrusher]').within(() => {
      // Enable bitcrusher
      cy.get('input').eq(0).click({ force: true });
      // Move slider 1 using arrow keys
      cy.get('[role="slider"]').eq(0).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
    });
    cy.get('body').type('asdfghjk', { delay: 300 });
    // Disable bitcrusher
    cy.get('div[id=bitcrusher]').within(() => {
      cy.get('input').eq(0).click({ force: true });
    });
  });
  it('Play chorus effect', () => {
    cy.get('div[id=chorus]').within(() => {
      cy.get('input').eq(0).click({ force: true });
      cy.get('[role="slider"]').eq(0).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
      cy.get('[role="slider"]').eq(1).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
      cy.get('[role="slider"]').eq(2).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
      cy.get('[role="slider"]').eq(3).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
      cy.get('[role="slider"]').eq(4).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
    });
    cy.get('body').eq(0).type('asdfghjk', { delay: 300 });

    cy.get('div[id=chorus]').within(() => {
      cy.get('input').eq(0).click({ force: true });
    });
  });

  it('Play distortion effect', () => {
    cy.get('div[id=distortion]').within(() => {
      cy.get('input').eq(0).click({ force: true });
      cy.get('[role="slider"]').eq(0).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
      cy.get('[role="slider"]').eq(1).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
    });
    cy.get('body').eq(0).type('asdfghjk', { delay: 300 });

    cy.get('div[id=distortion]').within(() => {
      cy.get('input').eq(0).click({ force: true });
    });
  });

  it('Play reverb effect', () => {
    cy.get('div[id=reverb]').within(() => {
      cy.get('input').eq(0).click({ force: true });
      cy.get('[role="slider"]').eq(0).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
    });
    cy.get('body').eq(0).type('asdfghjk', { delay: 300 });

    cy.get('div[id=reverb]').within(() => {
      cy.get('input').eq(0).click({ force: true });
    });
  });

  it('Play phaser effect', () => {
    cy.get('div[id=phaser]').within(() => {
      cy.get('input').eq(0).click({ force: true });
      cy.get('[role="slider"]').eq(0).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
      cy.get('[role="slider"]').eq(1).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
      cy.get('[role="slider"]').eq(2).click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}', { force: true });
    });
    cy.get('body').eq(0).type('asdfghjk', { delay: 300 });

    cy.get('div[id=phaser]').within(() => {
      cy.get('input').eq(0).click({ force: true });
    });
  });
});
