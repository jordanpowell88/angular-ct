import { mount } from "../../../../projects/angular/src/public-api"
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
})