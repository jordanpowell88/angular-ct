import { mount } from "../../../../projects/angular/src/public-api"
import { ObservablesComponent } from "./observables.component"

describe('Observables', () => {
    beforeEach(() => {
        mount(ObservablesComponent);
    })

    it('can mount', () => {
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Add +');
        cy.get('button').contains('Subtract -');
    })

    it('can increment the count by clicking the add button which updates the observables next value in the service and it renders the new value in the component', () => {
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Add +').click();
        cy.get('h3').contains('Observable Service Count: 1');
    })

    it('can decrement the count by clicking the subtract button which updates the observables next value in the service and it renders the new value in the component', () => {
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Subtract -').click();
        cy.get('h3').contains('Observable Service Count: -1')   
    })
})