import { GetterComponent } from "./getter/getter.component";
import { ParentComponent } from "./parent.component";

describe('ParentComponent', () => {
    it('can mount', () => {
        cy.mount(ParentComponent, { declarations: [GetterComponent]})
        cy.get('p').contains('parent works!')
    })

    it('can render the child component', () => {
        cy.mount(ParentComponent, { declarations: [GetterComponent] }).then(response => {
            cy.get("app-getter").should('be.visible');
            cy.get('img').invoke('outerWidth').should('equal', 50).then(() => {
                response.component.imageSize = 200;
                response.fixture.detectChanges();
                cy.get('img').invoke('outerWidth').should('equal', 200)
            })
        })
    })
})