import { mount, MountResponse } from "cypress-angular-component-testing"
import { SvgComponent } from "./svg.component"

describe('SvgComponent', () => {
    let response: MountResponse<SvgComponent>;

    beforeEach(() => {
        response = mount(SvgComponent);
    })

    it('can mount', () => {
        cy.get('svg').should('be.visible');
    })
})