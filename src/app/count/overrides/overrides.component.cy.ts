import { mount } from "cypress-angular-component-testing"
import { OverridesComponent } from "./overrides.component"

describe('OverridesComponent', () => {
    beforeEach(async () => {
        await mount(OverridesComponent)
    });

    it('can mount', () => {
        cy.get('p').contains('overrides works ')
    })

    it('increments every second', () => {
        cy.get('p').contains('overrides works ');
        cy.wait(1000);
        cy.get('p').contains('overrides works 0');
        cy.wait(1000);
        cy.get('p').contains('overrides works 1');
        cy.wait(4000);
        cy.get('p').contains('overrides works 5');
    })
})