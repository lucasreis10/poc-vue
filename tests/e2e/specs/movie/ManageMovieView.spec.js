describe('ManageMovieView', () => {
  before(() => {
    cy.intercept('POST', '/graphql', { fixture: 'movies-stubs.json' }).as('getMovies');

    cy.visit('/');
  });

  it('Create new movie.', () => {
    cy.get('[data-test-movie="btn-new-movie"]').click();

    cy.url().should('include', '/movies');

    cy.get('[data-test-form-movie="input-name"]').type('Parasite').should('have.value', 'Parasite');
    cy.get('[data-test-form-movie="input-genre"]').type('Drama').should('have.value', 'Drama');
    cy.get('[data-test-form-movie="input-year"]').type('2019').should('have.value', '2019');
    cy.get('[data-test-form-movie="input-imdb-rating"]').type('8.5').should('have.value', '8.5');
    cy.get('[data-test-form-movie="input-duration"]').type('2h 12m').should('have.value', '2h 12m');
    cy.get('[data-test-form-movie="btn-save"]').click();

    cy.get('[data-test-snackbar="btn-close-message"]').click();
    cy.get('[data-test-snackbar="wrapper"]').should('not.be.visible');

    cy.url().should('include', '/');
  });
});
