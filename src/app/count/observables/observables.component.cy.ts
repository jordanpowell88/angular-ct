import { fakeAsync } from "@angular/core/testing";
import { filter, take } from "rxjs";
import { TestBedConfig } from '../../../../projects/angular/src/lib/mount';
import { ObservablesComponent } from "./observables.component";
import { ObservablesService } from "./observables.service";

describe('Observables', () => {
    const config: TestBedConfig<ObservablesComponent> = { providers: [ObservablesService]}

    it('can mount', () => {
        cy.mount(ObservablesComponent, config, false)
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Add +');
        cy.get('button').contains('Subtract -');
    })

    it('can increment the count by clicking the add button which updates the observables next value in the service and it renders the new value in the component', () => {
        cy.mount(ObservablesComponent, config, false).then(response => {
            cy.get('h3').contains('Observable Service Count: 0');
            cy.get('button').contains('Add +').click();
            response.component.count$.pipe(filter(val => val > 0), take(1)).subscribe(() => response.fixture.detectChanges())
            cy.get('h3').contains('Observable Service Count: 1');
        })
    })

    it('can decrement the count by clicking the subtract button which updates the observables next value in the service and it renders the new value in the component', fakeAsync(() => {
        cy.mount(ObservablesComponent, config, false).then(response => {
            cy.get('h3').contains('Observable Service Count: 0');
            cy.get('button').contains('Subtract -').click();
            response.component.count$.pipe(filter(val => val < 0), take(1)).subscribe(() => response.fixture.detectChanges())
            cy.get('h3').contains('Observable Service Count: -1')
        })
    }))
})