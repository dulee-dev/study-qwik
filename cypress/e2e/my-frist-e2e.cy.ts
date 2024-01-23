describe('template spec', () => {
  it('passes', () => {
    cy.visit('/playground/e2e-test');
    cy.get('input[name=text]').type('someText');
    cy.get('.role-textshow').should('have.text', 'someText');
  });
});
