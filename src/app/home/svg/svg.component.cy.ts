import { SvgComponent } from "./svg.component"

describe('SvgComponent', () => {
    it('can mount', () => {
        cy.mount(SvgComponent);
        cy.get('svg').should('be.visible');
    })
})