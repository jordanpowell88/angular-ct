import { mount, MountResponse } from "cypress-angular-component-testing"
import { GetterComponent } from "./getter/getter.component";
import { ParentComponent } from "./parent.component"

describe('ParentComponent', () => {
    let response: MountResponse<ParentComponent>;

    beforeEach(async() => {
        response = await mount(ParentComponent, { declarations: [GetterComponent]})
    })

    it('can mount', () => {
        cy.get('p').contains('parent works!')
    })

    it('can render the child component', () => {
        cy.get("app-getter").should('be.visible');
        cy.get('img').invoke('outerWidth').should('equal', 50).then(() => {
            response.component.imageSize = 200;
            response.fixture.detectChanges();
            cy.get('img').invoke('outerWidth').should('equal', 200)
        })
    })
})