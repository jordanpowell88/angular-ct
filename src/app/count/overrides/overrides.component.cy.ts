import { OverridesComponent } from "./overrides.component"

describe('OverridesComponent', () => {
    it('can mount', () => {
        cy.mount(OverridesComponent)
        cy.get('p').contains('overrides works ')
    })

    it('increments every second', () => {
        cy.mount(OverridesComponent);
        cy.get('p').contains('overrides works ');
        cy.wait(1000);
        cy.get('p').contains('overrides works 0');
        cy.wait(1000);
        cy.get('p').contains('overrides works 1');
        cy.wait(4000);
        cy.get('p').contains('overrides works 5');
    })
})