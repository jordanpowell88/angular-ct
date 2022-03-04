import 'zone.js/testing';
import { MockStore, provideMockStore } from "@ngrx/store/testing"
import { mount } from "../../../../projects/angular/src/public-api"
import { NgrxCounterComponent } from "./ngrx-counter.component"
import { selectCount } from '../count-store/count.selectors';
import { TestBed } from '@angular/core/testing';
import { decrementCount, incrementCount } from '../count-store/count.actions';

describe('NgRxCounterComponent', () => {
    const initialState = {
        count: {
            count: 0
        }
    }

    let store: MockStore;

    beforeEach(() => {
        mount(NgrxCounterComponent, {
            providers: [provideMockStore({ initialState })]
        })

        store = TestBed.inject(MockStore);
    })
    it('can mount', () => {
        cy.get('h3').contains('NgRx Counter: 0');
    })

    it('can increment the count by dispatching action and selectors updates using MockStore.setState', () => {
        cy.get('h3').contains('NgRx Counter: 0');
        cy.spy(store, 'dispatch').as('mockStoreSpy')
        cy.get('button').contains('Increment +').click();
        cy.get('@mockStoreSpy').should('have.been.calledWith', incrementCount())
    })

    it('can decrement the count by dispatching action and selectors updates using MockStore.setState', () => {
        cy.get('h3').contains('NgRx Counter: 0')
        cy.spy(store, 'dispatch').as('mockStoreSpy');
        cy.get('button').contains('Decrement -').click();
        cy.get('@mockStoreSpy').should('have.been.calledWith', decrementCount());
    })
})