/// <reference types="cypress" />

describe('book_store functional tests', () => {

    beforeEach(() => {

        cy.eyesOpen({
            appName: 'Hello World!',
            testName: 'My first JavaScript test!',
            browser: { width: 1024, height: 860 },
        });
    })


    it('Search a title', () => {

        cy.visit('https://demoqa.com/books')
        cy.eyesCheckWindow('Main Page');

        // Baseline
        cy.get('#searchBox').type('git{enter}')

        // Uncomment to force a visual test failure
        //cy.get('#searchBox').clear().type('git Pocket{enter}')

        cy.get('div[class="action-buttons"]').should('have.length', 1)
        cy.eyesCheckWindow('Filtered');

        cy.get('span[id="see-book-Git Pocket Guide"]').click()
        cy.eyesCheckWindow('Specific book');
    })

    afterEach(() => {
        cy.eyesClose()
    })

})