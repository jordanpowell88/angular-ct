describe('Count', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/count');
    })

    it('can load the page', () => {
        cy.get('h3').contains('NgRx Counter: 0');
        cy.get('button').contains('Increment +').click();
        cy.get('h3').contains('NgRx Counter: 1')
    })
})