import { mount } from "cypress-angular-component-testing"
import { TestOutputButtonComponent } from "./test-output-button.component"

describe('TestOutputButtonComponent', () => {
    it('can mount the component', () => {
        mount(TestOutputButtonComponent)
        cy.get('h3').contains('Total Clicks: 0')
        cy.get('button').contains('Add +');
    })

    it('updates the clickCounter on button click', () => {
        mount(TestOutputButtonComponent);
        cy.get('h3').contains('Total Clicks: 0');
        cy.get('button').click();
        cy.get('h3').contains('Total Clicks: 1');
    })

    it('emits the next value on click', () => {
        const result = mount(TestOutputButtonComponent)
        cy.spy(result.component.count, 'emit').as('countEmitted');
        cy.get('button').click();
        cy.get('@countEmitted').should('have.been.calledOnceWith', 1);
    })
})