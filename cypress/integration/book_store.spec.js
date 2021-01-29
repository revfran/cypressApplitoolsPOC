/// <reference types="cypress" />

describe('book_store functional tests',() => {

it('Search a title', () => {

    cy.visit('https://demoqa.com/books')

    cy.get('#searchBox').type('git{enter}')

    cy.get('div[class="action-buttons"]').should('have.length', 1)

    cy.get('span[id="see-book-Git Pocket Guide"]').click()
})
})