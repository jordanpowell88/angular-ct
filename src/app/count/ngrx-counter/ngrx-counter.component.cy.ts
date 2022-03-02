import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { MountResponse } from 'projects/angular/src/lib/mount';
import { mount } from "../../../../projects/angular/src/public-api";
import { decrementCount, incrementCount } from '../count-store/count.actions';
import { NgrxCounterComponent } from "./ngrx-counter.component";

describe('NgRxCounterComponent', () => {
    let response: MountResponse<NgrxCounterComponent>
    const initialState = {
        count: {
            count: 0
        }
    }

    let store: MockStore;

    beforeEach(async () => {
        response = await mount(NgrxCounterComponent, {
            providers: [provideMockStore({ initialState })]
        })

        store = response.testBed.inject(MockStore);
    })
    it('can mount', () => {
        cy.get('h3').contains('NgRx Counter: 0');
    })

    it('can increment the count by dispatching action and selectors updates using MockStore.setState', () => {
        cy.get('h3').contains('NgRx Counter: 0');
        cy.spy(store, 'dispatch').as('mockStoreSpy')
        cy.get('button').contains('Increment +').click();
        cy.get('@mockStoreSpy').should('have.been.calledWith', incrementCount()).then(() => {
            store.setState({ count: { count: 100 }})
            response.fixture.detectChanges();
        });
        
        cy.get('h3').contains('NgRx Counter: 100');
    })

    it('can decrement the count by dispatching action and selectors updates using MockStore.setState', () => {
        cy.get('h3').contains('NgRx Counter: 0')
        cy.spy(store, 'dispatch').as('mockStoreSpy');
        cy.get('button').contains('Decrement -').click();
        cy.get('@mockStoreSpy').should('have.been.calledWith', decrementCount());
        // TODO create a custom commond that takes a function and calls changeDetection automatically
        // cy.wrapAndRun(store.setState({ count: 100 }));
        cy.wrap(store).then(() => {
            store.setState({ count: { count: -10 }})
            response.fixture.detectChanges();
        })
        cy.get('h3').contains('NgRx Counter: -10')
    })
})