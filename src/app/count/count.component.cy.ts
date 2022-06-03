import { TestBedConfig } from '../../../projects/angular/src/lib/mount';
import { provideMockStore } from "@ngrx/store/testing"
import { CountComponent } from "./count.component"
import { NgrxCounterComponent } from "./ngrx-counter/ngrx-counter.component"
import { ObservablesComponent } from "./observables/observables.component"
import { ObservablesService } from "./observables/observables.service"
import { OverridesComponent } from "./overrides/overrides.component"
import { TestOutputButtonComponent } from "./test-output-button/test-output-button.component"

describe('CountComponent', () => {
    const config: TestBedConfig<CountComponent> = {
        declarations: [TestOutputButtonComponent, ObservablesComponent, NgrxCounterComponent, OverridesComponent],
        providers: [ObservablesService, provideMockStore()]
    }

    it('can click the child Button that updates state (triggers change detection)', () => {
        cy.mount(CountComponent, config)
        cy.get('h3').contains('Total Clicks: 0');
        cy.get('button').contains('Add +').click();
        cy.get('h3').contains('Total Clicks: 1');
      })
    
    it('can increment the ObservablesComponent count by clicking the add button which updates the observables next value in the service and it renders the new value in the component', () => {
        cy.mount(CountComponent, config);
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Subtract -').click();
        cy.get('h3').contains('Observable Service Count: -1');
    })

    it('renders the NgRx Component with no count when no initialState set', () => {
        cy.mount(CountComponent, config);
        cy.get('h3').contains('NgRx Counter: ')
    })
})