describe('ManageMovieView', () => {
  before(() => {
    cy.visit('/');
  });

  it('Create new movie.', () => {
    cy.get('[data-test-movie="btn-new-movie"]').click();
    cy.url().should('include', '/movies');

    // Create movie
    cy.get('[data-test-form-movie="input-name"]').type('Parasite').should('have.value', 'Parasite');
    cy.get('[data-test-form-movie="input-genre"]').type('Drama').should('have.value', 'Drama');
    cy.get('[data-test-form-movie="input-year"]').type('2018').should('have.value', '2018');
    cy.get('[data-test-form-movie="input-imdb-rating"]').type('8.5').should('have.value', '8.5');
    cy.get('[data-test-form-movie="input-duration"]').type('2h 12m').should('have.value', '2h 12m');
    cy.get('[data-test-form-movie="btn-save"]').click();
    cy.get('[data-test-snackbar="btn-close-message"]').click();
    cy.url().should('contain', '/');
    cy.reload();
    cy.get('[data-test-table-movie="tr-row-data"]').last().get('tr').should('contain', 'Parasite');

    // Edit Movie
    cy.get('[data-test-table-movie="btn-edit"]').last().click();
    cy.get('[data-test-form-movie="input-year"]').focus().clear().type('2019');
    cy.get('[data-test-form-movie="btn-save"]').click();
    cy.get('[data-test-snackbar="btn-close-message"]').click();

    // Delete Movie
    cy.get('[data-test-table-movie="btn-delete"]').last().click();
    cy.get('[data-test-snackbar="btn-close-message"]').click({ timeout: 20000 });
    cy.reload();
    cy.get('[data-test-table-movie="tr-row-data"]').should('have.length', 6);
  });
});
