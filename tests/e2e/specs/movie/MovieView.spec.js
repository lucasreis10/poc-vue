describe('MovieView', () => {
  before(() => {
    cy.visit('/');
  });

  it('Check info data table.', () => {
    cy.get('[data-test-table-movie="tr-row-data"]').should('have.length', 6);
    cy.get('[data-test-table-movie="tr-row-header"]').should('exist');
    cy.get('[data-test-movie="btn-new-movie"]').should('exist');
  });
});
