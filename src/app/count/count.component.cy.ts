import { TestBed } from "@angular/core/testing"
import { MockStore, provideMockStore } from "@ngrx/store/testing"
import { mount } from "cypress-angular-component-testing"
import { CountComponent } from "./count.component"
import { CountModule } from "./count.module"
import { NgrxCounterComponent } from "./ngrx-counter/ngrx-counter.component"
import { ObservablesComponent } from "./observables/observables.component"
import { ObservablesService } from "./observables/observables.service"
import { OverridesComponent } from "./overrides/overrides.component"
import { TestOutputButtonComponent } from "./test-output-button/test-output-button.component"

describe('CountComponent', () => {
    let store: MockStore;

    beforeEach(() => {
        mount(CountComponent, {
            declarations: [TestOutputButtonComponent, ObservablesComponent, NgrxCounterComponent, OverridesComponent],
            providers: [ObservablesService, provideMockStore()]
        })

        store = TestBed.inject(MockStore);
    })

    it('can click the child Button that updates state (triggers change detection)', () => {
        cy.get('h3').contains('Total Clicks: 0');
        cy.get('button').contains('Add +').click();
        cy.get('h3').contains('Total Clicks: 1');
      })
    
    it('can increment the ObservablesComponent count by clicking the add button which updates the observables next value in the service and it renders the new value in the component', () => {
        cy.get('h3').contains('Observable Service Count: 0');
        cy.get('button').contains('Subtract -').click();
        cy.get('h3').contains('Observable Service Count: -1');
    })

    it('renders the NgRx Component with no count when no initialState set', () => {
        cy.get('h3').contains('NgRx Counter: ')
    })
})