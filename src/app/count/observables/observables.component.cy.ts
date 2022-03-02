import { mount } from "cypress-angular-component-testing";
import { MountResponse } from "projects/angular/src/lib/mount";
import { filter } from "rxjs/operators";
import { ObservablesComponent } from "./observables.component";
import { ObservablesService } from "./observables.service";

describe('Observables', () => {
    let response: MountResponse<ObservablesComponent>

    beforeEach(async () => {
        response = await mount(ObservablesComponent, { providers: [ObservablesService]}, false);
    })

    it('can mount', () => {
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Add +');
        cy.get('button').contains('Subtract -');
    })

    it('can increment the count by clicking the add button which updates the observables next value in the service and it renders the new value in the component', () => {
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Add +').click();
        response.component.count$.pipe(filter(val => val > 0)).subscribe(() => response.fixture.detectChanges())
        cy.get('h3').contains('Observable Service Count: 1');
    })

    it('can decrement the count by clicking the subtract button which updates the observables next value in the service and it renders the new value in the component', () => {
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Subtract -').click();
        response.component.count$.pipe(filter(val => val < 0)).subscribe(() => response.fixture.detectChanges())
        response.fixture.detectChanges();
        cy.get('h3').contains('Observable Service Count: -1')   
    })
})